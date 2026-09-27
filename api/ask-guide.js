// Serverless Backend Proxy for the Pipeline Guide Helper (Vercel / Netlify / Node)
// Keeps GEMINI_API_KEY 100% hidden on the server (in Environment Variables) and
// enforces 4 layers of cost protection for the open web:
//   1. Ultra-low-cost model: gemini-2.5-flash-lite ($0 on Free Tier, or ~$0.00008/question on Paid Tier)
//   2. Strict input/output caps: max 300 chars input, maxOutputTokens: 260
//   3. In-memory answer cache: identical questions cost $0 and return in 1ms
//   4. Per-IP rate limiting (max 15 requests per 10 minutes per IP) + strict topic lock

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQ_PER_WINDOW = 15;
const ipBuckets = new Map();
const answerCache = new Map();
const MAX_CACHE_ENTRIES = 500;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = ipBuckets.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    ipBuckets.set(ip, { start: now, count: 1 });
    return true;
  }
  if (entry.count >= MAX_REQ_PER_WINDOW) {
    return false;
  }
  entry.count += 1;
  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = (process.env.GEMINI_API_KEY || "").trim();
  if (!apiKey) {
    return res.status(200).json({
      configured: false,
      answer: null
    });
  }

  const clientIp =
    (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      error: "Rate limit reached (max 15 questions per 10 minutes). Try again shortly or browse the A–Z Dictionary."
    });
  }

  const body = req.body || {};
  const rawQuestion = typeof body.question === "string" ? body.question.trim() : "";
  const contextLabel = typeof body.context === "string" ? body.context.slice(0, 80) : "Full pipeline";

  if (!rawQuestion) {
    return res.status(400).json({ error: "Question is required." });
  }

  // Cap input length to 300 characters so nobody can paste huge documents
  const safeQuestion = rawQuestion.slice(0, 300);
  const cacheKey = safeQuestion.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();

  if (answerCache.has(cacheKey)) {
    return res.status(200).json({
      answer: answerCache.get(cacheKey),
      cached: true,
      model: "gemini-2.5-flash-lite"
    });
  }

  const sysPrompt =
    "You are the Pipeline Guide for 'The vibes -> deployed Eng journey — By Lucy', an interactive field guide helping builders learn real-world software engineering. " +
    "Current section: " + contextLabel + ". " +
    "Rules: (1) Only answer questions related to coding, Python, JavaScript/TypeScript, SQL, terminal/CLI commands, Git/GitHub, databases (like Neon, Supabase), cloud hosting (Vercel, Hugging Face, Render, Cloud Run), and software/AI architecture. " +
    "If asked an unrelated question, politely decline in one sentence. " +
    "(2) Explain concepts in plain, concrete English with zero jargon walls and zero hype words. " +
    "(3) Keep your entire answer concise (under 130 words) and include a tiny 1-line example when helpful.";

  try {
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" +
      encodeURIComponent(apiKey);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sysPrompt }] },
        contents: [{ role: "user", parts: [{ text: safeQuestion }] }],
        generationConfig: {
          maxOutputTokens: 260,
          temperature: 0.25
        }
      })
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Upstream model status " + response.status });
    }

    const data = await response.json();
    const answerText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";

    if (!answerText) {
      return res.status(502).json({ error: "Empty response from model." });
    }

    if (answerCache.size >= MAX_CACHE_ENTRIES) {
      const oldestKey = answerCache.keys().next().value;
      if (oldestKey) answerCache.delete(oldestKey);
    }
    answerCache.set(cacheKey, answerText);

    return res.status(200).json({
      answer: answerText,
      cached: false,
      model: "gemini-2.5-flash-lite"
    });
  } catch (err) {
    return res.status(500).json({ error: "Server proxy error." });
  }
}

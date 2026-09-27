#!/usr/bin/env python3
"""Local & Cloud Run server for Deployed Eng Pipeline.

Serves static assets with no-cache headers AND provides the /api/ask-guide
backend proxy endpoint so GEMINI_API_KEY stays hidden on the server.
"""

from collections import OrderedDict
import http.server
import json
import os
import re
import socketserver
import time
import urllib.error
import urllib.parse
import urllib.request

PORT = int(os.environ.get("PORT", "8420"))
RATE_WINDOW_SEC = 600  # 10 minutes
MAX_REQ_PER_WINDOW = 15
MAX_CACHE_ENTRIES = 500

ip_buckets = {}
answer_cache = OrderedDict()


def load_dotenv_if_present():
    env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
    if not os.path.exists(env_path):
        return
    try:
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                k = k.strip()
                v = v.strip().strip('"').strip("'")
                if k and k not in os.environ:
                    os.environ[k] = v
    except OSError:
        pass


def check_rate_limit(ip_addr):
    now = time.time()
    bucket = ip_buckets.get(ip_addr)
    if not bucket or (now - bucket["start"]) > RATE_WINDOW_SEC:
        ip_buckets[ip_addr] = {"start": now, "count": 1}
        return True
    if bucket["count"] >= MAX_REQ_PER_WINDOW:
        return False
    bucket["count"] += 1
    return True


class PipelineRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def _send_json(self, status_code, payload):
        raw = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_POST(self):
        if self.path.split("?")[0] != "/api/ask-guide":
            self._send_json(404, {"error": "Not found"})
            return

        load_dotenv_if_present()
        api_key = (os.environ.get("GEMINI_API_KEY") or "").strip()
        if not api_key:
            self._send_json(200, {
                "configured": False,
                "answer": None
            })
            return

        client_ip = (
            self.headers.get("X-Forwarded-For", "").split(",")[0].strip()
            or self.client_address[0]
            or "unknown"
        )
        if not check_rate_limit(client_ip):
            self._send_json(429, {
                "error": "Rate limit reached (max 15 questions per 10 minutes)."
            })
            return

        content_len = min(int(self.headers.get("Content-Length", "0") or "0"), 8192)
        raw_body = self.rfile.read(content_len).decode("utf-8", errors="replace") if content_len > 0 else "{}"
        try:
            body = json.loads(raw_body)
        except json.JSONDecodeError:
            self._send_json(400, {"error": "Invalid JSON body"})
            return

        question = str(body.get("question") or "").strip()[:300]
        context_label = str(body.get("context") or "Full pipeline").strip()[:80]
        if not question:
            self._send_json(400, {"error": "Question is required"})
            return

        cache_key = re.sub(r"\s+", " ", re.sub(r"[^a-z0-9\s]", "", question.lower())).strip()
        if cache_key in answer_cache:
            self._send_json(200, {
                "answer": answer_cache[cache_key],
                "cached": True,
                "model": "gemini-2.5-flash-lite"
            })
            return

        sys_prompt = (
            "You are the Pipeline Guide for 'The vibes -> deployed Eng journey — By Lucy', "
            "an interactive field guide helping builders learn real-world software engineering. "
            f"Current section: {context_label}. "
            "Rules: (1) Only answer questions related to coding, Python, JavaScript/TypeScript, SQL, "
            "terminal/CLI commands, Git/GitHub, databases (like Neon, Supabase), cloud hosting "
            "(Vercel, Hugging Face, Render, Cloud Run), and software/AI architecture. "
            "If asked an unrelated question, politely decline in one sentence. "
            "(2) Explain concepts in plain, concrete English with zero jargon walls and zero hype words. "
            "(3) Keep your entire answer concise (under 130 words) and include a tiny 1-line example when helpful."
        )

        req_payload = json.dumps({
            "systemInstruction": {"parts": [{"text": sys_prompt}]},
            "contents": [{"role": "user", "parts": [{"text": question}]}],
            "generationConfig": {"maxOutputTokens": 260, "temperature": 0.25}
        }).encode("utf-8")

        url = (
            "https://generativelanguage.googleapis.com/v1beta/models/"
            "gemini-2.5-flash-lite:generateContent?key="
            + urllib.parse.quote(api_key, safe="")
        )

        req = urllib.request.Request(
            url,
            data=req_payload,
            headers={"Content-Type": "application/json"},
            method="POST"
        )
        try:
            with urllib.request.urlopen(req, timeout=12) as resp:
                resp_data = json.loads(resp.read().decode("utf-8"))
            candidates = resp_data.get("candidates") or []
            parts = (candidates[0].get("content") or {}).get("parts") or [] if candidates else []
            answer_text = (parts[0].get("text") or "").strip() if parts else ""
            if not answer_text:
                self._send_json(502, {"error": "Empty model response"})
                return

            if len(answer_cache) >= MAX_CACHE_ENTRIES:
                answer_cache.popitem(last=False)
            answer_cache[cache_key] = answer_text
            self._send_json(200, {
                "answer": answer_text,
                "cached": False,
                "model": "gemini-2.5-flash-lite"
            })
        except (urllib.error.URLError, TimeoutError, KeyError, IndexError) as exc:
            self._send_json(502, {"error": f"Upstream API error: {exc}"})


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PipelineRequestHandler) as httpd:
        print(f"Serving Deployed Eng Pipeline with /api/ask-guide proxy on port {PORT}")
        httpd.serve_forever()

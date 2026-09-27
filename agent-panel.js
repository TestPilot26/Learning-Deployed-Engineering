// Deployed Eng Pipeline — Persistent Side-Panel AI Companion Agent
// Always-available side panel that answers questions about the site AND general
// software engineering / terminal / Git / architecture questions.
// Works out-of-the-box via a comprehensive built-in knowledge engine + optional
// live Gemini API key (stored only in browser localStorage).
// Adheres strictly to BillSkill GM3 standards & SecureCoder (zero innerHTML).

(function () {
  var currentContextStopId = null;
  var currentContextLabel = "Full pipeline";

  var GENERAL_KNOWLEDGE_BASE = [
    {
      keywords: ["text file", "plain text", "word doc", "google doc", "utf-8", "extension", ".js", ".py", ".html", "curly quotes"],
      title: "Plain text files vs. rich documents",
      stopId: "downloading-the-tools",
      answer: "Code files (.html, .js, .py, .json, .md) are plain UTF-8 text files containing raw characters only. Word and Google Docs inject invisible formatting tags and convert straight quotes (\" \") into curly quotes, which breaks code compilers. A code editor like VS Code or Cursor edits pure plain text while adding visual syntax highlighting."
    },
    {
      keywords: ["homebrew", "brew", "package manager", "installer", "dmg", "path", "command not found", "winget", "npm", "pip", "uv"],
      title: "Package managers & language runtimes (e.g. Homebrew, winget, npm, pip/uv)",
      stopId: "downloading-the-tools",
      answer: "• Language runtimes (run code on your computer): Python, Node.js / Bun / Deno (JavaScript/TypeScript), Docker (containers).\n• System package managers (install developer tools on your computer so you never hunt for random installers): Homebrew ('brew') on Mac/Linux, 'winget' on Windows, 'apt' on Linux.\n• Project package managers (install open-source libraries into one project): 'npm' / 'pnpm' (JavaScript) and 'pip' / 'uv' / 'conda' (Python)."
    },
    {
      keywords: ["ide", "code editor", "vs code", "cursor", "windsurf", "claude code", "replit", "colab", "jupyter", "developer environment", "localhost"],
      title: "Code editors, AI IDEs, browser sandboxes & notebooks",
      stopId: "downloading-the-tools",
      answer: "• Desktop Code Editors / IDEs (e.g. VS Code, Cursor, Windsurf, Zed, PyCharm): Combine a file explorer, a plain-text editor, and a built-in terminal.\n• Terminal coding agents: Claude Code, Gemini CLI.\n• Browser sandboxes (zero install): Replit, StackBlitz, CodeSandbox, v0, Bolt, Lovable.\n• Interactive notebooks (run Python cell-by-cell for data & AI): Google Colab, Jupyter Notebooks.\nWhen you run a dev server locally, it serves your project on 'localhost'—a private address only your laptop can see."
    },
    {
      keywords: ["vercel", "deploy", "save on vercel", "hosting", "live url", "production", "netlify", "render", "railway", "cloud run", "hugging face", "spaces", "aws", "ways to host", "do they all need to be apps"],
      title: "Ways to host & share your work (No, not everything needs to be a full web app!)",
      stopId: "system-architecture",
      answer: "Different projects belong on different hosting categories—and not everything needs to be a full web app:\n1. Frontend & full-stack web apps (React, Next.js, HTML/JS): Vercel, Netlify, Cloudflare Pages, Firebase Hosting.\n2. AI demos, ML models, datasets & notebooks (no web app required!): Hugging Face Spaces (turns a 20-line Python Gradio/Streamlit script into a live demo), Hugging Face Hub (models & datasets), Google Colab / Jupyter (interactive notebooks), Replicate, Modal.\n3. Always-on backend servers & Docker containers (Python FastAPI/Flask, long jobs): Render, Railway, Fly.io, DigitalOcean, and the Big 3 cloud providers (Google Cloud Run, AWS, Microsoft Azure).\n4. Free static sites & code packages: GitHub Pages (static docs/blogs), PyPI ('pip install' Python packages), npm ('npm install' JS packages)."
    },
    {
      keywords: ["language", "languages", "python", "javascript", "typescript", "sql", "html", "css", "go", "rust", "which language"],
      title: "Coding languages: Which one does what (pros & cons)",
      stopId: "basic-terminology",
      answer: "• HTML & CSS: Structure and visual styling inside the browser.\n• JavaScript / TypeScript: The only language browsers execute natively; also runs on servers via Node.js. TypeScript adds type safety to catch bugs early.\n• Python: The #1 language for AI/ML, data science (Pandas, Colab), rapid AI demos (Gradio, Streamlit), and clean backend APIs (FastAPI, Flask).\n• SQL: Declarative language for querying relational databases (PostgreSQL, SQLite).\n• Bash / Shell: Terminal commands and automation glue.\n• Go / Rust / C++: Compiled languages for high-speed cloud infrastructure."
    },
    {
      keywords: ["database", "postgres", "postgresql", "supabase", "neon", "sqlite", "mongodb", "firebase", "firestore", "pinecone", "vector", "sql vs nosql", "redis", "cache"],
      title: "Database categories & cloud hosts (SQL, NoSQL, Vector, Cache)",
      stopId: "basic-terminology",
      answer: "Always group databases by category first:\n• Relational / SQL databases (structured tables — best default for 90% of apps): PostgreSQL ('Postgres'), SQLite, MySQL. Popular cloud hosts: Supabase, Neon, Cloud SQL, AWS RDS.\n• Document / NoSQL databases (JSON documents & real-time sync): Firebase / Cloud Firestore, MongoDB, Convex, DynamoDB.\n• Vector databases (AI embeddings & RAG search): pgvector (inside Postgres/Supabase), Pinecone, Weaviate, Chroma.\n• In-memory caches (1ms speed & rate-limiting): Redis, Upstash."
    },
    {
      keywords: ["good architecture", "bad architecture", "fragile", "vibe-coded", "spaghetti", "mistake", "slip up"],
      title: "Good architecture vs. fragile vibe-coded architecture",
      stopId: "basic-terminology",
      answer: "Fragile vibe-coded apps typically fail in 4 ways: (1) putting secret API keys inside frontend browser code, (2) letting the browser mutate database tables without server-side authentication checks, (3) running slow 30-second AI calls synchronously so the page hangs, and (4) skipping idempotency so clicking 'Submit' twice double-charges or duplicates data. Good architecture separates Client UI, Auth/API Server, and Database/Queue boundaries."
    },
    {
      keywords: ["git", "commit", "branch", "pull request", "pr", "merge", "diff"],
      title: "Git essentials: Commit, Branch, Diff, Pull Request (PR) & Merge",
      stopId: "git-and-shipping",
      answer: "• git diff: Shows exact green (+) and red (-) line changes before you save.\n• git commit: Saves a permanent timestamped checkpoint on your laptop.\n• git branch: Creates a parallel timeline so you can test risky AI edits without touching 'main'.\n• Pull Request (PR): A review page on your cloud Git host (GitHub/GitLab) comparing your branch against 'main' with a live preview link.\n• git merge: Joins your verified branch back into 'main' and triggers cloud deployment."
    },
    {
      keywords: ["grep", "what is grep", "grep -rn", "search files", "regular expression print", "ctrl+f", "cmd+f"],
      title: "What is 'grep' (and why do AI agents run 'grep -rn' constantly)?",
      stopId: "cli-and-terminal",
      answer: "'grep' is your terminal's 'Ctrl+F' / 'Cmd+F' across files and folders! Its name comes from an old 1970s Unix editor command: g/re/p (Global Regular Expression Print — meaning: globally search for a text pattern and print every matching line).\n• grep \"TODO\" notes.txt — searches inside one file.\n• grep -rn \"fetchUser\" src/ — searches recursively (-r) through every subfolder in src/ and prints the exact filename and line number (-n) where 'fetchUser' appears.\n• grep -i \"error\" server.log — searches case-insensitively (-i)."
    },
    {
      keywords: ["parent directory", "parent folder", "directory", "subfolder", "child directory", "working directory", "..", "cd ..", "mkdir -p"],
      title: "What is a 'Parent Directory' (..), 'Current Directory' (.), and 'Directory vs. Folder'?",
      stopId: "cli-and-terminal",
      answer: "• Directory = Folder: 'Directory' is 100% the exact same thing as a Folder!\n• The Folder Family Tree: Folders nest inside each other like a family tree (e.g. /Users/lucy/workspace/my-app/src).\n• Current Working Directory (.): The exact folder your terminal is standing inside right now (check with 'pwd').\n• Parent Directory (..): The outer folder ONE level above you that holds your current folder. If you are inside 'my-app/src', then 'my-app' is the parent directory, and typing 'cd ..' steps up into it.\n• Child Directory (Subfolder): A folder sitting inside your current folder (typing 'cd src' steps down into it)."
    },
    {
      keywords: ["trace", "trace a file", "tracing", "walk through", "read code", "happy path"],
      title: "What does it mean to 'trace' a file or trace code?",
      stopId: "reading-code-stability",
      answer: "To 'trace' a file means pretending you are the computer and following the code step-by-step with your eyes from the moment a user clicks a button to the final result:\n1. Start where the user clicks or types input.\n2. Follow what function gets called next and what data is passed in.\n3. Ask at each step: 'What if the internet drops right here, or this value is empty (null)? Does the code show a helpful message, or does it crash silently?'"
    },
    {
      keywords: ["clone", "fork", "copy", "duplicate", "branch vs clone", "git clone"],
      title: "Clone vs. Branch vs. Fork vs. Copy-Pasting a folder",
      stopId: "git-and-shipping",
      answer: "• git clone: Downloads a repository from a cloud Git host (GitHub, GitLab, Hugging Face) onto your laptop for the first time with its full history intact.\n• git branch: Creates a parallel safe timeline inside the folder you already have.\n• Fork: Copies someone else's cloud repository into your own account (used for open-source contributions).\n• Copy-pasting a folder: Breaks version tracking and leads to 'project-final-v3' chaos—use a branch instead!"
    },
    {
      keywords: ["undo", "revert", "reset", "ai broke", "restore", "checkout"],
      title: "How to undo an AI mistake in Git",
      stopId: "git-and-shipping",
      answer: "If an AI edit broke your working code and you haven't committed it yet, run 'git diff' to inspect what changed, or run 'git checkout -- <filename>' (or 'git restore .') to instantly rewind your files to your last clean commit. If you already committed it, 'git revert HEAD' safely undoes that commit."
    },
    {
      keywords: ["env", ".env", "environment variable", "api key", "secret", "gitignore"],
      title: "Environment variables (.env) & keeping secrets safe",
      stopId: "basic-terminology",
      answer: "Never paste API keys directly into .js or .py code files. Store secrets in a local '.env' file on your laptop, add '.env' to your '.gitignore' file so Git never uploads it to public repos, and paste those keys into your cloud host's encrypted Environment Variables / Secrets settings (in Vercel, Render, Cloud Run, Hugging Face Spaces, or Colab Secrets)."
    },
    {
      keywords: ["api", "rest", "json", "http", "get", "post", "status code", "404", "500", "429", "cors"],
      title: "APIs, HTTP methods, status codes & CORS",
      stopId: "basic-terminology",
      answer: "An API is the contract between your frontend UI and backend server. The browser sends an HTTP request (GET to read data, POST to create/mutate data) carrying a JSON payload. Status codes tell you what happened: 200 (OK), 400 (Bad input), 401/403 (Unauthorized), 404 (Not found), 429 (Rate limited), 500 (Server crash). CORS is a browser security rule that blocks unknown websites from calling your private API."
    },
    {
      keywords: ["webhook", "polling", "idempotent", "idempotency", "queue", "async", "synchronous"],
      title: "System dynamics: Webhooks vs. Polling & Idempotency",
      stopId: "system-dynamics",
      answer: "• Polling vs. Webhooks: Polling is your app asking a server 'are you done yet?' every 2 seconds. A Webhook is the server calling your URL back the instant the job finishes.\n• Idempotency: Designing an API request (using a unique idempotency key) so that if a user clicks twice or a network retry fires, the action only executes once."
    },
    {
      keywords: ["study", "research", "stanford", "dora", "metr", "gitclear", "berkeley", "nature", "pendo", "y combinator"],
      title: "Empirical research backing the Deployed Eng Pipeline",
      stopId: "reading-code-stability",
      answer: "Key studies cited across this site:\n• Y Combinator W25: 25% of startups had 95% AI-generated codebases.\n• Google DORA: Every 25% bump in AI adoption correlated with a 7.2% drop in stability without guardrails.\n• GitClear (211M lines): 2-week code churn doubled from 3.3% to 7.1%.\n• Stanford ACM CCS (Perry et al.): Developers using AI wrote less secure code while feeling more confident.\n• UC Berkeley ('Why Johnny Can't Prompt'): Domain vocabulary is the control surface.\n• METR (2025): Blind AI debugging loops slowed developers down by 19%."
    },
    {
      keywords: ["open source", "npm install", "pip install", "package", "library", "template", "shadcn", "node_modules"],
      title: "How to download, use & build on top of open source",
      stopId: "system-architecture",
      answer: "There are 2 ways to build on open source:\n1. Library track (Brick by brick): Run 'npm install <pkg>' (JS) or 'pip install <pkg>' (Python) to snap a specific tool (like Lucide icons, Zod validation, or Stripe) into your existing project.\n2. Full repo track (Whole house frame): Click 'Use this template' or 'Fork' on GitHub, then run 'git clone <url>', 'npm install', and 'cp .env.example .env' to boot a complete working starter app on your laptop in 2 minutes."
    },
    {
      keywords: ["license", "mit", "apache", "gpl", "agpl", "bsd", "copyleft", "legal"],
      title: "Open-source licenses: MIT & Apache 2.0 vs. AGPL & GPL",
      stopId: "system-architecture",
      answer: "• Permissive (Safe for commercial & private apps): MIT, Apache-2.0, BSD, ISC. You can build and ship freely as long as you keep the original copyright notice.\n• Viral Copyleft (Proceed with caution): GPL-3.0 and AGPL-3.0. If you build on an AGPL library and host it over a web server, you can be legally required to open-source your entire application!\n• No LICENSE file: Means 'All Rights Reserved' by default copyright law—do not use."
    },
    {
      keywords: ["watch out", "watch-out", "caution", "slopsquatting", "bill", "rate limit", "upstash", "leak"],
      title: "6 critical watch-outs when building and shipping",
      stopId: "system-architecture",
      answer: "1. License traps: Stick to MIT/Apache-2.0; avoid AGPL/GPL for closed products.\n2. AI 'slopsquatting': Verify AI-suggested package names actually exist on npm/PyPI before installing.\n3. Leaking .env keys: Never put real keys in '.env.example' or commit '.env' to public GitHub.\n4. Runaway cloud bills: Set a hard $10–$25 monthly spend cap and add Upstash rate-limiting before sharing a public URL.\n5. Zombie repos: Avoid libraries unmaintained for 3+ years.\n6. Client trust: Always check auth and prices on the backend server, never just in browser JS."
    },
    {
      keywords: ["how much python", "python in 2026", "dataframe", "pandas", "dictionary", "list of dictionaries", "pydantic", "protobuf", "stack trace", "evals", "golden eval"],
      title: "How much Python you actually need in 2026 (Dicts, DataFrames, Schemas & Evals)",
      stopId: "reading-code-stability",
      answer: "In 2026, don't spend 6 months memorizing Python syntax textbooks—build real projects first with AI as your tutor and focus on reading & debugging 6 building blocks:\n1. Variables & Types (str, int, bool, None).\n2. Dictionaries & Lists -> Tables: One Dictionary {'name': 'Lucy', 'status': 'Doing'} is 1 row; a List of Dictionaries [{...}, {...}] is a whole Table (a Pandas DataFrame in Python/Colab!).\n3. Control flow & Functions (if/else, for-loops, def get_user(id) -> return).\n4. Strict Schemas (Pydantic / JSON Schema / Protobufs) so AI returns predictable fields.\n5. Stack traces: Read crash logs from the very bottom line up (KeyError, TypeError).\n6. Tests & Golden Evals: Test 30–50 real cases (and verify 'move to Doing' stays in Doing!) before shipping."
    },
    {
      keywords: ["head", "git head", "squash", "mkdir vs touch", "mkdir first", "why so many steps"],
      title: "Terminal 'head' vs. Git 'HEAD', 'mkdir' then 'touch', and 'Squash & Merge'",
      stopId: "cli-and-terminal",
      answer: "• Lowercase 'head -n 20 file.txt' (Terminal): Prints the top 20 lines of a file (opposite of 'tail').\n• Uppercase 'HEAD' (Git): Your 'You Are Here' pin pointing to the latest commit snapshot your folder is standing on.\n• 'mkdir' vs 'touch': Always run 'mkdir my-folder' FIRST to build the empty folder box, then 'touch my-folder/file.txt' SECOND to create the empty file inside it!\n• 'Squash & Merge': Combines 5 messy 'WIP / fix typo' commits on your branch into 1 clean commit when merging a Pull Request into main."
    },
    {
      keywords: ["agent", "mcp", "model context protocol", "human in the loop", "prepare confirm", "sensitive data", "separate data"],
      title: "AI Agents, MCP, Human-in-the-Loop ('Prepare -> Confirm') & Data Separation",
      stopId: "system-dynamics",
      answer: "• URL -> Backend Function: Calling '/api/users/42' triggers 'def get_user(42)' on your server, which queries the Database.\n• AI Agents & MCP: An agent runs in a Reason + Act loop calling tools connected via MCP (Model Context Protocol—the universal USB-C plug for tools).\n• Human-in-the-Loop ('Prepare -> Confirm'): Let AI read and summarize freely, but for any action that changes the world (sending emails, deleting data, charging money), stage a Preview Card first and wait for a human 'Approve' click.\n• Code vs. Sensitive Data: Never store private user CSVs or customer records inside your Git code repo—keep code in GitHub and sensitive data in an access-controlled Database or Cloud Storage bucket."
    },
    {
      keywords: ["hide api key", "open web", "low cost", "low-cost", "how does the helper work", "how does this helper work", "serverless proxy", "ask-guide", "flash-lite", "expose api key", "hide the api key"],
      title: "How to run an AI helper on the open web: Hide the API key & keep cost near $0",
      stopId: "basic-terminology",
      answer: "Never put a Google Gemini API key in browser JavaScript (anyone can press F12 -> Network and steal it). Instead, use this 4-layer architecture (built into this repo at '/api/ask-guide'):\n1. Serverless Backend Proxy ('/api/ask-guide'): Browser sends POST /api/ask-guide -> your Vercel/Cloud Run server reads 'GEMINI_API_KEY' from encrypted Environment Variables -> calls Gemini -> returns only the text.\n2. Tier-0 Dictionary Match ($0.00, 0ms): Check the 220+ A–Z Glossary terms in JS first so common definitions never call the LLM.\n3. Use 'gemini-2.5-flash-lite' + Token Caps: Free tier gives ~1,000 req/day for $0; paid tier is $0.10/1M input tokens (~$0.00008 per answer = 10,000 questions for ~$0.85). Cap input to 300 chars and maxOutputTokens to 260.\n4. Server Cache + Per-IP Rate Limit: Cache answers in server memory so repeated questions cost $0, and cap each IP at 15 questions per 10 minutes."
    }
  ];

  var STOP_STARTER_PROMPTS = {
    "default": [
      "What does it mean to 'trace' a file?",
      "How do I hide an API key & keep AI costs near $0?",
      "What is Neon vs Supabase vs Firebase?",
      "How much Python do I need in 2026?"
    ],
    "downloading-the-tools": [
      "What are the main cloud hosting categories?",
      "What is a plain text file vs Word doc?",
      "Why use package managers (Homebrew, npm, pip)?",
      "Code editors vs notebooks (Colab / Jupyter)?"
    ],
    "basic-terminology": [
      "How do I hide an API key & keep AI costs near $0?",
      "Database categories (Neon/Supabase vs Firebase vs Pinecone)?",
      "Python vs TypeScript vs SQL?",
      "Good vs fragile vibe-coded architecture?"
    ],
    "git-and-shipping": [
      "What is 'Squash & Merge' vs Commit?",
      "How does cloud auto-deploy work on merge?",
      "What does 'HEAD' mean in Git?",
      "How do I undo an AI mistake in Git?"
    ],
    "cli-and-terminal": [
      "What is grep (and grep -rn)?",
      "Why is mkdir first and touch second?",
      "Terminal 'head' vs Git 'HEAD'?",
      "What is a parent directory (..)?"
    ],
    "reading-code-stability": [
      "What does it mean to 'trace' a file?",
      "How much Python do I need in 2026?",
      "How do Dicts, Lists & DataFrames fit together?",
      "How do I read a Python stack trace?"
    ],
    "system-dynamics": [
      "What is Human-in-the-Loop ('Prepare -> Confirm')?",
      "Why keep code repos separate from private data?",
      "Webhooks vs polling explained?",
      "What is idempotency?"
    ],
    "system-architecture": [
      "Ways to host (Web apps vs Hugging Face vs Servers)?",
      "How do I download & build on open source?",
      "MIT vs AGPL open-source licenses?",
      "6 watch-outs when shipping to production?"
    ]
  };

  var STOP_WORDS = {
    "what": 1, "whats": 1, "does": 1, "do": 1, "did": 1, "mean": 1, "means": 1,
    "meaning": 1, "is": 1, "are": 1, "was": 1, "were": 1, "the": 1, "to": 1,
    "a": 1, "an": 1, "in": 1, "on": 1, "of": 1, "for": 1, "how": 1, "you": 1,
    "your": 1, "can": 1, "could": 1, "explain": 1, "tell": 1, "me": 1, "about": 1,
    "why": 1, "when": 1, "where": 1, "who": 1, "it": 1, "its": 1, "this": 1,
    "that": 1, "these": 1, "those": 1, "by": 1, "with": 1, "from": 1, "and": 1,
    "or": 1, "vs": 1, "versus": 1, "use": 1, "used": 1, "using": 1, "work": 1,
    "works": 1, "thing": 1, "things": 1, "like": 1, "example": 1, "examples": 1,
    "difference": 1, "between": 1, "file": 1, "files": 1, "code": 1, "app": 1
  };

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function hasKeywordMatch(text, kw) {
    var cleanKw = kw.toLowerCase().trim();
    if (!cleanKw) return false;
    if (cleanKw.indexOf(" ") !== -1 || /[^a-z0-9]/.test(cleanKw)) {
      return text.indexOf(cleanKw) !== -1;
    }
    var re = new RegExp("\\b" + escapeRegExp(cleanKw) + "(?:s|es|ing|ed)?\\b", "i");
    return re.test(text);
  }

  function mapGlossaryGroupToStop(item) {
    var cat = (item.category || "").toLowerCase();
    var term = (item.term || "").toLowerCase();
    if (item.group === "command" || cat.indexOf("terminal") !== -1 || cat.indexOf("cli") !== -1) {
      if (term.indexOf("git ") === 0 || cat.indexOf("git") !== -1) return "git-and-shipping";
      return "cli-and-terminal";
    }
    if (cat.indexOf("git") !== -1 || cat.indexOf("version control") !== -1) return "git-and-shipping";
    if (cat.indexOf("python") !== -1 || cat.indexOf("testing") !== -1 || cat.indexOf("debugging") !== -1 || cat.indexOf("reading code") !== -1) {
      return "reading-code-stability";
    }
    if (cat.indexOf("dynamics") !== -1 || cat.indexOf("realtime") !== -1 || cat.indexOf("queue") !== -1 || cat.indexOf("webhook") !== -1 || cat.indexOf("agent") !== -1) {
      return "system-dynamics";
    }
    if (cat.indexOf("license") !== -1 || cat.indexOf("open-source") !== -1 || cat.indexOf("hosting") !== -1) {
      return "system-architecture";
    }
    return "basic-terminology";
  }

  function searchLocalAnswer(rawQuestion) {
    var q = (rawQuestion || "").trim().toLowerCase();
    if (!q) return null;

    var normalizedQ = q.replace(/['"“”‘’?!.,;:()[\]]/g, " ").replace(/\s+/g, " ").trim();
    var tokens = normalizedQ.split(" ").filter(function (w) {
      return w.length >= 2 && !STOP_WORDS[w];
    });

    // 1. Score against Curated Q&A (GENERAL_KNOWLEDGE_BASE) using word-boundary aware matching
    var bestKb = null;
    var bestKbScore = 0;
    GENERAL_KNOWLEDGE_BASE.forEach(function (entry) {
      var score = 0;
      entry.keywords.forEach(function (kw) {
        if (hasKeywordMatch(normalizedQ, kw) || hasKeywordMatch(q, kw)) {
          score += kw.length + (kw.indexOf(" ") !== -1 ? 14 : 6);
        }
      });
      if (score > bestKbScore) {
        bestKbScore = score;
        bestKb = entry;
      }
    });

    // 2. Score against the 220+ A-Z Master Dictionary (window.getMasterGlossaryItems)
    var bestGlossary = null;
    var bestGlossaryScore = 0;
    if (typeof window.getMasterGlossaryItems === "function") {
      var glossaryItems = window.getMasterGlossaryItems();
      glossaryItems.forEach(function (item) {
        var s = 0;
        var termLower = item.term.toLowerCase();
        // Extract primary headword before parentheses or em-dash, e.g. "Neon", "Trace a file", "pwd"
        var primaryHead = termLower.split(/[—(]/)[0].trim();
        if (primaryHead && primaryHead.length >= 2 && hasKeywordMatch(normalizedQ, primaryHead)) {
          s += 45 + primaryHead.length;
        }
        tokens.forEach(function (tok) {
          if (hasKeywordMatch(termLower, tok)) {
            s += 18;
          } else if (hasKeywordMatch(item.category.toLowerCase(), tok)) {
            s += 6;
          } else if (hasKeywordMatch(item.definition.toLowerCase(), tok)) {
            s += 3;
          }
        });
        if (s > bestGlossaryScore) {
          bestGlossaryScore = s;
          bestGlossary = item;
        }
      });
    }

    // If a specific A-Z glossary term was directly asked about (e.g. "what is Neon?", "what is Drizzle?", "what is Modal?")
    // and didn't hit a multi-word Q&A guide phrase, return the exact glossary entry!
    if (bestGlossary && bestGlossaryScore >= 45 && bestKbScore < 22) {
      var gStopId = mapGlossaryGroupToStop(bestGlossary);
      var gStop = findStopById(gStopId);
      return {
        matched: true,
        title: bestGlossary.term + " · " + bestGlossary.category,
        body: bestGlossary.definition + (bestGlossary.example ? "\n\nExample: " + bestGlossary.example : ""),
        stopId: gStopId,
        stopTitle: gStop ? gStop.title : "Open related stop"
      };
    }

    if (bestKb && bestKbScore >= 8) {
      var matchedStop = findStopById(bestKb.stopId);
      return {
        matched: true,
        title: bestKb.title,
        body: bestKb.answer,
        stopId: bestKb.stopId,
        stopTitle: matchedStop ? matchedStop.title : "Open related stop"
      };
    }

    if (bestGlossary && bestGlossaryScore >= 18) {
      var gStopId2 = mapGlossaryGroupToStop(bestGlossary);
      var gStop2 = findStopById(gStopId2);
      return {
        matched: true,
        title: bestGlossary.term + " · " + bestGlossary.category,
        body: bestGlossary.definition + (bestGlossary.example ? "\n\nExample: " + bestGlossary.example : ""),
        stopId: gStopId2,
        stopTitle: gStop2 ? gStop2.title : "Open related stop"
      };
    }

    // 3. Check exact word-boundary matches in Terminal Vocab
    if (window.TERMINAL_VOCAB_DATA && window.TERMINAL_VOCAB_DATA.items) {
      for (var i = 0; i < window.TERMINAL_VOCAB_DATA.items.length; i++) {
        var v = window.TERMINAL_VOCAB_DATA.items[i];
        var cmdFirst = v.command.toLowerCase().split(" ")[0];
        if (cmdFirst.length >= 2 && hasKeywordMatch(normalizedQ, cmdFirst)) {
          return {
            matched: true,
            title: v.command + " (" + v.name + ")",
            body: v.description + "\n\nExample usage: " + v.example,
            stopId: "cli-and-terminal",
            stopTitle: "Step 4 · Command line interface & the terminal"
          };
        }
      }
    }

    // 4. Honest fallback when no specific term matches offline (never dump an unrelated Stop intro!)
    return {
      matched: false,
      title: "Open-ended question: \"" + rawQuestion.trim() + "\"",
      body: "That specific question didn't match a pre-built card in the 220+ term offline dictionary.\n\n• To get live AI answers for any custom question: Set 'GEMINI_API_KEY' on the server ('/api/ask-guide' uses 'gemini-2.5-flash-lite' at ~$0.00008 per question while keeping the key 100% hidden from browsers), or click the Key icon above to save a personal Gemini key in your browser.\n• Or browse the 'A–Z dictionary & flashcards' button in the top bar to search all 220+ sites, commands, and concepts.",
      stopId: currentContextStopId || "basic-terminology",
      stopTitle: "Explore terminology & app architecture"
    };
  }

  function findStopById(stopId) {
    if (!window.PIPELINE_DATA || !window.PIPELINE_DATA.stops) return null;
    for (var i = 0; i < window.PIPELINE_DATA.stops.length; i++) {
      if (window.PIPELINE_DATA.stops[i].id === stopId) return window.PIPELINE_DATA.stops[i];
    }
    return null;
  }

  function appendAgentMessage(role, titleText, bodyText, stopId, stopTitle) {
    var logEl = document.getElementById("agent-messages-list");
    if (!logEl) return;

    var msgCard = document.createElement("div");
    msgCard.className = "agent-msg-bubble " + (role === "user" ? "agent-msg-user" : "agent-msg-assistant");

    if (titleText) {
      var strong = document.createElement("strong");
      strong.className = "agent-msg-title";
      strong.textContent = titleText;
      msgCard.appendChild(strong);
    }

    var p = document.createElement("p");
    p.className = "agent-msg-text pre-line-text";
    p.textContent = bodyText;
    msgCard.appendChild(p);

    if (stopId && role === "assistant") {
      var jumpBtn = document.createElement("button");
      jumpBtn.type = "button";
      jumpBtn.className = "agent-jump-btn";
      var jIcon = document.createElement("span");
      jIcon.className = "material-symbols-outlined btn-icon-sm";
      jIcon.textContent = "arrow_forward";
      var jSpan = document.createElement("span");
      jSpan.textContent = "Open: " + (stopTitle || stopId);
      jumpBtn.appendChild(jSpan);
      jumpBtn.appendChild(jIcon);
      jumpBtn.addEventListener("click", function () {
        if (typeof window.navigateTo === "function") {
          window.navigateTo("#stop/" + stopId);
        } else {
          window.location.hash = "#stop/" + stopId;
        }
      });
      msgCard.appendChild(jumpBtn);
    }

    logEl.appendChild(msgCard);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function askGeminiLiveIfConfigured(question, onSuccess, onFallback) {
    var browserApiKey = "";
    try { browserApiKey = (localStorage.getItem("PIPELINE_GEMINI_API_KEY") || "").trim(); } catch (e) {}

    // Path A: Try the server-side hidden-key proxy (/api/ask-guide) first unless user explicitly set a browser key
    if (!browserApiKey) {
      fetch("/api/ask-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.slice(0, 300),
          context: currentContextLabel
        })
      })
        .then(function (res) {
          return res.ok ? res.json() : Promise.reject(new Error("Proxy status " + res.status));
        })
        .then(function (data) {
          if (data && data.answer) {
            onSuccess(data.answer, "Pipeline guide (Live Gemini Flash-Lite)");
          } else {
            onFallback();
          }
        })
        .catch(function () {
          onFallback();
        });
      return;
    }

    // Path B: User provided their own personal key in browser localStorage
    var sysPrompt =
      "You are the Pipeline Guide for 'The vibes -> deployed Eng journey — By Lucy', helping builders master deployed software engineering. " +
      "Current section: " + currentContextLabel + ". " +
      "Keep answers direct, plain-English, concise (under 130 words), practical, and free of hype/superlatives. Include a 1-line example when helpful.";

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" + encodeURIComponent(browserApiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sysPrompt }] },
        contents: [{ role: "user", parts: [{ text: question.slice(0, 300) }] }],
        generationConfig: { maxOutputTokens: 260, temperature: 0.25 }
      })
    })
      .then(function (res) { return res.ok ? res.json() : Promise.reject(new Error("API status " + res.status)); })
      .then(function (data) {
        var text = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;
        if (text) onSuccess(text, "Pipeline guide (Live Gemini)");
        else onFallback();
      })
      .catch(function () {
        onFallback();
      });
  }

  function handleUserQuestion(rawQuestion) {
    var q = (rawQuestion || "").trim();
    if (!q) return;

    appendAgentMessage("user", null, q, null, null);

    var localReply = searchLocalAnswer(q);
    var browserApiKey = "";
    try { browserApiKey = (localStorage.getItem("PIPELINE_GEMINI_API_KEY") || "").trim(); } catch (e) {}

    // Instant $0 Layer: If our curated Q&A or 220+ A-Z Dictionary has a high-confidence match
    // and no custom browser key overrides it, return the verified answer immediately in 0ms for $0!
    // Otherwise (or for any open-ended question), query /api/ask-guide (or browser key) and fall back cleanly.
    if (localReply && localReply.matched && !browserApiKey) {
      appendAgentMessage("assistant", localReply.title, localReply.body, localReply.stopId, localReply.stopTitle);
      return;
    }

    askGeminiLiveIfConfigured(
      q,
      function (liveText, label) {
        appendAgentMessage(
          "assistant",
          label || "Pipeline guide (Live Gemini)",
          liveText,
          localReply ? localReply.stopId : null,
          localReply ? localReply.stopTitle : null
        );
      },
      function () {
        if (localReply) {
          appendAgentMessage("assistant", localReply.title, localReply.body, localReply.stopId, localReply.stopTitle);
        }
      }
    );
  }

  var setAgentPanelCollapsedFn = null;
  var setInspectorPanelCollapsedFn = null;
  var popPulseTimer = null;

  function renderStarterChips() {
    var chipsContainer = document.getElementById("agent-starter-chips");
    if (!chipsContainer) return;
    chipsContainer.replaceChildren();

    var prompts = STOP_STARTER_PROMPTS[currentContextStopId] || STOP_STARTER_PROMPTS["default"];
    prompts.forEach(function (promptText) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "agent-starter-chip";
      chip.textContent = promptText;
      chip.addEventListener("click", function () {
        handleUserQuestion(promptText);
      });
      chipsContainer.appendChild(chip);
    });
  }

  function renderDefaultInspectorPlaceholder() {
    var bodyEl = document.getElementById("side-inspector-body");
    if (!bodyEl || bodyEl.children.length > 0) return;
    var h4 = document.createElement("h4");
    h4.textContent = "Click any diagram element to inspect it";
    var p = document.createElement("p");
    p.className = "resource-desc";
    p.textContent = "Whenever you click a stage card, coding language pill, Git node, keyboard key, or path piece inside any step, this left-hand panel opens with a plain-English breakdown and code example.";
    bodyEl.appendChild(h4);
    bodyEl.appendChild(p);
  }

  function showInspectorInSidePanel(populateFn, options) {
    var opts = options || {};
    var bodyEl = document.getElementById("side-inspector-body");
    var inspectorPanelEl = document.getElementById("inspector-side-panel");
    var inspectorBadgeEl = document.getElementById("inspector-context-badge");
    if (!bodyEl || typeof populateFn !== "function") return;

    bodyEl.replaceChildren();
    populateFn(bodyEl);

    if (inspectorBadgeEl) {
      inspectorBadgeEl.textContent = opts.itemTitle || currentContextLabel || "Selected item";
    }

    if (opts.itemTitle) {
      var askWrap = document.createElement("div");
      askWrap.className = "side-inspector-ask-row";
      var askBtn = document.createElement("button");
      askBtn.type = "button";
      askBtn.className = "agent-jump-btn";
      var askIcon = document.createElement("span");
      askIcon.className = "material-symbols-outlined btn-icon-sm";
      askIcon.textContent = "chat";
      var askTxt = document.createElement("span");
      askTxt.textContent = "Ask Pipeline guide about " + opts.itemTitle;
      askBtn.appendChild(askIcon);
      askBtn.appendChild(askTxt);
      askBtn.addEventListener("click", function () {
        if (setAgentPanelCollapsedFn) setAgentPanelCollapsedFn(false);
        handleUserQuestion("Can you explain " + opts.itemTitle + " and how it fits in?");
      });
      askWrap.appendChild(askBtn);
      bodyEl.appendChild(askWrap);
    }

    bodyEl.scrollTop = 0;

    if (opts.autoOpen && setInspectorPanelCollapsedFn) {
      setInspectorPanelCollapsedFn(false);
    }

    if (opts.pulse && inspectorPanelEl) {
      inspectorPanelEl.classList.remove("side-panel-pop-pulse");
      void inspectorPanelEl.offsetWidth;
      inspectorPanelEl.classList.add("side-panel-pop-pulse");
      if (popPulseTimer) clearTimeout(popPulseTimer);
      popPulseTimer = setTimeout(function () {
        inspectorPanelEl.classList.remove("side-panel-pop-pulse");
      }, 650);
    }
  }

  function initAgentPanel() {
    var agentPanelEl = document.getElementById("agent-side-panel");
    var toggleAgentBtn = document.getElementById("btn-toggle-agent-panel");
    var collapseAgentBtn = document.getElementById("btn-collapse-agent-panel");
    var floatingOpenGuideBtn = document.getElementById("btn-floating-open-guide");

    var inspectorPanelEl = document.getElementById("inspector-side-panel");
    var toggleInspectorBtn = document.getElementById("btn-toggle-inspector-panel");
    var collapseInspectorBtn = document.getElementById("btn-collapse-inspector-panel");

    var formEl = document.getElementById("form-agent-question");
    var inputEl = document.getElementById("input-agent-question");
    var clearBtnEl = document.getElementById("btn-clear-agent-question");
    var keyToggleBtn = document.getElementById("btn-agent-api-key-toggle");
    var keyDrawerEl = document.getElementById("agent-key-drawer");
    var keyInputEl = document.getElementById("input-agent-api-key");
    var keyClearBtnEl = document.getElementById("btn-clear-agent-api-key");
    var keySaveBtnEl = document.getElementById("btn-save-agent-api-key");

    if (!agentPanelEl) return;

    if (inputEl && clearBtnEl && window.InlineClear) {
      window.InlineClear.bind(inputEl, clearBtnEl, function () {});
    }

    if (keyInputEl && keyClearBtnEl && window.InlineClear) {
      try { keyInputEl.value = localStorage.getItem("PIPELINE_GEMINI_API_KEY") || ""; } catch (e) {}
      window.InlineClear.bind(keyInputEl, keyClearBtnEl, function () {
        try { localStorage.removeItem("PIPELINE_GEMINI_API_KEY"); } catch (e) {}
      });
    }

    function setAgentPanelCollapsed(collapsed) {
      if (collapsed) {
        agentPanelEl.classList.add("collapsed");
        document.body.classList.add("agent-panel-collapsed");
        if (toggleAgentBtn) toggleAgentBtn.classList.remove("active");
      } else {
        agentPanelEl.classList.remove("collapsed");
        document.body.classList.remove("agent-panel-collapsed");
        if (toggleAgentBtn) toggleAgentBtn.classList.add("active");
      }
      setTimeout(function () {
        if (typeof window.updatePathwayGeometry === "function") window.updatePathwayGeometry();
      }, 220);
    }
    setAgentPanelCollapsedFn = setAgentPanelCollapsed;

    function setInspectorPanelCollapsed(collapsed) {
      if (!inspectorPanelEl) return;
      if (collapsed) {
        inspectorPanelEl.classList.add("collapsed");
        document.body.classList.add("inspector-panel-collapsed");
        if (toggleInspectorBtn) toggleInspectorBtn.classList.remove("active");
      } else {
        renderDefaultInspectorPlaceholder();
        inspectorPanelEl.classList.remove("collapsed");
        document.body.classList.remove("inspector-panel-collapsed");
        if (toggleInspectorBtn) toggleInspectorBtn.classList.add("active");
      }
      setTimeout(function () {
        if (typeof window.updatePathwayGeometry === "function") window.updatePathwayGeometry();
      }, 220);
    }
    setInspectorPanelCollapsedFn = setInspectorPanelCollapsed;

    // Start with the Guide panel open on the right, and Selected Item panel collapsed on the left
    setAgentPanelCollapsed(false);
    setInspectorPanelCollapsed(true);
    renderDefaultInspectorPlaceholder();

    if (toggleAgentBtn) {
      toggleAgentBtn.addEventListener("click", function () {
        setAgentPanelCollapsed(!agentPanelEl.classList.contains("collapsed"));
      });
    }

    if (collapseAgentBtn) {
      collapseAgentBtn.addEventListener("click", function () {
        setAgentPanelCollapsed(true);
      });
    }

    if (floatingOpenGuideBtn) {
      floatingOpenGuideBtn.addEventListener("click", function () {
        setAgentPanelCollapsed(false);
      });
    }

    if (toggleInspectorBtn && inspectorPanelEl) {
      toggleInspectorBtn.addEventListener("click", function () {
        setInspectorPanelCollapsed(!inspectorPanelEl.classList.contains("collapsed"));
      });
    }

    if (collapseInspectorBtn) {
      collapseInspectorBtn.addEventListener("click", function () {
        setInspectorPanelCollapsed(true);
      });
    }

    if (keyToggleBtn && keyDrawerEl) {
      keyToggleBtn.addEventListener("click", function () {
        var isHidden = keyDrawerEl.style.display === "none" || !keyDrawerEl.style.display;
        keyDrawerEl.style.display = isHidden ? "flex" : "none";
      });
    }

    if (keySaveBtnEl && keyInputEl && keyDrawerEl) {
      keySaveBtnEl.addEventListener("click", function () {
        var val = (keyInputEl.value || "").trim();
        try {
          if (val) localStorage.setItem("PIPELINE_GEMINI_API_KEY", val);
          else localStorage.removeItem("PIPELINE_GEMINI_API_KEY");
        } catch (e) {}
        keyDrawerEl.style.display = "none";
        appendAgentMessage(
          "assistant",
          val ? "Live Gemini API key saved locally" : "Switched to built-in pipeline knowledge",
          val ? "Your key is stored only in your browser's localStorage. Ask any open-ended coding or architecture question!" : "Using the built-in offline knowledge engine covering all stops, terminal vocab, languages, and Git workflows.",
          null,
          null
        );
      });
    }

    if (formEl && inputEl) {
      formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = inputEl.value;
        if (!q || !q.trim()) return;
        inputEl.value = "";
        if (clearBtnEl) clearBtnEl.style.display = "none";
        handleUserQuestion(q);
      });
    }

    renderStarterChips();
    appendAgentMessage(
      "assistant",
      "Ask anything as you go",
      "Ask about any stop on this site, terminal commands (e.g. grep, pwd), coding languages (Python vs TypeScript vs SQL), Git (branch vs clone vs PR), or how your laptop connects to GitHub and Vercel.",
      null,
      null
    );
  }

  window.PipelineAgent = {
    init: initAgentPanel,
    setContext: function (stopId, label) {
      currentContextStopId = stopId || null;
      currentContextLabel = label || "Full pipeline";
      var badgeEl = document.getElementById("agent-context-badge");
      if (badgeEl) badgeEl.textContent = currentContextLabel;
      renderStarterChips();
      // Keep the Selected Item panel collapsed when entering a new stop/view until the user clicks on something
      if (setInspectorPanelCollapsedFn) {
        setInspectorPanelCollapsedFn(window.location.search.indexOf("inspect=1") === -1);
      }
    },
    setTab: function () {},
    setInspectorCollapsed: function (collapsed) {
      if (setInspectorPanelCollapsedFn) setInspectorPanelCollapsedFn(Boolean(collapsed));
    },
    setGuideCollapsed: function (collapsed) {
      if (setAgentPanelCollapsedFn) setAgentPanelCollapsedFn(Boolean(collapsed));
    },
    showInspector: showInspectorInSidePanel
  };
})();

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
      keywords: ["homebrew", "brew", "package manager", "installer", "dmg", "path", "command not found"],
      title: "Why engineers use Homebrew (package managers)",
      stopId: "downloading-the-tools",
      answer: "Homebrew ('brew') is the standard package manager for macOS and Linux. When you download random installers from websites, binaries often land in folders your terminal doesn't check (causing 'command not found'). Running 'brew install node git' installs verified developer tools into one clean directory and wires up your system PATH automatically."
    },
    {
      keywords: ["ide", "code editor", "vs code", "cursor", "developer environment", "localhost"],
      title: "What an IDE / developer environment actually is",
      stopId: "downloading-the-tools",
      answer: "An IDE (Integrated Development Environment) like VS Code or Cursor is your local workshop. It combines three things in one window: (1) a file explorer showing your project folder, (2) a plain-text code editor, and (3) an integrated terminal running inside that folder. When you run a dev server, it serves your app on 'localhost'—a private address only your laptop can see."
    },
    {
      keywords: ["vercel", "deploy", "save on vercel", "hosting", "live url", "production"],
      title: "What 'deploying to Vercel' physically means",
      stopId: "downloading-the-tools",
      answer: "Saving a file (Cmd+S) only updates your laptop's hard drive. When you 'git push' to GitHub, GitHub notifies Vercel via a webhook. Vercel spins up a clean Linux container in the cloud, downloads your GitHub commit, runs your build step, and publishes the output to a public https:// URL on a global Content Delivery Network (CDN)."
    },
    {
      keywords: ["language", "languages", "python", "javascript", "typescript", "sql", "html", "css", "go", "rust", "which language"],
      title: "Coding languages: Which one does what (pros & cons)",
      stopId: "basic-terminology",
      answer: "• HTML & CSS: Structure and visual styling inside the browser.\n• JavaScript / TypeScript: The only language browsers execute natively; also runs on servers via Node.js. TypeScript adds type safety to catch bugs early.\n• Python: The #1 language for AI/ML, data science, and clean backend APIs (FastAPI), though slower at raw CPU concurrency than Go.\n• SQL: Declarative language for querying relational databases (PostgreSQL, SQLite).\n• Bash / Shell: Terminal commands and automation glue.\n• Go / Rust: Compiled languages for high-speed cloud infrastructure."
    },
    {
      keywords: ["database", "postgres", "postgresql", "supabase", "sqlite", "mongodb", "sql vs nosql", "redis", "cache"],
      title: "Databases & caching (PostgreSQL, Supabase, Redis)",
      stopId: "basic-terminology",
      answer: "• PostgreSQL (often hosted on Supabase or Neon): The gold-standard relational SQL database. Best for 95% of apps because user data has strict relationships and needs ACID transactions.\n• SQLite: A full SQL database stored in a single file—great for local tools and prototypes.\n• Redis / Upstash: An ultra-fast in-memory key-value store used for caching frequent reads (<5ms), rate-limiting, and background job queues."
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
      answer: "• git diff: Shows exact green (+) and red (-) line changes before you save.\n• git commit: Saves a permanent timestamped checkpoint on your laptop.\n• git branch: Creates a parallel timeline so you can test risky AI edits without touching 'main'.\n• Pull Request (PR): A review page on GitHub comparing your branch against 'main' with a live preview link.\n• git merge: Joins your verified branch back into 'main' and triggers production deployment."
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
      answer: "• git clone: Downloads a repository from GitHub onto your laptop for the first time with its full history and remote link intact.\n• git branch: Creates a parallel safe timeline inside the folder you already have.\n• Fork: Copies someone else's repo into your own GitHub account (used for open-source contributions).\n• Copy-pasting a folder: Breaks version tracking and leads to 'project-final-v3' chaos—use a branch instead!"
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
      answer: "Never paste API keys directly into .js or .py code files. Store secrets in a local '.env' file on your laptop, add '.env' to your '.gitignore' file so Git never uploads it to GitHub, and paste those keys into Vercel's encrypted Environment Variables settings for production."
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
      answer: "There are 2 ways to build on open source:\n1. Library track (Brick by brick): Run 'npm install <pkg>' (JS) or 'pip install <pkg>' (Python) to snap a specific tool (like Lucide icons, Zod validation, or Stripe) into your existing project.\n2. Full repo track (Whole house frame): Click 'Use this template' or 'Fork' on GitHub (or browse Vercel Templates), then run 'git clone <url>', 'npm install', and 'cp .env.example .env' to boot a complete working starter app on your laptop in 2 minutes."
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
    }
  ];

  var STOP_STARTER_PROMPTS = {
    "default": [
      "How much Python do I need in 2026?",
      "What is grep (and grep -rn)?",
      "How do Laptop, GitHub & Vercel connect?",
      "How do I build on top of open source?"
    ],
    "downloading-the-tools": [
      "What is a plain text file vs Word doc?",
      "Why use Homebrew instead of installers?",
      "What does deploying to Vercel actually do?",
      "What is localhost?"
    ],
    "basic-terminology": [
      "Python vs TypeScript vs SQL?",
      "Good vs fragile vibe-coded architecture?",
      "What is an API and JSON?",
      "Where do secret .env API keys go?"
    ],
    "git-and-shipping": [
      "What is 'Squash & Merge' vs Commit?",
      "What does 'HEAD' mean in Git?",
      "Branch vs clone vs fork?",
      "How do I undo an AI mistake in Git?"
    ],
    "cli-and-terminal": [
      "What is grep (and grep -rn)?",
      "Why is mkdir first and touch second?",
      "Terminal 'head' vs Git 'HEAD'?",
      "What is a parent directory (..)?"
    ],
    "reading-code-stability": [
      "How much Python do I need in 2026?",
      "How do Dicts, Lists & DataFrames fit together?",
      "How do I read a Python stack trace?",
      "What are Golden Evals & unit tests?"
    ],
    "system-dynamics": [
      "What is Human-in-the-Loop ('Prepare -> Confirm')?",
      "Why keep code repos separate from private data?",
      "Webhooks vs polling explained?",
      "What is idempotency?"
    ],
    "system-architecture": [
      "How do I download & build on open source?",
      "MIT vs AGPL open-source licenses?",
      "What is AI 'slopsquatting'?",
      "6 watch-outs when shipping to production?"
    ]
  };

  function searchLocalAnswer(rawQuestion) {
    var q = (rawQuestion || "").trim().toLowerCase();
    if (!q) return null;

    // 1. Check exact or partial matches in Terminal Vocab (31 commands)
    if (window.TERMINAL_VOCAB_DATA && window.TERMINAL_VOCAB_DATA.items) {
      for (var i = 0; i < window.TERMINAL_VOCAB_DATA.items.length; i++) {
        var v = window.TERMINAL_VOCAB_DATA.items[i];
        var cmdClean = v.command.toLowerCase();
        if (
          q === cmdClean ||
          q.indexOf(" " + cmdClean + " ") !== -1 ||
          q.indexOf(cmdClean.split(" ")[0]) !== -1 && (q.indexOf("command") !== -1 || q.indexOf("what does") !== -1 || q.indexOf("terminal") !== -1 || q.length <= 14)
        ) {
          return {
            title: v.command + " (" + v.name + ")",
            body: v.description + "\n\nExample usage: " + v.example,
            stopId: "cli-and-terminal",
            stopTitle: "Step 4 · Command line interface & the terminal"
          };
        }
      }
    }

    // 2. Score against GENERAL_KNOWLEDGE_BASE
    var bestMatch = null;
    var bestScore = 0;
    GENERAL_KNOWLEDGE_BASE.forEach(function (entry) {
      var score = 0;
      entry.keywords.forEach(function (kw) {
        if (q.indexOf(kw) !== -1) score += kw.length + 3;
      });
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    });

    if (bestMatch && bestScore > 0) {
      var matchedStop = findStopById(bestMatch.stopId);
      return {
        title: bestMatch.title,
        body: bestMatch.answer,
        stopId: bestMatch.stopId,
        stopTitle: matchedStop ? matchedStop.title : "Open related stop"
      };
    }

    // 3. Search across all PIPELINE_DATA stops, experiences, and resources
    if (window.PIPELINE_DATA && window.PIPELINE_DATA.stops) {
      var words = q.split(/\s+/).filter(function (w) { return w.length > 2; });
      var bestStop = null;
      var bestStopScore = 0;
      window.PIPELINE_DATA.stops.forEach(function (st) {
        var haystack = (st.title + " " + st.teaser + " " + st.explainer + " " +
          (st.experiences || []).map(function (e) { return e.lead + " " + e.body; }).join(" ")
        ).toLowerCase();
        var s = 0;
        words.forEach(function (w) {
          if (haystack.indexOf(w) !== -1) s += 2;
        });
        if (s > bestStopScore) {
          bestStopScore = s;
          bestStop = st;
        }
      });
      if (bestStop && bestStopScore > 0) {
        var expSummary = (bestStop.experiences || []).map(function (e) {
          return "• " + e.lead + " " + e.body;
        }).join("\n");
        return {
          title: bestStop.title,
          body: bestStop.explainer + (expSummary ? "\n\n" + expSummary : ""),
          stopId: bestStop.id,
          stopTitle: bestStop.title
        };
      }
    }

    // 4. Thoughtful general engineering fallback
    return {
      title: "How to think about \"" + rawQuestion.trim() + "\"",
      body: "Here is a structured way to break that down as a deployed engineer:\n• Layer check: Ask whether this lives on your Laptop (Localhost/CLI), in the Browser UI (HTML/CSS/JS), on the Backend Server (Python/Node/Go), or in the Database (SQL).\n• Mechanism check: Name the exact data input, state change, and failure mode rather than describing UI symptoms.\n• Tip: Click any quick topic below or add an optional Gemini API key (via the key icon above) to query live AI for open-ended questions outside the pipeline curriculum.",
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
    var apiKey = "";
    try { apiKey = (localStorage.getItem("PIPELINE_GEMINI_API_KEY") || "").trim(); } catch (e) {}
    if (!apiKey) {
      onFallback();
      return;
    }

    var sysPrompt = "You are the Pipeline Guide for 'Deployed Eng Pipeline — By Lucy', helping non-traditional and vibe-coding engineers master deployed software engineering. Current page context: " + currentContextLabel + ". Keep answers direct, concise (under 140 words), practical, and free of hype/superlatives. Use bullet points where helpful.";

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + encodeURIComponent(apiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sysPrompt }] },
        contents: [{ role: "user", parts: [{ text: question }] }]
      })
    })
      .then(function (res) { return res.ok ? res.json() : Promise.reject(new Error("API status " + res.status)); })
      .then(function (data) {
        var text = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;
        if (text) onSuccess(text);
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
    var apiKey = "";
    try { apiKey = (localStorage.getItem("PIPELINE_GEMINI_API_KEY") || "").trim(); } catch (e) {}

    if (apiKey) {
      askGeminiLiveIfConfigured(
        q,
        function (liveText) {
          appendAgentMessage("assistant", "Pipeline guide (Live Gemini)", liveText, localReply ? localReply.stopId : null, localReply ? localReply.stopTitle : null);
        },
        function () {
          appendAgentMessage("assistant", localReply.title, localReply.body, localReply.stopId, localReply.stopTitle);
        }
      );
    } else if (localReply) {
      appendAgentMessage("assistant", localReply.title, localReply.body, localReply.stopId, localReply.stopTitle);
    }
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

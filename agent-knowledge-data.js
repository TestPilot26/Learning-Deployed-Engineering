// Deployed Eng Pipeline — Curated Knowledge Base & Context Starter Prompts
// Powers the Pipeline Guide's instant, verified answers for common troubleshooting,
// workflow, architecture, Git, terminal, Python, API/MCP, and deployment questions.
// Modularized from agent-panel.js to keep all files well under the 800-line limit.

(function () {
  var GENERAL_KNOWLEDGE_BASE = [
    {
      keywords: [
        "broken", "code is broken", "fix it", "how do i fix", "not working", "isnt working",
        "doesn't work", "doesnt work", "crashed", "crashing", "crash", "bug", "bugs",
        "error", "errors", "debug", "debugging", "something broke", "everything broke",
        "stopped working", "help me fix", "fix my code", "fix a bug", "troubleshoot"
      ],
      title: "How to fix broken code: The 4-step debugging workflow",
      stopId: "reading-code-stability",
      answer: "When your code breaks or stops working, don't guess or ask AI to 'fix everything' blindly—follow this 4-step checklist:\n\n1. Read the exact error message (bottom line first):\n   • In Terminal / Python: Look at the very last line of the crash log (stack trace) for the exact error type (e.g. KeyError, TypeError, SyntaxError, ModuleNotFoundError) and the filename + line number right above it.\n   • In your Web Browser: Press Cmd+Option+I (Mac) or F12 (Windows) and click the 'Console' tab to see red JavaScript or network errors.\n2. Check what just changed ('git diff'):\n   • Run 'git status' and 'git diff' in your terminal to see the exact green (+) and red (-) lines changed since your app last worked.\n3. Rewind a bad edit in 1 command if needed:\n   • If an AI edit broke a working file and you haven't committed yet, run 'git checkout -- <filename>' (or 'git restore .') to instantly rewind to your last working checkpoint.\n4. Give a full AI coding agent the exact error + line:\n   • Copy the red error message + filename + line number into your coding agent (Claude Code, Cursor, Copilot, or ChatGPT) and ask: \"Explain why line X in file Y threw this error before changing any code.\""
    },
    {
      keywords: [
        "blank page", "white screen", "blank screen", "nothing shows", "not showing up",
        "changes not showing", "didnt update", "didn't update", "not updating",
        "hard refresh", "cache", "browser cache", "localhost not working", "connection refused"
      ],
      title: "Why is my page blank or not showing my latest changes?",
      stopId: "reading-code-stability",
      answer: "If your web page is blank or refuses to show your latest edits, check these 4 culprits in order:\n\n1. Hard-refresh your browser cache: Press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows). Browsers aggressively cache old .js and .css files.\n2. Open the Browser Console (Cmd+Option+I or F12 -> Console): A single missing bracket or typo in JavaScript throws a red 'Uncaught SyntaxError' that halts the entire page from rendering.\n3. Check your Terminal window: Is your local server ('npm run dev' or 'python3 -m http.server') still running, or did it stop/crash? If you see 'ERR_CONNECTION_REFUSED', restart your server command in Terminal.\n4. Check for unsaved files: Look at the file tab in VS Code or Cursor—a solid dot next to the filename means you haven't pressed Cmd+S / Ctrl+S to save yet."
    },
    {
      keywords: [
        "who are you", "what are you", "are you an ai", "are you an agent", "full ai agent",
        "what can you do", "what can you answer", "write code for me", "build me an app",
        "navigator", "pipeline guide", "how do you work"
      ],
      title: "About the Pipeline Guide: Navigator vs. full AI coding agent",
      stopId: "downloading-the-tools",
      answer: "I'm a pipeline navigator built for this learning guide—not a full AI coding agent.\n\n• What I CAN do: Explain software engineering concepts across all 8 steps of the pipeline, walk you through debugging checklists, explain terminal & Git commands, compare tools/databases/languages, and search the 320+ terms in the A–Z dictionary.\n• What I CANNOT do: Unlike a full AI coding agent (such as Claude Code, Cursor, Gemini, or ChatGPT), I can't inspect your computer's files, write custom application code for your project, or answer arbitrary off-topic questions."
    },
    {
      keywords: [
        "start a project", "new project", "from scratch", "where do i start", "how to start",
        "first step", "first steps", "begin coding", "start building", "how do i build an app"
      ],
      title: "How to start a new project from scratch (5-step checklist)",
      stopId: "downloading-the-tools",
      answer: "1. Create a clean project folder: Open Terminal and run 'mkdir my-app && cd my-app'.\n2. Open your folder in a Code Editor / AI IDE: Run 'code .' (VS Code) or 'cursor .' (Cursor), or launch a terminal agent like 'claude'.\n3. Initialize Git & '.gitignore' before adding secrets: Run 'git init' and create a '.gitignore' file listing '.env' and 'node_modules/' (or '.venv/').\n4. Add a short 'AGENTS.md' or 'CLAUDE.md' rulebook: Write 10 bullet points explaining what your app does, which stack it uses, and rule #1 ('ask before making large changes').\n5. Build & commit one small slice at a time: Get a minimal page running on 'localhost' first, verify it in your browser, and run 'git commit -m \"Initial working page\"' before asking AI for the next feature."
    },
    {
      keywords: [
        "add a readme", "create a readme", "readme", "readme.md", "where to click readme",
        "add file", "gitignore", ".gitignore", "how to add readme"
      ],
      title: "Where to click to add a README.md or .gitignore file",
      stopId: "downloading-the-tools",
      answer: "You can add a README.md (your project's front-page instruction manual) or .gitignore (the list of secret/heavy files Git must never upload) in two ways:\n\n1. On GitHub.com when creating a repo: On the 'Create a new repository' screen, toggle 'Add a README file' ON and select a '.gitignore template' (e.g. Python or Node) before clicking 'Create repository'.\n2. On an existing GitHub repo page: Click the 'Add file ▾' button in the top file-bar row (right next to the green '<> Code' button) -> 'Create new file' -> type 'README.md'.\n3. In your local Terminal: Run 'touch README.md .gitignore' inside your project folder, edit them in VS Code/Cursor, and commit them with Git."
    },
    {
      keywords: [
        "push to github", "git push", "update vercel", "keep making changes", "carry on making changes",
        "deploy to vercel", "link github to vercel", "connect github to vercel", "publish website",
        "how to deploy", "save changes to github"
      ],
      title: "How to push changes to GitHub & automatically update your live Vercel site",
      stopId: "git-and-shipping",
      answer: "Yes—once your GitHub repository is connected to Vercel, you can keep editing on your laptop forever and every push updates your live site automatically:\n\n1. Link once on Vercel.com: Sign in to vercel.com with GitHub -> click 'Add New... -> Project' -> click 'Import' next to your GitHub repo -> click 'Deploy'.\n2. Your repeatable 3-command update loop on your laptop:\n   • git add . (stage your modified files)\n   • git commit -m \"Describe your update\" (save a local checkpoint)\n   • git push (upload to GitHub)\n3. Automatic deployment: Within ~30 seconds of 'git push', Vercel detects the new commit on 'main', builds it, and updates your public URL automatically."
    },
    {
      keywords: [
        "push rejected", "git push failed", "merge conflict", "conflict", "non-fast-forward",
        "git pull", "diverged"
      ],
      title: "Why 'git push' failed or showed a Merge Conflict (and how to fix it)",
      stopId: "git-and-shipping",
      answer: "• Why 'git push' gets rejected ('non-fast-forward'): GitHub has a newer commit (for example, you edited a README on GitHub.com) that your laptop doesn't have yet. Run 'git pull --rebase' first to download GitHub's latest commit, then run 'git push'.\n• What a Merge Conflict is: Two places edited the exact same lines of the same file. Open the file in VS Code or Cursor—it highlights the two versions ('Current Change' vs. 'Incoming Change') with 1-click buttons to pick the right lines, save, and run 'git commit'."
    },
    {
      keywords: [
        "mcp", "mcp vs api", "api vs mcp", "api and mcp", "api and an mcp", "mcp and api",
        "difference between api and mcp", "what is mcp", "model context protocol",
        "how to build an mcp", "fastmcp", "mcp server", "usb-c for ai"
      ],
      title: "API vs. MCP (Model Context Protocol): How they differ and fit together",
      stopId: "system-dynamics",
      answer: "• API (Application Programming Interface): The classic waiter/menu contract between two software programs. Your code sends a specific HTTP request (e.g. 'GET /api/forecast?lat=51.5') and gets structured JSON back. Every API has its own custom URLs and parameters.\n• MCP (Model Context Protocol): A universal standard—like a USB-C port for AI agents—that wraps around APIs, databases, or local files. An MCP Server (built in ~15 lines of Python with 'FastMCP' and '@mcp.tool()') advertises Tools, Resources, and Prompts in a standard format so any AI Host (Claude Desktop, Cursor, custom agents) can discover and call them automatically.\n• How they work together: MCP does not replace APIs! Most MCP servers call traditional REST APIs or SQL databases under the hood on the AI agent's behalf."
    },
    {
      keywords: [
        "frontend vs backend", "front end vs back end", "client vs server", "frontend", "backend",
        "full stack", "fullstack"
      ],
      title: "Frontend (Client) vs. Backend (Server) vs. Database",
      stopId: "basic-terminology",
      answer: "• Frontend (Client): Everything that runs visibly inside the user's web browser (HTML, CSS, JavaScript/React). Because any user can inspect browser code with F12, never put secret API keys or trust security rules here.\n• Backend (Server): Private code running on your cloud server (Python FastAPI/Flask or Node.js). It checks user permissions, holds secret '.env' API keys, calls AI models, and talks to the database.\n• Database: Where permanent records (users, posts, orders) are stored on disk so data survives when the server restarts."
    },
    {
      keywords: [
        "localhost", "127.0.0.1", "port 3000", "port 8000", "address already in use", "eaddrinuse", "port"
      ],
      title: "What is 'localhost' and a port number (e.g. localhost:3000)?",
      stopId: "downloading-the-tools",
      answer: "• localhost (127.0.0.1): A private loopback web address that points directly to your own laptop. When you run a dev server, 'http://localhost:3000' lets you test your site in Chrome before anyone on the internet can see it.\n• Port number (:3000, :5173, :8000): Like an apartment number on your computer so multiple servers can run at once.\n• Fix 'Address already in use' (EADDRINUSE): Another terminal tab is already using that port. Run 'lsof -i :3000' to find its Process ID (PID), then 'kill -9 <PID>' (or press Ctrl+C in the old terminal tab)."
    },
    {
      keywords: [
        "rag", "retrieval augmented generation", "fine tuning", "fine-tuning", "embeddings", "vector search"
      ],
      title: "RAG (Retrieval-Augmented Generation) vs. Fine-Tuning",
      stopId: "basic-terminology",
      answer: "• RAG (Retrieval-Augmented Generation): Searching your own database or documents (using SQL or vector embeddings) for the most relevant paragraphs and pasting them into the AI's prompt right before it answers. Best for giving AI fresh facts, company docs, and citations without retraining.\n• Fine-Tuning: Training a model's weights on thousands of examples to change its tone, style, or specialized format. Start with RAG + clear prompts first for 95% of applications."
    },
    {
      keywords: [
        "auth", "authentication", "authorization", "login", "oauth", "jwt", "session cookie", "clerk", "supabase auth"
      ],
      title: "Authentication (Who are you?) vs. Authorization (What are you allowed to do?)",
      stopId: "basic-terminology",
      answer: "• Authentication (AuthN): Verifying who the user is (e.g. 'Sign in with Google' via OAuth, magic email links, or Clerk / Supabase Auth).\n• Authorization (AuthZ): Checking on the backend server whether that logged-in user actually owns the row they are trying to view or edit.\n• Golden rule: Never build raw password hashing from scratch—use a battle-tested provider (Supabase Auth, Clerk, Auth.js, or Firebase Auth)."
    },
    {
      keywords: [
        "test", "testing", "unit test", "pytest", "vitest", "playwright", "how to test"
      ],
      title: "How to test your code: Unit tests, E2E browser tests & Golden AI evals",
      stopId: "reading-code-python",
      answer: "1. Unit tests ('pytest' in Python, 'vitest' in JS): Fast 1-second checks that feed inputs into a single function and assert the output matches what you expect.\n2. End-to-end (E2E) browser tests ('Playwright'): Opens a real headless browser, clicks buttons, fills forms, and verifies your UI and backend work together.\n3. Golden AI Evals: A saved table of 30–50 realistic user questions and expected answers that you run whenever you change your system prompt or model."
    },
    {
      keywords: [
        "text file", "plain text", "word doc", "google doc", "utf-8", "extension",
        ".js", ".py", ".html", "curly quotes"
      ],
      title: "Plain text files vs. rich documents",
      stopId: "downloading-the-tools",
      answer: "Code files (.html, .js, .py, .json, .md) are plain UTF-8 text files containing raw characters only. Word and Google Docs inject invisible formatting tags and convert straight quotes (\" \") into curly quotes, which breaks code compilers. A code editor like VS Code or Cursor edits pure plain text while adding visual syntax highlighting."
    },
    {
      keywords: [
        "homebrew", "brew", "package manager", "installer", "dmg", "path",
        "command not found", "winget", "npm", "pip", "uv", "venv", "virtual environment"
      ],
      title: "Package managers, virtual environments (.venv) & language runtimes",
      stopId: "downloading-the-tools",
      answer: "• Language runtimes (run code on your computer): Python, Node.js / Bun / Deno (JavaScript/TypeScript), Docker (containers).\n• System package managers (install developer tools cleanly on your machine): Homebrew ('brew') on Mac/Linux, 'winget' on Windows.\n• Project package managers: 'npm' / 'pnpm' (JavaScript 'node_modules/') and 'pip' / 'uv' (Python '.venv/' virtual environment so project libraries never clash).\n• Tip: If Terminal says 'command not found', close and reopen Terminal (or activate your '.venv') so your shell sees the installed tool."
    },
    {
      keywords: [
        "ide", "code editor", "vs code", "vscode", "cursor", "windsurf", "claude code",
        "replit", "colab", "jupyter", "developer environment"
      ],
      title: "Code editors, AI IDEs, browser sandboxes & notebooks",
      stopId: "downloading-the-tools",
      answer: "• Desktop Code Editors / IDEs (VS Code, Cursor, Windsurf, Zed, PyCharm): Combine a file explorer, a plain-text code editor, and a built-in terminal.\n• Terminal coding agents: Claude Code, Gemini CLI.\n• Browser sandboxes (zero install): Replit, StackBlitz, CodeSandbox, v0, Bolt, Lovable.\n• Interactive notebooks (run Python cell-by-cell for data & AI): Google Colab, Jupyter Notebooks."
    },
    {
      keywords: [
        "vercel", "save on vercel", "hosting", "live url", "production", "netlify",
        "render", "railway", "cloud run", "hugging face", "spaces", "aws",
        "ways to host", "do they all need to be apps", "where to host"
      ],
      title: "Ways to host & share your work (not everything needs to be a full web app)",
      stopId: "system-architecture",
      answer: "Different projects belong on different hosting categories:\n1. Frontend & full-stack web apps (React, Next.js, static HTML/JS): Vercel, Netlify, Cloudflare Pages, Firebase Hosting.\n2. AI demos, ML models, datasets & notebooks: Hugging Face Spaces (turns a 20-line Python Gradio/Streamlit script into a shareable demo), Hugging Face Hub, Google Colab, Replicate, Modal.\n3. Always-on backend servers & Docker containers (Python FastAPI/Flask, background jobs): Render, Railway, Fly.io, DigitalOcean, and Google Cloud Run / AWS / Azure.\n4. Free static docs & reusable packages: GitHub Pages, PyPI ('pip install'), npm ('npm install')."
    },
    {
      keywords: [
        "language", "languages", "python", "javascript", "typescript", "sql",
        "html", "css", "go", "rust", "which language"
      ],
      title: "Coding languages: Which one does what",
      stopId: "basic-terminology",
      answer: "• HTML & CSS: Page structure and visual styling inside the browser.\n• JavaScript / TypeScript: The only language browsers execute natively; also runs on servers via Node.js. TypeScript adds type checking so editors catch bugs before runtime.\n• Python: The #1 language for AI/ML, data science (Pandas, Colab), rapid AI demos (Gradio, Streamlit), MCP servers (FastMCP), and backend APIs (FastAPI, Flask).\n• SQL: Declarative language for querying relational databases (PostgreSQL, SQLite).\n• Bash / Shell: Terminal commands and automation scripts.\n• Go / Rust / C++: Compiled languages for high-speed systems and infrastructure."
    },
    {
      keywords: [
        "database", "databases", "postgres", "postgresql", "supabase", "neon",
        "sqlite", "mongodb", "firebase", "firestore", "pinecone", "vector",
        "sql vs nosql", "redis"
      ],
      title: "Database categories & cloud hosts (SQL, NoSQL, Vector, Cache)",
      stopId: "basic-terminology",
      answer: "Always group databases by category first:\n• Relational / SQL databases (structured tables with strict columns — best default for 90% of apps): PostgreSQL ('Postgres'), SQLite, MySQL. Popular cloud hosts: Supabase, Neon, Google Cloud SQL, AWS RDS.\n• Document / NoSQL databases (flexible JSON documents & real-time sync): Firebase / Cloud Firestore, MongoDB, Convex, DynamoDB.\n• Vector databases (AI embeddings & semantic search): pgvector (inside Postgres/Supabase), Pinecone, Weaviate, Chroma.\n• In-memory caches (sub-millisecond speed & rate-limiting): Redis, Upstash."
    },
    {
      keywords: [
        "good architecture", "bad architecture", "fragile", "vibe-coded", "vibe coding",
        "spaghetti", "mistake", "slip up", "ai keeps breaking", "without breaking"
      ],
      title: "Good architecture vs. fragile vibe-coded architecture",
      stopId: "basic-terminology",
      answer: "Fragile vibe-coded apps typically fail in 4 ways:\n1. Putting secret API keys inside frontend browser JavaScript (where anyone pressing F12 can steal them).\n2. Letting the browser mutate database tables directly without server-side authentication checks.\n3. Running slow 30-second AI calls synchronously so the browser tab freezes or times out.\n4. Letting single code files balloon past 1,500+ lines so AI agents lose context and overwrite working features.\nGood architecture separates Client UI, Backend API Server, and Database/Queue boundaries, and keeps files modular."
    },
    {
      keywords: [
        "git", "commit", "branch", "pull request", "pr", "merge", "diff", "git status"
      ],
      title: "Git essentials: Status, Diff, Commit, Branch, Pull Request (PR) & Merge",
      stopId: "git-and-shipping",
      answer: "• git status: Shows which files are modified or untracked right now.\n• git diff: Shows exact green (+) added and red (-) removed lines before you commit.\n• git commit: Saves a permanent timestamped checkpoint on your laptop.\n• git branch: Creates a parallel timeline so you can test risky AI edits without breaking 'main'.\n• Pull Request (PR): A review page on GitHub comparing your branch against 'main' (often with a live Vercel preview link).\n• git merge: Joins your verified branch back into 'main'."
    },
    {
      keywords: [
        "grep", "what is grep", "grep -rn", "search files", "regular expression print",
        "ctrl+f", "cmd+f"
      ],
      title: "What is 'grep' (and why do AI agents run 'grep -rn' constantly)?",
      stopId: "cli-and-terminal",
      answer: "'grep' is your terminal's 'Cmd+F' / 'Ctrl+F' across files and folders. Its name comes from a 1970s Unix command: g/re/p (Global Regular Expression Print).\n• grep \"TODO\" notes.txt — searches inside one file.\n• grep -rn \"fetchUser\" src/ — searches recursively (-r) through every subfolder in src/ and prints the exact filename and line number (-n) where 'fetchUser' appears.\n• grep -i \"error\" server.log — searches case-insensitively (-i)."
    },
    {
      keywords: [
        "parent directory", "parent folder", "directory", "subfolder", "child directory",
        "working directory", "..", "cd ..", "mkdir -p", "pwd"
      ],
      title: "Parent Directory (..), Current Directory (.), and Directory vs. Folder",
      stopId: "cli-and-terminal",
      answer: "• Directory = Folder: 'Directory' is 100% the exact same thing as a Folder.\n• Current Working Directory (.): The exact folder your terminal is standing inside right now (run 'pwd' to print its full path).\n• Parent Directory (..): The outer folder one level above you. If you are inside '/Users/lucy/my-app/src', then 'my-app' is the parent directory, and running 'cd ..' steps up into it.\n• Child Directory (Subfolder): A folder inside your current folder (running 'cd src' steps down into it)."
    },
    {
      keywords: [
        "trace", "trace a file", "tracing", "walk through", "read code", "happy path"
      ],
      title: "What does it mean to 'trace' a file or trace code?",
      stopId: "reading-code-stability",
      answer: "To 'trace' a file means following the data step-by-step with your eyes from the moment a user clicks a button to the final response:\n1. Start at the UI trigger (button click or form submit).\n2. Follow which function or API endpoint ('/api/...') gets called next and what inputs are passed in.\n3. Ask at each boundary: 'What happens if the network drops here, the API key is missing, or this value is null? Does the code show a clear error message, or crash silently?'"
    },
    {
      keywords: [
        "clone", "fork", "copy", "duplicate", "branch vs clone", "git clone"
      ],
      title: "Clone vs. Branch vs. Fork vs. Copy-Pasting a folder",
      stopId: "git-and-shipping",
      answer: "• git clone: Downloads a repository from a cloud Git host (GitHub, GitLab, Hugging Face) onto your laptop for the first time with its full commit history.\n• git branch: Creates a safe parallel timeline inside the project folder you already have.\n• Fork: Copies someone else's GitHub repository into your own GitHub account so you can experiment freely.\n• Copy-pasting a folder: Breaks Git history and creates 'project-final-v3' chaos—use 'git branch' instead."
    },
    {
      keywords: [
        "undo", "revert", "reset", "ai broke", "restore", "checkout", "rewind"
      ],
      title: "How to undo an AI mistake in Git",
      stopId: "git-and-shipping",
      answer: "• Before committing: Run 'git diff' to see what changed, then run 'git checkout -- <filename>' (or 'git restore .') to discard the broken edits and return to your last clean commit.\n• After committing: Run 'git log --oneline' to see your recent commits, then run 'git revert HEAD' to safely undo the latest commit with a clean inverse commit."
    },
    {
      keywords: [
        "env", ".env", "environment variable", "api key", "secret", "secrets", "leaked key"
      ],
      title: "Environment variables (.env) & keeping API keys safe",
      stopId: "basic-terminology",
      answer: "Never paste real API keys directly into .js, .ts, or .py files:\n1. Store keys locally in a '.env' file (e.g. GEMINI_API_KEY=AIza...).\n2. Put '.env' inside your '.gitignore' file BEFORE running 'git add' so Git never uploads it to GitHub.\n3. In production, paste your secret keys into your cloud host's encrypted Environment Variables settings (in Vercel, Render, Cloud Run, or Hugging Face Spaces).\n4. If you ever accidentally push a key to GitHub, revoke/delete that key in the provider dashboard immediately—deleting the file in a later commit does not erase it from Git history."
    },
    {
      keywords: [
        "api", "rest", "json", "http", "get", "post", "status code", "401", "403",
        "404", "500", "429", "cors", "endpoint"
      ],
      title: "APIs, HTTP methods (GET/POST), status codes & CORS",
      stopId: "system-dynamics",
      answer: "An API is the structured contract between a client and a server:\n• HTTP Methods: GET reads data; POST creates/sends data; PUT/PATCH updates data; DELETE removes data.\n• Status Codes: 200 (OK), 400 (Bad Request / invalid JSON), 401 (Unauthorized / missing API key), 403 (Forbidden / wrong permissions), 404 (Not Found / wrong URL path), 429 (Too Many Requests / rate limit hit), 500 (Internal Server Error / backend code crashed).\n• CORS: A browser security check that blocks unfamiliar domains from calling your backend API unless your server explicitly allows that origin."
    },
    {
      keywords: [
        "webhook", "polling", "idempotent", "idempotency", "queue", "async", "synchronous"
      ],
      title: "System dynamics: Webhooks vs. Polling & Idempotency",
      stopId: "system-dynamics",
      answer: "• Polling vs. Webhooks: Polling is your browser asking the server 'are you done yet?' every 2 seconds. A Webhook is the external server calling your backend URL the instant an event finishes (like a Stripe payment succeeding).\n• Idempotency: Attaching a unique request ID so that if a user double-clicks 'Pay' or a network retry fires, the action only executes once."
    },
    {
      keywords: [
        "study", "research", "stanford", "dora", "metr", "gitclear", "berkeley",
        "nature", "pendo", "y combinator"
      ],
      title: "Empirical research cited across this guide",
      stopId: "reading-code-stability",
      answer: "• Y Combinator W25: 25% of startups had 95% AI-generated codebases.\n• Google DORA: Every 25% increase in AI adoption correlated with a 7.2% drop in delivery stability when teams lacked verification guardrails.\n• GitClear (211M lines): 2-week code churn doubled from 3.3% to 7.1%.\n• Stanford ACM CCS (Perry et al.): Developers using AI assistants wrote less secure code while rating it as more secure.\n• UC Berkeley ('Why Johnny Can't Prompt'): Precise domain vocabulary is the primary control surface for steering AI.\n• METR (2025): Unstructured AI debugging loops slowed experienced developers down by 19%."
    },
    {
      keywords: [
        "open source", "npm install", "pip install", "package", "library",
        "template", "shadcn", "node_modules"
      ],
      title: "How to download, verify & build on top of open source",
      stopId: "system-architecture",
      answer: "There are 2 ways to build on open-source software:\n1. Library track (Brick by brick): Run 'npm install <pkg>' (JS) or 'pip install <pkg>' (Python) to add a focused tool (like Zod validation, Chart.js, or FastMCP) into your project.\n2. Full starter repo track (Whole house frame): Click 'Use this template' or 'Fork' on GitHub, then run 'git clone <url>', install dependencies, and copy '.env.example' to '.env'."
    },
    {
      keywords: [
        "license", "mit", "apache", "gpl", "agpl", "bsd", "copyleft", "legal"
      ],
      title: "Open-source licenses: MIT & Apache 2.0 vs. AGPL & GPL",
      stopId: "system-architecture",
      answer: "• Permissive (Safe for commercial & private apps): MIT, Apache-2.0, BSD, ISC. You can modify and ship freely as long as you keep the original copyright notice.\n• Viral Copyleft (Watch out!): GPL-3.0 and AGPL-3.0. Using an AGPL library in a hosted web app can legally require you to release your entire application's source code.\n• No LICENSE file on GitHub: Means 'All Rights Reserved' by default copyright law—do not copy it into production."
    },
    {
      keywords: [
        "watch out", "watch-out", "caution", "slopsquatting", "bill", "rate limit",
        "upstash", "leak", "overnight bill", "$2,000"
      ],
      title: "6 critical watch-outs when building and shipping",
      stopId: "reading-code-stability",
      answer: "1. Leaked '.env' keys: Never commit '.env' to GitHub; rotate any exposed key immediately.\n2. Runaway cloud/LLM bills: Always set a hard monthly spend cap ($10–$25) in OpenAI/Anthropic/Google Cloud and add per-IP rate limiting before sharing a public link.\n3. AI 'slopsquatting': Verify AI-suggested package names actually exist on npm/PyPI before running install.\n4. N+1 database queries: Fetch lists in 1 batch query rather than running a database query inside a 'for' loop.\n5. Missing auth checks: Enforce authentication on the backend server route, never just by hiding a button in browser UI.\n6. License traps: Check that open-source packages use MIT/Apache-2.0 rather than AGPL."
    },
    {
      keywords: [
        "how much python", "python in 2026", "dataframe", "pandas", "dictionary",
        "list of dictionaries", "pydantic", "protobuf", "stack trace", "evals", "golden eval"
      ],
      title: "How much Python you actually need in 2026 (Dicts, DataFrames, Schemas & Evals)",
      stopId: "reading-code-python",
      answer: "Focus on reading and debugging 6 core Python building blocks:\n1. Variables & Types (str, int, float, bool, None).\n2. Dictionaries & Lists -> Tables: One Dictionary {'name': 'Lucy', 'role': 'Eng'} is 1 key-value record; a List of Dictionaries [{...}, {...}] is a whole table (which loads directly into a Pandas DataFrame).\n3. Control flow & Functions (if/else, for-loops, def, try/except).\n4. Strict Schemas (Pydantic / BaseModel) so APIs and LLMs return validated fields.\n5. Stack traces: Read Python crash logs from the bottom line up (KeyError, TypeError, IndentationError).\n6. Tests & Golden Evals: Run 'pytest' on 30–50 representative inputs so new edits don't silently break working features."
    },
    {
      keywords: [
        "head", "git head", "squash", "mkdir vs touch", "mkdir first", "why so many steps"
      ],
      title: "Terminal 'head' vs. Git 'HEAD', 'mkdir' then 'touch', and 'Squash & Merge'",
      stopId: "cli-and-terminal",
      answer: "• Lowercase 'head -n 20 file.txt' (Terminal): Prints the first 20 lines of a file (opposite of 'tail').\n• Uppercase 'HEAD' (Git): Your 'You Are Here' pointer showing the exact commit snapshot your folder is currently standing on.\n• 'mkdir' vs 'touch': Run 'mkdir my-folder' first to create the empty directory, then 'touch my-folder/index.html' second to create an empty file inside it.\n• 'Squash & Merge': Combines multiple small 'WIP / fix typo' branch commits into 1 clean commit when merging a Pull Request into 'main'."
    },
    {
      keywords: [
        "human in the loop", "prepare confirm", "sensitive data", "separate data",
        "agents.md", "claude.md", ".cursorrules"
      ],
      title: "Agent guardrails: AGENTS.md, Human-in-the-Loop ('Prepare -> Confirm') & Data Separation",
      stopId: "system-architecture",
      answer: "• AGENTS.md / CLAUDE.md: A plain-text rulebook in your repo root that every AI coding agent reads automatically at the start of a session (tech stack, file-size limits, commands, and safety rules).\n• Human-in-the-Loop ('Prepare -> Confirm'): Let AI read and draft freely, but require a human confirmation click before any write action that sends emails, mutates production data, or spends money.\n• Separate Code from Sensitive Data: Keep source code in GitHub, and keep private customer CSVs or user records in an access-controlled database or cloud bucket."
    },
    {
      keywords: [
        "hide api key", "open web", "low cost", "low-cost", "how does the helper work",
        "how does this helper work", "serverless proxy", "ask-guide", "flash-lite",
        "expose api key", "hide the api key"
      ],
      title: "How to run an AI helper on the open web: Hide the API key & keep cost near $0",
      stopId: "basic-terminology",
      answer: "Never put a Gemini or OpenAI API key in browser JavaScript (anyone can press F12 -> Network and copy it). Instead, use a 4-layer architecture:\n1. Serverless Backend Proxy ('/api/ask-guide'): The browser sends POST /api/ask-guide -> your server reads 'GEMINI_API_KEY' from encrypted Environment Variables -> calls the model -> returns the text.\n2. Tier-0 Local Knowledge Match ($0.00, 0ms): Answer common guide and glossary questions directly in JS before calling an LLM.\n3. Small Fast Model + Token Caps: Use 'gemini-2.5-flash-lite' with a 300-char input cap and 260 maxOutputTokens.\n4. Per-IP Rate Limit + Cache: Cache repeated questions in memory and cap each IP at 15 requests per 10 minutes."
    }
  ];

  var STOP_STARTER_PROMPTS = {
    "default": [
      "My code is broken, how do I fix it?",
      "What is the difference between an API and an MCP?",
      "How do I push to GitHub & update Vercel?",
      "What are you, and what can you answer?"
    ],
    "downloading-the-tools": [
      "How do I start a new project from scratch?",
      "Where do I click to add a README.md?",
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
      "How do I push to GitHub & auto-update Vercel?",
      "How do I undo an AI mistake in Git?",
      "Clone vs Branch vs Fork?",
      "What is 'Squash & Merge' vs Commit?"
    ],
    "cli-and-terminal": [
      "What is grep (and grep -rn)?",
      "Why is mkdir first and touch second?",
      "Terminal 'head' vs Git 'HEAD'?",
      "What is a parent directory (..)?"
    ],
    "reading-code-python": [
      "How much Python do I need in 2026?",
      "How do Dicts, Lists & DataFrames fit together?",
      "What does it mean to 'trace' a file?",
      "How do I read a Python stack trace?"
    ],
    "reading-code-stability": [
      "My code is broken, how do I fix it?",
      "Why is my page blank or not updating?",
      "What if I accidentally commit an API key to Git?",
      "How do I stop a $2,000 overnight AI bill?"
    ],
    "system-dynamics": [
      "What is the difference between an API and an MCP?",
      "What do HTTP status codes (401, 404, 429, 500) mean?",
      "Webhooks vs polling explained?",
      "What is Human-in-the-Loop ('Prepare -> Confirm')?"
    ],
    "system-architecture": [
      "Ways to host (Web apps vs Hugging Face vs Servers)?",
      "How do I download & build on open source?",
      "What is an AGENTS.md / CLAUDE.md file?",
      "MIT vs AGPL open-source licenses?"
    ]
  };

  window.PIPELINE_GUIDE_KNOWLEDGE = {
    knowledgeBase: GENERAL_KNOWLEDGE_BASE,
    starterPrompts: STOP_STARTER_PROMPTS
  };
})();

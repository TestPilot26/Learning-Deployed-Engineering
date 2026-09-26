// Deployed Eng Pipeline — Structured Data for Interactive Living Diagrams
// Modularized from diagrams.js so every source file remains strictly under 800 lines.

window.PIPELINE_DIAGRAMS_DATA = {
  // Official GitHub Octicon 16x16 SVG path data for authentic Git iconography
  octiconPaths: {
    commit: [
      "M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
    ],
    branch: [
      "M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
    ],
    pullRequest: [
      "M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    ],
    merge: [
      "M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
    ],
    fork: [
      "M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
    ],
    diff: [
      "M8.75 1.75V5H12a.75.75 0 0 1 0 1.5H8.75v3.25a.75.75 0 0 1-1.5 0V6.5H4A.75.75 0 0 1 4 5h3.25V1.75a.75.75 0 0 1 1.5 0ZM4 13h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 4 13Z"
    ]
  },

  // STOP 1: Local Workshop -> Cloud Git (GitHub) -> Cloud Hosting (Vercel)
  toolsFlowNodes: [
    {
      id: "plain-text",
      zone: "1. Your Laptop (Localhost)",
      icon: "description",
      badge: "Files",
      badgeClass: "badge-info",
      title: "Plain text files (.html, .js, .py, .env)",
      summary: "Unformatted UTF-8 text files sitting in a normal folder on your hard drive.",
      whatItIs: "Every program ever written is just a plain text file stored in a folder on a computer. Unlike a Word doc or Google Doc—which hides styling XML and turns straight quotes (\" \") into curly smart quotes—a code file contains raw characters only. The file extension (.py, .js, .html, .json) simply tells the computer which language grammar is inside.",
      slipUp: "Beginner slip-up: Double-clicking a .js or .py file in Finder/Explorer expecting an app window to open, or editing code in TextEdit/Notes which silently corrupts quotation marks.",
      command: "ls -la   # Lists all files in your folder, including hidden dotfiles like .env",
      videoTitle: "MDN: Dealing with files & directory structures",
      videoUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
    },
    {
      id: "ide-editor",
      zone: "1. Your Laptop (Localhost)",
      icon: "terminal",
      badge: "Workshop",
      badgeClass: "badge-info",
      title: "Developer environment / IDE (VS Code or Cursor)",
      summary: "Your cockpit combining a folder tree, plain-text editor, terminal, and AI agent.",
      whatItIs: "An Integrated Development Environment (IDE) is a specialized plain-text editor built for software. Left pane: your folder tree. Center pane: your open text files with syntax coloring so typos stand out. Bottom pane: your integrated terminal running right inside that exact folder.",
      slipUp: "Beginner slip-up: Opening a single orphan file instead of using 'File -> Open Folder' on the whole project directory, which leaves the terminal and AI agent in the wrong working directory.",
      command: "code .   # Opens the current terminal folder inside VS Code",
      videoTitle: "VS Code: Getting started & user interface tour",
      videoUrl: "https://code.visualstudio.com/docs/getstarted/userinterface"
    },
    {
      id: "homebrew-runtime",
      zone: "1. Your Laptop (Localhost)",
      icon: "inventory_2",
      badge: "Engine",
      badgeClass: "badge-success",
      title: "Package manager & runtimes (Homebrew, Node, Python)",
      summary: "Installs the language engines that execute your text files on localhost.",
      whatItIs: "A text file does nothing until a runtime (like Node.js for JavaScript or Python) reads and executes it. Homebrew ('brew') is the package manager for macOS/Linux: instead of hunting the web for .dmg installers that scatter files in broken folders, 'brew install node' downloads the verified tool and wires it into your system PATH automatically.",
      slipUp: "Beginner slip-up: Downloading random installers from Google Search and hitting 'command not found: node' because the terminal PATH doesn't know where the installer put the binary.",
      command: "brew install node git && python3 -m http.server 8000",
      videoTitle: "Homebrew: The missing package manager explained",
      videoUrl: "https://brew.sh/"
    },
    {
      id: "local-git",
      zone: "1. Your Laptop (Localhost)",
      icon: "history",
      badge: "Time Machine",
      badgeClass: "badge-secondary",
      title: "Local Git (.git hidden folder)",
      summary: "Tracks every line change and saves checkpoints directly on your laptop.",
      whatItIs: "When you run 'git init', Git creates a hidden '.git' folder inside your project. Every time you run 'git commit', it takes a complete snapshot of your files right on your hard drive—even if you are on an airplane with no Wi-Fi.",
      slipUp: "Beginner slip-up: Thinking Git and GitHub are the same thing, or forgetting to commit before asking an AI agent to refactor a working file.",
      command: "git status && git add . && git commit -m \"Save working prototype\"",
      videoTitle: "MIT Missing Semester: Version Control (Git)",
      videoUrl: "https://missing.csail.mit.edu/2020/version-control/"
    },
    {
      id: "cloud-github",
      zone: "2. Cloud Git (GitHub)",
      icon: "cloud_upload",
      badge: "Cloud Vault",
      badgeClass: "badge-info",
      title: "Cloud Git repository (Personal GitHub)",
      summary: "Stores your committed code history in the cloud so other services and teammates can read it.",
      whatItIs: "GitHub is a cloud website that hosts a synchronized copy of your local Git repository. Running 'git push' sends your latest local commits over an encrypted SSH connection to your personal GitHub account.",
      slipUp: "Beginner slip-up: Editing a file on your laptop with Cmd+S and wondering why GitHub (or your teammate) doesn't see the change yet—you must commit and push.",
      command: "git push origin main   # Uploads local commits to GitHub",
      videoTitle: "GitHub Docs: Connecting local Git to GitHub",
      videoUrl: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    {
      id: "cloud-vercel",
      zone: "3. Cloud Production (Vercel)",
      icon: "public",
      badge: "Live URL",
      badgeClass: "badge-success",
      title: "Cloud production hosting (Vercel)",
      summary: "Watches your GitHub repo, builds every new commit in a cloud container, and serves your public URL.",
      whatItIs: "What does 'deploying to Vercel' actually mean? You don't drag-and-drop files into Vercel. Instead, you connect Vercel to your GitHub repo once. Every time you push a commit to GitHub, GitHub fires an automatic webhook to Vercel. Vercel boots a clean cloud computer, pulls your code, runs your build script, and publishes it to a global https:// URL in ~20 seconds.",
      slipUp: "Beginner slip-up: Forgetting to copy local .env secret variables into the Vercel Project Settings dashboard (since .env files are intentionally never pushed to GitHub).",
      command: "https://your-project.vercel.app   # Live automatically after git push",
      videoTitle: "Vercel Docs: How Git deployments work",
      videoUrl: "https://vercel.com/docs/deployments/git"
    }
  ],

  // STOP 2: Interactive Diagram of an App & Infrastructure + Languages
  appInfraNodes: [
    {
      id: "frontend-ui",
      layer: "Client Layer",
      icon: "devices",
      badge: "Browser / UI",
      badgeClass: "badge-info",
      title: "Frontend client (Browser & mobile UI)",
      summary: "Renders visual surfaces, captures user clicks, and sends HTTPS requests to the backend.",
      commonTools: "React, Next.js, Vite, Tailwind CSS, Google Material 3 (GM3) tokens, Chrome DevTools.",
      useCases: "Use React/Next.js for multi-page interactive web apps; use Vite or plain HTML/CSS/JS for lightweight, fast-loading internal tools and dashboards.",
      languages: "HTML (document structure), CSS (layout, responsive grids, design tokens), JavaScript & TypeScript (interactive state & DOM updates).",
      prosCons: "Pros: Runs natively in every user's browser with zero installation; TypeScript catches type mismatches before runtime. Cons: 100% of frontend code is downloaded to the user's computer—never put secret API keys or database credentials here.",
      goodArch: "Renders UI from state, validates form inputs early, and talks only to authenticated backend API endpoints over HTTPS.",
      badArch: "Hardcodes OPENAI_API_KEY inside client JavaScript (anyone pressing F12 steals your credit card quota) or queries database tables directly without row-level security."
    },
    {
      id: "api-backend",
      layer: "Compute Layer",
      icon: "dns",
      badge: "API / Server",
      badgeClass: "badge-secondary",
      title: "API gateway & backend server",
      summary: "The private brain: enforces business rules, holds secret .env keys, and coordinates data.",
      commonTools: "FastAPI (Python), Node.js / Express, Next.js API Routes (Vercel Serverless), Go (net/http), Docker / Cloud Run.",
      useCases: "Use FastAPI (Python) when orchestrating AI models, pandas, or data pipelines; use Node.js/Next.js when you want one TypeScript codebase across frontend and backend; use Go for high-concurrency microservices.",
      languages: "Python, TypeScript (Node.js), Go, Rust, Java.",
      prosCons: "Python Pros: Cleanest syntax and richest AI/ML ecosystem. Python Cons: Slower raw CPU concurrency than Go/Rust. TypeScript Pros: Shared types across full stack. Go Pros: Ultra-fast compiled binary with predictable latency.",
      goodArch: "Stateless endpoints, strict request schema validation (Pydantic / Zod), secrets loaded from environment variables (.env), and clear HTTP status codes (200, 400, 401, 429, 500).",
      badArch: "A 2,500-line single file that mixes HTML rendering, raw SQL strings, and unvalidated user input with zero timeout or error handling."
    },
    {
      id: "auth-identity",
      layer: "Security Gate",
      icon: "verified_user",
      badge: "Auth & IAM",
      badgeClass: "badge-success",
      title: "Authentication & permissions layer",
      summary: "Verifies who the user is (Authentication) and what data they are allowed to touch (Authorization).",
      commonTools: "Clerk, Auth0, Supabase Auth, Firebase Auth, NextAuth / Auth.js, OAuth 2.0 (Sign in with Google/GitHub).",
      useCases: "Use managed providers (Clerk, Supabase Auth, Auth0) so you never handle raw plaintext passwords yourself.",
      languages: "JSON Web Tokens (JWT), HTTP-Only Secure Cookies, OAuth 2.0 / OpenID Connect protocols.",
      prosCons: "Pros: Managed auth handles MFA, password resets, and session rotation automatically. Cons: Requires careful middleware checks on every private API route.",
      goodArch: "Verifies the signed session token on the server for every request and checks that user_id owns the requested resource.",
      badArch: "Checking 'if (isLoggedIn)' only in the frontend UI while leaving the backend '/api/delete-user' endpoint wide open to anyone with curl."
    },
    {
      id: "primary-db",
      layer: "Data Layer",
      icon: "database",
      badge: "Database",
      badgeClass: "badge-info",
      title: "Primary database (Persistent state)",
      summary: "Stores durable records, user accounts, and transactions so nothing is lost when servers restart.",
      commonTools: "PostgreSQL (gold-standard relational DB), Supabase / Neon (managed serverless Postgres), SQLite (local/edge file DB), Firestore / MongoDB (document NoSQL).",
      useCases: "Default to PostgreSQL (via Supabase or Neon) for 95% of apps because most real data is relational (users have projects, projects have tasks). Use SQLite for local prototypes or single-node tools.",
      languages: "SQL (Structured Query Language) + ORMs like Prisma, Drizzle, or SQLAlchemy.",
      prosCons: "SQL Pros: Strict schemas, ACID transactions, and powerful JOIN queries prevent corrupted data. NoSQL Pros: Flexible for unstructured JSON documents early on, but harder to maintain consistency as relationships grow.",
      goodArch: "Parameterized SQL queries (preventing SQL injection), indexed lookup columns, and automated backups.",
      badArch: "Storing critical user state inside a local JSON file on a serverless function (which gets wiped every 10 minutes when the container spins down)."
    },
    {
      id: "cache-queue",
      layer: "Speed & Async",
      icon: "bolt",
      badge: "Cache & Queue",
      badgeClass: "badge-secondary",
      title: "In-memory cache & background job queue",
      summary: "Keeps fast reads under 5ms (Cache) and moves slow 20-second AI tasks out of the user's click path (Queue).",
      commonTools: "Redis, Upstash (serverless Redis), BullMQ, Celery, Cloud Pub/Sub, Kafka.",
      useCases: "Use Redis to cache expensive database queries or rate-limit API abuse; use a job queue whenever a task takes longer than 2 seconds (LLM reports, video processing, bulk emails).",
      languages: "Redis key-value commands, JSON job payloads, async worker processes in Python/Node/Go.",
      prosCons: "Pros: Prevents server timeouts and traffic spikes from crashing your primary database. Cons: Cache invalidation ('making sure cached data isn't stale') requires explicit TTLs (Time-To-Live).",
      goodArch: "API immediately returns '202 Accepted' with a jobId while a background worker processes the heavy LLM pipeline and updates status.",
      badArch: "Forcing the user's browser request to hang open for 45 seconds waiting for 5 sequential AI calls, which fails whenever mobile Wi-Fi blips."
    },
    {
      id: "external-apis",
      layer: "Integrations",
      icon: "hub",
      badge: "AI & Webhooks",
      badgeClass: "badge-success",
      title: "External AI models, payments & webhooks",
      summary: "Connects your backend to LLMs (Gemini, OpenAI, Anthropic), Stripe billing, and event webhooks.",
      commonTools: "Gemini API, OpenAI / Anthropic SDKs, Stripe (payments), Resend / SendGrid (email), GitHub Webhooks.",
      useCases: "Call external APIs from your backend server only, stream LLM tokens via Server-Sent Events (SSE), and listen to incoming Webhooks for async events.",
      languages: "REST (JSON over HTTPS), Server-Sent Events (SSE), GraphQL, gRPC.",
      prosCons: "Pros: Lets a solo engineer ship capabilities that used to require a 50-person team. Cons: Third-party APIs can rate-limit (HTTP 429) or time out—you must wrap calls in retries with idempotency keys.",
      goodArch: "Uses idempotency keys (so retrying a payment never charges twice), exponential backoff on 429 rate limits, and signature verification on webhooks.",
      badArch: "Calling paid LLM APIs with no rate limit, no max_tokens cap, and no fallback when the upstream service has a 30-second outage."
    }
  ],

  languageComparison: [
    {
      lang: "HTML & CSS",
      badge: "Frontend Visuals",
      badgeClass: "badge-info",
      where: "Runs inside every web browser.",
      pros: "Universal standard for layout, typography, responsive grids, and theme tokens.",
      cons: "Not a programming language for business logic or data storage."
    },
    {
      lang: "JavaScript / TypeScript",
      badge: "Full-Stack Web",
      badgeClass: "badge-info",
      where: "Browser UI + Node.js / Next.js backend servers.",
      pros: "One language across frontend and backend; TypeScript catches bugs before code runs.",
      cons: "Heavy CPU math or machine learning training is much slower than Python/C++."
    },
    {
      lang: "Python",
      badge: "AI, Data & Backend",
      badgeClass: "badge-success",
      where: "Backend APIs (FastAPI), AI/ML pipelines, data notebooks, automation scripts.",
      pros: "Reads almost like English; #1 ecosystem for AI, LLMs, and scientific computing.",
      cons: "Cannot run natively inside a browser UI; slower raw execution than Go/Rust."
    },
    {
      lang: "SQL",
      badge: "Databases",
      badgeClass: "badge-secondary",
      where: "PostgreSQL, SQLite, MySQL, BigQuery, Snowflake.",
      pros: "Declarative and timeless: you state what data you want, and the engine optimizes how to fetch it.",
      cons: "Designed for querying and joining structured tables, not building UI or general workflows."
    },
    {
      lang: "Bash / Shell",
      badge: "Terminal & Glue",
      badgeClass: "badge-neutral",
      where: "macOS/Linux terminal, CI/CD deployment scripts, cloud server setup.",
      pros: "Pipes tools together in one line (grep, curl, git, ssh) on any computer.",
      cons: "Cryptic syntax for complex data structures—switch to Python once a script exceeds ~50 lines."
    },
    {
      lang: "Go / Rust",
      badge: "Infra & Scale",
      badgeClass: "badge-secondary",
      where: "High-speed cloud infrastructure, CLIs, compilers, and concurrent microservices.",
      pros: "Compiles to a single fast binary with tiny memory usage and strict safety.",
      cons: "Steeper learning curve and slower initial prototyping speed than Python or TypeScript."
    }
  ],

  // STOP 3: Living Git Graph (Commit, Branch, Diff, PR/CL, Merge, Clone/Fork)
  gitLivingNodes: [
    {
      id: "git-diff",
      octicon: "diff",
      badge: "Step 1 · Inspect",
      badgeClass: "badge-secondary",
      title: "Working directory & git diff (Inspect before saving)",
      command: "git status && git diff",
      whatItIs: "As you (or an AI agent) edit files in VS Code, those edits sit in your 'Working Directory'. Before you seal them into history, 'git diff' shows every exact line added (+) in green and removed (-) in red.",
      whyItSavesYou: "AI agents frequently fix one bug while accidentally deleting a CSS rule or helper function 200 lines away. Reading 'git diff' takes 10 seconds and catches unintended edits before they get saved."
    },
    {
      id: "git-commit",
      octicon: "commit",
      badge: "Step 2 · Checkpoint",
      badgeClass: "badge-info",
      title: "Commit (Permanent snapshot on your timeline)",
      command: "git add . && git commit -m \"Add searchable terminal vocab\"",
      whatItIs: "A Commit is a permanent, timestamped photograph of your entire project folder given a unique ID hash (like a1b2c3d). Unlike Cmd+S—which overwrites a single file—commits stack up like save points in a video game.",
      whyItSavesYou: "If an AI prompt completely scrambles your app at 3:15 PM, you can rewind to your 3:00 PM commit in one command ('git checkout .') with zero lost work."
    },
    {
      id: "git-branch",
      octicon: "branch",
      badge: "Step 3 · Parallel Timeline",
      badgeClass: "badge-success",
      title: "Branch (Safe sandbox to test risky ideas)",
      command: "git checkout -b feat/interactive-diagrams",
      whatItIs: "A Branch creates an instant parallel timeline diverging from 'main'. Your 'main' branch stays 100% untouched and working while you experiment freely on the new branch.",
      whyItSavesYou: "Never copy-paste folders like 'my-app-backup-final-v3'. On a branch, you can let AI try an ambitious multi-file refactor—if it fails, switch back to 'main' and delete the branch in one second."
    },
    {
      id: "git-pr",
      octicon: "pullRequest",
      badge: "Step 4 · Review Gate",
      badgeClass: "badge-secondary",
      title: "Pull Request (PR) / Changelist (CL)",
      command: "gh pr create --title \"Add interactive architecture diagrams\"",
      whatItIs: "A Pull Request (called a Changelist or CL inside large engineering orgs) is a formal proposal to merge your experimental branch back into 'main'. It displays the side-by-side diff, runs automated tests, and triggers a live Vercel Preview URL.",
      whyItSavesYou: "Lets you click and test a dedicated preview link of your changes—and let teammates or automated security scanners review the exact diff—before real users on 'main' are affected."
    },
    {
      id: "git-merge",
      octicon: "merge",
      badge: "Step 5 · Ship to Main",
      badgeClass: "badge-info",
      title: "Merge & automatic Vercel production deploy",
      command: "git checkout main && git merge feat/interactive-diagrams && git push",
      whatItIs: "Merging weaves the verified commits from your feature branch back into the 'main' trunk. The moment 'main' updates on GitHub, Vercel automatically deploys the new version to your live production domain.",
      whyItSavesYou: "Because every feature enters 'main' through a clean merge commit, you can revert an entire feature launch with a single 'git revert' click if production metrics dip."
    },
    {
      id: "git-clone-fork",
      octicon: "fork",
      badge: "Mental Model",
      badgeClass: "badge-neutral",
      title: "Clone vs. Branch vs. Fork vs. Copy-Paste",
      command: "git clone git@github.com:TestPilot26/deployed-eng-pipeline.git",
      whatItIs: "• Clone: Downloads a cloud GitHub repo onto your laptop for the first time (keeps full Git history & remote link).\n• Branch: Creates a parallel timeline inside the same repo.\n• Fork: Makes a personal copy of someone else's GitHub repo under your own GitHub account.\n• Copy-Paste / Download ZIP: Strips the Git connection so you can't easily pull updates or push changes.",
      whyItSavesYou: "Knowing whether to Clone (your own/team repo), Branch (new feature in that repo), or Fork (contributing to external open-source) stops broken folder duplicates."
    }
  ]
};

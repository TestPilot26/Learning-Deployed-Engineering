// Deployed Eng Pipeline — Searchable A-Z Master Dictionary & Flashcard Producer
// Combines every recognizable site/app/platform (Neon, Supabase, Vercel, Hugging Face, Modal, Cursor, etc.),
// every Terminal & Git command, and every core coding & architecture concept into an alphabetical database
// with 1-click export to free flashcard makers (Knowt, Quizlet, Anki) + interactive flip-card study mode.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  // Format: [term, group ("site" | "command" | "concept"), categoryLabel, definition, exampleOrUrl]
  var RAW_GLOSSARY_ENTRIES = [
    // --- SITES, APPS, PLATFORMS & LIBRARIES (Defined by category first!) ---
    ["Anthropic (Claude & Claude Code)", "site", "Site / Platform · Frontier AI Lab & Terminal Agent", "Category: Frontier AI model provider and CLI coding agent. Anthropic builds the Claude family of LLMs (accessed via the Anthropic Console API) and Claude Code, a terminal-based agentic coding tool.", "claude"],
    ["Auth.js (NextAuth) & Better Auth", "site", "Library · Open-Source User Login (Authentication)", "Category: Open-source authentication libraries for web apps. They let you add 'Sign in with Google/GitHub', email magic links, and encrypted session cookies while storing user accounts in your own database (like Neon or Supabase) for free.", "https://authjs.dev"],
    ["Auth0, Okta & WorkOS", "site", "Site / Platform · Enterprise Identity & SSO Login", "Category: Managed authentication and enterprise Single Sign-On (SSO) platforms. Used when apps need corporate login features like Okta SAML, directory sync, and multi-factor authentication.", "OAuth 2.0 / SAML SSO"],
    ["AWS (Amazon Web Services)", "site", "Site / Platform · Hyperscaler Cloud Provider", "Category: Enterprise cloud infrastructure provider ('Hyperscaler', alongside Google Cloud and Microsoft Azure). Provides raw building blocks like EC2 (virtual servers), AWS Lambda (serverless functions), RDS (databases), and S3 (file storage).", "aws.amazon.com"],
    ["AWS S3 (Simple Storage Service)", "site", "Site / Platform · Cloud Object / Blob File Storage", "Category: Cloud file and media storage ('Object / Blob Storage'). Instead of stuffing large images, PDFs, or videos inside SQL database rows, apps upload files to S3 (or Cloudflare R2) and save only the file's URL link in the database.", "s3://my-app-uploads/avatar.png"],
    ["BigQuery, Snowflake & Databricks", "site", "Site / Platform · Cloud Analytics Data Warehouses", "Category: Analytical Data Warehouses. Designed to crunch millions or billions of historical rows for business charts and ML datasets—unlike transactional SQL databases (like Postgres/Neon) which handle live user button clicks.", "SELECT COUNT(*) FROM events;"],
    ["Bolt.new", "site", "Site / Platform · Browser AI App Generator", "Category: Prompt-to-app browser sandbox (alongside v0, Lovable, and Replit). Lets you describe an app in plain English and spins up a live preview in your browser before you export the code to GitHub or Cursor.", "bolt.new"],
    ["Chroma, Qdrant & Weaviate", "site", "Site / Platform · Open-Source AI Vector Databases", "Category: Vector Databases for AI semantic memory (RAG). They store numerical 'embeddings' of text or images so an AI agent can search documents by meaning rather than exact keyword match.", "vector_db.similarity_search(query)"],
    ["Clerk", "site", "Site / Platform · Managed User Login & Authentication", "Category: Drop-in user authentication service. Provides pre-built 'Sign in', 'Sign up', and 'User Profile' UI components plus backend session checks so you don't build password security from scratch.", "clerk.com"],
    ["Cloudflare (Pages, Workers & DNS)", "site", "Site / Platform · Edge Hosting, Domain DNS & Security Shield", "Category: Domain registrar, DNS manager, DDoS security shield, and serverless edge host (Cloudflare Pages for websites, Cloudflare Workers for serverless backend APIs).", "cloudflare.com"],
    ["Cloudflare R2", "site", "Site / Platform · Zero-Egress Cloud File Storage", "Category: Object / Blob File Storage (an AWS S3 alternative). Stores user-uploaded images, PDFs, audio, and video in the cloud without charging 'egress' bandwidth fees when users download them.", "R2 bucket for images & PDFs"],
    ["Convex", "site", "Site / Platform · Realtime Reactive Database & Backend", "Category: Realtime document database and backend platform (similar to Firebase). Automatically syncs database changes to connected browser screens live without writing manual API polling code.", "convex.dev"],
    ["Cursor", "site", "App / Software · AI-Native Code Editor (IDE)", "Category: Local Code Editor / IDE (built on VS Code, alongside Windsurf). Installed on your computer to edit codebases, run terminal commands, inspect Git diffs, and direct AI agents across multiple files.", "cursor ."],
    ["Docker", "site", "App / Software · Container Packaging Engine", "Category: Containerization tool. Packs your application code, runtime (like Python 3.12), and system libraries into a single portable box (a 'Container' defined by a `Dockerfile`) so it runs identically on your laptop and on any cloud server.", "docker build -t my-app ."],
    ["Drizzle ORM", "site", "Library · TypeScript SQL Database Helper (ORM)", "Category: Object-Relational Mapper (ORM) for TypeScript/Node.js (alongside Prisma). Lets you define SQL tables and write type-safe database queries for Postgres, Neon, Supabase, or SQLite/Turso in TypeScript.", "await db.select().from(users);"],
    ["FastAPI, Flask & Django", "site", "Library · Python Backend Web Frameworks", "Category: Python backend server frameworks. FastAPI is the modern standard for building fast Python REST APIs and AI backends with automatic Pydantic validation; Flask is lightweight; Django is an all-in-one batteries-included web framework.", "@app.post('/api/chat')"],
    ["Firebase & Cloud Firestore", "site", "Site / Platform · Google NoSQL App Database & Auth Suite", "Category: Backend-as-a-Service (BaaS) and NoSQL document database by Google. Stores data as JSON-like documents grouped into collections, with real-time browser sync, Firebase Auth, and Firebase Hosting.", "firebase.google.com"],
    ["Fly.io", "site", "Site / Platform · Global Container & Backend Server Host", "Category: Cloud container hosting platform (alongside Render, Railway, and Google Cloud Run). Runs Docker containers and always-on backend servers close to users around the world.", "fly launch && fly deploy"],
    ["GitHub & GitLab", "site", "Site / Platform · Cloud Git Repository Hosts", "Category: Cloud hosting platforms for Git repositories (alongside Bitbucket). They store your code's backup history in the cloud, host Pull Requests (PRs) for code review, and trigger auto-deployments on cloud hosts.", "git push origin main"],
    ["GitHub Pages", "site", "Site / Platform · Free Static Website Host", "Category: Static site hosting built into GitHub. Turns a repository of HTML, CSS, JS, or Markdown files into a free live website (`username.github.io`) with zero server maintenance.", "pages.github.com"],
    ["Google AI Studio & Vertex AI (Gemini)", "site", "Site / Platform · Frontier AI Model API & Workbench", "Category: Frontier AI developer platform. Google AI Studio is the fastest way to prototype prompts and get a `GEMINI_API_KEY` for Gemini models; Vertex AI is Google Cloud's enterprise AI platform.", "aistudio.google.com"],
    ["Google Cloud Run & GCP", "site", "Site / Platform · Serverless Container & Hyperscaler Cloud", "Category: Cloud infrastructure (Google Cloud Platform). Cloud Run takes any backend server or Docker container, gives it an HTTPS URL in one command, scales up with traffic, and scales down to $0 when idle.", "gcloud run deploy"],
    ["Google Colab (Colaboratory)", "site", "Site / Platform · Cloud Python & AI Jupyter Notebook", "Category: Interactive cloud notebook (alongside Jupyter and Kaggle). Lets you write and run Python code cell-by-cell in your browser with zero installation and free access to cloud GPUs/TPUs—great when you don't need a full web app.", "colab.research.google.com"],
    ["Gradio", "site", "Library · Python AI Demo Interface Builder", "Category: Python-only UI library (alongside Streamlit, owned by Hugging Face). Wraps any Python function or AI model in a clean web interface (text boxes, audio/image uploaders, sliders) in 5 lines of Python with zero HTML/JS.", "import gradio as gr"],
    ["Groq & Together AI", "site", "Site / Platform · High-Speed Open-Weight AI Model APIs", "Category: Cloud AI inference providers (alongside Fireworks AI and Replicate). Let your backend call open-weight models like Llama, DeepSeek, or Mixtral via a standard API at high token-per-second speeds.", "API for open-weight LLMs"],
    ["Homebrew (brew)", "site", "App / Software · Mac & Linux System Package Manager", "Category: Operating system package manager (like `winget` on Windows or `apt` on Ubuntu Linux). Installs developer engines like Python, Node.js, Git, and `uv` cleanly from the terminal.", "brew install node python git"],
    ["Hugging Face (Spaces, Models, Datasets)", "site", "Site / Platform · The 'GitHub of AI' (Models, Datasets & Demos)", "Category: Open-source AI community hub and demo host. Hosts 1M+ open-weight AI models (`Models`), training data (`Datasets`), and live Python AI web apps (`Spaces` using Gradio/Streamlit)—no full web app required.", "huggingface.co/spaces"],
    ["Inngest & Trigger.dev", "site", "Site / Platform · Background Job Queues & Async Workflows", "Category: Background job queues and durable workflow engines (alongside Celery in Python and BullMQ in Node). They run slow 2-minute AI tasks, PDF processing, or scheduled cron jobs in the background with automatic retries so the user's browser never times out.", "inngest.com / trigger.dev"],
    ["Jupyter Notebook (.ipynb)", "site", "App / Software · Interactive Code & Data Notebook", "Category: Interactive computing notebook. Mixes runnable Python code cells, charts, and Markdown notes in a single `.ipynb` document—the standard for data science, ML experiments, and Google Colab.", "jupyter lab"],
    ["LangChain & LlamaIndex", "site", "Library · AI Agent & RAG Orchestration Frameworks", "Category: AI orchestration libraries (Python & TypeScript). Provide pre-built connectors for chaining LLM calls, parsing PDFs, searching vector databases (RAG), and calling tools.", "RAG & agent orchestration"],
    ["LangSmith & Braintrust", "site", "Site / Platform · AI Agent Tracing, Observability & Evals", "Category: AI evaluation ('Evals') and LLM tracing platforms (alongside Arize Phoenix and Promptfoo). Record every prompt, tool call, latency, and token cost in your AI app and grade accuracy against test datasets.", "AI evals & trace debugging"],
    ["Lovable", "site", "Site / Platform · Browser AI Full-Stack App Builder", "Category: Prompt-to-app browser builder (alongside v0, Bolt.new, and Replit). Generates React UIs and wires up Supabase databases from natural language prompts, with 2-way sync to GitHub.", "lovable.dev"],
    ["Modal", "site", "Site / Platform · Serverless Python & Cloud GPU Runner", "Category: Serverless GPU and Python cloud platform (alongside Replicate and Baseten). Lets you run heavy Python functions, AI inference, or batch jobs on cloud GPUs in seconds, paying only for the exact seconds your code runs.", "modal deploy app.py"],
    ["MongoDB Atlas", "site", "Site / Platform · Cloud NoSQL Document Database", "Category: Document (NoSQL) Database. Stores data as flexible JSON-like documents ('BSON') instead of strict SQL tables—popular when data shapes vary widely.", "db.users.find({ active: true })"],
    ["Namecheap & Porkbun", "site", "Site / Platform · Domain Name Registrars", "Category: Domain Registrars (alongside Cloudflare Registrar). Where you buy custom web addresses (like `myproject.com` for ~$10/year) and point their DNS records to your cloud host (Vercel, Render, Cloud Run).", "Buy & configure custom domains"],
    ["Neon", "site", "Site / Platform · Serverless PostgreSQL Cloud Database", "Category: Managed Serverless SQL Database (PostgreSQL). Neon hosts Postgres in the cloud, spins up in 1 second, scales down to $0 when no one is using your app, and lets you 'branch' your database just like a Git branch to test changes safely! Pairs with Drizzle or Prisma.", "neon.tech (Serverless Postgres)"],
    ["Netlify", "site", "Site / Platform · Frontend & Full-Stack Web App Host", "Category: Cloud web hosting platform (alongside Vercel and Cloudflare Pages). Connects to your GitHub repo and automatically builds and deploys your website or web app on every `git push`.", "netlify.com"],
    ["Next.js", "site", "Library · Full-Stack React Web Framework", "Category: Full-stack JavaScript/TypeScript web framework built on top of React. Combines Front End screens and Back End API routes inside a single project folder.", "npx create-next-app@latest"],
    ["Node.js, Bun & Deno", "site", "App / Software · JavaScript Server Runtimes", "Category: JavaScript/TypeScript server runtimes. They let JavaScript run outside the browser—on your laptop terminal and on Back End cloud servers.", "node server.js"],
    ["npm & npx", "site", "App / Software · JavaScript Package Manager & Runner", "Category: Package manager and registry for JavaScript/TypeScript (bundled with Node.js). `npm install` downloads open-source libraries into `node_modules`; `npx` runs a package tool once without installing it permanently.", "npm install && npm run dev"],
    ["Ollama & LM Studio", "site", "App / Software · Local Open-Weight AI Model Runners", "Category: Local LLM runners. Let you download and run open-weight AI models (like Gemma, Llama, Qwen, or DeepSeek) 100% offline on your own Mac or PC for $0 API cost.", "ollama run gemma3"],
    ["OpenAI API", "site", "Site / Platform · Frontier AI Model API Provider", "Category: Frontier AI model API (alongside Google Gemini and Anthropic Claude). Provides API endpoints for GPT and o-series models, embeddings, and audio transcription.", "platform.openai.com"],
    ["OpenRouter", "site", "Site / Platform · Unified Multi-Model AI API Gateway", "Category: AI API router/gateway. Gives you a single API endpoint and billing key to call 200+ models from Google Gemini, Anthropic, OpenAI, Meta Llama, and DeepSeek without changing your backend code.", "openrouter.ai"],
    ["Pandas, Polars & NumPy", "site", "Library · Python Data Science & Table Libraries", "Category: Python data manipulation libraries. Load CSVs, Excel sheets, Parquet files, and SQL results into fast in-memory tables ('DataFrames') to filter, clean, and aggregate millions of rows.", "import pandas as pd"],
    ["pgvector", "site", "Library · Vector Search Extension for PostgreSQL", "Category: AI Vector search extension built into PostgreSQL (supported natively by Neon and Supabase). Lets you store AI embeddings and run RAG semantic search right inside your existing SQL database without paying for a separate Vector DB.", "CREATE EXTENSION vector;"],
    ["Pinecone", "site", "Site / Platform · Managed AI Vector Database", "Category: Dedicated Cloud Vector Database (alongside Qdrant, Weaviate, and Chroma). Stores numerical AI embeddings so your app can search millions of text chunks by semantic meaning for RAG.", "pinecone.io"],
    ["pip & PyPI", "site", "App / Software · Python Package Installer & Registry", "Category: Python's standard package manager (`pip`) and the Python Package Index (`pypi.org`) where open-source Python libraries like `fastapi`, `pandas`, and `gradio` are published.", "pip install -r requirements.txt"],
    ["PlanetScale", "site", "Site / Platform · Cloud MySQL & Postgres Database Host", "Category: Managed cloud relational (SQL) database platform (alongside Neon and Supabase), famous for database branching and zero-downtime schema migrations.", "planetscale.com"],
    ["Playwright, Pytest & Vitest", "site", "Library · Automated Code & Browser Testing Frameworks", "Category: Automated testing tools. `Pytest` runs unit tests in Python; `Vitest` (and `Jest`) run unit tests in JavaScript/TypeScript; `Playwright` opens a real headless browser to click through and test your full web app end-to-end.", "npx playwright test"],
    ["PostgreSQL (Postgres)", "site", "App / Software · Open-Source Relational (SQL) Database Engine", "Category: Relational SQL Database engine. The industry-standard open-source database that stores data in structured tables (rows and columns) and powers platforms like Neon and Supabase.", "SELECT * FROM users;"],
    ["PostHog", "site", "Site / Platform · Open-Source Product Analytics & Session Replay", "Category: Product analytics, feature flags, and session replay platform. Shows you how real users navigate your app, where they drop off, and lets you roll out new features safely.", "posthog.com"],
    ["Prisma", "site", "Library · TypeScript & Node.js Database ORM", "Category: Object-Relational Mapper (ORM) for SQL databases (alongside Drizzle ORM). Uses a clean `schema.prisma` file to generate type-safe TypeScript queries and visual table migrations for Postgres, Neon, or Supabase.", "await prisma.user.findMany()"],
    ["Pydantic & Zod", "site", "Library · Data Schema Validation Libraries (Python & TS)", "Category: Schema validation libraries (`Pydantic` in Python, `Zod` in TypeScript). Enforce strict data shapes and types on API inputs and AI structured JSON outputs so malformed data never crashes your server.", "class User(BaseModel): id: int"],
    ["PyTorch", "site", "Library · Deep Learning & AI Model Framework", "Category: Open-source machine learning framework in Python. Used to train, fine-tune, and run neural networks and LLMs on GPUs.", "import torch"],
    ["Railway", "site", "Site / Platform · Backend Server, Database & Container Host", "Category: Developer cloud hosting platform (PaaS, alongside Render and Fly.io). Deploys always-on Python/Node servers, Docker containers, Postgres databases, and Redis caches from your GitHub repo.", "railway.app"],
    ["React", "site", "Library · Frontend UI Component Library", "Category: JavaScript/TypeScript Front End UI library (alongside Vue and Svelte). Lets you build interactive screens out of reusable components (like `<Button />` or `<Modal />`) that update automatically when data changes.", "function App() { return <main>Hello</main>; }"],
    ["Redis", "site", "App / Software · Ultra-Fast In-Memory Cache & Key-Value Store", "Category: In-memory database and cache (often hosted serverlessly via Upstash). Stores frequently read answers, session states, and API rate-limit counters in RAM for 1-millisecond lookups.", "await redis.get('user:42')"],
    ["Render", "site", "Site / Platform · Cloud Host for Backend APIs, Web Apps & Databases", "Category: Developer cloud platform (PaaS, alongside Railway and Fly.io). Connects to GitHub to host always-on Python backends (FastAPI/Flask), Node servers, background workers, cron jobs, and Postgres databases.", "render.com"],
    ["Replicate", "site", "Site / Platform · Cloud API for Open-Source AI Models & GPUs", "Category: Serverless GPU model host (alongside Modal and Hugging Face). Lets you run thousands of open-source image, video, audio, and text AI models with a single API call, paying per second of GPU time.", "replicate.com"],
    ["Replit", "site", "Site / Platform · Browser Coding IDE, Sandbox & AI App Builder", "Category: Cloud browser IDE and AI app builder. Lets you write, run, and host Python or JavaScript apps entirely inside a web browser tab without installing local tools first.", "replit.com"],
    ["Resend, SendGrid & Twilio", "site", "Site / Platform · Transactional Email & SMS APIs", "Category: Communication APIs. `Resend`, `SendGrid`, and `Postmark` let your backend send welcome emails, password resets, and receipts via API; `Twilio` sends SMS text messages and WhatsApp alerts.", "await resend.emails.send(...)"],
    ["Sentry", "site", "Site / Platform · Live Crash Reporting & Error Monitoring", "Category: Error tracking and observability platform (alongside LogRocket and Datadog). Alerts you the moment a real user hits a Front End or Back End crash and shows the exact line of code that failed.", "sentry.io"],
    ["shadcn/ui & Radix UI", "site", "Library · Open-Source Accessible UI Component Kits", "Category: Frontend UI component collections. `Radix UI` provides accessible unstyled primitives (dialogs, dropdowns, tabs); `shadcn/ui` styles them with Tailwind CSS and copies the source code directly into your repo so you can customize every line.", "npx shadcn@latest add dialog"],
    ["SQLAlchemy & SQLModel", "site", "Library · Python SQL Database ORM", "Category: Object-Relational Mapper (ORM) for Python (the Python equivalent of Drizzle or Prisma). Lets Python backends query Postgres, Neon, Supabase, or SQLite using clean Python classes instead of raw SQL strings.", "session.exec(select(User))"],
    ["SQLite", "site", "App / Software · Single-File Relational (SQL) Database", "Category: Embedded SQL database engine. Stores an entire relational SQL database inside a single ordinary file (`app.db`) on disk with zero server setup—built right into Python (`import sqlite3`).", "sqlite3 app.db"],
    ["Streamlit", "site", "Library · Python Data Dashboard & AI Web App Builder", "Category: Python-only web UI framework (alongside Gradio and Marimo). Turns Python data scripts into interactive charts, tables, and AI apps without writing HTML, CSS, or JavaScript.", "streamlit run app.py"],
    ["Stripe", "site", "Site / Platform · Online Payments & Subscription Billing API", "Category: Payment processing infrastructure (alongside Lemon Squeezy and Polar). Handles credit cards, Apple/Google Pay, and recurring subscriptions securely on hosted checkout pages and notifies your server via Webhooks.", "stripe.com"],
    ["Supabase", "site", "Site / Platform · Open-Source Postgres Backend-as-a-Service", "Category: Managed PostgreSQL cloud database + Backend-as-a-Service (BaaS). Bundles a full Postgres SQL database (like Neon) together with built-in User Login (Supabase Auth), File Storage buckets, and `pgvector` for AI search.", "supabase.com"],
    ["Tailwind CSS", "site", "Library · Utility-First CSS Styling Framework", "Category: CSS styling framework. Lets you style HTML/React elements using compact utility classes (`flex gap-4 p-6 rounded-lg`) and is the default styling language of modern UI kits and AI builders.", "tailwindcss.com"],
    ["Turso", "site", "Site / Platform · Serverless Edge SQLite Database", "Category: Managed cloud SQLite database (built on libSQL, alongside Cloudflare D1). Takes the simplicity of single-file SQLite and hosts it in the cloud with instant branching and low-latency edge reads.", "turso.tech"],
    ["UploadThing & Vercel Blob", "site", "Site / Platform · Developer File Upload & Media Storage", "Category: Plug-and-play Object / Blob File Storage wrappers (built on top of S3/R2). Make it easy to add drag-and-drop image, PDF, and video uploads to web apps with file-size limits and auth checks.", "uploadthing.com"],
    ["Upstash", "site", "Site / Platform · Serverless Redis Cache & API Rate Limiter", "Category: Serverless Redis and rate-limiting platform. Used to cache fast answers and protect AI API routes from bot spam (`@upstash/ratelimit`) on a pay-per-request basis.", "upstash.com"],
    ["uv (by Astral)", "site", "App / Software · Ultra-Fast Python Package & Environment Manager", "Category: Modern Python package and virtual environment manager (written in Rust). Replaces `pip`, `venv`, and `virtualenv` with a single tool that installs Python libraries 10–100x faster and locks exact versions in `uv.lock`.", "uv init && uv add fastapi"],
    ["v0 (by Vercel)", "site", "Site / Platform · Browser AI UI & React Component Generator", "Category: Prompt-to-UI generator (alongside Lovable and Bolt.new). Generates clean React, Next.js, Tailwind CSS, and shadcn/ui components from text prompts or screenshots.", "v0.dev"],
    ["Vercel", "site", "Site / Platform · Frontend & Full-Stack Web App Cloud Host", "Category: Cloud web application host (alongside Netlify and Cloudflare Pages). Connects to your GitHub repo, builds your frontend/Next.js app in the cloud, gives every Pull Request a preview URL, and auto-deploys `main` to a live `https://` link.", "vercel.com"],
    ["VS Code (Visual Studio Code)", "site", "App / Software · Industry-Standard Source Code Editor (IDE)", "Category: Local Code Editor / IDE (the open-source foundation that Cursor and Windsurf are built on). Combines a file tree, syntax-highlighted editor, Git diff viewer, and integrated Terminal window.", "code ."],
    ["Windsurf", "site", "App / Software · Agentic AI Code Editor (IDE)", "Category: Local AI-native Code Editor / IDE (built on VS Code, alongside Cursor). Features an integrated AI coding agent ('Cascade') that reads your repository, edits multiple files, and runs terminal commands.", "windsurf"],

    // --- GIT & VERSION CONTROL COMMANDS & CONCEPTS ---
    [".gitignore", "command", "Git & Version Control · Security Ignore List", "A plain-text file in your project root that tells Git which private or heavy files (like `.env` secret keys, `node_modules/`, and `.venv/`) must NEVER be uploaded to GitHub.", "echo '.env*' >> .gitignore"],
    ["Fork (GitHub Fork)", "concept", "Git & Open Source · Personal Cloud Copy of a Repo", "Clicking 'Fork' on someone else's public GitHub repository creates your own personal cloud copy under your GitHub account so you can experiment freely without affecting the original author's project.", "Fork on GitHub -> git clone"],
    ["git add", "command", "Git Command · Stage Changes for Snapshot", "Moves modified files into Git's 'staging area' (the loading dock) so they are ready to be frozen into your next `git commit` snapshot.", "git add .   (or git add index.html)"],
    ["git branch & git switch -c", "command", "Git Command · Create Safe Parallel Sandbox Timeline", "Creates a parallel timeline ('branch') off `main` so you or an AI agent can build a new feature or experiment without risking your working production code.", "git switch -c feat/new-ui"],
    ["git clone", "command", "Git Command · Download a Cloud Repository to Your Laptop", "Downloads a complete project folder and its full Git history from a cloud host (like GitHub, GitLab, or Hugging Face) onto your computer.", "git clone https://github.com/user/repo.git"],
    ["git commit -m", "command", "Git Command · Save a Permanent Time-Machine Checkpoint", "Freezes your staged changes into a permanent, labeled snapshot with a unique ID hash (like `a1b2c3d`) that you can return to anytime.", "git commit -m 'Add search bar'"],
    ["git diff", "command", "Git Command · Inspect Exact Line-by-Line Changes", "Shows every single line added (`+` in green) and removed (`-` in red) since your last commit. Always check `git diff` after an AI agent edits your code!", "git diff"],
    ["git init", "command", "Git Command · Turn a Folder into a Git Repository", "Initializes a brand-new local Git time machine (creating the hidden `.git` folder) inside your current project directory.", "git init"],
    ["git pull", "command", "Git Command · Download Latest Cloud Commits to Your Laptop", "Fetches the newest commits from your cloud repository (GitHub) and merges them into your local folder so your laptop stays up to date.", "git pull origin main"],
    ["git push", "command", "Git Command · Upload Local Commits to Cloud Git Host", "Uploads your committed local checkpoints up to your cloud repository (GitHub/GitLab) and triggers automatic cloud deployments if connected to a host like Vercel or Render.", "git push origin main"],
    ["git status", "command", "Git Command · Check Which Files Are Modified or Staged", "Prints which branch you are on, which files have been edited, and which files are staged for your next commit—without changing anything.", "git status"],
    ["Main Branch (main)", "concept", "Git & Deployment · Official Production Timeline", "The primary trunk of your Git repository. In modern cloud workflows, whatever is merged into `main` is automatically deployed to your live production website.", "main branch -> Production"],
    ["Merge & Merge Conflict", "concept", "Git & Collaboration · Combining Branches", "Merging joins changes from a feature branch back into `main`. A 'Merge Conflict' happens when two branches edited the exact same lines of the same file, asking you to pick which version to keep.", "git merge feat/new-ui"],
    ["Package Lockfile (package-lock.json / uv.lock)", "concept", "Dependencies & Git · Exact Version Receipt", "An auto-generated file that records the exact version number and cryptographic checksum of every open-source library installed in your project so every laptop and cloud server installs identical code.", "Commit lockfiles to Git!"],
    ["Pull Request (PR)", "concept", "Git & Code Review · Proposal to Merge a Branch into Main", "A review page on GitHub/GitLab where you inspect the `git diff` of your feature branch, run automated tests, and click 'preview' before merging into `main`.", "Open PR -> Review -> Merge"],
    ["README.md", "concept", "Open Source & Documentation · The Front-Door Instruction Manual", "A Markdown plain-text file at the root of every repository that explains what the project does, what prerequisites it needs, and the exact terminal commands to install and run it.", "Always read README.md first"],
    ["chmod +x", "command", "Terminal Command · Make a Script File Executable", "Changes a file's permissions on Mac/Linux so your computer is allowed to run a `.sh` or `.py` script directly as a program (`+x` = add executable permission).", "chmod +x run.sh && ./run.sh"],
    ["ssh (Secure Shell)", "command", "Terminal Command · Log Into a Remote Cloud Server Safely", "Opens an encrypted terminal connection from your laptop directly into a remote cloud virtual machine (like an AWS EC2 or DigitalOcean server).", "ssh user@server-ip"],
    ["export KEY=value", "command", "Terminal Command · Set an Environment Variable in Your Current Shell", "Sets a variable (like an API key or `PORT=8080`) inside your current open terminal window so programs started from that window can read it.", "export PORT=8080"],
    ["tar / zip / unzip", "command", "Terminal Command · Compress or Extract Archive Folders", "Packs or unpacks compressed archive files (`.zip` or `.tar.gz`) directly from the terminal when downloading releases or datasets.", "unzip dataset.zip"],

    // --- CORE APP, PYTHON, AI & ARCHITECTURE CONCEPTS ---
    ["API (Application Programming Interface)", "concept", "Architecture · The Messenger / Waiter Between Systems", "The structured contract ('menu and waiter') that lets two pieces of software talk to each other—such as your Front End browser screen asking your Back End server to save data, or your Back End calling the Gemini or Stripe API.", "POST /api/save-item"],
    ["Authentication (AuthN) vs. Authorization (AuthZ)", "concept", "Security · Identity vs. Permissions", "Authentication ('AuthN') verifies WHO you are (signing in with Google or password). Authorization ('AuthZ') checks WHAT you are allowed to do (making sure User A cannot delete User B's private projects).", "AuthN = Who; AuthZ = Allowed?"],
    ["Back End (Server)", "concept", "App Anatomy · The Private Kitchen & Engine", "The half of an application that runs out of sight on a secure cloud server (in Python, Node.js, Go, etc.). It enforces permissions, talks to the database, and holds secret `.env` API keys that visitors must never see.", "Runs on server, hidden from browser"],
    ["Blob / Object Storage", "concept", "Storage Architecture · Cloud File Cabinet for Media & PDFs", "Cloud storage built specifically for raw files like images, PDFs, audio, and video (e.g. AWS S3, Cloudflare R2, UploadThing). You store the file in Blob Storage and save only its URL link inside your SQL database.", "Images/PDFs -> S3/R2 -> URL in DB"],
    ["Browser DevTools (Inspect)", "concept", "Debugging · Built-in X-Ray Inside Chrome / Safari / Edge", "Press `Cmd+Option+I` (Mac) or `F12` (Windows) or right-click -> 'Inspect' on any webpage to see live HTML/CSS, read red JavaScript errors in the Console tab, and watch API calls in the Network tab.", "Right-click -> Inspect -> Console"],
    ["Cache (In-Memory Cache)", "concept", "System Architecture · 1-Millisecond Countertop Memory", "Storing frequently requested data in ultra-fast RAM (e.g. Redis or Upstash) so your server can return answers in 1 millisecond instead of querying the database over and over.", "Cache hit -> 1ms response"],
    ["CI/CD (Continuous Integration / Continuous Deployment)", "concept", "Shipping & DevOps · Automated Testing & Cloud Publishing", "An automated pipeline (like GitHub Actions + Vercel/Render/Cloud Run) that runs your test suite on every `git push` (CI) and automatically publishes passing code to your live URL (CD).", "git push -> Tests pass -> Live"],
    ["Client-Server Model", "concept", "Architecture · How the Browser and Cloud Talk", "The foundational pattern of the internet: the 'Client' (a user's phone or laptop browser running the Front End) sends requests over HTTPS to a 'Server' (a remote computer running the Back End) which sends back responses.", "Client (Browser) <-> Server (Cloud)"],
    ["Compiled vs. Interpreted Languages", "concept", "Coding Languages · Ahead-of-Time vs. Line-by-Line Execution", "Interpreted languages (Python, JavaScript) run line-by-line immediately via a runtime. Compiled languages (Go, Rust, C++) are translated ahead of time into ultra-fast machine binaries before running.", "Python/JS vs. Go/Rust/C++"],
    ["Container (Docker Container)", "concept", "Infrastructure · Standardized Shipping Box for Code", "A lightweight, self-contained package that bundles your code together with its exact programming language version and OS libraries so it never suffers from 'it worked on my laptop but broke in the cloud.'", "Dockerfile -> Container image"],
    ["Context Engineering & Context Window", "concept", "AI Engineering · Curating What the AI Model Sees", "An LLM's 'Context Window' is its working RAM (how many tokens of instructions, code, and retrieved docs it can hold at once). Context Engineering is feeding the model the exact relevant files, schemas, and rules it needs without overloading it with noise.", "Right context -> Accurate AI output"],
    ["CORS (Cross-Origin Resource Sharing)", "concept", "Web Security · Browser Permission Rule Between Domains", "A browser security feature that blocks a webpage on `site-a.com` from secretly fetching private API data from `api.site-b.com` unless the backend server explicitly lists `site-a.com` in its `Access-Control-Allow-Origin` header.", "Fix CORS on the backend server"],
    ["CRUD (Create, Read, Update, Delete)", "concept", "App Architecture · The 4 Basic Actions of Almost Every App", "Almost every software product is built around four fundamental database actions: Create a record (`POST`), Read/view records (`GET`), Update a record (`PUT`/`PATCH`), and Delete a record (`DELETE`).", "Create, Read, Update, Delete"],
    ["CSS (Cascading Style Sheets)", "concept", "Coding Language · The Paint, Layout & Typography of the Web", "The front-end styling language that tells the browser what colors, fonts, spacing, and responsive grid layouts to apply to your HTML elements.", "color: var(--color-primary);"],
    ["CSV & Parquet", "concept", "Data Formats · Spreadsheet & Columnar Data Files", "CSV (`.csv`) is a plain-text table of comma-separated values readable by Excel and Python Pandas. Parquet (`.parquet`) is a compressed, high-speed columnar table format used for large data science and AI datasets.", "df = pd.read_csv('data.csv')"],
    ["Database (NoSQL / Document Database)", "concept", "Data Storage · Flexible JSON Document Storage", "A database category (e.g. Firebase/Firestore, Convex, MongoDB) that stores data as flexible JSON-like documents instead of rigid SQL tables—often featuring built-in live real-time sync to browsers.", "{ id: 'u1', tags: ['ai', 'web'] }"],
    ["Database (Relational / SQL Database)", "concept", "Data Storage · Structured Tables with Rows & Columns", "The gold-standard database category (e.g. PostgreSQL, Neon, Supabase, SQLite, MySQL) that organizes data into strict tables linked by IDs ('foreign keys') and queried using SQL.", "Tables: users <-> projects"],
    ["Dictionary (dict) & List (Python)", "concept", "Python Basics · Python's Two Most Important Data Containers", "In Python, a `list` (`['a', 'b']`) is an ordered collection of items accessed by position (`0, 1`), while a `dict` (`{'name': 'Lucy', 'role': 'builder'}`) stores `key: value` pairs—identical in shape to a JSON object!", "user = {'name': 'Lucy', 'step': 5}"],
    ["DNS (Domain Name System)", "concept", "Internet Infrastructure · The Phonebook of the Internet", "Translates a human-friendly domain name (like `myapp.com`) into the destination server IP address or cloud host (`CNAME` / `A` records) where your app is hosted.", "DNS points myapp.com -> Vercel/Render"],
    ["DOM (Document Object Model)", "concept", "Front End · The Browser's Live Tree of Page Elements", "When a browser loads your HTML, it turns the tags into a live tree of objects in memory called the DOM. JavaScript updates the screen by adding, editing, or removing nodes in the DOM.", "document.getElementById('title')"],
    ["Environment Variables (.env)", "concept", "Security · Private Vault for API Keys & Secrets", "Key-value secrets (like `GEMINI_API_KEY=...` or `DATABASE_URL=...`) stored in a local `.env` file (hidden from Git via `.gitignore`) and pasted into your cloud host's encrypted Environment Variables settings in production.", "process.env.GEMINI_API_KEY"],
    ["Eval (AI Evaluation)", "concept", "AI Engineering · Automated Grading Suite for AI Prompts & Agents", "A test dataset of representative user inputs and expected grading criteria used to measure whether a prompt tweak or model upgrade actually improved your AI system's accuracy without breaking edge cases.", "Run evals before shipping prompt changes"],
    ["Exception Handling (try / except / catch)", "concept", "Coding Fundamentals · Graceful Error Recovery Safety Net", "Wrapping risky operations (like network API calls or file reads) in `try / except` (Python) or `try / catch` (JS/TS) so that if an external service hiccups, your app catches the error and shows a friendly message instead of crashing.", "try: ... except Exception as e: ..."],
    ["File Path (Absolute vs. Relative)", "concept", "Terminal & Files · Map Coordinates to a Folder or File", "An Absolute Path starts with `/` from the very root of the computer (`/Users/lucy/app/data.js`). A Relative Path starts from your current working folder (`./data.js` in the current folder, or `../` for the parent folder).", "/Users/lucy/app vs. ./data.js"],
    ["Framework vs. Library", "concept", "Software Concepts · Tool You Call vs. Blueprint That Calls You", "A Library (like `pandas` or `lucide-icons`) is a single tool your code calls when needed. A Framework (like `Next.js` or `FastAPI`) is the overall architectural skeleton of your app that calls your code when requests arrive.", "Library = tool; Framework = skeleton"],
    ["Front End (Client-Side)", "concept", "App Anatomy · Everything the User Sees and Clicks", "The visual part of an app (written in HTML, CSS, and JavaScript/TypeScript) that downloads into the visitor's phone or laptop web browser. Because it runs on the user's device, never put secret passwords inside Front End code.", "HTML + CSS + JS in the browser"],
    ["Function (def / function)", "concept", "Coding Fundamentals · Reusable Named Recipe in Code", "A named block of code (`def calculate_tax(price):` in Python or `function calculateTax(price)` in JS) that takes inputs ('parameters'), performs steps, and `return`s an answer so you don't copy-paste the same logic 20 times.", "def greet(name): return f'Hi {name}'"],
    ["GraphQL & tRPC", "concept", "API Architecture · Typed Alternatives to REST APIs", "API styles where the Front End can request the exact data fields it needs in a single trip (`GraphQL`) or share automatic TypeScript autocomplete directly with a Node.js Back End (`tRPC`).", "Query exact fields in 1 trip"],
    ["HTML (HyperText Markup Language)", "concept", "Coding Language · The Structural Skeleton of Every Webpage", "Defines the building blocks on a webpage using semantic tags like `<h1>` (heading), `<p>` (paragraph), `<button>` (clickable button), and `<input>` (text box).", "<button type='button'>Save</button>"],
    ["HTTP Methods (GET, POST, PUT, DELETE)", "concept", "Web & APIs · The Verbs Used by Web Requests", "When your browser talks to a backend API, it uses a verb: `GET` (read data), `POST` (send/create new data), `PUT` or `PATCH` (update existing data), and `DELETE` (remove data).", "GET /items, POST /items"],
    ["HTTP Status Codes (200, 401, 404, 429, 500)", "concept", "Web & Debugging · 3-Digit Server Reply Codes", "`200 OK` = Success! `400 Bad Request` = Missing/invalid input. `401 Unauthorized` / `403 Forbidden` = Not logged in or no permission. `404 Not Found` = Wrong URL. `429 Too Many Requests` = Rate-limited. `500 Internal Server Error` = Backend code crashed.", "200 OK | 404 Not Found | 500 Crash"],
    ["IDE (Integrated Development Environment)", "concept", "Developer Tools · Your Code Workshop App", "The application where engineers read and write plain-text source code, browse project files, view Git diffs, and run terminal commands (e.g. VS Code, Cursor, Windsurf, PyCharm).", "VS Code / Cursor / Windsurf"],
    ["Idempotency", "concept", "System Reliability · Safe to Retry Without Double-Charging", "Designing an API operation (like a Stripe payment webhook or a 'Save' button) with a unique request ID so that if a user clicks twice or a network retries, the action is only applied once.", "Prevent double charges on retry"],
    ["Index (Database Index)", "concept", "Database Performance · A–Z Lookup Tab for Fast Queries", "Like the index at the back of a textbook: adding an Index to a database column you search frequently (like `email` or `user_id`) lets Postgres/Neon find a row in 1 millisecond instead of scanning 1,000,000 rows one by one.", "CREATE INDEX idx_users_email ON users(email);"],
    ["JavaScript (JS)", "concept", "Coding Language · The Interactive Language of the Web", "The programming language built into every web browser on earth to handle button clicks, live updates, and API calls—and also runnable on backend servers via Node.js.", "btn.addEventListener('click', ...)"],
    ["JSON (JavaScript Object Notation)", "concept", "Data Format · The Universal Envelope of Web APIs & AI", "A lightweight, plain-text data format made of `\"key\": value` pairs inside curly braces (`{\"name\": \"Lucy\", \"active\": true}`). Used by almost every web API and structured LLM response to pass data between languages.", "{ \"status\": \"ok\", \"count\": 3 }"],
    ["JWT (JSON Web Token) & Session Cookie", "concept", "Authentication · Digital Wristband Proving You Are Signed In", "After you sign in, the server gives your browser an encrypted Session Cookie or cryptographically signed JWT token. Your browser sends it along with every API request so the server knows who is asking.", "Authorization: Bearer <token>"],
    ["Latency & Throughput", "concept", "System Performance · Speed of 1 Request vs. Volume Per Second", "Latency is how long a single user waits for a reply (e.g. 120ms). Throughput is how many simultaneous requests your server can handle per second (e.g. 1,000 requests/sec).", "Latency = wait time; Throughput = capacity"],
    ["Linter & Formatter (Ruff, ESLint, Prettier)", "concept", "Code Quality · Automated Spell-Check & Tidy-Up for Code", "A Formatter (`Prettier` in JS, `Ruff format` in Python) automatically aligns indentation and quotes. A Linter (`ESLint` in JS, `Ruff check` in Python) catches unused variables, unreachable code, and security bugs before you run the app.", "ruff check . && ruff format ."],
    ["Localhost (127.0.0.1) & Port Number", "concept", "Local Development · Your Private Practice Stage on Your Laptop", "`localhost` (IP `127.0.0.1`) means 'this computer right here.' When you run a dev server (`npm run dev` or `python3 -m http.server 8000`), it opens on a numbered door called a Port (`http://localhost:3000` or `:8000`) visible only to you.", "http://localhost:3000"],
    ["Loop (for / while)", "concept", "Coding Fundamentals · Repeat an Action for Every Item", "Runs a block of code repeatedly—such as `for user in users:` to process 500 rows in a list without writing the same line 500 times. Always make sure `while` loops have a stopping condition!", "for item in items: process(item)"],
    ["MCP (Model Context Protocol)", "concept", "AI Engineering · Universal USB-C Plug for AI Tools & Data", "An open standard that lets AI coding agents and chat apps connect securely to external tools (like GitHub, Postgres/Neon databases, Google Drive, or Sentry) using a single standardized protocol.", "Connects AI agents to live tools"],
    ["Mocking (in Unit Tests)", "concept", "Testing · Stand-In Stunt Double for Paid or Slow APIs", "When running automated unit tests, 'mocking' replaces a real external service (like Stripe or the Gemini API) with a fast fake response so your tests run in 0.1 seconds offline for $0.", "Mock external APIs in unit tests"],
    ["Modular Architecture", "concept", "Software Design · Splitting Code into Small Focused Files", "Organizing a codebase into small, single-purpose files (e.g. `data.js`, `auth.py`, `db.py` under ~300–500 lines each) rather than dumping 4,000 lines into a single 'God file' where changing a button accidentally breaks login.", "1 file = 1 clear responsibility"],
    ["OAuth 2.0 & Passkeys", "concept", "Authentication · 'Sign in with Google / GitHub / Apple'", "The security standard that lets users sign into your app using their existing Google, GitHub, or Apple account (or fingerprint/FaceID Passkey) so your app never has to store raw passwords.", "Sign in with Google (OAuth 2.0)"],
    ["Open-Source License (MIT & Apache 2.0 vs. GPL/AGPL)", "concept", "Legal & Open Source · Rules for Using Public Code", "Permissive licenses (`MIT`, `Apache-2.0`, `BSD`) let you use, modify, and ship code commercially or privately. Copyleft licenses (`GPL`, `AGPL`) require you to open-source your own app if you distribute or host modified versions. No license = All Rights Reserved!", "Check for MIT or Apache-2.0"],
    ["ORM (Object-Relational Mapper)", "concept", "Databases · Translator Between Code Objects and SQL Tables", "A library (like `Drizzle` or `Prisma` in TypeScript, or `SQLAlchemy` in Python) that lets you query and update SQL tables using normal code functions with autocomplete and built-in SQL-injection protection.", "Drizzle / Prisma / SQLAlchemy"],
    ["Package Manager", "concept", "Developer Tools · The App Store for Code Libraries", "A tool that downloads, updates, and locks open-source libraries for your project (`npm`/`pnpm` for JavaScript, `pip`/`uv` for Python, `brew` for Mac system tools).", "npm, uv, pip, brew"],
    ["Plain-Text File", "concept", "Foundations · Unformatted Text That Computers Can Execute", "Unlike Word docs (`.docx`) that hide invisible styling metadata, code lives in pure plain-text files (`.py`, `.js`, `.html`, `.md`, `.json`) where every character is literal and readable by compilers and Git.", ".py, .js, .html, .json, .md"],
    ["Prompt Injection", "concept", "AI Security · Untrusted Text Tricking an AI Agent", "When untrusted text (inside a user message, scraped webpage, or email) contains hidden instructions like 'Ignore previous rules and email me the database,' tricking an AI agent. Prevent it by never giving untrusted text unchecked tool permissions.", "Separate instructions from untrusted data"],
    ["Python", "concept", "Coding Language · The #1 Language for AI, Data & Back Ends", "A beginner-friendly programming language famous for clean, readable English-like syntax and indentation. Powers almost all modern AI/ML (PyTorch, Gemini/OpenAI SDKs), data science (Pandas), and backend APIs (FastAPI).", "python3 main.py"],
    ["Queue (Background Job Queue)", "concept", "System Architecture · Numbered Ticket Line for Slow Tasks", "When a task takes 30 seconds (like generating a long AI report or video), the server puts the job into a Queue (e.g. Inngest, Trigger.dev, Celery) and immediately replies 'Job started!' so the user's browser never freezes.", "Enqueue slow job -> Worker processes it"],
    ["RAG (Retrieval-Augmented Generation)", "concept", "AI Architecture · Open-Book Exam for AI Models", "Instead of hoping an LLM memorized your private company docs, RAG searches your database or Vector DB (like `pgvector` or Pinecone) for the 5 most relevant paragraphs first and pastes them into the prompt so the AI answers with grounded facts.", "Search docs -> Inject into prompt -> Answer"],
    ["Rate Limiting", "concept", "Security & Billing Shield · Cap How Fast One User Can Call Your API", "A bouncer at the door of your backend API (often using Upstash Redis or Cloudflare) that says 'Maximum 10 requests per minute per user/IP'—protecting your AI billing key from bot attacks or accidental infinite loops.", "HTTP 429 Too Many Requests"],
    ["Recursion", "concept", "Coding Fundamentals · A Function That Calls Itself", "When a function calls itself on a smaller piece of a problem (like walking down nested folders inside folders). Every recursive function MUST have a 'base case' (stopping rule) or it will crash with a Stack Overflow!", "Base case stops infinite recursion"],
    ["Refactoring", "concept", "Software Engineering · Cleaning Up Code Structure Without Changing Behavior", "Reorganizing messy or duplicated code (splitting a 1,500-line file into clean modules or renaming confusing variables) while keeping the app's external behavior 100% identical.", "Clean structure, same behavior"],
    ["REST API", "concept", "API Architecture · Standard URL-Based Web API Pattern", "The most common way Front Ends and Back Ends communicate: using clean URL paths (`/api/projects`) combined with standard HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) and JSON payloads.", "GET https://api.example.com/v1/items"],
    ["Row-Level Security (RLS)", "concept", "Database Security · Database-Enforced Access Rules Per Row", "A PostgreSQL / Supabase security feature that attaches a permission rule directly to a table (`auth.uid() = user_id`), guaranteeing that a user can only read or edit their own rows.", "ALTER TABLE items ENABLE ROW LEVEL SECURITY;"],
    ["Runtime", "concept", "Foundations · The Engine That Actually Executes Your Code", "A `.py` or `.js` file is just passive text until a Runtime engine reads and runs it—such as the Python interpreter (`python3`) for Python or `Node.js` / a Web Browser for JavaScript.", "Node.js (JS) / CPython (Python)"],
    ["Serverless", "concept", "Cloud Hosting · Cloud Code That Spins Up On-Demand and Scales to $0", "Serverless doesn't mean 'no servers'—it means the cloud host (like Vercel Functions, Cloud Run, Modal, or Neon Postgres) manages the servers for you automatically, spinning up when a user clicks and scaling down to $0 when idle.", "Scales up on traffic, $0 when idle"],
    ["Shell (Bash / Zsh)", "concept", "Terminal · The Command Interpreter Inside Your Terminal Window", "The Terminal is the window app; the Shell (`zsh` on macOS, `bash` on Linux) is the program running inside it that reads commands like `cd`, `ls`, and `git push` and talks to your operating system.", "zsh (Mac default) / bash (Linux)"],
    ["Slopsquatting", "concept", "AI Security Watch-Out · Malicious Packages Named After AI Hallucinations", "When an AI model hallucinates a package name that doesn't exist, and attackers register that fake name on npm or PyPI with malware. Always verify package names and download counts before running `npm install` or `pip install`!", "Verify packages before installing"],
    ["SQL (Structured Query Language)", "concept", "Coding Language · Universal Language for Relational Databases", "The standard language used to create tables, insert rows, join records, and query relational databases like PostgreSQL, Neon, Supabase, and SQLite.", "SELECT name FROM users WHERE id = 1;"],
    ["SQL Injection & XSS (Cross-Site Scripting)", "concept", "Web Security · The Two Classic Web Input Vulnerabilities", "SQL Injection happens when raw user text is glued directly into a SQL query string. XSS happens when untrusted user text is injected into webpage HTML via `innerHTML`. Prevent them with parameterized SQL/ORMs and `textContent`!", "Never trust raw user input"],
    ["State", "concept", "App Architecture · What Your App Currently Remembers", "'UI State' is temporary memory in the browser (which tab is open, what's typed in the search box) that resets on refresh. 'Persistent State' is data saved permanently in your backend Database.", "Temporary UI state vs. Database state"],
    ["Static Site", "concept", "Web Hosting · Pre-Built HTML/CSS/JS Pages That Need No Backend Server", "A website made purely of HTML, CSS, JS, and images (like a portfolio, documentation site, or this interactive learning pipeline!) that can be hosted for $0 on GitHub Pages, Cloudflare Pages, or Vercel.", "Fast, secure, $0 server cost"],
    ["Structured Outputs (JSON Schema)", "concept", "AI Engineering · Forcing an LLM to Reply in Strict Validated JSON", "Passing a Pydantic (Python) or Zod (TypeScript) schema to the Gemini/OpenAI/Claude API so the AI is guaranteed to reply with exact, machine-readable JSON fields instead of chatty paragraphs.", "response_schema=MyPydanticModel"],
    ["System Prompt", "concept", "AI Engineering · The Role, Rules & Guardrails Given to an AI Model", "The foundational instructions sent to an LLM before the user's message—defining the AI's persona, output format, tone, and what it must never do.", "System instructions + User message"],
    ["Terminal / CLI (Command Line Interface)", "concept", "Developer Tools · Text-Based Control Center for Your Computer", "The text interface where you (and AI coding agents) type direct commands (`cd`, `ls`, `git`, `npm`, `python3`) to navigate folders, install tools, start local servers, and deploy to the cloud.", "Direct text control of your OS"],
    ["Tool Use (Function Calling)", "concept", "AI Agents · Giving an LLM Hands to Run Functions & APIs", "An LLM by itself can only predict text. 'Tool Use' gives the AI a menu of real Python/TS functions (like `search_database(query)` or `send_email()`) that it can ask your backend code to execute.", "LLM requests tool -> Code runs it"],
    ["Type Hints (Python) & TypeScript (TS)", "concept", "Code Safety · Labels That Catch Mismatched Data Before You Run Code", "Adding explicit data types (`def add(a: int, b: int) -> int:` in Python, or TypeScript in JS) so your editor and AI agent immediately underline bugs if someone passes text where a number was expected.", "name: str, count: int"],
    ["UI (User Interface) & Component", "concept", "Front End · Visual Controls & Reusable LEGO Bricks on Screen", "The UI is all the buttons, cards, inputs, and menus a human interacts with. A Component is a self-contained, reusable UI piece (like a `<StopCard />`) so you design it once and reuse it everywhere.", "Reusable visual building blocks"],
    ["Trace a file (Code Tracing)", "concept", "Reading Code & Debugging · Walking Through Code Step-by-Step Like the Computer", "To 'trace' a file means pretending you are the computer and following the code line-by-line with your eyes from the moment a user clicks a button or calls an API to the final database write or return value—checking at each step what happens if a variable is null, empty, or fails.", "Input -> Function -> DB -> Return"],
    ["Unit Test vs. Integration Test", "concept", "Testing · Testing 1 Function in Isolation vs. Multiple Parts Together", "A Unit Test checks one small function in isolation in milliseconds. An Integration or End-to-End (E2E) Test checks that the Front End, Back End API, and Database actually work together as a full pipeline.", "Unit = 1 function; E2E = full flow"],
    ["Vector Database & Embeddings", "concept", "AI & Search · Turning Meaning into Coordinates for Semantic Search", "An Embedding model converts a sentence or image into a list of numbers (e.g. `[0.12, -0.84, ...]`) representing its meaning. A Vector Database (like `pgvector` or Pinecone) finds items with the closest meaning.", "Search by meaning, not just exact words"],
    ["Virtual Environment (venv / .venv)", "concept", "Python Best Practice · Private Sandbox Bubble for Project Libraries", "An isolated folder (`.venv`) inside a Python project so installing libraries for Project A (`pip install` or `uv add`) never conflicts with or breaks Project B on the same laptop.", "python3 -m venv .venv"],
    ["Webhook", "concept", "APIs & Events · Automatic Callback Notification From an External Service", "Instead of your server asking Stripe every 5 seconds 'Did the user pay yet?', Stripe automatically sends a `POST` request (a Webhook) to a special URL on your backend the instant the payment succeeds.", "Stripe -> POST /api/webhook"],
    ["WebSocket & SSE (Server-Sent Events)", "concept", "Realtime APIs · Live Streaming Connection Between Server and Browser", "Unlike a normal HTTP request that replies once and closes, WebSockets and SSE keep a live pipe open so the server can stream AI words token-by-token or push live chat messages instantly.", "Live token streaming & real-time updates"],
    ["YAML & TOML (.yaml / .toml)", "concept", "Data Formats · Human-Readable Configuration File Formats", "Clean plain-text formats used for project configuration files—such as `pyproject.toml` (Python project settings) or `.github/workflows/deploy.yml` (GitHub Actions CI/CD config).", "pyproject.toml / config.yaml"]
  ];

  function buildUnifiedGlossary() {
    var all = [];
    var seen = {};

    RAW_GLOSSARY_ENTRIES.forEach(function (row) {
      var key = row[0].toLowerCase();
      seen[key] = true;
      all.push({
        term: row[0],
        group: row[1],
        category: row[2],
        definition: row[3],
        example: row[4] || ""
      });
    });

    if (window.TERMINAL_VOCAB_DATA && Array.isArray(window.TERMINAL_VOCAB_DATA.items)) {
      window.TERMINAL_VOCAB_DATA.items.forEach(function (v) {
        var termTitle = v.command + " — " + v.name;
        var key = termTitle.toLowerCase();
        if (seen[key]) return;
        seen[key] = true;
        all.push({
          term: termTitle,
          group: "command",
          category: "Terminal / CLI · " + (v.category || "Command"),
          definition: v.description + (v.safety ? " (" + v.safety + ")" : ""),
          example: v.example || v.command
        });
      });
    }

    all.sort(function (a, b) {
      var cleanA = a.term.replace(/^[^a-zA-Z0-9]+/, "").toLowerCase();
      var cleanB = b.term.replace(/^[^a-zA-Z0-9]+/, "").toLowerCase();
      if (cleanA < cleanB) return -1;
      if (cleanA > cleanB) return 1;
      return 0;
    });

    return all;
  }

  window.getMasterGlossaryItems = buildUnifiedGlossary;

  function getFirstLetterBucket(term) {
    var m = (term || "").match(/[a-zA-Z]/);
    return m ? m[0].toUpperCase() : "#";
  }

  function initArchiveGlossary() {
    var host = document.getElementById("archive-glossary-mount");
    if (!host) return;

    var masterList = buildUnifiedGlossary();
    var activeGroup = "all";
    var activeLetter = "ALL";
    var quizFlipMode = false;
    var showRawExport = false;
    var currentSearchQuery = "";

    function getFilteredItems() {
      var q = (currentSearchQuery || "").trim().toLowerCase();
      return masterList.filter(function (item) {
        if (activeGroup !== "all" && item.group !== activeGroup) return false;
        if (activeLetter !== "ALL" && getFirstLetterBucket(item.term) !== activeLetter) return false;
        if (!q) return true;
        return (
          item.term.toLowerCase().indexOf(q) !== -1 ||
          item.category.toLowerCase().indexOf(q) !== -1 ||
          item.definition.toLowerCase().indexOf(q) !== -1 ||
          item.example.toLowerCase().indexOf(q) !== -1
        );
      });
    }

    function formatFlashcardTsv(items) {
      return items
        .map(function (it) {
          var cleanTerm = it.term.replace(/\t|\n/g, " ");
          var cleanDef = ("[" + it.category + "] " + it.definition + (it.example ? " — Example: " + it.example : "")).replace(/\t|\n/g, " ");
          return cleanTerm + "\t" + cleanDef;
        })
        .join("\n");
    }

    function render() {
      host.replaceChildren();
      var filtered = getFilteredItems();

      var flashcardBox = document.createElement("div");
      flashcardBox.className = "nested-card archive-flashcard-banner";

      var fcHeaderRow = document.createElement("div");
      fcHeaderRow.className = "resource-title-row";

      var fcTitleWrap = document.createElement("div");
      var fcBadgeRow = document.createElement("div");
      fcBadgeRow.className = "badge-row";
      var fcBadge = document.createElement("span");
      fcBadge.className = "badge badge-success";
      fcBadge.textContent = "Instant flashcard export · " + filtered.length + " of " + masterList.length + " terms selected";
      fcBadgeRow.appendChild(fcBadge);

      var fcTitle = document.createElement("h3");
      fcTitle.className = "vocab-section-heading";
      fcTitle.textContent = "Turn this A–Z dictionary into flashcards in 1 click";
      var fcDesc = document.createElement("p");
      fcDesc.className = "resource-desc";
      fcDesc.textContent = "Click 'Copy all for flashcards' below to copy every currently visible term and definition in universal Term [Tab] Definition format, then paste directly into Knowt, Quizlet, or Anki—or toggle 'Quiz mode' to practice flipping cards right here on the page:";
      fcTitleWrap.appendChild(fcBadgeRow);
      fcTitleWrap.appendChild(fcTitle);
      fcTitleWrap.appendChild(fcDesc);
      fcHeaderRow.appendChild(fcTitleWrap);
      flashcardBox.appendChild(fcHeaderRow);

      var actionsRow = document.createElement("div");
      actionsRow.className = "diagram-pill-cluster";

      var copyAllBtn = document.createElement("button");
      copyAllBtn.type = "button";
      copyAllBtn.className = "nav-btn nav-btn-primary";
      var copyIcon = document.createElement("span");
      copyIcon.className = "material-symbols-outlined btn-icon-sm";
      copyIcon.textContent = "content_copy";
      var copyLbl = document.createElement("span");
      copyLbl.textContent = "Copy all " + filtered.length + " terms for flashcards (Tab-separated)";
      copyAllBtn.appendChild(copyIcon);
      copyAllBtn.appendChild(copyLbl);

      copyAllBtn.addEventListener("click", function () {
        var tsv = formatFlashcardTsv(filtered);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(tsv).then(function () {
            copyIcon.textContent = "check";
            copyLbl.textContent = "Copied " + filtered.length + " flashcards! Paste into Knowt, Quizlet, or Anki";
            setTimeout(function () {
              copyIcon.textContent = "content_copy";
              copyLbl.textContent = "Copy all " + filtered.length + " terms for flashcards (Tab-separated)";
            }, 3200);
          });
        } else {
          showRawExport = true;
          render();
        }
      });
      actionsRow.appendChild(copyAllBtn);

      var quizBtn = document.createElement("button");
      quizBtn.type = "button";
      quizBtn.className = "nav-btn" + (quizFlipMode ? " active" : "");
      var qIcon = document.createElement("span");
      qIcon.className = "material-symbols-outlined btn-icon-sm";
      qIcon.textContent = quizFlipMode ? "visibility" : "style";
      var qLbl = document.createElement("span");
      qLbl.textContent = quizFlipMode ? "Exit quiz mode (Show all definitions)" : "Quiz mode (Click cards to reveal definitions)";
      quizBtn.appendChild(qIcon);
      quizBtn.appendChild(qLbl);
      quizBtn.addEventListener("click", function () {
        quizFlipMode = !quizFlipMode;
        render();
      });
      actionsRow.appendChild(quizBtn);

      var rawBtn = document.createElement("button");
      rawBtn.type = "button";
      rawBtn.className = "nav-btn" + (showRawExport ? " active" : "");
      var rIcon = document.createElement("span");
      rIcon.className = "material-symbols-outlined btn-icon-sm";
      rIcon.textContent = "subject";
      var rLbl = document.createElement("span");
      rLbl.textContent = showRawExport ? "Hide raw flashcard text" : "View raw copy-paste text";
      rawBtn.appendChild(rIcon);
      rawBtn.appendChild(rLbl);
      rawBtn.addEventListener("click", function () {
        showRawExport = !showRawExport;
        render();
      });
      actionsRow.appendChild(rawBtn);

      [
        { label: "Open Knowt (100% free flashcard maker)", url: "https://knowt.com/" },
        { label: "Open Quizlet (Create & import set)", url: "https://quizlet.com/create-set" },
        { label: "Open Anki (Free spaced-repetition app)", url: "https://apps.ankiweb.net/" }
      ].forEach(function (ext) {
        var a = document.createElement("a");
        a.className = "nav-btn";
        a.href = ext.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        var s = document.createElement("span");
        s.textContent = ext.label;
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined btn-icon-sm";
        ic.textContent = "open_in_new";
        a.appendChild(s);
        a.appendChild(ic);
        actionsRow.appendChild(a);
      });

      flashcardBox.appendChild(actionsRow);

      if (showRawExport) {
        var rawArea = document.createElement("textarea");
        rawArea.className = "archive-raw-flashcard-textarea";
        rawArea.readOnly = true;
        rawArea.rows = 8;
        rawArea.value = formatFlashcardTsv(filtered);
        rawArea.setAttribute("aria-label", "Raw tab-separated flashcard text");
        rawArea.addEventListener("click", function () {
          rawArea.select();
        });
        flashcardBox.appendChild(rawArea);
      }

      host.appendChild(flashcardBox);

      var groupBar = document.createElement("div");
      groupBar.className = "vocab-top-tabs-bar";
      [
        { id: "all", label: "All terms A–Z (" + masterList.length + ")", icon: "sort_by_alpha" },
        { id: "site", label: "Sites, apps & software (" + masterList.filter(function (x) { return x.group === "site"; }).length + ")", icon: "apps" },
        { id: "command", label: "Terminal & Git commands (" + masterList.filter(function (x) { return x.group === "command"; }).length + ")", icon: "terminal" },
        { id: "concept", label: "Coding, APIs & architecture (" + masterList.filter(function (x) { return x.group === "concept"; }).length + ")", icon: "account_tree" }
      ].forEach(function (tab) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vocab-top-tab-btn" + (activeGroup === tab.id ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined btn-icon-sm";
        ic.textContent = tab.icon;
        var sp = document.createElement("span");
        sp.textContent = tab.label;
        btn.appendChild(ic);
        btn.appendChild(sp);
        btn.addEventListener("click", function () {
          activeGroup = tab.id;
          render();
        });
        groupBar.appendChild(btn);
      });
      host.appendChild(groupBar);

      var azBar = document.createElement("div");
      azBar.className = "vocab-compact-chip-row";
      ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"].forEach(function (ltr) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "vocab-compact-chip" + (activeLetter === ltr ? " active" : "");
        chip.textContent = ltr === "ALL" ? "All A–Z" : ltr;
        chip.addEventListener("click", function () {
          activeLetter = ltr;
          render();
        });
        azBar.appendChild(chip);
      });
      host.appendChild(azBar);

      if (!filtered.length) {
        var emptyP = document.createElement("p");
        emptyP.className = "text-muted";
        emptyP.textContent = "No terms matched that filter. Try clearing the search box or switching to 'All A–Z'.";
        host.appendChild(emptyP);
        return;
      }

      var grid = document.createElement("div");
      grid.className = "archive-glossary-grid";

      filtered.forEach(function (item) {
        var card = document.createElement("div");
        card.className = "nested-card archive-term-card" + (quizFlipMode ? " quiz-hidden" : "");

        var topRow = document.createElement("div");
        topRow.className = "resource-title-row";

        var badge = document.createElement("span");
        var bClass = item.group === "site" ? "badge-info" : item.group === "command" ? "badge-success" : "badge-secondary";
        badge.className = "badge " + bClass;
        badge.textContent = item.category;
        topRow.appendChild(badge);

        var copyOneBtn = document.createElement("button");
        copyOneBtn.type = "button";
        copyOneBtn.className = "diagram-label-pill";
        copyOneBtn.title = "Copy this flashcard";
        var cIc = document.createElement("span");
        cIc.className = "material-symbols-outlined diagram-pill-icon";
        cIc.textContent = "content_copy";
        var cTxt = document.createElement("span");
        cTxt.textContent = "Copy";
        copyOneBtn.appendChild(cIc);
        copyOneBtn.appendChild(cTxt);
        copyOneBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          var line = formatFlashcardTsv([item]);
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(line).then(function () {
              cTxt.textContent = "Copied!";
              setTimeout(function () { cTxt.textContent = "Copy"; }, 1800);
            });
          }
        });
        topRow.appendChild(copyOneBtn);

        var title = document.createElement("h4");
        title.className = "archive-term-title";
        title.textContent = item.term;

        var bodyWrap = document.createElement("div");
        bodyWrap.className = "archive-term-body";

        var defP = document.createElement("p");
        defP.className = "resource-desc";
        defP.textContent = item.definition;
        bodyWrap.appendChild(defP);

        if (item.example) {
          var exCode = document.createElement("div");
          exCode.className = "vocab-example-box";
          exCode.textContent = item.example;
          bodyWrap.appendChild(exCode);
        }

        if (quizFlipMode) {
          var hint = document.createElement("span");
          hint.className = "archive-quiz-reveal-hint";
          hint.textContent = "Click card to flip & reveal definition";
          card.appendChild(topRow);
          card.appendChild(title);
          card.appendChild(hint);
          card.appendChild(bodyWrap);
          card.addEventListener("click", function () {
            card.classList.toggle("quiz-hidden");
          });
        } else {
          card.appendChild(topRow);
          card.appendChild(title);
          card.appendChild(bodyWrap);
        }

        grid.appendChild(card);
      });

      host.appendChild(grid);
    }

    render();

    window.ArchiveGlossary = {
      filterByQuery: function (q) {
        currentSearchQuery = q || "";
        render();
      }
    };
  }

  window.initArchiveGlossary = initArchiveGlossary;
})();

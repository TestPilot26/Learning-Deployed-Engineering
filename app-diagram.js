// Deployed Eng Pipeline — Stop 2 Interactive Illustrated Diagram of an App
// Renders an image-first visual cross-section of an App (Front End Half <-> Center Messenger Bridge <-> Back End Half,
// plus bidirectional bridges to the Database Vault and Outside AI/Payment Services).
// Users click any component or coding language pill button to explore details without initial text overload.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  var APP_DIAGRAM_ITEMS = {
    // --- FRONT END HALF ---
    "fe-overview": {
      id: "fe-overview",
      label: "Front end",
      tag: "App half",
      icon: "devices",
      badgeClass: "badge-info",
      headline: "Front end (What the user sees and clicks)",
      oneLiner: "Where buttons, text, colors, and menus live right inside the visitor's phone or laptop browser.",
      whatItIs: "When you open Instagram, Airbnb, or this website, everything you can see and tap on your screen is the Front End. Your web browser downloads the front-end code and draws the screen on your device. Because it runs on the visitor's own phone or computer, anyone can right-click and 'Inspect' it—so it is purely for visuals and user interaction, never for keeping secrets.",
      whenToUse: "Every app with a screen has a front end. For simple sites, plain HTML, CSS, and JavaScript are enough; for multi-screen apps, most engineers use React or Next.js.",
      codeExample: "<button class=\"save-btn\">Save my progress</button>",
      goodSetup: "Draws a fast, clean screen, shows a friendly loading spinner while waiting, and asks the Back End whenever it needs private data.",
      fragileSetup: "Hides secret AI billing passwords inside the browser code (where any visitor can steal them) or freezes the screen without telling the user why."
    },
    "fe-ui": {
      id: "fe-ui",
      label: "UI (User interface)",
      tag: "Visuals",
      icon: "dashboard_customize",
      badgeClass: "badge-info",
      headline: "UI — User interface (Buttons, forms, cards & layouts)",
      oneLiner: "The actual visual building blocks on the screen that a human touches, types into, or reads.",
      whatItIs: "'UI' stands for User Interface. It simply means the visible controls on the page: navigation bars, search boxes, clickable buttons, pop-up dialogs, and cards. Good UI makes it obvious what to click next without overwhelming your eyes.",
      whenToUse: "Whenever you design how a person interacts with your app. Using a design system (like Google Material 3 or Tailwind UI) keeps button sizes, colors, and spacing consistent.",
      codeExample: "Search bar + 'Clear (X)' button + clickable Stop cards",
      goodSetup: "Uses consistent spacing, clear labels, dark/light mode support, and visible error messages when something goes wrong.",
      fragileSetup: "Packs 20 tiny unlabelled buttons onto one screen or uses low-contrast text that is impossible to read on a phone."
    },
    "lang-html-css": {
      id: "lang-html-css",
      label: "HTML & CSS",
      tag: "Language",
      icon: "palette",
      badgeClass: "badge-info",
      headline: "HTML & CSS (The structure and paint of the screen)",
      oneLiner: "Talks to the user's web browser to place text and buttons on the page (HTML) and style their colors and layout (CSS).",
      whatItIs: "Think of building a house: HTML is the wooden frame that says 'put a heading here, a paragraph here, and a button here.' CSS is the paint and interior design that says 'make that button blue, round its corners, and stack the cards in two columns.'",
      whenToUse: "Used in 100% of websites. Pros: every browser on earth understands HTML & CSS automatically with zero installation. Tradeoff: they only draw visuals—they cannot calculate rules or talk to servers by themselves.",
      codeExample: "<h1>Deployed Eng Pipeline</h1>   /* CSS: color: var(--color-primary); */",
      goodSetup: "Uses clean semantic tags (<header>, <main>, <button>) and shared color variables so light and dark mode switch smoothly.",
      fragileSetup: "Hardcodes random hex colors (#ff0033) and pixel widths on every single line so the page breaks on mobile phones."
    },
    "lang-js-ts": {
      id: "lang-js-ts",
      label: "JavaScript / TypeScript",
      tag: "Language",
      icon: "bolt",
      badgeClass: "badge-info",
      headline: "JavaScript & TypeScript (Makes the screen come alive)",
      oneLiner: "Talks between the user's screen and the back end—listening for button clicks, sending messages, and updating the page live.",
      whatItIs: "If HTML is the skeleton and CSS is the paint, JavaScript (JS) is the muscles that make the webpage interactive. When you click a tab or type in a search bar and results filter instantly without reloading the page, that's JavaScript. TypeScript (TS) is simply JavaScript with a built-in spell-checker that warns you in your editor if you misspelled a variable before you even run the app.",
      whenToUse: "Pros: the only coding language that runs natively inside every web browser, and can also run on the back end (Node.js). Tradeoff: browser JS is visible to users, so secret keys must stay on the back end.",
      codeExample: "button.addEventListener('click', () => fetch('/api/save'));",
      goodSetup: "Uses TypeScript (or clean modular JS files) and checks for errors whenever it fetches data from the server.",
      fragileSetup: "Assumes the internet never hiccups—crashing the whole screen if one server message comes back empty."
    },
    "tool-react-next": {
      id: "tool-react-next",
      label: "UI frameworks (React, Next.js, Gradio...)",
      tag: "Category · UI frameworks",
      icon: "widgets",
      badgeClass: "badge-info",
      headline: "Frontend UI frameworks & AI demo builders (e.g. React, Next.js, Vue, Svelte, Gradio, Streamlit)",
      oneLiner: "Reusable visual building blocks for screens—and no, not every project needs a full web framework!",
      whatItIs: "Category definition: Instead of writing one giant 5,000-line HTML file, a UI Framework lets you break your screen into small, reusable LEGO bricks called Components (like `<StopCard />` or `<SearchBar />`).\n\nCommon examples by what you are building:\n• Full web apps (JavaScript/TypeScript): React, Next.js, Vue, Svelte, Angular (often styled with Tailwind CSS, shadcn/ui, or Radix UI).\n• Fast Python AI demos & data dashboards (no HTML/JS required!): Gradio, Streamlit, Marimo (often hosted on Hugging Face Spaces).\n• Interactive data & ML notebooks: Google Colab, Jupyter Notebooks.\n• Mobile phone apps: Swift (iOS), Kotlin (Android), React Native, Expo, Flutter.",
      whenToUse: "Use plain HTML/CSS/JS for simple sites; Gradio, Streamlit, or Colab when sharing a Python AI model or data tool; and React / Next.js when building a multi-screen full-stack web app.",
      codeExample: "<StopCard title=\"Downloading the tools\" badge=\"Step 1\" />",
      goodSetup: "Picks the lightest-weight UI tool for the job and splits screens into small components under 300 lines each.",
      fragileSetup: "Dumps the entire app into one massive 2,500-line `page.tsx` file that confuses both humans and AI editors."
    },
    "tool-ai-builders": {
      id: "tool-ai-builders",
      label: "AI builders & IDEs (v0, Lovable, Cursor...)",
      tag: "Category · AI builders & IDEs",
      icon: "auto_awesome",
      badgeClass: "badge-info",
      headline: "AI UI generators vs. AI code editors (e.g. v0, Lovable, Bolt.new, Replit vs. Cursor, Windsurf, Claude Code)",
      oneLiner: "Where browser prompt-to-app generators end and full local engineering editors begin.",
      whatItIs: "Category definition: You will hear two different categories of AI coding tools mentioned constantly:\n1. Browser AI App & UI Generators (e.g. v0 by Vercel, Lovable, Bolt.new, Replit Agent, Google AI Studio Build): You type a prompt in your browser and they generate a working React/Tailwind prototype or full-stack starter in seconds.\n2. Local AI Code Editors & CLI Agents (e.g. Cursor, Windsurf, VS Code + GitHub Copilot, Claude Code, Gemini CLI): Professional editors installed on your computer where you open the actual codebase, run terminal commands, connect Git, and engineer production systems.",
      whenToUse: "Many builders sketch their first UI screen in v0, Lovable, or Bolt.new, then export the code to GitHub and open it in Cursor, Windsurf, or VS Code to wire up real backend rules and tests.",
      codeExample: "Prototype UI in v0 / Lovable  -->  Sync to GitHub  -->  Open in Cursor / VS Code",
      goodSetup: "Uses browser AI builders for fast visual drafts, then moves into Git + a local editor for real security and testing.",
      fragileSetup: "Tries to run a complex production business entirely inside a single unversioned browser prompt box."
    },

    // --- CENTER FLOWING BRIDGE (FRONT END <-> BACK END) ---
    "bridge-api": {
      id: "bridge-api",
      label: "API (The waiter)",
      tag: "Category · API messenger",
      icon: "room_service",
      badgeClass: "badge-secondary",
      headline: "API — Application Programming Interface (e.g. REST APIs, GraphQL, WebSockets, gRPC)",
      oneLiner: "Talks back and forth between the Front End screen and the Back End kitchen—taking orders and bringing back answers.",
      whatItIs: "Category definition: Imagine a restaurant: you sit at the table looking at the menu (the Front End), and the food is cooked in the private kitchen (the Back End). You aren't allowed to walk into the kitchen yourself. Instead, a Waiter (the API) takes your order ('Please save this note' or 'Show my profile'), walks into the kitchen, and brings the finished dish back to your table.\n\nCommon API styles & tools you will see:\n• REST APIs (most common): Standard URLs using `GET`, `POST`, `PUT`, `DELETE` (built with FastAPI or Flask in Python, or Next.js / Express / Hono in Node.js).\n• GraphQL & tRPC: Let the front end ask for specific fields in one trip.\n• WebSockets / Server-Sent Events (SSE): Stream live tokens word-by-word (like ChatGPT or Gemini typing).",
      whenToUse: "Used whenever your screen needs to load data, save user work, or ask an AI model a question.",
      codeExample: "POST /api/ask-guide  -->  Waiter carries question to Back End  -->  200 OK",
      goodSetup: "Has clear, predictable menu items (routes like `GET /api/posts`) and politely tells the screen if an order is invalid.",
      fragileSetup: "Lets the front end ask for 50,000 database rows in a single trip, freezing the user's phone."
    },
    "lang-json": {
      id: "lang-json",
      label: "JSON (Data envelope)",
      tag: "Category · Data format",
      icon: "data_object",
      badgeClass: "badge-secondary",
      headline: "Data interchange formats (e.g. JSON, YAML, CSV, Protocol Buffers)",
      oneLiner: "Talks between any two coding languages (like browser JavaScript and server Python) using simple `label: value` pairs.",
      whatItIs: "Category definition: Your Front End might be written in JavaScript while your Back End is written in Python. How do they understand each other? They mail messages back and forth written in a standard Data Format.\n\nCommon data formats you will recognize:\n• JSON (`.json`): The #1 universal web & AI format made of `{ \"key\": \"value\" }` pairs.\n• CSV / Parquet (`.csv`, `.parquet`): Spreadsheet tables of rows and columns for data analysis.\n• YAML / TOML (`.yaml`, `.toml`): Clean human-readable configuration files.\n• Protocol Buffers (`.proto`): Ultra-fast binary contracts between backend servers.",
      whenToUse: "JSON is used in almost 100% of modern web APIs and structured AI model responses.",
      codeExample: "{ \"user\": \"Lucy\", \"step\": 2, \"completed\": true }",
      goodSetup: "Keeps message payloads small, clean, and validated (using Zod in TypeScript or Pydantic in Python).",
      fragileSetup: "Changes field names randomly (`userName` in one place, `user_id_name` in another) so the screen displays `undefined`."
    },
    "bridge-auth": {
      id: "bridge-auth",
      label: "Login & Auth (Clerk, Auth.js...)",
      tag: "Category · Authentication",
      icon: "verified_user",
      badgeClass: "badge-success",
      headline: "Login & authentication providers (e.g. Clerk, Better Auth, Auth.js, Supabase Auth, Firebase Auth, Auth0)",
      oneLiner: "Travels with every message from the screen to the back end to prove who is logged in.",
      whatItIs: "Category definition: Authentication ('AuthN' — verifying who someone is) and Authorization ('AuthZ' — checking what they are allowed to do) give a signed-in user a tamper-proof digital wristband (an encrypted Session Cookie or JWT Token). Every time the API waiter walks to the Back End kitchen, it checks that wristband.\n\nCommon login tools & standards you will recognize:\n• Open-source auth libraries: Better Auth, Auth.js (NextAuth).\n• Managed login platforms: Clerk, Supabase Auth, Firebase Authentication, Auth0, Okta, WorkOS.\n• Social sign-in standard: OAuth 2.0 / Passkeys ('Sign in with Google, GitHub, or Apple').",
      whenToUse: "Any time your app has user accounts, private data, or paid features. Always use a battle-tested auth library or service instead of inventing password encryption from scratch.",
      codeExample: "Authorization: Bearer <encrypted-login-pass>",
      goodSetup: "The Back End checks the digital wristband on every single request before reading or editing private records.",
      fragileSetup: "Only hides the 'Admin Delete' button visually on the Front End while leaving the Back End delete URL wide open to strangers."
    },

    // --- BACK END HALF ---
    "be-overview": {
      id: "be-overview",
      label: "Back end",
      tag: "App half",
      icon: "dns",
      badgeClass: "badge-secondary",
      headline: "Back end server (The hidden engine & private kitchen)",
      oneLiner: "Where your app thinks out of sight on a secure cloud server—checking rules, guarding secret keys, and coordinating data.",
      whatItIs: "Category definition: The Back End is the half of your software that visitors never see directly. Because users cannot right-click and inspect your Back End server, this is where you enforce security rules, calculate answers, query your database, and use secret AI billing keys.\n\nCommon places Back End servers run:\n• Serverless functions (spin up per request): Vercel Functions, Cloudflare Workers, AWS Lambda, Netlify Functions.\n• Always-on container & Python servers: Render, Railway, Fly.io, Google Cloud Run, AWS ECS, DigitalOcean.",
      whenToUse: "Whenever your project needs to save data across devices, protect secret API keys, charge credit cards, or run Python/AI logic.",
      codeExample: "Server receives order -> checks Login Pass -> calls Gemini API -> saves to DB",
      goodSetup: "Double-checks every incoming message from the front end, keeps secret keys in environment variables, and logs clear errors.",
      fragileSetup: "Trusts whatever the browser sends without checking permissions, or crashes silently when an outside service is slow."
    },
    "lang-python": {
      id: "lang-python",
      label: "Python",
      tag: "Language",
      icon: "psychology",
      badgeClass: "badge-secondary",
      headline: "Python (The #1 language for AI, data science, and readable back ends)",
      oneLiner: "Talks between your Back End server, AI models, and data libraries to run smart logic and calculations.",
      whatItIs: "Python is famous for reading almost like plain English (using clean indentation instead of curly braces). It is the native language of AI, machine learning, and data science.\n\nCommon Python frameworks & libraries you will recognize:\n• Backend web APIs: FastAPI, Flask, Django.\n• Data & notebooks: Pandas, Polars, NumPy, Jupyter, Google Colab.\n• AI & machine learning: Google GenAI SDK, OpenAI SDK, Anthropic SDK, PyTorch, Hugging Face `transformers`, LangChain, LlamaIndex, Pydantic.\n• Rapid AI web demos: Gradio, Streamlit.",
      whenToUse: "Pros: easiest language to read and the undisputed king of AI and data processing. Tradeoff: doesn't run natively inside browser buttons (browsers use HTML/CSS/JS).",
      codeExample: "response = client.models.generate_content(model='gemini-2.5-flash', contents=prompt)",
      goodSetup: "Uses a clean web framework like FastAPI to receive JSON from the front end, run AI/data work in Python, and return the answer.",
      fragileSetup: "Runs a 60-second data script directly inside a web request without a background queue, causing the connection to time out."
    },
    "lang-nodejs": {
      id: "lang-nodejs",
      label: "Node.js / Bun",
      tag: "Runtime",
      icon: "terminal",
      badgeClass: "badge-secondary",
      headline: "JavaScript server runtimes (e.g. Node.js, Bun, Deno)",
      oneLiner: "Lets you use the exact same language (JavaScript / TypeScript) on your Back End server that you already use on your Front End.",
      whatItIs: "Category definition: Originally, JavaScript could only run inside a web browser. Server runtimes like Node.js (and newer alternatives like Bun and Deno) unlocked JavaScript/TypeScript so it can also run on your laptop and on cloud servers. That means a builder can write both halves of a web app (Front End and Back End) in one language.\n\nCommon Node.js backend frameworks:\n• Next.js API Routes / Server Actions, Express, Hono, Fastify, NestJS.",
      whenToUse: "Pros: one language (TypeScript) for the whole web app, and fast at handling many simultaneous web connections. Tradeoff: has fewer scientific/ML libraries than Python.",
      codeExample: "export async function POST(req) { const body = await req.json(); ... }",
      goodSetup: "Shares TypeScript data definitions between the Front End and Back End so both halves always agree.",
      fragileSetup: "Installs 150 heavy, unmaintained npm packages when a built-in browser or Node feature would do the job."
    },
    "lang-go-rust": {
      id: "lang-go-rust",
      label: "Go / Rust / C++",
      tag: "Compiled languages",
      icon: "speed",
      badgeClass: "badge-secondary",
      headline: "Compiled systems languages (e.g. Go, Rust, C++)",
      oneLiner: "Talks between high-speed cloud servers when thousands of users hit your system at the exact same millisecond.",
      whatItIs: "Category definition: Unlike Python or JavaScript (which are interpreted line-by-line as they run), Compiled Languages like Go, Rust, and C++ are translated ahead of time into ultra-fast machine code. Most cloud infrastructure tools (Docker, Kubernetes, Terraform, and fast Python tools like `uv` and `ruff`) are built in Go or Rust.",
      whenToUse: "Pros: blazing fast and rock-solid under heavy traffic. Tradeoff: takes more setup than Python or TypeScript when building your first prototype.",
      codeExample: "go func() { processBackgroundJob(job) }()   // Lightweight concurrent worker",
      goodSetup: "Used for high-throughput backend services and fast command-line tools once your product's core idea is proven.",
      fragileSetup: "Spending 3 weeks fighting low-level memory rules for a simple prototype before testing if users even want the app."
    },
    "be-cache-queue": {
      id: "be-cache-queue",
      label: "Caches & queues (Redis, Upstash, Inngest...)",
      tag: "Category · Speed & async",
      icon: "hourglass_top",
      badgeClass: "badge-secondary",
      headline: "In-memory caches & background job queues (e.g. Redis, Upstash, Inngest, Trigger.dev, Celery)",
      oneLiner: "Keeps frequent answers ready on the counter in 1 millisecond (Cache) and lines up slow 30-second AI jobs in the background (Queue).",
      whatItIs: "Category definitions & common examples:\n• In-Memory Cache & Rate Limiting (e.g. Redis, Upstash, Memcached): Keeps frequent lookups in ultra-fast RAM so your server doesn't query the database every time; also used to rate-limit users (e.g. 'Max 10 AI prompts per minute').\n• Background Job Queue / Workflow Engine (e.g. Inngest, Trigger.dev, Celery in Python, BullMQ in Node, Cloudflare Queues): A numbered ticket line for slow jobs (like generating a long AI report or video) so the user's screen gets an instant 'Working on it!' reply instead of timing out.",
      whenToUse: "Add a Cache when many people read the same data (or to rate-limit bots); add a Queue whenever an AI or data task takes longer than 3–5 seconds.",
      codeExample: "Queue.add('generate-ai-report', { userId: 42 }) -> returns Ticket #108 immediately",
      goodSetup: "Acknowledges slow jobs right away and updates the screen smoothly when the background worker finishes.",
      fragileSetup: "Leaves the user staring at a frozen button for 40 seconds until the browser gives up and shows a network error."
    },

    // --- BOTTOM-LEFT BRIDGE + DATABASE & STORAGE VAULT ---
    "lang-sql": {
      id: "lang-sql",
      label: "SQL & ORMs (Drizzle, Prisma...)",
      tag: "Category · Query language & ORMs",
      icon: "table_chart",
      badgeClass: "badge-info",
      headline: "SQL (Structured Query Language) & ORMs (e.g. Drizzle, Prisma, SQLAlchemy)",
      oneLiner: "Talks back and forth between the Back End engine and the Database vault to save, search, and update rows.",
      whatItIs: "Category definition: SQL (pronounced 'sequel' or 'S-Q-L') is the universal language for asking questions of a relational database: `SELECT name, email FROM users WHERE active = true`.\n\nWhere ORMs come in ('Object-Relational Mappers'):\n• Instead of writing raw SQL strings by hand, most engineers use an ORM library that lets you query your database safely in TypeScript or Python with autocomplete:\n  - TypeScript / Node.js ORMs: Drizzle ORM, Prisma, Kysely.\n  - Python ORMs: SQLAlchemy, SQLModel, Django ORM.",
      whenToUse: "Used whenever your backend reads or writes structured rows in PostgreSQL, Neon, Supabase, Turso, or SQLite.",
      codeExample: "SELECT title, step_number FROM pipeline_stops ORDER BY step_number ASC;",
      goodSetup: "Uses parameterized queries (`WHERE id = $1`) or an ORM (Drizzle / Prisma / SQLAlchemy) so user input can never trick the database.",
      fragileSetup: "Glues raw user text directly into a SQL string ('SQL Injection'), allowing a clever visitor to wipe the table."
    },
    "db-overview": {
      id: "db-overview",
      label: "Database & tables",
      tag: "Category · Data storage",
      icon: "database",
      badgeClass: "badge-info",
      headline: "Database (The permanent filing cabinet of your app)",
      oneLiner: "Where user accounts, posts, and saved work live permanently in organized tables so nothing vanishes when you close the tab.",
      whatItIs: "Variables inside your Front End or Back End memory disappear the moment you refresh the page or restart the server. A Database is a specialized vault that writes your data safely to disk, organizes it into structured tables or documents, and makes sure two people clicking 'Save' at the exact same instant don't overwrite each other.",
      whenToUse: "Needed as soon as you want data to survive a page refresh or be shared across different users and devices.",
      codeExample: "Table `users`: [ id: 1 | handle: 'TestPilot26' | role: 'builder' ]",
      goodSetup: "Keeps data in clean tables with automatic daily backups and an index on columns you search often.",
      fragileSetup: "Saves user work into a local `.json` file on a temporary cloud server that gets erased on every redeploy."
    },
    "tool-postgres": {
      id: "tool-postgres",
      label: "SQL DBs (Postgres, Neon, Supabase...)",
      tag: "Category · Serverless SQL DBs",
      icon: "storage",
      badgeClass: "badge-info",
      headline: "Relational / SQL Databases & Serverless Postgres (e.g. PostgreSQL, Neon, Supabase, Turso, PlanetScale, SQLite)",
      oneLiner: "Where Neon, Supabase, and Turso come in—hosting structured SQL tables in the cloud without managing servers.",
      whatItIs: "Category definition: A Relational (SQL) Database stores data in strict tables with rows and columns that link together cleanly. It is the gold-standard default for 90% of apps.\n\nWhere specific SQL tools & platforms come in:\n• PostgreSQL ('Postgres'): The world's most popular open-source relational database engine.\n• Neon: Serverless Postgres in the cloud—it spins up in 1 second, scales down to $0 when idle, and lets you 'branch' your database just like a Git branch for safe testing!\n• Supabase: Hosted Postgres plus a full Backend-as-a-Service suite (built-in user login, file storage, and auto-generated APIs).\n• SQLite & Turso: SQLite stores an entire SQL database inside a single file; Turso hosts SQLite at the cloud edge.\n• PlanetScale: Cloud-hosted MySQL built for massive scale.",
      whenToUse: "Pick Neon when you want pure, instant serverless Postgres (especially with Vercel + Drizzle/Prisma); pick Supabase when you want Postgres + Auth + Storage bundled together.",
      codeExample: "DATABASE_URL=\"postgresql://user:pass@ep-cool-sky.us-east-2.aws.neon.tech/neondb\"",
      goodSetup: "Enables Row-Level Security (RLS) or strict Back End checks so users can only read their own rows.",
      fragileSetup: "Leaves database tables publicly readable to anyone on the internet without permission rules."
    },
    "tool-nosql-vector": {
      id: "tool-nosql-vector",
      label: "NoSQL & Vector DBs (Firebase, Convex, Pinecone...)",
      tag: "Category · NoSQL, Vector & Warehouses",
      icon: "hub",
      badgeClass: "badge-info",
      headline: "Realtime Document (NoSQL) DBs, AI Vector DBs & Data Warehouses (e.g. Firebase, Convex, MongoDB, Pinecone, BigQuery)",
      oneLiner: "When you need flexible JSON documents, live real-time sync, or AI semantic memory (RAG) instead of traditional SQL tables.",
      whatItIs: "Beyond SQL tables, there are 3 other database categories you will encounter constantly:\n1. Document / Realtime NoSQL Databases (store flexible JSON objects & push live updates to screens automatically): Firebase / Cloud Firestore, Convex, MongoDB Atlas, AWS DynamoDB.\n2. Vector Databases (store numerical 'embeddings' so AI can search documents by meaning for RAG): Pinecone, pgvector (built right into Neon & Supabase!), Qdrant, Weaviate, Chroma.\n3. Analytics Data Warehouses (crunch millions of historical rows for charts, not live user clicks): Google BigQuery, Snowflake, Databricks, DuckDB.",
      whenToUse: "Use Convex or Firebase when building collaborative real-time apps (like live chat); use pgvector (in Neon/Supabase) or Pinecone when giving an AI agent long-term memory over PDFs and docs.",
      codeExample: "// Vector search: find top 5 docs closest in meaning to the user's question",
      goodSetup: "Uses pgvector inside existing Postgres (Neon/Supabase) first before adding a separate Vector DB service.",
      fragileSetup: "Uses an analytics warehouse (like BigQuery) for live user button clicks, resulting in slow 4-second page loads."
    },
    "tool-blob-storage": {
      id: "tool-blob-storage",
      label: "File storage (S3, Cloudflare R2, UploadThing...)",
      tag: "Category · Object / Blob storage",
      icon: "cloud_upload",
      badgeClass: "badge-info",
      headline: "Object / Blob File Storage (e.g. AWS S3, Cloudflare R2, UploadThing, Supabase Storage, Vercel Blob)",
      oneLiner: "Where user-uploaded images, PDFs, audio, and videos actually live (never stuff raw 50MB files inside SQL rows!).",
      whatItIs: "Category definition: Beginners often ask: 'Where do profile photos, PDFs, or AI-generated videos get saved? In Neon or Postgres?' No! Databases are built for text, numbers, and timestamps. Putting large binary files ('blobs') inside SQL rows makes your database slow and expensive.\n\nInstead, you upload files to Object / Blob Storage, which gives you back a fast CDN link (like `https://cdn.../avatar.png`), and you save only that short text URL inside your database row!\n\nCommon file storage platforms:\n• AWS S3 (Simple Storage Service) & Google Cloud Storage (GCS): The industry standards.\n• Cloudflare R2: S3-compatible storage with $0 egress bandwidth fees.\n• UploadThing, Supabase Storage & Vercel Blob: Easiest plug-and-play file uploaders for web apps.",
      whenToUse: "Any time users upload profile pictures, PDFs, CSVs, audio recordings, or videos.",
      codeExample: "1. Upload PDF to Cloudflare R2 / UploadThing -> 2. Save returned URL string in Neon/Supabase DB",
      goodSetup: "Enforces file-size limits (e.g. max 10MB) and file-type checks before allowing uploads to your storage bucket.",
      fragileSetup: "Allows anonymous visitors to upload unlimited 5GB video files straight to your cloud storage bucket."
    },

    // --- BOTTOM-RIGHT BRIDGE + OUTSIDE SUPERPOWERS VAULT ---
    "bridge-env-keys": {
      id: "bridge-env-keys",
      label: "Secret keys (.env)",
      tag: "Category · Secrets",
      icon: "key",
      badgeClass: "badge-success",
      headline: "Secret API keys & Environment Variables (.env)",
      oneLiner: "How your Back End proves its identity to paid services (like Gemini, OpenAI, or Stripe) without exposing passwords in your code.",
      whatItIs: "When your Back End calls an outside service like Gemini, OpenAI, Anthropic, or Stripe, it attaches a secret password called an API Key so they know whose account to bill. You store these keys in a private `.env` file on your laptop (hidden from Git via `.gitignore`) and paste them into your cloud host's encrypted 'Environment Variables / Secrets' settings box (in Vercel, Render, Cloud Run, or Hugging Face Spaces) for your live deployment.",
      whenToUse: "Every single time you connect to an outside service, database (like your `DATABASE_URL` for Neon/Supabase), or AI model.",
      codeExample: "const apiKey = process.env.GEMINI_API_KEY;   // Read safely on the Back End",
      goodSetup: "Keeps keys strictly on the Back End and sets a monthly dollar spending cap in the AI provider's billing dashboard.",
      fragileSetup: "Pastes `AIzaSy...` or `sk-...` directly into a Front End file and pushes it to a public GitHub repo."
    },
    "bridge-webhooks": {
      id: "bridge-webhooks",
      label: "Webhooks (Callbacks)",
      tag: "Category · Event callbacks",
      icon: "webhook",
      badgeClass: "badge-success",
      headline: "Webhooks (How outside services call your back end back)",
      oneLiner: "When a user finishes paying on Stripe or a GitHub push completes, a Webhook sends an automatic tap-on-the-shoulder message to your server.",
      whatItIs: "Normally, your Back End calls an outside service first. A Webhook is the reverse: you give an external service (like Stripe, GitHub, Clerk, Slack, or Twilio) a special URL on your Back End, and whenever an event happens ('Customer just paid $10!' or 'New code pushed to main!'), their server automatically messages your server to let it know.",
      whenToUse: "Used for Stripe payment confirmations, GitHub-to-cloud auto-deployments, and Slack/Discord/WhatsApp bots.",
      codeExample: "Stripe Event ('checkout.completed')  -->  POST https://your-app.com/api/webhook",
      goodSetup: "Verifies the webhook's cryptographic signature and checks the event ID so duplicate deliveries aren't processed twice.",
      fragileSetup: "Blindly trusts any message sent to `/api/webhook` without checking that it genuinely came from Stripe."
    },
    "ext-ai-stripe": {
      id: "ext-ai-stripe",
      label: "AI models & GPUs (Gemini, OpenAI, HF, Modal...)",
      tag: "Category · AI & GPU APIs",
      icon: "auto_awesome",
      badgeClass: "badge-success",
      headline: "AI model APIs, gateways & serverless GPU hosts (e.g. Gemini, OpenAI, Claude, OpenRouter, Hugging Face, Modal, Replicate, Ollama)",
      oneLiner: "How your Back End calls frontier LLMs, open-source models, or on-demand cloud GPUs.",
      whatItIs: "Category breakdown of the AI model ecosystem:\n1. Frontier Model APIs (hosted by the labs): Google AI Studio / Vertex AI (Gemini), OpenAI API, Anthropic (Claude).\n2. Unified AI Gateways & SDKs (one API key or SDK to switch between any model): OpenRouter, Vercel AI SDK, LiteLLM.\n3. Open-Weight Model Hubs & Serverless GPUs (run open models like Llama, DeepSeek, Flux, or Whisper on cloud GPUs paid by the second): Hugging Face, Modal, Replicate, Together AI, Groq, Fireworks AI, Baseten.\n4. Local Model Runners (run open models offline on your own laptop for $0): Ollama, LM Studio.",
      whenToUse: "Use Gemini / OpenAI / Claude APIs for frontier reasoning; Modal, Replicate, or Together AI for custom Python/GPU workloads; and Ollama for local offline testing.",
      codeExample: "Back End  <-- HTTPS + Secret Key -->  Gemini / OpenRouter / Modal / Replicate",
      goodSetup: "Sets a timeout, rate limit, and monthly billing cap so a runaway loop can never rack up a surprise bill.",
      fragileSetup: "Calls paid AI APIs directly from browser JavaScript where anyone can steal your API key."
    },
    "ext-payments-ops": {
      id: "ext-payments-ops",
      label: "Payments, email, DNS & monitoring (Stripe, Resend, Sentry...)",
      tag: "Category · Payments, Email & Ops",
      icon: "credit_card",
      badgeClass: "badge-success",
      headline: "Payments, Email, Domains/DNS & Monitoring (e.g. Stripe, Resend, Cloudflare, Sentry, PostHog, LangSmith)",
      oneLiner: "The essential operational services every real product plugs in to charge money, send emails, connect a domain, and catch bugs.",
      whatItIs: "Every category of operational service you will see in real-world stacks:\n• Payments & Subscriptions: Stripe, Lemon Squeezy, Polar, Paddle, PayPal.\n• Transactional Email & SMS: Resend, SendGrid, Postmark, AWS SES, Twilio (for SMS/WhatsApp).\n• Domains & DNS (pointing `yourapp.com` to your host): Cloudflare DNS, Namecheap, Porkbun, AWS Route 53.\n• Crash Monitoring & Error Tracking: Sentry, LogRocket, Datadog.\n• Product Analytics & Feature Flags: PostHog, Amplitude, Google Analytics.\n• AI Tracing & Evals: LangSmith, Braintrust, Arize Phoenix, Weights & Biases.",
      whenToUse: "Plug these in when turning a working prototype into a real product with custom domains, paying users, and error alerts.",
      codeExample: "Stripe (billing) + Resend (emails) + Cloudflare (domain) + Sentry (crash alerts)",
      goodSetup: "Uses hosted Stripe Checkout and sets up Sentry + PostHog so you know immediately if a user hits an error.",
      fragileSetup: "Launches to users with zero error logging—so when the app breaks on iPhones, you have no idea."
    },
    "lang-bash": {
      id: "lang-bash",
      label: "Bash / Terminal",
      tag: "Language",
      icon: "terminal",
      badgeClass: "badge-neutral",
      headline: "Bash / Zsh shell commands (How you talk directly to your computer & cloud servers)",
      oneLiner: "Talks between you (or your AI coding agent) and the operating system to install tools, start servers, and push code.",
      whatItIs: "Bash (or Zsh on Mac) is the command-line language you type inside your Terminal window. Commands like `cd`, `ls`, `git push`, and `npm run dev` are all shell commands. Watching the terminal commands an AI agent runs is the fastest way to know what it is actually doing on your machine.",
      whenToUse: "Pros: works identically on your laptop and on Linux cloud servers. Tradeoff: great for short commands and setup scripts; for complex app logic, use Python or TypeScript.",
      codeExample: "git status && npm run dev",
      goodSetup: "Checks `pwd` and `git status` before running destructive commands or deploying.",
      fragileSetup: "Blindly approves an AI agent running `rm -rf` or `git push --force` without reading the command first."
    }
  };

  function createPillBtn(itemId, selectedId, onSelect, allBtns) {
    var item = APP_DIAGRAM_ITEMS[itemId];
    if (!item) return document.createElement("span");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "diagram-label-pill" + (item.id === selectedId ? " active" : "");
    btn.setAttribute("data-app-item-id", item.id);

    var ic = document.createElement("span");
    ic.className = "material-symbols-outlined diagram-pill-icon";
    ic.textContent = item.icon;

    var lbl = document.createElement("span");
    lbl.textContent = item.label;

    btn.appendChild(ic);
    btn.appendChild(lbl);

    btn.addEventListener("click", function () {
      onSelect(item);
    });
    allBtns.push(btn);
    return btn;
  }

  function getAppStageForItem(itemId) {
    if (
      itemId === "fe-overview" ||
      itemId === "fe-ui" ||
      itemId === "lang-html-css" ||
      itemId === "lang-js-ts" ||
      itemId === "tool-react-next" ||
      itemId === "tool-ai-builders"
    ) {
      return "stage-fe";
    }
    if (
      itemId === "be-overview" ||
      itemId === "lang-python" ||
      itemId === "lang-nodejs" ||
      itemId === "lang-go-rust" ||
      itemId === "be-cache-queue" ||
      itemId === "bridge-api" ||
      itemId === "lang-json" ||
      itemId === "bridge-auth"
    ) {
      return "stage-be";
    }
    if (
      itemId === "db-overview" ||
      itemId === "tool-postgres" ||
      itemId === "tool-nosql-vector" ||
      itemId === "tool-blob-storage" ||
      itemId === "lang-sql"
    ) {
      return "stage-db";
    }
    return "stage-user";
  }

  function renderAppInfraDiagram(container) {
    var art = window.DiagramIllustrations;
    if (!art) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive diagram of an app — click any stage or coding language pill to open its guide in the side panel";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Inside a modern app: how the screen, cloud server, database, and user connect";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var selectedId = "fe-overview";
    var showFragileMode = false;
    var allPillBtns = [];
    var stageCards = [];

    function syncActiveStates() {
      var activeStageKey = getAppStageForItem(selectedId);
      allPillBtns.forEach(function (b) {
        if (b.getAttribute("data-app-item-id") === selectedId) b.classList.add("active");
        else b.classList.remove("active");
      });
      stageCards.forEach(function (sc) {
        if (sc.getAttribute("data-stage-key") === activeStageKey) sc.classList.add("stage-active");
        else sc.classList.remove("stage-active");
      });
    }

    function selectItem(item) {
      if (!item) return;
      selectedId = item.id;
      syncActiveStates();
      updateAppInspector(true);
    }

    function buildCluster(ids) {
      var cluster = document.createElement("div");
      cluster.className = "diagram-pill-cluster loop-stage-pills";
      ids.forEach(function (id) {
        cluster.appendChild(createPillBtn(id, selectedId, selectItem, allPillBtns));
      });
      return cluster;
    }

    var loopCanvas = document.createElement("div");
    loopCanvas.className = "loop-diagram-canvas";

    // =========================================================================
    // TOP ROW: [1. App or website] --Request--> [2. Cloud server] --Gets data--> [3. Database]
    // =========================================================================
    var topRow = document.createElement("div");
    topRow.className = "loop-top-row";

    // STAGE 1: App or Website (Front End)
    var stage1 = art.createLoopStageCard({
      stageKey: "stage-fe",
      artSvg: art.createDeviceArt(),
      title: "1. App or website",
      subtitle: "Front end · What users see",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["fe-overview"]);
      },
      pillsContainer: buildCluster([
        "fe-overview",
        "fe-ui",
        "lang-html-css",
        "lang-js-ts",
        "tool-react-next",
        "tool-ai-builders"
      ])
    });
    stageCards.push(stage1.card);
    topRow.appendChild(stage1.card);

    // ARROW 1: Request (API, JSON & Login Pass)
    topRow.appendChild(
      art.createHorizontalStepArrow(
        "Request",
        "API & JSON",
        buildCluster(["bridge-api", "lang-json", "bridge-auth"])
      )
    );

    // STAGE 2: Cloud Server (Back End)
    var stage2 = art.createLoopStageCard({
      stageKey: "stage-be",
      artSvg: art.createCloudServerArt("Cloud Server"),
      title: "2. Cloud server",
      subtitle: "Back end · Processes request",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["be-overview"]);
      },
      pillsContainer: buildCluster([
        "be-overview",
        "lang-python",
        "lang-nodejs",
        "lang-go-rust",
        "be-cache-queue"
      ])
    });
    stageCards.push(stage2.card);
    topRow.appendChild(stage2.card);

    // ARROW 2: Gets Data (SQL)
    topRow.appendChild(
      art.createHorizontalStepArrow(
        "Gets data",
        "SQL & ORMs",
        buildCluster(["lang-sql"])
      )
    );

    // STAGE 3: Database & Storage
    var stage3 = art.createLoopStageCard({
      stageKey: "stage-db",
      artSvg: art.createDatabaseArt("011010"),
      title: "3. Database & storage",
      subtitle: "SQL, NoSQL, Vector & Files",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["db-overview"]);
      },
      pillsContainer: buildCluster([
        "db-overview",
        "tool-postgres",
        "tool-nosql-vector",
        "tool-blob-storage"
      ])
    });
    stageCards.push(stage3.card);
    topRow.appendChild(stage3.card);

    loopCanvas.appendChild(topRow);

    // =========================================================================
    // BOTTOM ROW: [Left Curved Return] <---> [4. User & outside services] <--- [Right Curved Return]
    // =========================================================================
    var bottomRow = document.createElement("div");
    bottomRow.className = "loop-bottom-row";

    bottomRow.appendChild(art.createCurvedReturnWing("left", "Sends results"));

    var stage4 = art.createLoopStageCard({
      stageKey: "stage-user",
      artSvg: art.createUserArt(),
      title: "4. User & outside services",
      subtitle: "AI GPUs, Stripe, DNS & CLI",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["ext-ai-stripe"]);
      },
      pillsContainer: buildCluster([
        "ext-ai-stripe",
        "ext-payments-ops",
        "bridge-env-keys",
        "bridge-webhooks",
        "lang-bash"
      ])
    });
    stageCards.push(stage4.card);
    bottomRow.appendChild(stage4.card);

    bottomRow.appendChild(art.createCurvedReturnWing("right", "Returns data"));

    loopCanvas.appendChild(bottomRow);
    card.appendChild(loopCanvas);
    syncActiveStates();


    function updateAppInspector(isUserClick) {
      var item = APP_DIAGRAM_ITEMS[selectedId] || APP_DIAGRAM_ITEMS["fe-overview"];
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;

      window.PipelineAgent.showInspector(
        function (inspectorEl) {
          var badgeWrap = document.createElement("div");
          badgeWrap.className = "badge-row";
          var b1 = document.createElement("span");
          b1.className = "badge " + item.badgeClass;
          b1.textContent = item.tag;
          var b2 = document.createElement("span");
          b2.className = "badge badge-neutral";
          b2.textContent = item.oneLiner;
          badgeWrap.appendChild(b1);
          badgeWrap.appendChild(b2);
          inspectorEl.appendChild(badgeWrap);

          var h4 = document.createElement("h4");
          h4.textContent = item.headline;
          inspectorEl.appendChild(h4);

          var pWhat = document.createElement("p");
          pWhat.className = "resource-desc pre-line-text";
          pWhat.textContent = item.whatItIs;
          inspectorEl.appendChild(pWhat);

          var pWhen = document.createElement("p");
          pWhen.className = "resource-desc";
          pWhen.textContent = "When & why to use it: " + item.whenToUse;
          inspectorEl.appendChild(pWhen);

          var codeBox = document.createElement("div");
          codeBox.className = "vocab-example-box";
          codeBox.textContent = item.codeExample;
          inspectorEl.appendChild(codeBox);

          var archBox = document.createElement("div");
          archBox.className = "arch-mode-banner " + (showFragileMode ? "bad-mode" : "good-mode");
          var archIcon = document.createElement("span");
          archIcon.className = "material-symbols-outlined safety-icon";
          archIcon.textContent = showFragileMode ? "error" : "check_circle";
          var archText = document.createElement("span");
          archText.textContent = showFragileMode
            ? "Fragile vibe-coded setup: " + item.fragileSetup
            : "Healthy deployed setup: " + item.goodSetup;
          archBox.appendChild(archIcon);
          archBox.appendChild(archText);
          inspectorEl.appendChild(archBox);

          var modeBtn = document.createElement("button");
          modeBtn.type = "button";
          modeBtn.className = "nav-btn" + (showFragileMode ? "" : " active");
          var mIcon = document.createElement("span");
          mIcon.className = "material-symbols-outlined btn-icon-sm";
          mIcon.textContent = showFragileMode ? "warning" : "verified";
          var mLabel = document.createElement("span");
          mLabel.textContent = showFragileMode
            ? "Switch to healthy deployed setup"
            : "Compare fragile vibe-coded setup";
          modeBtn.appendChild(mIcon);
          modeBtn.appendChild(mLabel);
          modeBtn.addEventListener("click", function () {
            showFragileMode = !showFragileMode;
            updateAppInspector(false);
          });
          inspectorEl.appendChild(modeBtn);
        },
        {
          autoOpen: Boolean(isUserClick),
          pulse: Boolean(isUserClick),
          itemTitle: item.label
        }
      );
    }

    updateAppInspector(false);
    container.appendChild(card);
  }

  window.renderAppInfraDiagram = renderAppInfraDiagram;
})();

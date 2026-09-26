// Deployed Eng Pipeline — Stop 7 Interactive Diagrams:
// 1. Illustrated Open Source Workflow (Installing a Library vs. Forking & Cloning a Full Repo)
// 2. Interactive Shipping Resource Stack (Where to Find the Best Templates, Auth, DBs & AI Tools)
// 3. Interactive Watch-Outs & Cautions Shield (Licenses, Slopsquatting, .env Leaks, Rate Limits)
// Strictly adheres to BillSkill GM3 tokens & SecureCoder DOM creation (zero innerHTML).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  var OPEN_SOURCE_ITEMS = {
    // =========================================================================
    // PART 1: HOW TO DOWNLOAD, USE & BUILD ON TOP OF OPEN SOURCE (6 NODES)
    // =========================================================================
    "os-discover-vet": {
      id: "os-discover-vet",
      track: "library",
      stepNum: "Step 1A",
      label: "1. Discover & vet package",
      tag: "Library track",
      badgeClass: "badge-info",
      icon: "travel_explore",
      oneLiner: "Search GitHub, npm, or PyPI and check health signals before installing",
      headline: "Discovering & vetting an open-source library before you trust it",
      whatItIs: "Open-source software is code that creators publish publicly on GitHub so anyone can inspect, download, and build on top of it instead of reinventing the wheel. Before downloading any package from npm (JavaScript) or PyPI (Python), spend 30 seconds checking four health signals on its GitHub page: (1) License (MIT or Apache 2.0), (2) Last commit date (ideally within the last few months), (3) Weekly downloads, and (4) Clear README documentation.",
      whenToUse: "Whenever you need a solved building block—like date formatting, icons (Lucide), data validation (Zod), payments (Stripe SDK), or UI components (shadcn/ui)—instead of prompting AI to write 1,000 lines of custom code from scratch.",
      codeExample: "# Check a package's metadata & security advisories from your terminal:\nnpm view lucide-react\nnpm audit",
      watchOut: "Watch out for 'Slopsquatting': AI models sometimes hallucinate package names that don't exist, and scammers register those exact fake names with malware. Always verify the package exists on official GitHub/npm first!",
      resourceTitle: "Open: GitHub Explore & Trending",
      resourceUrl: "https://github.com/explore"
    },
    "os-install-pkg": {
      id: "os-install-pkg",
      track: "library",
      stepNum: "Step 2A",
      label: "2. Install (npm / pip / uv)",
      tag: "Library track",
      badgeClass: "badge-info",
      icon: "download",
      oneLiner: "Download the library into your project folder & lock its version",
      headline: "Downloading a library into your project: npm install & pip install",
      whatItIs: "When you want to use an open-source building block inside your own app, you don't download a .zip file from a browser. Instead, you run 'npm install <name>' (for JavaScript/TypeScript) or 'pip install <name>' / 'uv add <name>' (for Python) in your terminal. This automatically downloads the library into your local 'node_modules/' or '.venv/' folder and writes the exact version number into your 'package.json' and 'package-lock.json' receipt files.",
      whenToUse: "Use this track when you already have your own project folder and want to snap in a specific capability (like an AI SDK, chart library, or icon set).",
      codeExample: "# JavaScript / TypeScript (adds to package.json & node_modules/):\nnpm install @google/genai lucide-react\n\n# Python (inside a virtual environment):\npip install google-genai fastapi",
      watchOut: "Never commit your 'node_modules/' or '.venv/' folder to GitHub (they contain tens of thousands of files!). Always put 'node_modules/' in your '.gitignore' file and only commit 'package.json' and 'package-lock.json'.",
      resourceTitle: "Open: npm Registry Search",
      resourceUrl: "https://www.npmjs.com/"
    },
    "os-import-compose": {
      id: "os-import-compose",
      track: "library",
      stepNum: "Step 3A",
      label: "3. Import & build on top",
      tag: "Library track",
      badgeClass: "badge-success",
      icon: "extension",
      oneLiner: "Import the open-source building block into your own file and customize it",
      headline: "Importing and composing open-source libraries in your code",
      whatItIs: "Once a package is installed, you bring it into your code file with a single 'import' line at the top (e.g. 'import { Calendar } from \"lucide-react\"'). Your code calls the open-source library's tested functions while you focus 100% on your unique product logic and user workflow.",
      whenToUse: "Every day as a deployed engineer—modern apps are ~80% standard open-source primitives composed together with ~20% custom product glue.",
      codeExample: "// Inside your app.js or page.tsx:\nimport { z } from \"zod\"; // Open-source validation library\n\nconst SignupSchema = z.object({\n  email: z.string().email(),\n  role: z.enum([\"engineer\", \"designer\"])\n});",
      watchOut: "Don't edit files inside 'node_modules/' directly—any changes inside 'node_modules/' are wiped out the next time you or Vercel runs 'npm install'. Wrap or configure the library in your own files instead.",
      resourceTitle: "Open: shadcn/ui (Copy-paste open-source UI you own)",
      resourceUrl: "https://ui.shadcn.com/"
    },
    "os-fork-template": {
      id: "os-fork-template",
      track: "repo",
      stepNum: "Step 1B",
      label: "4. Fork or 'Use template'",
      tag: "Full repo track",
      badgeClass: "badge-secondary",
      icon: "call_split",
      oneLiner: "Copy a whole working open-source app into your own GitHub account",
      headline: "Starting from a complete open-source repo: 'Use this template' vs. 'Fork'",
      whatItIs: "Instead of starting from an empty folder, you can start from a complete, working open-source starter app on GitHub! There are two buttons at the top right of GitHub repos:\n• 'Use this template': Creates a brand-new, clean repository in your GitHub account with all the starter files, ready for your own project.\n• 'Fork': Creates a linked copy of an open-source repository in your GitHub account so you can both build on top of it AND optionally pull updates from (or contribute fixes back to) the original creator.",
      whenToUse: "When kicking off a new web app, AI agent, or SaaS tool and you want authentication, database wiring, and styling already set up properly from day one.",
      codeExample: "# Option A: Click 'Use this template' or 'Fork' on GitHub.com\n# Option B: Create directly from a Vercel / Next.js open-source template:\nnpx create-next-app@latest my-app --example https://github.com/vercel/ai-chatbot",
      watchOut: "Before building a commercial product on top of a forked repo, check its 'LICENSE' file! Make sure it is MIT, Apache-2.0, or BSD—avoid AGPL-3.0 or GPL-3.0 if you plan to keep your customizations private.",
      resourceTitle: "Open: Vercel Open-Source Starter Templates",
      resourceUrl: "https://vercel.com/templates"
    },
    "os-clone-setup": {
      id: "os-clone-setup",
      track: "repo",
      stepNum: "Step 2B",
      label: "5. git clone & .env setup",
      tag: "Full repo track",
      badgeClass: "badge-secondary",
      icon: "terminal",
      oneLiner: "Download the repo to your laptop, install dependencies & wire .env keys",
      headline: "The 4 commands to boot any open-source repo on your laptop",
      whatItIs: "Almost every open-source project on Earth follows the exact same 4-step boot ritual once you fork it:\n1. 'git clone <url>' — downloads the folder to your laptop.\n2. 'cd <folder>' — steps inside the project workspace.\n3. 'npm install' (or 'pip install -r requirements.txt') — downloads all open-source packages listed in its recipe file.\n4. 'cp .env.example .env' — copies the blank environment variable template into your private '.env' file so you can paste your own API keys.",
      whenToUse: "Every single time you download an open-source repository or starter kit from GitHub to run locally on 'localhost'.",
      codeExample: "git clone git@github.com:TestPilot26/my-forked-app.git\ncd my-forked-app\nnpm install\ncp .env.example .env   # Paste your own keys into .env, NEVER into .env.example!\nnpm run dev",
      watchOut: "Never paste your real secret API keys into '.env.example'! '.env.example' is meant to be shared publicly on GitHub; only '.env' is hidden by '.gitignore'.",
      resourceTitle: "Open: GitHub Docs — Forking & Cloning a Repo",
      resourceUrl: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"
    },
    "os-customize-ship": {
      id: "os-customize-ship",
      track: "repo",
      stepNum: "Step 3B",
      label: "6. Customize, sync & ship",
      tag: "Full repo track",
      badgeClass: "badge-success",
      icon: "rocket_launch",
      oneLiner: "Modify the repo on a branch, push to your GitHub, and deploy to Vercel",
      headline: "Building on top of open source & syncing upstream improvements",
      whatItIs: "Once the open-source starter runs on your laptop ('localhost:3000'), you can point your AI coding assistant at the workspace to customize the UI, swap out routes, and add your own features! Even better: if the original open-source creators fix a security bug next month, you can pull their latest fixes into your fork using an 'upstream' remote.",
      whenToUse: "As you evolve an open-source starter kit into your own deployed production application.",
      codeExample: "# Push your customized version to your own GitHub & auto-deploy on Vercel:\ngit checkout -b feat/custom-workflow\ngit commit -am \"Add custom workflow\"\ngit push -u origin feat/custom-workflow\n\n# Optional: Pull bug fixes from the original open-source repo ('upstream'):\ngit remote add upstream https://github.com/original-author/repo.git\ngit pull upstream main",
      watchOut: "Keep your customizations modular (in separate files or folders where possible) so pulling updates from the original open-source project doesn't create massive merge conflicts.",
      resourceTitle: "Open: First Contributions (How to give back to open source)",
      resourceUrl: "https://firstcontributions.github.io/"
    },

    // =========================================================================
    // PART 2: WAYS TO HOST, SHARE & BUILD — DEFINED BY CATEGORY FIRST (9 PILLS)
    // =========================================================================
    "ship-vercel-templates": {
      id: "ship-vercel-templates",
      label: "Web app & static hosts (Vercel, Netlify, Cloudflare, GitHub Pages)",
      tag: "Category · Web hosting",
      badgeClass: "badge-info",
      icon: "public",
      oneLiner: "For websites, blogs, portfolios & full-stack web apps that deploy automatically on git push",
      headline: "Category 1 of Hosting: Frontend, static & full-stack web app platforms",
      whatItIs: "Category definition: When what you built is a website, documentation guide, or interactive web app (HTML/CSS/JS, React, Next.js, Astro, Svelte, Vue), a Web App Host connects to your Git repository, builds your site in the cloud on every 'git push', and serves it globally over a fast Content Delivery Network (CDN).\n\nCommon platforms in this category:\n• Full-stack & frontend web hosts: Vercel, Netlify, Cloudflare Pages, Firebase Hosting, AWS Amplify.\n• Free static site hosts (great for docs, blogs & portfolios with zero server cost): GitHub Pages, Cloudflare Pages, GitLab Pages.",
      whenToUse: "Use when your project has a custom web UI in the browser and fast API routes (under 10–60 seconds).",
      codeExample: "# Push to GitHub -> Vercel / Netlify / Cloudflare Pages auto-deploys:\ngit push origin main   # Live https:// preview & production link in ~20s",
      watchOut: "Serverless web hosts aren't meant for 10-minute Python jobs or heavy GPUs—pair them with a backend container host or AI model host for heavy compute.",
      resourceTitle: "Explore Vercel & Web Starter Templates",
      resourceUrl: "https://vercel.com/templates"
    },
    "ship-ai-huggingface": {
      id: "ship-ai-huggingface",
      label: "AI demos, models & notebooks (Hugging Face, Colab, Replicate, Modal)",
      tag: "Category · AI & notebook hosting",
      badgeClass: "badge-info",
      icon: "psychology",
      oneLiner: "When you DO NOT need a full web app—share Python AI demos, open models, datasets, or live notebooks",
      headline: "Category 2 of Hosting: AI demo spaces, model hubs & interactive notebooks (No full web app needed!)",
      whatItIs: "Category definition: Not everything you build or share needs to be a full-stack React web app! If you trained a model, built a Python AI workflow, or analyzed a dataset, these platforms let people try or run your work directly in their browser with zero frontend web engineering:\n\nCommon platforms in this category:\n• Hugging Face ('The GitHub of AI/ML'):\n  - Hugging Face Spaces: Turn a 20-line Python script (using Gradio or Streamlit) into a live, shareable interactive AI demo page.\n  - Hugging Face Models & Datasets: Where the world shares and downloads 1M+ open-weight AI models and public datasets.\n• Interactive Cloud Notebooks (run Python cell-by-cell in the browser): Google Colab (includes free cloud GPUs/TPUs), Jupyter Notebooks, Kaggle Notebooks, Marimo.\n• Serverless Cloud GPUs for custom models: Replicate, Modal, Together AI, Baseten, RunPod.",
      whenToUse: "Whenever you want to share an AI prototype, Python tool, data analysis, or machine learning model without building a full website from scratch.",
      codeExample: "# A complete interactive AI web demo in 4 lines of Python (Gradio on Hugging Face Spaces):\nimport gradio as gr\ndemo = gr.Interface(fn=summarize_text, inputs=\"text\", outputs=\"text\")\ndemo.launch()",
      watchOut: "Public Hugging Face Spaces and Colab links are visible to everyone by default—keep private API keys inside Hugging Face 'Repository Secrets' or Colab 'Secrets' (the key icon on the left), never inside notebook cells!",
      resourceTitle: "Open Hugging Face Spaces & Model Hub",
      resourceUrl: "https://huggingface.co/spaces"
    },
    "ship-vercel-cloudflare": {
      id: "ship-vercel-cloudflare",
      label: "Backend servers, containers & clouds (Render, Railway, Cloud Run, AWS)",
      tag: "Category · Backend & cloud infra",
      badgeClass: "badge-info",
      icon: "dns",
      oneLiner: "For always-on Python APIs (FastAPI/Flask), Docker containers, background workers & enterprise cloud",
      headline: "Category 3 of Hosting: Backend container platforms & major cloud providers ('Hyperscalers')",
      whatItIs: "Category definition: When your project is a Python backend server (FastAPI, Flask, Django), a long-running background worker, a Discord/Slack bot, or a Docker container (a portable box that bundles your code and its exact operating system together), you host it on a Backend Server or Cloud Container Platform.\n\nCommon platforms in this category:\n• Developer-friendly server & container hosts (PaaS): Render, Railway, Fly.io, DigitalOcean App Platform, Heroku.\n• Container packaging tool: Docker (creates a 'Dockerfile' so your code runs identically on any laptop or server).\n• The 'Big 3' Cloud Infrastructure Providers ('Hyperscalers'):\n  - Google Cloud (GCP): Cloud Run (1-command serverless containers), Vertex AI, Google Cloud Storage.\n  - Amazon Web Services (AWS): EC2 (virtual servers), AWS Lambda, S3 (file storage).\n  - Microsoft Azure: Azure App Service, Azure OpenAI.\n• Package Registries (when shipping a code library or CLI tool instead of a server): PyPI ('pip install'), npm ('npm install'), Crates.io (Rust), Homebrew.",
      whenToUse: "Use Render, Railway, or Google Cloud Run whenever you need a dedicated Python backend, Docker container, or requests that run longer than 60 seconds.",
      codeExample: "# Deploy any Python / Docker backend to Google Cloud Run in 1 command:\ngcloud run deploy my-api --source . --region us-central1",
      watchOut: "Always-on cloud servers and GPUs bill by the hour if left running—use auto-scaling to zero (like Cloud Run) and set a hard budget alert in your cloud console.",
      resourceTitle: "Open Render & Cloud Run Guides",
      resourceUrl: "https://render.com/"
    },
    "ship-awesome-github": {
      id: "ship-awesome-github",
      label: "Starter templates, sandboxes & directories (GitHub Awesome, Replit, v0)",
      tag: "Category · Discovery & sandboxes",
      badgeClass: "badge-secondary",
      icon: "star",
      oneLiner: "Where to find vetted open-source libraries, starter templates, and instant browser coding sandboxes",
      headline: "Discovery directories, starter templates & browser coding sandboxes",
      whatItIs: "Category definition: Before writing code from scratch, engineers check curated directories for vetted open-source libraries, clone official starter templates, or spin up a quick prototype in a browser sandbox.\n\nCommon sites & tools in this category:\n• Vetted open-source directories: GitHub 'Awesome' Lists ('sindresorhus/awesome'), GitHub Trending, Papers With Code (AI research + code).\n• Official starter template galleries: Vercel Templates, Next.js Examples, Supabase Starters, Astro Themes, Python Cookiecutter.\n• Browser sandboxes & AI UI generators (prototype in your browser with zero local setup): Replit, StackBlitz, CodeSandbox, v0, Bolt, Lovable, Google AI Studio.",
      whenToUse: "At the very start of a project—to pick the gold-standard library or clone a working starter kit.",
      codeExample: "# Clone an official starter template or search curated GitHub Awesome lists:\nnpx create-next-app@latest --example with-supabase",
      watchOut: "Star count alone doesn't equal security—always check that the repo is actively maintained and has a permissive license (MIT / Apache 2.0).",
      resourceTitle: "Open the Master 'Awesome' Open-Source Directory",
      resourceUrl: "https://github.com/sindresorhus/awesome"
    },
    "ship-shadcn-radix": {
      id: "ship-shadcn-radix",
      label: "UI component libraries & styling (shadcn/ui, Tailwind, Radix, Gradio)",
      tag: "Category · UI & design systems",
      badgeClass: "badge-secondary",
      icon: "widgets",
      oneLiner: "Pre-built, accessible buttons, tables, dialogs, icons & CSS systems so you don't style from zero",
      headline: "UI component libraries, CSS frameworks & Python interface builders",
      whatItIs: "Category definition: Instead of hand-coding dropdown menus, accessible pop-up dialogs, or mobile layouts from scratch, engineers snap together open-source UI Component Libraries and Styling Systems.\n\nCommon tools by subcategory:\n• Copy-paste & headless web components: shadcn/ui (copies clean code straight into your repo so you own every line), Radix UI, Headless UI.\n• CSS & design systems: Tailwind CSS, Google Material 3 (GM3), Material UI (MUI), Chakra UI, Bootstrap.\n• Icon libraries: Lucide Icons, Google Material Symbols, Heroicons, Font Awesome.\n• Python-only UI builders (turn Python functions into web pages with zero HTML/JS): Gradio, Streamlit, NiceGUI, Dash.",
      whenToUse: "Whenever you want accessible tables, modals, forms, and icons without fighting brittle CSS from scratch.",
      codeExample: "# Add battle-tested open-source components directly into your project:\nnpx shadcn@latest add button dialog table",
      watchOut: "Tell your AI agent to use your shared color variables/tokens rather than hardcoding random hex colors on every card.",
      resourceTitle: "Open shadcn/ui Component Directory",
      resourceUrl: "https://ui.shadcn.com/"
    },
    "ship-supabase-neon": {
      id: "ship-supabase-neon",
      label: "Cloud databases & storage (Postgres, Supabase, Neon, Firebase, S3)",
      tag: "Category · Databases & storage",
      badgeClass: "badge-secondary",
      icon: "database",
      oneLiner: "Relational SQL tables, NoSQL documents, AI vector search & cloud file storage buckets",
      headline: "Managed cloud databases & file storage (Defined by category first)",
      whatItIs: "Category definition: Cloud Database & Storage platforms keep your app's data safe across devices with automatic backups and visual browser dashboards.\n\nCommon platforms by database category:\n• Relational / SQL Databases (structured tables — best default): PostgreSQL ('Postgres'), MySQL, SQLite. Popular managed cloud hosts: Supabase, Neon, Google Cloud SQL, AWS RDS, PlanetScale, Turso (cloud SQLite).\n• Document / NoSQL Databases (JSON documents & real-time sync): Firebase / Cloud Firestore, MongoDB Atlas, Convex, AWS DynamoDB.\n• Vector Databases (for AI embeddings & RAG search): pgvector (built into Postgres/Supabase), Pinecone, Weaviate, Chroma, Qdrant.\n• File / Object Storage (for large PDFs, images, audio & video): AWS S3, Cloudflare R2, Google Cloud Storage, Supabase Storage, UploadThing.",
      whenToUse: "Whenever your project needs to save data across devices, store user uploads, or move beyond browser localStorage.",
      codeExample: "// Querying a Postgres table safely from your backend server:\nconst { data, error } = await supabase\n  .from(\"projects\")\n  .select(\"id, title, status\")\n  .eq(\"owner_id\", currentUser.id);",
      watchOut: "In cloud databases like Supabase or Firebase, ALWAYS enable Row-Level Security (RLS) or security rules on every table so strangers cannot read or wipe your rows!",
      resourceTitle: "Open Supabase (Open-Source Postgres Platform)",
      resourceUrl: "https://supabase.com/"
    },
    "ship-clerk-authjs": {
      id: "ship-clerk-authjs",
      label: "User login & authentication (Auth.js, Better Auth, Clerk, Auth0)",
      tag: "Category · Authentication",
      badgeClass: "badge-secondary",
      icon: "verified_user",
      oneLiner: "Drop-in Google/GitHub sign-in, encrypted session cookies, passkeys & permissions",
      headline: "Authentication & identity providers (Never vibe-code password encryption yourself!)",
      whatItIs: "Category definition: Authentication (verifying who a user is) and Authorization (checking what they're allowed to do) are the #1 place where DIY vibe-coded apps get compromised. Dedicated Auth Libraries and Identity Providers handle OAuth ('Sign in with Google/GitHub/Apple'), password hashing, passkeys, and encrypted session cookies for you.\n\nCommon tools in this category:\n• Open-source auth libraries (free, runs in your own database): Better Auth, Auth.js (NextAuth).\n• Managed login services (drop-in login UI + user dashboard): Clerk, Supabase Auth, Firebase Auth, Auth0, WorkOS, Okta.",
      whenToUse: "The moment your project has user accounts, private user data, or admin actions.",
      codeExample: "// Always verify the logged-in user on the BACK END before mutating data:\nconst session = await auth();\nif (!session?.user) return new Response(\"Unauthorized\", { status: 401 });",
      watchOut: "Hiding a 'Delete' button in frontend CSS/JS does NOT secure your app—your backend API must check the user's session on every single request!",
      resourceTitle: "Open Auth.js (Open-Source Authentication)",
      resourceUrl: "https://authjs.dev/"
    },
    "ship-stripe-billing": {
      id: "ship-stripe-billing",
      label: "AI APIs, payments & email (AI Studio, OpenAI, Claude, Stripe, Resend)",
      tag: "Category · External APIs",
      badgeClass: "badge-success",
      icon: "hub",
      oneLiner: "Frontier AI model APIs, local model runners, hosted payment checkouts & transactional email",
      headline: "External APIs by category: AI models, local LLMs, payments & email/SMS",
      whatItIs: "Category definition: Instead of building credit-card vaults, email servers, or training frontier LLMs from scratch, your backend connects to specialized APIs via secret keys stored in '.env'.\n\nCommon platforms by category:\n• Frontier AI Model APIs: Google AI Studio / Vertex AI (Gemini), OpenAI Platform (GPT), Anthropic Console (Claude), OpenRouter (1 API for many models).\n• Local Open-Weight Model Runners (run AI free on your own laptop offline!): Ollama, LM Studio, llama.cpp, vLLM.\n• Payments & Subscriptions: Stripe Checkout, Lemon Squeezy, Polar, Paddle, PayPal.\n• Transactional Email & SMS: Resend, SendGrid, Postmark, AWS SES, Twilio (SMS/WhatsApp).",
      whenToUse: "Anytime your project calls an AI model, accepts payments, or sends automated emails/texts.",
      codeExample: "# Run an open-weight AI model locally on your laptop with Ollama:\nollama run gemma3\n# Or test Stripe webhooks locally with the Stripe CLI:\nstripe listen --forward-to localhost:3000/api/webhooks/stripe",
      watchOut: "Never call paid AI or payment APIs directly from browser JavaScript with your secret key—always call them from your backend server.",
      resourceTitle: "Open Google AI Studio",
      resourceUrl: "https://aistudio.google.com/"
    },
    "ship-upstash-inngest": {
      id: "ship-upstash-inngest",
      label: "Rate limits, queues & monitoring (Upstash Redis, Inngest, Sentry, PostHog)",
      tag: "Category · Reliability & shields",
      badgeClass: "badge-success",
      icon: "bolt",
      oneLiner: "Protect your APIs from bot spam, run background retries, and catch live bugs",
      headline: "Rate-limiters, background job queues & observability tools",
      whatItIs: "Category definition: Before sharing a live link publicly, deployed engineers add three lightweight shields so traffic spikes or bugs never cause an overnight outage or surprise bill:\n\nCommon tools by category:\n• API Rate Limiting & Caching (stops bots from spamming expensive AI endpoints): Upstash Redis (`@upstash/ratelimit`), Redis, Cloudflare WAF.\n• Background Queues & Workflows (runs slow 2-minute AI tasks in the background with retries): Inngest, Trigger.dev, Celery (Python), BullMQ (Node.js), Temporal.\n• Error Tracking & Product Analytics (alerts you when a user hits an error): Sentry (crash reports), PostHog (open-source analytics & session replay), Datadog, Plausible.",
      whenToUse: "Before sharing your live URL publicly on LinkedIn, Substack, X, or Hacker News.",
      codeExample: "// 5 lines to protect your AI API route with @upstash/ratelimit:\nconst { success } = await ratelimit.limit(userIp);\nif (!success) return new Response(\"Too many requests\", { status: 429 });",
      watchOut: "Without rate limiting on your API routes, a single accidental infinite loop in your own frontend code can call your backend 10,000 times in a minute!",
      resourceTitle: "Open Upstash Ratelimit (GitHub)",
      resourceUrl: "https://github.com/upstash/ratelimit"
    },

    // =========================================================================
    // PART 3: 6 CRITICAL WATCH-OUTS WHEN BUILDING & SHIPPING
    // =========================================================================
    "watch-licenses": {
      id: "watch-licenses",
      label: "1. License traps (MIT vs. AGPL/GPL)",
      tag: "Legal watch-out",
      badgeClass: "badge-warning",
      icon: "gavel",
      oneLiner: "MIT & Apache 2.0 are safe for commercial apps; GPL & AGPL are 'viral' copyleft",
      headline: "Watch-out #1: Open-source licenses (MIT & Apache 2.0 vs. GPL & AGPL)",
      whatItIs: "Just because code is public on GitHub does NOT mean you can use it freely in a private or commercial product! Open-source licenses fall into two buckets:\n• Permissive (Safe to build anything): MIT, Apache-2.0, BSD, ISC. You can use, modify, and ship commercially (privately or publicly) as long as you keep their copyright notice.\n• Copyleft / Viral (Proceed with caution): GPL-3.0 and AGPL-3.0. If you build on top of an AGPL library and let users access it over the internet, the license requires you to release the source code of your entire application under AGPL too!\n• No LICENSE file at all: By default copyright law, a repo with NO license file is 'All Rights Reserved'—you legally cannot use it.",
      whenToUse: "Always check the top right of a GitHub repo (next to the balance scale icon) before cloning or running 'npm install'.",
      codeExample: "# Check licenses of every package installed in your project:\nnpx license-checker --summary",
      watchOut: "Rule of thumb: Stick to MIT, Apache-2.0, and BSD-3-Clause libraries. If a repo says AGPL-3.0, GPL, or has no license, consult legal or pick an MIT alternative.",
      resourceTitle: "Open: ChooseALicense.com (Plain-English License Guide)",
      resourceUrl: "https://choosealicense.com/licenses/"
    },
    "watch-slopsquatting": {
      id: "watch-slopsquatting",
      label: "2. AI 'slopsquatting' & fake packages",
      tag: "Security watch-out",
      badgeClass: "badge-danger",
      icon: "bug_report",
      oneLiner: "Verify package names AI suggests before running npm install or pip install",
      headline: "Watch-out #2: AI hallucinated packages ('Slopsquatting') & supply-chain attacks",
      whatItIs: "Security researchers found that LLMs frequently hallucinate plausible-sounding open-source package names (like 'huggingface-cli-helper' or 'react-pdf-table-export') that don't actually exist. Attackers now scan AI outputs and publish malicious packages under those exact hallucinated names on npm and PyPI ('slopsquatting'). When a developer blindly runs the AI's 'npm install' command, the package's post-install script steals their '.env' keys.",
      whenToUse: "Every single time an AI coding agent suggests installing a new package you haven't heard of before.",
      codeExample: "# Inspect a package BEFORE installing it, and scan existing dependencies:\nnpm view <package-name>\nnpm audit",
      watchOut: "Never blindly run an AI-generated 'npm install' or 'curl ... | bash' command without checking that the package is real, has thousands of weekly downloads, and links to a legitimate GitHub repo.",
      resourceTitle: "Open: Socket.dev (Open-Source Supply Chain Security)",
      resourceUrl: "https://socket.dev/"
    },
    "watch-env-leaks": {
      id: "watch-env-leaks",
      label: "3. Leaking .env keys on public GitHub",
      tag: "Security watch-out",
      badgeClass: "badge-danger",
      icon: "key_off",
      oneLiner: "Automated bots scrape public GitHub commits for API keys in under 30 seconds",
      headline: "Watch-out #3: Pushing secret API keys (.env) to a public GitHub repository",
      whatItIs: "The #1 catastrophic mistake new builders make when shipping is accidentally committing an API key (Gemini, OpenAI, AWS, Stripe, Supabase service_role key) to a public GitHub repo—either by pasting it directly into 'app.js' or by editing '.env.example' instead of '.env'. Automated scraper bots watch GitHub's public event firehose 24/7 and exploit leaked keys within seconds. Even if you delete the key in a second commit, the key is STILL visible in your Git commit history!",
      whenToUse: "Before every 'git commit' and 'git push'—especially when working in a public repository.",
      codeExample: "# 1. Make sure .gitignore blocks .env:\necho \".env*\" >> .gitignore\n\n# 2. Check git status & git diff before every commit:\ngit status\ngit diff --staged",
      watchOut: "If you ever accidentally push a secret key to GitHub, deleting the line and pushing again does NOT save you (it stays in Git history). Immediately go to the provider's dashboard and REVOKE/ROTATE the key!",
      resourceTitle: "Open: GitHub Secret Scanning Docs",
      resourceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning"
    },
    "watch-runaway-bills": {
      id: "watch-runaway-bills",
      label: "4. Runaway cloud bills & infinite loops",
      tag: "Cost watch-out",
      badgeClass: "badge-danger",
      icon: "payments",
      oneLiner: "Set hard billing alerts, API spending caps, and rate limits before launching",
      headline: "Watch-out #4: Runaway API bills from infinite loops or bot traffic",
      whatItIs: "Two things cause surprise four-figure cloud bills:\n1. Accidental infinite loops in your own code (e.g. a React 'useEffect' or webhook handler that triggers itself repeatedly, calling an LLM or database 50,000 times while you grab coffee).\n2. Launching a public link without rate limiting, allowing bots to hammer your API endpoint.",
      whenToUse: "Before connecting a credit card to any cloud or AI API provider.",
      codeExample: "// Always guard effects & add hard max-token / rate limits on API calls:\n// 1. Set a hard monthly spend limit ($10-$25) in your AI/Cloud billing console.\n// 2. Add per-IP rate limiting (e.g. 10 requests/min) on every public POST route.",
      watchOut: "On day 1 of any project, open your billing settings in Google Cloud / OpenAI / Anthropic / Vercel and set a hard monthly spending limit and email budget alert at $10.",
      resourceTitle: "Open: OWASP API4 — Unrestricted Resource Consumption",
      resourceUrl: "https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/"
    },
    "watch-zombie-deps": {
      id: "watch-zombie-deps",
      label: "5. Abandoned repos & dependency bloat",
      tag: "Stability watch-out",
      badgeClass: "badge-warning",
      icon: "history_toggle_off",
      oneLiner: "Avoid unmaintained 5-year-old libraries when native browser/Node APIs work",
      headline: "Watch-out #5: Abandoned 'zombie' libraries and unnecessary dependencies",
      whatItIs: "Every open-source library you install brings along its own tree of sub-dependencies. If you install a library that hasn't been updated since 2020, it will eventually block you from upgrading Node.js, React, or Python. Meanwhile, modern browsers and Node.js now have built-in native tools ('fetch()', 'crypto.randomUUID()', 'Intl.DateTimeFormat', CSS Grid, native '<dialog>') that used to require external packages.",
      whenToUse: "Before installing a package for a tiny task—ask: 'Can modern JavaScript/Python do this natively in 5 lines?'",
      codeExample: "// Instead of installing 'uuid' and 'axios', modern JS has them built in:\nconst id = crypto.randomUUID();\nconst res = await fetch(\"https://api.example.com/data\");",
      watchOut: "Check the GitHub 'Pulse' and 'Commits' tab of any repo before adopting it. If the last commit was 3+ years ago and issues are unanswered, look for a modern alternative.",
      resourceTitle: "Open: You Might Not Need (Native JS Alternatives)",
      resourceUrl: "https://youmightnotneed.com/"
    },
    "watch-client-trust": {
      id: "watch-client-trust",
      label: "6. Trusting the browser (Client-side checks)",
      tag: "Security watch-out",
      badgeClass: "badge-info",
      icon: "shield_locked",
      oneLiner: "Anything in frontend code can be edited by users in Chrome DevTools",
      headline: "Watch-out #6: Never trust the browser for permissions, prices, or secrets",
      whatItIs: "When AI vibe-codes an app quickly, it loves to put permission checks ('if (user.isAdmin)'), price calculations, or database filters inside frontend browser code. Remember Stop 2: the Front End runs on the user's own computer! Anyone can open Chrome DevTools, edit frontend variables, or send a custom 'curl' request straight to your backend API.",
      whenToUse: "Every time you build a form, checkout flow, admin dashboard, or database query.",
      codeExample: "// BAD (Fragile): Frontend sends the price or user_id to trust blindly\n// GOOD (Deployed): Backend derives user_id from the encrypted session token\n// and looks up the price from the database on the server.",
      watchOut: "Treat everything arriving from the browser as untrusted user input: validate types with Zod/Pydantic on the backend, check session auth on the server, and enable Row-Level Security (RLS) in your database.",
      resourceTitle: "Open: OWASP Top 10 Security Risks",
      resourceUrl: "https://owasp.org/www-project-top-ten/"
    }
  };

  function createPillBtn(id, selectedId, onSelect, registry) {
    var item = OPEN_SOURCE_ITEMS[id];
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "diagram-label-pill" + (id === selectedId ? " active" : "");
    btn.setAttribute("data-os-item-id", id);

    var icon = document.createElement("span");
    icon.className = "material-symbols-outlined diagram-pill-icon";
    icon.textContent = item.icon;

    var text = document.createElement("span");
    text.textContent = item.label;

    btn.appendChild(icon);
    btn.appendChild(text);

    btn.addEventListener("click", function () {
      onSelect(item, true);
    });
    registry.push(btn);
    return btn;
  }

  function getOsStageForId(id) {
    if (id === "os-discover-vet" || id === "os-fork-template") return "os-stage-1";
    if (id === "os-install-pkg" || id === "os-clone-setup") return "os-stage-2";
    if (id === "os-import-compose") return "os-stage-3";
    if (id === "os-customize-ship") return "os-stage-4";
    return "";
  }

  function renderOpenSourceShippingDiagram(container) {
    var art = window.DiagramIllustrations;
    if (!art) return;

    var selectedId = "os-discover-vet";
    var allBtns = [];
    var stageCards = [];

    function syncActiveStates() {
      var activeStage = getOsStageForId(selectedId);
      allBtns.forEach(function (b) {
        if (b.getAttribute("data-os-item-id") === selectedId) b.classList.add("active");
        else b.classList.remove("active");
      });
      stageCards.forEach(function (sc) {
        if (sc.getAttribute("data-stage-key") === activeStage) sc.classList.add("stage-active");
        else sc.classList.remove("stage-active");
      });
    }

    function selectItem(item, isUserClick) {
      if (!item) return;
      selectedId = item.id;
      syncActiveStates();
      showOpenSourceInspector(item, isUserClick);
    }

    function buildCluster(ids) {
      var cluster = document.createElement("div");
      cluster.className = "diagram-pill-cluster loop-stage-pills";
      ids.forEach(function (id) {
        cluster.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
      });
      return cluster;
    }

    // =========================================================================
    // CARD 1: 4-STAGE ILLUSTRATED LOOP — HOW TO USE & BUILD ON OPEN SOURCE
    // =========================================================================
    var osCard = document.createElement("div");
    osCard.className = "surface-card section-spacer diagram-shell-card";

    var osHeader = document.createElement("div");
    osHeader.className = "search-bar-row diagram-header-row";
    var osTitleGroup = document.createElement("div");
    var osBadgeRow = document.createElement("div");
    osBadgeRow.className = "badge-row";
    var osBadge = document.createElement("span");
    osBadge.className = "badge badge-info";
    osBadge.textContent = "Interactive diagram 1 — click any stage or step pill to open its guide in the side panel";
    osBadgeRow.appendChild(osBadge);
    var osH3 = document.createElement("h3");
    osH3.className = "vocab-section-heading";
    osH3.textContent = "How to download, use & build on top of open source";
    osTitleGroup.appendChild(osBadgeRow);
    osTitleGroup.appendChild(osH3);
    osHeader.appendChild(osTitleGroup);
    osCard.appendChild(osHeader);

    var loopCanvas = document.createElement("div");
    loopCanvas.className = "loop-diagram-canvas";

    var topRow = document.createElement("div");
    topRow.className = "loop-top-row";

    var stage1 = art.createLoopStageCard({
      stageKey: "os-stage-1",
      artSvg: art.createDeviceArt(),
      title: "1. Discover & vet",
      subtitle: "Check license & health",
      onStageClick: function () {
        selectItem(OPEN_SOURCE_ITEMS["os-discover-vet"], true);
      },
      pillsContainer: buildCluster(["os-discover-vet", "os-fork-template"])
    });
    stageCards.push(stage1.card);
    topRow.appendChild(stage1.card);

    topRow.appendChild(art.createHorizontalStepArrow("Download", "npm or git clone"));

    var stage2 = art.createLoopStageCard({
      stageKey: "os-stage-2",
      artSvg: art.createCloudServerArt("Open Source"),
      title: "2. Install & configure",
      subtitle: "Lock versions & .env",
      onStageClick: function () {
        selectItem(OPEN_SOURCE_ITEMS["os-install-pkg"], true);
      },
      pillsContainer: buildCluster(["os-install-pkg", "os-clone-setup"])
    });
    stageCards.push(stage2.card);
    topRow.appendChild(stage2.card);

    topRow.appendChild(art.createHorizontalStepArrow("Compose", "Import & wire DB"));

    var stage3 = art.createLoopStageCard({
      stageKey: "os-stage-3",
      artSvg: art.createDatabaseArt("import"),
      title: "3. Import & build",
      subtitle: "Snap into your code",
      onStageClick: function () {
        selectItem(OPEN_SOURCE_ITEMS["os-import-compose"], true);
      },
      pillsContainer: buildCluster(["os-import-compose"])
    });
    stageCards.push(stage3.card);
    topRow.appendChild(stage3.card);

    loopCanvas.appendChild(topRow);

    var bottomRow = document.createElement("div");
    bottomRow.className = "loop-bottom-row";

    bottomRow.appendChild(art.createCurvedReturnWing("left", "Pulls updates"));

    var stage4 = art.createLoopStageCard({
      stageKey: "os-stage-4",
      artSvg: art.createUserArt(),
      title: "4. Customize & ship",
      subtitle: "Push & deploy live",
      onStageClick: function () {
        selectItem(OPEN_SOURCE_ITEMS["os-customize-ship"], true);
      },
      pillsContainer: buildCluster(["os-customize-ship"])
    });
    stageCards.push(stage4.card);
    bottomRow.appendChild(stage4.card);

    bottomRow.appendChild(art.createCurvedReturnWing("right", "Deploys to web"));

    loopCanvas.appendChild(bottomRow);
    osCard.appendChild(loopCanvas);
    container.appendChild(osCard);
    syncActiveStates();

    // =========================================================================
    // CARD 2: CATEGORY-FIRST HOSTING & BUILDER'S STACK MAP
    // =========================================================================
    var shipCard = document.createElement("div");
    shipCard.className = "surface-card section-spacer diagram-shell-card";

    var shipHeader = document.createElement("div");
    shipHeader.className = "search-bar-row diagram-header-row";
    var shipTitleGroup = document.createElement("div");
    var shipBadgeRow = document.createElement("div");
    shipBadgeRow.className = "badge-row";
    var shipBadge = document.createElement("span");
    shipBadge.className = "badge badge-success";
    shipBadge.textContent = "Interactive diagram 2 — click any category below to compare real-world platforms & tools in the side panel";
    shipBadgeRow.appendChild(shipBadge);
    var shipH3 = document.createElement("h3");
    shipH3.className = "vocab-section-heading";
    shipH3.textContent = "Ways to host, share & build: Every major category and its real-world examples";
    var shipSub = document.createElement("p");
    shipSub.className = "text-muted";
    shipSub.textContent = "Not everything you build needs to be a full web app—and no single product defines a whole category. Click any category below to see what it does and recognize the most common sites and software in the wild:";
    shipTitleGroup.appendChild(shipBadgeRow);
    shipTitleGroup.appendChild(shipH3);
    shipTitleGroup.appendChild(shipSub);
    shipHeader.appendChild(shipTitleGroup);
    shipCard.appendChild(shipHeader);

    var shipColumns = document.createElement("div");
    shipColumns.className = "app-bottom-vaults-row";

    var col1 = document.createElement("div");
    col1.className = "app-half-card";
    var c1Title = document.createElement("h4");
    c1Title.textContent = "1. Ways to host & share (Do they all need to be web apps? No!)";
    var c1Desc = document.createElement("p");
    c1Desc.className = "resource-desc";
    c1Desc.textContent = "Compare the 3 main ways people host and share work—from web app hosts to AI/notebook hubs (Hugging Face, Colab) to backend container servers:";
    var c1Pills = document.createElement("div");
    c1Pills.className = "diagram-pill-cluster";
    ["ship-vercel-templates", "ship-ai-huggingface", "ship-vercel-cloudflare"].forEach(function (id) {
      c1Pills.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
    });
    col1.appendChild(c1Title);
    col1.appendChild(c1Desc);
    col1.appendChild(c1Pills);

    var col2 = document.createElement("div");
    col2.className = "app-half-card";
    var c2Title = document.createElement("h4");
    c2Title.textContent = "2. Discovery, UI components, databases & login (By category)";
    var c2Desc = document.createElement("p");
    c2Desc.className = "resource-desc";
    c2Desc.textContent = "Where to find vetted open-source templates, UI component libraries, managed SQL/NoSQL/Vector databases, and user login providers:";
    var c2Pills = document.createElement("div");
    c2Pills.className = "diagram-pill-cluster";
    ["ship-awesome-github", "ship-shadcn-radix", "ship-supabase-neon", "ship-clerk-authjs"].forEach(function (id) {
      c2Pills.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
    });
    col2.appendChild(c2Title);
    col2.appendChild(c2Desc);
    col2.appendChild(c2Pills);

    shipColumns.appendChild(col1);
    shipColumns.appendChild(col2);
    shipCard.appendChild(shipColumns);

    var col3 = document.createElement("div");
    col3.className = "app-half-card";
    var c3Title = document.createElement("h4");
    c3Title.textContent = "3. External APIs (AI models, payments, email) & reliability shields";
    var c3Desc = document.createElement("p");
    c3Desc.className = "resource-desc";
    c3Desc.textContent = "Where to connect frontier or local AI models, hosted payment checkouts, transactional email, rate-limiters, and error monitoring:";
    var c3Pills = document.createElement("div");
    c3Pills.className = "diagram-pill-cluster";
    ["ship-stripe-billing", "ship-upstash-inngest"].forEach(function (id) {
      c3Pills.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
    });
    col3.appendChild(c3Title);
    col3.appendChild(c3Desc);
    col3.appendChild(c3Pills);
    shipCard.appendChild(col3);

    container.appendChild(shipCard);

    // =========================================================================
    // CARD 3: INTERACTIVE WATCH-OUTS & CAUTIONS MATRIX
    // =========================================================================
    var watchCard = document.createElement("div");
    watchCard.className = "surface-card section-spacer diagram-shell-card";

    var watchHeader = document.createElement("div");
    watchHeader.className = "search-bar-row diagram-header-row";
    var watchTitleGroup = document.createElement("div");
    var watchBadgeRow = document.createElement("div");
    watchBadgeRow.className = "badge-row";
    var watchBadge = document.createElement("span");
    watchBadge.className = "badge badge-warning";
    watchBadge.textContent = "Interactive diagram 3 — click any watch-out below to see how builders get burned & how to prevent it";
    watchBadgeRow.appendChild(watchBadge);
    var watchH3 = document.createElement("h3");
    watchH3.className = "vocab-section-heading";
    watchH3.textContent = "6 critical watch-outs & cautions when building and shipping";
    var watchSub = document.createElement("p");
    watchSub.className = "text-muted";
    watchSub.textContent = "Moving from vibe-coding to deployed engineering means knowing the 6 traps that catch new builders off guard—click any card to inspect the fix in the side panel:";
    watchTitleGroup.appendChild(watchBadgeRow);
    watchTitleGroup.appendChild(watchH3);
    watchTitleGroup.appendChild(watchSub);
    watchHeader.appendChild(watchTitleGroup);
    watchCard.appendChild(watchHeader);

    var watchGrid = document.createElement("div");
    watchGrid.className = "diagram-pill-cluster";
    [
      "watch-licenses",
      "watch-slopsquatting",
      "watch-env-leaks",
      "watch-runaway-bills",
      "watch-zombie-deps",
      "watch-client-trust"
    ].forEach(function (id) {
      watchGrid.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
    });
    watchCard.appendChild(watchGrid);
    container.appendChild(watchCard);

    showOpenSourceInspector(OPEN_SOURCE_ITEMS[selectedId], false);
  }

  function showOpenSourceInspector(item, isUserClick) {
    if (!item || !window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
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
        pWhen.textContent = "When & how to use it: " + item.whenToUse;
        inspectorEl.appendChild(pWhen);

        var codeBox = document.createElement("div");
        codeBox.className = "vocab-example-box pre-line-text";
        codeBox.textContent = item.codeExample;
        inspectorEl.appendChild(codeBox);

        var watchBanner = document.createElement("div");
        watchBanner.className = "arch-mode-banner bad-mode";
        var wIcon = document.createElement("span");
        wIcon.className = "material-symbols-outlined safety-icon";
        wIcon.textContent = "warning";
        var wText = document.createElement("span");
        wText.textContent = item.watchOut;
        watchBanner.appendChild(wIcon);
        watchBanner.appendChild(wText);
        inspectorEl.appendChild(watchBanner);

        if (item.resourceUrl && window.isSafeHttpUrl && window.isSafeHttpUrl(item.resourceUrl)) {
          var linkBtn = document.createElement("a");
          linkBtn.className = "nav-btn nav-btn-primary";
          linkBtn.href = item.resourceUrl;
          linkBtn.target = "_blank";
          linkBtn.rel = "noopener noreferrer";
          var lTxt = document.createElement("span");
          lTxt.textContent = item.resourceTitle || "Open resource";
          var lIcon = document.createElement("span");
          lIcon.className = "material-symbols-outlined btn-icon-sm";
          lIcon.textContent = "open_in_new";
          linkBtn.appendChild(lTxt);
          linkBtn.appendChild(lIcon);
          inspectorEl.appendChild(linkBtn);
        }
      },
      {
        autoOpen: Boolean(isUserClick),
        pulse: Boolean(isUserClick),
        itemTitle: item.label
      }
    );
  }

  window.renderOpenSourceShippingDiagram = renderOpenSourceShippingDiagram;
})();

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
    // PART 2: WHERE TO FIND THE BEST RESOURCES TO SHIP (9 STACK PILLS)
    // =========================================================================
    "ship-vercel-templates": {
      id: "ship-vercel-templates",
      label: "Vercel Templates",
      tag: "Starter kits",
      badgeClass: "badge-info",
      icon: "dashboard_customize",
      oneLiner: "1-click deployable open-source starters for AI apps, SaaS, blogs & dashboards",
      headline: "Vercel Templates: The fastest way to go from idea to a live URL",
      whatItIs: "A curated library of hundreds of production-grade, open-source starter repositories (Next.js, React, Python FastAPI, AI chatbots, multi-tenant SaaS, commerce). Clicking 'Deploy' clones the open-source repo into your GitHub account, provisions any needed database, and gives you a live https:// URL in under 90 seconds.",
      whenToUse: "Before starting any new project from a blank folder—check if an official template already solves 70% of your plumbing.",
      codeExample: "# Browse at https://vercel.com/templates or clone via CLI:\nnpx create-next-app@latest --example with-supabase",
      watchOut: "Pick templates maintained by official teams (Vercel, Supabase, Next.js, Stripe) rather than overly complex 15-tool boilerplates you don't understand yet.",
      resourceTitle: "Explore Vercel Templates",
      resourceUrl: "https://vercel.com/templates"
    },
    "ship-shadcn-radix": {
      id: "ship-shadcn-radix",
      label: "shadcn/ui & Lucide Icons",
      tag: "UI building blocks",
      badgeClass: "badge-info",
      icon: "widgets",
      oneLiner: "Accessible, open-source UI components & icons that copy straight into your repo",
      headline: "shadcn/ui + Lucide: Why you aren't locked into a black-box UI library",
      whatItIs: "Unlike traditional component libraries that hide code inside 'node_modules/', shadcn/ui gives you clean, accessible, open-source component files (buttons, dialogs, tables, drawers, charts) directly inside your own 'components/ui/' folder. Because the files live in your repo, both you and your AI coding agent can read and customize every line.",
      whenToUse: "Whenever you want polished, accessible tables, modals, forms, and icons without fighting brittle CSS from scratch.",
      codeExample: "# Add a battle-tested dialog and table component directly into your folder:\nnpx shadcn@latest add button dialog table",
      watchOut: "Because AI training data loves shadcn/ui, tell your AI agent to stick to your design tokens rather than hardcoding random Tailwind colors on every card.",
      resourceTitle: "Open shadcn/ui Component Directory",
      resourceUrl: "https://ui.shadcn.com/"
    },
    "ship-awesome-github": {
      id: "ship-awesome-github",
      label: "GitHub 'Awesome' Lists",
      tag: "Discovery",
      badgeClass: "badge-info",
      icon: "star",
      oneLiner: "Community-vetted directories of the best open-source libraries for every domain",
      headline: "GitHub 'Awesome' Lists & Trending: Finding the gold-standard library",
      whatItIs: "On GitHub, volunteers maintain 'Awesome Lists' (starting with 'sindresorhus/awesome'—over 340,000 stars) that catalog the most trusted open-source libraries for Python, TypeScript, AI agents, CLI tools, databases, and security. Instead of guessing which library is best, check the domain's Awesome list.",
      whenToUse: "When you need a specialized tool (e.g. PDF parsing, audio transcription, markdown editors, or data visualization) and want to see what senior engineers use.",
      codeExample: "# Search GitHub directly for curated directories:\n# https://github.com/sindresorhus/awesome\n# https://github.com/ trending",
      watchOut: "Star count alone doesn't equal security—always check that the repo is actively maintained and has a permissive license (MIT / Apache 2.0).",
      resourceTitle: "Open the Master 'Awesome' Open-Source Directory",
      resourceUrl: "https://github.com/sindresorhus/awesome"
    },
    "ship-supabase-neon": {
      id: "ship-supabase-neon",
      label: "Supabase & Neon (Postgres)",
      tag: "Database & Auth",
      badgeClass: "badge-secondary",
      icon: "database",
      oneLiner: "Open-source PostgreSQL databases with generous free tiers, Auth & instant APIs",
      headline: "Supabase & Neon: Production PostgreSQL without managing servers",
      whatItIs: "Both Supabase and Neon give you a real, open-source PostgreSQL relational database in the cloud in 30 seconds. Supabase also bundles built-in User Authentication, file storage, and automatic REST APIs guarded by Row-Level Security (RLS), while Neon offers serverless database branching (so every Git branch can get its own isolated test database!).",
      whenToUse: "Whenever your app needs to save data across devices, store user accounts, or move beyond browser localStorage.",
      codeExample: "// Querying Supabase Postgres safely from your server:\nconst { data, error } = await supabase\n  .from(\"projects\")\n  .select(\"id, title, status\")\n  .eq(\"owner_id\", currentUser.id);",
      watchOut: "In Supabase, ALWAYS turn on Row-Level Security (RLS) on every table the moment you create it! Without RLS enabled, anyone with your public anon key can read or delete every row in that table.",
      resourceTitle: "Open Supabase Open-Source Platform",
      resourceUrl: "https://supabase.com/"
    },
    "ship-clerk-authjs": {
      id: "ship-clerk-authjs",
      label: "Auth.js / Clerk / Better Auth",
      tag: "Login & Security",
      badgeClass: "badge-secondary",
      icon: "verified_user",
      oneLiner: "Drop-in Google/GitHub sign-in, session cookies, and multi-factor auth",
      headline: "Never vibe-code your own password login: Use Auth.js, Better Auth, or Clerk",
      whatItIs: "Authentication (verifying who a user is) and Authorization (checking what they're allowed to do) are the #1 place where DIY vibe-coded apps get hacked. Open-source libraries like Better Auth and Auth.js (NextAuth), or managed services like Clerk and Supabase Auth, give you Battle-tested 'Sign in with Google/GitHub', encrypted HTTP-only cookies, and CSRF protection out of the box.",
      whenToUse: "The moment your app has user accounts, private data, or admin actions.",
      codeExample: "// Always verify the logged-in user on the BACK END before mutating data:\nconst session = await auth();\nif (!session?.user) return new Response(\"Unauthorized\", { status: 401 });",
      watchOut: "Hiding a 'Delete' button in the frontend CSS/JS does NOT secure your app—anyone can call your backend API URL directly unless your backend checks 'session.user' on every request!",
      resourceTitle: "Open Auth.js (Open-Source Authentication)",
      resourceUrl: "https://authjs.dev/"
    },
    "ship-vercel-cloudflare": {
      id: "ship-vercel-cloudflare",
      label: "Vercel / Cloudflare / Railway",
      tag: "Cloud Hosting",
      badgeClass: "badge-secondary",
      icon: "cloud_upload",
      oneLiner: "Where to host frontends, serverless APIs, and long-running Python/Docker backends",
      headline: "Choosing the right hosting platform for what you built",
      whatItIs: "Different apps need different hosting shapes:\n• Vercel & Cloudflare Pages: Best for static sites, Next.js/React apps, and fast serverless API routes.\n• Railway, Render & Google Cloud Run: Best when your backend is a Python (FastAPI/Flask) server, a Docker container, or a long-running background worker that needs more than 10–60 seconds per request.",
      whenToUse: "Use Vercel/Cloudflare for instant web UIs and lightweight APIs; pair with Cloud Run or Railway when running heavy Python data/AI workloads.",
      codeExample: "# Deploy a container or Python service to Google Cloud Run in 1 command:\ngcloud run deploy my-service --source . --region us-central1",
      watchOut: "Serverless functions (like Vercel functions) have strict execution timeouts (typically 10s–60s). If an AI workflow takes 3 minutes, move it to a background queue or Cloud Run service.",
      resourceTitle: "Open Vercel Documentation",
      resourceUrl: "https://vercel.com/docs"
    },
    "ship-ai-huggingface": {
      id: "ship-ai-huggingface",
      label: "Google AI Studio & Hugging Face",
      tag: "AI & Models",
      badgeClass: "badge-success",
      icon: "psychology",
      oneLiner: "Where to get Gemini API keys, test prompts, and download open-weight models",
      headline: "Google AI Studio + Hugging Face: The two hubs for AI builders",
      whatItIs: "• Google AI Studio (aistudio.google.com): The fastest place to get a Gemini API key, test structured JSON outputs, and copy ready-to-run Python/TypeScript code into your backend.\n• Hugging Face (huggingface.co): The 'GitHub of Machine Learning'—home to 1M+ open-weight models, public datasets, and 'Spaces' where you can inspect and clone open-source AI web apps.",
      whenToUse: "Use AI Studio when calling frontier Gemini models via API; use Hugging Face when exploring open-weight models, embeddings, or open datasets.",
      codeExample: "// Always call Gemini from your BACKEND server using process.env.GEMINI_API_KEY:\nconst ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });\nconst response = await ai.models.generateContent({\n  model: \"gemini-2.5-flash\",\n  contents: userPrompt\n});",
      watchOut: "Never call paid LLM APIs directly from browser JavaScript with your real API key—bots will extract your key from Chrome DevTools Network tab in minutes.",
      resourceTitle: "Open Google AI Studio",
      resourceUrl: "https://aistudio.google.com/"
    },
    "ship-stripe-billing": {
      id: "ship-stripe-billing",
      label: "Stripe Checkout & Lemon Squeezy",
      tag: "Payments",
      badgeClass: "badge-success",
      icon: "credit_card",
      oneLiner: "Accept payments and subscriptions safely without touching raw card numbers",
      headline: "Stripe Checkout: Let Stripe host the payment page and notify you via webhook",
      whatItIs: "Instead of building credit card forms on your own website (which triggers strict PCI security audits), redirect users to a Stripe Checkout session or Payment Link. Stripe handles Apple Pay, Google Pay, cards, and fraud checks, then sends a signed 'checkout.session.completed' webhook to your backend server to unlock the user's account.",
      whenToUse: "Anytime your project charges money, sells subscriptions, or accepts donations.",
      codeExample: "# Test Stripe webhooks locally on your laptop using the official Stripe CLI:\nstripe listen --forward-to localhost:3000/api/webhooks/stripe",
      watchOut: "Always verify the 'stripe-signature' header inside your webhook endpoint so an attacker cannot send a fake 'payment succeeded' POST request to unlock a free account.",
      resourceTitle: "Open Stripe Checkout Quickstart",
      resourceUrl: "https://docs.stripe.com/checkout/quickstart"
    },
    "ship-upstash-inngest": {
      id: "ship-upstash-inngest",
      label: "Upstash Redis & Inngest",
      tag: "Rate limits & Queues",
      badgeClass: "badge-success",
      icon: "bolt",
      oneLiner: "Protect your APIs from bot spam and run reliable background retries",
      headline: "Upstash Ratelimit & Inngest: The shield that prevents $5,000 overnight bills",
      whatItIs: "• Upstash Ratelimit: An open-source, 5-line SDK over serverless Redis that blocks any IP or user from calling your expensive AI endpoint more than N times per minute.\n• Inngest / Trigger.dev: Open-source background job orchestrators that let you run multi-step AI tasks in the background with automatic retries.",
      whenToUse: "Before sharing your live app URL publicly on LinkedIn, Substack, or Hacker News.",
      codeExample: "// 5 lines to protect your AI API route with @upstash/ratelimit:\nconst { success } = await ratelimit.limit(userIp);\nif (!success) return new Response(\"Too many requests\", { status: 429 });",
      watchOut: "Without rate limiting on your API routes, a single broken 'useEffect' infinite loop in your own frontend code can call your backend 10,000 times in a minute!",
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

    var tagSpan = document.createElement("span");
    tagSpan.className = "diagram-pill-subtag";
    tagSpan.textContent = item.tag;

    btn.appendChild(icon);
    btn.appendChild(text);
    btn.appendChild(tagSpan);

    btn.addEventListener("click", function () {
      onSelect(item, true);
    });
    registry.push(btn);
    return btn;
  }

  function createFlowArrowSvg() {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 80 28");
    svg.setAttribute("class", "bidi-horizontal-svg");
    svg.setAttribute("aria-hidden", "true");

    var line = document.createElementNS(SVG_NS, "line");
    line.setAttribute("x1", "6");
    line.setAttribute("y1", "14");
    line.setAttribute("x2", "68");
    line.setAttribute("y2", "14");
    line.setAttribute("class", "bidi-line-req");

    var head = document.createElementNS(SVG_NS, "polygon");
    head.setAttribute("points", "64,9 74,14 64,19");
    head.setAttribute("class", "bidi-head-req");

    svg.appendChild(line);
    svg.appendChild(head);
    return svg;
  }

  function renderOpenSourceShippingDiagram(container) {
    var selectedId = "os-discover-vet";
    var allBtns = [];

    function selectItem(item, isUserClick) {
      selectedId = item.id;
      allBtns.forEach(function (b) {
        if (b.getAttribute("data-os-item-id") === selectedId) b.classList.add("active");
        else b.classList.remove("active");
      });
      showOpenSourceInspector(item, isUserClick);
    }

    // =========================================================================
    // CARD 1: ILLUSTRATED DIAGRAM — THE 2 WAYS TO BUILD ON OPEN SOURCE
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
    osBadge.textContent = "Interactive diagram 1 — click any step to open its guide in the side panel";
    osBadgeRow.appendChild(osBadge);
    var osH3 = document.createElement("h3");
    osH3.className = "vocab-section-heading";
    osH3.textContent = "How to download, use & build on top of open source: The 2 tracks";
    var osSub = document.createElement("p");
    osSub.className = "text-muted";
    osSub.textContent = "You don't build production software from scratch—you either snap in open-source building blocks (Track A: npm / pip install) or start from a full open-source starter repo (Track B: Fork & git clone). Click any step below:";
    osTitleGroup.appendChild(osBadgeRow);
    osTitleGroup.appendChild(osH3);
    osTitleGroup.appendChild(osSub);
    osHeader.appendChild(osTitleGroup);
    osCard.appendChild(osHeader);

    var tracksStack = document.createElement("div");
    tracksStack.className = "app-anatomy-canvas";

    // TRACK A: LIBRARY / PACKAGE TRACK (Brick by brick)
    var trackACard = document.createElement("div");
    trackACard.className = "app-half-card";
    var trackABanner = document.createElement("div");
    trackABanner.className = "mini-window-bar";
    var trackABadge = document.createElement("span");
    trackABadge.className = "badge badge-info";
    trackABadge.textContent = "Track A · Snap in a building block (Libraries & packages)";
    var trackACaption = document.createElement("span");
    trackACaption.className = "text-muted";
    trackACaption.textContent = "When you already have a project and need icons, Stripe, auth, or AI SDKs";
    trackABanner.appendChild(trackABadge);
    trackABanner.appendChild(trackACaption);
    trackACard.appendChild(trackABanner);

    var trackARow = document.createElement("div");
    trackARow.className = "os-flow-steps-row";
    ["os-discover-vet", "os-install-pkg", "os-import-compose"].forEach(function (id, idx) {
      trackARow.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
      if (idx < 2) trackARow.appendChild(createFlowArrowSvg());
    });
    trackACard.appendChild(trackARow);
    tracksStack.appendChild(trackACard);

    // TRACK B: FULL REPO / STARTER TEMPLATE TRACK (Whole house frame)
    var trackBCard = document.createElement("div");
    trackBCard.className = "app-half-card";
    var trackBBanner = document.createElement("div");
    trackBBanner.className = "mini-window-bar";
    var trackBBadge = document.createElement("span");
    trackBBadge.className = "badge badge-secondary";
    trackBBadge.textContent = "Track B · Build on top of a full open-source repo (Templates & forks)";
    var trackBCaption = document.createElement("span");
    trackBCaption.className = "text-muted";
    trackBCaption.textContent = "When you want a complete working app on your laptop in 2 minutes and customize it";
    trackBBanner.appendChild(trackBBadge);
    trackBBanner.appendChild(trackBCaption);
    trackBCard.appendChild(trackBBanner);

    var trackBRow = document.createElement("div");
    trackBRow.className = "os-flow-steps-row";
    ["os-fork-template", "os-clone-setup", "os-customize-ship"].forEach(function (id, idx) {
      trackBRow.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
      if (idx < 2) trackBRow.appendChild(createFlowArrowSvg());
    });
    trackBCard.appendChild(trackBRow);
    tracksStack.appendChild(trackBCard);

    osCard.appendChild(tracksStack);
    container.appendChild(osCard);

    // =========================================================================
    // CARD 2: INTERACTIVE SHIPPING STACK MAP (WHERE TO FIND THE BEST RESOURCES)
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
    shipBadge.textContent = "Interactive diagram 2 — click any tool to see why engineers pick it & open its link";
    shipBadgeRow.appendChild(shipBadge);
    var shipH3 = document.createElement("h3");
    shipH3.className = "vocab-section-heading";
    shipH3.textContent = "Where to find the best resources to ship: The modern builder's stack";
    var shipSub = document.createElement("p");
    shipSub.className = "text-muted";
    shipSub.textContent = "Instead of building everything from scratch, combine these trusted open-source directories, databases, auth providers, and hosting platforms:";
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
    c1Title.textContent = "1. Templates, UI & discovery (Start fast)";
    var c1Desc = document.createElement("p");
    c1Desc.className = "resource-desc";
    c1Desc.textContent = "Where to find working starter apps, copy-paste accessible UI components, and vetted open-source libraries:";
    var c1Pills = document.createElement("div");
    c1Pills.className = "diagram-pill-cluster";
    ["ship-vercel-templates", "ship-shadcn-radix", "ship-awesome-github"].forEach(function (id) {
      c1Pills.appendChild(createPillBtn(id, selectedId, selectItem, allBtns));
    });
    col1.appendChild(c1Title);
    col1.appendChild(c1Desc);
    col1.appendChild(c1Pills);

    var col2 = document.createElement("div");
    col2.className = "app-half-card";
    var c2Title = document.createElement("h4");
    c2Title.textContent = "2. Hosting, databases & login (Core plumbing)";
    var c2Desc = document.createElement("p");
    c2Desc.className = "resource-desc";
    c2Desc.textContent = "Where to host your code, store user records in Postgres, and add Google/GitHub sign-in safely:";
    var c2Pills = document.createElement("div");
    c2Pills.className = "diagram-pill-cluster";
    ["ship-supabase-neon", "ship-clerk-authjs", "ship-vercel-cloudflare"].forEach(function (id) {
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
    c3Title.textContent = "3. AI models, payments & rate-limit shields (Production superpowers)";
    var c3Desc = document.createElement("p");
    c3Desc.className = "resource-desc";
    c3Desc.textContent = "Where to grab frontier AI keys, open-weight models, hosted checkout pages, and bot rate-limiters:";
    var c3Pills = document.createElement("div");
    c3Pills.className = "diagram-pill-cluster";
    ["ship-ai-huggingface", "ship-stripe-billing", "ship-upstash-inngest"].forEach(function (id) {
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

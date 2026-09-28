// Deployed Eng Pipeline — Additional Real Interface Snapshots & Flows
// Extends window.InterfaceTourData with 7 real screenshots:
//   - GitHub Screen 4: Create a new repository (ui-github-new.png)
//   - GitHub Screen 5: Green <> Code clone & Download ZIP popup (ui-github-clone.png)
//   - Vercel Screen 1: Overview & Import GitHub Project (ui-vercel-overview.png)
//   - Vercel Screen 2: Environment Variables vault (ui-vercel-env.png)
//   - Chrome DevTools: Elements, Styles & Console drawer (ui-chrome-devtools.png)
//   - Neon Cloud Postgres Database: Projects, Compute & psql connection (ui-neon-database.png)
//   - Mac Terminal: zsh prompt, pwd, ls & git status (ui-mac-terminal.png)
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  if (!window.InterfaceTourData) return;

  var EXTRA_SNAPSHOTS = [
    // =========================================================================
    // GITHUB SNAPSHOT 4: CREATE A NEW REPOSITORY (github.com/new)
    // =========================================================================
    {
      id: "github-new",
      group: "github",
      groupLabel: "GitHub (Cloud Git repository)",
      tabTitle: "4. Create new repo (README & .gitignore)",
      shortTitle: "GitHub: Create New Repository",
      imageSrc: "./ui-github-new.png",
      aspectRatio: "1024 / 576",
      subtitle: "What you see after clicking '+' -> 'New repository': where you name your project, pick Public/Private, toggle 'Add README' ON, and add a .gitignore file.",
      hotspots: [
        {
          id: "gh-new-owner-name", num: "1", shortLabel: "Owner & Repository name *",
          x: 22.6, y: 30.2, w: 54.6, h: 8.0,
          title: "Owner account & Repository name * (Required)",
          category: "GitHub setup · Name your project",
          whatItDoes: "Picks which GitHub account owns the project and sets the repository's URL slug (e.g. 'my-first-app'). Use lowercase letters and hyphens instead of spaces.",
          whenYouUseIt: "Step 1 whenever starting a new project on GitHub.",
          tryCommand: "https://github.com/<owner>/<repository-name>"
        },
        {
          id: "gh-new-description", num: "2", shortLabel: "Description (Optional)",
          x: 22.6, y: 46.8, w: 54.6, h: 8.5,
          title: "Description box (1-sentence summary)",
          category: "GitHub setup · Project summary",
          whatItDoes: "A short plain-English description that appears in the 'About' sidebar on your repository's main page.",
          whenYouUseIt: "Fill in 1 sentence so future-you (and teammates) immediately know what this repo does.",
          tryCommand: "Appears under 'About' on the repo page"
        },
        {
          id: "gh-new-visibility", num: "3", shortLabel: "Choose visibility (Public ▾)",
          x: 66.8, y: 68.2, w: 9.2, h: 5.5,
          title: "Choose visibility: Public vs. Private dropdown",
          category: "Security · Who can see your code",
          whatItDoes: "• Public: Anyone on the internet can view and clone your code (great for open-source portfolios, though you must NEVER commit '.env' keys).\n• Private: Only you and people you explicitly invite can see the repository.",
          whenYouUseIt: "Choose 'Private' for internal prototypes or proprietary apps; choose 'Public' when sharing open-source work.",
          tryCommand: "Can be changed later in Settings -> Danger Zone"
        },
        {
          id: "gh-new-add-readme", num: "4", shortLabel: "Add README toggle (Off / On)",
          x: 69.2, y: 79.8, w: 6.8, h: 5.2,
          title: "'Add README' toggle switch (Creates README.md automatically)",
          category: "Documentation · Front-page manual",
          whatItDoes: "Flipping this toggle switch ON tells GitHub to initialize your repository with a 'README.md' Markdown file right away—giving your project an instruction manual and an initial commit on 'main'.",
          whenYouUseIt: "Toggle this ON whenever creating a brand-new repository on GitHub so you can clone it immediately!",
          tryCommand: "Creates README.md in your new repo"
        },
        {
          id: "gh-new-add-gitignore", num: "5", shortLabel: "Add .gitignore (No .gitignore ▾)",
          x: 65.0, y: 88.6, w: 11.0, h: 5.4,
          title: "'Add .gitignore' template dropdown (Protects .env secrets!)",
          category: "Security guardrail · Do-not-upload list",
          whatItDoes: "Lets you pick a pre-made '.gitignore' file for your language (such as 'Python' or 'Node'). It automatically lists '.env', '.venv/', '__pycache__/', and 'node_modules/' so Git never uploads secret API keys or heavy dependency folders.",
          whenYouUseIt: "Always pick 'Python' or 'Node' here so your repo starts with a battle-tested .gitignore from Day 1.",
          tryCommand: "Prevents '.env' and 'node_modules/' from uploading"
        }
      ]
    },

    // =========================================================================
    // GITHUB SNAPSHOT 5: GREEN '<> CODE' CLONE & DOWNLOAD ZIP POPUP
    // =========================================================================
    {
      id: "github-clone",
      group: "github",
      groupLabel: "GitHub (Cloud Git repository)",
      tabTitle: "5. <> Code menu (Clone vs ZIP)",
      shortTitle: "GitHub: <> Code Clone Menu",
      imageSrc: "./ui-github-clone.png",
      aspectRatio: "1024 / 576",
      subtitle: "What opens when you click the green '<> Code' button: where you copy the HTTPS URL for 'git clone' (and why you shouldn't just click 'Download ZIP').",
      hotspots: [
        {
          id: "gh-clone-green-btn", num: "1", shortLabel: "Green <> Code ▾ button",
          x: 64.2, y: 29.3, w: 8.5, h: 4.8,
          title: "Green '<> Code ▾' button (Opens this dropdown)",
          category: "GitHub action · Download or connect",
          whatItDoes: "Opens the popup menu for bringing this cloud repository onto your laptop.",
          whenYouUseIt: "Click this first whenever you want to clone a project into VS Code or Cursor.",
          tryCommand: "Click '<> Code' -> Copy HTTPS URL"
        },
        {
          id: "gh-clone-local-codespaces", num: "2", shortLabel: "Local vs. Codespaces tabs",
          x: 42.0, y: 35.2, w: 14.5, h: 4.8,
          title: "'Local' (Your laptop) vs. 'Codespaces' (Cloud browser VM)",
          category: "Environment choice · Laptop vs. Cloud",
          whatItDoes: "• Local: Gives you the URL to download the repo onto your own computer.\n• Codespaces: Spins up a cloud VS Code machine inside your web browser.",
          whenYouUseIt: "Keep 'Local' selected when working in VS Code, Cursor, or Terminal on your laptop.",
          tryCommand: "Select 'Local' tab"
        },
        {
          id: "gh-clone-https-tabs", num: "3", shortLabel: "HTTPS / SSH / GitHub CLI",
          x: 43.0, y: 47.4, w: 17.8, h: 4.8,
          title: "'HTTPS' vs. 'SSH' vs. 'GitHub CLI' connection modes",
          category: "Git protocol · Easiest default is HTTPS",
          whatItDoes: "'HTTPS' is the universal web URL format that works out-of-the-box with VS Code's Git sign-in.",
          whenYouUseIt: "Leave 'HTTPS' selected (the default).",
          tryCommand: "HTTPS URL starts with https://github.com/..."
        },
        {
          id: "gh-clone-url-copy", num: "4", shortLabel: "HTTPS URL & Copy icon (📋)",
          x: 43.0, y: 52.6, w: 28.5, h: 4.8,
          title: "Repository HTTPS URL & 1-click Copy button (📋)",
          category: "Essential action · Copy for 'git clone'",
          whatItDoes: "Copies the exact Git URL (e.g. 'https://github.com/TestPilot26/Practice1.git') to your clipboard.",
          whenYouUseIt: "Click the two-squares copy icon on the right, then open your VS Code Terminal and run 'git clone <paste-url>'.",
          tryCommand: "git clone https://github.com/TestPilot26/Practice1.git"
        },
        {
          id: "gh-clone-download-zip", num: "5", shortLabel: "Download ZIP (No Git link)",
          x: 42.5, y: 73.6, w: 14.0, h: 4.5,
          title: "'Download ZIP' (One-time snapshot — strips Git connection!)",
          category: "Watch-out · Why 'git clone' is better",
          whatItDoes: "Downloads a compressed '.zip' folder of the files, but strips out the hidden '.git' history folder—so you can't easily run 'git push' or 'git pull' to sync changes back to GitHub.",
          whenYouUseIt: "Use 'git clone' (Pin #4) instead of 'Download ZIP' whenever you plan to edit code and push updates.",
          tryCommand: "Prefer 'git clone <url>' over Download ZIP"
        }
      ]
    },

    // =========================================================================
    // VERCEL SNAPSHOT 1: OVERVIEW & IMPORT GITHUB PROJECT
    // =========================================================================
    {
      id: "vercel-dashboard",
      group: "vercel",
      groupLabel: "Vercel / Cloud Hosting",
      tabTitle: "1. Overview & Import GitHub repo",
      shortTitle: "Vercel: Overview & Import Project",
      imageSrc: "./ui-vercel-overview.png",
      aspectRatio: "1024 / 576",
      subtitle: "The Vercel dashboard: where you import your GitHub repository in 1 click so every 'git push' auto-deploys to a live public URL.",
      hotspots: [
        {
          id: "vc-nav-projects-deployments", num: "1", shortLabel: "Projects, Deployments & Logs",
          x: 0.6, y: 14.0, w: 18.0, h: 14.5,
          title: "Left sidebar: Projects, Deployments & Logs",
          category: "Vercel navigation · Live builds & server logs",
          whatItDoes: "• Projects: Lists all your hosted web apps.\n• Deployments: Shows every automatic build triggered when you push a Git commit to GitHub.\n• Logs: Streams live server logs so you can see 200 OK requests or debug 500 backend errors.",
          whenYouUseIt: "Click 'Deployments' to grab a live URL or 'Logs' if a backend API route fails in production.",
          tryCommand: "Every 'git push' creates a new Deployment row here"
        },
        {
          id: "vc-nav-observability-firewall", num: "2", shortLabel: "Analytics, Observability & Firewall",
          x: 0.6, y: 29.8, w: 18.0, h: 18.5,
          title: "Analytics, Speed Insights, Observability & Firewall",
          category: "Monitoring & security · Traffic & protection",
          whatItDoes: "Tracks page visitor counts, page load speeds, and lets you configure firewall / rate-limiting rules against bot traffic.",
          whenYouUseIt: "Check 'Observability' and 'Firewall' after sharing a public link.",
          tryCommand: "Monitor live traffic & block abusive IPs"
        },
        {
          id: "vc-nav-env-domains", num: "3", shortLabel: "Environment Variables & Domains",
          x: 0.6, y: 56.4, w: 18.0, h: 9.2,
          title: "'Environment Variables' & 'Domains' tabs",
          category: "Secrets & custom URLs · Production config",
          whatItDoes: "• Environment Variables: Where you paste secret API keys (like 'GEMINI_API_KEY') so your cloud server can read them without exposing them in GitHub.\n• Domains: Where you connect a custom domain name (like 'myapp.com').",
          whenYouUseIt: "Click 'Environment Variables' (or switch to Screen 2 above) whenever your app needs a secret API key or DATABASE_URL.",
          tryCommand: "process.env.GEMINI_API_KEY (Node) / os.environ.get('GEMINI_API_KEY') (Python)"
        },
        {
          id: "vc-add-new-btn", num: "4", shortLabel: "Add New ▾ (Deploy a repo)",
          x: 89.4, y: 10.6, w: 9.0, h: 5.2,
          title: "Top-right 'Add New ▾' button",
          category: "Essential action · Connect a new GitHub repo",
          whatItDoes: "Opens a menu to import a GitHub repository ('Project'), attach a custom 'Domain', or create a 'Storage' database.",
          whenYouUseIt: "Click 'Add New ▾ -> Project' anytime you want to turn a GitHub repo into a live website.",
          tryCommand: "Add New -> Project -> Import GitHub Repo"
        },
        {
          id: "vc-usage-card", num: "5", shortLabel: "Usage & Anomaly Alerts",
          x: 21.0, y: 24.8, w: 31.2, h: 25.4,
          title: "Last 30 days Usage & Anomaly Alerts",
          category: "Billing safety · Track bandwidth & function runs",
          whatItDoes: "Shows your current bandwidth and serverless function usage over the last 30 days so there are never surprise cloud bills.",
          whenYouUseIt: "Glance here to verify your hobby projects are staying well within free-tier limits.",
          tryCommand: "Free Hobby tier covers static & light serverless apps"
        },
        {
          id: "vc-import-project", num: "6", shortLabel: "Import Project (Link GitHub)",
          x: 56.6, y: 64.2, w: 38.8, h: 9.6,
          title: "'Import Project' button (Connects GitHub -> Vercel)",
          category: "Essential action · 1-click auto-deploy setup",
          whatItDoes: "Lets you pick any repository from your linked GitHub account and deploy it to a live 'https://<project>.vercel.app' URL. Once linked, every future 'git push' updates your live site automatically!",
          whenYouUseIt: "Click 'Import' right after pushing your code to GitHub for the first time.",
          tryCommand: "Import repo -> Click Deploy -> Live in ~30s"
        }
      ]
    },

    // =========================================================================
    // VERCEL SNAPSHOT 2: ENVIRONMENT VARIABLES VAULT
    // =========================================================================
    {
      id: "vercel-env",
      group: "vercel",
      groupLabel: "Vercel / Cloud Hosting",
      tabTitle: "2. Environment Variables (.env)",
      shortTitle: "Vercel: Environment Variables",
      imageSrc: "./ui-vercel-env.png",
      aspectRatio: "1024 / 576",
      subtitle: "Where your secret '.env' API keys (like GEMINI_API_KEY or DATABASE_URL) live safely in the cloud—since '.env' is never uploaded to GitHub.",
      hotspots: [
        {
          id: "vc-env-sidebar", num: "1", shortLabel: "Environment Variables tab",
          x: 0.6, y: 20.6, w: 18.0, h: 5.2,
          title: "'Environment Variables' in the left navigation bar",
          category: "Security · Cloud secrets vault",
          whatItDoes: "Opens the encrypted variables manager where you store API keys and database connection strings for your deployed apps.",
          whenYouUseIt: "Click here (or inside a specific Project -> Settings -> Environment Variables) whenever your live site needs a secret key.",
          tryCommand: "Local laptop reads .env -> Live Vercel reads Environment Variables"
        },
        {
          id: "vc-env-projects-shared", num: "2", shortLabel: "Projects vs. Shared variables",
          x: 20.8, y: 23.2, w: 11.2, h: 5.2,
          title: "'Projects' vs. 'Shared' Environment Variables",
          category: "Organization · Per-app vs. team-wide keys",
          whatItDoes: "• Projects: Keys scoped to one specific web app.\n• Shared: Keys you can share across multiple projects in your account.",
          whenYouUseIt: "Keep keys scoped to a single Project unless multiple apps intentionally share the same backend service.",
          tryCommand: "Project Settings -> Environment Variables -> Add"
        },
        {
          id: "vc-env-filters", num: "3", shortLabel: "Environment filters (Prod / Preview)",
          x: 43.2, y: 30.6, w: 21.0, h: 5.8,
          title: "Environment & Type filters (Production, Preview, Development)",
          category: "Environment isolation · Separate Prod vs. Preview keys",
          whatItDoes: "Lets you filter variables by environment: 'Production' (your main live URL), 'Preview' (branch preview URLs), and 'Development'.",
          whenYouUseIt: "Point 'Preview' deployments at a test database and 'Production' at your live database so branch experiments never touch real user rows.",
          tryCommand: "Separate Production vs. Preview DATABASE_URL"
        },
        {
          id: "vc-env-main-box", num: "4", shortLabel: "Project Environment Variables vault",
          x: 44.0, y: 42.5, w: 31.0, h: 14.0,
          title: "Project Environment Variables vault",
          category: "Security · Why you must redeploy after adding a key",
          whatItDoes: "Lists all encrypted Key/Value pairs injected into your cloud server at runtime. Remember: after adding or changing an environment variable in a project's settings, trigger a new deployment (or 'git push') so the running server picks up the new key!",
          whenYouUseIt: "Add 'GEMINI_API_KEY' or 'DATABASE_URL' inside your project's Settings -> Environment Variables.",
          tryCommand: "Add Key + Value -> Save -> Redeploy"
        },
        {
          id: "vc-env-storage-ai", num: "5", shortLabel: "Storage & AI Gateway",
          x: 0.6, y: 41.8, w: 18.0, h: 19.5,
          title: "Left sidebar: Storage (Postgres/Blob/KV) & AI Gateway",
          category: "Cloud services · Attached databases & AI routing",
          whatItDoes: "Lets you connect managed databases (like Neon Postgres or Upstash Redis) and route AI model requests with caching and spend controls.",
          whenYouUseIt: "Use 'Storage' to link a database and automatically inject its 'DATABASE_URL' into your project.",
          tryCommand: "Storage -> Connect Database"
        }
      ]
    },

    // =========================================================================
    // CHROME DEVTOOLS SNAPSHOT: ELEMENTS, STYLES & CONSOLE
    // =========================================================================
    {
      id: "chrome-devtools",
      group: "devtools",
      groupLabel: "Chrome DevTools (F12)",
      tabTitle: "Chrome DevTools: Inspect & Console",
      shortTitle: "Chrome DevTools (Inspect)",
      imageSrc: "./ui-chrome-devtools.png",
      aspectRatio: "1024 / 576",
      subtitle: "Right-click any webpage and click 'Inspect' (or press Cmd+Option+I / F12) to x-ray HTML elements, live-edit CSS styles, and read red Console errors.",
      hotspots: [
        {
          id: "dt-inspect-picker", num: "1", shortLabel: "↖ Element Picker & 📱 Mobile Toggle",
          x: 58.0, y: 0.4, w: 4.2, h: 4.2,
          title: "'↖' Element Picker & '📱' Mobile Screen Simulator",
          category: "UI debugging · Point at any button on screen",
          whatItDoes: "• '↖' (Top-left icon): Click this, then hover or click any button, card, or image on the webpage (left) to jump straight to its exact HTML tag and CSS rules on the right.\n• '📱' (Next to it): Previews how your site looks on an iPhone or iPad screen.",
          whenYouUseIt: "Use '↖' whenever a button or layout looks slightly off and you want to see which CSS class controls it.",
          tryCommand: "Cmd+Shift+C (Mac) / Ctrl+Shift+C (Win)"
        },
        {
          id: "dt-top-tabs", num: "2", shortLabel: "Elements, Console & Network (»)",
          x: 62.4, y: 0.4, w: 12.6, h: 4.2,
          title: "Top DevTools tabs: Elements, Console & '»' (Network / Application)",
          category: "DevTools navigation · The Big 3 debugging tabs",
          whatItDoes: "• Elements: Inspects HTML structure and CSS styling.\n• Console: Prints red JavaScript errors and 'console.log()' messages.\n• '»' (More tabs -> Network): Shows every API request and whether it returned 200 OK or a red 404/500 error.",
          whenYouUseIt: "Check 'Console' first when a click does nothing; check 'Network' when an API call fails.",
          tryCommand: "Cmd+Option+I (Mac) or F12 (Win)"
        },
        {
          id: "dt-error-counter", num: "3", shortLabel: "Red Error (⊗ 2) & Warning counter",
          x: 79.2, y: 0.4, w: 7.2, h: 4.2,
          title: "Live Error ('⊗ 2') & Warning ('⚠ 2') badge",
          category: "Instant diagnostics · Spot hidden crashes",
          whatItDoes: "Counts how many JavaScript or network errors have fired on the current page. Clicking this badge opens the Console drawer directly to the red error lines.",
          whenYouUseIt: "Always glance at this corner when testing your site—if the red number is above 0, click it to read the error!",
          tryCommand: "Click '⊗' badge -> Copy error into your AI coding agent"
        },
        {
          id: "dt-dom-breadcrumbs", num: "4", shortLabel: "HTML DOM breadcrumb bar",
          x: 57.6, y: 4.2, w: 42.0, h: 3.8,
          title: "Selected HTML element & parent/child breadcrumb trail",
          category: "HTML structure · See how boxes nest",
          whatItDoes: "Shows the currently selected HTML tag and its parent containers ('div > article > section > div').",
          whenYouUseIt: "Click along this breadcrumb bar to step up to a parent container when debugging flexbox or grid alignment.",
          tryCommand: "Right-click element on page -> Inspect"
        },
        {
          id: "dt-styles-pane", num: "5", shortLabel: "Styles & Computed CSS rules",
          x: 57.6, y: 8.2, w: 42.0, h: 49.5,
          title: "'Styles' & 'Computed' CSS pane (Live sandbox)",
          category: "CSS styling · Test changes live in the browser",
          whatItDoes: "Shows every CSS rule applied to the selected element (e.g. 'justify-content: center', 'display: flex') and which file:line it comes from. You can click any value to type a new color, padding, or font-size and preview it live! (Crossed-out rules mean another CSS rule overrode them.)",
          whenYouUseIt: "Experiment with spacing or colors here first, then copy the winning CSS into your '.css' file in VS Code.",
          tryCommand: "Click any CSS property in 'Styles' to toggle or edit it live"
        },
        {
          id: "dt-console-drawer", num: "6", shortLabel: "Bottom Console drawer",
          x: 57.6, y: 58.2, w: 23.5, h: 5.0,
          title: "Bottom 'Console' drawer (Always-visible JS log)",
          category: "Debugging · Read stack traces while inspecting HTML",
          whatItDoes: "Keeps the JavaScript Console visible in a split drawer at the bottom while you inspect HTML/CSS at the top. Press 'Esc' anytime inside DevTools to toggle this bottom Console drawer open or closed!",
          whenYouUseIt: "Press 'Esc' in DevTools to view HTML/CSS and Console errors side-by-side.",
          tryCommand: "Press [Esc] inside DevTools to toggle the Console drawer"
        }
      ]
    },

    // =========================================================================
    // NEON CLOUD DATABASE SNAPSHOT: SERVERLESS POSTGRES DASHBOARD
    // =========================================================================
    {
      id: "database-studio",
      group: "database",
      groupLabel: "Cloud Database (Neon / Supabase)",
      tabTitle: "Neon Cloud Postgres Dashboard",
      shortTitle: "Neon Cloud Postgres",
      imageSrc: "./ui-neon-database.png",
      aspectRatio: "1024 / 568",
      subtitle: "What a managed Serverless SQL Database (Neon Postgres) looks like: where your database projects, branches, compute usage, and connection commands live.",
      hotspots: [
        {
          id: "db-sidebar-projects", num: "1", shortLabel: "Projects, Billing & Settings",
          x: 1.0, y: 10.0, w: 14.6, h: 21.0,
          title: "Left sidebar: Projects, People, Billing, Integrations & Settings",
          category: "Database navigation · Manage your cloud SQL instances",
          whatItDoes: "Navigates between your database projects, team access permissions, billing limits, and cloud integrations (like linking Neon directly to Vercel).",
          whenYouUseIt: "Click 'Integrations' to automatically sync your database connection string into Vercel.",
          tryCommand: "Neon + Vercel integration auto-sets DATABASE_URL"
        },
        {
          id: "db-usage-metrics", num: "2", shortLabel: "Serverless Compute & Storage (0 CU-hrs)",
          x: 20.0, y: 18.2, w: 28.5, h: 10.2,
          title: "Serverless Compute ('CU-hrs') & Storage GB metrics",
          category: "How serverless SQL works · Scales to $0 when idle",
          whatItDoes: "• Compute (CU-hrs): Neon automatically pauses your database CPU when no one is using your app ('0 CU-hrs') and wakes it up in ~500ms when a request arrives.\n• Storage: Shows the disk space used by your SQL tables (here just 0.03 GB / 32 MB).",
          whenYouUseIt: "Check here to see how much database storage and compute your app is using.",
          tryCommand: "Scales to zero automatically when idle"
        },
        {
          id: "db-new-project-btn", num: "3", shortLabel: "+ New project & Import data",
          x: 78.6, y: 9.6, w: 19.0, h: 5.0,
          title: "'+ New project' & 'Import data' buttons",
          category: "Essential action · Spin up a Postgres database in 2 seconds",
          whatItDoes: "Creates a brand-new PostgreSQL database in the cloud (or imports an existing SQL dump / CSV).",
          whenYouUseIt: "Click '+ New project' when your app needs permanent storage for users, posts, or orders.",
          tryCommand: "Click '+ New project' -> Copy DATABASE_URL into .env"
        },
        {
          id: "db-project-row", num: "4", shortLabel: "Project1 row & AWS Region",
          x: 19.8, y: 53.8, w: 22.5, h: 5.2,
          title: "Database Project row ('Project1'), Region & 'Branches'",
          category: "Database architecture · Click to open Tables & SQL Editor",
          whatItDoes: "• Clicking 'Project1' opens its SQL Editor, Table Editor (rows & columns), and Connection String modal.\n• Region ('AWS US East 2'): Pick the region closest to your backend server so queries take <5ms.\n• Branches ('1'): Neon lets you branch your database just like a Git branch to test schema migrations safely!",
          whenYouUseIt: "Click your project name ('Project1') to inspect tables, run SQL queries, or copy your 'DATABASE_URL'.",
          tryCommand: "Click 'Project1' -> Tables / SQL Editor / Connect"
        },
        {
          id: "db-agent-skills", num: "5", shortLabel: "Onboard your agent (MCP / Skills)",
          x: 1.2, y: 59.0, w: 14.5, h: 26.5,
          title: "'Onboard your agent' card (Connect Cursor / Claude Code safely)",
          category: "AI Engineering · Give your coding agent database context",
          whatItDoes: "Provides a 1-click command to install Neon's official agent skill / MCP server so your AI coding assistant (Cursor, Claude Code, Windsurf) can inspect table schemas and write accurate SQL migrations.",
          whenYouUseIt: "Use this when you want your coding agent to help design tables or write Drizzle/Prisma/SQLAlchemy queries.",
          tryCommand: "Connects via Model Context Protocol (MCP)"
        },
        {
          id: "db-psql-connect", num: "6", shortLabel: "$ psql -h pg.neon.tech (Connect)",
          x: 60.0, y: 93.2, w: 15.6, h: 5.0,
          title: "Terminal connection command ('$ psql -h pg.neon.tech')",
          category: "CLI connectivity · Connect from your terminal",
          whatItDoes: "Lets you connect directly to your cloud Postgres database from your Mac Terminal using 'psql' without typing a password (via browser authentication).",
          whenYouUseIt: "Copy this command into your terminal when you want to test SQL queries directly from the command line.",
          tryCommand: "psql -h pg.neon.tech"
        }
      ]
    },

    // =========================================================================
    // MAC TERMINAL SNAPSHOT: ZSH PROMPT, PWD, LS & GIT STATUS
    // =========================================================================
    {
      id: "terminal-cli",
      group: "terminal",
      groupLabel: "Mac Terminal & CLI",
      tabTitle: "Mac Terminal: pwd, ls & git status",
      shortTitle: "Mac Terminal",
      imageSrc: "./ui-mac-terminal.png",
      aspectRatio: "1024 / 547",
      subtitle: "A real Mac Terminal window: how to read the prompt ('~ %'), check where you are ('pwd'), list folders ('ls'), and avoid the 'not a git repository' trap.",
      hotspots: [
        {
          id: "tm-pwd-command", num: "1", shortLabel: "pwd -> /Users/lucy (Where am I?)",
          x: 1.0, y: 5.5, w: 24.0, h: 9.0,
          title: "'pwd' (Print Working Directory) & the '~' home symbol",
          category: "Navigation #1 · Always check where you are standing",
          whatItDoes: "• Notice the prompt: 'lucy@macbook ~ %'. The tilde ('~') means your terminal is currently standing inside your personal Home folder.\n• Running 'pwd' prints the exact full path on disk: '/Users/lucy'.",
          whenYouUseIt: "Run 'pwd' first whenever you open a new Terminal window so you never run commands in the wrong folder!",
          tryCommand: "pwd"
        },
        {
          id: "tm-ls-command", num: "2", shortLabel: "ls (List folders in current directory)",
          x: 1.0, y: 14.2, w: 22.0, h: 52.0,
          title: "'ls' (List every folder & file sitting inside your current folder)",
          category: "Navigation #2 · See what is around you",
          whatItDoes: "Prints the folders sitting inside '/Users/lucy'—the exact same folders ('Desktop', 'Documents', 'Downloads', 'my-first-app') you see in Mac Finder! (Tip: run 'ls -la' to also reveal hidden dotfiles like '.env' and '.git'.)",
          whenYouUseIt: "Run 'ls' before 'cd' so you can see the exact spelling of the subfolder you want to step into.",
          tryCommand: "ls   (or ls -la to see hidden .env files)"
        },
        {
          id: "tm-git-not-a-repo", num: "3", shortLabel: "fatal: not a git repository (.git)",
          x: 1.0, y: 66.8, w: 69.5, h: 9.5,
          title: "Why 'git status' said 'fatal: not a git repository'",
          category: "Common beginner error · Standing one folder too high!",
          whatItDoes: "Look closely at why this failed: the terminal is still standing in the Home folder ('~'), which is NOT a Git project! Git only works inside a project folder that contains a hidden '.git' tracking folder.",
          whenYouUseIt: "Whenever you see 'fatal: not a git repository', don't panic—you just need to 'cd <your-project-folder>' first (or run 'git init' if it's a brand-new project)!",
          tryCommand: "cd my-first-app   # Step into your project folder first!"
        },
        {
          id: "tm-cd-git-status", num: "4", shortLabel: "cd my-first-app && git status",
          x: 1.0, y: 76.2, w: 46.0, h: 13.0,
          title: "'cd my-first-app && git status' -> 'On branch main'",
          category: "Chaining commands · Step inside & check Git cleanly",
          whatItDoes: "• 'cd my-first-app' steps down into the project folder.\n• '&&' chains the next command right after.\n• Now 'git status' succeeds and replies: 'On branch main — nothing to commit, working tree clean'!",
          whenYouUseIt: "Use 'cd <folder> && git status' to jump into your project and verify its Git state in one line.",
          tryCommand: "cd my-first-app && git status"
        },
        {
          id: "tm-active-prompt", num: "5", shortLabel: "Prompt changed to 'my-first-app %'",
          x: 1.0, y: 89.2, w: 31.0, h: 5.5,
          title: "Updated prompt ('lucy@macbook my-first-app % █')",
          category: "Terminal anatomy · Your prompt shows your current folder",
          whatItDoes: "Notice how the word before '%' changed from '~' to 'my-first-app'! The Mac zsh prompt always tells you the name of the folder you are currently standing inside, and the solid block cursor ('█') is waiting for your next command.",
          whenYouUseIt: "Glance at the word right before '%' (or '$') to confirm you are inside your project folder before running 'npm', 'python3', or 'git' commands.",
          tryCommand: "cd ..   # Steps back up to the parent folder"
        }
      ]
    }
  ];

  var EXTRA_FLOWS = [
    {
      id: "flow-deploy-vercel-env",
      title: "Flow 6: Deploy a GitHub repo to Vercel & add secret Environment Variables",
      badge: "4 steps · GitHub ➔ Vercel",
      icon: "rocket_launch",
      summary: "How to connect your GitHub repository to Vercel for automatic cloud deployments and store secret '.env' API keys safely:",
      steps: [
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-commits-history",
          stepTitle: "Step 1 of 4 · Verify your latest commit is pushed to GitHub (and '.env' is in .gitignore)",
          instruction: "Make sure your working code is pushed to GitHub (Pin #9) and that '.gitignore' (Pin #11) is blocking your local '.env' file from uploading."
        },
        {
          snapshotId: "vercel-dashboard",
          hotspotId: "vc-import-project",
          stepTitle: "Step 2 of 4 · Click 'Import' on Vercel to connect your GitHub repository",
          instruction: "Sign in to Vercel with GitHub and click 'Import' (Pin #6, or 'Add New ▾ -> Project' at Pin #4) to select your GitHub repository and deploy it."
        },
        {
          snapshotId: "vercel-env",
          hotspotId: "vc-env-main-box",
          stepTitle: "Step 3 of 4 · Paste secret API keys into Vercel's Environment Variables vault",
          instruction: "Open Environment Variables (Pin #1 / Pin #4) and add your secret keys (like 'GEMINI_API_KEY' or 'DATABASE_URL') so your cloud backend can read them safely."
        },
        {
          snapshotId: "vercel-dashboard",
          hotspotId: "vc-nav-projects-deployments",
          stepTitle: "Step 4 of 4 · Open Deployments & Logs to view your live URL and server status",
          instruction: "Click 'Deployments' or 'Logs' (Pin #1) to open your live '.vercel.app' URL—every future 'git push' on your laptop will update it automatically!"
        }
      ]
    },
    {
      id: "flow-connect-cloud-database",
      title: "Flow 7: Create a cloud Postgres database in Neon & connect it",
      badge: "3 steps · Neon ➔ Vercel",
      icon: "database",
      summary: "How to spin up a serverless PostgreSQL database in Neon and wire its connection string into your app:",
      steps: [
        {
          snapshotId: "database-studio",
          hotspotId: "db-new-project-btn",
          stepTitle: "Step 1 of 3 · Click '+ New project' in Neon to create a Postgres database",
          instruction: "In the Neon dashboard, click '+ New project' (Pin #3) to spin up a serverless PostgreSQL database."
        },
        {
          snapshotId: "database-studio",
          hotspotId: "db-project-row",
          stepTitle: "Step 2 of 3 · Open your project ('Project1') or use the Vercel integration",
          instruction: "Click your project row ('Project1', Pin #4) to open the SQL Editor and copy your 'DATABASE_URL' (or connect your coding agent via Pin #5)."
        },
        {
          snapshotId: "vercel-env",
          hotspotId: "vc-env-main-box",
          stepTitle: "Step 3 of 3 · Save 'DATABASE_URL' in your local .env and Vercel Environment Variables",
          instruction: "Paste 'DATABASE_URL' into your local '.env' file on your laptop and into Vercel's Environment Variables vault (Pin #4)!"
        }
      ]
    },
    {
      id: "flow-debug-chrome-devtools",
      title: "Flow 8: Inspect CSS & debug red Console errors in Chrome DevTools",
      badge: "4 steps · DevTools ➔ VS Code",
      icon: "troubleshoot",
      summary: "What to click when a webpage layout looks wrong or a button click throws an error:",
      steps: [
        {
          snapshotId: "chrome-devtools",
          hotspotId: "dt-inspect-picker",
          stepTitle: "Step 1 of 4 · Right-click the page -> 'Inspect' & click the '↖' Element Picker",
          instruction: "Open Chrome DevTools (Cmd+Option+I or F12), click the '↖' Element Picker (Pin #1), and click any element on the page to jump to its HTML tag (Pin #4)."
        },
        {
          snapshotId: "chrome-devtools",
          hotspotId: "dt-styles-pane",
          stepTitle: "Step 2 of 4 · Inspect & live-edit CSS rules in the 'Styles' pane",
          instruction: "Check the 'Styles' pane (Pin #5) to see which CSS rules apply (and which file:line they live on) and test spacing or flex changes live."
        },
        {
          snapshotId: "chrome-devtools",
          hotspotId: "dt-error-counter",
          stepTitle: "Step 3 of 4 · Check the red '⊗' Error counter & bottom Console drawer",
          instruction: "Click the red error badge ('⊗ 2', Pin #3) or look at the bottom Console drawer (Pin #6) to read any JavaScript crash messages and line numbers."
        },
        {
          snapshotId: "vscode-git",
          hotspotId: "vsc-git-python-code",
          stepTitle: "Step 4 of 4 · Fix the file in VS Code, save (Cmd+S), and hard-refresh (Cmd+Shift+R)",
          instruction: "Jump back to the file in VS Code (Pin #5), save your fix, and press Cmd+Shift+R in Chrome to verify the error is gone!"
        }
      ]
    }
  ];

  EXTRA_SNAPSHOTS.forEach(function (s) {
    if (s.imageSrc && !/\.svg$/i.test(s.imageSrc)) {
      (s.hotspots || []).forEach(function (hs) {
        hs.x = Math.round((hs.x + (hs.w || 10) / 2) * 10) / 10;
        hs.y = Math.round((hs.y + (hs.h || 5.2) / 2) * 10) / 10;
      });
      window.InterfaceTourData.SNAPSHOTS.push(s);
    }
  });

  var realSnapshotIds = {};
  (window.InterfaceTourData.SNAPSHOTS || []).forEach(function (s) {
    realSnapshotIds[s.id] = true;
  });

  EXTRA_FLOWS.forEach(function (f) {
    var allReal = (f.steps || []).every(function (st) {
      return Boolean(realSnapshotIds[st.snapshotId]);
    });
    if (allReal) {
      window.InterfaceTourData.FLOWS.push(f);
    }
  });
})();

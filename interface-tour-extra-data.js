// Deployed Eng Pipeline — Additional Tool Interface Snapshots & Flows
// Extends window.InterfaceTourData with:
//   7. Vercel Cloud Hosting Dashboard (Deployments, Build/Runtime Logs, Environment Variables, Rollback & Analytics)
//   8. Chrome DevTools (Elements/CSS Inspector, Network 200/500 API tab, Console Errors & Application/LocalStorage)
//   9. Neon / Supabase Cloud Postgres Database Studio (Table Editor, SQL Editor, Pooled DATABASE_URL, Branches & RLS)
//  10. Mac Terminal & CLI Coding Agents (zsh prompt, Homebrew/uv, .venv, localhost:8000 server & Claude Code CLI)
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  if (!window.InterfaceTourData) return;

  var EXTRA_SNAPSHOTS = [
    // =========================================================================
    // SNAPSHOT 7: VERCEL CLOUD HOSTING & DEPLOYMENTS DASHBOARD
    // =========================================================================
    {
      id: "vercel-dashboard",
      group: "vercel",
      groupLabel: "Vercel / Cloud Hosting",
      tabTitle: "7. Vercel: Cloud Deploy, Logs & Env Vars",
      shortTitle: "Vercel Cloud Dashboard",
      imageSrc: "./ui-vercel-dashboard.svg",
      aspectRatio: "1024 / 640",
      subtitle: "What happens after you push code to GitHub: Vercel builds your app, gives you a live public URL, stores your encrypted API keys, and streams server logs.",
      hotspots: [
        {
          id: "vc-prod-domain", num: "1", shortLabel: "Live .vercel.app URL",
          x: 42.8, y: 30.3, w: 32.5, h: 5.2,
          title: "Production Deployment card & public '.vercel.app' URL",
          category: "Cloud hosting · Your live public website",
          whatItDoes: "Shows the live production version of your app and its public HTTPS domain (e.g. 'https://tech-tree-app.vercel.app') that anyone in the world can open on their phone or laptop.",
          whenYouUseIt: "Every time you merge or push to your 'main' branch on GitHub, Vercel automatically rebuilds your code (~25 seconds) and updates this live URL with zero downtime.",
          tryCommand: "git push origin main  ->  auto-updates this URL"
        },
        {
          id: "vc-git-preview", num: "2", shortLabel: "Git commit & Preview URL",
          x: 31.6, y: 50.2, w: 54.8, h: 6.4,
          title: "Source Git Commit ('7ecde05') & Automatic Preview Branch URLs",
          category: "Cloud hosting · Test branches before going live",
          whatItDoes: "• Links directly to the exact GitHub commit ('7ecde05' on 'main') currently running in production.\n• Below it, every Pull Request or feature branch gets its own private 'Preview URL' so you can test changes on a real cloud server before merging to 'main'!",
          whenYouUseIt: "Click the Preview URL on any Pull Request to share a working test link with teammates before touching production.",
          tryCommand: "git push -u origin feat/my-branch  ->  creates a Preview URL"
        },
        {
          id: "vc-instant-rollback", num: "3", shortLabel: "↺ Instant Rollback",
          x: 91.5, y: 11.6, w: 13.0, h: 4.8,
          title: "'↺ Instant Rollback' button (1-click emergency recovery)",
          category: "Reliability · Revert a broken deploy in 1 second",
          whatItDoes: "If you push a bug to production, clicking 'Instant Rollback' immediately switches live traffic back to your previous working deployment without waiting for a new build.",
          whenYouUseIt: "Use this whenever a new deployment breaks production—revert traffic first in 1 click, then debug calmly on your laptop.",
          tryCommand: "Vercel Dashboard -> Instant Rollback (or git revert HEAD)"
        },
        {
          id: "vc-build-runtime-logs", num: "4", shortLabel: "Build & Runtime Logs (500)",
          x: 31.6, y: 79.4, w: 56.8, h: 7.4,
          title: "Build Logs & Serverless Function Runtime Logs",
          category: "Observability · Read cloud crash tracebacks",
          whatItDoes: "• Build Logs: Shows 'npm run build' or Python library install errors if a deployment fails while building.\n• Runtime Logs: Streams live messages ('200 OK' vs. '500 ERROR') from your running backend endpoints (often called 'Serverless Functions' — small backend functions that wake up whenever a user clicks a button). Notice how the red log immediately tells you 'KeyError: STRIPE_SECRET_KEY missing'!",
          whenYouUseIt: "Whenever your live site shows '500 Internal Server Error' or a button fails in production, open Runtime Logs here to read the exact error line.",
          tryCommand: "Filter logs by 'Error (500)' to spot missing env keys or crashes"
        },
        {
          id: "vc-env-variables", num: "5", shortLabel: "Environment Variables",
          x: 80.2, y: 32.0, w: 32.4, h: 14.0,
          title: "Settings ➔ Environment Variables (Your cloud '.env' vault)",
          category: "Security · Where secret API keys live in the cloud",
          whatItDoes: "Because your local '.env' file is ignored by '.gitignore' and never uploaded to GitHub, Vercel doesn't have your API keys until you paste them here! Values are encrypted (scrambled safely in storage) and handed directly to your running Python ('os.environ') or JavaScript ('process.env') code when the server runs.",
          whenYouUseIt: "Whenever you add a new key (like 'GEMINI_API_KEY' or 'DATABASE_URL') to your local '.env' file, paste the key and value here too, then click 'Redeploy'.",
          tryCommand: "Settings -> Environment Variables -> Add Key -> Redeploy"
        },
        {
          id: "vc-web-analytics", num: "6", shortLabel: "Web Analytics (Visitors)",
          x: 80.2, y: 75.2, w: 32.4, h: 9.2,
          title: "Web Analytics (Private visitor & pageview counter)",
          category: "Analytics · See how many people visit your app",
          whatItDoes: "Shows unique visitors, total page views, and top routes over the last 7/30 days—visible only to you when logged into your Vercel dashboard, without needing cookie banners.",
          whenYouUseIt: "Click the 'Web Analytics' tab in Vercel to enable 1-click visitor tracking for your deployed project.",
          tryCommand: "Vercel -> Web Analytics -> Enable"
        }
      ]
    },

    // =========================================================================
    // SNAPSHOT 8: CHROME DEVTOOLS (F12 / INSPECT)
    // =========================================================================
    {
      id: "chrome-devtools",
      group: "devtools",
      groupLabel: "Chrome DevTools (Browser Inspector)",
      tabTitle: "8. Chrome DevTools: Inspect, Console & Network",
      shortTitle: "Chrome DevTools (F12)",
      imageSrc: "./ui-chrome-devtools.svg",
      aspectRatio: "1024 / 640",
      subtitle: "Your X-ray goggles inside Chrome (Right-click -> Inspect, or Cmd+Option+I): inspect HTML/CSS, read red JS errors, and watch every API call.",
      hotspots: [
        {
          id: "dt-inspect-picker", num: "1", shortLabel: "Inspect Element (↖)",
          x: 21.3, y: 30.9, w: 38.8, h: 13.4,
          title: "Element Picker ('↖') & Blue Box-Model Highlight",
          category: "Frontend X-ray · Click any button on the page",
          whatItDoes: "Click the top-left '↖' cursor icon in DevTools (or right-click any button on a webpage and choose 'Inspect'). Hovering over the page highlights the element's exact pixel size ('188 × 38 px'), padding, and jumps straight to its '<button>' tag in the HTML tree.",
          whenYouUseIt: "Whenever a card, button, or label looks misaligned or cut off, inspect it to see which CSS rule is controlling its size.",
          tryCommand: "Shortcut: Cmd+Shift+C (Mac) or Ctrl+Shift+C (Windows)"
        },
        {
          id: "dt-device-toolbar", num: "2", shortLabel: "Mobile Preview (📱)",
          x: 47.0, y: 14.7, w: 6.2, h: 4.6,
          title: "Toggle Device Toolbar ('📱' phone/tablet simulator)",
          category: "Responsive design · Test iPhone & iPad layouts",
          whatItDoes: "Shrinks your browser viewport to simulate an iPhone, Pixel, or iPad screen right on your laptop so you can verify your app doesn't overflow horizontally on mobile.",
          whenYouUseIt: "Click this phone icon before shipping any UI change to verify buttons and diagrams wrap cleanly on narrow screens.",
          tryCommand: "Shortcut: Cmd+Shift+M (Mac) toggles Mobile Device view"
        },
        {
          id: "dt-elements-styles", num: "3", shortLabel: "Elements & Live CSS",
          x: 71.5, y: 29.7, w: 54.8, h: 21.2,
          title: "'Elements' HTML DOM Tree & 'Styles' Live CSS Editor",
          category: "Frontend X-ray · Experiment with CSS live",
          whatItDoes: "• Left ('Elements'): Shows the live HTML DOM tree (Document Object Model — the browser's live family tree of every heading, button, and box on the page).\n• Right ('Styles'): Lets you click any CSS property (like 'padding: 8px 16px' or 'var(--color-primary)') and type a new value to preview the change instantly!",
          whenYouUseIt: "Note: Edits in DevTools Styles are temporary! Once you find the spacing or color that looks right, copy that change into your real '.css' file in VS Code.",
          tryCommand: "Right-click any element -> Inspect -> Edit Styles pane"
        },
        {
          id: "dt-network-tab", num: "4", shortLabel: "Network (200 vs 500)",
          x: 71.5, y: 54.4, w: 53.8, h: 8.6,
          title: "'Network' tab (Inspect every API request, status code & latency)",
          category: "API debugging · Is it a frontend or backend bug?",
          whatItDoes: "Lists every file and API call your page makes:\n• Green '200 OK' ('/api/ask-guide', 380ms): Request succeeded! Click it to read the JSON response.\n• Red '500 Error' ('/api/save-note'): Your backend server crashed! Click the red row -> 'Response' tab to see the exact error payload.",
          whenYouUseIt: "Whenever clicking a button does nothing or shows an error, check Network first to see if the request returned 200, 401 (unauthenticated), 404 (wrong URL), or 500 (server crash).",
          tryCommand: "Network tab -> Click request row -> Preview / Response tab"
        },
        {
          id: "dt-disable-cache", num: "5", shortLabel: "Disable cache & Hard Refresh",
          x: 88.8, y: 44.1, w: 18.0, h: 3.8,
          title: "'☑ Disable cache' checkbox & Hard Refresh (Cmd+Shift+R)",
          category: "Browser cache · Why didn't my code change show up?",
          whatItDoes: "Browsers aggressively cache old '.css' and '.js' files for speed. Checking '☑ Disable cache' keeps Chrome from serving stale files whenever DevTools is open!",
          whenYouUseIt: "If you saved a change in VS Code and refreshed Chrome but the page still looks old, press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Win) to force a hard refresh.",
          tryCommand: "Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)"
        },
        {
          id: "dt-console-drawer", num: "6", shortLabel: "Console (JS Errors)",
          x: 61.0, y: 75.6, w: 32.0, h: 8.6,
          title: "'Console' tab (Red JavaScript errors & interactive JS prompt)",
          category: "JavaScript debugging · Exact file & line number",
          whatItDoes: "Prints every 'console.log()' message and highlights uncaught JavaScript crashes in red—including the exact file and line number (e.g. 'app.js:142') where the error happened! You can also type JS expressions at the '>' prompt.",
          whenYouUseIt: "Open Console immediately if your page renders blank or a button click doesn't respond.",
          tryCommand: "Shortcut: Cmd+Option+J (Mac) opens the Console directly"
        },
        {
          id: "dt-application-storage", num: "7", shortLabel: "Application (LocalStorage)",
          x: 88.8, y: 78.4, w: 18.6, h: 9.0,
          title: "'Application' tab (Inspect LocalStorage, Cookies & Session tokens)",
          category: "Browser storage · Saved preferences & login cookies",
          whatItDoes: "Shows every key-value pair saved in your browser's 'localStorage' (a small notebook built into the browser that remembers non-sensitive settings like dark/light mode) and your login cookies ('HttpOnly ✓' — secure login passes that browser scripts cannot steal).",
          whenYouUseIt: "Use this tab to inspect or clear saved local state when testing a fresh user experience.",
          tryCommand: "Application -> Local Storage -> Right-click -> Clear"
        }
      ]
    },

    // =========================================================================
    // SNAPSHOT 9: CLOUD DATABASE STUDIO (NEON / SUPABASE POSTGRES)
    // =========================================================================
    {
      id: "database-studio",
      group: "database",
      groupLabel: "Cloud Database (Neon / Supabase)",
      tabTitle: "9. Cloud DB: Tables, SQL & DATABASE_URL",
      shortTitle: "Neon / Supabase DB Studio",
      imageSrc: "./ui-database-studio.svg",
      aspectRatio: "1024 / 640",
      subtitle: "Where your app's permanent memory lives in the cloud: browse tables like a spreadsheet, run SQL queries, and copy your pooled DATABASE_URL.",
      hotspots: [
        {
          id: "db-table-editor", num: "1", shortLabel: "Table Editor (Rows & PK)",
          x: 60.0, y: 26.6, w: 75.6, h: 20.0,
          title: "Table Editor ('public.users' spreadsheet view & Primary Keys)",
          category: "Database · View & edit persistent cloud data",
          whatItDoes: "Displays your PostgreSQL database tables just like a Google Sheet or Airtable! Each column has a strict data type—like 'PK' (Primary Key, the unique ID badge for each row, often a random 'uuid' ID string), 'text unique', or 'timestamptz' (timestamp with timezone)—and rows stay saved safely even when your web server restarts.",
          whenYouUseIt: "Open Table Editor after submitting a form in your app to verify that the new row was actually saved to the database.",
          tryCommand: "Click '+ Insert row' to add test data visually"
        },
        {
          id: "db-branches", num: "2", shortLabel: "Database Branches",
          x: 54.1, y: 4.1, w: 19.2, h: 4.4,
          title: "Database Branch selector ('main' vs. preview branches)",
          category: "Serverless Postgres · Git-style branches for data",
          whatItDoes: "Modern serverless databases like Neon let you create an instant isolated branch copy of your database so you can test schema migrations (adding or renaming columns) without risking real production user data.",
          whenYouUseIt: "Create a test branch before running a major 'ALTER TABLE' migration or letting an AI agent modify your database schema.",
          tryCommand: "neon branches create --name preview-feature"
        },
        {
          id: "db-rls-badge", num: "3", shortLabel: "RLS Policies (Security)",
          x: 73.3, y: 4.1, w: 16.4, h: 4.4,
          title: "Row Level Security ('RLS Policies: Enabled')",
          category: "Database security · Prevent users seeing others' rows",
          whatItDoes: "In Supabase and Postgres, Row Level Security (RLS) enforces rules inside the database itself (e.g. 'auth.uid() = user_id') so User A can never query or delete User B's rows.",
          whenYouUseIt: "Always make sure RLS is enabled on every table in Supabase before launching publicly!",
          tryCommand: "ALTER TABLE notes ENABLE ROW LEVEL SECURITY;"
        },
        {
          id: "db-connect-url", num: "4", shortLabel: "Connect & DATABASE_URL",
          x: 82.7, y: 75.6, w: 28.2, h: 20.6,
          title: "'🔌 Connect' modal & Pooled 'DATABASE_URL' connection string",
          category: "Essential action · Connect your code to the database",
          whatItDoes: "Clicking 'Connect' gives you the 'DATABASE_URL' connection string (an all-in-one address containing your username, password, database host, and '?sslmode=require' for encrypted traffic). Checking '☑ Connection Pooling' ('-pooler' — a shared switchboard for database connections) prevents cloud servers from running out of connections under heavy traffic.",
          whenYouUseIt: "Copy this 'DATABASE_URL' string and paste it into TWO places: (1) your local '.env' file in VS Code, and (2) Vercel -> Settings -> Environment Variables.",
          tryCommand: "Paste into .env:  DATABASE_URL=\"postgresql://...\""
        },
        {
          id: "db-sql-editor", num: "5", shortLabel: "SQL Editor & Indexes",
          x: 43.2, y: 69.5, w: 42.4, h: 26.0,
          title: "SQL Editor ('▷ Run SQL' & 'CREATE INDEX')",
          category: "Database queries · Fast filtering & indexing",
          whatItDoes: "Lets you run raw SQL queries ('SELECT ... FROM users WHERE ...') and create indexes ('CREATE INDEX idx_users_email ON users(email)'). An index is like a book's index—it makes lookups take 3 milliseconds instead of scanning every row!",
          whenYouUseIt: "Use the SQL Editor to inspect query speed or add an index on columns your app filters by frequently (like 'email' or 'user_id').",
          tryCommand: "CREATE INDEX idx_users_email ON users(email);"
        },
        {
          id: "db-left-nav", num: "6", shortLabel: "Schema, Auth & Backups",
          x: 9.6, y: 26.0, w: 17.0, h: 32.0,
          title: "Left navigation (Table Editor, SQL, Auth Users & Point-in-Time Backups)",
          category: "Database navigation · All tables & automated backups",
          whatItDoes: "Switches between your table list ('users', 'flashcards', 'study_sessions'), built-in user Authentication management, Row Level Security rules, and automated Point-in-Time Recovery backups.",
          whenYouUseIt: "Click any table name under 'PUBLIC SCHEMA TABLES' to inspect its columns and rows.",
          tryCommand: "Point-in-Time Restore lets you rewind accidental deletions"
        }
      ]
    },

    // =========================================================================
    // SNAPSHOT 10: MAC TERMINAL, HOMEBREW/UV & CLAUDE CODE CLI AGENT
    // =========================================================================
    {
      id: "terminal-cli",
      group: "terminal",
      groupLabel: "Mac Terminal & CLI Agent",
      tabTitle: "10. Terminal: zsh, .venv, Server & Claude CLI",
      shortTitle: "Mac Terminal & Claude CLI",
      imageSrc: "./ui-terminal-cli.svg",
      aspectRatio: "1024 / 640",
      subtitle: "How to read a real Mac Terminal window: your folder prompt, Homebrew & uv virtual environments, a running localhost server, and a terminal AI agent.",
      hotspots: [
        {
          id: "tm-title-bar", num: "1", shortLabel: "Window bar (my-app — -zsh)",
          x: 45.0, y: 3.6, w: 24.0, h: 4.6,
          title: "Terminal window header ('📁 my-app — -zsh — 120×36') & Split Tabs",
          category: "Terminal anatomy · Current folder & active shell",
          whatItDoes: "The top bar always tells you three things: (1) which folder you are currently standing inside ('my-app'), (2) which command-line shell is running ('-zsh', the default Mac shell), and (3) your open terminal tabs ('Tab 1: zsh & server', 'Tab 2: claude agent').",
          whenYouUseIt: "Press Cmd+T in Mac Terminal to open a second tab whenever your first tab is busy running a local web server!",
          tryCommand: "Cmd+T opens a new terminal tab; pwd prints your full folder path"
        },
        {
          id: "tm-brew-uv", num: "2", shortLabel: "brew install & uv",
          x: 26.5, y: 24.8, w: 46.5, h: 8.4,
          title: "Installing developer tools with Homebrew ('brew install uv gh')",
          category: "Package managers · The App Store for your terminal",
          whatItDoes: "Running 'brew install uv gh' uses Homebrew to download and install official command-line tools ('uv' for fast Python environments, 'gh' for GitHub CLI) into Mac's official tool folder ('/opt/homebrew/') and registers them in your Terminal's PATH lookup list automatically.",
          whenYouUseIt: "Use 'brew install <tool>' for system-wide developer tools, and 'uv pip install' (or 'npm install') for project-specific libraries.",
          tryCommand: "brew install uv gh node"
        },
        {
          id: "tm-venv-prompt", num: "3", shortLabel: "(.venv) prompt prefix",
          x: 26.5, y: 38.8, w: 47.8, h: 5.4,
          title: "The green '(.venv)' prefix in front of your prompt",
          category: "Python isolation · Your project's private bubble",
          whatItDoes: "After you run 'uv venv && source .venv/bin/activate', notice how '(.venv)' appears at the very start of your prompt! That confirms any Python packages you install ('fastapi', 'pytest') go cleanly into this project's '.venv' folder instead of polluting your Mac's system Python.",
          whenYouUseIt: "Always look for '(.venv)' before running 'pip install' or 'pytest'.",
          tryCommand: "uv venv && source .venv/bin/activate"
        },
        {
          id: "tm-localhost-ctrlc", num: "4", shortLabel: "localhost:8000 & Ctrl+C",
          x: 26.5, y: 68.6, w: 47.8, h: 14.8,
          title: "Running local server ('http://127.0.0.1:8000') & 'Press CTRL+C to quit'",
          category: "Local server · Why the terminal stops showing a prompt",
          whatItDoes: "When you start a web server ('uvicorn server:app --reload' or 'npm run dev'), the terminal stays busy listening for browser requests and printing live access logs ('GET / 200 OK'). It is NOT frozen—it is actively serving your site!",
          whenYouUseIt: "Open 'http://127.0.0.1:8000' (or 'localhost:8000') in Chrome to view your app. When you want to stop the server and get your '%' prompt back, press Ctrl + C!",
          tryCommand: "Press Ctrl + C (Control+C, even on a Mac!) to stop a server"
        },
        {
          id: "tm-claude-diff", num: "5", shortLabel: "Claude / Gemini CLI diff",
          x: 75.5, y: 39.5, w: 43.0, h: 14.2,
          title: "Terminal AI Coding Agent ('claude' / 'gemini') & Red/Green Diff Preview",
          category: "AI coding agent · Autonomous multi-file edits",
          whatItDoes: "When you launch a terminal agent inside your project folder, it reads your 'CLAUDE.md' / 'GEMINI.md' rules, inspects your files, and shows you a red (-) and green (+) diff of the exact lines it wants to change before touching disk.",
          whenYouUseIt: "Read the green (+) lines in the proposed diff to verify the agent isn't deleting working logic or hardcoding secrets.",
          tryCommand: "claude   (launches interactive terminal agent in current folder)"
        },
        {
          id: "tm-permission-gate", num: "6", shortLabel: "Agent Permission Gate ([1])",
          x: 75.5, y: 55.9, w: 43.0, h: 14.0,
          title: "Human-in-the-Loop Permission Prompt ('Allow agent to edit & run pytest?')",
          category: "Agent safety · Approve edits & automatic test verification",
          whatItDoes: "Before modifying files or running shell commands, the terminal agent pauses and asks for your approval ('[1] Yes', '[2] Yes, don't ask again for pytest', '[3] No / Esc'). Immediately after applying the edit, it runs 'pytest' to prove the change works!",
          whenYouUseIt: "Safe read/test commands ('pytest', 'git status') are great to auto-allow ('[2]'), while destructive commands ('rm', 'git push --force') should always require human review.",
          tryCommand: "Press 1 to approve, or Esc to interrupt and redirect the agent"
        }
      ]
    }
  ];

  var EXTRA_FLOWS = [
    {
      id: "flow-deploy-vercel-env",
      title: "Flow 6: Deploy to Vercel & add secret API keys",
      badge: "4 steps · GitHub ➔ Vercel",
      icon: "rocket_launch",
      description: "How your code goes from a GitHub repository to a live public '.vercel.app' website—and how to add secret API keys when your local '.env' file isn't uploaded.",
      steps: [
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-special-files",
          stepTitle: "Step 1 of 4 · Verify '.env' is inside '.gitignore' on GitHub",
          instruction: "Before deploying, check your GitHub repository root (Pin #11) to make sure '.gitignore' hides '.env' so your raw API keys are never exposed in public code."
        },
        {
          snapshotId: "vercel-dashboard",
          hotspotId: "vc-prod-domain",
          stepTitle: "Step 2 of 4 · Connect GitHub to Vercel to get your live '.vercel.app' URL",
          instruction: "Import your GitHub repository into Vercel. Vercel builds your 'main' branch in ~25 seconds and publishes it at a live HTTPS URL (Pin #1)."
        },
        {
          snapshotId: "vercel-dashboard",
          hotspotId: "vc-env-variables",
          stepTitle: "Step 3 of 4 · Paste 'GEMINI_API_KEY' in Vercel Settings ➔ Environment Variables",
          instruction: "Because your local '.env' was never uploaded to GitHub, open Vercel's 'Settings ➔ Environment Variables' panel (Pin #5), paste your secret key and value, click Save, and Redeploy."
        },
        {
          snapshotId: "vercel-dashboard",
          hotspotId: "vc-build-runtime-logs",
          stepTitle: "Step 4 of 4 · Check Runtime Logs & Web Analytics",
          instruction: "Verify your API routes return green '[200 OK]' in the Runtime Logs panel (Pin #4) and check your visitor count in Web Analytics (Pin #6)."
        }
      ]
    },
    {
      id: "flow-connect-cloud-db",
      title: "Flow 7: Connect a cloud database (Neon / Supabase) to VS Code",
      badge: "3 steps · Cloud DB ➔ VS Code",
      icon: "database",
      description: "How to grab your pooled Postgres connection string from Neon or Supabase, store it safely in your local project, and verify rows are saved.",
      steps: [
        {
          snapshotId: "database-studio",
          hotspotId: "db-connect-url",
          stepTitle: "Step 1 of 3 · Click '🔌 Connect' & copy your pooled 'DATABASE_URL'",
          instruction: "In your Neon or Supabase dashboard, click 'Connect' (Pin #4), keep 'Connection Pooling' checked, and click 'Copy DATABASE_URL'."
        },
        {
          snapshotId: "vscode-explorer",
          hotspotId: "vsc-exp-dotfiles",
          stepTitle: "Step 2 of 3 · Paste 'DATABASE_URL' into your local '.env' file in VS Code",
          instruction: "In VS Code's Explorer sidebar (Pin #3), paste DATABASE_URL=\"postgresql://...\" into your local '.env' file—and confirm '.env' is listed inside '.gitignore'!"
        },
        {
          snapshotId: "database-studio",
          hotspotId: "db-table-editor",
          stepTitle: "Step 3 of 3 · Inspect saved rows in the Table Editor & add an index",
          instruction: "Run your app and open the Cloud Database Table Editor (Pin #1) to see your new user rows appear live, or use the SQL Editor (Pin #5) to add a fast lookup index."
        }
      ]
    },
    {
      id: "flow-debug-chrome-devtools",
      title: "Flow 8: Debug a broken button or API error in Chrome DevTools",
      badge: "4 steps · DevTools ➔ VS Code",
      icon: "troubleshoot",
      description: "What to click when a webpage looks wrong, a button does nothing, or an API call fails with a 500 error.",
      steps: [
        {
          snapshotId: "chrome-devtools",
          hotspotId: "dt-inspect-picker",
          stepTitle: "Step 1 of 4 · Right-click the element -> 'Inspect' (or press Cmd+Option+I)",
          instruction: "Click the '↖' Element Picker (Pin #1) and click any button on your webpage to highlight its box model and jump to its HTML & CSS in the Elements tab (Pin #3)."
        },
        {
          snapshotId: "chrome-devtools",
          hotspotId: "dt-console-drawer",
          stepTitle: "Step 2 of 4 · Check the Console tab for red JavaScript stack traces",
          instruction: "Look at the Console drawer (Pin #6): if JavaScript crashed, Chrome prints the exact error and filename:line ('app.js:142')."
        },
        {
          snapshotId: "chrome-devtools",
          hotspotId: "dt-network-tab",
          stepTitle: "Step 3 of 4 · Check the Network tab for red 404 or 500 API requests",
          instruction: "If the frontend JS is fine, check the Network tab (Pin #4) to see if '/api/save-note' returned a red '500 Error'—and check '☑ Disable cache' (Pin #5) so stale files never fool you."
        },
        {
          snapshotId: "vscode-git",
          hotspotId: "vsc-git-python-code",
          stepTitle: "Step 4 of 4 · Fix the bug in VS Code & run 'pytest' to lock it in",
          instruction: "Jump back to the exact line in VS Code (Pin #5), fix the bug, and add an 'assert' test so that bug can never sneak back!"
        }
      ]
    }
  ];

  // Rule: Never display synthetic/made-up SVG interface mockups.
  // Only register snapshots whose imageSrc is a real screenshot (.png / .jpg / .webp).
  var realSnapshotIds = {};
  (window.InterfaceTourData.SNAPSHOTS || []).forEach(function (s) {
    realSnapshotIds[s.id] = true;
  });
  EXTRA_SNAPSHOTS.forEach(function (s) {
    if (s.imageSrc && !/\.svg$/i.test(s.imageSrc)) {
      window.InterfaceTourData.SNAPSHOTS.push(s);
      realSnapshotIds[s.id] = true;
    }
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

// Deployed Eng Pipeline — "Explore Where Things Are" Annotated Interface Snapshots & Step-by-Step Flows
// Covers GitHub (Repository Code View, Home/Navigation/Agent Dashboard, Settings/Branches/Secrets)
// and VS Code / Cursor (Workspace Explorer & Terminal, Source Control/Git & Editor, Extensions & MCP Servers).
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SNAPSHOTS = [
    // =========================================================================
    // GITHUB SNAPSHOT 1: REPOSITORY & CODE VIEW
    // =========================================================================
    {
      id: "github-repo",
      group: "github",
      groupLabel: "GitHub (Cloud Git repository)",
      tabTitle: "1. Repository & files (<> Code)",
      shortTitle: "GitHub Repo (<> Code tab)",
      imageSrc: "./ui-github-repo.png",
      aspectRatio: "1024 / 611",
      subtitle: "The main front door of a GitHub project: where your folders, files, commit history, and the green '<> Code' clone button live.",
      hotspots: [
        {
          id: "gh-repo-code-tab",
          num: "1",
          shortLabel: "<> Code tab",
          x: 7.0,
          y: 6.5,
          title: "<> Code tab (Project files home)",
          category: "GitHub navigation · File browser",
          whatItDoes: "Shows all the folders and plain-text code files inside this repository, plus the project's README.md instruction manual at the bottom.",
          whenYouUseIt: "Click this tab anytime you want to return to the main folder tree after looking at Pull Requests, Actions, or Settings.",
          tryCommand: "Browser view of your Git repository root"
        },
        {
          id: "gh-repo-prs-tab",
          num: "2",
          shortLabel: "Pull requests",
          x: 18.0,
          y: 15.0,
          title: "Pull requests tab (Review changes before merging)",
          category: "GitHub navigation · Code review",
          whatItDoes: "Lists every open Pull Request ('PR')—a waiting room where you or a teammate (or an AI agent like Devin/Claude) propose merging a feature branch into your official 'main' branch.",
          whenYouUseIt: "Click here to inspect the green (+) and red (-) line-by-line diff, check if automated tests passed, and click 'Merge pull request'.",
          tryCommand: "Compare branch diff -> Click 'Merge pull request'"
        },
        {
          id: "gh-repo-actions-tab",
          num: "3",
          shortLabel: "Agents & Actions",
          x: 33.0,
          y: 6.5,
          title: "Agents & Actions tabs (Automated cloud robots)",
          category: "GitHub navigation · CI/CD automation",
          whatItDoes: "'Agents' lets cloud coding agents work on tasks; 'Actions' (GitHub Actions) automatically runs your test suite (like pytest) every time you push code so broken code gets caught immediately.",
          whenYouUseIt: "Click 'Actions' if a red X appears next to your commit to read the exact error log from the cloud test runner.",
          tryCommand: "Runs workflows defined in .github/workflows/"
        },
        {
          id: "gh-repo-settings-tab",
          num: "4",
          shortLabel: "Settings",
          x: 59.8,
          y: 6.5,
          title: "Settings tab (Repo privacy, branch protection & secrets)",
          category: "GitHub navigation · Configuration",
          whatItDoes: "Opens the control panel for this repository where you can rename the repo, protect your 'main' branch, turn on GitHub Pages hosting, or add encrypted API keys ('Secrets').",
          whenYouUseIt: "Only visible on repositories you own or have admin access to. (Switch to Snapshot 3 above to explore inside Settings!)",
          tryCommand: "Settings -> Branches / Pages / Secrets"
        },
        {
          id: "gh-repo-fork-star",
          num: "5",
          shortLabel: "Fork & Star",
          x: 78.5,
          y: 13.5,
          title: "Watch, Fork & Star buttons",
          category: "Open source · Copy or bookmark a repo",
          whatItDoes: "• Star: Bookmarks a useful open-source repo so you can find it again.\n• Fork: Makes a personal cloud copy of someone else's repository under YOUR GitHub account so you can edit and experiment freely without touching their original project.",
          whenYouUseIt: "Click 'Fork' when you want to customize an open-source project, then clone your fork to your laptop.",
          tryCommand: "Click Fork -> git clone https://github.com/you/repo.git"
        },
        {
          id: "gh-repo-branch-picker",
          num: "6",
          shortLabel: "main (Branches)",
          x: 16.5,
          y: 32.5,
          title: "Branch picker ('main') & '4 Branches' link",
          category: "Version control · Parallel timelines",
          whatItDoes: "Shows which timeline ('branch') you are currently viewing—usually 'main' (your official production code). Clicking the dropdown lets you switch to experimental feature branches.",
          whenYouUseIt: "Use this dropdown to check files on a feature branch you pushed from VS Code or your terminal.",
          tryCommand: "git switch -c feat/my-branch  (in terminal)"
        },
        {
          id: "gh-repo-find-add-file",
          num: "7",
          shortLabel: "Go to file / Add file",
          x: 43.0,
          y: 26.5,
          title: "'Go to file [T]' search & 'Add file' button",
          category: "File actions · Quick jump or upload",
          whatItDoes: "• Go to file (or press 'T' on your keyboard): Instantly searches for any file across nested folders.\n• Add file: Lets you create a new text file or drag-and-drop upload files directly in your web browser.",
          whenYouUseIt: "Press 'T' when exploring a big codebase on GitHub to jump straight to a file name.",
          tryCommand: "Press [T] on GitHub to fuzzy-search files"
        },
        {
          id: "gh-repo-green-code-btn",
          num: "8",
          shortLabel: "<> Code (Clone / ZIP)",
          x: 68.5,
          y: 31.5,
          title: "Green '<> Code' button (How you download/clone a repo!)",
          category: "Essential action · Copy repo URL or Download ZIP",
          whatItDoes: "Clicking this green button opens a dropdown with: (1) the HTTPS URL (the repository's web link that you copy for 'git clone'), (2) 'Open with GitHub Desktop / Codespaces', and (3) 'Download ZIP' (a one-time compressed folder download that strips out Git's connection to GitHub).",
          whenYouUseIt: "Whenever you want to bring a project from GitHub onto your laptop and keep it connected to GitHub, click this green '<> Code' button, copy the HTTPS web link, and run 'git clone <link>' in your VS Code terminal!",
          tryCommand: "git clone https://github.com/owner/repo.git"
        },
        {
          id: "gh-repo-commits-history",
          num: "9",
          shortLabel: "28 Commits (History)",
          x: 63.0,
          y: 41.5,
          title: "'28 Commits' time-machine history log",
          category: "Version control · Every saved checkpoint",
          whatItDoes: "Shows the total number of saved checkpoints ('commits') and the 7-character commit hash (like 'c74a0a4' — a unique receipt code generated for each save). Clicking it opens the full chronological history of every edit ever made.",
          whenYouUseIt: "Click here when something breaks to see what changed in the most recent commit and who (or which AI agent) changed it.",
          tryCommand: "git log --oneline -n 10  (in terminal)"
        },
        {
          id: "gh-repo-folders",
          num: "10",
          shortLabel: "Project folders (app, lib)",
          x: 20.0,
          y: 53.5,
          title: "Application folders (app, components, lib, prisma)",
          category: "File tree · Where source code is organized",
          whatItDoes: "Blue folder icons hold your nested code files: e.g. 'app/' (pages & API routes), 'components/' (reusable UI buttons/cards), 'lib/' (helper logic), and 'prisma/' (database table schema).",
          whenYouUseIt: "Click any folder name to step inside it (just like running 'cd components' in the terminal).",
          tryCommand: "cd app && ls -la"
        },
        {
          id: "gh-repo-special-files",
          num: "11",
          shortLabel: ".gitignore & README.md",
          x: 20.0,
          y: 79.5,
          title: "Root config files (.gitignore, README.md, package-lock.json)",
          category: "File tree · Guardrails & instruction manual",
          whatItDoes: "• .gitignore: Lists secret files (like '.env') that Git must NEVER upload to GitHub.\n• README.md: The human instruction manual explaining how to install and run the project.\n• package-lock.json: Locks exact library versions so every computer installs identical packages.",
          whenYouUseIt: "Always check that '.env' is listed inside '.gitignore' before pushing code to GitHub!",
          tryCommand: "cat .gitignore"
        }
      ]
    },

    // =========================================================================
    // GITHUB SNAPSHOT 2: HOME DASHBOARD, LEFT DRAWER & COPILOT AGENT
    // =========================================================================
    {
      id: "github-home",
      group: "github",
      groupLabel: "GitHub (Cloud Git repository)",
      tabTitle: "2. GitHub Home, menu & Copilot",
      shortTitle: "GitHub Home & Left Menu",
      imageSrc: "./ui-github-home.png",
      aspectRatio: "1024 / 611",
      subtitle: "What you see when you sign in to github.com: your top repositories, the '+' button to create a new repo, and the Copilot/Agent box.",
      hotspots: [
        {
          id: "gh-home-left-nav",
          num: "1",
          shortLabel: "Issues, PRs & Repos",
          x: 7.5,
          y: 17.5,
          title: "Left navigation drawer (Issues, Pull requests, Repositories)",
          category: "GitHub navigation · Global menu",
          whatItDoes: "Opened by clicking the 3-line 'hamburger' icon in the top-left corner. Lets you jump to all of your Repositories, open Pull Requests, or Issues across your entire account.",
          whenYouUseIt: "Click 'All repositories' here whenever you want to see a complete list of every project you have created or forked.",
          tryCommand: "Top-left ☰ icon -> All repositories"
        },
        {
          id: "gh-home-codespaces-mcp",
          num: "2",
          shortLabel: "Codespaces & MCP registry",
          x: 7.5,
          y: 36.0,
          title: "Codespaces, Copilot & MCP registry",
          category: "Cloud IDE & AI tools · Browser workspaces",
          whatItDoes: "• Codespaces: Opens a full VS Code editor and terminal inside your web browser tab—great when you are on a borrowed laptop.\n• MCP registry: A directory of Model Context Protocol ('MCP') connectors that let AI agents safely read databases, docs, and APIs.",
          whenYouUseIt: "Use Codespaces when you want to run code in the cloud without installing tools on your laptop.",
          tryCommand: "Click Codespaces -> New codespace"
        },
        {
          id: "gh-home-top-repos",
          num: "3",
          shortLabel: "Your repositories list",
          x: 8.0,
          y: 59.0,
          title: "Top repositories quick-jump list",
          category: "Your projects · 1-click repo access",
          whatItDoes: "Shows your most recently used repositories (formatted as 'YourUsername/RepoName') with a search icon to filter them instantly.",
          whenYouUseIt: "Click any repository name here to open its '<> Code' view (Snapshot 1).",
          tryCommand: "Click any repo -> Opens Snapshot 1"
        },
        {
          id: "gh-home-copilot-box",
          num: "4",
          shortLabel: "Ask / Agent prompt box",
          x: 47.0,
          y: 21.0,
          title: "GitHub Copilot & Agent prompt box",
          category: "AI assistant · Ask or assign tasks across repos",
          whatItDoes: "Lets you ask questions about a repository ('Where is user login handled?') or switch from 'Ask' to 'Agent' mode to have GitHub's cloud coding agent draft a Pull Request for you.",
          whenYouUseIt: "Click 'All repositories' inside the box to scope the AI to one specific project before asking a question.",
          tryCommand: "Select repo -> Ask or run Agent"
        },
        {
          id: "gh-home-action-pills",
          num: "5",
          shortLabel: "Debug / Agent / Write code",
          x: 49.0,
          y: 32.5,
          title: "Quick task pills (Debug, Agent, Create issue, Write code, Git, PRs)",
          category: "AI workflows · Guided templates",
          whatItDoes: "Pre-fills common developer tasks—like diagnosing a failing build ('Debug'), drafting a bug ticket ('Create issue'), or explaining a Git command ('Git').",
          whenYouUseIt: "Helpful when you want a cloud agent to draft a small fix or summarize open Pull Requests while you are away from your IDE.",
          tryCommand: "Click 'Write code' or 'Git' for guided prompts"
        },
        {
          id: "gh-home-plus-new-repo",
          num: "6",
          shortLabel: "'+' Create new repo",
          x: 85.0,
          y: 3.1,
          title: "Top-right '+' button (Create a brand-new repository!)",
          category: "Essential action · Start a new project",
          whatItDoes: "Clicking the '+' icon in the top-right bar opens a menu with 'New repository', 'Import repository', 'New codespace', and 'New gist'.",
          whenYouUseIt: "Click '+' -> 'New repository' whenever you start a new project and want an empty cloud Git vault to push your laptop code into!",
          tryCommand: "Click '+' -> New repository -> Choose Private/Public"
        }
      ]
    },

    // =========================================================================
    // GITHUB SNAPSHOT 3: REPOSITORY SETTINGS, BRANCHES & SECRETS
    // =========================================================================
    {
      id: "github-settings",
      group: "github",
      groupLabel: "GitHub (Cloud Git repository)",
      tabTitle: "3. Repo Settings, branches & secrets",
      shortTitle: "GitHub Repo Settings",
      imageSrc: "./ui-github-settings.png",
      aspectRatio: "1024 / 611",
      subtitle: "Inside a repository's Settings tab: where you rename a repo, protect your main branch, enable GitHub Pages, and store encrypted API keys.",
      hotspots: [
        {
          id: "gh-set-rename",
          num: "1",
          shortLabel: "Repository name",
          x: 42.0,
          y: 22.8,
          title: "Repository name & 'Rename' button",
          category: "General settings · Project identity",
          whatItDoes: "Lets you change the name of your repository (and optionally mark it as a 'Template repository' so you can stamp out copies of it in 1 click).",
          whenYouUseIt: "If you rename a repo here, GitHub automatically redirects old links, though it is good practice to update your local git remote URL.",
          tryCommand: "git remote -v  (checks your laptop's link)"
        },
        {
          id: "gh-set-collaborators",
          num: "2",
          shortLabel: "Collaborators (Access)",
          x: 18.5,
          y: 22.0,
          title: "Collaborators (Invite teammates to a Private repo)",
          category: "Access control · Who can read or push code",
          whatItDoes: "If your repository is Private, nobody else on earth can see it until you add their GitHub username under 'Collaborators'.",
          whenYouUseIt: "Click here when you want to share a private project with a co-founder or teammate without making the repo public.",
          tryCommand: "Settings -> Collaborators -> Add people"
        },
        {
          id: "gh-set-branches",
          num: "3",
          shortLabel: "Rulesets & Branches",
          x: 18.5,
          y: 35.5,
          title: "Rulesets & Branches (Protect your 'main' branch)",
          category: "Safety guardrails · Branch protection",
          whatItDoes: "Lets you turn on 'Branch Protection' for your 'main' branch—requiring changes to go through a Pull Request and pass automated tests before merging, and blocking anyone (or any AI agent) from force-deleting history.",
          whenYouUseIt: "Turn this on once your app is live in production so an accidental command on 'main' can never wipe out your live site.",
          tryCommand: "Protect 'main' -> Require pull request before merging"
        },
        {
          id: "gh-set-default-branch",
          num: "4",
          shortLabel: "Default branch (main)",
          x: 39.5,
          y: 46.2,
          title: "Default branch ('main' vs. 'master')",
          category: "Version control · The official trunk",
          whatItDoes: "Shows which branch is considered the main trunk of your repository. Older tools sometimes named it 'master'; modern tools name it 'main'. Clicking the pencil icon renames it cleanly.",
          whenYouUseIt: "If your repo says 'master' and you prefer the modern standard 'main', click the pencil icon here to rename it in 1 click.",
          tryCommand: "git branch -M main  (renames local branch to main)"
        },
        {
          id: "gh-set-webhooks",
          num: "5",
          shortLabel: "Actions & Webhooks",
          x: 18.5,
          y: 45.5,
          title: "Actions & Webhooks (How Vercel & Render know you pushed)",
          category: "Automation · Event notifications",
          whatItDoes: "When you connect your GitHub repo to Vercel, Netlify, or Render, they install a 'Webhook' (an automatic notification doorbell) here so GitHub pings them the exact second you run 'git push'.",
          whenYouUseIt: "You rarely edit Webhooks manually, but checking here confirms which cloud hosts are listening to your repository.",
          tryCommand: "git push origin main -> Fires Webhook -> Auto-deploys"
        },
        {
          id: "gh-set-pages",
          num: "6",
          shortLabel: "Pages (Free static host)",
          x: 18.5,
          y: 63.5,
          title: "Pages (GitHub Pages free static website hosting)",
          category: "Cloud hosting · Free website for HTML/CSS/JS",
          whatItDoes: "Turns any repository containing an 'index.html' file into a live public website (at 'username.github.io/repo-name') for $0 with zero external hosting account needed.",
          whenYouUseIt: "Great for static portfolios, interactive HTML/JS diagrams, and documentation sites that don't need a Python backend server.",
          tryCommand: "Settings -> Pages -> Deploy from branch: main"
        },
        {
          id: "gh-set-secrets",
          num: "7",
          shortLabel: "Secrets and variables",
          x: 18.5,
          y: 78.5,
          title: "Secrets and variables (Encrypted vault for API keys)",
          category: "Security · Where private keys live in the cloud",
          whatItDoes: "Stores encrypted environment variables (like 'GEMINI_API_KEY' or 'DATABASE_URL') so automated GitHub Actions tests and deployment workflows can use them without ever exposing the key in your code files.",
          whenYouUseIt: "Remember: keep keys in '.env' on your laptop (ignored by '.gitignore'), and paste them into 'Secrets and variables' here (or in Vercel/Render's Environment Variables).",
          tryCommand: "Settings -> Secrets and variables -> Actions -> New repository secret"
        }
      ]
    },

    // =========================================================================
    // VS CODE SNAPSHOT 4: WORKSPACE, FILE EXPLORER, TERMINAL & AI CHAT
    // =========================================================================
    {
      id: "vscode-explorer",
      group: "vscode",
      groupLabel: "VS Code / Cursor (Code editor & terminal)",
      tabTitle: "4. VS Code: Explorer, Terminal & AI Chat",
      shortTitle: "VS Code Explorer & Terminal",
      imageSrc: "./ui-vscode-explorer.png",
      aspectRatio: "1024 / 678",
      subtitle: "Your local code workshop on your laptop: the left Explorer file tree, bottom integrated Terminal, and right-hand AI Agent chat.",
      hotspots: [
        {
          id: "vsc-exp-activity-bar",
          num: "1",
          shortLabel: "Left Activity Bar icons",
          x: 9.0,
          y: 12.5,
          title: "Far-left Activity Bar (Switch between Files, Search, Git & Extensions)",
          category: "IDE navigation · The 6 master icons",
          whatItDoes: "The vertical strip on the far left switches what appears in the left sidebar:\n• Top 2 files icon = Explorer (your project folder tree)\n• Magnifying glass = Search across all files (like grep)\n• Branch icon with '11' = Source Control (Git)\n• Play+bug icon = Run & Debug\n• 4-squares icon = Extensions\n• Beaker icon = Automated Tests (pytest)",
          whenYouUseIt: "Click the top 'Explorer' icon whenever you want to see your folders and files.",
          tryCommand: "Cmd+Shift+E (Mac) or Ctrl+Shift+E (Win) opens Explorer"
        },
        {
          id: "vsc-exp-file-tree",
          num: "2",
          shortLabel: "Explorer folder & file tree",
          x: 13.0,
          y: 36.0,
          title: "Explorer file tree (Your project folder on your laptop)",
          category: "Files & folders · Click any file to open it",
          whatItDoes: "Shows every subfolder ('Lesson 1', 'Tutorial') and plain-text code file ('calculator.py', 'test.py', 'Index.html', 'script.js', 'style.css') inside your open project folder.",
          whenYouUseIt: "Single-click any file here to preview it in the center editor; right-click inside this sidebar to select 'New File...' or 'New Folder...'.",
          tryCommand: "Notice the M (Modified) and U (Untracked new file) badges on the right!"
        },
        {
          id: "vsc-exp-dotfiles",
          num: "3",
          shortLabel: ".gitignore & cache folders",
          x: 13.0,
          y: 23.5,
          title: "Dotfiles (.gitignore) & auto-generated cache folders (__pycache__)",
          category: "Files & folders · Hidden system files",
          whatItDoes: "Files starting with a dot (like '.gitignore' or '.pytest_cache') are hidden in Mac Finder, but VS Code shows them clearly so you can edit '.gitignore' directly! '__pycache__' is auto-created by Python to speed up imports.",
          whenYouUseIt: "Click '.gitignore' here and add '__pycache__/' and '.env' so Git doesn't clutter your repository with temporary cache files.",
          tryCommand: "ls -la  (shows hidden dot-files in the terminal)"
        },
        {
          id: "vsc-exp-editor-tabs",
          num: "4",
          shortLabel: "Open file tabs",
          x: 31.0,
          y: 5.5,
          title: "Open editor tabs bar (hello.py, calculator.py, test.py)",
          category: "Code editor · Switch between open files",
          whatItDoes: "Works just like browser tabs: every file you open from the Explorer sits in a tab along the top. A dot next to a filename means you have unsaved edits!",
          whenYouUseIt: "Press Cmd+S (Mac) or Ctrl+S (Windows) to save your file to disk before running it in the terminal.",
          tryCommand: "Cmd+S / Ctrl+S saves the current file"
        },
        {
          id: "vsc-exp-terminal-tabs",
          num: "5",
          shortLabel: "Terminal / Problems / Ports",
          x: 31.0,
          y: 76.5,
          title: "Bottom panel tabs (Problems, Output, Debug Console, Terminal, Ports)",
          category: "Built-in Terminal · Where you type commands",
          whatItDoes: "• Terminal: A real command-line shell already standing inside your project folder!\n• Problems: Lists syntax typos or linter warnings (automatic code spell-check alerts) in your code.\n• Ports: Lets you view local server ports (like localhost:8000, where ':8000' is the numbered door on your laptop that your local preview server listens on).",
          whenYouUseIt: "If the bottom Terminal panel is hidden, press Ctrl + ` (the backtick key above Tab) or click View -> Terminal in the top menu to pop it open!",
          tryCommand: "Shortcut: Ctrl + `  (toggles the Terminal panel open/closed)"
        },
        {
          id: "vsc-exp-terminal-prompt",
          num: "6",
          shortLabel: "Live terminal prompt ($)",
          x: 27.0,
          y: 88.0,
          title: "Live terminal prompt ('lcalcott-mac:Lesson 1 lcalcott$')",
          category: "Built-in Terminal · Run python, git & npm here",
          whatItDoes: "Notice how the prompt says 'Lesson 1'—because VS Code automatically opened the terminal inside your 'Lesson 1' folder! Click right next to the '$' cursor to type commands like 'python3 test.py', 'pytest', or 'git status'.",
          whenYouUseIt: "Always check which folder name is shown before the '$' or '%' sign so you know where your terminal is standing.",
          tryCommand: "python3 test.py   OR   pytest"
        },
        {
          id: "vsc-exp-terminal-list",
          num: "7",
          shortLabel: "Multiple terminal tabs (+)",
          x: 60.0,
          y: 81.0,
          title: "Terminal session list ('bash', 'Python') & '+' button",
          category: "Built-in Terminal · Run a server & commands at the same time",
          whatItDoes: "Shows each open terminal tab on the right side of the terminal drawer. If one terminal is busy running a local server, click the '+' icon to open a second fresh terminal tab!",
          whenYouUseIt: "Click the trash-can icon next to a terminal session to close it, or press Ctrl+C inside the terminal to stop a running program.",
          tryCommand: "Click '+' in the Terminal header to open a 2nd shell"
        },
        {
          id: "vsc-exp-ai-chat",
          num: "8",
          shortLabel: "AI Chat & Agent panel",
          x: 84.0,
          y: 89.0,
          title: "Right-hand AI Chat / Agent panel ('+ test.py', 'Agent')",
          category: "AI coding assistant · Edit files with context",
          whatItDoes: "Lets you chat with an AI coding agent right inside VS Code/Cursor. Notice the '+ test.py' pill—that tells the AI which exact file to read! Switching the dropdown to 'Agent' lets it edit files and run terminal tests.",
          whenYouUseIt: "Always attach the relevant file ('+ filename') and check Source Control ('git diff') after the agent finishes an edit.",
          tryCommand: "Attach file with '+' -> Describe change -> Review diff"
        },
        {
          id: "vsc-exp-status-bar",
          num: "9",
          shortLabel: "main* branch & Go Live",
          x: 11.0,
          y: 96.5,
          title: "Bottom Status Bar ('main*' branch, Sync '0↓ 2↑' & 'Go Live')",
          category: "Status bar · Current branch & cloud sync counter",
          whatItDoes: "• Bottom-left 'main*': Shows you are on the 'main' branch ('*' means you have uncommitted local edits).\n• '0↓ 2↑': Means you have 0 commits to pull down from GitHub and 2 local commits waiting to be pushed UP to GitHub!",
          whenYouUseIt: "Click '0↓ 2↑' (or run 'git push') to upload your 2 saved local commits to GitHub.",
          tryCommand: "git push origin main"
        }
      ]
    },

    // =========================================================================
    // VS CODE SNAPSHOT 5: SOURCE CONTROL (GIT) & PYTHON CODE EDITOR
    // =========================================================================
    {
      id: "vscode-git",
      group: "vscode",
      groupLabel: "VS Code / Cursor (Code editor & terminal)",
      tabTitle: "5. VS Code: Source Control (Git) & Editor",
      shortTitle: "VS Code Git & Code Editor",
      imageSrc: "./ui-vscode-git.png",
      aspectRatio: "1024 / 678",
      subtitle: "How you review changes, commit checkpoints, and read/run Python code visually inside VS Code without memorizing every Git flag.",
      hotspots: [
        {
          id: "vsc-git-icon",
          num: "1",
          shortLabel: "Source Control (11)",
          x: 8.5,
          y: 12.5,
          title: "Source Control icon (Branch icon with blue badge '11')",
          category: "Visual Git · Your built-in time machine",
          whatItDoes: "The blue badge '11' tells you that 11 files in your folder have been modified, added, or deleted since your last Git commit checkpoint.",
          whenYouUseIt: "Click this icon after you (or an AI agent) edit code to inspect every single changed file before saving a commit.",
          tryCommand: "Equivalent to running: git status"
        },
        {
          id: "vsc-git-commit-btn",
          num: "2",
          shortLabel: "Commit message & ✓ Commit",
          x: 19.5,
          y: 22.5,
          title: "Commit message box & blue '✓ Commit' button",
          category: "Visual Git · Save a permanent checkpoint",
          whatItDoes: "Type a short plain-English note describing what you changed (e.g. 'Fix square function and add negative number tests') into the box above, then click the blue '✓ Commit' button to freeze a permanent snapshot.",
          whenYouUseIt: "Click the small dropdown arrow on the right end of the blue 'Commit' button to choose 'Commit & Push' (saves locally AND uploads to GitHub in one click!).",
          tryCommand: "Equivalent to: git commit -m 'Your message'"
        },
        {
          id: "vsc-git-changes-mdu",
          num: "3",
          shortLabel: "Changes (M, D, U) & '+' Stage",
          x: 18.5,
          y: 35.0,
          title: "Changes list: What 'M', 'D', 'U' and the '+' / '↶' icons mean",
          category: "Visual Git · Stage, diff, or undo any file",
          whatItDoes: "Every changed file shows a letter badge and hover buttons:\n• M (Modified): Existing file was edited.\n• D (Deleted): File was removed.\n• U (Untracked): Brand-new file not yet tracked by Git.\n• '+' icon: Stages the file ('git add' — puts a checkmark on this file so it goes into your next Commit checkpoint).\n• '↶' curved arrow: Discards/undoes your unsaved changes to that file!",
          whenYouUseIt: "Click any filename in this list to open a side-by-side red/green 'git diff' showing the exact lines that changed!",
          tryCommand: "Click '+' to stage (git add) or '↶' to undo (git restore)"
        },
        {
          id: "vsc-git-graph",
          num: "4",
          shortLabel: "Git Graph (main vs origin/main)",
          x: 18.5,
          y: 54.5,
          title: "Source Control Graph ('main' vs. 'origin/main')",
          category: "Visual Git · Local vs. GitHub cloud timeline",
          whatItDoes: "Draws your commit history as dots on a vertical timeline!\n• Purple 'origin/main' badge: Where your GitHub cloud repository currently sits ('Initial Commit').\n• Blue 'main' badge: Two newer commits ('training 11 sept', 'training 2 11 sept') saved on your laptop that haven't been pushed up to GitHub yet!",
          whenYouUseIt: "Click the ↑ upload arrow at the top of the Graph header to push your local 'main' commits up to 'origin/main' on GitHub.",
          tryCommand: "Equivalent to: git log --graph --oneline"
        },
        {
          id: "vsc-git-python-code",
          num: "5",
          shortLabel: "Python code & unit tests",
          x: 48.0,
          y: 25.0,
          title: "Center Code Editor ('test.py': imports, functions & assert tests)",
          category: "Reading code · Python anatomy in action",
          whatItDoes: "Look at how clean a real Python file is:\n• Line 1: 'from calculator import square' brings in a function from another file.\n• Lines 4–9: 'def test_square():' uses 'assert' to test positive, negative, and zero inputs.\n• Line 16–17: Look closely at 'def square(n): return n + n'—that's a bug (2+2=4, but 3+3=6, not 9!), which 'assert square(3) == 9' will immediately catch!",
          whenYouUseIt: "Writing 4 lines of 'assert' tests like lines 5–9 is how you catch subtle bugs automatically.",
          tryCommand: "pytest test.py  (catches that square(3) returned 6 instead of 9!)"
        },
        {
          id: "vsc-git-run-btn",
          num: "6",
          shortLabel: "▷ Run Python file button",
          x: 64.2,
          y: 5.5,
          title: "Top-right '▷' Run button & Split Editor icon",
          category: "Code editor · 1-click run in terminal",
          whatItDoes: "Clicking the triangle '▷' Play button in the top-right corner of the editor automatically runs 'python3 test.py' inside your bottom Terminal panel!",
          whenYouUseIt: "Use the '▷' button for a quick 1-click run, or type 'python3 test.py' / 'pytest' directly in the bottom Terminal.",
          tryCommand: "Click ▷  ->  runs python3 test.py in Terminal"
        }
      ]
    },

    // =========================================================================
    // VS CODE SNAPSHOT 6: EXTENSIONS MARKETPLACE & MCP SERVERS
    // =========================================================================
    {
      id: "vscode-extensions",
      group: "vscode",
      groupLabel: "VS Code / Cursor (Code editor & terminal)",
      tabTitle: "6. VS Code: Extensions & MCP Servers",
      shortTitle: "VS Code Extensions & MCP",
      imageSrc: "./ui-vscode-extensions.png",
      aspectRatio: "1024 / 678",
      subtitle: "How you add language superpowers (Python, Pylance, Live Server, Docker) and Model Context Protocol (MCP) tool connectors to your editor.",
      hotspots: [
        {
          id: "vsc-ext-icon",
          num: "1",
          shortLabel: "Extensions icon (4 squares)",
          x: 9.5,
          y: 31.0,
          title: "Extensions icon on the Activity Bar (4-squares puzzle icon)",
          category: "IDE plugins · Add language & tool support",
          whatItDoes: "Opens the Extensions panel where you can install free official add-ons for Python, TypeScript, Prettier, Docker, GitHub Pull Requests, and local web previewing.",
          whenYouUseIt: "When you install VS Code or Cursor for the first time, open Extensions to make sure Python and Pylance are installed.",
          tryCommand: "Shortcut: Cmd+Shift+X (Mac) or Ctrl+Shift+X (Windows)"
        },
        {
          id: "vsc-ext-search",
          num: "2",
          shortLabel: "Search Extensions bar",
          x: 18.5,
          y: 8.8,
          title: "Search Extensions in Marketplace",
          category: "IDE plugins · Find verified extensions",
          whatItDoes: "Type any language or tool name (like 'Python', 'Ruff', 'Prettier', 'Tailwind', or 'GitLens') to find and install it in one click. Always look for the blue verified checkmark badge (e.g. 'Microsoft' or 'GitHub').",
          whenYouUseIt: "Check for the verified publisher checkmark before installing any extension.",
          tryCommand: "Search 'Python' or 'Live Server' -> Click Install"
        },
        {
          id: "vsc-ext-python-pylance",
          num: "3",
          shortLabel: "Python & Pylance",
          x: 19.5,
          y: 21.5,
          title: "Python Environments & Pylance (Python autocomplete & type-checking)",
          category: "Essential Python tools · Smart autocomplete",
          whatItDoes: "• Python Environments: Automatically detects your Python version (e.g. Python 3.13.7) and virtual environments ('.venv').\n• Pylance: Gives you instant autocomplete, function hover explanations, and red squiggly underlines if you misspell a variable name.",
          whenYouUseIt: "Installed once—works automatically every time you open a '.py' file.",
          tryCommand: "Hover over any Python function in the editor to read its docs"
        },
        {
          id: "vsc-ext-live-server",
          num: "4",
          shortLabel: "Live Server (Go Live)",
          x: 19.5,
          y: 40.5,
          title: "Live Server (Powers the 'Go Live' button in the bottom-right)",
          category: "Web development · Instant browser auto-reload",
          whatItDoes: "Adds the '(()) Go Live' button to the bottom-right corner of VS Code. Clicking 'Go Live' opens your 'index.html' file in Chrome on localhost and automatically refreshes the browser tab every time you press Cmd+S to save!",
          whenYouUseIt: "Ideal when building HTML, CSS, and JavaScript pages so you see your visual edits live without manually refreshing Chrome.",
          tryCommand: "Click '(()) Go Live' in bottom-right status bar"
        },
        {
          id: "vsc-ext-docker-ghpr",
          num: "5",
          shortLabel: "Container Tools & GitHub PRs",
          x: 18.5,
          y: 63.0,
          title: "Container Tools (Docker) & GitHub Pull Requests",
          category: "Shipping & collaboration · Cloud tools inside your IDE",
          whatItDoes: "• Container Tools: Lets you build and inspect Docker containers visually.\n• GitHub Pull Requests: Lets you open, review, and merge GitHub Pull Requests right inside VS Code without switching to your browser.",
          whenYouUseIt: "Click the blue 'Install' button on recommended extensions when your project starts using Docker or GitHub PRs.",
          tryCommand: "Review and create GitHub PRs directly from the sidebar"
        },
        {
          id: "vsc-ext-mcp-servers",
          num: "6",
          shortLabel: "MCP Servers (AI tool plugs)",
          x: 18.5,
          y: 81.5,
          title: "MCP Servers (Model Context Protocol connectors for AI agents)",
          category: "AI engineering · Connect your IDE agent to external tools",
          whatItDoes: "MCP (Model Context Protocol) is like a universal USB-C port for AI coding agents. Installing an MCP Server here lets your VS Code / Cursor AI agent securely query your Neon/Postgres database schema, read GitHub issues, or inspect browser pages while writing code.",
          whenYouUseIt: "Use MCP servers when you want your coding agent to see real database table columns or live error logs instead of guessing.",
          tryCommand: "Connect GitHub, Postgres/Neon, or Playwright MCP servers"
        }
      ]
    }
  ];

  // ===========================================================================
  // ILLUSTRATIVE STEP-BY-STEP HOW-TO FLOWS (Cross-Snapshot Guided Walkthroughs)
  // ===========================================================================
  var FLOWS = [
    {
      id: "flow-clone-repo",
      title: "Flow 1: Clone a project from GitHub to your laptop",
      badge: "GitHub -> VS Code",
      icon: "cloud_download",
      summary: "How to take a repository sitting on GitHub in your browser and open a working copy of it on your laptop inside VS Code:",
      steps: [
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-green-code-btn",
          stepTitle: "Step 1 of 3 · Click the green '<> Code' button on GitHub & copy the URL",
          instruction: "On the GitHub repository page, click the green '<> Code' button (Pin #8) and click the copy icon next to the HTTPS URL (e.g. 'https://github.com/TestPilot26/ThisDeck.git'). Never download a plain ZIP if you want Git history—copy the HTTPS link!"
        },
        {
          snapshotId: "vscode-explorer",
          hotspotId: "vsc-exp-terminal-prompt",
          stepTitle: "Step 2 of 3 · Open the Terminal panel inside VS Code & run 'git clone'",
          instruction: "Switch to VS Code on your laptop, click into the bottom Terminal prompt (Pin #6, or press Ctrl+` to open it), type 'git clone <paste-url-here>' and press Enter ↵. Git downloads the entire project folder onto your laptop!"
        },
        {
          snapshotId: "vscode-explorer",
          hotspotId: "vsc-exp-file-tree",
          stepTitle: "Step 3 of 3 · Open the downloaded folder in the left Explorer sidebar",
          instruction: "In VS Code, click File -> Open Folder (or run 'cd ThisDeck && code .' in the terminal). All your downloaded folders and files now appear in the left Explorer sidebar (Pin #2), ready to edit!"
        }
      ]
    },
    {
      id: "flow-open-edit-run",
      title: "Flow 2: Open a file, edit code & run it in VS Code",
      badge: "Inside VS Code",
      icon: "play_circle",
      summary: "How to open a code file, make an edit, save it to disk, and run it in the terminal or browser:",
      steps: [
        {
          snapshotId: "vscode-explorer",
          hotspotId: "vsc-exp-file-tree",
          stepTitle: "Step 1 of 3 · Click a file in the left Explorer tree to open it",
          instruction: "In the left Explorer sidebar (Pin #2), click any file—such as 'test.py' for Python or 'Index.html' for a webpage—to open it in the center editor tab."
        },
        {
          snapshotId: "vscode-git",
          hotspotId: "vsc-git-python-code",
          stepTitle: "Step 2 of 3 · Edit the code in the center tab & press Cmd+S / Ctrl+S to save",
          instruction: "Make your edit in the center code editor (Pin #5)—for example, fixing 'return n + n' to 'return n * n' in 'square(n)'. Then press Cmd+S (Mac) or Ctrl+S (Windows) so the unsaved dot on the top tab disappears!"
        },
        {
          snapshotId: "vscode-git",
          hotspotId: "vsc-git-run-btn",
          stepTitle: "Step 3 of 3 · Click the top-right '▷' Run button (or run in Terminal / Go Live)",
          instruction: "Click the '▷' Play button in the top-right corner of the editor (Pin #6) to run your Python script in the bottom Terminal—or if you're editing an HTML webpage, click '(()) Go Live' in the bottom-right corner!"
        }
      ]
    },
    {
      id: "flow-save-commit-push",
      title: "Flow 3: Save (commit) & push your changes back to GitHub",
      badge: "VS Code -> GitHub",
      icon: "backup",
      summary: "Once your code works on your laptop, here is how to freeze a Git checkpoint and back it up to GitHub:",
      steps: [
        {
          snapshotId: "vscode-git",
          hotspotId: "vsc-git-changes-mdu",
          stepTitle: "Step 1 of 3 · Open Source Control & review your Modified (M) and Untracked (U) files",
          instruction: "Click the Source Control branch icon on the left Activity Bar (Pin #1), then click any file in the 'Changes' list (Pin #3) to inspect the red/green diff and click '+' to stage the files you want to save."
        },
        {
          snapshotId: "vscode-git",
          hotspotId: "vsc-git-commit-btn",
          stepTitle: "Step 2 of 3 · Type a short commit message & click the blue '✓ Commit' button",
          instruction: "Type a 1-line summary of what you did in the message box at the top of Source Control (Pin #2) and click the blue '✓ Commit' button. Your snapshot is now safely frozen on your laptop (shown in the bottom Graph, Pin #4)!"
        },
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-commits-history",
          stepTitle: "Step 3 of 3 · Push to GitHub & verify your commit in the cloud repo",
          instruction: "Click the ↑ Push/Sync button in VS Code's Graph or bottom status bar (or run 'git push' in Terminal). Then refresh your GitHub repository page and check the Commits bar (Pin #9) to see your new checkpoint live in the cloud!"
        }
      ]
    },
    {
      id: "flow-create-new-repo",
      title: "Flow 4: Create a brand-new repository on GitHub",
      badge: "On GitHub",
      icon: "add_box",
      summary: "How to spin up a fresh cloud Git repository when starting a new project:",
      steps: [
        {
          snapshotId: "github-home",
          hotspotId: "gh-home-plus-new-repo",
          stepTitle: "Step 1 of 3 · Click the '+' button in the top-right corner of GitHub",
          instruction: "From GitHub Home (or any GitHub page), click the '+' icon in the top-right bar (Pin #6) and select 'New repository'."
        },
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-special-files",
          stepTitle: "Step 2 of 3 · Name your repo, pick Private or Public, and include a .gitignore & README",
          instruction: "Give your repository a clean name (e.g. 'my-first-app'), choose 'Private' (only you can see it) or 'Public', and check 'Add a README file' and a Python/Node '.gitignore' template (Pin #11)."
        },
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-green-code-btn",
          stepTitle: "Step 3 of 3 · Copy the HTTPS URL from the green '<> Code' button to clone it",
          instruction: "Once created, click the green '<> Code' button (Pin #8) to copy your new repo's URL and clone it to VS Code on your laptop!"
        }
      ]
    },
    {
      id: "flow-secrets-protection",
      title: "Flow 5: Protect your 'main' branch & store secret API keys",
      badge: "GitHub Security",
      icon: "shield_lock",
      summary: "How to prevent accidental force-pushes to 'main' and store encrypted API keys in GitHub Settings:",
      steps: [
        {
          snapshotId: "github-repo",
          hotspotId: "gh-repo-settings-tab",
          stepTitle: "Step 1 of 3 · Click the 'Settings' tab at the top of your GitHub repository",
          instruction: "In your GitHub repository header, click the 'Settings' gear tab on the far right of the top navigation bar (Pin #4)."
        },
        {
          snapshotId: "github-settings",
          hotspotId: "gh-set-branches",
          stepTitle: "Step 2 of 3 · Click 'Rulesets / Branches' to protect your 'main' branch",
          instruction: "In the left Settings sidebar, click 'Rulesets' or 'Branches' (Pin #3) to require Pull Requests and automated status checks before anyone can overwrite 'main'."
        },
        {
          snapshotId: "github-settings",
          hotspotId: "gh-set-secrets",
          stepTitle: "Step 3 of 3 · Click 'Secrets and variables' to store encrypted cloud API keys",
          instruction: "Under 'Security' in the left Settings sidebar, click 'Secrets and variables' (Pin #7) -> 'Actions' -> 'New repository secret' to paste private API keys safely."
        }
      ]
    }
  ];

  window.InterfaceTourData = {
    SNAPSHOTS: SNAPSHOTS,
    FLOWS: FLOWS
  };
})();

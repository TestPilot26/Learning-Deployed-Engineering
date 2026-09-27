// Deployed Eng Pipeline — Jargon-Free, Action-Oriented Data for Living Diagrams
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

  // ============================================================================
  // STOP 1: Illustrated Scene — Your Computer -> Cloud Code Repository -> Cloud Hosting
  // ============================================================================
  toolsFlowNodes: [
    {
      id: "ide-editor",
      hub: "computer",
      icon: "edit_square",
      badge: "Category · Code editors, IDEs & notebooks",
      badgeClass: "badge-info",
      title: "Code editors, AI IDEs & notebooks (VS Code, Cursor, Claude Code, Replit, Colab)",
      summary: "Where you open your project folder to read, write, and direct AI to edit your code.",
      whatItIs: "Category definition: A Code Editor or IDE (Integrated Development Environment — an all-in-one coding workshop) combines three things in one window: your folder's file list on the left, color-highlighted plain text in the middle, and a built-in terminal at the bottom.\n\nEvery tool you will hear in this category, explained:\n• VS Code (Visual Studio Code): The free, industry-standard desktop code editor used by most engineers.\n• Cursor & Windsurf: Desktop code editors built on top of VS Code with AI agents wired directly into your whole project folder.\n• Claude Code & Gemini CLI: Terminal-based AI coding agents that read your folder, edit files, and run tests directly from your command line.\n• Browser AI builders & sandboxes (Replit, v0, Lovable, Bolt.new, StackBlitz): Websites where you can prompt and preview a working prototype right in your browser with zero setup.\n• Interactive notebooks (Google Colab & Jupyter Notebooks): Digital lab notebooks where you run Python code one small block ('cell') at a time—the #1 way data scientists and AI researchers test charts and machine learning models.",
      slipUp: "Easy slip-up: Opening a single loose file instead of opening the whole project folder ('File -> Open Folder'). Always open the whole folder so your editor and AI assistant can see how all your files fit together.",
      command: "Open VS Code or Cursor -> File -> Open Folder",
      videoTitle: "VS Code: Visual tour of a code editor window",
      videoUrl: "https://code.visualstudio.com/docs/getstarted/userinterface"
    },
    {
      id: "plain-text",
      hub: "computer",
      icon: "description",
      badge: "Category · Plain-text source files",
      badgeClass: "badge-info",
      title: "Plain-text source files (.html, .css, .js, .py, .json, .md)",
      summary: "Where your code instructions live on your device—raw text characters saved inside a normal folder.",
      whatItIs: "Category definition: Source code is not locked inside a special format—every code file is simply a plain text file (saved in UTF-8, the universal standard for plain letters and symbols). We never use Microsoft Word or Google Docs to write code because word processors secretly inject invisible styling tags and turn straight quotes (\" \") into curly quotes (“ ”), which immediately crashes code engines.\n\nEvery file ending ('extension' — the letters after the dot that tell your computer what language is inside) you will see, explained:\n• .html (HyperText Markup Language): Places the structure—headings, paragraphs, and buttons—on a webpage.\n• .css (Cascading Style Sheets): Controls the paint—colors, fonts, spacing, and mobile layout.\n• .js & .ts (JavaScript & TypeScript): Makes the webpage interactive when you click buttons (TypeScript is JavaScript with an automatic spell-checker for data types).\n• .py (Python): The go-to language for AI models, data analysis, and backend servers.\n• .ipynb (Interactive Python Notebook): A notebook file opened in Google Colab or Jupyter.\n• .sql (Structured Query Language): Commands for asking a database table to save or find rows.\n• .json & .yaml (JavaScript Object Notation & YAML): Clean text formats for storing structured settings or mailing data between apps.\n• .md (Markdown): Simple plain-text notes (using # for headings and * for bullets) used for README instructions and AI skill prompts.",
      slipUp: "Easy slip-up: Double-clicking a .js or .py file in Mac Finder or Windows Explorer expecting an app window to pop open. Instead, open the project folder inside your code editor.",
      command: "ls -la   # Lists ('ls') all ('-a') files in detail ('-l'), including hidden dot-files",
      videoTitle: "MDN: How code files and folders work on your computer",
      videoUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
    },
    {
      id: "homebrew-runtime",
      hub: "computer",
      icon: "downloading",
      badge: "Category · Tool installers & engines",
      badgeClass: "badge-success",
      title: "Tool installers & language engines (Homebrew, winget, Node.js, Python, npm, pip/uv, Docker)",
      summary: "The kitchen engines that run code on your laptop and the 'App Store' commands that install them cleanly.",
      whatItIs: "Category definition: Plain text files are just written recipes—your computer needs a Language Engine (called a 'Runtime') to actually cook the recipe and run your app on your screen ('localhost', a private preview address that only your own laptop can see). And instead of hunting around websites for click-to-install files, engineers use Package Managers (official terminal installers).\n\nWhy website '.dmg' and '.exe' installers cause 'command not found':\n• .dmg & .exe files: When you download a normal app from a website, Mac gives you a '.dmg' file (an Apple Disk Image installer) and Windows gives you an '.exe' file (a Windows Executable installer). If you install Python or Node that way, the installer often drops the program into a random folder that your Terminal doesn't know to check.\n• PATH & 'command not found': Your Terminal only looks inside a specific checklist of folders (called your 'PATH'). If an installer puts Python in a folder outside your PATH, typing 'python' in the Terminal triggers 'command not found'!\n\n1. System Package Managers (Install engines & add them to your PATH automatically):\n• Homebrew ('brew'): The standard command-line 'App Store' for Mac and Linux ('brew install node python git') that downloads tools AND wires up their folder in your PATH automatically.\n• winget: The built-in command-line installer for Windows laptops.\n• apt: The built-in command-line installer used on Ubuntu/Debian Linux cloud servers.\n\n2. Language Engines ('Runtimes' — what actually runs your code):\n• Python ('python3'): The engine that runs .py files—used for AI, data science, and backend servers.\n• Node.js ('node'): The engine that lets your computer run JavaScript and TypeScript (.js/.ts) outside a web browser so you can run local web servers. (Bun and Deno are newer, faster alternatives to Node.js.)\n• Docker: A tool that packs your code AND its exact engine inside a sealed, portable box (a 'Container') so your app runs identically on any laptop or cloud server.\n\n3. Project Package Managers (Install open-source libraries into one project folder):\n• npm (Node Package Manager — or faster alternatives pnpm and yarn): Downloads JavaScript building blocks (like Stripe or UI icons) into your project.\n• pip & uv: Download Python building blocks (like FastAPI, Pandas, or OpenAI) into your Python project ('uv' is the ultra-fast modern Python installer).",
      slipUp: "Easy slip-up: Downloading '.dmg' (Mac installer) or '.exe' (Windows installer) files from random websites that drop tools into a folder outside your Terminal's PATH lookup list, causing 'command not found'. Using Homebrew ('brew') on Mac or 'winget' on Windows registers the folder automatically.",
      command: "brew install node python git   # Installs Node.js, Python & Git cleanly on Mac",
      videoTitle: "Homebrew: The system package manager for Mac & Linux",
      videoUrl: "https://brew.sh/"
    },
    {
      id: "local-git",
      hub: "computer",
      icon: "history",
      badge: "Category · Local version control",
      badgeClass: "badge-secondary",
      title: "Local version control (Git, commits, branches & diffs on your laptop)",
      summary: "Your local time machine—saves named checkpoints so you can rewind instantly if an AI edit breaks your app.",
      whatItIs: "Category definition: Version Control Software tracks every change made to your project files over time inside a hidden '.git' folder on your computer. Pressing Cmd+S (or Ctrl+S) overwrites your file immediately—so if an AI agent rewrites 5 files and breaks your app ten minutes later, normal 'Undo' cannot save you. Git lets you take a permanent, labeled snapshot whenever your project works.\n\nKey Git words you will see, explained:\n• Git: The free version-control program running on your laptop (distinct from GitHub, which is the website where you back up Git projects online).\n• Repository ('Repo'): Any project folder that has Git tracking turned on.\n• Stage ('git add .'): Selecting which changed files you want to pack into your next save box (the dot '.' means 'all changed files in this folder').\n• Commit ('git commit -m \"note\"'): Freezing a permanent, timestamped save checkpoint with a short message ('-m') describing what worked.\n• Branch ('git branch'): A parallel sandbox timeline where you can test risky AI ideas without touching your working 'main' version.\n• Diff ('git diff'): A red-and-green highlight showing the exact lines of text added (+) or deleted (-) since your last commit.\n• Visual Git apps (GitHub Desktop, GitKraken, or the Source Control tab inside VS Code / Cursor): Let you click buttons to Commit, Branch, and view Diffs if you don't want to type terminal commands.",
      slipUp: "Easy slip-up: Letting an AI agent make a big second change before saving a Git commit checkpoint of the first working version.",
      command: "git add . && git commit -m \"Working homepage\"   # Stages all files (.) then ('&&') saves a checkpoint",
      videoTitle: "MIT Missing Semester: How Git version control works",
      videoUrl: "https://missing.csail.mit.edu/2020/version-control/"
    },
    {
      id: "env-secrets",
      hub: "computer",
      icon: "lock",
      badge: "Category · Environment variables",
      badgeClass: "badge-neutral",
      title: "Private environment variables (.env file, .gitignore & cloud secrets)",
      summary: "Where secret API keys live outside your code so passwords never leak onto public GitHub.",
      whatItIs: "Category definition: Environment Variables are private configuration settings and secret billing keys stored outside your normal code files so strangers can never read them.\n\nEvery term in this workflow, explained:\n• API Key / Secret Token: A private password (like 'OPENAI_API_KEY' or 'STRIPE_SECRET_KEY') that charges your credit card or accesses private data whenever used.\n• .env file (pronounced 'dot-E-N-V'): A hidden plain-text file sitting on your laptop that holds your secret keys (e.g., GEMINI_API_KEY=\"AIza...\") so your local server can read them.\n• .gitignore file: A simple checklist file in your folder that tells Git: 'Never upload my .env file or heavy temporary folders to GitHub!'\n• .env.example: A safe template file you DO share on GitHub that lists the blank key names (GEMINI_API_KEY=\"\") with zero real passwords inside.\n• Cloud Environment Variables / Secrets Manager: The encrypted password vault inside your cloud host's dashboard (in Vercel, Render, Cloud Run, Hugging Face Spaces, or Colab Secrets) where you paste your real keys for the live site.",
      slipUp: "Easy slip-up: Pasting a real API key directly inside a '.js' or '.py' file and uploading it to a public GitHub repo, where automated bots find and abuse it in seconds.",
      command: "echo \".env\" >> .gitignore   # Appends ('>>') the word .env onto your .gitignore blocklist file",
      videoTitle: "Why secret keys belong in environment variables",
      videoUrl: "https://vercel.com/docs/projects/environment-variables"
    },
    {
      id: "cloud-github",
      hub: "cloud",
      icon: "cloud_upload",
      badge: "Category · Cloud code repository host",
      badgeClass: "badge-info",
      title: "Cloud code repositories (GitHub, GitLab, Bitbucket, Hugging Face Hub)",
      summary: "Where your local Git project is backed up online—for team review, open-source sharing, and auto-deploying.",
      whatItIs: "Category definition: While Git tracks save checkpoints on your laptop, a Cloud Code Repository Host is the website where you upload ('git push') a remote copy of your Git folder. It backs up your code in the cloud, lets teammates review changes via a Pull Request (PR — a visual review waiting room before changes merge into your main code), and notifies your cloud hosting platform whenever new code arrives.\n\nEvery platform you will recognize in this category, explained:\n• GitHub: The world's largest cloud host for Git repositories, open-source software, and team Pull Requests.\n• GitLab & Bitbucket: Popular enterprise alternatives to GitHub that also store Git repositories and run automated test pipelines (CI/CD — Continuous Integration / Continuous Deployment, cloud robots that automatically test and deploy your code on every push).\n• Hugging Face Hub: Often called 'the GitHub of AI'—a Git-based cloud repository built specifically for hosting open-weight AI models (AI models whose trained files can be downloaded openly), datasets, and live AI demo apps.",
      slipUp: "Easy slip-up: Saving a file on your laptop (Cmd+S) or running 'git commit' and wondering why it hasn't shown up on GitHub yet—you must run 'git push' to upload your local commits to the cloud.",
      command: "git push   # Uploads your saved Git commits from laptop to GitHub",
      videoTitle: "GitHub Docs: How local Git and cloud repositories connect",
      videoUrl: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    {
      id: "cloud-vercel",
      hub: "internet",
      icon: "public",
      badge: "Category · Cloud hosting & deployment",
      badgeClass: "badge-success",
      title: "Cloud hosting & deployment platforms (Vercel, Netlify, Render, Cloud Run, Hugging Face Spaces)",
      summary: "Where your code or AI model is built and served on a live https:// link—matched to what you built.",
      whatItIs: "Category definition: Your laptop cannot stay awake 24/7 serving your project to visitors around the world. A Cloud Hosting Platform connects to your cloud Git repository, automatically builds your code whenever you 'git push', and publishes it to a live 'https://' web address (an encrypted public internet link). Crucially, not everything needs to be a full web app—you pick the hosting category that matches what you built:\n\n1. Web App & Static Site Hosts (for websites, portfolios & React/Next.js frontend apps):\n• Vercel, Netlify & Cloudflare Pages: Watch your GitHub repo and publish a live website (plus preview links for every branch) in ~20 seconds.\n• GitHub Pages: Free, simple hosting built right into GitHub for static HTML/CSS/JS websites (pages that don't need a custom backend server) and documentation.\n\n2. AI Demo Hubs, Notebooks & Serverless GPUs (when you do NOT need a full web app!):\n• Hugging Face Spaces: Turns a 20-line Python script (using Gradio or Streamlit, two Python libraries that create interactive web pages without writing HTML/CSS) into a shareable AI demo link.\n• Modal & Replicate: Let you run heavy AI models on cloud GPUs (Graphics Processing Units — specialized AI computer chips) and pay only by the second.\n\n3. Always-On Backend Server & Container Hosts (for Python FastAPI/Flask servers, bots & long jobs):\n• Render, Railway & Fly.io: Developer-friendly cloud hosts that run Python backend servers (programs that handle data, logins, and secret API keys), Docker containers, and databases 24/7.\n• Major Cloud Providers ('Hyperscalers' — Google Cloud / GCP, Amazon Web Services / AWS, Microsoft Azure): Enterprise clouds offering services like Google Cloud Run (runs any container at a web URL with 1 command).",
      slipUp: "Easy slip-up: When your project uses a secret API key from your local '.env' file, remember to also paste that key into your cloud host's 'Environment Variables / Secrets' settings box so the live site can use it too.",
      command: "git push -> Cloud host auto-builds -> Live https:// URL!",
      videoTitle: "How cloud platforms deploy automatically from Git",
      videoUrl: "https://vercel.com/docs/deployments/git"
    },
    {
      id: "browser-devtools",
      hub: "internet",
      icon: "travel_explore",
      badge: "Category · Browser developer tools",
      badgeClass: "badge-secondary",
      title: "Browser developer tools (Chrome DevTools, Safari Web Inspector, Firefox DevTools)",
      summary: "Built into every web browser—right-click and choose 'Inspect' to see live HTML, errors, and server messages.",
      whatItIs: "Category definition: Every modern web browser (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, Brave, Arc) has a built-in X-ray machine called Developer Tools ('DevTools'). You open it by right-clicking anywhere on any webpage and clicking 'Inspect'.\n\nThe 3 tabs inside Inspect that every builder uses, explained:\n• Elements (or Inspector): Shows the live HTML skeleton and CSS paint of the page—you can double-click any text or color here to test changes live on your screen.\n• Console: Prints red JavaScript error messages if a button crashes on the screen, and lets you test one-line JavaScript commands.\n• Network: Shows every single API message—the browser's outgoing HTTP Request ('question') and the server's incoming JSON Response ('structured text answer')—along with its status code (like '200 OK' when it succeeds or '500 Error' when the server crashes).",
      slipUp: "Easy slip-up: Guessing why a webpage looks blank or a button does nothing instead of opening 'Right-click -> Inspect -> Console & Network' to read the exact error message.",
      command: "Right-click any webpage -> Inspect -> Console / Network",
      videoTitle: "Chrome DevTools: Beginner guide to inspecting web pages",
      videoUrl: "https://developer.chrome.com/docs/devtools/overview"
    }
  ],

  // ============================================================================
  // STOP 3: Living Animated Git Graph (Clickable Words & Octicons Inside the Diagram)
  // ============================================================================
  gitLivingNodes: [
    {
      id: "git-init-clone",
      stepNum: 1,
      lane: "main",
      octicon: "fork",
      word: "1. Clone / Init",
      graphCodeLabel: "c1: init",
      oneLiner: "Start or download repo",
      badge: "Step 1 on main · Starting point",
      badgeClass: "badge-info",
      title: "Clone or Initialize (c1: init — Starting your project timeline)",
      command: "git init   # OR: git clone https://github.com/owner/my-project.git",
      labelDecoded: "What 'c1: init', 'Clone', and 'Fork' mean: On Git graphs, 'c1' is shorthand for Commit #1 (your first save point) and 'init' is short for Initialize (turning a normal folder into a Git-tracked repository). 'Clone' means downloading an existing repository from a cloud Git host (like GitHub, GitLab, or Hugging Face) onto your laptop; 'Fork' means copying someone else's cloud repository into your own account.",
      whatItIs: "Every project starts here on the blue 'main' line. Either you create a brand-new folder on your laptop and run 'git init', or you download ('git clone') an existing repository from GitHub, GitLab, or Hugging Face so your laptop has the full save history.",
      whyItSavesYou: "Instead of emailing zip files or copy-pasting folders named 'app_v2_final', your folder now has a built-in time machine."
    },
    {
      id: "git-branch",
      stepNum: 2,
      lane: "main",
      octicon: "branch",
      word: "2. Branch",
      graphCodeLabel: "c2: branch off",
      oneLiner: "Split a safe sandbox",
      badge: "Step 2 · Split off from main",
      badgeClass: "badge-success",
      title: "Branch (c2: branch off -> feat/ai-experiment)",
      command: "git checkout -b feat/ai-experiment",
      labelDecoded: "What 'c2: branch off' and 'feat/ai-experiment' mean: At Commit #2 ('c2'), the green line splits downward off the blue 'main' line. Engineers prefix sandbox branch names with 'feat/' (short for feature) or 'fix/' so you immediately know what experiment lives on that parallel track.",
      whatItIs: "A 'Branch' creates a parallel sandbox timeline inside your exact same folder. While you are on the green 'feat/ai-experiment' branch, your real live version on the blue 'main' line stays 100% untouched.",
      whyItSavesYou: "If you ask an AI coding agent to redesign your whole page and it breaks everything, your 'main' branch is still safe. You can switch back to 'main' in one second."
    },
    {
      id: "git-commit",
      stepNum: 3,
      lane: "sandbox",
      octicon: "commit",
      word: "3. Commit",
      graphCodeLabel: "c3: AI edit",
      oneLiner: "Save a permanent checkpoint",
      badge: "Step 3 on sandbox · Save point",
      badgeClass: "badge-success",
      title: "Commit & Git 'HEAD' (c3: AI edit — Saving a labeled checkpoint on your branch)",
      command: "git add . && git commit -m \"Add searchable terminal vocab\"",
      labelDecoded: "What 'c3: AI edit' and 'HEAD' mean: 'c3' is Commit #3—a permanent snapshot dot saved on the green sandbox branch. In Git, 'HEAD' (all caps) is simply the 'You Are Here' pin that points to whichever commit dot your folder is standing on right now.",
      whatItIs: "Pressing Cmd+S in your editor only overwrites the file on your screen. Making a 'Commit' takes a permanent, labeled photograph of every file in your project at that exact moment and moves your 'HEAD' ('You Are Here') pin forward to this new dot.",
      whyItSavesYou: "Every commit dot is a checkpoint you can rewind to at any time—even weeks later—if a future AI edit introduces a bug."
    },
    {
      id: "git-diff",
      stepNum: 4,
      lane: "sandbox",
      octicon: "diff",
      word: "4. git diff",
      graphCodeLabel: "c4: git diff ok",
      oneLiner: "Inspect exact line changes",
      badge: "Step 4 on sandbox · Verify",
      badgeClass: "badge-secondary",
      title: "Compare changes (c4: git diff ok — Checking what the AI actually touched)",
      command: "git status && git diff",
      labelDecoded: "What 'c4: git diff ok' means on the graph: 'diff' is short for Difference. This dot represents inspecting the exact red (deleted) and green (added) lines between your last save point (HEAD) and your newest edits, and confirming everything looks clean ('ok').",
      whatItIs: "Where you review a line-by-line highlight of everything that changed in your code files before you upload ('git push') your branch to your cloud repository.",
      whyItSavesYou: "AI coding tools sometimes fix one button while accidentally deleting a paragraph or leaving a test password behind. 'git diff' spots that in 10 seconds."
    },
    {
      id: "git-pr",
      stepNum: 5,
      lane: "sandbox",
      octicon: "pullRequest",
      word: "5. Pull Request (PR)",
      graphCodeLabel: "PR review",
      oneLiner: "Push & open review gate",
      badge: "Step 5 · Propose merging to main",
      badgeClass: "badge-secondary",
      title: "Push & open a Pull Request (PR / Merge Request — The safety gate before going live)",
      command: "git push -u origin feat/ai-experiment   # Then open a Pull Request on GitHub/GitLab",
      labelDecoded: "Why there are two steps here ('git push' -> 'Pull Request'): First, 'git push' uploads your sandbox branch from your laptop to your cloud Git host. Second, opening a 'Pull Request (PR)' on GitHub (also called a 'Merge Request' on GitLab) creates a review page proposing to merge your finished branch into 'main'.",
      whatItIs: "Before the green sandbox line is allowed to curve back up into the blue 'main' line, you open a PR. It shows a clean before-and-after diff summary, runs automated tests (like GitHub Actions), and lets cloud hosts (like Vercel, Netlify, or Render) build a private Preview URL so you can test the changes before merging.",
      whyItSavesYou: "Catches broken builds or layout bugs on a private preview link before a single real visitor on your live site sees them."
    },
    {
      id: "git-merge",
      stepNum: 6,
      lane: "main",
      octicon: "merge",
      word: "6. Merge",
      graphCodeLabel: "c5: merge PR",
      oneLiner: "Squash & join into main",
      badge: "Step 6 on main · Combine timelines",
      badgeClass: "badge-info",
      title: "Merge or 'Squash & Merge' (c5: merge PR — Combining your sandbox work into main)",
      command: "git checkout main && git merge --squash feat/ai-experiment && git commit -m \"Ship feature\"",
      labelDecoded: "What 'Merge' vs. 'Squash & Merge' means: When you click 'Squash and merge' on a Pull Request, Git takes all the messy little commits you made on your sandbox branch ('wip', 'fix typo', 'try again') and squashes them together into ONE clean commit dot ('c5') on 'main'!",
      whatItIs: "Once your preview link and tests look good, clicking 'Squash and merge' (or 'Merge pull request') folds all the finished work from your green sandbox branch back into your blue 'main' trunk.",
      whyItSavesYou: "Your 'main' timeline stays super clean—one commit per finished feature—so if anything unexpected happens, you can revert the entire feature in one click."
    },
    {
      id: "git-vercel-live",
      stepNum: 7,
      lane: "main",
      octicon: "repo",
      word: "7. Auto-Deploy Live",
      graphCodeLabel: "Production deploy",
      oneLiner: "Published by cloud host",
      badge: "Step 7 on main · Continuous deployment",
      badgeClass: "badge-success",
      title: "Automatic Production Deployment (CI/CD — e.g. Vercel, Netlify, Render, Cloud Run, Hugging Face Spaces)",
      command: "Merge to main -> Cloud host auto-builds -> Live https:// URL!",
      labelDecoded: "What 'Production' and 'Continuous Deployment (CI/CD)' mean: 'Production' (or 'prod') is the engineering word for the real live version that the public uses. 'Continuous Deployment' means your cloud host watches your 'main' branch and automatically builds and publishes every merged update.\n\nCommon cloud deployment platforms by category:\n• Web apps & static sites: Vercel, Netlify, Cloudflare Pages, GitHub Pages.\n• Backend servers & containers: Render, Railway, Fly.io, Google Cloud Run, AWS.\n• AI demos & models: Hugging Face Spaces, Replicate, Modal.",
      whatItIs: "The moment your Merge lands on the blue 'main' branch in your cloud repository, your connected hosting platform detects the new commit, builds your updated project in the cloud, and swaps the live public URL to the new version with zero downtime.",
      whyItSavesYou: "You never have to manually drag files onto a server—every merged improvement on 'main' goes live automatically, and if a deploy ever misbehaves, you can roll back to the previous commit in one click."
    }
  ]
};



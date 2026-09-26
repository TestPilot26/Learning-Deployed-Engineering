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
      title: "Code editors, AI IDEs & notebooks (e.g. VS Code, Cursor, Windsurf, Claude Code, Replit, Google Colab)",
      summary: "Where you open your project folder to read, write, and direct AI to edit your code.",
      whatItIs: "Category definition: A Code Editor (or IDE — Integrated Development Environment) is your plain-text workshop for reading and writing code, with a file list on the left, color-coded text in the middle, and a built-in terminal at the bottom.\n\nCommon examples you will recognize:\n• Desktop AI & code editors: VS Code, Cursor, Windsurf, Zed, PyCharm, Xcode.\n• Terminal & agentic coding tools: Claude Code, Gemini CLI, GitHub Copilot.\n• Browser sandboxes (zero install): Replit, StackBlitz, CodeSandbox, Firebase Studio, v0, Bolt, Lovable.\n• Interactive data & AI notebooks (run code cell-by-cell): Google Colab, Jupyter Notebooks.",
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
      title: "Plain-text source files (.html, .js, .py, .md, .json)",
      summary: "Where your code instructions live on your device—good for keeping everything fast, readable, and inside a normal folder.",
      whatItIs: "Category definition: Source code is not locked inside a proprietary format—every code file is simply a plain UTF-8 text file containing raw letters and symbols. We don't use Microsoft Word or Google Docs to write code because rich-text processors secretly inject invisible styling and convert straight quotes (\" \") into curved quotes that break code compilers.\n\nCommon file extensions you will recognize:\n• Web screens: .html (structure), .css (styling), .js / .ts / .tsx (JavaScript / TypeScript).\n• Backend, data & AI: .py (Python), .ipynb (Jupyter / Colab notebook), .sql (database queries).\n• Config & docs: .json / .yaml (structured data), .md (Markdown docs), .env (private keys).",
      slipUp: "Easy slip-up: Double-clicking a .js or .py file in Finder/Explorer expecting an app window to pop open. Instead, open the project folder inside your code editor.",
      command: "ls -la   # Shows all files (including hidden dotfiles) in your folder",
      videoTitle: "MDN: How code files and folders work on your computer",
      videoUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
    },
    {
      id: "homebrew-runtime",
      hub: "computer",
      icon: "downloading",
      badge: "Category · Package managers & runtimes",
      badgeClass: "badge-success",
      title: "Package managers & language runtimes (e.g. Homebrew, winget, npm, pip/uv, Node.js, Python)",
      summary: "Where your computer gets the engines to run code privately on your screen ('localhost') and install verified libraries.",
      whatItIs: "Category definition: Plain text files are just recipes—you need a Language Runtime (the kitchen engine that actually executes code on your computer) and a Package Manager (an app-store-style installer for command-line tools and code libraries so you never hunt around random websites for installers).\n\nCommon examples by subcategory:\n• Language runtimes (run code on your computer): Python, Node.js / Bun / Deno (for JavaScript/TypeScript), Docker (runs isolated software containers).\n• System package managers (install developer tools on your laptop): Homebrew ('brew') on Mac/Linux, winget or Chocolatey on Windows, apt on Ubuntu Linux.\n• Project package managers (install open-source libraries into one project): npm / pnpm / yarn (for JavaScript), pip / uv / conda (for Python).",
      slipUp: "Easy slip-up: Downloading random installers from search results that land in the wrong folder, causing the terminal to say 'command not found'. Using a package manager like Homebrew or winget wires everything up automatically.",
      command: "brew install node python git   # System package manager example (Mac/Linux)",
      videoTitle: "Homebrew: The system package manager for Mac & Linux",
      videoUrl: "https://brew.sh/"
    },
    {
      id: "local-git",
      hub: "computer",
      icon: "history",
      badge: "Category · Local version control",
      badgeClass: "badge-secondary",
      title: "Local version control (Git on your computer)",
      summary: "Where you save checkpoints on your device—good for rewinding instantly if an AI edit breaks your working project.",
      whatItIs: "Category definition: Version Control Software tracks every change made to your project files over time inside a hidden '.git' folder on your laptop. Pressing Cmd+S (or Ctrl+S) overwrites your file immediately, so if an AI rewrites 5 files and breaks your app ten minutes later, normal 'Undo' won't save you. Git lets you take a labeled snapshot (a 'commit') whenever your project works so you can rewind to that exact moment anytime.\n\nCommon ways people use Git:\n• Terminal CLI: 'git add', 'git commit', 'git branch', 'git diff'.\n• Visual Git clients: Built-in Source Control tab in VS Code / Cursor, GitHub Desktop, GitKraken, Lazygit.",
      slipUp: "Easy slip-up: Letting an AI agent make a big second change before saving a Git commit checkpoint of the first working version.",
      command: "git add . && git commit -m \"Working homepage\"",
      videoTitle: "MIT Missing Semester: How Git version control works",
      videoUrl: "https://missing.csail.mit.edu/2020/version-control/"
    },
    {
      id: "env-secrets",
      hub: "computer",
      icon: "lock",
      badge: "Category · Environment variables",
      badgeClass: "badge-neutral",
      title: "Private environment variables (.env file & secrets managers)",
      summary: "Where you store secret API keys on your laptop so passwords never get hardcoded into your code files.",
      whatItIs: "Category definition: Environment Variables are external configuration settings and secret passwords stored outside your normal source code. Locally on your laptop, they live in a hidden file named '.env', and a rule file called '.gitignore' guarantees that '.env' is never uploaded to public Git repositories.\n\nWhere environment variables live in the real world:\n• On your laptop: A hidden '.env' or '.env.local' file in your project folder.\n• On cloud hosting platforms: The encrypted 'Environment Variables' or 'Secrets' settings box inside Vercel, Netlify, Render, Railway, Hugging Face Spaces, Google Cloud Secret Manager, or AWS.",
      slipUp: "Easy slip-up: Pasting a secret API key directly inside a '.js' or '.py' file and uploading it to a public repo, where automated bots can scrape it in seconds.",
      command: "GEMINI_API_KEY=\"AIza...\"   # Stored inside .env only (never committed)",
      videoTitle: "Why secret keys belong in environment variables",
      videoUrl: "https://vercel.com/docs/projects/environment-variables"
    },
    {
      id: "cloud-github",
      hub: "cloud",
      icon: "cloud_upload",
      badge: "Category · Cloud code repository host",
      badgeClass: "badge-info",
      title: "Cloud code repositories (e.g. GitHub, GitLab, Bitbucket, Hugging Face Hub)",
      summary: "Where your Git project is stored remotely online—for cloud backup, team review, open source, and auto-deploying.",
      whatItIs: "Category definition: While Git tracks save checkpoints locally on your laptop, a Cloud Git Repository Host is the website where you upload ('git push') a remote copy of your project folder. It backs up your code in the cloud, gives teammates a place to review Pull Requests, and triggers cloud deployment platforms whenever you push.\n\nCommon platforms in this category:\n• GitHub: The world's largest host for open-source projects, personal repos, and startup teams.\n• GitLab & Bitbucket: Widely used by enterprise engineering organizations for code hosting and CI/CD pipelines.\n• Hugging Face Hub: A specialized Git-based repository host built specifically for sharing AI models, datasets, and ML demos.",
      slipUp: "Easy slip-up: Saving a file on your laptop (Cmd+S) or even running 'git commit' and wondering why it hasn't appeared on GitHub/GitLab yet—you must run 'git push' to upload your local commits to the cloud.",
      command: "git push   # Uploads your saved Git commits from laptop to your cloud repo",
      videoTitle: "GitHub Docs: How local Git and cloud repositories connect",
      videoUrl: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    {
      id: "cloud-vercel",
      hub: "internet",
      icon: "public",
      badge: "Category · Cloud hosting & deployment",
      badgeClass: "badge-success",
      title: "Cloud hosting & deployment platforms (e.g. Vercel, Netlify, Render, Cloud Run, Hugging Face Spaces)",
      summary: "Where your code or model is published to a live https:// link—and no, not everything needs to be a full web app!",
      whatItIs: "Category definition: Your laptop can't stay awake 24/7 serving your project to the world. A Cloud Hosting Platform connects to your Git repository, automatically builds your latest code whenever you push, and serves it on a public 'https://' URL. Crucially, different projects fit different hosting categories—not everything you share needs to be a full web app!\n\nMajor hosting categories & recognizable examples:\n• Frontend & full-stack web apps: Vercel, Netlify, Cloudflare Pages, Firebase Hosting.\n• AI demos, ML models & interactive notebooks (no full web app needed!): Hugging Face Spaces (hosts Python Gradio & Streamlit demos in 20 lines of code), Google Colab, Replicate, Modal.\n• Always-on backend servers, Python APIs & Docker containers: Render, Railway, Fly.io, DigitalOcean.\n• Major cloud infrastructure ('Hyperscalers'): Google Cloud (Cloud Run, Vertex AI), AWS (EC2, S3, Lambda), Microsoft Azure.\n• Free static websites & documentation: GitHub Pages, Cloudflare Pages.",
      slipUp: "Easy slip-up: When your project uses a secret API key from your local '.env' file, remember to also paste that key into your cloud host's 'Environment Variables / Secrets' settings box so the live version has it too.",
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
      title: "Browser developer tools (e.g. Chrome DevTools, Safari Web Inspector, Firefox DevTools)",
      summary: "Where you peek under the hood of any live webpage to inspect HTML/CSS, read error logs, and watch network requests.",
      whatItIs: "Category definition: Every modern web browser (Chrome, Firefox, Safari, Edge, Arc, Brave) has built-in Developer Tools ('DevTools')—just right-click anywhere on a webpage and click 'Inspect'.\n\nThe 3 tabs every builder uses:\n• Elements / Inspector: Temporarily edit the live HTML and CSS on screen.\n• Console: Shows red JavaScript error messages if a button crashes.\n• Network: Shows every API request and JSON response travelling between the browser and the backend server.",
      slipUp: "Easy slip-up: Guessing why a webpage looks blank instead of opening 'Right-click -> Inspect -> Console' to read the exact error line.",
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

// Shared Illustrated SVG Stage Artwork & Aligned Loop Arrows (Zero hardcoded hex; 100% GM3 tokens)
(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  // Illustration 1: Smartphone + Laptop with Green Checkmark & Magnifying Glass
  function createDeviceArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 124", class: "stage-art-svg", "aria-hidden": "true" });
    // Soft oval floor shadow + arc halo
    svg.appendChild(svgEl("path", { d: "M 18 92 A 74 58 0 0 1 162 92", fill: "none", stroke: "var(--color-outline-variant)", "stroke-width": "2" }));
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "106", rx: "72", ry: "10", fill: "var(--color-surface-container-highest)" }));

    // Laptop screen & base
    svg.appendChild(svgEl("rect", { x: "68", y: "38", width: "76", height: "52", rx: "6", fill: "var(--color-on-surface)", stroke: "var(--color-on-surface)", "stroke-width": "2" }));
    svg.appendChild(svgEl("rect", { x: "73", y: "43", width: "66", height: "42", rx: "3", fill: "var(--color-surface-container-lowest)" }));
    // Green checkmark card inside laptop screen
    svg.appendChild(svgEl("rect", { x: "86", y: "51", width: "42", height: "26", rx: "4", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgEl("path", { d: "M 99 64 L 105 70 L 117 57", fill: "none", stroke: "var(--color-on-tertiary-container)", "stroke-width": "3.5", "stroke-linecap": "round", "stroke-linejoin": "round" }));
    // Laptop base keyboard lip
    svg.appendChild(svgEl("path", { d: "M 58 90 L 154 90 L 148 98 L 64 98 Z", fill: "var(--color-on-surface-variant)" }));

    // Smartphone on the left
    svg.appendChild(svgEl("rect", { x: "28", y: "26", width: "42", height: "72", rx: "7", fill: "var(--color-on-surface)" }));
    svg.appendChild(svgEl("rect", { x: "32", y: "34", width: "34", height: "54", rx: "3", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgEl("line", { x1: "44", y1: "30", x2: "54", y2: "30", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("rect", { x: "37", y: "42", width: "24", height: "14", rx: "2", fill: "var(--color-primary)" }));
    svg.appendChild(svgEl("line", { x1: "37", y1: "64", x2: "58", y2: "64", stroke: "var(--color-on-primary-container)", "stroke-width": "3", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "37", y1: "72", x2: "52", y2: "72", stroke: "var(--color-on-primary-container)", "stroke-width": "3", "stroke-linecap": "round" }));

    // Magnifying glass overlapping phone & laptop
    svg.appendChild(svgEl("line", { x1: "83", y1: "82", x2: "97", y2: "96", stroke: "var(--color-on-surface)", "stroke-width": "6", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("circle", { cx: "74", cy: "73", r: "13", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "4" }));
    return svg;
  }

  // Illustration 2: Fluffy Cloud + 3 Server Racks with Status LEDs
  function createCloudServerArt(cloudText) {
    var svg = svgEl("svg", { viewBox: "0 0 190 124", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "95", cy: "110", rx: "70", ry: "9", fill: "var(--color-surface-container-highest)" }));

    // Fluffy Cloud at top
    svg.appendChild(
      svgEl("path", {
        d: "M 52 56 C 36 56, 30 42, 42 33 C 44 19, 62 15, 73 23 C 82 9, 108 9, 117 23 C 130 17, 146 25, 144 38 C 156 42, 152 56, 136 56 Z",
        fill: "var(--color-primary-container)",
        stroke: "var(--color-primary)",
        "stroke-width": "3",
        "stroke-linejoin": "round"
      })
    );
    var txt = svgEl("text", {
      x: "95",
      y: "43",
      "text-anchor": "middle",
      fill: "var(--color-on-primary-container)",
      "font-family": "var(--font-family-display)",
      "font-size": "13",
      "font-weight": "700"
    });
    txt.textContent = cloudText || "Cloud Server";
    svg.appendChild(txt);

    // 3 vertical conduits connecting cloud to server racks
    [62, 95, 128].forEach(function (cx) {
      svg.appendChild(svgEl("line", { x1: String(cx), y1: "56", x2: String(cx), y2: "66", stroke: "var(--color-primary)", "stroke-width": "3" }));
    });

    // 3 Server Racks
    [44, 77, 110].forEach(function (rx) {
      svg.appendChild(svgEl("rect", { x: String(rx), y: "64", width: "36", height: "44", rx: "4", fill: "var(--color-on-surface-variant)" }));
      [70, 82, 94].forEach(function (ry) {
        svg.appendChild(svgEl("rect", { x: String(rx + 4), y: String(ry), width: "28", height: "8", rx: "2", fill: "var(--color-surface-container-lowest)" }));
        svg.appendChild(svgEl("circle", { cx: String(rx + 9), cy: String(ry + 4), r: "2", fill: "var(--color-tertiary)" }));
        svg.appendChild(svgEl("line", { x1: String(rx + 15), y1: String(ry + 4), x2: String(rx + 27), y2: String(ry + 4), stroke: "var(--color-outline)", "stroke-width": "2", "stroke-linecap": "round" }));
      });
    });
    return svg;
  }

  // Illustration 3: 3-Tier Cylinder Database + Magnifying Glass with "011010" (or custom lens text)
  function createDatabaseArt(lensText) {
    var svg = svgEl("svg", { viewBox: "0 0 180 124", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("path", { d: "M 18 92 A 74 58 0 0 1 162 92", fill: "none", stroke: "var(--color-outline-variant)", "stroke-width": "2" }));
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "106", rx: "70", ry: "10", fill: "var(--color-surface-container-highest)" }));

    // 3-Tier Cylinder Body
    svg.appendChild(svgEl("rect", { x: "38", y: "34", width: "76", height: "64", rx: "8", fill: "var(--color-surface-container-high)", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("ellipse", { cx: "76", cy: "34", rx: "38", ry: "10", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 38 55 A 38 9 0 0 0 114 55", fill: "none", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 38 76 A 38 9 0 0 0 114 76", fill: "none", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 38 98 A 38 9 0 0 0 114 98", fill: "none", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));

    // Magnifying glass handle + lens with binary "011010"
    svg.appendChild(svgEl("line", { x1: "136", y1: "82", x2: "156", y2: "102", stroke: "var(--color-on-surface)", "stroke-width": "8", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("circle", { cx: "118", cy: "64", r: "26", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "4.5" }));
    var binTxt = svgEl("text", {
      x: "118",
      y: "68",
      "text-anchor": "middle",
      fill: "var(--color-primary)",
      "font-family": "monospace",
      "font-size": "12",
      "font-weight": "700"
    });
    binTxt.textContent = lensText || "011010";
    svg.appendChild(binTxt);
    return svg;
  }

  // Illustration 4: Person / User Avatar + Speech Bubble with Green Checkmark
  function createUserArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 116", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "104", rx: "66", ry: "9", fill: "var(--color-surface-container-highest)" }));

    // Person shoulders / shirt
    svg.appendChild(svgEl("path", { d: "M 42 102 C 42 78, 94 78, 94 102 Z", fill: "var(--color-primary-container)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    // Person head
    svg.appendChild(svgEl("circle", { cx: "68", cy: "54", r: "18", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    // Hair arc
    svg.appendChild(svgEl("path", { d: "M 50 52 C 50 34, 86 34, 86 52 C 78 44, 58 44, 50 52 Z", fill: "var(--color-on-surface)" }));

    // Speech bubble on the right with green checkmark circle
    svg.appendChild(
      svgEl("path", {
        d: "M 102 26 H 142 A 6 6 0 0 1 148 32 V 64 A 6 6 0 0 1 142 70 H 116 L 104 80 L 106 70 H 102 A 6 6 0 0 1 96 64 V 32 A 6 6 0 0 1 102 26 Z",
        fill: "var(--color-surface-container-lowest)",
        stroke: "var(--color-on-surface)",
        "stroke-width": "2.5",
        "stroke-linejoin": "round"
      })
    );
    svg.appendChild(svgEl("circle", { cx: "122", cy: "48", r: "13", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgEl("path", { d: "M 116 48 L 120 53 L 129 43", fill: "none", stroke: "var(--color-on-tertiary-container)", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }));
    return svg;
  }

  // Aligned Horizontal Arrow between Top-Row Stages (with continuous underlying pipeline track)
  function createHorizontalStepArrow(topLabel, subLabel, extraEl) {
    var wrap = document.createElement("div");
    wrap.className = "loop-horiz-arrow-col";

    var lbl = document.createElement("span");
    lbl.className = "loop-arrow-caption";
    lbl.textContent = topLabel;
    wrap.appendChild(lbl);

    var svg = svgEl("svg", { viewBox: "0 0 136 32", class: "loop-horiz-arrow-svg", "aria-hidden": "true" });
    // Continuous soft background pipeline rail
    svg.appendChild(svgEl("line", { x1: "-16", y1: "16", x2: "152", y2: "16", stroke: "var(--color-primary-container)", "stroke-width": "10", "stroke-linecap": "round" }));
    // Solid primary pipeline flow line + animated dashes
    svg.appendChild(svgEl("line", { x1: "-12", y1: "16", x2: "118", y2: "16", stroke: "var(--color-primary)", "stroke-width": "4", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "-12", y1: "16", x2: "114", y2: "16", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2", "stroke-dasharray": "5 7", class: "loop-anim-dash" }));
    svg.appendChild(svgEl("polygon", { points: "114,7 132,16 114,25", fill: "var(--color-primary)" }));
    wrap.appendChild(svg);

    if (subLabel) {
      var sub = document.createElement("span");
      sub.className = "loop-arrow-subcaption";
      sub.textContent = subLabel;
      wrap.appendChild(sub);
    }
    if (extraEl) {
      wrap.appendChild(extraEl);
    }
    return wrap;
  }

  // Curved Bottom Loop Arrow ("left" curves up-left to Stage 1; "right" curves down-left from Stage 3) with underlying pipeline rail
  function createCurvedReturnWing(side, labelText) {
    var wrap = document.createElement("div");
    wrap.className = "loop-curved-wing";

    var svg = svgEl("svg", { viewBox: "0 0 240 116", class: "loop-curved-svg", "aria-hidden": "true" });
    if (side === "left") {
      var leftPath = "M 54 14 C 54 74, 124 74, 232 74";
      svg.appendChild(svgEl("path", { d: leftPath, fill: "none", stroke: "var(--color-primary-container)", "stroke-width": "10", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: leftPath, fill: "none", stroke: "var(--color-primary)", "stroke-width": "4", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("polygon", { points: "45,20 54,2 63,20", fill: "var(--color-primary)" }));
      svg.appendChild(svgEl("polygon", { points: "220,65 238,74 220,83", fill: "var(--color-primary)" }));
      var tLeft = svgEl("text", { x: "144", y: "54", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-family": "var(--font-family-display)", "font-size": "13", "font-weight": "600" });
      tLeft.textContent = labelText || "Sends results";
      svg.appendChild(tLeft);
    } else {
      var rightPath = "M 186 6 C 186 74, 116 74, 18 74";
      svg.appendChild(svgEl("path", { d: rightPath, fill: "none", stroke: "var(--color-primary-container)", "stroke-width": "10", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: rightPath, fill: "none", stroke: "var(--color-primary)", "stroke-width": "4", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("polygon", { points: "24,65 6,74 24,83", fill: "var(--color-primary)" }));
      var tRight = svgEl("text", { x: "96", y: "54", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-family": "var(--font-family-display)", "font-size": "13", "font-weight": "600" });
      tRight.textContent = labelText || "Returns data";
      svg.appendChild(tRight);
    }
    wrap.appendChild(svg);
    return wrap;
  }

  // Reusable Clickable Illustrated Stage Card (Click illustration/title OR compact pills to open side panel)
  function createLoopStageCard(opts) {
    var stageCard = document.createElement("div");
    stageCard.className = "loop-stage-card";
    if (opts.stageKey) {
      stageCard.setAttribute("data-stage-key", opts.stageKey);
    }

    var headerBtn = document.createElement("button");
    headerBtn.type = "button";
    headerBtn.className = "loop-stage-header-btn";
    if (opts.primaryIdAttr && opts.primaryId) {
      headerBtn.setAttribute(opts.primaryIdAttr, opts.primaryId);
    }

    var artWrap = document.createElement("div");
    artWrap.className = "loop-stage-art-wrap";
    if (opts.artSvg) {
      artWrap.appendChild(opts.artSvg);
    }
    headerBtn.appendChild(artWrap);

    var titleEl = document.createElement("strong");
    titleEl.className = "loop-stage-title";
    titleEl.textContent = opts.title || "";
    headerBtn.appendChild(titleEl);

    if (opts.subtitle) {
      var subEl = document.createElement("span");
      subEl.className = "loop-stage-subtitle";
      subEl.textContent = opts.subtitle;
      headerBtn.appendChild(subEl);
    }

    if (typeof opts.onStageClick === "function") {
      headerBtn.addEventListener("click", opts.onStageClick);
    }

    stageCard.appendChild(headerBtn);

    if (opts.pillsContainer) {
      stageCard.appendChild(opts.pillsContainer);
    }

    return {
      card: stageCard,
      headerBtn: headerBtn
    };
  }

  window.DiagramIllustrations = {
    createDeviceArt: createDeviceArt,
    createCloudServerArt: createCloudServerArt,
    createDatabaseArt: createDatabaseArt,
    createUserArt: createUserArt,
    createHorizontalStepArrow: createHorizontalStepArrow,
    createCurvedReturnWing: createCurvedReturnWing,
    createLoopStageCard: createLoopStageCard
  };
})();



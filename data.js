// Structured pipeline stops and archive data for Deployed Eng Pipeline
// Stop order:
// 1. Downloading the tools
// 2. Basic terminology, coding languages & app infrastructure
// 3. Version control, Git & cloud deployment
// 4. Command line interface & the terminal
// 5. Reading code & long-term stability
// 6. System dynamics & how pieces fit together
// 7. System architecture, open source & shipping to production

window.PIPELINE_DATA = {
  substackUrl: "https://lulucalcott.substack.com/",
  stops: [
    {
      id: "downloading-the-tools",
      title: "Downloading the tools",
      stage: "Step 1 · Foundations",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "home_repair_service",
      diagramType: "tools-flow",
      teaser: "Direct download and signup links for the 6 pieces of a coding setup—with site icons, one-line comparisons between options (VS Code vs. Cursor vs. Colab, Claude Code vs. Copilot, Supabase vs. Neon, Vercel vs. Render), and a clean map of where buttons live on each screen.",
      explainer: "When you start from zero, the hardest part isn't complex math—it's figuring out what all the new apps and websites actually do, which category each one belongs to, and which option you should actually download. Here is the secret: code is just plain text files sitting in a normal folder on your computer, and you only need ONE option from each category to start. Below, we've organized the 6 pieces of a modern coding toolkit—(1) a Coding Environment (like VS Code, Cursor, or Google Colab), (2) a Coding Agent (like Claude Code, Copilot, or Gemini CLI), (3) Language Engines & Package Managers (Homebrew, Python, Node.js, and Git), (4) Cloud Code Storage (GitHub or GitLab), (5) a Backend & Database (Supabase, Neon, or Firebase), and (6) Cloud Hosting (Vercel, Render, or Hugging Face Spaces)—with direct download links, site icons, and one line explaining the difference between each option.",
      experiences: [
        {
          lead: "Category 1 — Code editors & notebooks vs. Word or Google Docs:",
          body: "A code file—like .html (webpage structure), .css (visual styling), .js (JavaScript interactivity), or .py (Python code)—is just a plain text file with zero hidden formatting. Word and Google Docs secretly inject invisible styling tags and turn straight quotes (\" \") into curly quotes (“ ”), which immediately crashes code. Instead, engineers use a Code Editor / IDE (an all-in-one coding workshop like VS Code, Cursor, Windsurf, terminal-based Claude Code, or browser-based Replit) for building projects, or Interactive Notebooks (like Google Colab or Jupyter—digital lab notebooks where you run Python code one small block at a time) for data and AI experiments."
        },
        {
          lead: "Category 2 — Package managers & runtimes (What '.dmg' / '.exe' installers and 'command not found' mean):",
          body: "Plain-text code files cannot run by themselves—your laptop needs a Language Runtime (the engine program that reads and executes a language, like Python for .py files or Node.js for .js files). When you download ordinary apps from a website, you usually click a '.dmg' file (an Apple Mac disk-image installer) or an '.exe' file (a Windows program installer). But if you install coding engines that way, the website installer often drops the program into a folder your Terminal doesn't know to check—so when you type 'python' in the Terminal, your computer replies 'command not found' because that folder isn't on the Terminal's folder lookup list (called your PATH). Instead, engineers use a System Package Manager—an official 'App Store' command inside your Terminal like Homebrew ('brew') on Mac/Linux or 'winget' on Windows—which downloads the tool AND registers its folder in your PATH automatically. Then, inside an individual project, you use a Project Package Manager ('npm' for JavaScript, or 'pip' and 'uv' for Python) to install reusable code libraries."
        },
        {
          lead: "Category 3 — Cloud code repositories & hosting platforms (And no, not everything needs to be a web app!):",
          body: "Pressing Cmd+S (Mac) or Ctrl+S (Windows) only saves a file to your laptop's hard drive. 'Pushing' (running 'git push') uploads your saved Git checkpoints to a Cloud Git Repository (an online code vault like GitHub, GitLab, or Bitbucket). From there, a Cloud Hosting Platform can publish your work to a live https:// web link—whether it's a website (e.g. Vercel, Netlify, Cloudflare Pages), an always-on backend server that handles data and API keys (e.g. Render, Railway, Google Cloud Run, AWS), a lightweight AI demo or model (e.g. Hugging Face Spaces, Google Colab, Replicate), or a simple static documentation site that needs no server at all (e.g. GitHub Pages)."
        }
      ],
      activity: {
        title: "Fun activity: Pick your starter tools & explore where buttons live",
        steps: [
          "Browse the 6-part Toolkit Directory above—click any option row (like VS Code vs. Cursor, Claude Code vs. Copilot, or Supabase vs. Neon) to compare them in the Left Side Panel, and bookmark or download 1 starter option per category.",
          "In the 'Explore where things are' viewer right above, click through the 6 real tool screens (GitHub, VS Code / Cursor, Vercel, Chrome DevTools, Cloud Database, and Mac Terminal) and click the numbered circles to see what each button does.",
          "Open your editor's built-in Terminal by pressing Ctrl+` or Cmd+` (the ` key is the backtick key in the top-left of your keyboard above Tab) and type git --version, node -v, or python3 --version to check which engines are already installed on your laptop."
        ]
      },
      resources: [
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50x: Lecture 0 & Visual Studio Code setup",
          description: "David Malan's zero-assumed-knowledge introduction to how computers interpret text, files, binaries, and code editors.",
          url: "https://cs50.harvard.edu/x/"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "Homebrew: The system package manager for macOS & Linux",
          description: "Install Node.js, Python, Git, and command-line tools with a single terminal command instead of hunting for installers.",
          url: "https://brew.sh/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "VS Code & Cursor: What is a code editor / IDE?",
          description: "Visual guide to the file explorer, plain-text editor tabs, integrated terminal, and extensions.",
          url: "https://code.visualstudio.com/docs/getstarted/userinterface"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "How cloud hosts (like Vercel, Netlify & Render) deploy from GitHub",
          description: "Step-by-step walkthrough of what happens when a cloud hosting platform detects a new commit on your Git repository.",
          url: "https://vercel.com/docs/deployments/git"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "MIT Missing Semester: Course overview & the shell",
          description: "Why mastering your local developer environment, shell, and package tools saves hundreds of hours.",
          url: "https://missing.csail.mit.edu/2020/course-shell/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Plain text vs. rich text: Why code needs straight quotes",
          description: "Understanding plain text files, file extensions (.js, .py, .json, .md, .env), and hidden dotfiles.",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
        }
      ]
    },
    {
      id: "basic-terminology",
      title: "Basic terminology, languages & diagram of an app",
      stage: "Step 2 · Vocabulary & Stack",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "menu_book",
      diagramType: "app-infrastructure",
      teaser: "An interactive map of the parts of software (Front End, Back End, API, Database), why different languages exist, and how to recognize the most common tools by category.",
      explainer: "When you build with AI, knowing the names for the parts of software—and which category a tool belongs to—completely changes how you work. If a button isn't saving your work and you don't know the terminology, you can only describe what looks wrong on the screen ('the save button is broken!') and hope the AI guesses right. Once you know the basic map—what lives on the user's screen (Front End), what runs behind the scenes (Back End), the messenger between them (API), and the permanent filing cabinet (Database)—plus the most common real-world tools in each category, you can point your AI straight to the exact piece you want to build or fix.",
      experiences: [
        {
          lead: "Why one project uses several different coding languages:",
          body: "Each layer of software has its own native language: web browsers only understand HTML (page structure), CSS (colors, fonts, and layout), and JavaScript/TypeScript (interactive button logic, often built with screen toolkits called UI frameworks like React, Next.js, or Vue); Back End servers often use Python (with server frameworks like FastAPI or Flask—great for AI and data) or Node.js; and relational Databases (which store data in linked spreadsheet-like tables) use SQL (Structured Query Language, e.g. PostgreSQL or SQLite) to save and look up rows."
        },
        {
          lead: "The 4 core rooms of an application (Front End, Back End, Database & Outside Services):",
          body: "Think of an application like a restaurant: (1) the Front End is the dining room on the user's phone or browser screen (buttons, forms, and layout); (2) the Cloud Server (Back End) is the private kitchen where business rules and secret keys live; (3) the Database & Storage is the permanent pantry where user accounts, rows, and uploaded files are saved; and (4) Outside Services are external specialists (like Stripe for payments or Gemini/Claude for AI) that your Back End calls securely."
        },
        {
          lead: "Why a working demo can still be fragile:",
          body: "An AI can quickly build a prototype that works on your laptop by putting everything—including secret AI billing keys—directly inside the Front End browser code. Learning the boundary between the public Front End and the private Back End keeps your app and your wallet safe when you share it online."
        }
      ],
      activity: {
        title: "Fun activity: Explore the interactive app & language map",
        steps: [
          "Click through each stage and pill in the Interactive App Diagram above to see each category (UI frameworks, APIs, Back End runtimes, Cloud Databases, Auth, and External APIs) and its real-world examples.",
          "Toggle the diagram between 'Healthy deployed setup' and 'Fragile vibe-coded setup' to spot the 4 classic beginner traps.",
          "Right-click any website in Chrome, click 'Inspect -> Network', click a button on the page, and watch the browser send a live message to the server."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-info",
          title: "Python in 2026: Honest Truth About Learning It Now (Tech With Tim)",
          description: "How much Python you actually need in the AI era—why 'building first' and learning to read, debug, and structure code beats memorizing syntax textbooks.",
          url: "https://www.youtube.com/watch?v=Kuur0L7E9rQ"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "Hello Interview: System design & app architecture w/ Meta Staff Engineer",
          description: "Clear visual framework for how frontend clients, APIs, databases, caches, and scaling pieces fit together.",
          url: "https://www.youtube.com/watch?v=Ru54dxzCyD0"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50 Web Programming with Python and JavaScript",
          description: "Shows how HTML/CSS, JavaScript, Python backends, and SQL databases connect into a single full-stack application.",
          url: "https://cs50.harvard.edu/web/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Why Johnny Can't Prompt (UC Berkeley, ACM CHI)",
          description: "Research paper showing why learning basic software vocabulary helps you prompt AI much more effectively.",
          url: "https://dl.acm.org/doi/10.1145/3544548.3581388"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "MDN: How the Web works (Clients, Servers, HTTP & DNS)",
          description: "Beginner-friendly breakdown of what happens in the 200 milliseconds after you click a button or type a URL.",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"
        }
      ]
    },
    {
      id: "reading-code-python",
      title: "How to read code & Python essentials",
      stage: "Step 3 · Reading Code & Python",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "code_blocks",
      diagramType: "python-code-blueprint",
      teaser: "How to read inside a code file without memorizing syntax textbooks: the 6 Python building blocks (Variables, Dicts, Lists & DataFrames, Functions, Schemas, Stack Traces, and Unit Tests / AI Evals).",
      explainer: "Right after learning what coding languages exist in Step 2, the next step is learning how to look inside a code file without feeling overwhelmed. In 2026, you don't need to spend six months memorizing syntax from a textbook before building—you need to know how to read and trace what AI-written code is doing. Almost every Python script or backend server is built from just 6 core building blocks: Variables & types, Functions ('def' -> 'return'), Dictionaries ('{key: value}' = 1 single row), Lists ('[...]' = a collection of rows that forms a Pandas DataFrame table), Strict Schemas ('Pydantic'), and reading crash receipts ('Stack Traces' from the very bottom line up).",
      experiences: [
        {
          lead: "1. Variables, types & functions ('def' -> 'return'):",
          body: "A Variable is simply a labeled box in memory (like 'user_name = \"Lucy\"'). Every value has a type: 'str' (text in quotes), 'int'/'float' (numbers), 'bool' ('True'/'False' switch), or 'None' (empty). A Function ('def calculate_total(price):') is a reusable named recipe that takes inputs inside parentheses '()', runs indented steps, and hands back an answer with 'return'."
        },
        {
          lead: "2. How Dictionaries, Lists & Pandas DataFrames fit together (1 Row -> Whole Table):",
          body: "One Python Dictionary ('{\"id\": 1, \"task\": \"Ship app\", \"status\": \"Doing\"}') is one single labeled row of data (identical in shape to a JSON object). When you put multiple Dictionaries inside a Python List ('[ {...}, {...} ]'), you get a List of Dictionaries—which is a multi-row table! In data science and Google Colab notebooks, 'pandas.DataFrame(my_list)' turns that list of dictionaries into a supercharged spreadsheet you can filter or group in one line."
        },
        {
          lead: "3. How to 'trace' a file & read a Stack Trace from the bottom line up:",
          body: "To 'trace' a file means pretending you are the computer and following the code step-by-step from the button click or input down to the final 'return'. When Python crashes and prints a long 'Traceback' error receipt, skip straight to the VERY LAST line—it tells you the exact error type ('KeyError' = missing dictionary key, 'TypeError' = wrong data type) and the exact file and line number that broke."
        },
        {
          lead: "4. Pre-flight verification: Linters ('Ruff'), Unit Tests ('pytest') & Golden AI Evals:",
          body: "How do experienced engineers trust code written by AI? They use a 3-layer safety net: (1) a Linter & Type Checker ('Ruff' in Python, 'ESLint'/'TypeScript' in JS) that acts like instant spell-check for variable names and types, (2) Automated Unit Tests ('pytest') that test functions automatically in milliseconds, and (3) Golden AI Evals (a small spreadsheet of 20–50 test prompts and expected answers) so tweaking a prompt to fix one case doesn't break ten others."
        }
      ],
      activity: {
        title: "Fun activity: Trace the 6 Python building blocks",
        steps: [
          "Click through all 4 stages in the Interactive Python & Code Literacy Blueprint above ('1. Variables & functions', '2. Dicts, lists & tables', '3. Schemas & stack traces', and '4. Automated unit tests & Golden AI Evals') to read each building block in the Left Side Panel.",
          "Compare 'Dictionary {key: val}' (1 row), 'List [row1, row2]' (ordered rows), and 'Pandas DataFrame' (spreadsheet table) in Stage 2 to see how data structures build on each other.",
          "Click 'Stack traces & try/except' in Stage 3 to practice reading a Python Traceback from the bottom line up."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-info",
          title: "Python in 2026: Honest Truth About Learning It Now (Tech With Tim)",
          description: "Why 'building first' with AI and mastering code reading, stack-trace debugging, and architecture beats memorizing syntax textbooks.",
          url: "https://www.youtube.com/watch?v=Kuur0L7E9rQ"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50’s Introduction to Programming with Python (CS50P)",
          description: "Clear, zero-jargon walkthrough of functions, variables, conditionals, loops, exceptions, unit tests (pytest), and file I/O.",
          url: "https://cs50.harvard.edu/python/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "Anthropic Engineering: Claude Code Best Practices (Test-Driven Loops)",
          description: "How to have coding agents run linters and write a failing pytest reproduction test first before editing code.",
          url: "https://www.anthropic.com/engineering/claude-code-best-practices"
        },
        {
          type: "Tool",
          badgeClass: "badge-secondary",
          title: "Google Colab: Interactive Python & Pandas Notebook in Your Browser",
          description: "Practice creating Python Dictionaries, Lists, and Pandas DataFrames cell-by-cell in your browser with zero setup.",
          url: "https://colab.research.google.com/"
        }
      ]
    },
    {
      id: "cli-and-terminal",
      title: "Command line interface & the terminal",
      stage: "Step 4 · Command Line & Efficiency",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "terminal",
      diagramType: "terminal-interactive",
      hasTerminalVocab: true,
      teaser: "What the terminal actually is, how to watch what your AI agent is doing in real time, what 'grep' and folder paths mean, and a live keyboard sandbox.",
      explainer: "Now that you know what plain-text files and Python code look like, how do you navigate folders and run your code? The terminal (or Command Line Interface) is simply a text-based way to talk directly to your computer—typing short one-line instructions instead of clicking through folders with your mouse. Learning a few terminal basics helps in two big ways: first, you can track what your AI coding tool is actually doing as it works (seeing which folders it opens, how it searches your files with 'grep', and which commands it runs); second, you can move around your computer, start local test servers, and read error messages in seconds.",
      experiences: [
        {
          lead: "What 'grep' is (and why AI agents run it constantly):",
          body: "'grep' is simply Cmd+F / Ctrl+F for your terminal. Instead of opening 50 files by hand, running 'grep -rn \"Button\" .' searches inside every file and subfolder (-r = recursive) in a split second and prints the exact filename and line number (-n = line number) where that word appears."
        },
        {
          lead: "Why 'mkdir' comes first and 'touch' comes second (and ls vs. ls -la):",
          body: "'mkdir my-app' ('make directory') builds the empty folder box first (use 'mkdir -p a/b/c' to create nested parent folders all at once); then 'touch index.html' creates the empty file sheet inside it. When listing files, plain 'ls' ('list') hides secret dotfiles (files starting with a dot '.')—always use 'ls -la' ('list all in long detail') so hidden files like '.env' and '.git' show up."
        },
        {
          lead: "Why 'head' means two different things (Terminal 'head' vs. Git 'HEAD'):",
          body: "In the terminal, lowercase 'head -n 20 app.py' prints the top 20 lines of a file so a huge file doesn't flood your screen (its opposite is 'tail', which prints the bottom lines). In Git, uppercase 'HEAD' is the 'You Are Here' pin pointing to your latest commit snapshot."
        },
        {
          lead: "When to use Absolute Paths (/ or ~) vs. Relative Paths (. or ..):",
          body: "An Absolute Path ('cd ~/workspace/my-app', where '~' means your computer's home folder) starts from the top of your folder tree, so it works no matter where you are standing. A Relative Path ('cd src/components' or 'cd ..' to step up one parent folder) starts from the room you are standing in right now (checkable by typing 'pwd' — 'Print Working Directory'). If you're in the wrong folder, a relative path will say 'No such file or directory'."
        }
      ],
      activity: {
        title: "Fun activity: Terminal scavenger hunt",
        steps: [
          "Try all 5 Guided Missions in the Live Terminal & Keyboard Sandbox above—pressing Tab, Up/Down Arrows, Enter, Ctrl+C, and Ctrl+L right on your keyboard.",
          "Click through each colored piece of the Path Anatomy Bar above to see the difference between your Workspace, a Project Repo, a Parent Directory (..), a Subfolder, and a File.",
          "Search the Terminal vocab reference below for 'pwd', 'ls -la', 'grep', and 'cd ..' and try them in your own code editor's terminal."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "MIT Missing Semester: The Shell",
          description: "Hands-on introduction to bash/zsh, paths, pipes, redirection, permissions, and command-line navigation.",
          url: "https://missing.csail.mit.edu/2020/course-shell/"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50: Command Line Interface (CLI) Short",
          description: "Concise beginner walkthrough of ls, cd, pwd, mkdir, cp, rm, and how directory trees work.",
          url: "https://cs50.harvard.edu/x/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "METR AI developer productivity study",
          description: "Research showing why checking terminal output directly is much faster than blind trial-and-error prompting.",
          url: "https://metr.org/"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "ExplainShell: Paste any terminal command to see every flag",
          description: "Interactive visual parser that breaks down complex shell pipelines and flags piece by piece.",
          url: "https://explainshell.com/"
        }
      ]
    },
    {
      id: "git-and-shipping",
      title: "Version control, Git & cloud deployment",
      stage: "Step 5 · Version Control & Safety Net",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "commit",
      diagramType: "git-living",
      teaser: "How to save checkpoints (commits), test risky AI changes on a separate scratchpad (branches), check what changed (diffs), and auto-deploy to cloud hosts (like Vercel, Netlify, Render, or Hugging Face).",
      explainer: "Once you are editing code files and running terminal commands, you hit a classic moment: your project is working nicely, you ask the AI for 'one more small change,' it edits ten files at once, and suddenly the whole screen is broken—and normal Undo (Cmd+Z) can't fix it. That is why we use Version Control (Git). Git is a time machine for your project folder: it lets you save named checkpoints (commits) whenever your code works, test big ideas on a safe side-track (a branch) without touching your working version, review the exact lines that changed (diff), and push your finished work to a cloud code repository (like GitHub or GitLab) that automatically deploys to your live hosting platform.",
      experiences: [
        {
          lead: "Why are there so many steps? (Save vs. Commit vs. Push vs. PR vs. Squash & Merge):",
          body: "Each step has a distinct job: Cmd+S saves a file on your laptop's hard drive; 'git commit' seals a permanent local checkpoint; 'git push' uploads your branch to a cloud repo (like GitHub or GitLab); a 'Pull Request (PR)' opens a visual review page with a test preview link; and 'Squash & Merge' neatly combines your 5 messy work-in-progress ('WIP') checkpoints into one clean update on your official 'main' branch."
        },
        {
          lead: "Branching vs. Cloning vs. Copying a folder:",
          body: "Never duplicate folders on your desktop like 'project-v2-final-FINAL'. A Git branch lets you try a big AI experiment in a safe parallel timeline—and either merge it back in if it works, or throw it away in one second if it breaks."
        },
        {
          lead: "What 'HEAD' means in Git (and how Continuous Deployment works after Merge):",
          body: "In Git, 'HEAD' (in all-caps) simply means 'You Are Here'—the exact commit snapshot your folder is currently standing on. Once you check 'git diff' and merge your PR into 'main', Continuous Deployment (CI/CD — automated cloud testing and publishing) platforms—like Vercel or Netlify for websites, Render or Cloud Run for backend servers, or Hugging Face Spaces for AI demos—automatically build and publish your updated code."
        }
      ],
      activity: {
        title: "Fun activity: Drive the living Git timeline & step-by-step interface flows",
        steps: [
          "Click each step on the Living Git & Cloud Deployment Diagram above (Clone/Init, Branch, Commit, git diff, Pull Request, Merge, and Auto-Deploy Live) to see how code moves safely from your laptop to the internet.",
          "In the 'Step-by-step interface flows' explorer right above, walk through 'Clone a project from GitHub to VS Code', 'Create a new GitHub repo & README', 'Save (commit) & push changes', and 'Deploy a GitHub repo on Vercel' using ◀ Previous / Next ▶.",
          "Create a new branch with git checkout -b test-experiment (where 'checkout -b' creates and switches to a new branch named 'test-experiment'), make an edit, and switch back to main with git checkout main to watch your files instantly return to normal."
        ]
      },
      resources: [
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "Learn Git Branching (Interactive visual sandbox)",
          description: "The best hands-on browser game for seeing commits, branches, checkouts, and merges animate step by step.",
          url: "https://learngitbranching.js.org/"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "MIT Missing Semester: Version Control (Git)",
          description: "Explains Git from the ground up as a graph of snapshots so commands stop feeling like magic spells.",
          url: "https://missing.csail.mit.edu/2020/version-control/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "GitHub Docs: About branches, Pull Requests, and clones",
          description: "Official visual guide to how branches isolate work and how Pull Requests let you review diffs before merging.",
          url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "GitClear AI code quality & churn report",
          description: "Industry study showing why frequent commits, branches, and code reviews matter when coding with AI.",
          url: "https://www.gitclear.com/"
        }
      ]
    },
    {
      id: "system-dynamics",
      title: "MCP vs. API, endpoints, AI agents & how pieces fit together",
      stage: "Step 6 · MCP, Endpoints & AI Agents",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "sync_alt",
      diagramType: "systems-agent-blueprint",
      teaser: "Interactive diagrams built around Aaron Jack's 'What is an API (in 5 minutes)' (the Restaurant/Waiter analogy & 7-part Endpoint X-Ray) and Tech With Tim's 'MCP Servers Explained & Built' (how tool calls work, Local stdio vs. Remote HTTP + OAuth 2.1, and building a Python MCP server).",
      explainer: "In Step 2, we looked at the static map of an app's pieces. This stop zooms in on how programs and AI agents actually talk to each other, built around two foundational walkthroughs: (1) What an API & Endpoint actually are (using Aaron Jack's Restaurant & Waiter analogy: Client at the table -> Menu of Endpoints -> API Waiter -> Server Kitchen, plus all 7 parts of a live Endpoint request), and (2) How MCP (Model Context Protocol) Servers work & how to build one in Python (using Tech With Tim's full walkthrough: why an AI model never runs your code itself, why MCP is the 'USB-C of AI tools', Local stdio vs. Remote HTTP + the OAuth 2.1 '401 Dance', and building 'v1_local.py' -> 'v3_auth.py' with FastMCP).",
      experiences: [
        {
          lead: "1. What is an API & Endpoint? (The Restaurant & Waiter Analogy in 5 minutes):",
          body: "In Aaron Jack's 5-minute explainer, imagine you are sitting at a restaurant table (the Client—your browser or phone app). You want data or an action (like live flight prices on Expedia, weather forecasts, or Stripe card payments), but you aren't allowed to walk into the restaurant's Kitchen (the external Server & Database). Instead, you read the Menu (the API Documentation listing allowed Endpoint URLs like 'GET /v1/weather?city=London') and hand your order to the Waiter (the API), who takes your HTTP Request + API Key to the kitchen and brings back a clean JSON dish ('{\"temp_c\": 18}') with a '200 OK' receipt."
        },
        {
          lead: "2. How an AI Tool Call & MCP Server Actually Work (The 4-Step JSON Loop):",
          body: "As Tech With Tim explains, a language model on its own is just 'text in -> model -> text out'—it can't read your files or query your database, and the AI model NEVER executes your Python function itself! Instead, every MCP tool call happens in 4 JSON steps: (1) The MCP Client (Claude Desktop or Cursor) asks your MCP Server 'tools/list' ('What tools do you have?'), (2) The model reads the tool names and Python docstrings and replies 'Call add_a_note with {\"text\": \"buy milk\"}', (3) YOUR MCP Server runs the Python function ('@mcp.tool() def add_a_note()'), and (4) The JSON result goes back to the model so it can write the answer."
        },
        {
          lead: "3. Local MCP ('stdio') vs. Remote MCP ('HTTP') — And why Remote needs the OAuth 2.1 '401 Dance':",
          body: "• Local MCP ('stdio', v1_local.py): Claude or Cursor launches 'python v1_local.py' as a subprocess on your own laptop. Nobody outside your computer can touch it.\n• Remote MCP ('HTTP', v2_remote.py -> v3_auth.py): One line change ('mcp.run(transport=\"http\", port=8000)') turns your MCP server into a URL ('https://notes.example.com/mcp')—just like GitHub, Notion, or Stripe MCP servers. Because a single shared static API key can't tell 5 agents or different users apart, the MCP spec uses OAuth 2.1 ('the 401 dance'): your server replies '401 Go log in at the Auth Server', the user approves scopes ('notes:read', 'notes:write') on a consent screen, and every tool call carries a short-lived token with 'sub' (user ID for per-user data!) and 'scope'."
        },
        {
          lead: "4. REST API vs. Webhook vs. Streaming vs. MCP & Human-in-the-Loop ('Prepare -> Confirm'):",
          body: "Use a REST API ('You ask -> Waiter replies once') for normal button clicks, a Webhook ('Outside kitchen texts your endpoint when done') for Stripe payments or GitHub events, Streaming / SSE for live token-by-token AI text, and an MCP Server ('@mcp.tool()' in FastMCP) to expose tools once to every AI agent—always staging a Human-in-the-Loop Preview Card before write actions that send emails, delete records, or charge money."
        }
      ],
      activity: {
        title: "Fun activity: Walk through the API Waiter diagram & the 4-part MCP Server build",
        steps: [
          "In Tab 1 ('1. What is an API & Endpoint?') above, click through all 4 stations of the Restaurant & Waiter diagram (Client -> Menu -> Waiter -> Kitchen) and all 7 parts of the Endpoint X-Ray below it.",
          "Switch to Tab 2 ('2. MCP Servers Explained & Built') and step through all 4 chapters: (1) the 4-Step Tool Call JSON Loop, (2) Before MCP vs. USB-C Hub, (3) Local stdio vs. Remote HTTP & the OAuth 2.1 '401 Dance', and (4) the 3 Python files ('v1_local.py' -> 'v2_remote.py' -> 'v3_auth.py').",
          "Watch both paired videos linked right inside the diagram headers (Aaron Jack's 5-minute API explainer and Tech With Tim's MCP Servers walkthrough)."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-info",
          title: "What is an API (in 5 minutes) — Aaron Jack",
          description: "The classic 5-minute visual explainer using the Restaurant & Waiter analogy, real-world APIs (Weather, Airlines, Google Maps, Stripe), Endpoints, and JSON.",
          url: "https://www.youtube.com/watch?v=ByGJQzlzxQg"
        },
        {
          type: "Video",
          badgeClass: "badge-success",
          title: "MCP Servers Explained & Built (Full Course) — Tech With Tim",
          description: "Complete breakdown of how MCP works under the hood (tools/list & tools/call), Local stdio vs. Remote HTTP, the OAuth 2.1 '401 dance', and building a Python FastMCP server from scratch.",
          url: "https://www.youtube.com/watch?v=He8tUwLzLnU"
        },
        {
          type: "Tool",
          badgeClass: "badge-info",
          title: "GitHub Repo: techwithtim/descope-mcp-video (v1_local.py -> v2_remote.py -> v3_auth.py)",
          description: "All 3 progressive versions of the Python FastMCP notes server from Tech With Tim's video, plus the interactive slide deck.",
          url: "https://github.com/techwithtim/descope-mcp-video"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Model Context Protocol (MCP): Official Architecture & Specification",
          description: "Official guide to MCP Hosts, Clients, Servers, OAuth 2.1 authorization, and the 3 core primitives (Tools, Resources, and Prompts).",
          url: "https://modelcontextprotocol.io/introduction"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "Hello Interview: Core system design concepts & scaling dynamics",
          description: "Meta Staff Engineer breakdown of latency, throughput, caching, queues, and handling failure modes.",
          url: "https://www.youtube.com/watch?v=Ru54dxzCyD0"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "Stripe Engineering: Designing robust APIs with idempotency",
          description: "How production systems handle network retries and double-clicks safely without duplicate side effects.",
          url: "https://stripe.com/blog/idempotency"
        }
      ]
    },
    {
      id: "reading-code-stability",
      title: "What could break in production, code safety & how to fix it",
      stage: "Step 7 · Reliability & Code Safety",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "troubleshoot",
      diagramType: "reliability-breakages",
      teaser: "Grouped by 'What could break & how to fix it': 6 plain-English illustrated scenarios with paired videos covering AI timeouts, 50+ simultaneous users, double-clicks, URL privacy leaks, silent failures, and runaway AI bills / leaked Git keys.",
      explainer: "Now that you understand Python (Step 3), Git (Step 5), and API Endpoints & AI Agents (Step 6), you have all the pieces to understand what happens when real people—and internet bots—use your deployed app. On your laptop, prototypes feel invincible because you are 1 person clicking politely. Above, we've grouped the 6 most common production breakages & code-safety risks into side-by-side Before/After visual diagrams, with plain-English explanations in the Left Side Panel and a paired video for each.",
      experiences: [
        {
          lead: "1. What could break with AI & outside services -> How to fix it:",
          body: "• What breaks: The 'Generate' button spins forever when an outside AI service slows down, or crashes when the AI replies with chatty sentences instead of structured data.\n• How to fix it: Add a 10-second stopwatch ('timeout=10' so your server stops waiting after 10 seconds), force the AI to fill out a strict checklist form ('Pydantic / JSON Schema' — a rule that requires exact fields like {title, score}), and wrap the call in a 'try / except' safety net."
        },
        {
          lead: "2. What could break when 50+ people visit at once or double-click -> How to fix it:",
          body: "• What breaks: Asking the database 100 separate questions inside a loop freezes the server ('503 Service Unavailable'), and tapping 'Pay' twice on slow Wi-Fi creates duplicate orders.\n• How to fix it: Load 20 items at a time ('LIMIT 20' in SQL), turn on your database's Connection Pooler (a shared switchboard so hundreds of visitors share 20 database connections), disable buttons on the first click, and attach a one-time receipt ID ('idempotency key' so duplicate clicks are ignored)."
        },
        {
          lead: "3. What could break with data privacy, silent crashes & runaway AI bills -> How to fix it:",
          body: "• What breaks: Changing '?id=104' to '?id=105' in the URL bar exposes someone else's private data ('IDOR'); code hides crashes with 'except: pass' while lying 'Saved!'; or bots spam your AI endpoint overnight and run up a $2,000 bill ('Denial-of-Wallet').\n• How to fix it: Always verify the logged-in owner on the server, never hide errors with 'pass', set a hard monthly spend cap ($10–$25) + per-IP Rate Limiting (10 requests/min), and remember: if you ever commit a secret API key to Git, deleting the line in a new commit does NOT erase it from Git history—you must immediately Revoke/Rotate the key in the provider dashboard!"
        },
        {
          lead: "4. The 4-step debugging checklist & separating Dev vs. Prod databases:",
          body: "When something breaks, don't just tell AI 'it's broken, fix it'—take 30 seconds to pinpoint the layer: (1) check Browser Inspect -> Console for red UI errors, (2) check Inspect -> Network for red status codes (401/403/404/429/500 or CORS), (3) read the bottom line of the server terminal stack trace, and (4) check 'git diff'. Finally, never point your laptop ('localhost') at your live Production database—use a separate Dev/Preview database so local tests never wipe real user data."
        }
      ],
      activity: {
        title: "Fun activity: Compare 'Before (Breaks)' vs. 'After (Fixed)' across all 6 scenarios",
        steps: [
          "Click through all 6 'What could break' tabs above (1. AI Hangs, 2. 50+ Users Freeze DB, 3. Double-Click Duplicates, 4. URL Privacy Leaks, 5. Silent 'Saved!' Lies, and 6. Surprise $2,000 AI Bills & Leaked Git Keys) to inspect the red 'Before' vs. green 'After' diagram and Left Side Panel breakdown.",
          "Click 'Copy instruction for your AI editor' on any scenario and paste it into Cursor, Claude Code, or Gemini to audit your own project.",
          "Open your AI provider dashboard (Google AI Studio, OpenAI, or Anthropic) and verify you have a monthly spend limit or billing alert set before sharing a public URL."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Anthropic Engineering: Building Effective Agents",
          description: "Erik Schluntz & Barry Zhang's landmark guide on why simple, composable workflows and deterministic evaluator-optimizer loops beat complex black-box agents.",
          url: "https://www.anthropic.com/research/building-effective-agents"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "Cognition (Devin): Don't Build Multi-Agents (Principles of Context Engineering)",
          description: "Why multi-agent systems break when sub-agents lose shared context traces—and how to keep agent state and verification rock-solid.",
          url: "https://cognition.ai/blog/dont-build-multi-agents"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "OpenAI: A Practical Guide to Building Agents & Guardrails (PDF)",
          description: "Engineering blueprint for tool risk tiers, structured output schemas, layered guardrails, and human-in-the-loop escalation.",
          url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf"
        },
        {
          type: "Explainer",
          badgeClass: "badge-danger",
          title: "Do Users Write More Insecure Code with AI Assistants? (Stanford ACM CCS)",
          description: "Perry et al.'s empirical study showing why reviewing AI-generated code for auth bypasses, SQL injection, and leaked keys is critical.",
          url: "https://dl.acm.org/doi/10.1145/3576915.3623157"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "GitHub Docs: Secret Scanning & Push Protection",
          description: "How to automatically block accidental git pushes containing API keys—and how to rotate a leaked secret.",
          url: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "Google DORA State of DevOps & OWASP Top 10 Security Risks",
          description: "Why small, tested commits with automated rollback and observability outperform giant unverified code drops.",
          url: "https://dora.dev/"
        }
      ]
    },
    {
      id: "system-architecture",
      title: "System architecture, open source & shipping to the world",
      stage: "Step 8 · Architecture, Open Source & Shipping",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "account_tree",
      diagramType: "opensource-shipping",
      teaser: "How to download and build on top of open-source code, all the ways to host and share what you build (web apps, Hugging Face AI demos, Colab notebooks, servers, or packages), and how to guide AI agents with CLAUDE.md / AGENTS.md.",
      explainer: "When you build something useful, you don't get extra points for inventing login screens, databases, or UI buttons from scratch—and not everything you ship even needs to be a full web app! Experienced engineers start by snapping together free, community-tested open-source building blocks, and then pick the lightest-weight way to share their work: a Frontend/Web App Host (like Vercel, Netlify, or Cloudflare Pages), an AI Demo & Model Hub (like Hugging Face Spaces, Google Colab, or Replicate), an Always-On Backend/Container Server (like Render, Railway, or Google Cloud Run), or an Installable Code Package (on PyPI or npm). This final stop maps every major tool category -> real-world examples, shows how to write an 'AGENTS.md' / 'CLAUDE.md' rulebook for your repo, and walks through the pre-launch checklist.",
      experiences: [
        {
          lead: "Not everything you ship needs to be a full web app (Pick the right hosting category):",
          body: "• Sharing an AI demo, model, or dataset? Host a 20-line Python Gradio/Streamlit app on Hugging Face Spaces, or share an interactive notebook on Google Colab / Jupyter.\n• Sharing a website or full-stack web app? Use a web app host (e.g. Vercel, Netlify, Cloudflare Pages).\n• Running a long Python API, Docker container, or background worker? Use a backend server host (e.g. Render, Railway, Fly.io, Google Cloud Run, AWS).\n• Sharing reusable code for other builders? Publish an installable code package to PyPI (the Python Package Index) or npm (the JavaScript Package Registry), or host a free static site on GitHub Pages."
        },
        {
          lead: "Two ways to build on open source (Single Libraries vs. Full Starter Templates):",
          body: "You can either install a single open-source library into your existing project ('npm install' or 'pip install' for UI buttons, data validation, or AI SDKs — Software Development Kits, official helper libraries for calling an AI service) OR copy a complete working starter repository on GitHub ('Fork' or 'Use this template') so login, database tables, and styling are already wired up."
        },
        {
          lead: "Give your repo an 'AGENTS.md' / 'CLAUDE.md' instruction file (So AI remembers your rules):",
          body: "To stop AI coding agents from making the same mistakes repeatedly, add a short plain-text 'AGENTS.md' or 'CLAUDE.md' file at the root of your project folder. List your project's folder structure, how to run tests ('pytest'), file-size limits, and security rules (like 'never hardcode API keys or touch the production database')—every modern AI coding tool reads this file automatically before editing your code."
        },
        {
          lead: "Three open-source watch-outs before you run npm install or pip install:",
          body: "1) Check the repo's LICENSE file (permissive licenses like MIT and Apache 2.0 let you use the code freely in private or commercial apps; 'copyleft' licenses like AGPL/GPL require you to share your own source code). 2) Verify any package an AI suggests actually exists on npm or PyPI before installing it (to avoid 'slopsquatting' — when scammers register fake package names that AI models commonly hallucinate). 3) Check the last commit date so you don't adopt an abandoned 'zombie' library when modern JavaScript or Python already has the feature built in."
        }
      ],
      activity: {
        title: "Fun activity: Vet, clone & pick the right way to ship",
        steps: [
          "Click through the 3 interactive diagrams above: (1) Open-Source Workflow, (2) Category-First Hosting & Builder's Stack Map, and (3) Critical Watch-Outs Shield.",
          "Compare the 4 hosting categories in Diagram 2 (Web App Hosts vs. AI & Notebook Hubs like Hugging Face/Colab vs. Backend Container Hosts vs. Static/Package Registries) to see which fits your next project.",
          "Create a short CLAUDE.md or AGENTS.md file in your project root listing your stack, test command, and safety rules so your AI coding agent follows them automatically."
        ]
      },
      resources: [
        {
          type: "Tool",
          badgeClass: "badge-info",
          title: "Vercel Open-Source Starter Templates",
          description: "Production-ready Next.js, AI chat, SaaS, and Supabase starter repos you can clone and deploy to a live URL in minutes.",
          url: "https://vercel.com/templates"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "shadcn/ui & Radix Open-Source Components",
          description: "Accessible, customizable open-source UI components that copy directly into your codebase so you own every line.",
          url: "https://ui.shadcn.com/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-warning",
          title: "Choose an Open Source License (MIT vs. Apache 2.0 vs. AGPL)",
          description: "Plain-English breakdown of which open-source licenses are safe for commercial apps and which require open-sourcing your code.",
          url: "https://choosealicense.com/licenses/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "The System Design Primer & Awesome Open Source",
          description: "Visual catalog of standard architectural blueprints (load balancers, caches, queues, schemas) and vetted open-source tools.",
          url: "https://github.com/donnemartin/system-design-primer"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Nature: People systematically overlook subtractive changes (Adams et al.)",
          description: "Empirical research on addition bias and why simplifying architecture requires deliberate effort.",
          url: "https://www.nature.com/articles/s41586-021-03380-y"
        }
      ]
    }
  ],
  archive: {
    essayTitle: "What vibe-coding engineers need to learn",
    essaySubtitle: "Takeaways from an experienced software engineer and a new AI-deployed builder on what comes naturally—and what takes deliberate practice.",
    sections: [
      {
        heading: "The gap between a cool prototype and a real live app",
        body: "Today, anyone can build working prototypes and flows they never could have built six months ago. AI makes getting to the first 80% faster than ever—but turning a prototype that works once on your laptop into a reliable app that real people can trust requires learning a few core engineering habits."
      },
      {
        heading: "What comes naturally: Knowing the real problem & keeping it simple",
        body: "When you come directly from the problem you're trying to solve, you have a huge head start: you already know what users actually need (instead of building extra features nobody clicks), you build alongside the people who will use it, and you bring fresh eyes to ask 'what is the simplest way this could work?'"
      },
      {
        heading: "What takes practice: App vocabulary, Git checkpoints, the terminal & reading code",
        body: "Sometimes starting inside the box is a great place to begin. Bridging the gap from 'vibes' to a deployed app comes down to five practical skills: (1) knowing the names of the parts of an app so you can point AI to the right place, (2) saving Git checkpoints and branches before big AI edits, (3) using the terminal to see what AI is doing in real time, (4) skimming the code AI writes to spot missing error checks or exposed keys, and (5) building on top of trusted open-source building blocks."
      }
    ],
    library: [
      {
        title: "What is an API (in 5 minutes) — Aaron Jack",
        category: "Video",
        badgeClass: "badge-info",
        takeaway: "The clearest 5-minute visual explainer of APIs using the Restaurant & Waiter analogy, Endpoints, JSON, and real-world services (Weather, Airlines, Google Maps, Stripe)."
      },
      {
        title: "MCP Servers Explained & Built (Full Course) — Tech With Tim",
        category: "Video",
        badgeClass: "badge-success",
        takeaway: "How AI tool calls work (tools/list & tools/call), Local stdio vs. Remote HTTP MCP servers, the OAuth 2.1 '401 dance', and building a Python FastMCP server in 15 lines."
      },
      {
        title: "Python in 2026: Honest Truth About Learning It Now (Tech With Tim)",
        category: "Video",
        badgeClass: "badge-info",
        takeaway: "Why you don't need to memorize syntax textbooks in 2026—focus on building first, reading AI code, debugging stack traces, and understanding architecture."
      },
      {
        title: "Harvard CS50x: Introduction to Computer Science",
        category: "Course",
        badgeClass: "badge-info",
        takeaway: "The best zero-assumed-knowledge course on how text files, code editors, Python, SQL, and web apps actually work."
      },
      {
        title: "Hello Interview: System Design & App Architecture",
        category: "Video",
        badgeClass: "badge-secondary",
        takeaway: "Clear visual guide for how screens (Front End), messengers (APIs), servers (Back End), and databases fit together."
      },
      {
        title: "MIT Missing Semester of Your CS Education",
        category: "Course",
        badgeClass: "badge-success",
        takeaway: "The clearest hands-on guide to using the terminal, navigating folders, and understanding how Git saves checkpoints."
      },
      {
        title: "Designing Data-Intensive Applications (Martin Kleppmann)",
        category: "Book",
        badgeClass: "badge-info",
        takeaway: "Deep-dive reference for how databases, background queues, caches, and reliable systems work under the hood."
      },
      {
        title: "Learn Git Branching (Interactive Sandbox)",
        category: "Tool",
        badgeClass: "badge-success",
        takeaway: "Visual, step-by-step browser game for practicing commits, branches, merges, and undoing mistakes."
      },
      {
        title: "Choose an Open Source License (GitHub Guide)",
        category: "Guide",
        badgeClass: "badge-warning",
        takeaway: "Plain-English cheat sheet on which open-source licenses (MIT, Apache 2.0) are safe to build on and which have restrictions."
      },
      {
        title: "Why Johnny Can't Prompt (UC Berkeley, ACM CHI)",
        category: "Paper",
        badgeClass: "badge-info",
        takeaway: "Study showing why knowing the names for the parts of an app helps you direct AI much faster than guessing."
      },
      {
        title: "Do Users Write More Insecure Code with AI Assistants? (Stanford)",
        category: "Paper",
        badgeClass: "badge-secondary",
        takeaway: "Study showing why skimming AI-written code for exposed passwords and missing error checks matters before going live."
      }
    ]
  }
};

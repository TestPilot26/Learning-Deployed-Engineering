// Structured pipeline stops and archive data for Deployed Eng Pipeline
// Stop order:
// 1. Downloading the tools
// 2. Basic terminology, coding languages & app infrastructure
// 3. Version control, Git & shipping to Vercel
// 4. Command line interface & the terminal
// 5. Reading code & long-term stability
// 6. System dynamics & how pieces fit together
// 7. System architecture & stress-tested blueprints

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
      teaser: "What a code file actually is, why you don't use Word or Google Docs to write code, and how your laptop connects to GitHub and Vercel.",
      explainer: "When you start from zero, the hardest part isn't complex math—it's figuring out what all the new apps and windows on your laptop actually do. Here is the secret: code is just plain text files sitting in a normal folder on your computer. Once you see what each tool does—your code editor (where you read and edit those text files), Homebrew (which installs coding engines on your laptop), Git (your local save history), GitHub (your cloud backup), and Vercel (which turns your folder into a live website)—the mystery disappears.",
      experiences: [
        {
          lead: "Plain text files vs. Word or Google Docs:",
          body: "A .js, .py, or .html file is just a plain text file with zero hidden formatting. Opening code in Word or Google Docs injects curly quotes and invisible styles that confuse the computer—a code editor like VS Code or Cursor is simply a plain-text workshop with color-coding and a built-in terminal."
        },
        {
          lead: "Why engineers use Homebrew instead of random installer downloads:",
          body: "Hunting around websites for random installers often scatters tools into folders your terminal cannot find ('command not found'). A tool installer like Homebrew ('brew install node git') puts developer tools in one standard place and keeps them updated."
        },
        {
          lead: "What 'saving to Vercel' physically means:",
          body: "Pressing Cmd+S only saves the file on your laptop's hard drive. 'Pushing' to GitHub uploads your folder to a cloud backup. Vercel watches your GitHub folder, automatically builds your latest code whenever you push, and publishes it to a live public https:// link."
        }
      ],
      activity: {
        title: "Fun activity: Trace a file from laptop to live URL",
        steps: [
          "Click through each stage in the interactive diagram above to trace how a plain text file travels from your laptop to a live Vercel website.",
          "Open VS Code or Cursor, create a file named index.html, and find it in Mac Finder or Windows Explorer to see that it is just a normal file in a normal folder.",
          "Open your editor's built-in terminal (Ctrl+` or Cmd+`) and run git --version and node -v to check that Git and Node.js are installed on your laptop."
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
          title: "Homebrew: The missing package manager for macOS & Linux",
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
          title: "How Vercel deploys from GitHub automatically",
          description: "Step-by-step walkthrough of what happens when Vercel detects a new commit on your GitHub repository.",
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
      teaser: "An interactive map of the parts of an app (Front End, Back End, API, Database), why different coding languages exist, and what makes an app solid vs. fragile.",
      explainer: "When you build with AI, knowing the names for the parts of an app completely changes how you ask for help. If a button isn't saving your work and you don't know the terminology, you can only describe what looks wrong on the screen ('the save button is broken!') and hope the AI guesses right. Once you know the basic map of an app—what lives on the user's screen (Front End), what runs behind the scenes (Back End), the messenger between them (API), and the permanent filing cabinet (Database)—you can point your AI straight to the exact piece you want to build or fix.",
      experiences: [
        {
          lead: "Why one app uses several different coding languages:",
          body: "Each part of an app speaks its own native language: web browsers only understand HTML, CSS, and JavaScript to draw the screen; Back End servers often use Python (great for AI and data) or Node.js (JavaScript for servers); and Databases use SQL to organize tables of information."
        },
        {
          lead: "Describing what looks wrong vs. pointing to the right part:",
          body: "Instead of telling AI 'it forgot what I typed when I refreshed the page,' you can say: 'Right now this is only saved on the Front End screen—let's send it through the API and save it in the Database so it stays there when I refresh.'"
        },
        {
          lead: "Why a working demo can still be fragile:",
          body: "An AI can quickly build a prototype that works on your laptop by putting everything—including secret AI billing passwords—directly inside the Front End browser code. Learning the boundary between the public Front End and the private Back End keeps your app and your wallet safe when you share it online."
        }
      ],
      activity: {
        title: "Fun activity: Explore the interactive app & language map",
        steps: [
          "Click through each stage and language pill in the Interactive App Diagram above to see what lives on the Front End, API Bridge, Back End, and Database.",
          "Toggle the diagram between 'Healthy app setup' and 'Fragile setup (what breaks)' to spot the 4 classic beginner traps.",
          "Right-click any website in Chrome, click 'Inspect -> Network', click a button on the page, and watch the browser send a live message to the server."
        ]
      },
      resources: [
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
      id: "git-and-shipping",
      title: "Version control, Git & shipping to Vercel",
      stage: "Step 3 · Safety Net",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "commit",
      diagramType: "git-living",
      teaser: "How to save checkpoints (commits), test risky AI changes on a separate scratchpad (branches), check what changed (diffs), and publish to a live link.",
      explainer: "Everyone who builds with AI hits this moment early on: your app is working nicely, you ask the AI for 'one more small change,' it edits ten files at once, and suddenly the whole screen is broken—and normal Undo (Cmd+Z) can't fix it. That is why we learn Git right away. Git is a time machine for your project folder: it lets you save named checkpoints (commits) whenever your app works, test big ideas on a safe side-track (a branch) without touching your working version, review the exact lines that changed (diff), and push your finished work to GitHub and Vercel.",
      experiences: [
        {
          lead: "Saving (Cmd+S) vs. Committing (git commit) vs. Pushing (git push):",
          body: "Cmd+S updates the file on your laptop right now. git commit takes a permanent, labeled snapshot you can rewind to anytime. git push uploads those snapshots to GitHub and triggers Vercel to update your live website."
        },
        {
          lead: "Branching vs. Cloning vs. Copying a folder:",
          body: "Never duplicate folders on your desktop like 'project-v2-final-FINAL'. A Git branch lets you try a big AI experiment in a safe parallel timeline—and either merge it back in if it works, or throw it away in one second if it breaks."
        },
        {
          lead: "Always check git diff before sealing a checkpoint:",
          body: "Before you commit or open a Pull Request (PR), running git diff shows you every line removed (in red) and added (in green) so you can catch accidental deletions or stray passwords."
        }
      ],
      activity: {
        title: "Fun activity: Drive the living Git timeline",
        steps: [
          "Click each step on the Living Git & Deployment Diagram above (Clone/Init, Branch, Commit, git diff, Pull Request, Merge, and Vercel Live) to see how code moves safely to a live link.",
          "Make a clean git commit in your project folder, ask an AI agent to tweak a file, and run git diff to see the exact red and green lines it changed.",
          "Create a branch with git checkout -b test-experiment, make an edit, and switch back to main with git checkout main to watch your files instantly return to normal."
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
      id: "cli-and-terminal",
      title: "Command line interface & the terminal",
      stage: "Step 4 · Efficiency",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "terminal",
      diagramType: "terminal-interactive",
      hasTerminalVocab: true,
      teaser: "What the terminal actually is, how to watch what your AI agent is doing in real time, what 'grep' and folder paths mean, and a live keyboard sandbox.",
      explainer: "The terminal (or Command Line Interface) is simply a text-based way to talk directly to your computer—typing short one-line instructions instead of clicking through folders with your mouse. Learning a few terminal basics helps in two big ways: first, you can track what your AI coding tool is actually doing as it works (seeing which folders it opens, how it searches your files with 'grep', and which commands it runs); second, you can move around your computer, start local test servers, and read error messages in seconds.",
      experiences: [
        {
          lead: "What 'grep' is (and why AI agents run it constantly):",
          body: "'grep' is simply Cmd+F / Ctrl+F for your terminal. Instead of opening 50 files by hand, running 'grep -rn \"Button\" .' searches inside every file and subfolder (-r) in a split second and prints the exact filename and line number (-n) where that word appears."
        },
        {
          lead: "Following what your AI is doing in real time:",
          body: "When an AI agent runs terminal commands, knowing pwd (which folder am I in?), ls -la (list all files, including hidden .env files), grep (search text inside files), and git diff lets you follow every step instead of treating AI like a black box."
        },
        {
          lead: "One set of commands that works everywhere:",
          body: "Buttons and menus move around in different apps, but basic terminal commands (cd, ls, pwd, mkdir, grep) work the exact same way on a Mac, Linux, VS Code, Cursor, and cloud servers."
        },
        {
          lead: "Breaking out of the 'ask AI 20 times' loop:",
          body: "When your screen goes blank or a server won't start, pasting 'it still doesn't work' into chat ten times in a row is frustrating. Glancing at the red error line in the terminal (or running lsof -i :3000 to see if a port is busy) usually reveals the exact problem in 10 seconds."
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
      id: "reading-code-stability",
      title: "Reading code & long-term stability",
      stage: "Step 5 · Reliability",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "troubleshoot",
      teaser: "How to skim AI-written code—even before you could write it yourself—to spot silent bugs, missing error checks, and security traps.",
      explainer: "You don't need to know how to write every line of code from memory—that's what AI is for. But there is a big difference between writing code and reading it. Often, an AI prototype works on your first try when you click the right button with clean test data, but breaks the moment a real user types something unexpected or has slow Wi-Fi. Learning how to skim the code AI generates lets you spot where it forgot to handle errors, where a secret password might be exposed, and how to keep your app stable as it grows.",
      experiences: [
        {
          lead: "Why 'it worked on the first try' can be a trap:",
          body: "AI usually writes code for the 'happy path'—assuming the internet is fast, every form box is filled in properly, and only one person is clicking at a time. Skimming the code helps you ask: what happens if the server is slow, a box is left blank, or an API call fails?"
        },
        {
          lead: "Keeping files small and organized:",
          body: "If you let AI keep piling new features into one giant 2,000-line file, it eventually starts breaking old features every time it adds a new one. Asking AI to split your app into small, focused files (one for the screen, one for the server, one for data) keeps everything easy to maintain."
        },
        {
          lead: "Showing helpful errors instead of failing silently:",
          body: "The most confusing bug is when a user clicks a button and nothing happens on screen. Always ask AI to add visible loading states and clear error messages so you and your users immediately know if something went wrong."
        }
      ],
      activity: {
        title: "Fun activity: Stress-test your own prototype",
        steps: [
          "Open one of your AI-built apps, turn off Wi-Fi (or slow it down in Chrome Inspect -> Network), click a button, and see if the app shows a helpful message or freezes silently.",
          "Check your project files in your editor: if any single file is over 500–800 lines long, ask your AI assistant to split it into smaller, clearly named files.",
          "Search your code (using grep -rn \"sk-\" . or your editor search) to make sure no secret API keys are sitting inside your normal code files."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Do Users Write More Insecure Code with AI Assistants? (Stanford)",
          description: "Stanford study on why AI-generated code can look convincing at first glance while hiding security gaps.",
          url: "https://dl.acm.org/doi/10.1145/3576915.3623157"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "Google DORA State of DevOps report",
          description: "Why shipping small, well-tested changes keeps apps much more reliable than giant all-at-once rewrites.",
          url: "https://dora.dev/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "OWASP Top 10 Web Application Security Risks",
          description: "The essential checklist for spotting common security mistakes when reviewing web application code.",
          url: "https://owasp.org/www-project-top-ten/"
        }
      ]
    },
    {
      id: "system-dynamics",
      title: "System dynamics & how pieces fit together",
      stage: "Step 6 · Systems",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "sync_alt",
      teaser: "How information moves between the pieces of your app over time—handling slow tasks, double-clicks, page refreshes, and traffic spikes.",
      explainer: "In Step 2, we looked at the map of an app's pieces (Front End, Back End, Database). This stop is about timing and traffic—how those pieces talk to each other in real life. Most bugs in a growing app aren't typos in the code; they happen when two things happen at once or a step takes too long: What happens if an AI task takes 30 seconds and the browser gets tired of waiting? What if someone impatiently clicks 'Pay' three times in a row? What if refreshing the page wipes out their work? Understanding how data moves over time helps you build apps that feel smooth and never lose user work.",
      experiences: [
        {
          lead: "Asking 'Are you done yet?' (Polling) vs. 'Text me when it's ready' (Webhooks):",
          body: "When your app waits for a slow job (like generating an AI report or confirming a Stripe payment), your screen can either keep asking the server 'Are you done yet?' every few seconds (called Polling), or the outside service can send your server a direct notification the moment it finishes (called a Webhook)."
        },
        {
          lead: "Making sure a double-click doesn't double-charge (Idempotency):",
          body: "On slow Wi-Fi, people often tap 'Submit' or 'Pay' two or three times. Engineers use the word 'Idempotency' for a simple protection: disabling the button while it loads and tagging the action with a unique receipt ID so the server only runs it once."
        },
        {
          lead: "Why refreshing the page sometimes wipes out your work (State):",
          body: "If you type into a page or open a tab and it disappears when you hit Refresh, that information was only sitting in temporary browser memory ('UI state'). Anything that needs to survive a page refresh must be saved in the Database, local storage, or the page URL."
        }
      ],
      activity: {
        title: "Fun activity: Trace timing & double-clicks in your app",
        steps: [
          "Pick an app you're building and draw three boxes on paper: Screen (Front End), Server (Back End), and Database / AI API.",
          "Trace what happens if a user double-clicks the main submit button rapidly—does the button disable itself while loading, or does it send duplicate requests?",
          "Refresh the browser in the middle of using your app and check what stays on screen (saved in the Database or URL) vs. what disappears (temporary browser state)."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "Hello Interview: Core system design concepts & scaling dynamics",
          description: "Meta Staff Engineer breakdown of latency, throughput, caching, queues, and handling failure modes.",
          url: "https://www.youtube.com/watch?v=Ru54dxzCyD0"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Designing Data-Intensive Applications (Martin Kleppmann)",
          description: "The foundational guide to reliability, scalability, and maintainability in modern software systems.",
          url: "https://dataintensive.net/"
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
      id: "system-architecture",
      title: "System architecture, open source & shipping to production",
      stage: "Step 7 · Architecture, Open Source & Shipping",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "account_tree",
      diagramType: "opensource-shipping",
      teaser: "How to download and build on top of free open-source code, where to find the best starter templates and tools to ship, and key watch-outs before going live.",
      explainer: "When you build a real product, you don't get extra points for inventing login screens, payment checkouts, or databases from scratch. Experienced engineers rarely build those from zero—instead, they start inside the box by snapping together free, community-tested open-source building blocks and starter templates, saving their energy for the 20% that makes their idea unique. This final stop shows you how to download and build on top of open-source code, where to find the best tools to ship, and the key watch-outs—like software licenses, fake AI-hallucinated packages, leaked '.env' keys, and surprise cloud bills—to check before you share a public link.",
      experiences: [
        {
          lead: "Two ways to build on open source (Single Libraries vs. Full Starter Templates):",
          body: "You can either install a single open-source building block into your existing project ('npm install' or 'pip install' for icons, charts, or Stripe) OR copy a complete working starter app on GitHub ('Fork' or 'Use this template') so login, database tables, and styling are already wired up."
        },
        {
          lead: "Where to find the best free building blocks to ship fast:",
          body: "Start from official Vercel Templates, shadcn/ui components, and GitHub 'Awesome' lists; pair them with Supabase or Neon (free-tier databases), Clerk or Auth.js (user login), Google AI Studio or Hugging Face (AI models), and Stripe Checkout (payments)."
        },
        {
          lead: "Four watch-outs before you install or go live:",
          body: "1) Check the LICENSE file (MIT and Apache 2.0 are safe for business; AGPL/GPL require sharing your source code). 2) Make sure any package AI suggests is real on npm/GitHub before installing. 3) Keep secret keys in '.env' (never on public GitHub). 4) Set a hard monthly spend limit in your AI/cloud billing dashboard."
        },
        {
          lead: "Keeping your architecture simple:",
          body: "When an AI suggests adding five new servers for a simple app, push back and ask: 'What is the simplest way to build this using the tools we already have?'"
        }
      ],
      activity: {
        title: "Fun activity: Vet, clone & ship an open-source starter safely",
        steps: [
          "Click through the 3 interactive diagrams above: (1) Open-Source Workflow, (2) Shipping Resource Stack, and (3) Critical Watch-Outs Shield.",
          "Pick a starter repo on Vercel Templates or GitHub and check its 4 health signals: LICENSE file (MIT/Apache 2.0), last commit date, download count, and README.",
          "Before sharing any live app link publicly, set a hard monthly spend limit in your AI/cloud billing settings so a traffic spike can never cause a surprise bill."
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

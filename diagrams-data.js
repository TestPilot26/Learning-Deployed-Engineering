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
  // STOP 1: Illustrated Scene — Your Computer -> Cloud Storage -> Live Internet
  // ============================================================================
  toolsFlowNodes: [
    {
      id: "ide-editor",
      hub: "computer",
      icon: "edit_square",
      badge: "On your computer",
      badgeClass: "badge-info",
      title: "Code editor (VS Code or Cursor)",
      summary: "Where you open your project folder to read, write, and ask AI to edit your code.",
      whatItIs: "Think of a code editor as your home workshop. On the left side, it shows the list of files in your folder. In the middle, it lets you read and edit your code with helpful color-coding. At the bottom, it has a built-in terminal window so you can run commands without switching apps.",
      slipUp: "Easy slip-up: Opening a single loose file instead of opening the whole project folder ('File -> Open Folder'). Always open the whole folder so your AI assistant can see how all your files fit together.",
      command: "Open VS Code or Cursor -> File -> Open Folder",
      videoTitle: "VS Code: Visual tour of the editor window",
      videoUrl: "https://code.visualstudio.com/docs/getstarted/userinterface"
    },
    {
      id: "plain-text",
      hub: "computer",
      icon: "description",
      badge: "On your computer",
      badgeClass: "badge-info",
      title: "Simple text files (.html, .js, .py)",
      summary: "Where your code instructions live on your device—good for keeping everything fast, readable, and inside a normal folder.",
      whatItIs: "Code isn't locked inside a special database. Every code file is just a simple text document containing plain letters and symbols. We don't use Microsoft Word or Google Docs to write code because Word secretly adds invisible styling (like turning straight quotes \" \" into fancy curved quotes) that confuses the computer. Ending a file name in .py (Python) or .js (JavaScript) simply tells the computer which language you wrote inside.",
      slipUp: "Easy slip-up: Double-clicking a .js or .py file in Finder/Explorer expecting an app window to pop open. Instead, drag the folder into your code editor.",
      command: "ls -la   # Shows all files in your folder",
      videoTitle: "MDN: How code files and folders work on your computer",
      videoUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
    },
    {
      id: "homebrew-runtime",
      hub: "computer",
      icon: "downloading",
      badge: "On your computer",
      badgeClass: "badge-success",
      title: "Tool installer & engine (Homebrew, Node, Python)",
      summary: "Where your computer gets the engines to run code privately on your screen ('localhost') before anyone else sees it.",
      whatItIs: "Text files are just recipes—you need a kitchen engine (like Python or Node.js) to actually cook the recipe and run your app on your laptop. Homebrew ('brew') is a helper tool for Mac/Linux that downloads and installs these coding engines cleanly with one short command, so you never have to hunt around websites for random installer downloads.",
      slipUp: "Easy slip-up: Downloading random installers from Google Search that land in the wrong folder, causing the terminal to say 'command not found'. Using Homebrew puts tools in the right place automatically.",
      command: "brew install node git   # Installs Node.js and Git cleanly",
      videoTitle: "Homebrew: The one-line tool installer for Mac & Linux",
      videoUrl: "https://brew.sh/"
    },
    {
      id: "local-git",
      hub: "computer",
      icon: "history",
      badge: "On your computer",
      badgeClass: "badge-secondary",
      title: "Local undo history (Git on your laptop)",
      summary: "Where you save checkpoints on your device—good for rewinding instantly if an AI edit breaks your working app.",
      whatItIs: "Pressing Cmd+S (or Ctrl+S) overwrites your file right now, which means if an AI rewrites 5 files and breaks your app ten minutes later, normal 'Undo' won't save you. Git is a time-machine program that lives right on your laptop: anytime your app works nicely, you take a labeled snapshot (called a 'commit') so you can jump back to that exact working moment whenever you want.",
      slipUp: "Easy slip-up: Letting an AI agent make a big second change before saving a checkpoint of the first working version.",
      command: "git add . && git commit -m \"Working homepage\"",
      videoTitle: "MIT Missing Semester: How Git saves snapshots",
      videoUrl: "https://missing.csail.mit.edu/2020/version-control/"
    },
    {
      id: "env-secrets",
      hub: "computer",
      icon: "lock",
      badge: "Stays on laptop",
      badgeClass: "badge-neutral",
      title: "Private passwords file (.env)",
      summary: "Where you store secret AI keys on your laptop so they never get shared publicly.",
      whatItIs: "When your app talks to paid services like OpenAI, Gemini, or Stripe, those services give you a secret password called an API key. You put those keys inside a special hidden file named '.env' on your laptop. Your local code reads that file, and a rule file called '.gitignore' makes sure that secret file is never uploaded to the public internet.",
      slipUp: "Easy slip-up: Pasting a secret API key directly inside your normal code files and uploading it to GitHub, where automated bots can steal it in seconds.",
      command: "OPENAI_API_KEY=\"sk-...\"   # Stored inside .env only",
      videoTitle: "Why secret keys belong in environment variables",
      videoUrl: "https://vercel.com/docs/projects/environment-variables"
    },
    {
      id: "cloud-github",
      hub: "cloud",
      icon: "cloud_upload",
      badge: "Remote cloud storage",
      badgeClass: "badge-info",
      title: "Cloud code vault (Personal GitHub)",
      summary: "Where your code is remotely stored online—good for backing up your work and sharing it with teammates or hosting tools.",
      whatItIs: "While Git tracks your save checkpoints on your laptop, GitHub is the website in the cloud where you upload ('push') a copy of your project folder. Because it lives in the cloud, your code is safe even if you spill coffee on your laptop, you can share a link with teammates, and cloud hosting services like Vercel can read it.",
      slipUp: "Easy slip-up: Saving a file on your laptop (Cmd+S) and wondering why it hasn't shown up on GitHub yet—you have to save a checkpoint and 'push' (upload) it to the cloud.",
      command: "git push   # Uploads your saved checkpoints from laptop to GitHub",
      videoTitle: "GitHub Docs: How local Git and cloud GitHub fit together",
      videoUrl: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    {
      id: "cloud-vercel",
      hub: "internet",
      icon: "public",
      badge: "Live on the internet",
      badgeClass: "badge-success",
      title: "Live website hosting (Vercel)",
      summary: "Where your code gets turned into a real public website (https://...) that anyone can open on their phone or laptop.",
      whatItIs: "Your laptop can't stay awake 24/7 serving your website to the world. Vercel is a cloud hosting service that connects to your GitHub account. Every time you upload ('push') an update to GitHub, Vercel automatically grabs your latest code, starts up a fast cloud computer, and publishes your live website at a public https:// link in about 20 seconds.",
      slipUp: "Easy slip-up: When your app needs a secret API key from your local '.env' file, remember to also paste that key into Vercel's 'Environment Variables' settings box so the live website has it too.",
      command: "https://your-app-name.vercel.app   # Live public link",
      videoTitle: "Vercel: How pushing to GitHub updates your live website",
      videoUrl: "https://vercel.com/docs/deployments/git"
    },
    {
      id: "browser-devtools",
      hub: "internet",
      icon: "travel_explore",
      badge: "Built into browser",
      badgeClass: "badge-secondary",
      title: "Browser X-ray inspector (Chrome DevTools)",
      summary: "Where you peek under the hood of any live webpage to see errors, network messages, and layout details.",
      whatItIs: "Every web browser (Chrome, Safari, Edge) has a secret X-ray tool built right in: just right-click anywhere on a webpage and click 'Inspect'. The 'Console' tab shows any red error messages if a button broke, and the 'Network' tab shows every message travelling between the webpage and the server.",
      slipUp: "Easy slip-up: Guessing why a webpage looks blank instead of opening 'Inspect -> Console' to read the exact error line.",
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
      oneLiner: "Start or download project",
      badge: "Step 1 on main · Starting point",
      badgeClass: "badge-info",
      title: "Clone or Initialize (c1: init — Starting your project timeline)",
      command: "git init   # OR: git clone git@github.com:TestPilot26/my-app.git",
      labelDecoded: "What 'c1: init', 'Clone', and 'Fork' mean: On Git graphs, 'c1' is shorthand for Commit #1 (your first save point) and 'init' is short for Initialize (turning a normal folder into a Git-tracked folder). 'Clone' means downloading an existing project from GitHub onto your laptop; 'Fork' means copying someone else's GitHub project into your own GitHub account.",
      whatItIs: "Every project starts here on the blue 'main' line. Either you create a brand-new folder on your laptop and run 'git init', or you download ('git clone') a project from GitHub so your laptop has the full save history.",
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
      whatItIs: "A 'Branch' creates a parallel sandbox timeline inside your exact same folder. While you are on the green 'feat/ai-experiment' branch, your real live website on the blue 'main' line stays 100% untouched.",
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
      title: "Commit (c3: AI edit — Saving a labeled checkpoint on your branch)",
      command: "git add . && git commit -m \"Add searchable terminal vocab\"",
      labelDecoded: "What 'c3: AI edit' means on the graph: 'c3' is Commit #3—a permanent snapshot dot saved on the green sandbox branch right after you or your AI agent finishes an edit, with a short label ('AI edit') describing what changed.",
      whatItIs: "Pressing Cmd+S in your editor only overwrites the file on your screen. Making a 'Commit' takes a permanent, labeled photograph of every file in your project at that exact moment and adds a new dot to your timeline.",
      whyItSavesYou: "Every commit dot is a checkpoint you can rewind to at any time—even weeks later—if a future change introduces a bug."
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
      labelDecoded: "What 'c4: git diff ok' means on the graph: 'diff' is short for Difference. This dot represents inspecting the exact red (deleted) and green (added) lines between your last save point and your newest edits, and confirming everything looks clean ('ok').",
      whatItIs: "Where you review a line-by-line highlight of everything that changed in your code files before you propose publishing it to the main app.",
      whyItSavesYou: "AI coding tools sometimes fix one button while accidentally deleting a paragraph or leaving a test password behind. 'git diff' spots that in 10 seconds."
    },
    {
      id: "git-pr",
      stepNum: 5,
      lane: "sandbox",
      octicon: "pullRequest",
      word: "5. Pull Request (PR / CL)",
      graphCodeLabel: "PR / CL review",
      oneLiner: "Preview link & review gate",
      badge: "Step 5 · Propose merging to main",
      badgeClass: "badge-secondary",
      title: "Pull Request / Changelist (PR / CL review — The safety gate before going live)",
      command: "gh pr create --title \"Add interactive app diagram\"",
      labelDecoded: "What 'PR / CL review' means: On GitHub, proposing to bring your sandbox branch back into 'main' is called a Pull Request ('PR'). At Google and in large engineering orgs, the exact same concept is called a Changelist ('CL').",
      whatItIs: "Before the green sandbox line is allowed to curve back up into the blue 'main' line, you open a PR on GitHub. It shows a clean before-and-after summary, runs automated checks, and tells Vercel to build a private Preview URL so you can test the changes on your phone.",
      whyItSavesYou: "Catches broken builds or mobile layout bugs on a private preview link before a single real visitor on your live site sees them."
    },
    {
      id: "git-merge",
      stepNum: 6,
      lane: "main",
      octicon: "merge",
      word: "6. Merge",
      graphCodeLabel: "c5: merge PR",
      oneLiner: "Join branch back into main",
      badge: "Step 6 on main · Combine timelines",
      badgeClass: "badge-info",
      title: "Merge (c5: merge PR — Combining your sandbox work into main)",
      command: "git checkout main && git merge feat/ai-experiment && git push",
      labelDecoded: "What 'c5: merge PR' means on the graph: Notice how the green sandbox curve rises back up and joins the blue 'main' line at dot 'c5' (Commit #5). That junction point is a 'Merge Commit'—where your approved PR changes officially become part of 'main'.",
      whatItIs: "Once your preview looks good, clicking 'Merge Pull Request' on GitHub (or running 'git merge') folds all the work from your green sandbox branch into your blue 'main' trunk.",
      whyItSavesYou: "Your 'main' timeline moves forward cleanly in tested, approved steps—and if anything unexpected happens, GitHub has a 1-click 'Revert' button to undo that merge."
    },
    {
      id: "git-vercel-live",
      stepNum: 7,
      lane: "main",
      octicon: "repo",
      word: "7. Vercel Live!",
      graphCodeLabel: "Production -> Vercel",
      oneLiner: "Auto-published to the internet",
      badge: "Step 7 on main · Live website",
      badgeClass: "badge-success",
      title: "Automatic Production Deploy (Production -> Vercel live!)",
      command: "https://deployed-eng-pipeline.vercel.app   # Live 20s after merge!",
      labelDecoded: "What 'main branch (Production -> Vercel)' and 'Vercel live!' mean: 'Production' (or 'prod') is the engineering word for the real live website that the public sees. Because Vercel watches your 'main' branch on GitHub, merging into 'main' automatically triggers a live production update.",
      whatItIs: "The moment your Merge lands on the blue 'main' branch on GitHub, Vercel detects the new commit, builds your updated site in the cloud, and swaps the live public URL to the new version with zero downtime.",
      whyItSavesYou: "You never have to manually drag files onto a web server—every merged improvement on 'main' goes live to the world automatically."
    }
  ]
};

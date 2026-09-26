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
      whatItIs: "Where you review a line-by-line highlight of everything that changed in your code files before you upload ('git push') your branch to GitHub.",
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
      title: "Push & open a Pull Request (PR review — The safety gate before going live)",
      command: "git push -u origin feat/ai-experiment   # Then open Pull Request on GitHub",
      labelDecoded: "Why there are two steps here ('git push' -> 'Pull Request'): First, 'git push' uploads your sandbox branch from your laptop to GitHub. Second, opening a 'Pull Request (PR)' on GitHub creates a review page proposing to pull your finished branch into 'main'.",
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
      oneLiner: "Squash & join into main",
      badge: "Step 6 on main · Combine timelines",
      badgeClass: "badge-info",
      title: "Merge or 'Squash & Merge' (c5: merge PR — Combining your sandbox work into main)",
      command: "git checkout main && git merge --squash feat/ai-experiment && git commit -m \"Ship feature\"",
      labelDecoded: "What 'Merge' vs. 'Squash & Merge' means: When you click 'Squash and merge' on a GitHub PR, Git takes all the messy little commits you made on your sandbox branch ('wip', 'fix typo', 'try again') and squashes them together into ONE clean commit dot ('c5') on 'main'!",
      whatItIs: "Once your preview link looks good, clicking 'Squash and merge' (or 'Merge pull request') on GitHub folds all the finished work from your green sandbox branch back into your blue 'main' trunk.",
      whyItSavesYou: "Your 'main' timeline stays super clean—one commit per finished feature—so if anything unexpected happens, you can undo the entire feature in one click."
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



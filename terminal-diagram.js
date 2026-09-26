// Deployed Eng Pipeline — Stop 4 Interactive Illustrated Terminal & Pop-Up Keyboard Diagram
// Shows an illustrated terminal window where commands are typed out live with their exact terminal responses,
// paired with an interactive pop-up keyboard deck where imaginary hands press keys (Tab, Up/Down arrows, Enter, Ctrl+C, Ctrl+L).
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var TERMINAL_SCENARIOS = [
    {
      id: "term-pwd",
      pillLabel: "1. Where am I? (pwd)",
      badge: "Step 1 · Check location",
      badgeClass: "badge-info",
      activeKeys: ["key-pwd", "key-enter"],
      leftHandText: "Left hand types 'p-w-d' on the home row",
      rightHandText: "Right pinky taps [Enter ↵] to run the command",
      typedFrames: ["p", "pw", "pwd"],
      promptSuffix: "pwd",
      keyPopBadge: "Enter ↵ pressed!",
      terminalOutput: [
        "/Users/lucy/deployed-eng-pipeline",
        "",
        "# Terminal response: You are inside your 'deployed-eng-pipeline' project folder."
      ],
      whatHappened: "When you open a fresh terminal window, it doesn't show folder icons—so your first move is typing 'pwd' (Print Working Directory) and pressing Enter ↵. The terminal replies with the exact folder path you are standing in."
    },
    {
      id: "term-tab",
      pillLabel: "2. Auto-complete (Tab ⇥)",
      badge: "Step 2 · Speed shortcut",
      badgeClass: "badge-success",
      activeKeys: ["key-tab", "key-enter"],
      leftHandText: "Left ring finger taps [Tab ⇥] after typing just 'cd dep'",
      rightHandText: "Right pinky taps [Enter ↵] once the full folder name pops in",
      typedFrames: ["cd d", "cd de", "cd dep", "cd deployed-eng-pipeline/"],
      promptSuffix: "cd deployed-eng-pipeline/",
      keyPopBadge: "Tab ⇥ auto-completed!",
      terminalOutput: [
        "lucy@macbook ~/deployed-eng-pipeline % ",
        "",
        "# Terminal response: 'cd dep' + [Tab ⇥] expanded to 'cd deployed-eng-pipeline/' automatically!"
      ],
      whatHappened: "Never type long folder or file names by hand! Type the first 2 or 3 letters ('cd dep') and tap Tab ⇥ with your left ring finger. The terminal finishes spelling the name for you—proving the folder exists and preventing typos."
    },
    {
      id: "term-ls-la",
      pillLabel: "3. See hidden files (ls -la)",
      badge: "Step 3 · X-ray folder view",
      badgeClass: "badge-info",
      activeKeys: ["key-ls", "key-enter"],
      leftHandText: "Hands type 'ls -la' (list all files in long detail)",
      rightHandText: "Right pinky taps [Enter ↵] to reveal hidden dot-files",
      typedFrames: ["ls", "ls -", "ls -l", "ls -la"],
      promptSuffix: "ls -la",
      keyPopBadge: "Enter ↵ pressed!",
      terminalOutput: [
        "drwxr-xr-x  12 lucy  staff   384 Sep 26 20:15 .",
        "drwxr-xr-x   5 lucy  staff   160 Sep 26 18:00 ..",
        "-rw-------   1 lucy  staff    64 Sep 26 19:10 .env          <-- Hidden secret API keys!",
        "drwxr-xr-x  13 lucy  staff   416 Sep 26 20:15 .git          <-- Hidden Git history!",
        "-rw-r--r--   1 lucy  staff  4210 Sep 26 20:15 index.html"
      ],
      whatHappened: "Mac Finder and Windows Explorer hide any file that starts with a dot (like '.env' or '.git'). Running 'ls -la' tells the terminal to list ALL files (-a) in a detailed table (-l) so nothing is hidden from you."
    },
    {
      id: "term-arrows",
      pillLabel: "4. Recall history (↑ / ↓ Arrows)",
      badge: "Step 4 · Time saver",
      badgeClass: "badge-secondary",
      activeKeys: ["key-up", "key-down"],
      leftHandText: "Left hand rests—no retyping needed!",
      rightHandText: "Right fingers tap [↑ Up] to recall older commands and [↓ Down] to move forward",
      typedFrames: ["ls -la", "cd deployed-eng-pipeline/", "git status && git diff"],
      promptSuffix: "git status && git diff",
      keyPopBadge: "↑ Up / ↓ Down tapped!",
      terminalOutput: [
        "# Tap [↑ Up] once  --> recalls: ls -la",
        "# Tap [↑ Up] twice --> recalls: git status && git diff",
        "# Tap [↓ Down]     --> steps forward again in your command history!"
      ],
      whatHappened: "You almost never need to retype a command you ran earlier. Tapping the ↑ Up Arrow key cycles backward through your past commands one by one; tapping ↓ Down Arrow moves forward again."
    },
    {
      id: "term-grep",
      pillLabel: "5. Search all code (grep -rn)",
      badge: "Step 5 · How AI finds code",
      badgeClass: "badge-info",
      activeKeys: ["key-grep", "key-enter"],
      leftHandText: "Hands type 'grep -rn \"APP_BUILD\" .'",
      rightHandText: "Right pinky taps [Enter ↵] to scan every file in milliseconds",
      typedFrames: ["grep -rn", "grep -rn \"APP_BUILD\"", "grep -rn \"APP_BUILD\" ."],
      promptSuffix: "grep -rn \"APP_BUILD\" .",
      keyPopBadge: "Enter ↵ pressed!",
      terminalOutput: [
        "./diagnostics-theme.js:4:var APP_BUILD = \"2026-09-26g\";",
        "./diagnostics-theme.js:10:    if (last && last !== APP_BUILD) {",
        "",
        "# Found 2 matches across all files (with exact file path & line number!)."
      ],
      whatHappened: "When you see an AI coding agent run 'grep -rn', it is searching inside every file in your folder (-r) and printing the exact line number (-n) where that word lives so it knows which line to edit."
    },
    {
      id: "term-ctrl-c",
      pillLabel: "6. Emergency brake (Ctrl + C)",
      badge: "Step 6 · Stop a running command",
      badgeClass: "badge-success",
      activeKeys: ["key-ctrl", "key-c"],
      leftHandText: "Left pinky holds [Ctrl] while left index finger taps [C]",
      rightHandText: "Stops the running server immediately and gives your prompt back!",
      typedFrames: ["python3 -m http.server 8420", "python3 -m http.server 8420   ^C"],
      promptSuffix: "python3 -m http.server 8420   ^C",
      keyPopBadge: "Ctrl + C pressed!",
      terminalOutput: [
        "Serving HTTP on 0.0.0.0 port 8420 (http://0.0.0.0:8420/) ...",
        "^C",
        "KeyboardInterrupt received: shutting down server safely.",
        "lucy@macbook ~/deployed-eng-pipeline %   <-- Your prompt is back and ready!"
      ],
      whatHappened: "In a terminal, Ctrl + C does NOT mean Copy! It is the universal Emergency Brake (Cancel). Anytime a local server is running or an AI command is stuck, pressing Ctrl + C safely stops it and returns your typing prompt."
    },
    {
      id: "term-ctrl-l",
      pillLabel: "7. Clear screen (Ctrl + L)",
      badge: "Step 7 · Clean workspace",
      badgeClass: "badge-secondary",
      activeKeys: ["key-ctrl", "key-l"],
      leftHandText: "Left pinky holds [Ctrl] while right ring finger taps [L]",
      rightHandText: "Wipes old log clutter off the window (files & ↑ history stay safe!)",
      typedFrames: ["clear   # (or press Ctrl + L)"],
      promptSuffix: "clear   # (or press Ctrl + L)",
      keyPopBadge: "Ctrl + L pressed!",
      terminalOutput: [
        "lucy@macbook ~/deployed-eng-pipeline % ",
        "",
        "# Screen wiped clean! Your cursor is back at the very top of a fresh window."
      ],
      whatHappened: "When your terminal fills up with hundreds of lines of logs and gets overwhelming to read, pressing Ctrl + L (or typing 'clear') gives you a fresh blank screen without deleting any files or losing your ↑ Up Arrow history."
    }
  ];

  var KEYBOARD_LAYOUT = [
    [
      { id: "key-tab", topLabel: "Tab ⇥", subLabel: "Auto-complete", triggerScenario: "term-tab", wide: true },
      { id: "key-pwd", topLabel: "p w d", subLabel: "Where am I?", triggerScenario: "term-pwd" },
      { id: "key-ls", topLabel: "ls -la", subLabel: "List all files", triggerScenario: "term-ls-la" },
      { id: "key-grep", topLabel: "grep -rn", subLabel: "Search code", triggerScenario: "term-grep" },
      { id: "key-enter", topLabel: "Enter ↵", subLabel: "Run command", triggerScenario: "term-pwd", wide: true }
    ],
    [
      { id: "key-ctrl", topLabel: "Ctrl ^", subLabel: "Hold modifier", triggerScenario: "term-ctrl-c", wide: true },
      { id: "key-c", topLabel: "C", subLabel: "+ Ctrl = Stop!", triggerScenario: "term-ctrl-c" },
      { id: "key-l", topLabel: "L", subLabel: "+ Ctrl = Clear", triggerScenario: "term-ctrl-l" },
      { id: "key-up", topLabel: "↑ Up", subLabel: "Previous cmd", triggerScenario: "term-arrows" },
      { id: "key-down", topLabel: "↓ Down", subLabel: "Next cmd", triggerScenario: "term-arrows" }
    ]
  ];

  var activeTypingTimer = null;

  function renderTerminalInteractiveDiagram(container) {
    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var selectedIdx = 0;
    var scenarioBtns = [];
    var keycapMap = {};

    // Header Row
    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-success";
    badge.textContent = "Interactive terminal & pop-up keyboard — click any command or keycap below";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Watch commands type out, see which keys your hands press, and read the terminal response";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);

    var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "nav-btn nav-btn-primary";
    var nextIcon = document.createElement("span");
    nextIcon.className = "material-symbols-outlined btn-icon-sm";
    nextIcon.textContent = "play_arrow";
    var nextLabel = document.createElement("span");
    nextLabel.textContent = "Next terminal demo (1/" + TERMINAL_SCENARIOS.length + ")";
    nextBtn.appendChild(nextIcon);
    nextBtn.appendChild(nextLabel);

    headerRow.appendChild(titleGroup);
    headerRow.appendChild(nextBtn);
    card.appendChild(headerRow);

    // Scenario Selector Pills
    var pillBar = document.createElement("div");
    pillBar.className = "diagram-pill-cluster";
    TERMINAL_SCENARIOS.forEach(function (scen, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "diagram-label-pill" + (idx === 0 ? " active" : "");
      btn.setAttribute("data-scen-id", scen.id);
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined diagram-pill-icon";
      ic.textContent = "terminal";
      var txt = document.createElement("span");
      txt.textContent = scen.pillLabel;
      btn.appendChild(ic);
      btn.appendChild(txt);
      btn.addEventListener("click", function () {
        selectScenario(idx, true);
      });
      scenarioBtns.push(btn);
      pillBar.appendChild(btn);
    });
    card.appendChild(pillBar);

    // Main Side-by-Side Illustrated Stage: [Left: Illustrated Terminal Window] + [Right: Pop-Up Keyboard & Imaginary Hands]
    var stageGrid = document.createElement("div");
    stageGrid.className = "terminal-keyboard-stage";

    // LEFT COLUMN: ILLUSTRATED TERMINAL WINDOW
    var termWindow = document.createElement("div");
    termWindow.className = "term-illustration-window";

    var termTopBar = document.createElement("div");
    termTopBar.className = "mini-window-bar";
    var dots = document.createElement("div");
    dots.className = "mini-window-dots";
    ["mini-dot-primary", "mini-dot-tertiary", "mini-dot"].forEach(function (cls) {
      var d = document.createElement("span");
      d.className = "mini-dot " + cls;
      dots.appendChild(d);
    });
    var termTitle = document.createElement("span");
    termTitle.className = "term-window-title";
    termTitle.textContent = "lucy@macbook: ~/deployed-eng-pipeline (zsh)";
    var termPopStatus = document.createElement("span");
    termPopStatus.className = "badge badge-info";
    termTopBar.appendChild(dots);
    termTopBar.appendChild(termTitle);
    termTopBar.appendChild(termPopStatus);
    termWindow.appendChild(termTopBar);

    var termScreen = document.createElement("div");
    termScreen.className = "term-screen-body";

    var promptLine = document.createElement("div");
    promptLine.className = "term-prompt-line";
    var promptPrefix = document.createElement("span");
    promptPrefix.className = "term-prompt-prefix";
    promptPrefix.textContent = "lucy@macbook ~/deployed-eng-pipeline % ";
    var typedCmdSpan = document.createElement("span");
    typedCmdSpan.className = "term-typed-command";
    var cursorSpan = document.createElement("span");
    cursorSpan.className = "term-blinking-cursor";
    cursorSpan.textContent = "▋";
    promptLine.appendChild(promptPrefix);
    promptLine.appendChild(typedCmdSpan);
    promptLine.appendChild(cursorSpan);

    var outputBlock = document.createElement("div");
    outputBlock.className = "term-output-block";

    termScreen.appendChild(promptLine);
    termScreen.appendChild(outputBlock);
    termWindow.appendChild(termScreen);
    stageGrid.appendChild(termWindow);

    // RIGHT COLUMN: POP-UP KEYBOARD DECK & IMAGINARY HANDS
    var kbPanel = document.createElement("div");
    kbPanel.className = "keyboard-illustration-panel";

    var kbHeader = document.createElement("div");
    kbHeader.className = "mini-window-bar";
    var kbTitle = document.createElement("strong");
    kbTitle.className = "diagram-node-title";
    kbTitle.textContent = "Your keyboard & imaginary hands (click any key!)";
    var kbBadge = document.createElement("span");
    kbBadge.className = "badge badge-secondary";
    kbBadge.textContent = "Pop-up keys";
    kbHeader.appendChild(kbTitle);
    kbHeader.appendChild(kbBadge);
    kbPanel.appendChild(kbHeader);

    // Imaginary Hands Pop-up Callout Cards (Left Hand + Right Hand)
    var handsRow = document.createElement("div");
    handsRow.className = "hands-popup-row";

    var leftHandCard = document.createElement("div");
    leftHandCard.className = "hand-guide-pill";
    var lhIcon = document.createElement("span");
    lhIcon.className = "material-symbols-outlined hand-guide-icon";
    lhIcon.textContent = "back_hand";
    var lhTextWrap = document.createElement("div");
    var lhTitle = document.createElement("strong");
    lhTitle.className = "hand-guide-label";
    lhTitle.textContent = "Left hand";
    var lhBody = document.createElement("p");
    lhBody.className = "resource-desc";
    lhTextWrap.appendChild(lhTitle);
    lhTextWrap.appendChild(lhBody);
    leftHandCard.appendChild(lhIcon);
    leftHandCard.appendChild(lhTextWrap);

    var rightHandCard = document.createElement("div");
    rightHandCard.className = "hand-guide-pill";
    var rhIcon = document.createElement("span");
    rhIcon.className = "material-symbols-outlined hand-guide-icon";
    rhIcon.textContent = "pan_tool_alt";
    var rhTextWrap = document.createElement("div");
    var rhTitle = document.createElement("strong");
    rhTitle.className = "hand-guide-label";
    rhTitle.textContent = "Right hand";
    var rhBody = document.createElement("p");
    rhBody.className = "resource-desc";
    rhTextWrap.appendChild(rhTitle);
    rhTextWrap.appendChild(rhBody);
    rightHandCard.appendChild(rhIcon);
    rightHandCard.appendChild(rhTextWrap);

    handsRow.appendChild(leftHandCard);
    handsRow.appendChild(rightHandCard);
    kbPanel.appendChild(handsRow);

    // Physical Pop-Up Keycaps Grid
    var kbRowsWrap = document.createElement("div");
    kbRowsWrap.className = "keyboard-rows-wrap";

    KEYBOARD_LAYOUT.forEach(function (row) {
      var rEl = document.createElement("div");
      rEl.className = "keyboard-row";
      row.forEach(function (kDef) {
        var kBtn = document.createElement("button");
        kBtn.type = "button";
        kBtn.className = "keycap-btn" + (kDef.wide ? " keycap-wide" : "");
        kBtn.setAttribute("data-key-id", kDef.id);

        // Floating imaginary finger press badge that pops up when active
        var fingerPop = document.createElement("span");
        fingerPop.className = "keycap-finger-pop";
        var fIcon = document.createElement("span");
        fIcon.className = "material-symbols-outlined keycap-finger-icon";
        fIcon.textContent = "touch_app";
        var fTxt = document.createElement("span");
        fTxt.textContent = "Press!";
        fingerPop.appendChild(fIcon);
        fingerPop.appendChild(fTxt);

        var kTop = document.createElement("strong");
        kTop.className = "keycap-main-label";
        kTop.textContent = kDef.topLabel;

        var kSub = document.createElement("span");
        kSub.className = "keycap-sub-label";
        kSub.textContent = kDef.subLabel;

        kBtn.appendChild(fingerPop);
        kBtn.appendChild(kTop);
        kBtn.appendChild(kSub);

        kBtn.addEventListener("click", function () {
          var targetIdx = 0;
          TERMINAL_SCENARIOS.forEach(function (s, idx) {
            if (s.id === kDef.triggerScenario) targetIdx = idx;
          });
          selectScenario(targetIdx, true);
        });

        keycapMap[kDef.id] = kBtn;
        rEl.appendChild(kBtn);
      });
      kbRowsWrap.appendChild(rEl);
    });

    kbPanel.appendChild(kbRowsWrap);
    stageGrid.appendChild(kbPanel);
    card.appendChild(stageGrid);

    function selectScenario(idx, isUserClick) {
      selectedIdx = idx;
      var scen = TERMINAL_SCENARIOS[selectedIdx];
      nextLabel.textContent = "Next terminal demo (" + (selectedIdx + 1) + "/" + TERMINAL_SCENARIOS.length + ")";

      scenarioBtns.forEach(function (b, i) {
        if (i === selectedIdx) b.classList.add("active");
        else b.classList.remove("active");
      });

      // Pop up the active keycaps and show the imaginary finger press badge!
      Object.keys(keycapMap).forEach(function (kId) {
        var btn = keycapMap[kId];
        if (scen.activeKeys.indexOf(kId) !== -1) {
          btn.classList.add("popped");
        } else {
          btn.classList.remove("popped");
        }
      });

      lhBody.textContent = scen.leftHandText;
      rhBody.textContent = scen.rightHandText;
      termPopStatus.textContent = scen.keyPopBadge;

      if (isUserClick && window.PipelineAgent && typeof window.PipelineAgent.showInspector === "function") {
        window.PipelineAgent.showInspector(
          function (inspectorEl) {
            var topRow = document.createElement("div");
            topRow.className = "resource-title-row";
            var b = document.createElement("span");
            b.className = "badge badge-info";
            b.textContent = scen.keyPopBadge;
            topRow.appendChild(b);
            inspectorEl.appendChild(topRow);

            var h4 = document.createElement("h4");
            h4.textContent = scen.pillLabel;
            inspectorEl.appendChild(h4);

            var pWhat = document.createElement("p");
            pWhat.className = "resource-desc";
            pWhat.textContent = scen.whatHappened;
            inspectorEl.appendChild(pWhat);

            var handsBox = document.createElement("div");
            handsBox.className = "nested-card";
            var lhP = document.createElement("p");
            lhP.className = "resource-desc";
            lhP.textContent = "Left hand: " + scen.leftHandText;
            var rhP = document.createElement("p");
            rhP.className = "resource-desc";
            rhP.textContent = "Right hand: " + scen.rightHandText;
            handsBox.appendChild(lhP);
            handsBox.appendChild(rhP);
            inspectorEl.appendChild(handsBox);

            var cmdBox = document.createElement("div");
            cmdBox.className = "vocab-example-box";
            cmdBox.textContent = scen.promptSuffix;
            inspectorEl.appendChild(cmdBox);
          },
          {
            autoOpen: true,
            pulse: true,
            itemTitle: scen.pillLabel
          }
        );
      }

      // Animate typing the command frames into the terminal screen
      if (activeTypingTimer) {
        clearInterval(activeTypingTimer);
        activeTypingTimer = null;
      }
      var frames = scen.typedFrames || [scen.promptSuffix];
      var frameIdx = 0;
      typedCmdSpan.textContent = frames[0] || "";
      outputBlock.replaceChildren();

      activeTypingTimer = setInterval(function () {
        frameIdx += 1;
        if (frameIdx < frames.length) {
          typedCmdSpan.textContent = frames[frameIdx];
        } else {
          clearInterval(activeTypingTimer);
          activeTypingTimer = null;
          typedCmdSpan.textContent = scen.promptSuffix;
          scen.terminalOutput.forEach(function (lineStr) {
            var lineDiv = document.createElement("div");
            lineDiv.className = lineStr.indexOf("#") === 0 ? "term-output-comment" : "term-output-line";
            lineDiv.textContent = lineStr || " ";
            outputBlock.appendChild(lineDiv);
          });
        }
      }, 180);
    }

    nextBtn.addEventListener("click", function () {
      selectScenario((selectedIdx + 1) % TERMINAL_SCENARIOS.length, true);
    });

    selectScenario(0, false);
    renderPathAnatomyCard(container);
    container.appendChild(card);
  }

  var PATH_SEGMENTS = [
    {
      id: "seg-prompt",
      tokenText: "lucy@macbook",
      dividerAfter: ":",
      roleLabel: "1. Who & computer",
      colorClass: "badge-neutral",
      title: "Prompt prefix: Who you are & which computer you're on (lucy@macbook)",
      comparison: "Identity vs. Location: Before the colon (:) is WHO is typing ('lucy') and WHICH computer is listening ('macbook'—either your laptop or a remote cloud server). Everything after the colon is WHERE you are standing.",
      whatItDoes: "Lets you see at a glance whether your terminal is running commands on your own laptop or on a remote production server.",
      howToGetThere: "whoami && hostname   # Prints your username and computer name"
    },
    {
      id: "seg-root",
      tokenText: "/",
      dividerAfter: "",
      roleLabel: "2. Root drive",
      colorClass: "badge-warning",
      title: "Root slash (/): The bottom-most trunk of the whole computer",
      comparison: "Leading '/' vs. Middle '/': A slash '/' at the very start of a path means the Root of the entire hard drive. Slashes in the middle of a path simply mean 'step inside the next folder'.",
      whatItDoes: "Anchors an 'Absolute Path'—a full street address starting from the very bottom of your computer.",
      howToGetThere: "cd / && ls   # Lists top-level system folders (you rarely edit here!)"
    },
    {
      id: "seg-home",
      tokenText: "Users/lucy (~)",
      dividerAfter: "/",
      roleLabel: "3. Home folder (~)",
      colorClass: "badge-info",
      title: "Your Home folder (/Users/lucy or the '~' shortcut)",
      comparison: "Full path vs. '~' shortcut: Instead of typing '/Users/lucy' every time, you can type the squiggly tilde key '~'. Both point to your personal home folder (which holds Desktop, Downloads, and your code).",
      whatItDoes: "Gives you a personal folder where you have full permission to create folders, projects, and settings files.",
      howToGetThere: "cd ~   # (Or just type 'cd' + Enter from anywhere to teleport home!)"
    },
    {
      id: "seg-workspace",
      tokenText: "workspace",
      dividerAfter: "/",
      roleLabel: "4. Workspace",
      colorClass: "badge-secondary",
      title: "Workspace: Your coding workbench that holds your projects",
      comparison: "Workspace vs. Folder vs. File: A 'Workspace' is the overarching workbench (a parent folder like '~/workspace', a VS Code/Cursor window session, or a cloud CitC workspace) where you keep your active coding projects and editor settings.",
      whatItDoes: "Keeps all your coding projects in one clean, easy-to-find place instead of scattering them across Downloads and Desktop.",
      howToGetThere: "mkdir -p ~/workspace && cd ~/workspace   # Creates & enters your workbench"
    },
    {
      id: "seg-repo",
      tokenText: "deployed-eng-pipeline",
      dividerAfter: "/",
      roleLabel: "5. Project repo folder",
      colorClass: "badge-success",
      title: "Project folder (Git Repository / 'Repo'): One specific app",
      comparison: "Project Repo vs. Workspace: While your Workspace is the whole workbench, 'deployed-eng-pipeline' is the folder for ONE specific app. Because it has a hidden '.git' folder inside it, engineers call this folder a 'Repository' (or 'Repo').",
      whatItDoes: "Holds all the code, configuration, and Git commit checkpoints for one website or application.",
      howToGetThere: "cd ~/workspace/deployed-eng-pipeline && pwd"
    },
    {
      id: "seg-subfolder",
      tokenText: "src",
      dividerAfter: "/",
      roleLabel: "6. Subfolder (Directory)",
      colorClass: "badge-warning",
      title: "Subfolder / Directory (src): An organizer drawer inside your project",
      comparison: "Directory vs. Folder: 'Directory' is 100% the exact same thing as a 'Folder'! Engineers say 'Directory' in the terminal (which is why 'cd' stands for Change Directory and 'mkdir' stands for Make Directory).",
      whatItDoes: "Groups related code files together inside your project. Tip: '.' means 'this current folder' and '..' means 'one folder up'.",
      howToGetThere: "cd src   # Step inside 'src'  |  cd ..   # Step one level back up!"
    },
    {
      id: "seg-filename",
      tokenText: "app",
      dividerAfter: "",
      roleLabel: "7. File name",
      colorClass: "badge-info",
      title: "File (app): A single plain-text code document",
      comparison: "Folder vs. File: A Folder (Directory) is a container box you can walk inside with 'cd'. A File ('app.js') is a single document holding lines of text/code—if you try 'cd app.js', the terminal will say 'Not a directory'!",
      whatItDoes: "Stores the actual instructions, HTML, styles, or logic that your editor and computer read.",
      howToGetThere: "cat src/app.js   # Prints the file's contents  |  touch src/new.js   # Creates a file"
    },
    {
      id: "seg-ext",
      tokenText: ".js",
      dividerAfter: "",
      roleLabel: "8. File extension",
      colorClass: "badge-danger",
      title: "File extension (.js): The language tag at the end of a file",
      comparison: "Why the dot matters: The ending after the dot tells your computer and AI agent which language is inside: '.js' (JavaScript), '.py' (Python), '.html' (Webpage), '.css' (Styles), '.md' (Markdown notes), '.json' (Data).",
      whatItDoes: "Turns on the right color highlighting in your code editor and tells the computer which tool should run the file.",
      howToGetThere: "find . -name \"*.js\"   # Finds every JavaScript file in your folder"
    }
  ];

  function renderPathAnatomyCard(container) {
    var pathCard = document.createElement("div");
    pathCard.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive path anatomy — click any colored piece of the path below";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Workspace vs. folder (directory) vs. file: Reading a terminal path";
    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent = "Every terminal command uses paths like this one. Click any colored piece below to see what it is, how a workspace differs from a folder or a file, and the exact command to get there.";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    titleGroup.appendChild(subP);
    headerRow.appendChild(titleGroup);
    pathCard.appendChild(headerRow);

    var selectedSeg = PATH_SEGMENTS[3]; // Default to "4. Workspace" so Workspace vs Folder vs File is immediately visible!
    var segBtns = [];

    var pathBar = document.createElement("div");
    pathBar.className = "path-anatomy-bar";

    PATH_SEGMENTS.forEach(function (seg) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "path-segment-btn " + seg.colorClass + (seg.id === selectedSeg.id ? " active" : "");
      btn.setAttribute("data-seg-id", seg.id);

      var tokenSpan = document.createElement("code");
      tokenSpan.className = "path-segment-code";
      tokenSpan.textContent = seg.tokenText;

      var roleSpan = document.createElement("span");
      roleSpan.className = "path-segment-role";
      roleSpan.textContent = seg.roleLabel;

      btn.appendChild(tokenSpan);
      btn.appendChild(roleSpan);

      btn.addEventListener("click", function () {
        selectedSeg = seg;
        segBtns.forEach(function (other) {
          if (other.getAttribute("data-seg-id") === selectedSeg.id) other.classList.add("active");
          else other.classList.remove("active");
        });
        showPathInspector(selectedSeg, true);
      });

      segBtns.push(btn);
      pathBar.appendChild(btn);

      if (seg.dividerAfter) {
        var divSpan = document.createElement("span");
        divSpan.className = "path-slash-divider";
        divSpan.textContent = seg.dividerAfter;
        pathBar.appendChild(divSpan);
      }
    });

    pathCard.appendChild(pathBar);
    showPathInspector(selectedSeg, false);
    container.appendChild(pathCard);
  }

  function showPathInspector(seg, isUserClick) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        updatePathInspector(inspectorEl, seg);
      },
      {
        autoOpen: Boolean(isUserClick),
        pulse: Boolean(isUserClick),
        itemTitle: seg.roleLabel + " (" + seg.tokenText + ")"
      }
    );
  }

  function updatePathInspector(inspectorEl, seg) {
    inspectorEl.replaceChildren();

    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badge = document.createElement("span");
    badge.className = "badge " + seg.colorClass;
    badge.textContent = seg.roleLabel;
    var codePill = document.createElement("code");
    codePill.className = "vocab-cmd-pill";
    codePill.textContent = "Path piece: " + seg.tokenText;
    topRow.appendChild(badge);
    topRow.appendChild(codePill);

    var h4 = document.createElement("h4");
    h4.textContent = seg.title;

    var compBox = document.createElement("div");
    compBox.className = "nested-card";
    var compBody = document.createElement("p");
    compBody.className = "resource-desc";
    compBody.textContent = seg.comparison;
    compBox.appendChild(compBody);

    var whatP = document.createElement("p");
    whatP.className = "resource-desc";
    whatP.textContent = "What it does: " + seg.whatItDoes;

    var cmdBox = document.createElement("div");
    cmdBox.className = "vocab-example-box";
    cmdBox.textContent = "How to get to it / use it:  " + seg.howToGetThere;

    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);
    inspectorEl.appendChild(compBox);
    inspectorEl.appendChild(whatP);
    inspectorEl.appendChild(cmdBox);
  }

  window.renderTerminalInteractiveDiagram = renderTerminalInteractiveDiagram;
})();

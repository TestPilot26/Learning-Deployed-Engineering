// Deployed Eng Pipeline — Stop 4 Interactive Illustrated Terminal & Pop-Up Keyboard Diagram
// Shows an illustrated terminal window where commands are typed out live with their exact terminal responses,
// paired with an interactive pop-up keyboard deck where imaginary hands press keys (Tab, Up/Down arrows, Enter, Ctrl+C, Ctrl+L).
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var GUIDED_MISSIONS = [
    { id: "mission-tab", pillLabel: "1. Try Tab ⇥ (Auto-complete)", setupDir: "~/workspace/my-app", prefillCmd: "cd comp", glowKey: "key-tab",
      instruction: "We typed 'cd comp' into the live prompt below. Press [Tab ⇥] on your keyboard (or click the glowing [Tab ⇥] key on the right) to watch it finish spelling 'cd components/' for you!" },
    { id: "mission-history", pillLabel: "2. Try ↑ / ↓ Arrows (Command history)", setupDir: "~/workspace/my-app", prefillCmd: "", glowKey: "key-up",
      instruction: "Don't type anything! Press your [↑ Up Arrow] key (or click [↑ Up] on the right) 2 or 3 times to cycle backward through commands you ran earlier, then press [Enter ↵]." },
    { id: "mission-ctrl-c", pillLabel: "3. Try Ctrl + C (Stop running server)", setupDir: "~/workspace/my-app", prefillCmd: "", startServer: true, glowKey: "key-ctrl-c",
      instruction: "A local server (npm run dev) is running and holding the terminal hostage! Press [Ctrl + C] on your keyboard (or click [Ctrl + C] on the right) to stop the server and get your prompt back." },
    { id: "mission-parent", pillLabel: "4. Try cd .. (Step up to parent directory)", setupDir: "~/workspace/my-app/components", prefillCmd: "cd ..", glowKey: "key-enter",
      instruction: "You are standing inside the child subfolder '~/workspace/my-app/components'. Press [Enter ↵] to run 'cd ..' and watch your prompt step one level up into the parent directory ('~/workspace/my-app')!" },
    { id: "mission-grep", pillLabel: "5. Try grep -rn (Search inside files)", setupDir: "~/workspace/my-app", prefillCmd: "grep -rn \"Button\" .", glowKey: "key-enter",
      instruction: "We loaded 'grep -rn \"Button\" .' into the prompt. Press [Enter ↵] to search every file in your folder for the word 'Button' and print exact line numbers." }
  ];

  var INTERACTIVE_KEYS = [
    { id: "key-tab", keyLabel: "Tab ⇥", actionTitle: "Auto-complete folder or file name",
      whatItDoes: "Finishes spelling a half-typed folder or file name (e.g. 'cd comp' -> 'cd components/') so you don't make typos.",
      handNote: "Left ring finger taps [Tab ⇥] after typing 2–3 letters" },
    { id: "key-enter", keyLabel: "Enter ↵", actionTitle: "Run the command on the prompt line",
      whatItDoes: "Sends whatever command is on your prompt line to the computer and prints the terminal's response below.",
      handNote: "Right pinky taps [Enter ↵] to execute the command" },
    { id: "key-up", keyLabel: "↑ Up Arrow", actionTitle: "Recall previous command from history",
      whatItDoes: "Steps backward through commands you ran earlier so you never have to retype long commands by hand.",
      handNote: "Right fingers tap [↑ Up] to recall older commands" },
    { id: "key-down", keyLabel: "↓ Down Arrow", actionTitle: "Step forward in command history",
      whatItDoes: "Steps forward again if you pressed ↑ Up Arrow too many times.",
      handNote: "Right fingers tap [↓ Down] to move forward in history" },
    { id: "key-ctrl-c", keyLabel: "Ctrl + C", actionTitle: "Emergency brake (Stop server / cancel)",
      whatItDoes: "Immediately stops a running server (like 'npm run dev') or cancels a half-typed line and gives your prompt back. (Not Copy!)",
      handNote: "Left pinky holds [Ctrl] + left index taps [C]" },
    { id: "key-ctrl-l", keyLabel: "Ctrl + L", actionTitle: "Clear screen clutter (Keep history)",
      whatItDoes: "Wipes old output lines off the terminal window and brings your prompt to the top without deleting files or history.",
      handNote: "Left pinky holds [Ctrl] + right ring finger taps [L]" }
  ];

  var TAB_COMPLETION_PAIRS = [
    { partial: "cd comp", completed: "cd components/", note: "Expanded 'comp' -> 'components/' folder!" },
    { partial: "cd s", completed: "cd src/", note: "Expanded 's' -> 'src/' subfolder!" },
    { partial: "cat pack", completed: "cat package.json", note: "Expanded 'pack' -> 'package.json' file!" },
    { partial: "grep -rn \"Button\" s", completed: "grep -rn \"Button\" src/", note: "Expanded 's' -> 'src/' folder for grep!" }
  ];

  var activeServerTimer = null;

  function renderTerminalInteractiveDiagram(container) {
    if (activeServerTimer) {
      clearInterval(activeServerTimer);
      activeServerTimer = null;
    }

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    // Sandbox State
    var currentDir = "~/workspace/my-app";
    var cmdHistory = [
      "pwd",
      "ls -la",
      "cd components/",
      "cd ..",
      "grep -rn \"Button\" ."
    ];
    var historyCursor = cmdHistory.length;
    var tabCycleIdx = 0;
    var isServerRunning = false;
    var serverTickCount = 0;
    var keyBtnsMap = {};
    var missionBtns = [];

    // Header Row
    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-success";
    badge.textContent = "Interactive terminal & keyboard simulator — why your mouse doesn't work here (and which 6 keys replace it)";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How the terminal & keyboard buttons work together (2-step live simulator)";
    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent = "In a normal app you click folders and buttons with your mouse. In a terminal, your mouse cannot click folders or stop a frozen program—you use 6 physical keyboard keys instead. Use Step 1 and Step 2 below to see what each button illustrates:";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    titleGroup.appendChild(subP);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    // 2-Step Visual Explainer Grid: What the Scenario Buttons vs. Key Buttons Do
    var howtoGrid = document.createElement("div");
    howtoGrid.className = "term-howto-steps-grid";

    var step1Card = document.createElement("div");
    step1Card.className = "term-howto-step-card";
    var s1Badge = document.createElement("span");
    s1Badge.className = "badge badge-info";
    s1Badge.textContent = "Step 1 · The 5 scenario pills below (Set up a real-world situation)";
    var s1Text = document.createElement("p");
    s1Text.className = "resource-desc";
    s1Text.textContent = "Clicking one of the 5 numbered pills loads a common situation into the black terminal screen (like a half-typed folder name 'cd comp', or a stuck local server holding your terminal hostage) and highlights the exact keyboard key that solves it.";
    step1Card.appendChild(s1Badge);
    step1Card.appendChild(s1Text);

    var step2Card = document.createElement("div");
    step2Card.className = "term-howto-step-card";
    var s2Badge = document.createElement("span");
    s2Badge.className = "badge badge-secondary";
    s2Badge.textContent = "Step 2 · The 6 physical keyboard key cards (Simulate pressing the key)";
    var s2Text = document.createElement("p");
    s2Text.className = "resource-desc";
    s2Text.textContent = "Below the terminal screen are 6 physical keyboard keys (Tab ⇥, Enter ↵, ↑ Up, ↓ Down, Ctrl+C, Ctrl+L). Click any key card—or press that real key on your laptop keyboard—to watch the terminal react live and read what your hands just did.";
    step2Card.appendChild(s2Badge);
    step2Card.appendChild(s2Text);

    howtoGrid.appendChild(step1Card);
    howtoGrid.appendChild(step2Card);
    card.appendChild(howtoGrid);

    // Step 1: Guided Scenario Bar
    var missionBar = document.createElement("div");
    missionBar.className = "diagram-pill-cluster";
    GUIDED_MISSIONS.forEach(function (m, idx) {
      var mBtn = document.createElement("button");
      mBtn.type = "button";
      mBtn.className = "diagram-label-pill" + (idx === 0 ? " active" : "");
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined diagram-pill-icon";
      ic.textContent = "play_circle";
      var txt = document.createElement("span");
      txt.textContent = m.pillLabel;
      mBtn.appendChild(ic);
      mBtn.appendChild(txt);
      mBtn.addEventListener("click", function () {
        loadMission(idx);
      });
      missionBtns.push(mBtn);
      missionBar.appendChild(mBtn);
    });
    card.appendChild(missionBar);

    // Mission Instruction Callout Banner
    var missionBanner = document.createElement("div");
    missionBanner.className = "term-mission-banner";
    var mbIcon = document.createElement("span");
    mbIcon.className = "material-symbols-outlined term-mission-icon";
    mbIcon.textContent = "lightbulb";
    var mbText = document.createElement("span");
    missionBanner.appendChild(mbIcon);
    missionBanner.appendChild(mbText);
    card.appendChild(missionBanner);

    // 2. Main Stacked Stage: [Top: Full-Width Live Terminal] + [Bottom: 6 Physical Keyboard Key Cards]
    var stageGrid = document.createElement("div");
    stageGrid.className = "terminal-keyboard-stage";

    // LEFT COLUMN: LIVE TERMINAL WINDOW
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
    var termStatusBadge = document.createElement("span");
    termStatusBadge.className = "badge badge-info";
    termStatusBadge.textContent = "Interactive prompt ready";
    termTopBar.appendChild(dots);
    termTopBar.appendChild(termTitle);
    termTopBar.appendChild(termStatusBadge);
    termWindow.appendChild(termTopBar);

    var termScreen = document.createElement("div");
    termScreen.className = "term-screen-body";

    var logContainer = document.createElement("div");
    logContainer.className = "term-output-block";
    termScreen.appendChild(logContainer);

    // Live Input Prompt Row inside the terminal screen
    var livePromptRow = document.createElement("div");
    livePromptRow.className = "term-live-input-row";
    var promptPrefixSpan = document.createElement("span");
    promptPrefixSpan.className = "term-prompt-prefix";
    var cmdInput = document.createElement("input");
    cmdInput.type = "text";
    cmdInput.className = "term-live-input";
    cmdInput.setAttribute("aria-label", "Interactive terminal command prompt");
    cmdInput.setAttribute("autocomplete", "off");
    cmdInput.setAttribute("spellcheck", "false");
    cmdInput.placeholder = "Type a command or press Tab, ↑, ↓, Enter, Ctrl+C...";
    livePromptRow.appendChild(promptPrefixSpan);
    livePromptRow.appendChild(cmdInput);
    termScreen.appendChild(livePromptRow);

    termWindow.appendChild(termScreen);

    // Live Key Feedback Box at the bottom of the terminal window
    var feedbackBox = document.createElement("div");
    feedbackBox.className = "term-key-feedback-box";
    var fbBadge = document.createElement("span");
    fbBadge.className = "badge badge-success";
    fbBadge.textContent = "What your last key press did";
    var fbText = document.createElement("p");
    fbText.className = "resource-desc";
    fbText.textContent = "Click any glowing key on the right (or press it on your physical keyboard while inside the terminal box) to see what it does live!";
    feedbackBox.appendChild(fbBadge);
    feedbackBox.appendChild(fbText);
    termWindow.appendChild(feedbackBox);

    stageGrid.appendChild(termWindow);

    // RIGHT COLUMN: CLICK-TO-TEST KEYBOARD KEYS
    var kbPanel = document.createElement("div");
    kbPanel.className = "keyboard-illustration-panel";

    var kbHeader = document.createElement("div");
    kbHeader.className = "mini-window-bar";
    var kbTitle = document.createElement("strong");
    kbTitle.className = "diagram-node-title";
    kbTitle.textContent = "Click any key below (or press it on your keyboard) to test it live";
    var kbBadge = document.createElement("span");
    kbBadge.className = "badge badge-secondary";
    kbBadge.textContent = "6 essential keys";
    kbHeader.appendChild(kbTitle);
    kbHeader.appendChild(kbBadge);
    kbPanel.appendChild(kbHeader);

    var keysGrid = document.createElement("div");
    keysGrid.className = "testable-keys-grid";

    INTERACTIVE_KEYS.forEach(function (kDef) {
      var kCard = document.createElement("button");
      kCard.type = "button";
      kCard.className = "testable-key-card";
      kCard.setAttribute("data-key-id", kDef.id);

      var topLine = document.createElement("div");
      topLine.className = "testable-key-top";

      var capPill = document.createElement("kbd");
      capPill.className = "testable-keycap-pill";
      capPill.textContent = kDef.keyLabel;

      var tryTag = document.createElement("span");
      tryTag.className = "testable-key-try-tag";
      tryTag.textContent = "Click to test ↵";

      topLine.appendChild(capPill);
      topLine.appendChild(tryTag);

      var titleStrong = document.createElement("strong");
      titleStrong.className = "testable-key-title";
      titleStrong.textContent = kDef.actionTitle;

      var descSpan = document.createElement("span");
      descSpan.className = "testable-key-desc";
      descSpan.textContent = kDef.whatItDoes;

      var handSmall = document.createElement("span");
      handSmall.className = "testable-key-hand";
      handSmall.textContent = "Hands: " + kDef.handNote;

      kCard.appendChild(topLine);
      kCard.appendChild(titleStrong);
      kCard.appendChild(descSpan);
      kCard.appendChild(handSmall);

      kCard.addEventListener("click", function () {
        triggerKeyAction(kDef.id, true);
      });

      keyBtnsMap[kDef.id] = kCard;
      keysGrid.appendChild(kCard);
    });

    kbPanel.appendChild(keysGrid);
    stageGrid.appendChild(kbPanel);
    card.appendChild(stageGrid);

    function updatePromptPrefix() {
      termTitle.textContent = "lucy@macbook: " + currentDir + " (zsh)";
      promptPrefixSpan.textContent = "lucy@macbook " + currentDir + " % ";
    }

    function appendLogLines(cmdText, linesArray) {
      if (cmdText !== null) {
        var echoRow = document.createElement("div");
        echoRow.className = "term-output-cmd-echo";
        echoRow.textContent = "lucy@macbook " + currentDir + " % " + cmdText;
        logContainer.appendChild(echoRow);
      }
      (linesArray || []).forEach(function (lineStr) {
        var lineDiv = document.createElement("div");
        lineDiv.className = lineStr.indexOf("#") === 0 ? "term-output-comment" : "term-output-line";
        lineDiv.textContent = lineStr || " ";
        logContainer.appendChild(lineDiv);
      });
      termScreen.scrollTop = termScreen.scrollHeight;
    }

    function flashKeyCard(keyId, badgeLabel, explanationText) {
      Object.keys(keyBtnsMap).forEach(function (id) {
        var btn = keyBtnsMap[id];
        if (id === keyId) {
          btn.classList.add("popped");
        } else {
          btn.classList.remove("popped");
        }
      });
      fbBadge.textContent = badgeLabel;
      fbText.textContent = explanationText;

      var kObj = null;
      INTERACTIVE_KEYS.forEach(function (k) {
        if (k.id === keyId) kObj = k;
      });
      if (kObj && window.PipelineAgent && typeof window.PipelineAgent.showInspector === "function") {
        window.PipelineAgent.showInspector(
          function (inspectorEl) {
            var topRow = document.createElement("div");
            topRow.className = "resource-title-row";
            var b = document.createElement("span");
            b.className = "badge badge-info";
            b.textContent = badgeLabel;
            topRow.appendChild(b);
            inspectorEl.appendChild(topRow);

            var h4 = document.createElement("h4");
            h4.textContent = kObj.keyLabel + " — " + kObj.actionTitle;
            inspectorEl.appendChild(h4);

            var pWhat = document.createElement("p");
            pWhat.className = "resource-desc";
            pWhat.textContent = explanationText;
            inspectorEl.appendChild(pWhat);

            var handCard = document.createElement("div");
            handCard.className = "nested-card";
            var hp = document.createElement("p");
            hp.className = "resource-desc";
            hp.textContent = kObj.whatItDoes + " (" + kObj.handNote + ")";
            handCard.appendChild(hp);
            inspectorEl.appendChild(handCard);
          },
          { autoOpen: true, pulse: true, itemTitle: kObj.keyLabel }
        );
      }
    }

    function stopRunningServerWithCtrlC() {
      if (activeServerTimer) {
        clearInterval(activeServerTimer);
        activeServerTimer = null;
      }
      isServerRunning = false;
      cmdInput.disabled = false;
      cmdInput.placeholder = "Type a command or press Tab, ↑, ↓, Enter, Ctrl+C...";
      termStatusBadge.className = "badge badge-success";
      termStatusBadge.textContent = "Prompt unlocked!";
      appendLogLines(null, [
        "^C",
        "Server stopped safely with Ctrl + C! Your command prompt is unlocked and ready."
      ]);
      cmdInput.focus();
    }

    function startSimulatedServer() {
      if (activeServerTimer) clearInterval(activeServerTimer);
      isServerRunning = true;
      serverTickCount = 0;
      cmdInput.value = "";
      cmdInput.disabled = true;
      cmdInput.placeholder = "[Server running on :3000 — Press Ctrl+C to stop it!]";
      termStatusBadge.className = "badge badge-warning";
      termStatusBadge.textContent = "Server running (Press Ctrl+C!)";
      appendLogLines("npm run dev", [
        "Starting local development server on http://localhost:3000 ...",
        "[ready] Listening on port 3000 — terminal prompt is busy while server runs.",
        "# Tip: Press Ctrl + C on your keyboard (or click [Ctrl + C] on the right) to stop it!"
      ]);
      activeServerTimer = setInterval(function () {
        serverTickCount += 1;
        if (serverTickCount <= 6) {
          appendLogLines(null, [
            "[localhost:3000] GET /index.html 200 OK (" + (12 + serverTickCount * 3) + "ms) — press Ctrl+C to stop"
          ]);
        }
      }, 1600);
    }

    function triggerKeyAction(keyId, fromClick) {
      if (keyId === "key-tab") {
        if (isServerRunning) {
          stopRunningServerWithCtrlC();
        }
        var raw = cmdInput.value;
        var trimmed = raw.trim();
        var matchedNote = "";
        if (!trimmed || trimmed.slice(-1) === "/" || trimmed === "cat package.json") {
          // Load a partial command and immediately show how Tab finishes it
          var pair = TAB_COMPLETION_PAIRS[tabCycleIdx % TAB_COMPLETION_PAIRS.length];
          tabCycleIdx += 1;
          cmdInput.value = pair.completed;
          matchedNote = "Auto-completed '" + pair.partial + "' -> '" + pair.completed + "' (" + pair.note + "). Now press [Enter ↵] to run it!";
        } else if (trimmed.indexOf("comp") !== -1) {
          cmdInput.value = "cd components/";
          matchedNote = "Auto-completed '" + trimmed + "' -> 'cd components/'! Now press [Enter ↵] to step inside.";
        } else if (trimmed.indexOf("pack") !== -1) {
          cmdInput.value = "cat package.json";
          matchedNote = "Auto-completed '" + trimmed + "' -> 'cat package.json'! Now press [Enter ↵] to read the file.";
        } else if (trimmed === "cd s" || trimmed === "cd sr") {
          cmdInput.value = "cd src/";
          matchedNote = "Auto-completed '" + trimmed + "' -> 'cd src/'! Now press [Enter ↵] to step inside.";
        } else {
          cmdInput.value = trimmed + " components/";
          matchedNote = "Tab ⇥ auto-completed 'components/' onto your command! Press [Enter ↵] to run it.";
        }
        flashKeyCard("key-tab", "Tab ⇥ pressed!", matchedNote);
        if (fromClick) cmdInput.focus();
      } else if (keyId === "key-up") {
        if (isServerRunning) {
          flashKeyCard("key-ctrl-c", "Server is running!", "Press [Ctrl + C] first to stop the running server before recalling history.");
          return;
        }
        if (historyCursor > 0) {
          historyCursor -= 1;
        } else {
          historyCursor = cmdHistory.length - 1;
        }
        cmdInput.value = cmdHistory[historyCursor] || "pwd";
        flashKeyCard(
          "key-up",
          "↑ Up Arrow pressed! (History " + (historyCursor + 1) + "/" + cmdHistory.length + ")",
          "Recalled past command '" + cmdInput.value + "' without typing! Tap [↑ Up] again for older commands, or press [Enter ↵] to run it."
        );
        if (fromClick) cmdInput.focus();
      } else if (keyId === "key-down") {
        if (isServerRunning) return;
        if (historyCursor < cmdHistory.length - 1) {
          historyCursor += 1;
          cmdInput.value = cmdHistory[historyCursor];
          flashKeyCard(
            "key-down",
            "↓ Down Arrow pressed! (History " + (historyCursor + 1) + "/" + cmdHistory.length + ")",
            "Stepped forward in your command history to '" + cmdInput.value + "'."
          );
        } else {
          historyCursor = cmdHistory.length;
          cmdInput.value = "";
          flashKeyCard(
            "key-down",
            "↓ Down Arrow pressed! (Back to fresh blank prompt)",
            "Reached the newest end of your history—your prompt line is blank and ready for a new command."
          );
        }
        if (fromClick) cmdInput.focus();
      } else if (keyId === "key-ctrl-c") {
        if (isServerRunning) {
          stopRunningServerWithCtrlC();
          flashKeyCard(
            "key-ctrl-c",
            "Ctrl + C pressed! (Stopped server)",
            "Emergency brake! Ctrl + C sent an interrupt signal (^C) that stopped the running server and gave you your typing prompt back."
          );
        } else if (cmdInput.value.trim()) {
          var cancelled = cmdInput.value;
          appendLogLines(cancelled + " ^C", [
            "# Cancelled half-typed command with Ctrl + C without running it."
          ]);
          cmdInput.value = "";
          flashKeyCard(
            "key-ctrl-c",
            "Ctrl + C pressed! (Cancelled line)",
            "Cancelled '" + cancelled + "' with ^C and gave you a fresh blank prompt! (Tip: Click Mission #3 above to test stopping a live server with Ctrl+C.)"
          );
        } else {
          // Start the live server so the user can immediately press Ctrl+C again to stop it!
          startSimulatedServer();
          flashKeyCard(
            "key-ctrl-c",
            "Live server started — press Ctrl + C again to stop it!",
            "We just started a live server ('npm run dev') that locked your prompt. Press [Ctrl + C] one more time to stop it with ^C!"
          );
        }
      } else if (keyId === "key-ctrl-l") {
        logContainer.replaceChildren();
        appendLogLines(null, [
          "# Screen wiped clean with Ctrl + L! (Your files and ↑ Up Arrow history are still 100% safe.)"
        ]);
        flashKeyCard(
          "key-ctrl-l",
          "Ctrl + L pressed! (Screen cleared)",
          "Wiped all the old log clutter off the terminal screen so your prompt is cleanly at the top."
        );
        if (fromClick) cmdInput.focus();
      } else if (keyId === "key-enter") {
        if (isServerRunning) {
          flashKeyCard("key-ctrl-c", "Server is running!", "Press [Ctrl + C] first to stop the running server.");
          return;
        }
        var cmdToRun = cmdInput.value.trim() || "ls -la";
        executeSandboxCommand(cmdToRun);
        if (fromClick) cmdInput.focus();
      }
    }

    function executeSandboxCommand(rawCmd) {
      var cmd = rawCmd.trim();
      if (!cmd) return;
      cmdHistory.push(cmd);
      historyCursor = cmdHistory.length;
      cmdInput.value = "";

      if (cmd === "clear") {
        triggerKeyAction("key-ctrl-l", false);
        return;
      }
      if (cmd === "npm run dev" || cmd.indexOf("http.server") !== -1) {
        startSimulatedServer();
        flashKeyCard("key-ctrl-c", "Server running — press Ctrl + C to stop!", "Started local server! Notice how your prompt is busy—press [Ctrl + C] to stop it.");
        return;
      }

      var out = [];
      var explain = "";

      if (cmd === "pwd") {
        var fullPath = currentDir.replace("~", "/Users/lucy");
        out = [fullPath, "# Printed your Current Working Directory (where you are standing right now)."];
        explain = "Ran 'pwd' (Print Working Directory) -> You are inside " + fullPath + ".";
      } else if (cmd === "ls" || cmd === "ls -la") {
        out = [
          "drwxr-xr-x  10 lucy  staff   320 Sep 26 20:15 .            <-- Current directory",
          "drwxr-xr-x   6 lucy  staff   192 Sep 26 18:00 ..           <-- Parent directory (one folder up)",
          "-rw-------   1 lucy  staff    64 Sep 26 19:10 .env         <-- Hidden secret API keys (revealed by -a)",
          "drwxr-xr-x   5 lucy  staff   160 Sep 26 20:15 components/",
          "drwxr-xr-x   4 lucy  staff   128 Sep 26 20:15 src/",
          "-rw-r--r--   1 lucy  staff   842 Sep 26 20:15 package.json"
        ];
        explain = "Ran '" + cmd + "' -> Listed all files and subfolders (including hidden dotfiles like .env and parent '..').";
      } else if (cmd === "cd .." || cmd === "cd ../") {
        var oldDir = currentDir;
        if (currentDir.indexOf("/components") !== -1 || currentDir.indexOf("/src") !== -1) {
          currentDir = "~/workspace/my-app";
        } else if (currentDir === "~/workspace/my-app") {
          currentDir = "~/workspace";
        } else {
          currentDir = "~";
        }
        appendLogLines(cmd, [
          "# Stepped UP one folder level from '" + oldDir + "' into its Parent Directory: '" + currentDir + "'"
        ]);
        updatePromptPrefix();
        flashKeyCard("key-enter", "Enter ↵ ran 'cd ..'!", "Moved one folder level up into the Parent Directory (" + currentDir + "). Look at the green prompt prefix—it updated to " + currentDir + "!");
        return;
      } else if (cmd.indexOf("cd ") === 0) {
        var target = cmd.slice(3).trim().replace(/\/$/, "");
        if (target === "~") {
          currentDir = "~";
        } else if (target === ".") {
          // stay in currentDir
        } else {
          currentDir = "~/workspace/my-app/" + target;
        }
        appendLogLines(cmd, [
          "# Stepped DOWN into child subfolder: '" + currentDir + "' (Tip: type 'cd ..' + Enter to step back up to the parent folder!)"
        ]);
        updatePromptPrefix();
        flashKeyCard("key-enter", "Enter ↵ ran '" + cmd + "'!", "Moved inside folder '" + currentDir + "'. Try typing 'cd ..' and pressing Enter to step back up to its parent directory!");
        return;
      } else if (cmd.indexOf("grep") === 0) {
        out = [
          "./components/CheckoutButton.tsx:14:export function Button({ label }) {",
          "./src/App.tsx:42:      <Button label=\"Deploy to Vercel\" />",
          "# grep searched inside every file (-r) and printed exact line numbers (-n)!"
        ];
        explain = "Ran '" + cmd + "' -> Found 2 matching lines across your files with exact line numbers (14 and 42).";
      } else if (cmd.indexOf("cat ") === 0) {
        out = [
          "{",
          "  \"name\": \"my-app\",",
          "  \"scripts\": { \"dev\": \"next dev\", \"build\": \"next build\" }",
          "}"
        ];
        explain = "Ran '" + cmd + "' -> Printed the plain-text contents of the file directly into the terminal.";
      } else {
        out = [
          "Executed: " + cmd,
          "# Command completed! Try pressing [↑ Up Arrow] to recall it, or [Ctrl + L] to clear the screen."
        ];
        explain = "Ran '" + cmd + "'! Press [↑ Up Arrow] to see that it was added to your command history.";
      }

      appendLogLines(cmd, out);
      flashKeyCard("key-enter", "Enter ↵ executed '" + cmd + "'!", explain);
    }

    // Listen to real physical keyboard presses inside the live terminal prompt!
    cmdInput.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        triggerKeyAction("key-tab", false);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        triggerKeyAction("key-up", false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        triggerKeyAction("key-down", false);
      } else if (e.key === "Enter") {
        e.preventDefault();
        triggerKeyAction("key-enter", false);
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
        triggerKeyAction("key-ctrl-c", false);
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "l" || e.key === "L")) {
        e.preventDefault();
        triggerKeyAction("key-ctrl-l", false);
      }
    });

    function loadMission(idx) {
      var m = GUIDED_MISSIONS[idx];
      missionBtns.forEach(function (b, i) {
        if (i === idx) b.classList.add("active");
        else b.classList.remove("active");
      });

      if (activeServerTimer) {
        clearInterval(activeServerTimer);
        activeServerTimer = null;
      }
      isServerRunning = false;
      cmdInput.disabled = false;
      currentDir = m.setupDir || "~/workspace/my-app";
      updatePromptPrefix();
      mbText.textContent = m.instruction;

      if (m.startServer) {
        startSimulatedServer();
      } else {
        termStatusBadge.className = "badge badge-info";
        termStatusBadge.textContent = "Interactive prompt ready";
        cmdInput.value = m.prefillCmd || "";
      }

      Object.keys(keyBtnsMap).forEach(function (kId) {
        if (kId === m.glowKey) keyBtnsMap[kId].classList.add("popped");
        else keyBtnsMap[kId].classList.remove("popped");
      });
    }

    // Initialize welcome lines & Mission 1
    appendLogLines(null, [
      "# Welcome to the live terminal sandbox! Folders here: components/  src/  package.json  .env",
      "# Click any key on the right OR type below and press Tab, ↑, ↓, Enter, Ctrl+C, or Ctrl+L."
    ]);
    loadMission(0);
    renderPathAnatomyCard(container);
    container.appendChild(card);
  }

  var PATH_SEGMENTS = [
    { id: "seg-prompt", tokenText: "lucy@macbook", dividerAfter: ":", roleLabel: "1. Who & computer", colorClass: "badge-neutral", title: "Prompt prefix: Who you are & which computer you're on (lucy@macbook)", comparison: "Identity vs. Location: Before the colon (:) is WHO is typing ('lucy') and WHICH computer is listening ('macbook'—either your laptop or a remote cloud server). Everything after the colon is WHERE you are standing.", whatItDoes: "Lets you see at a glance whether your terminal is running commands on your own laptop or on a remote production server.", howToGetThere: "whoami && hostname   # Prints your username and computer name" },
    { id: "seg-root", tokenText: "/", dividerAfter: "", roleLabel: "2. Root drive", colorClass: "badge-warning", title: "Root slash (/): The bottom-most trunk of the whole computer", comparison: "Leading '/' vs. Middle '/': A slash '/' at the very start of a path means the Root of the entire hard drive. Slashes in the middle of a path simply mean 'step inside the next folder'.", whatItDoes: "Anchors an 'Absolute Path'—a full street address starting from the very bottom of your computer.", howToGetThere: "cd / && ls   # Lists top-level system folders (you rarely edit here!)" },
    { id: "seg-home", tokenText: "Users/lucy (~)", dividerAfter: "/", roleLabel: "3. Home folder (~)", colorClass: "badge-info", title: "Your Home folder (/Users/lucy or the '~' shortcut)", comparison: "Full path vs. '~' shortcut: Instead of typing '/Users/lucy' every time, you can type the squiggly tilde key '~'. Both point to your personal home folder (which holds Desktop, Downloads, and your code).", whatItDoes: "Gives you a personal folder where you have full permission to create folders, projects, and settings files.", howToGetThere: "cd ~   # (Or just type 'cd' + Enter from anywhere to teleport home!)" },
    { id: "seg-workspace", tokenText: "workspace", dividerAfter: "/", roleLabel: "4. Workspace", colorClass: "badge-secondary", title: "Workspace: Your coding workbench that holds your projects", comparison: "Workspace vs. Folder vs. File: A 'Workspace' is the overarching workbench (a parent folder like '~/workspace', a VS Code/Cursor window session, or a cloud dev environment like GitHub Codespaces) where you keep your active coding projects and editor settings.", whatItDoes: "Keeps all your coding projects in one clean, easy-to-find place instead of scattering them across Downloads and Desktop.", howToGetThere: "mkdir -p ~/workspace && cd ~/workspace   # Creates & enters your workbench" },
    { id: "seg-repo", tokenText: "deployed-eng-pipeline", dividerAfter: "/", roleLabel: "5. Project repo folder", colorClass: "badge-success", title: "Project folder (Git Repository / 'Repo'): One specific app", comparison: "Project Repo vs. Workspace: While your Workspace is the whole workbench, 'deployed-eng-pipeline' is the folder for ONE specific app. Because it has a hidden '.git' folder inside it, engineers call this folder a 'Repository' (or 'Repo').", whatItDoes: "Holds all the code, configuration, and Git commit checkpoints for one website or application.", howToGetThere: "cd ~/workspace/deployed-eng-pipeline && pwd" },
    { id: "seg-subfolder", tokenText: "src", dividerAfter: "/", roleLabel: "6. Child subfolder (Directory)", colorClass: "badge-warning", title: "Subfolder / Child Directory (src): A folder nested inside your project", comparison: "Directory vs. Folder & Family Tree: 'Directory' is 100% the exact same thing as a 'Folder'! Folders nest like a family tree: 'deployed-eng-pipeline' is the Parent Directory ('..') that holds 'src', and 'src' is the Child Subfolder sitting inside it.", whatItDoes: "Groups related code files together inside your project. Step inside with 'cd src', or step back up to its parent folder with 'cd ..'.", howToGetThere: "cd src   # Step down into child subfolder  |  cd ..   # Step back up to parent!" },
    { id: "seg-filename", tokenText: "app", dividerAfter: "", roleLabel: "7. File name", colorClass: "badge-info", title: "File (app): A single plain-text code document", comparison: "Folder vs. File: A Folder (Directory) is a container box you can walk inside with 'cd'. A File ('app.js') is a single document holding lines of text/code—if you try 'cd app.js', the terminal will say 'Not a directory'!", whatItDoes: "Stores the actual instructions, HTML, styles, or logic that your editor and computer read.", howToGetThere: "cat src/app.js   # Prints the file's contents  |  touch src/new.js   # Creates a file" },
    { id: "seg-ext", tokenText: ".js", dividerAfter: "  ·  ", roleLabel: "8. File extension", colorClass: "badge-danger", title: "File extension (.js): The language tag at the end of a file", comparison: "Why the dot matters: The ending after the dot tells your computer and AI agent which language is inside: '.js' (JavaScript), '.py' (Python), '.html' (Webpage), '.css' (Styles), '.md' (Markdown notes), '.json' (Data).", whatItDoes: "Turns on the right color highlighting in your code editor and tells the computer which tool should run the file.", howToGetThere: "ls *.js   # Lists every JavaScript file in your current folder" },
    { id: "seg-parent", tokenText: ".. (Parent)", dividerAfter: " ", roleLabel: "9. Parent directory (..)", colorClass: "badge-secondary", title: "Parent Directory (..): The outer folder one level above you", comparison: "Why is it called a 'Parent Directory'? Folders sit inside each other like a family tree. If you are standing inside 'deployed-eng-pipeline/src', then 'deployed-eng-pipeline' one level above you is your Parent Directory (written as two dots: '..').", whatItDoes: "Lets you step one folder level up ('cd ..') without having to retype the full folder address from the beginning.", howToGetThere: "cd ..   # Steps one folder level up into the parent directory" },
    { id: "seg-current", tokenText: ". (Current)", dividerAfter: "", roleLabel: "10. Working directory (.)", colorClass: "badge-info", title: "Current Working Directory (.): The folder you are standing in right now", comparison: "Single dot (.) vs. Double dot (..): One dot '.' means 'right here in this current folder'. Two dots '..' means 'one folder level up in the parent folder'.", whatItDoes: "Tells commands like 'grep -rn \"word\" .' or 'open .' to act on the exact folder you are currently standing inside.", howToGetThere: "pwd   # Prints your current working directory  |  open .   # Opens it in Finder" }
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
    h3.textContent = "Workspace vs. parent directory (..) vs. subfolder vs. file: Reading a path";
    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent = "Every terminal command uses paths like this one. Click any colored piece below (including '..' Parent and '.' Current) to see what it means and how to get there.";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    titleGroup.appendChild(subP);
    headerRow.appendChild(titleGroup);
    pathCard.appendChild(headerRow);

    var selectedSeg = PATH_SEGMENTS[3];
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
      function (inspectorEl) { updatePathInspector(inspectorEl, seg); },
      { autoOpen: Boolean(isUserClick), pulse: Boolean(isUserClick), itemTitle: seg.roleLabel + " (" + seg.tokenText + ")" }
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

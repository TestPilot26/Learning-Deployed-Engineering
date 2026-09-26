// Searchable Terminal Vocabulary, Tips & Mental Model Walkthroughs
// Attached to the "Command line interface & the terminal" stop (#stop/cli-and-terminal)

window.TERMINAL_VOCAB_DATA = {
  whyItMatters:
    "Helps you track what an AI agent is doing to your files in real time and navigate local folders, cloud VMs, and logs.",
  categories: [
    {
      id: "all",
      label: "All groups",
      badgeClass: "badge-info",
      helpfulFor: "Browse all essential terminal commands, flags, shortcuts, paths, and operators grouped by what they help you do."
    },
    {
      id: "Navigation",
      label: "Navigating folders",
      badgeClass: "badge-info",
      helpfulFor: "Helpful for checking which folder you (or your AI agent) are sitting in, moving between folders, and checking open ports."
    },
    {
      id: "Files",
      label: "Creating & managing files",
      badgeClass: "badge-secondary",
      helpfulFor: "Helpful for creating empty text files, backing up configs, renaming files, or deleting old folders."
    },
    {
      id: "Viewing & grep",
      label: "Reading & searching files",
      badgeClass: "badge-success",
      helpfulFor: "Helpful for reading file contents, watching live server logs stream in real time, and searching code with grep."
    },
    {
      id: "Flags",
      label: "Grep & command flags",
      badgeClass: "badge-neutral",
      helpfulFor: "Helpful for modifying how grep and directory commands behave (case-insensitive, recursive, line numbers, parent folders)."
    },
    {
      id: "Shortcuts",
      label: "Keyboard shortcuts",
      badgeClass: "badge-info",
      helpfulFor: "Helpful for auto-completing paths with Tab, stopping stuck servers with Ctrl+C, and recalling past commands."
    },
    {
      id: "Paths",
      label: "Path shorthands",
      badgeClass: "badge-secondary",
      helpfulFor: "Helpful for stepping up parent directories (..) or jumping straight to your home folder (~) from anywhere."
    },
    {
      id: "Operators",
      label: "Pipes & redirects",
      badgeClass: "badge-success",
      helpfulFor: "Helpful for chaining one command's output into another (|) or saving terminal output into a text file (>, >>)."
    }
  ],
  items: [
    // Navigation & Directory Management
    {
      command: "pwd",
      name: "Print Working Directory",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Outputs the absolute path of the current directory you are in.",
      example: "pwd"
    },
    {
      command: "ls -la",
      name: "List (All & Long)",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Lists all files (including hidden ones starting with .) with permissions, owner, size, and date.",
      example: "ls -la"
    },
    {
      command: "cd",
      name: "Change Directory",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Navigates between directories/folders, up a level (..), or to home (~).",
      example: "cd project/, cd .., cd ~"
    },
    {
      command: "mkdir",
      name: "Make Directory",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Creates a new folder/directory in the current location.",
      example: "mkdir new_folder"
    },
    {
      command: "which",
      name: "Locate Executable",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Shows the exact folder path of the program that runs when you type a command.",
      example: "which node   |   which git"
    },
    {
      command: "lsof -i :PORT",
      name: "List Open Port",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Finds which running process is using a local port when a server says 'Address already in use'.",
      example: "lsof -i :3000"
    },

    // File Creation & Management
    {
      command: "touch",
      name: "Touch",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Creates a new empty file if it doesn't exist, or updates its modification timestamp.",
      example: "touch notes.txt"
    },
    {
      command: "cp",
      name: "Copy",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Copies files or directories (with -r) from one location to another.",
      example: "cp source.txt dest.txt"
    },
    {
      command: "mv",
      name: "Move / Rename",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Moves a file or folder to a new location, or renames it in place.",
      example: "mv old_name.txt new_name.txt"
    },
    {
      command: "rm / rm -r",
      name: "Remove",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Deletes files permanently. Adding -r (recursive) deletes a folder and everything inside it.",
      example: "rm file.txt, rm -r old_folder/"
    },

    // File Viewing & Text Searching
    {
      command: "cat",
      name: "Concatenate",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Outputs the entire contents of a file directly into the terminal window.",
      example: "cat notes.txt"
    },
    {
      command: "grep",
      name: "Global Regular Expression Print",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Ctrl + F for the terminal: searches for a specific text pattern inside files or piped output.",
      example: "grep \"error\" logfile.txt"
    },
    {
      command: "head",
      name: "Head (First Lines)",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Displays the first few lines of a file (defaults to 10; use -n 20 for 20 lines).",
      example: "head -n 20 logfile.txt"
    },
    {
      command: "tail -f",
      name: "Tail Follow (Live Logs)",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Prints the end of a file and streams new log lines live as your app writes them.",
      example: "tail -f server.log"
    },
    {
      command: "less",
      name: "Scrollable Viewer",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Opens a scrollable page viewer for long files (press q to exit).",
      example: "less big_file.log"
    },
    {
      command: "wc -l",
      name: "Line Count",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Counts total lines in a file or piped command output.",
      example: "ls src/ | wc -l"
    },

    // Grep & Command Flags (Matching the screenshot layout)
    {
      command: "-i",
      name: "Ignore Case",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Case-insensitive search (matches Theory, THEORY, or theory).",
      example: "grep -i \"theory\" README.md"
    },
    {
      command: "-r (or -R)",
      name: "Recursive",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Searches all files in the directory and all its subfolders.",
      example: "grep -r \"TODO\" ."
    },
    {
      command: "-n",
      name: "Line Numbers",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Prints the exact line number where the match was found.",
      example: "grep -n \"error\" log.txt"
    },
    {
      command: "-v",
      name: "Invert Match",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Prints all lines that do NOT match the pattern.",
      example: "grep -v \"DEBUG\" log.txt"
    },
    {
      command: "mkdir -p",
      name: "Make Parent Directories",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Creates the entire nested folder hierarchy in one go if parent folders don't exist yet.",
      example: "mkdir -p src/experiments/theory_of_change"
    },
    {
      command: "-f",
      name: "Force / Fresh Flag",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Forces an operation without prompting or initializes a fresh workspace state.",
      example: "jjd -f codelab-workspace"
    },

    // Keyboard Shortcuts
    {
      command: "Tab",
      name: "Auto-completion",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Auto-completes partially typed folder/file names (press Tab twice to list all options).",
      example: "cd exp[Tab] -> cd experimental/"
    },
    {
      command: "Ctrl + C",
      name: "Kill / Cancel Process",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Immediately stops the currently running command or server and returns to a fresh prompt.",
      example: "Press Ctrl + C to stop localhost server"
    },
    {
      command: "Up / Down Arrows",
      name: "Command History",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Cycles through your previously executed commands so you don't have to retype them.",
      example: "Press Up Arrow to rerun last command"
    },
    {
      command: "Ctrl + R",
      name: "Reverse History Search",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Searches backward through your past commands as you type a keyword.",
      example: "Ctrl + R then type 'theory_of_change'"
    },
    {
      command: "Ctrl + L (or clear)",
      name: "Clear Screen",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Wipes visual clutter off the terminal screen and brings the prompt to the top.",
      example: "Ctrl + L"
    },
    {
      command: "Ctrl + A / Ctrl + E",
      name: "Start / End of Line",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Jumps the cursor to the very beginning (Ctrl + A) or very end (Ctrl + E) of the line.",
      example: "Ctrl + A to insert sudo at the start"
    },

    // Relative & Absolute Paths
    {
      command: ".",
      name: "Current Directory",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Refers to the exact folder you are sitting in right now.",
      example: "./script.sh"
    },
    {
      command: "..",
      name: "Parent Directory",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Refers to one folder level up from your current directory.",
      example: "cd .."
    },
    {
      command: "../..",
      name: "Two Levels Up",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Steps two folder levels up the directory hierarchy.",
      example: "cd ../../"
    },
    {
      command: "~",
      name: "Home Directory",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Shorthand for your user home folder (e.g. /Users/lucy) from anywhere.",
      example: "cd ~/deployed-eng-pipeline"
    },

    // Pipes & Redirects
    {
      command: "|",
      name: "Pipe Operator",
      category: "Operators",
      badgeClass: "badge-success",
      description: "Takes the output of the command on the left and feeds it as input to the command on the right.",
      example: "ls -la | grep \"theory\""
    },
    {
      command: ">",
      name: "Redirect (Overwrite)",
      category: "Operators",
      badgeClass: "badge-success",
      description: "Saves command output into a file, overwriting existing contents.",
      example: "echo \"Hello\" > notes.txt"
    },
    {
      command: ">>",
      name: "Redirect (Append)",
      category: "Operators",
      badgeClass: "badge-success",
      description: "Appends command output to the bottom of a file without erasing existing lines.",
      example: "git status >> my_recent_changes.txt"
    }
  ],

  tips: [
    {
      title: "Permanent deletion warning: rm bypasses the Trash bin",
      badge: "Safety rule",
      badgeClass: "badge-secondary",
      summary: "Terminal deletions with rm or rm -r cannot be undone from your system Trash—always verify pwd first.",
      points: [
        "When you run rm file.txt or rm -r folder/, the operating system unlinks the file immediately without moving it to Trash or Recycle Bin.",
        "Before running rm -r, run pwd (to confirm which folder you are in) and ls (to preview what matches).",
        "If your project is tracked with Git, committing often (git commit) gives you a safety net to restore accidentally deleted tracked files with git checkout -- <file>."
      ]
    },
    {
      title: "Overwrite (>) vs. Append (>>): Avoiding accidental file wipes",
      badge: "Data safety",
      badgeClass: "badge-info",
      summary: "A single > erases the target file before writing; a double >> safely adds to the bottom.",
      points: [
        "Running echo \"new line\" > notes.txt replaces the entire file with that single line.",
        "Running echo \"new line\" >> notes.txt preserves everything already in notes.txt and tucks the new line at the end.",
        "When logging command output over time, default to >> so you don't wipe earlier logs."
      ]
    },
    {
      title: "How to read an AI agent's terminal output as it works",
      badge: "AI supervision",
      badgeClass: "badge-success",
      summary: "Watch 4 key commands (pwd, grep, git diff, and test runners) to verify what the AI is doing.",
      points: [
        "When an AI agent starts a task, check its pwd and ls commands to verify it is editing the right project folder.",
        "When it searches your codebase with grep -rn, look at which files matched to see if it found the real source of truth or an old backup file.",
        "Before accepting its final answer, run git status and git diff yourself to see every file and line touched."
      ]
    }
  ],

  deepDives: [
    {
      title: "How Tab auto-completion saves typing and catches typos early",
      badge: "Shortcuts in practice",
      badgeClass: "badge-info",
      summary: "Type the first 3 letters of any folder and press Tab—if it doesn't complete, you immediately know there's a typo.",
      points: [
        "To navigate to experimental/consequence_eng/theory_of_change, you only type: cd exp [Tab] con [Tab] the [Tab].",
        "If pressing Tab does nothing, either there is a spelling typo in the letters you typed, or two folders start with those same letters (press Tab twice to list all matches)."
      ]
    },
    {
      title: "Absolute vs. relative paths: Why 'No such file or directory' happens",
      badge: "Path mental model",
      badgeClass: "badge-secondary",
      summary: "Relative paths start from your current pwd; absolute paths start from the root slash (/) or home (~).",
      points: [
        "Suppose your project lives at /Users/lucy/workspace/project/experimental/consequence_eng/theory_of_change.",
        "Scenario A (Sitting in /Users/lucy/workspace/project): Both the absolute path (cd /Users/lucy/workspace/project/experimental/...) and the relative path (cd experimental/consequence_eng/theory_of_change) work because experimental/ sits directly inside your current folder.",
        "Scenario B (Sitting in your home folder ~): The absolute path still works from anywhere, but the relative path fails with 'No such file or directory' because there is no experimental/ folder directly inside ~."
      ]
    },
    {
      title: "Composing pipes (|), redirects (>, >>), and grep in real workflows",
      badge: "Chaining commands",
      badgeClass: "badge-success",
      summary: "Connect small commands like Lego bricks: filter file lists with | grep, save logs with >>, and count items with | wc -l.",
      points: [
        "Mental model for grep: [ All Text / File Contents ] -> [ grep \"keyword\" ] -> [ Only matching lines shown ].",
        "Save your recent commit log to a file (overwrite): git log -n 10 > my_recent_changes.txt",
        "Append today's working tree status to that same file: git status >> my_recent_changes.txt",
        "Find a specific file in a busy folder: ls -la experimental/consequence_eng/theory_of_change | grep \"orchestrator\"",
        "Count how many items live inside a directory: ls experimental/consequence_eng/theory_of_change | wc -l"
      ]
    }
  ]
};

// ============================================================================
// Compact Tabbed & Grouped Table Renderer for Terminal Vocab Reference
// ============================================================================
var currentVocabQuery = "";
var currentVocabCategory = "all";
var currentVocabPrimaryTab = "commands"; // "commands" | "tips" | "walkthroughs"
var expandedVocabGroups = {};
var expandedTipsItems = {};
var expandedDeepDiveItems = {};

var VOCAB_PRIMARY_TABS = [
  {
    id: "commands",
    label: "Commands & flags",
    icon: "terminal",
    summary: "Grouped tables of essential commands, flags, shortcuts, and operators—expand any group with 'See more'."
  },
  {
    id: "tips",
    label: "Tips & safety",
    icon: "shield",
    summary: "Short safety rules for permanent deletions (rm), file redirects (> vs >>), and tracking AI commands live."
  },
  {
    id: "walkthroughs",
    label: "Mental models & walkthroughs",
    icon: "psychology",
    summary: "Step-by-step walkthroughs for Tab auto-complete, relative vs. absolute paths, and chaining pipes (|)."
  }
];

function createExpandableSummaryCard(item, idx, stateMap, onToggle) {
  var isExpanded = !!stateMap[idx];
  var card = document.createElement("div");
  card.className = "nested-card vocab-expandable-card";

  var headerRow = document.createElement("div");
  headerRow.className = "vocab-expandable-header";

  var leftCol = document.createElement("div");
  leftCol.className = "vocab-expandable-title-col";

  var titleLine = document.createElement("div");
  titleLine.className = "vocab-expandable-title-line";

  var badge = document.createElement("span");
  badge.className = "badge " + (item.badgeClass || "badge-info");
  badge.textContent = item.badge;

  var h4 = document.createElement("h4");
  h4.textContent = item.title;

  titleLine.appendChild(badge);
  titleLine.appendChild(h4);

  var summaryP = document.createElement("p");
  summaryP.className = "resource-desc";
  summaryP.textContent = item.summary || "";

  leftCol.appendChild(titleLine);
  leftCol.appendChild(summaryP);

  var toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.className = "vocab-see-more-btn";
  var btnSpan = document.createElement("span");
  btnSpan.textContent = isExpanded ? "Show less" : "See more";
  var btnIcon = document.createElement("span");
  btnIcon.className = "material-symbols-outlined btn-icon-sm";
  btnIcon.textContent = isExpanded ? "expand_less" : "expand_more";
  toggleBtn.appendChild(btnSpan);
  toggleBtn.appendChild(btnIcon);

  toggleBtn.addEventListener("click", function () {
    stateMap[idx] = !stateMap[idx];
    onToggle();
  });

  headerRow.appendChild(leftCol);
  headerRow.appendChild(toggleBtn);
  card.appendChild(headerRow);

  if (isExpanded) {
    var ul = document.createElement("ul");
    ul.className = "bullet-list vocab-expanded-points";
    (item.points || []).forEach(function (pt) {
      var li = document.createElement("li");
      li.className = "bullet-item";
      var icon = document.createElement("span");
      icon.className = "material-symbols-outlined bullet-icon";
      icon.textContent = "chevron_right";
      var text = document.createElement("span");
      text.className = "resource-desc";
      text.textContent = pt;
      li.appendChild(icon);
      li.appendChild(text);
      ul.appendChild(li);
    });
    card.appendChild(ul);
  }

  return card;
}

function renderTerminalVocabSection(query, categoryId) {
  var vData = window.TERMINAL_VOCAB_DATA;
  if (!vData) return;

  currentVocabQuery = (query || "").trim();
  if (categoryId) currentVocabCategory = categoryId;
  var q = currentVocabQuery.toLowerCase();
  if (q === "command line interface" || q === "cli" || q === "terminal") {
    q = "";
  }

  var whyEl = document.getElementById("terminal-vocab-why");
  var primaryTabsEl = document.getElementById("terminal-vocab-primary-tabs");
  var tabSummaryEl = document.getElementById("terminal-vocab-tab-summary");
  var commandsPaneEl = document.getElementById("terminal-vocab-commands-pane");
  var catRowEl = document.getElementById("terminal-vocab-categories");
  var gridEl = document.getElementById("terminal-vocab-grid");
  var tipsPaneEl = document.getElementById("terminal-vocab-tips-pane");
  var deepDivesEl = document.getElementById("terminal-vocab-deep-dives");

  if (whyEl) whyEl.textContent = vData.whyItMatters;

  // If the user is actively typing a search query, show the Commands & flags pane
  var effectiveTab = q ? "commands" : currentVocabPrimaryTab;

  if (primaryTabsEl) {
    primaryTabsEl.replaceChildren();
    VOCAB_PRIMARY_TABS.forEach(function (tDef) {
      var btn = document.createElement("button");
      btn.type = "button";
      var isSelected = tDef.id === effectiveTab;
      btn.className = "vocab-primary-tab-btn" + (isSelected ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", isSelected ? "true" : "false");

      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined btn-icon-sm";
      ic.textContent = tDef.icon;

      var lbl = document.createElement("span");
      lbl.textContent = tDef.label;

      btn.appendChild(ic);
      btn.appendChild(lbl);
      btn.addEventListener("click", function () {
        currentVocabPrimaryTab = tDef.id;
        renderTerminalVocabSection(currentVocabQuery, currentVocabCategory);
      });
      primaryTabsEl.appendChild(btn);

      if (isSelected && tabSummaryEl) {
        tabSummaryEl.textContent = tDef.summary;
      }
    });
  }

  if (commandsPaneEl) commandsPaneEl.style.display = effectiveTab === "commands" ? "block" : "none";
  if (tipsPaneEl) tipsPaneEl.style.display = effectiveTab === "tips" ? "flex" : "none";
  if (deepDivesEl) deepDivesEl.style.display = effectiveTab === "walkthroughs" ? "flex" : "none";

  // 1. Render Compact Category Filter Pills & Grouped 4-Column Tables
  if (catRowEl) {
    catRowEl.replaceChildren();
    (vData.categories || []).forEach(function (cat) {
      var chip = document.createElement("button");
      chip.type = "button";
      var isSelected = cat.id === currentVocabCategory;
      chip.className = "vocab-compact-chip " + (cat.badgeClass || "badge-info") + (isSelected ? " selected" : "");
      chip.setAttribute("role", "tab");
      chip.setAttribute("aria-selected", isSelected ? "true" : "false");
      chip.textContent = cat.label;
      chip.addEventListener("click", function () {
        renderTerminalVocabSection(currentVocabQuery, cat.id);
      });
      catRowEl.appendChild(chip);
    });
  }

  if (gridEl) {
    gridEl.replaceChildren();
    var groupsToRender = (vData.categories || []).filter(function (c) {
      return c.id !== "all" && (currentVocabCategory === "all" || c.id === currentVocabCategory);
    });

    groupsToRender.forEach(function (groupCat) {
      var matchingItems = (vData.items || []).filter(function (item) {
        if (item.category !== groupCat.id) return false;
        if (!q) return true;
        return (
          item.command.toLowerCase().indexOf(q) !== -1 ||
          item.name.toLowerCase().indexOf(q) !== -1 ||
          item.description.toLowerCase().indexOf(q) !== -1 ||
          item.example.toLowerCase().indexOf(q) !== -1 ||
          item.category.toLowerCase().indexOf(q) !== -1
        );
      });

      if (!matchingItems.length) return;

      var groupBox = document.createElement("div");
      groupBox.className = "vocab-group-box";

      var groupHeader = document.createElement("div");
      groupHeader.className = "vocab-group-header";

      var titleWrap = document.createElement("div");
      titleWrap.className = "vocab-group-title-wrap";

      var gBadge = document.createElement("span");
      gBadge.className = "badge " + (groupCat.badgeClass || "badge-info");
      gBadge.textContent = groupCat.label;

      var gHelpful = document.createElement("span");
      gHelpful.className = "resource-desc";
      gHelpful.textContent = groupCat.helpfulFor || "";

      titleWrap.appendChild(gBadge);
      titleWrap.appendChild(gHelpful);
      groupHeader.appendChild(titleWrap);
      groupBox.appendChild(groupHeader);

      // Compact 4-Column Table matching the screenshot
      var tableWrap = document.createElement("div");
      tableWrap.className = "vocab-table-scroll";

      var table = document.createElement("table");
      table.className = "vocab-compact-table";

      var thead = document.createElement("thead");
      var headTr = document.createElement("tr");
      ["Command / Flag", "Meaning", "What it does", "Example"].forEach(function (colTitle) {
        var th = document.createElement("th");
        th.textContent = colTitle;
        headTr.appendChild(th);
      });
      thead.appendChild(headTr);
      table.appendChild(thead);

      var tbody = document.createElement("tbody");
      var defaultPreviewCount = 3;
      var isGroupExpanded = !!expandedVocabGroups[groupCat.id] || currentVocabCategory !== "all" || !!q;
      var visibleItems = isGroupExpanded ? matchingItems : matchingItems.slice(0, defaultPreviewCount);

      visibleItems.forEach(function (item) {
        var tr = document.createElement("tr");

        var tdCmd = document.createElement("td");
        var cmdCode = document.createElement("code");
        cmdCode.className = "vocab-cmd-pill";
        cmdCode.textContent = item.command;
        tdCmd.appendChild(cmdCode);

        var tdName = document.createElement("td");
        tdName.className = "vocab-meaning-cell";
        tdName.textContent = item.name;

        var tdDesc = document.createElement("td");
        tdDesc.className = "vocab-desc-cell";
        tdDesc.textContent = item.description;

        var tdEx = document.createElement("td");
        var exCode = document.createElement("code");
        exCode.className = "vocab-inline-example";
        exCode.textContent = item.example;
        tdEx.appendChild(exCode);

        tr.appendChild(tdCmd);
        tr.appendChild(tdName);
        tr.appendChild(tdDesc);
        tr.appendChild(tdEx);
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      tableWrap.appendChild(table);
      groupBox.appendChild(tableWrap);

      if (matchingItems.length > defaultPreviewCount && currentVocabCategory === "all" && !q) {
        var footerRow = document.createElement("div");
        footerRow.className = "vocab-group-footer";

        var seeMoreBtn = document.createElement("button");
        seeMoreBtn.type = "button";
        seeMoreBtn.className = "vocab-see-more-btn";
        var remaining = matchingItems.length - defaultPreviewCount;
        var btnText = document.createElement("span");
        btnText.textContent = isGroupExpanded ? "Show less" : "See more (" + remaining + " more)";
        var btnIc = document.createElement("span");
        btnIc.className = "material-symbols-outlined btn-icon-sm";
        btnIc.textContent = isGroupExpanded ? "expand_less" : "expand_more";
        seeMoreBtn.appendChild(btnText);
        seeMoreBtn.appendChild(btnIc);

        seeMoreBtn.addEventListener("click", function () {
          expandedVocabGroups[groupCat.id] = !expandedVocabGroups[groupCat.id];
          renderTerminalVocabSection(currentVocabQuery, currentVocabCategory);
        });

        footerRow.appendChild(seeMoreBtn);
        groupBox.appendChild(footerRow);
      }

      gridEl.appendChild(groupBox);
    });
  }

  // 2. Render Expandable Tips & Safety List
  if (tipsPaneEl) {
    tipsPaneEl.replaceChildren();
    (vData.tips || []).forEach(function (tip, idx) {
      tipsPaneEl.appendChild(
        createExpandableSummaryCard(tip, idx, expandedTipsItems, function () {
          renderTerminalVocabSection(currentVocabQuery, currentVocabCategory);
        })
      );
    });
  }

  // 3. Render Expandable Mental Models & Walkthroughs List
  if (deepDivesEl) {
    deepDivesEl.replaceChildren();
    (vData.deepDives || []).forEach(function (dd, idx) {
      deepDivesEl.appendChild(
        createExpandableSummaryCard(dd, idx, expandedDeepDiveItems, function () {
          renderTerminalVocabSection(currentVocabQuery, currentVocabCategory);
        })
      );
    });
  }
}


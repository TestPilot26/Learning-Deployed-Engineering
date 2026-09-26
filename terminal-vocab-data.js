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
      helpfulFor: "Browse all essential terminal concepts, commands, flags, shortcuts, paths, and operators grouped by what they help you do."
    },
    {
      id: "Concepts",
      label: "Core concepts (Directory, Parent, Flag)",
      badgeClass: "badge-info",
      helpfulFor: "Start here! Plain-English definitions for the words used in every terminal guide: Directory vs. Folder, Parent Directory (..), Working Directory (.), Subfolder, Flag (-r), and Dotfiles (.env)."
    },
    {
      id: "Navigation",
      label: "Navigating folders",
      badgeClass: "badge-info",
      helpfulFor: "Helpful for checking which folder you (or your AI agent) are sitting in, moving between folders, opening Finder/VS Code, and freeing stuck ports."
    },
    {
      id: "Files",
      label: "Creating & managing files",
      badgeClass: "badge-secondary",
      helpfulFor: "Helpful for creating empty text files, printing text (echo), copying configs, renaming files, or deleting old folders."
    },
    {
      id: "Viewing & grep",
      label: "Reading, searching (grep) & testing URLs",
      badgeClass: "badge-success",
      helpfulFor: "What is 'grep'? It is simply Ctrl+F (or Cmd+F) for your terminal—searching inside one file or across hundreds of files at once to print every line containing your keyword."
    },
    {
      id: "Flags",
      label: "Search (grep) & command flags",
      badgeClass: "badge-neutral",
      helpfulFor: "Flags (starting with '-' or '--' like -i, -r, -n, --help) are extra settings you attach to a command—like telling grep to ignore case (-i) or search all subfolders (-r)."
    },
    {
      id: "Shortcuts",
      label: "Keyboard shortcuts",
      badgeClass: "badge-info",
      helpfulFor: "Helpful for auto-completing paths with Tab, stopping stuck servers with Ctrl+C, and recalling past commands."
    },
    {
      id: "Paths",
      label: "Path shorthands (., .., ~, /)",
      badgeClass: "badge-secondary",
      helpfulFor: "Helpful for stepping up to a parent directory (..), referencing your current folder (.), or jumping straight to your home folder (~)."
    },
    {
      id: "Operators",
      label: "Pipes, chains (&&) & redirects",
      badgeClass: "badge-success",
      helpfulFor: "Helpful for running commands in sequence (&&), chaining output into another command (|), or saving output into a file (>, >>)."
    }
  ],
  items: [
    // 0. Core Concepts (Plain-English building blocks)
    { command: "Directory", name: "Same Thing as a 'Folder'", category: "Concepts", badgeClass: "badge-info",
      description: "In the terminal, a 'Directory' is 100% the exact same thing as a 'Folder' in Mac Finder or Windows Explorer (which is why cd = Change Directory and mkdir = Make Directory).",
      example: "Folder == Directory (e.g. my-app/)" },
    { command: "Parent Directory (..)", name: "The Folder One Level Above You", category: "Concepts", badgeClass: "badge-info",
      description: "Folders nest like a family tree. The folder that holds your current folder is its 'Parent Directory' (written as '..'). If you are inside my-app/src, then my-app is the parent directory of src.",
      example: "cd ..   # Steps up into the parent folder" },
    { command: "Child / Subfolder", name: "A Folder Inside Your Current Folder", category: "Concepts", badgeClass: "badge-info",
      description: "Any folder sitting inside another folder is called a 'child directory' or 'subfolder'. If my-app contains src/, then src/ is a child subfolder of my-app.",
      example: "cd src   # Steps down into a child subfolder" },
    { command: "Working Directory (.)", name: "The Folder You Are Standing In Now", category: "Concepts", badgeClass: "badge-info",
      description: "Your terminal is always 'standing' inside one specific folder at a time—called your Current Working Directory (written as a single dot '.'). Run pwd anytime to see which one it is.",
      example: "pwd   # Prints your current working directory" },
    { command: "Flag / Option (-r, --help)", name: "Modifier Setting Attached to a Command", category: "Concepts", badgeClass: "badge-info",
      description: "Words starting with '-' or '--' after a command that change how it behaves. Short flags use one dash (-r, -la); full-word flags use two dashes (--help, --version).",
      example: "ls -la   |   git --help" },
    { command: "Dotfile (.env, .git)", name: "Hidden Configuration or History File", category: "Concepts", badgeClass: "badge-info",
      description: "Any file or folder whose name starts with a period (.) is hidden by default in Finder/Explorer so you don't accidentally delete secret keys (.env) or Git history (.git). Use ls -la to see them.",
      example: "ls -la   # Reveals .env, .gitignore, and .git/" },

    // 1. Navigation & Directory Management
    { command: "pwd", name: "Print Working Directory (Where Am I?)", category: "Navigation", badgeClass: "badge-info",
      description: "Prints the full folder path of the directory you are standing in right now.",
      example: "pwd  ->  /Users/lucy/workspace/my-app" },
    { command: "ls / ls -la", name: "List Files (All & Long Detail)", category: "Navigation", badgeClass: "badge-info",
      description: "Lists the files and subfolders inside your current directory. Adding -la shows hidden dotfiles (.env, .git) plus file sizes and dates.",
      example: "ls -la" },
    { command: "cd", name: "Change Directory (Move Between Folders)", category: "Navigation", badgeClass: "badge-info",
      description: "Moves your terminal into a child subfolder (cd src), up one level to the parent directory (cd ..), or back to your home folder (cd ~).",
      example: "cd src/   |   cd ..   |   cd ~" },
    { command: "mkdir", name: "Make Directory (Create New Folder)", category: "Navigation", badgeClass: "badge-info",
      description: "Creates a new empty folder inside your current working directory.",
      example: "mkdir components" },
    { command: "open . / code .", name: "Open Current Folder in Finder or VS Code", category: "Navigation", badgeClass: "badge-info",
      description: "The bridge between terminal and screen! 'open .' (Mac) or 'explorer .' (Windows) opens your current folder(.) in a visual window; 'code .' or 'cursor .' opens it in your code editor.",
      example: "open .   |   code .   |   cursor ." },
    { command: "which", name: "Locate Installed Program", category: "Navigation", badgeClass: "badge-info",
      description: "Checks if a tool (like node, python3, or git) is installed and prints the exact folder path where it lives.",
      example: "which node   |   which git" },
    { command: "lsof -i :PORT", name: "Find What Is Using a Local Port", category: "Navigation", badgeClass: "badge-info",
      description: "Finds which running background program (and its Process ID / PID) is hogging a port when your server says 'Address already in use'.",
      example: "lsof -i :3000" },
    { command: "kill -9 <PID>", name: "Force-Stop a Stuck Process by ID", category: "Navigation", badgeClass: "badge-info",
      description: "Shuts down a frozen background process using the PID number you found with lsof -i :3000 so the port is free again.",
      example: "kill -9 48210" },

    // 2. File Creation & Management
    { command: "touch", name: "Create Empty Plain-Text File", category: "Files", badgeClass: "badge-secondary",
      description: "Creates a brand-new empty plain-text file if it doesn't exist yet.",
      example: "touch notes.txt   |   touch .env" },
    { command: "echo", name: "Print Text or Variable", category: "Files", badgeClass: "badge-secondary",
      description: "Prints text to the terminal screen, checks an environment variable ($PATH), or writes a line into a file when paired with > or >>.",
      example: "echo \"Hello\"   |   echo $PATH" },
    { command: "cp / cp -r", name: "Copy File or Folder", category: "Files", badgeClass: "badge-secondary",
      description: "Copies a file to a new name or location. Add -r (recursive) to copy an entire folder and everything inside it.",
      example: "cp .env.example .env   |   cp -r src/ src-backup/" },
    { command: "mv", name: "Move or Rename File/Folder", category: "Files", badgeClass: "badge-secondary",
      description: "Moves a file/folder into a different directory, or renames it in place.",
      example: "mv old_name.js new_name.js" },
    { command: "rm / rm -r", name: "Remove (Permanent Delete — No Trash!)", category: "Files", badgeClass: "badge-secondary",
      description: "Permanently deletes a file (rm) or an entire folder and all its contents (rm -r). Bypasses the system Trash bin!",
      example: "rm temp.txt   |   rm -r old_folder/" },

    // 3. File Viewing, Searching (grep) & Testing URLs
    { command: "grep", name: "Search Inside Files ('Ctrl+F' for Terminal)", category: "Viewing & grep", badgeClass: "badge-success",
      description: "Searches inside a file (or across a whole project folder with -rn) for a word or pattern and prints every matching line. Short for 'Global Regular Expression Print'.",
      example: "grep \"error\" server.log   |   grep -rn \"Button\" src/" },
    { command: "cat", name: "Print Entire File to Screen", category: "Viewing & grep", badgeClass: "badge-success",
      description: "Dumps the entire text contents of a file directly into the terminal window (short for 'concatenate').",
      example: "cat package.json" },
    { command: "head / tail -f", name: "Preview Top Lines or Watch Live Logs", category: "Viewing & grep", badgeClass: "badge-success",
      description: "'head' shows the first 10 lines of a file; 'tail -f' shows the bottom lines and streams new log entries live as your app runs.",
      example: "head -n 20 app.log   |   tail -f server.log" },
    { command: "less", name: "Scrollable File Reader (Press 'q' to Exit)", category: "Viewing & grep", badgeClass: "badge-success",
      description: "Opens a long file in a neat page-by-page reader so it doesn't flood your screen. Use Up/Down arrows to scroll and press 'q' to quit back to the prompt!",
      example: "less server.log   # (Press q to exit)" },
    { command: "wc -l", name: "Count Total Lines", category: "Viewing & grep", badgeClass: "badge-success",
      description: "Counts how many lines are in a file (or how many matches came out of a piped command).",
      example: "wc -l src/app.js" },
    { command: "curl", name: "Fetch / Test a URL or API Endpoint", category: "Viewing & grep", badgeClass: "badge-success",
      description: "Requests a web URL or localhost API right from the terminal and prints the raw response (or status headers with -I). AI agents use curl constantly to test if a server works.",
      example: "curl -I http://localhost:3000   |   curl https://api.github.com" },

    // 4. Search (grep) & Command Flags
    { command: "--help (or -h)", name: "Built-in Command Manual & Cheat Sheet", category: "Flags", badgeClass: "badge-neutral",
      description: "Prints a summary of what any command does and lists all of its available flags right on your screen.",
      example: "git --help   |   grep --help   |   npm --help" },
    { command: "-i", name: "Ignore Case (grep flag)", category: "Flags", badgeClass: "badge-neutral",
      description: "Tells grep to search case-insensitively so uppercase and lowercase both match (matches Login, LOGIN, or login).",
      example: "grep -i \"login\" README.md" },
    { command: "-r (or -R)", name: "Recursive (Include All Subfolders)", category: "Flags", badgeClass: "badge-neutral",
      description: "'Recursive' means 'step inside every child subfolder, and every subfolder inside that'. Used with grep -r (search all subfolders), cp -r (copy folder), and rm -r (delete folder).",
      example: "grep -r \"TODO\" src/" },
    { command: "-n", name: "Line Numbers (grep flag)", category: "Flags", badgeClass: "badge-neutral",
      description: "Tells grep to print the exact line number next to every match it finds so you know right where to look in your editor.",
      example: "grep -rn \"fetchUser\" src/" },
    { command: "-v", name: "Invert Match (Exclude Noise)", category: "Flags", badgeClass: "badge-neutral",
      description: "Tells grep to hide lines that contain that word and only print lines that do NOT match it (great for filtering out noisy logs).",
      example: "grep -v \"DEBUG\" server.log" },
    { command: "mkdir -p", name: "Make Parent Directories Automatically", category: "Flags", badgeClass: "badge-neutral",
      description: "Normally 'mkdir a/b/c' fails if the outer parent folders 'a' and 'b' don't exist yet. Adding '-p' creates the whole nested chain of parent + child folders in one go.",
      example: "mkdir -p src/components/ui" },
    { command: "-f", name: "Force (rm -f) or Follow Live (tail -f)", category: "Flags", badgeClass: "badge-neutral",
      description: "In 'rm -f' it forces deletion without asking 'are you sure?'; in 'tail -f' it follows a log file live as new lines arrive.",
      example: "rm -f temp.log   |   tail -f app.log" },
    { command: "sudo", name: "Superuser Do (Run as Administrator)", category: "Flags", badgeClass: "badge-neutral",
      description: "Runs a command with full computer administrator privileges (prompts for your laptop password). Watch-out: never run 'sudo' for a normal project file unless you know why it needs system-wide access!",
      example: "sudo lsof -i :80" },

    // 5. Keyboard Shortcuts
    { command: "Tab", name: "Auto-Complete Folder & File Names", category: "Shortcuts", badgeClass: "badge-info",
      description: "Finishes typing a folder or file name for you (press Tab twice to see all matching options). Prevents spelling typos!",
      example: "cd comp[Tab] -> cd components/" },
    { command: "Ctrl + C", name: "Emergency Brake (Stop Running Command)", category: "Shortcuts", badgeClass: "badge-info",
      description: "Immediately stops the currently running command or local server and returns your typing prompt. (Does NOT mean Copy in a terminal!)",
      example: "Press Ctrl + C to stop localhost server" },
    { command: "Up / Down Arrows", name: "Cycle Through Past Commands", category: "Shortcuts", badgeClass: "badge-info",
      description: "Press Up Arrow to recall the commands you ran earlier one by one so you never have to retype them.",
      example: "Press Up Arrow then Enter to rerun last command" },
    { command: "Ctrl + R", name: "Search Past Command History", category: "Shortcuts", badgeClass: "badge-info",
      description: "Searches backward through your command history as you type any keyword from a command you ran days ago.",
      example: "Ctrl + R then type 'npm run'" },
    { command: "Ctrl + L (or clear)", name: "Clear Terminal Screen", category: "Shortcuts", badgeClass: "badge-info",
      description: "Wipes old log clutter off the terminal window and brings your prompt to the top without deleting any files.",
      example: "Ctrl + L" },
    { command: "Ctrl + A / Ctrl + E", name: "Jump to Start / End of Line", category: "Shortcuts", badgeClass: "badge-info",
      description: "Jumps your cursor to the very beginning (Ctrl + A) or very end (Ctrl + E) of the command you are currently typing.",
      example: "Ctrl + A to add 'sudo ' at the start of a line" },

    // 6. Relative & Absolute Paths
    { command: ".", name: "Current Directory ('Right Here')", category: "Paths", badgeClass: "badge-secondary",
      description: "A single dot refers to the exact folder you are standing in right now (your Working Directory).",
      example: "grep -rn \"API_URL\" .   |   open ." },
    { command: "..", name: "Parent Directory ('One Folder Up')", category: "Paths", badgeClass: "badge-secondary",
      description: "Two dots refer to the outer folder one level above you that holds your current folder. If you are in /Users/lucy/my-app/src, '..' is /Users/lucy/my-app.",
      example: "cd ..   # Steps one folder level up" },
    { command: "../..", name: "Grandparent Directory ('Two Folders Up')", category: "Paths", badgeClass: "badge-secondary",
      description: "Steps two folder levels up the family tree (the parent of your parent directory).",
      example: "cd ../../" },
    { command: "~", name: "Home Directory (/Users/yourname)", category: "Paths", badgeClass: "badge-secondary",
      description: "Shorthand for your personal user home folder (/Users/lucy on Mac or /home/lucy on Linux) from anywhere on the machine.",
      example: "cd ~/workspace/my-app" },
    { command: "/", name: "Root Directory (Bottom Trunk of Computer)", category: "Paths", badgeClass: "badge-secondary",
      description: "A slash at the very start of a path means the root of the entire hard drive. Slashes in the middle of a path simply separate parent and child folders.",
      example: "/Users/lucy/workspace/my-app" },

    // 7. Pipes, Chains & Redirects
    { command: "&&", name: "Chain Commands (Run Next If First Succeeds)", category: "Operators", badgeClass: "badge-success",
      description: "Runs the first command, and ONLY if it succeeds without an error, immediately runs the second command. AI agents use && constantly to combine steps.",
      example: "mkdir my-app && cd my-app" },
    { command: "|", name: "Pipe Operator (Feed Output into Next Command)", category: "Operators", badgeClass: "badge-success",
      description: "Takes the text output printed by the command on the left and feeds it directly into the command on the right (most often paired with grep).",
      example: "ls -la | grep \".env\"" },
    { command: ">", name: "Redirect & Overwrite File", category: "Operators", badgeClass: "badge-success",
      description: "Saves a command's output into a text file, completely overwriting whatever was inside that file before.",
      example: "echo \"Hello\" > notes.txt" },
    { command: ">>", name: "Redirect & Append to End of File", category: "Operators", badgeClass: "badge-success",
      description: "Tucks a command's output safely onto the bottom of a file without erasing existing lines.",
      example: "git status >> recent_changes.txt" }
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
      title: "The folder family tree: What is a 'Parent Directory' (..), 'Current Directory' (.), and 'Subfolder'?",
      badge: "Folder family tree",
      badgeClass: "badge-info",
      summary: "Folders nest inside each other like Russian nesting dolls or a family tree: the outer folder is the Parent (..), where you stand now is Current (.), and inner folders are Children (subfolders).",
      points: [
        "Directory = Folder: First, remember that 'Directory' is simply the terminal's word for a normal Folder.",
        "Imagine this path: /Users/lucy/workspace/my-app/src. Here, 'workspace' holds 'my-app', and 'my-app' holds 'src'.",
        "If you are standing inside 'my-app' (your Current Working Directory, written as '.'): then 'workspace' one level above you is your Parent Directory (written as '..'), and 'src' inside you is a Child Directory (subfolder).",
        "Moving up vs. down the tree: Typing cd src steps DOWN into the child subfolder. Typing cd .. steps UP into the parent directory. And mkdir -p a/b/c means 'create folder c, and automatically create its parent folders a and b if they don't exist yet'."
      ]
    },
    {
      title: "What is 'grep' (and why do AI coding agents run 'grep -rn' constantly)?",
      badge: "Understanding grep",
      badgeClass: "badge-success",
      summary: "'grep' is simply Ctrl+F (or Cmd+F) for the terminal—it searches inside a file or across an entire project folder in milliseconds and prints every line that matches.",
      points: [
        "Why is it called 'grep'? It comes from an old 1970s Unix text-editor command 'g/re/p' which stood for Global Regular Expression Print—meaning 'search globally for a pattern and print matching lines'.",
        "Searching inside a single file: Running grep \"error\" server.log scans server.log and prints only the lines containing the word 'error'.",
        "Searching an entire project folder ('grep -rn'): Adding -r (recursive across all subfolders) and -n (show line numbers)—like grep -rn \"CheckoutButton\" .—scans every file in your current folder (.) and prints exact matches like src/components/Cart.tsx:42.",
        "Filtering another command's output ('| grep'): You can pipe any long terminal list into grep—for example, ls -la | grep \".env\" filters a busy folder list down to only lines mentioning .env."
      ]
    },
    {
      title: "How Tab auto-completion saves typing and catches typos early",
      badge: "Shortcuts in practice",
      badgeClass: "badge-info",
      summary: "Type the first 3 letters of any folder and press Tab—if it doesn't complete, you immediately know there's a typo.",
      points: [
        "To navigate to src/components/dashboard, you only type: cd sr [Tab] comp [Tab] dash [Tab].",
        "If pressing Tab does nothing, either there is a spelling typo in the letters you typed, or two folders start with those same letters (press Tab twice to list all matches)."
      ]
    },
    {
      title: "Absolute vs. relative paths: Why 'No such file or directory' happens",
      badge: "Path mental model",
      badgeClass: "badge-secondary",
      summary: "Relative paths start from your current pwd; absolute paths start from the root slash (/) or home (~).",
      points: [
        "Suppose your project lives at /Users/lucy/workspace/my-app/src/components.",
        "Scenario A (Sitting in /Users/lucy/workspace/my-app): Both the absolute path (cd /Users/lucy/workspace/my-app/src/components) and the relative path (cd src/components) work because src/ sits directly inside your current folder.",
        "Scenario B (Sitting in your home folder ~): The absolute path still works from anywhere, but the relative path (cd src/components) fails with 'No such file or directory' because there is no src/ folder directly inside ~."
      ]
    },
    {
      title: "Composing pipes (|), chains (&&), redirects (>, >>), and grep in real workflows",
      badge: "Chaining commands",
      badgeClass: "badge-success",
      summary: "Connect small commands like Lego bricks: run in sequence with &&, filter lists with | grep, save logs with >>, and count items with | wc -l.",
      points: [
        "Mental model for grep: [ All Text / File Contents ] -> [ grep \"keyword\" ] -> [ Only matching lines shown ].",
        "Create a folder and immediately step inside it: mkdir my-new-app && cd my-new-app",
        "Save your recent commit log to a file (overwrite): git log -n 10 > recent_changes.txt",
        "Append today's working tree status to that same file: git status >> recent_changes.txt",
        "Find a specific file in a busy folder: ls -la src/components | grep \"Navbar\"",
        "Count how many items live inside a directory: ls src/components | wc -l"
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


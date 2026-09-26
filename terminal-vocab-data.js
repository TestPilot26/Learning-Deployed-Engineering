// Searchable Terminal Vocabulary & Interactive Walkthrough Data
// Attached to the "Command line interface & the terminal" stop (#stop/cli-and-terminal)

window.TERMINAL_VOCAB_DATA = {
  whyItMatters:
    "Learning these terminal essentials matters for two reasons: first, you can track what an AI coding agent is actually doing to your files and processes in real time as it runs commands; second, the exact same vocabulary works across almost every server, cloud machine, and local environment you will ever touch.",
  safetyTip:
    "Safety tip: Terminal deletions bypass your system Trash or Recycle Bin. Once a file or directory is removed with rm or rm -r, it cannot be easily recovered—always check your current path with pwd or ls before running rm.",
  categories: [
    { id: "all", label: "All essentials", badgeClass: "badge-info" },
    { id: "Navigation", label: "Navigation & directories", badgeClass: "badge-info" },
    { id: "Files", label: "File management", badgeClass: "badge-secondary" },
    { id: "Viewing & grep", label: "Viewing & grep search", badgeClass: "badge-success" },
    { id: "Shortcuts", label: "Keyboard shortcuts", badgeClass: "badge-info" },
    { id: "Paths", label: "Relative & absolute paths", badgeClass: "badge-secondary" },
    { id: "Operators", label: "Pipes & redirects", badgeClass: "badge-success" },
    { id: "Flags", label: "Essential flags", badgeClass: "badge-neutral" }
  ],
  items: [
    // Navigation & Directory Management
    {
      command: "pwd",
      name: "Print Working Directory",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Outputs the full absolute path of the folder you are sitting in right now.",
      example: "pwd  # -> /Users/lucy/workspace/deployed-eng-pipeline"
    },
    {
      command: "ls -la",
      name: "List (All & Long)",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Lists all files—including hidden dotfiles starting with '.' like .env or .git—showing permissions, owner, file size, and modification date.",
      example: "ls -la"
    },
    {
      command: "cd",
      name: "Change Directory",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Moves your terminal session into a different folder, up one level (..), or straight to your home directory (~).",
      example: "cd src/components/   |   cd ..   |   cd ~"
    },
    {
      command: "mkdir",
      name: "Make Directory",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Creates a new folder in the current location.",
      example: "mkdir new_folder"
    },
    {
      command: "mkdir -p",
      name: "Make Parent Directories",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "mkdir doesn't use a '-f' flag—instead, '-p' automatically builds the entire missing nested folder hierarchy in one go and avoids errors if a folder already exists.",
      example: "mkdir -p src/experiments/theory_of_change"
    },

    // File Creation & Management
    {
      command: "touch",
      name: "Touch File",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Creates a new empty file if it doesn't exist, or updates the last-modified timestamp of an existing file.",
      example: "touch notes.txt"
    },
    {
      command: "cp",
      name: "Copy",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Copies files or directories (with -r) from a source path to a destination path.",
      example: "cp config.json config.backup.json"
    },
    {
      command: "mv",
      name: "Move / Rename",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Moves a file or folder to a new location, or renames it in place.",
      example: "mv old_name.js new_name.js"
    },
    {
      command: "rm / rm -r",
      name: "Remove Permanently",
      category: "Files",
      badgeClass: "badge-secondary",
      description: "Deletes files permanently without sending them to Trash. Adding -r removes a directory and everything inside it recursively.",
      example: "rm temp.txt   |   rm -r old_build_dir/"
    },

    // File Viewing & Text Searching
    {
      command: "cat",
      name: "Concatenate & Print",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Outputs the entire contents of one or more files directly into the terminal window.",
      example: "cat vercel.json"
    },
    {
      command: "head",
      name: "Head (First Lines)",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Displays the first few lines of a file (defaults to 10 lines; use -n to specify how many).",
      example: "head -n 20 app.log"
    },
    {
      command: "tail -f",
      name: "Tail Follow (Live Logs)",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Prints the end of a file and stays open, streaming new log lines live as your app or AI agent writes them.",
      example: "tail -f server.log"
    },
    {
      command: "less",
      name: "Interactive Page Viewer",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Opens a scrollable viewer for large files so they don't flood your screen (press q to exit).",
      example: "less big_file.log"
    },
    {
      command: "grep",
      name: "Global Regular Expression Print",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Ctrl + F for the terminal: searches for a specific text pattern inside files or piped output and prints only the matching lines.",
      example: "grep \"ERROR\" server.log"
    },
    {
      command: "wc -l",
      name: "Word / Line Count",
      category: "Viewing & grep",
      badgeClass: "badge-success",
      description: "Counts the number of lines in a file or piped command output—handy for checking file size ceilings or counting items in a folder.",
      example: "ls src/ | wc -l"
    },
    {
      command: "which",
      name: "Locate Executable",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Shows the exact path of the program that runs when you type a command, helping debug missing tool installs.",
      example: "which node   |   which git"
    },
    {
      command: "lsof -i :PORT",
      name: "List Open Port Processes",
      category: "Navigation",
      badgeClass: "badge-info",
      description: "Shows which running process is occupying a local port (like :3000 or :8000) when a server says 'Address already in use'.",
      example: "lsof -i :3000"
    },

    // Essential Keyboard Shortcuts
    {
      command: "Tab",
      name: "Auto-completion",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Type the first few letters of a command or folder path and press Tab to auto-complete it (press Tab twice to list all possibilities).",
      example: "cd exp[Tab] -> cd experiments/"
    },
    {
      command: "Up / Down Arrows",
      name: "Command History",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Cycles backward and forward through previously executed commands so you never retype long commands.",
      example: "Press Up Arrow to rerun your last test or server command"
    },
    {
      command: "Ctrl + C",
      name: "Kill / Cancel Process",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Instantly stops a running dev server, frozen script, or mistaken command and returns you to a clean prompt.",
      example: "Press Ctrl + C to stop a running localhost server"
    },
    {
      command: "Ctrl + L (or clear)",
      name: "Clear Terminal Screen",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Wipes visual clutter off the terminal window and brings your prompt back to the top.",
      example: "Ctrl + L"
    },
    {
      command: "Ctrl + R",
      name: "Reverse Search History",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Type any fragment of a command you ran hours or days ago (e.g., 'theory_of_change') to find and rerun it immediately.",
      example: "Press Ctrl + R, then type 'vercel' or 'ssh'"
    },
    {
      command: "Ctrl + A / Ctrl + E",
      name: "Jump to Start / End of Line",
      category: "Shortcuts",
      badgeClass: "badge-info",
      description: "Moves your cursor straight to the very beginning (Ctrl + A) or very end (Ctrl + E) of the current command line.",
      example: "Ctrl + A to add 'sudo' or fix a command prefix"
    },

    // Anatomy of Relative & Absolute Paths
    {
      command: ".",
      name: "Current Directory",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Refers to the exact directory you are sitting in right now.",
      example: "./config/settings.json"
    },
    {
      command: "..",
      name: "Parent Directory (One Level Up)",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Steps one folder up the hierarchy from your current location.",
      example: "cd ../legacy"
    },
    {
      command: "../..",
      name: "Two Levels Up",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Steps two folders up the directory tree.",
      example: "cd ../../workspace"
    },
    {
      command: "~",
      name: "Home Directory",
      category: "Paths",
      badgeClass: "badge-secondary",
      description: "Shorthand for your user home folder (e.g., /Users/lucy or /home/lucy), regardless of where you currently are.",
      example: "cd ~/deployed-eng-pipeline"
    },

    // Core Operators (Pipes & Redirects)
    {
      command: ">",
      name: "Redirect / Overwrite",
      category: "Operators",
      badgeClass: "badge-success",
      description: "Sends command output into a file, overwriting any existing content in that file.",
      example: "echo \"Hello\" > notes.txt"
    },
    {
      command: ">>",
      name: "Redirect / Append",
      category: "Operators",
      badgeClass: "badge-success",
      description: "Appends command output to the end of a file without erasing what is already there.",
      example: "git status >> my_recent_changes.txt"
    },
    {
      command: "|",
      name: "Pipe Operator",
      category: "Operators",
      badgeClass: "badge-success",
      description: "Feeds the output of the left-hand command directly as input into the right-hand command.",
      example: "ls -la | grep \"theory\""
    },

    // Useful grep & Workspace Flags
    {
      command: "grep -i",
      name: "Ignore Case Flag",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Makes grep case-insensitive so it matches 'Theory', 'THEORY', or 'theory'.",
      example: "grep -i \"theory\" README.md"
    },
    {
      command: "grep -r",
      name: "Recursive Search Flag",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Searches through every file inside a folder and all of its nested subfolders.",
      example: "grep -r \"import\" src/consequence_eng/"
    },
    {
      command: "grep -n",
      name: "Line Numbers Flag",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Prints the exact 1-indexed line number beside every matching line.",
      example: "grep -n \"error\" server.log"
    },
    {
      command: "grep -v",
      name: "Invert Match Flag",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "Filters out noise by printing every line that does NOT match the given word.",
      example: "grep -v \"DEBUG\" server.log"
    },
    {
      command: "-f (Force / Fresh)",
      name: "Force or Fresh Initialization Flag",
      category: "Flags",
      badgeClass: "badge-neutral",
      description: "In workspace or CLI tools, instructs the tool to force an action or initialize a fresh client/workspace rather than reusing an old state.",
      example: "jjd -f codelab-workspace"
    }
  ],
  deepDives: [
    {
      title: "How Tab auto-completion saves typing (and catches typos)",
      badge: "Shortcuts in practice",
      badgeClass: "badge-info",
      points: [
        "To navigate to experimental/consequence_eng/theory_of_change, you only type: cd exp [Tab] con [Tab] the [Tab].",
        "If pressing Tab doesn't complete the word, it immediately tells you one of two things: either there is a typo in the letters you typed, or multiple folders start with those exact same letters (press Tab twice to see them)."
      ]
    },
    {
      title: "Absolute vs. relative paths: Why 'No such file or directory' happens",
      badge: "Path mental model",
      badgeClass: "badge-secondary",
      points: [
        "Suppose your project lives at /Users/lucy/workspace/project/experimental/consequence_eng/theory_of_change.",
        "Scenario A (Sitting in /Users/lucy/workspace/project): Both the absolute command (cd /Users/lucy/workspace/project/experimental/...) and the relative command (cd experimental/consequence_eng/theory_of_change) work, because experimental/ sits directly inside your current pwd.",
        "Scenario B (Sitting in your home folder ~): The absolute command still works from anywhere, but the relative command fails with 'No such file or directory' because there is no experimental/ folder directly inside ~."
      ]
    },
    {
      title: "Combining pipes (|), redirects (>, >>), and grep in real workflows",
      badge: "Composing commands",
      badgeClass: "badge-success",
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

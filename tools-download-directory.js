// Deployed Eng Pipeline — Step 1: Categorized Tool Download & Setup Directory
// Renders the 6 numbered pieces of a modern coding toolkit with bespoke SVG brand/tool icons,
// direct download/signup links, 1-line option differentiators, and Left Side Panel deep-dives.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

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

  // Bespoke, recognizable SVG icon for each of the 24 sites/tools (100% GM3 tokens)
  function createToolBrandSvg(iconId) {
    var svg = svgEl("svg", {
      viewBox: "0 0 40 40",
      width: "38",
      height: "38",
      class: "tool-download-brand-svg",
      "aria-hidden": "true"
    });

    if (iconId === "vscode") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 27 8 L 32 10.5 L 32 29.5 L 27 32 L 15 21.5 L 10 25.5 L 7.5 24 L 7.5 16 L 10 14.5 L 15 18.5 Z", fill: "var(--color-primary)" }));
      svg.appendChild(svgEl("path", { d: "M 27 13.5 L 19 20 L 27 26.5 Z", fill: "var(--color-surface-container-lowest)" }));
    } else if (iconId === "cursor") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-on-surface)" }));
      svg.appendChild(svgEl("polygon", { points: "20,7 32,14 32,26 20,33 8,26 8,14", fill: "none", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2" }));
      svg.appendChild(svgEl("polygon", { points: "20,7 32,14 20,20 8,14", fill: "var(--color-primary-fixed-dim)" }));
      svg.appendChild(svgEl("polygon", { points: "20,20 32,14 32,26 20,33", fill: "var(--color-surface-container-lowest)" }));
    } else if (iconId === "windsurf") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-secondary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 8 26 C 13 14, 22 12, 32 15 C 25 19, 22 24, 26 29 C 18 28, 13 28, 8 26 Z", fill: "var(--color-secondary)" }));
      svg.appendChild(svgEl("path", { d: "M 11 31 C 17 26, 24 26, 31 29", fill: "none", stroke: "var(--color-on-secondary-container)", "stroke-width": "2.4", "stroke-linecap": "round" }));
    } else if (iconId === "colab") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-surface-container-highest)" }));
      svg.appendChild(svgEl("circle", { cx: "15", cy: "20", r: "7", fill: "none", stroke: "var(--color-error)", "stroke-width": "3.8" }));
      svg.appendChild(svgEl("circle", { cx: "25", cy: "20", r: "7", fill: "none", stroke: "var(--color-primary)", "stroke-width": "3.8" }));
    } else if (iconId === "replit") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-error-container)" }));
      svg.appendChild(svgEl("rect", { x: "10", y: "8", width: "10", height: "8", rx: "2.5", fill: "var(--color-error)" }));
      svg.appendChild(svgEl("rect", { x: "20", y: "16", width: "10", height: "8", rx: "2.5", fill: "var(--color-error)" }));
      svg.appendChild(svgEl("rect", { x: "10", y: "24", width: "10", height: "8", rx: "2.5", fill: "var(--color-error)" }));
    } else if (iconId === "claude") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-error-container)" }));
      [0, 30, 60, 90, 120, 150].forEach(function (deg) {
        svg.appendChild(svgEl("line", {
          x1: "20", y1: "8", x2: "20", y2: "32",
          stroke: "var(--color-on-error-container)",
          "stroke-width": "2.8",
          "stroke-linecap": "round",
          transform: "rotate(" + deg + " 20 20)"
        }));
      });
    } else if (iconId === "copilot") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgEl("rect", { x: "8", y: "13", width: "24", height: "14", rx: "7", fill: "var(--color-on-primary-container)" }));
      svg.appendChild(svgEl("rect", { x: "12", y: "16", width: "6", height: "8", rx: "3", fill: "var(--color-secondary-fixed-dim)" }));
      svg.appendChild(svgEl("rect", { x: "22", y: "16", width: "6", height: "8", rx: "3", fill: "var(--color-secondary-fixed-dim)" }));
    } else if (iconId === "gemini") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 20 6 C 20 15, 25 20, 34 20 C 25 20, 20 25, 20 34 C 20 25, 15 20, 6 20 C 15 20, 20 15, 20 6 Z", fill: "var(--color-primary)" }));
      svg.appendChild(svgEl("circle", { cx: "29", cy: "11", r: "2.5", fill: "var(--color-purple-40)" }));
    } else if (iconId === "openai") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-tertiary-container)" }));
      svg.appendChild(svgEl("polygon", { points: "20,8 30,14 30,26 20,32 10,26 10,14", fill: "none", stroke: "var(--color-tertiary)", "stroke-width": "2.6" }));
      svg.appendChild(svgEl("circle", { cx: "20", cy: "20", r: "4.5", fill: "var(--color-tertiary)" }));
    } else if (iconId === "homebrew") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-surface-container-highest)" }));
      svg.appendChild(svgEl("rect", { x: "11", y: "14", width: "15", height: "18", rx: "3", fill: "var(--color-primary)" }));
      svg.appendChild(svgEl("path", { d: "M 26 17 L 30 17 A 3 3 0 0 1 30 27 L 26 27", fill: "none", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
      svg.appendChild(svgEl("path", { d: "M 10 14 C 10 10, 15 9, 18 12 C 21 9, 27 10, 27 14 Z", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "1.5" }));
    } else if (iconId === "python") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 14 9 L 23 9 A 4 4 0 0 1 27 13 L 27 19 L 15 19 A 4 4 0 0 0 11 23 L 11 14 A 5 5 0 0 1 14 9 Z", fill: "var(--color-primary)" }));
      svg.appendChild(svgEl("path", { d: "M 26 31 L 17 31 A 4 4 0 0 1 13 27 L 13 21 L 25 21 A 4 4 0 0 0 29 17 L 29 26 A 5 5 0 0 1 26 31 Z", fill: "var(--color-tertiary)" }));
      svg.appendChild(svgEl("circle", { cx: "16", cy: "13", r: "1.5", fill: "var(--color-surface-container-lowest)" }));
      svg.appendChild(svgEl("circle", { cx: "24", cy: "27", r: "1.5", fill: "var(--color-surface-container-lowest)" }));
    } else if (iconId === "nodejs") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-tertiary-container)" }));
      svg.appendChild(svgEl("polygon", { points: "20,7 31,13.5 31,26.5 20,33 9,26.5 9,13.5", fill: "var(--color-tertiary)" }));
      svg.appendChild(svgEl("path", { d: "M 16 16 L 20 13.5 L 24 16 L 24 24 L 20 26.5 L 16 24 Z", fill: "var(--color-surface-container-lowest)" }));
    } else if (iconId === "git") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-error-container)" }));
      svg.appendChild(svgEl("polygon", { points: "20,6 34,20 20,34 6,20", fill: "var(--color-error)" }));
      svg.appendChild(svgEl("line", { x1: "15", y1: "15", x2: "24", y2: "24", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2.4" }));
      svg.appendChild(svgEl("line", { x1: "19", y1: "13", x2: "19", y2: "26", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2.4" }));
      svg.appendChild(svgEl("circle", { cx: "19", cy: "13", r: "2.5", fill: "var(--color-surface-container-lowest)" }));
      svg.appendChild(svgEl("circle", { cx: "19", cy: "26", r: "2.5", fill: "var(--color-surface-container-lowest)" }));
      svg.appendChild(svgEl("circle", { cx: "25", cy: "20", r: "2.5", fill: "var(--color-surface-container-lowest)" }));
    } else if (iconId === "github") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-on-surface)" }));
      svg.appendChild(svgEl("path", {
        d: "M 20 8 C 13.4 8 8 13.4 8 20 C 8 25.3 11.4 29.8 16.2 31.4 C 16.8 31.5 17 31.1 17 30.8 L 17 28.6 C 13.7 29.3 13 27 13 27 C 12.5 25.6 11.7 25.3 11.7 25.3 C 10.6 24.6 11.8 24.6 11.8 24.6 C 13 24.7 13.6 25.8 13.6 25.8 C 14.7 27.6 16.4 27.1 17.1 26.8 C 17.2 26 17.5 25.5 17.9 25.2 C 15.2 24.9 12.4 23.9 12.4 19.3 C 12.4 18 12.9 16.9 13.6 16.1 C 13.5 15.8 13.1 14.5 13.7 12.9 C 13.7 12.9 14.7 12.6 17 14.1 C 18 13.8 19 13.7 20 13.7 C 21 13.7 22 13.8 23 14.1 C 25.3 12.6 26.3 12.9 26.3 12.9 C 26.9 14.5 26.5 15.8 26.4 16.1 C 27.1 16.9 27.6 18 27.6 19.3 C 27.6 23.9 24.8 24.9 22.1 25.2 C 22.6 25.6 23 26.4 23 27.6 L 23 30.8 C 23 31.1 23.2 31.5 23.8 31.4 C 28.6 29.8 32 25.3 32 20 C 32 13.4 26.6 8 20 8 Z",
        fill: "var(--color-surface-container-lowest)"
      }));
    } else if (iconId === "gitlab") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-error-container)" }));
      svg.appendChild(svgEl("polygon", { points: "12,9 16,20 8,20", fill: "var(--color-error)" }));
      svg.appendChild(svgEl("polygon", { points: "28,9 32,20 24,20", fill: "var(--color-error)" }));
      svg.appendChild(svgEl("polygon", { points: "8,20 32,20 20,31", fill: "var(--color-on-error-container)" }));
    } else if (iconId === "huggingface") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-secondary-container)" }));
      svg.appendChild(svgEl("circle", { cx: "20", cy: "20", r: "11", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-secondary)", "stroke-width": "2.4" }));
      svg.appendChild(svgEl("circle", { cx: "16", cy: "18", r: "1.8", fill: "var(--color-on-surface)" }));
      svg.appendChild(svgEl("circle", { cx: "24", cy: "18", r: "1.8", fill: "var(--color-on-surface)" }));
      svg.appendChild(svgEl("path", { d: "M 15 23 C 17 26, 23 26, 25 23", fill: "none", stroke: "var(--color-secondary)", "stroke-width": "2.2", "stroke-linecap": "round" }));
    } else if (iconId === "supabase") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-tertiary-container)" }));
      svg.appendChild(svgEl("polygon", { points: "22,7 10,22 19,22 18,33 30,18 21,18", fill: "var(--color-tertiary)" }));
    } else if (iconId === "neon") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-on-surface)" }));
      svg.appendChild(svgEl("path", { d: "M 11 29 L 11 11 L 23 24 L 23 11 L 29 15 L 29 31 L 17 19 L 17 29 Z", fill: "var(--color-tertiary-fixed-dim)" }));
    } else if (iconId === "firebase") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-error-container)" }));
      svg.appendChild(svgEl("polygon", { points: "11,28 16,9 21,18 26,12 29,28 20,33", fill: "var(--color-error)" }));
      svg.appendChild(svgEl("polygon", { points: "11,28 20,17 29,28 20,33", fill: "var(--color-on-error-container)" }));
    } else if (iconId === "upstash") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-tertiary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 10 15 A 10 10 0 0 0 30 15", fill: "none", stroke: "var(--color-tertiary)", "stroke-width": "3.2", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: "M 14 21 A 6 6 0 0 0 26 21", fill: "none", stroke: "var(--color-on-tertiary-container)", "stroke-width": "3.2", "stroke-linecap": "round" }));
    } else if (iconId === "vercel") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-on-surface)" }));
      svg.appendChild(svgEl("polygon", { points: "20,9 32,29 8,29", fill: "var(--color-surface-container-lowest)" }));
    } else if (iconId === "render") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-secondary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 11 11 L 23 11 A 6 6 0 0 1 23 23 L 18 23 L 28 31 L 22 31 L 13 23 L 11 23 Z", fill: "var(--color-secondary)" }));
    } else if (iconId === "railway") {
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgEl("line", { x1: "9", y1: "14", x2: "31", y2: "14", stroke: "var(--color-purple-40)", "stroke-width": "3", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("line", { x1: "9", y1: "26", x2: "31", y2: "26", stroke: "var(--color-purple-40)", "stroke-width": "3", "stroke-linecap": "round" }));
      [14, 20, 26].forEach(function (x) {
        svg.appendChild(svgEl("line", { x1: String(x), y1: "11", x2: String(x), y2: "29", stroke: "var(--color-primary)", "stroke-width": "2.4", "stroke-linecap": "round" }));
      });
    } else {
      // cloudrun
      svg.appendChild(svgEl("rect", { x: "2", y: "2", width: "36", height: "36", rx: "10", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgEl("polygon", { points: "12,11 28,20 12,29 16,20", fill: "var(--color-primary)" }));
      svg.appendChild(svgEl("polygon", { points: "19,11 33,20 19,29 23,20", fill: "var(--color-tertiary)" }));
    }
    return svg;
  }

  var TOOL_GROUPS = [
    {
      num: "1",
      title: "1. Get a coding environment (Code editors, IDEs & notebooks)",
      badge: "Piece 1 of 6 · Pick 1 to start",
      badgeClass: "badge-info",
      whatItDoes:
        "Where you open your project folder, edit plain-text code files (instead of Word or Google Docs, which inject hidden formatting that breaks code), and run a built-in terminal.",
      options: [
        {
          id: "dl-vscode",
          iconId: "vscode",
          name: "VS Code (Visual Studio Code)",
          tag: "Recommended starter · Free IDE",
          tagClass: "badge-success",
          url: "https://code.visualstudio.com/Download",
          actionLabel: "Download VS Code",
          oneLiner:
            "The free, universal code editor with a file tree, plain-text editor, and built-in terminal; best all-around starting point.",
          whatItIs:
            "Visual Studio Code (VS Code) is the world's most widely used free code editor. It shows your project's folder tree on the left, your plain-text code files in the center, and your built-in Terminal at the bottom (Ctrl+` or Cmd+`).",
          whenToPick:
            "Pick VS Code if you want the standard, industry-wide editor that matches 95% of tutorials and lets you plug in any AI extension (Copilot, Claude Code, Gemini).",
          setupCommand: "# Or install via Homebrew on Mac:\nbrew install --cask visual-studio-code"
        },
        {
          id: "dl-cursor",
          iconId: "cursor",
          name: "Cursor",
          tag: "AI-native IDE",
          tagClass: "badge-info",
          url: "https://www.cursor.com/",
          actionLabel: "Download Cursor",
          oneLiner:
            "Built directly on top of VS Code, with an AI coding agent baked into the editor that can edit multiple files at once.",
          whatItIs:
            "Cursor is a fork of VS Code—meaning every button, shortcut, and extension is identical to VS Code—with a built-in AI Agent sidebar (Cmd+I / Ctrl+I) that can read your whole project folder and apply multi-file edits.",
          whenToPick:
            "Pick Cursor if you want an all-in-one desktop editor where the AI chat and multi-file agent are built right in without configuring extensions.",
          setupCommand: "# Import your VS Code settings in 1 click on first launch\n# Press Cmd+I (Mac) or Ctrl+I (Windows) to open the Agent"
        },
        {
          id: "dl-windsurf",
          iconId: "windsurf",
          name: "Windsurf",
          tag: "Agentic IDE",
          tagClass: "badge-secondary",
          url: "https://windsurf.com/",
          actionLabel: "Download Windsurf",
          oneLiner:
            "VS Code-based AI editor featuring 'Cascade,' an agentic sidebar that tracks your terminal commands and file edits together.",
          whatItIs:
            "Windsurf (by Codeium) is another VS Code-compatible desktop IDE designed around 'Cascade'—a collaborative flow where the AI watches what you run in the terminal and edits files alongside you.",
          whenToPick:
            "Pick Windsurf if you like Cursor's all-in-one IDE style and want a streamlined agent sidebar that automatically follows your recent edits.",
          setupCommand: "# Download from windsurf.com and open any local project folder"
        },
        {
          id: "dl-colab",
          iconId: "colab",
          name: "Google Colab",
          tag: "Browser Python notebook",
          tagClass: "badge-secondary",
          url: "https://colab.research.google.com/",
          actionLabel: "Open Colab",
          oneLiner:
            "Zero-install Python & AI lab notebook in your browser with free cloud GPUs; best for data analysis and quick scripts without building a web app.",
          whatItIs:
            "Google Colaboratory (Colab) is a free Jupyter Notebook that runs inside Chrome on Google's cloud computers. You write Python in small clickable blocks ('cells') and press Shift+Enter to run one block at a time and see charts immediately.",
          whenToPick:
            "Pick Google Colab when you want to analyze a CSV spreadsheet, test an AI API, or learn Python without installing anything on your laptop.",
          setupCommand: "# No install needed — runs in your browser!\n# Press Shift + Enter inside any code cell to run it"
        },
        {
          id: "dl-replit",
          iconId: "replit",
          name: "Replit",
          tag: "Browser sandbox & host",
          tagClass: "badge-secondary",
          url: "https://replit.com/",
          actionLabel: "Open Replit",
          oneLiner:
            "All-in-one coding environment and live hosting in a browser tab; great when you want zero laptop setup.",
          whatItIs:
            "Replit gives you a code editor, Linux terminal, AI agent, database, and live web URL entirely inside your web browser—nothing is installed on your computer.",
          whenToPick:
            "Pick Replit if you are on a locked-down laptop/tablet or want to spin up a shareable prototype in 2 minutes without setting up local tools.",
          setupCommand: "# Runs entirely in your browser at replit.com"
        }
      ]
    },
    {
      num: "2",
      title: "2. Install a coding agent (AI assistants that read, write & run code)",
      badge: "Piece 2 of 6 · Pick 1 to start",
      badgeClass: "badge-success",
      whatItDoes:
        "Instead of copying and pasting code snippets out of a web chat window, a coding agent sits directly inside your project folder, searches your files, edits code, and runs terminal tests for you.",
      options: [
        {
          id: "dl-claude-code",
          iconId: "claude",
          name: "Claude Code",
          tag: "Recommended terminal agent",
          tagClass: "badge-success",
          url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
          actionLabel: "Get Claude Code",
          oneLiner:
            "Anthropic's terminal agent that lives inside any project folder, searches your files with grep, edits code, and runs tests.",
          whatItIs:
            "Claude Code runs right inside your Terminal (or VS Code's bottom terminal panel). When you type 'claude' inside your project folder, it can read your entire codebase, run tests, check git diffs, and fix bugs across multiple files.",
          whenToPick:
            "Pick Claude Code if you want a deep-reasoning agent that works alongside any editor (VS Code, Cursor, or plain Terminal) and follows project rules in a CLAUDE.md file.",
          setupCommand: "npm install -g @anthropic-ai/claude-code\ncd my-project && claude"
        },
        {
          id: "dl-copilot",
          iconId: "copilot",
          name: "GitHub Copilot",
          tag: "VS Code extension",
          tagClass: "badge-info",
          url: "https://github.com/features/copilot",
          actionLabel: "Get Copilot",
          oneLiner:
            "Plugs directly into VS Code and GitHub for fast inline autocomplete as you type plus a multi-file agent sidebar.",
          whatItIs:
            "GitHub Copilot installs as an extension inside VS Code. It suggests grey 'ghost text' completions as you type (press Tab to accept) and includes Copilot Edits / Agent mode for multi-file changes and GitHub Pull Request reviews.",
          whenToPick:
            "Pick GitHub Copilot if you use VS Code and want tight integration with your GitHub repositories and Pull Requests.",
          setupCommand: "# In VS Code: click Extensions (left sidebar) -> search 'GitHub Copilot' -> Install"
        },
        {
          id: "dl-gemini-cli",
          iconId: "gemini",
          name: "Gemini CLI & Google AI Studio",
          tag: "Terminal agent + free API keys",
          tagClass: "badge-info",
          url: "https://aistudio.google.com/",
          actionLabel: "Open AI Studio",
          oneLiner:
            "Google's open-source terminal coding agent plus the free AI Studio workbench for getting a GEMINI_API_KEY.",
          whatItIs:
            "Google AI Studio lets you test Gemini models in your browser and generate a free-tier GEMINI_API_KEY in two clicks. Gemini CLI brings Gemini directly into your terminal with a 1-million-token context window for large codebases.",
          whenToPick:
            "Pick Google AI Studio & Gemini CLI when you need a free API key for your app's backend or want to analyze a large folder in your terminal.",
          setupCommand: "npm install -g @google/gemini-cli\ngemini"
        },
        {
          id: "dl-codex-cli",
          iconId: "openai",
          name: "OpenAI Codex CLI / ChatGPT Desktop",
          tag: "OpenAI terminal & desktop agent",
          tagClass: "badge-secondary",
          url: "https://platform.openai.com/docs/codex",
          actionLabel: "Get Codex CLI",
          oneLiner:
            "OpenAI's lightweight terminal agent and desktop companion that pairs with your open VS Code and Terminal windows.",
          whatItIs:
            "OpenAI Codex CLI runs in your terminal to inspect files, propose diffs, and run commands locally, while the ChatGPT macOS/Windows app can link directly to your open VS Code window.",
          whenToPick:
            "Pick Codex CLI or ChatGPT Work-with-Apps if you already use an OpenAI account and want terminal or desktop pairing.",
          setupCommand: "npm install -g @openai/codex\ncodex"
        }
      ]
    },
    {
      num: "3",
      title: "3. Install language engines & package managers (What runs code on your laptop)",
      badge: "Piece 3 of 6 · Core local engines",
      badgeClass: "badge-info",
      whatItDoes:
        "Plain-text code files cannot run by themselves—these are the official installer command (brew/winget), the language engines (Python & Node.js), and local Git.",
      options: [
        {
          id: "dl-homebrew",
          iconId: "homebrew",
          name: "Homebrew (Mac/Linux) / Winget (Windows)",
          tag: "Install 1st · System package manager",
          tagClass: "badge-success",
          url: "https://brew.sh/",
          actionLabel: "Get Homebrew",
          oneLiner:
            "The official terminal installer that sets up Python, Node, and Git in 1 command—and wires up your PATH so you never get 'command not found'.",
          whatItIs:
            "When you click '.dmg' or '.exe' installers from random websites, they often drop coding tools into folders your Terminal doesn't check. Homebrew ('brew' on Mac/Linux) and 'winget' (built into Windows 11) install developer engines cleanly and register them in your PATH automatically.",
          whenToPick:
            "Install Homebrew first on any Mac before installing Python, Node.js, or Git.",
          setupCommand: "brew install node python git uv"
        },
        {
          id: "dl-python",
          iconId: "python",
          name: "Python (python3 + uv)",
          tag: "AI, data & backend engine",
          tagClass: "badge-info",
          url: "https://www.python.org/downloads/",
          actionLabel: "Get Python & uv",
          oneLiner:
            "The #1 language engine for AI, data science, MCP servers, and FastAPI backends (pair with 'uv' to manage Python packages 10–100x faster than pip).",
          whatItIs:
            "Python is the universal language of AI, data tables (Pandas), MCP servers (FastMCP), and backend APIs (FastAPI). Modern Python projects pair Python with 'uv' (https://docs.astral.sh/uv/), which creates isolated '.venv' folders and installs libraries in milliseconds.",
          whenToPick:
            "Install Python + uv whenever you are building with AI APIs, data scripts, MCP servers, or Python backends.",
          setupCommand: "brew install python uv\npython3 --version && uv --version"
        },
        {
          id: "dl-nodejs",
          iconId: "nodejs",
          name: "Node.js (node + npm)",
          tag: "Web & JavaScript engine",
          tagClass: "badge-info",
          url: "https://nodejs.org/",
          actionLabel: "Download Node.js",
          oneLiner:
            "Runs JavaScript/TypeScript on your laptop and includes 'npm' for installing web packages (React, Next.js) and CLI agents.",
          whatItIs:
            "Browsers run JavaScript inside web pages, while Node.js lets your laptop run JavaScript outside the browser. Installing Node.js (pick the 'LTS' Long-Term Support version) automatically installs 'npm' (Node Package Manager).",
          whenToPick:
            "Install Node.js LTS for any frontend/web app (React, Next.js, Vite) and to install terminal AI agents via 'npm install -g'.",
          setupCommand: "brew install node\nnode -v && npm -v"
        },
        {
          id: "dl-git",
          iconId: "git",
          name: "Git (Local version control)",
          tag: "Local checkpoint time-machine",
          tagClass: "badge-secondary",
          url: "https://git-scm.com/downloads",
          actionLabel: "Download Git",
          oneLiner:
            "The free time-machine engine on your laptop that saves named checkpoints (commits) and safe scratchpad timelines (branches).",
          whatItIs:
            "Git runs privately inside your project folder on your computer. Whenever your code works, you save a 'git commit' checkpoint so if an AI agent breaks 10 files five minutes later, you can rewind in one second.",
          whenToPick:
            "Every project uses Git—install it once so both you and your AI coding agent can save checkpoints and check 'git diff'.",
          setupCommand: "brew install git\ngit --version"
        }
      ]
    },
    {
      num: "4",
      title: "4. Set up a place to store your code safely in the cloud (Cloud Git repositories)",
      badge: "Piece 4 of 6 · Pick 1 (GitHub is standard)",
      badgeClass: "badge-info",
      whatItDoes:
        "Saving a file only keeps it on your laptop's hard drive. A Cloud Git Repository stores a secure online backup of your project and triggers automatic cloud deployments.",
      options: [
        {
          id: "dl-github",
          iconId: "github",
          name: "GitHub",
          tag: "Recommended default · Cloud Git",
          tagClass: "badge-success",
          url: "https://github.com/signup",
          actionLabel: "Sign up for GitHub",
          oneLiner:
            "The industry standard cloud home for Git repositories, Pull Requests, open-source code, and 1-click auto-deploy to Vercel or Render.",
          whatItIs:
            "GitHub is where over 100 million developers store their Git repositories in the cloud. When you run 'git push', your laptop uploads your commits to GitHub—and cloud hosts like Vercel or Render watch your GitHub repo to publish updates automatically.",
          whenToPick:
            "Create a free GitHub account first—almost every open-source template, AI tool, and cloud host connects directly to GitHub.",
          setupCommand: "git push -u origin main"
        },
        {
          id: "dl-gitlab",
          iconId: "gitlab",
          name: "GitLab",
          tag: "Enterprise & DevOps Git",
          tagClass: "badge-secondary",
          url: "https://about.gitlab.com/",
          actionLabel: "Explore GitLab",
          oneLiner:
            "Popular enterprise and open-source alternative to GitHub with built-in CI/CD testing pipelines in a single platform.",
          whatItIs:
            "GitLab does the exact same core job as GitHub—storing Git repositories and Merge Requests in the cloud—and is widely used by companies that want self-hosted Git and built-in DevOps pipelines.",
          whenToPick:
            "Pick GitLab if your team or organization standardizes on GitLab instead of GitHub.",
          setupCommand: "git remote -v   # Check whether a project points to github.com or gitlab.com"
        },
        {
          id: "dl-hf-hub",
          iconId: "huggingface",
          name: "Hugging Face Hub",
          tag: "The GitHub of AI",
          tagClass: "badge-info",
          url: "https://huggingface.co/join",
          actionLabel: "Join Hugging Face",
          oneLiner:
            "Git-based cloud hub built specifically for storing open-weights AI models, datasets, and Python AI demo repos.",
          whatItIs:
            "Hugging Face Hub uses Git under the hood, but is designed for machine learning: it hosts open AI models (Llama, Gemma, Qwen, Whisper), public datasets, and live Python demo apps.",
          whenToPick:
            "Sign up for Hugging Face when you want to download open-source AI models/datasets or publish a free Python AI demo.",
          setupCommand: "pip install huggingface_hub"
        }
      ]
    },
    {
      num: "5",
      title: "5. Get a backend & database (Where user accounts, tables & permanent data live)",
      badge: "Piece 5 of 6 · When you need saved data",
      badgeClass: "badge-secondary",
      whatItDoes:
        "If your app only runs in the browser, data disappears or stays trapped on one device. A managed cloud database stores user logins and rows of data permanently.",
      options: [
        {
          id: "dl-supabase",
          iconId: "supabase",
          name: "Supabase",
          tag: "Recommended all-in-one · Postgres + Login",
          tagClass: "badge-success",
          url: "https://supabase.com/",
          actionLabel: "Sign up for Supabase",
          oneLiner:
            "Open-source PostgreSQL (SQL spreadsheet-table database) bundled with ready-made User Login (Auth) and file storage in one dashboard.",
          whatItIs:
            "Supabase gives you a full PostgreSQL database (with a spreadsheet-style table editor in your browser) PLUS built-in user authentication (Google/GitHub/email login) and image/file storage buckets.",
          whenToPick:
            "Pick Supabase when you want both a SQL database and ready-made user login without stitching together multiple services.",
          setupCommand: "# Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to your server .env file"
        },
        {
          id: "dl-neon",
          iconId: "neon",
          name: "Neon",
          tag: "Serverless Postgres (SQL)",
          tagClass: "badge-info",
          url: "https://neon.tech/",
          actionLabel: "Sign up for Neon",
          oneLiner:
            "Serverless PostgreSQL database that spins up in 3 seconds, scales to $0 when idle, and lets you 'branch' your database like Git.",
          whatItIs:
            "Neon is a pure, blazing-fast serverless PostgreSQL database. It includes a browser SQL Editor, automatic connection pooling ('-pooler' URLs so 50+ visitors don't freeze your app), and instant dev/prod database branches.",
          whenToPick:
            "Pick Neon when you want a clean, zero-maintenance SQL database for a Python (FastAPI) or Next.js backend—and remember to inspect its real dashboard in our 'Explore where things are' viewer below!",
          setupCommand: "DATABASE_URL=\"postgresql://user:pass@ep-cool-host-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require\""
        },
        {
          id: "dl-firebase",
          iconId: "firebase",
          name: "Firebase / Firestore",
          tag: "NoSQL JSON documents + Auth",
          tagClass: "badge-secondary",
          url: "https://firebase.google.com/",
          actionLabel: "Open Firebase",
          oneLiner:
            "Google's app backend that stores flexible JSON documents instead of strict SQL tables and syncs live changes to screens in real time.",
          whatItIs:
            "Firebase bundles Firestore (a NoSQL document database where data is stored as nested JSON documents) with Firebase Authentication and mobile/web SDKs that push live updates to connected browsers automatically.",
          whenToPick:
            "Pick Firebase when you are building a real-time collaborative app or chat tool and prefer JSON documents over SQL tables.",
          setupCommand: "npm install firebase"
        },
        {
          id: "dl-upstash",
          iconId: "upstash",
          name: "Upstash Redis",
          tag: "Serverless cache & rate-limiter",
          tagClass: "badge-secondary",
          url: "https://upstash.com/",
          actionLabel: "Explore Upstash",
          oneLiner:
            "Ultrafast in-memory cache and API rate-limiter to cap how many times a visitor can call your AI endpoint per minute.",
          whatItIs:
            "Upstash provides serverless Redis—an in-memory key-value store used alongside your main database to cache expensive lookups and enforce per-IP rate limits (e.g., max 10 AI calls per minute) so bots cannot run up your API bill.",
          whenToPick:
            "Add Upstash before sharing a public AI app to protect your endpoints from spam and surprise bills.",
          setupCommand: "npm install @upstash/ratelimit @upstash/redis"
        }
      ]
    },
    {
      num: "6",
      title: "6. Set up cloud hosting to put your work online (Deploy & share a live https:// link)",
      badge: "Piece 6 of 6 · Pick the host that fits your project",
      badgeClass: "badge-success",
      whatItDoes:
        "Connects to your GitHub repository so every time you 'git push', a cloud server builds your code and publishes it at a shareable https:// web link.",
      options: [
        {
          id: "dl-vercel",
          iconId: "vercel",
          name: "Vercel",
          tag: "Recommended for websites & web apps",
          tagClass: "badge-success",
          url: "https://vercel.com/signup",
          actionLabel: "Sign up for Vercel",
          oneLiner:
            "Best default for frontend & full-stack web apps (HTML/JS, React, Next.js); connects to GitHub and creates a live preview link for every PR.",
          whatItIs:
            "Vercel connects directly to your GitHub account. Whenever you push a commit to 'main', Vercel builds and updates your live production URL in ~30 seconds—and whenever you open a Pull Request, it comments a private Preview URL so you can test before merging.",
          whenToPick:
            "Pick Vercel as your default for websites, interactive explainers, and React/Next.js web apps.",
          setupCommand: "# Sign in with GitHub at vercel.com -> Add New Project -> Import Git Repository"
        },
        {
          id: "dl-render",
          iconId: "render",
          name: "Render",
          tag: "Always-on Python & API servers",
          tagClass: "badge-info",
          url: "https://render.com/",
          actionLabel: "Sign up for Render",
          oneLiner:
            "Best when you have a long-running Python backend server (FastAPI/Flask), background worker, or Postgres database.",
          whatItIs:
            "While serverless hosts like Vercel are designed for quick request-response functions that time out after 10–60 seconds, Render runs always-on Python or Node web servers, cron jobs, and Docker containers straight from your GitHub repo.",
          whenToPick:
            "Pick Render when your backend runs a Python FastAPI server or long AI workflows that need an always-on server.",
          setupCommand: "uvicorn main:app --host 0.0.0.0 --port $PORT"
        },
        {
          id: "dl-railway",
          iconId: "railway",
          name: "Railway",
          tag: "Visual full-stack canvas",
          tagClass: "badge-secondary",
          url: "https://railway.app/",
          actionLabel: "Explore Railway",
          oneLiner:
            "Visual cloud canvas that deploys your Python/Node backend server and a Postgres/Redis database side-by-side with zero config files.",
          whatItIs:
            "Railway gives you a visual project canvas where you can connect a GitHub repo for your backend server and click '+ New -> Database -> PostgreSQL' right next to it, wiring their environment variables together automatically.",
          whenToPick:
            "Pick Railway when you want to spin up both a backend server and a database in one visual dashboard.",
          setupCommand: "# Connect your GitHub repo at railway.app"
        },
        {
          id: "dl-hf-spaces",
          iconId: "huggingface",
          name: "Hugging Face Spaces",
          tag: "Free AI demo hosting",
          tagClass: "badge-info",
          url: "https://huggingface.co/spaces",
          actionLabel: "Open HF Spaces",
          oneLiner:
            "Turns a 20-line Python Gradio or Streamlit script into a shareable live AI web demo for free—no HTML/CSS frontend needed.",
          whatItIs:
            "Not every project needs a full HTML/React frontend! Hugging Face Spaces hosts Python Gradio and Streamlit apps for free, giving you an instant interactive web UI for testing models, prompts, or data tools.",
          whenToPick:
            "Pick Hugging Face Spaces when you built a Python script or AI prototype and want to share an interactive demo in 5 minutes.",
          setupCommand: "pip install gradio\npython app.py"
        },
        {
          id: "dl-cloud-run",
          iconId: "cloudrun",
          name: "Google Cloud Run",
          tag: "Production serverless containers",
          tagClass: "badge-secondary",
          url: "https://cloud.google.com/run",
          actionLabel: "Explore Cloud Run",
          oneLiner:
            "Enterprise serverless platform that runs any container (Python, Node, Go), scales from 0 to thousands of users, and bills only while active.",
          whatItIs:
            "Google Cloud Run takes any backend server or Docker container, gives it an HTTPS URL, scales it down to zero instances when nobody is visiting, and scales up automatically under heavy traffic.",
          whenToPick:
            "Pick Cloud Run when deploying production APIs, remote HTTP MCP servers, or enterprise backends.",
          setupCommand: "gcloud run deploy my-service --source ."
        }
      ]
    }
  ];

  function populateToolInSidePanel(group, opt, isUserClick) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        inspectorEl.replaceChildren();

        var topRow = document.createElement("div");
        topRow.className = "resource-title-row";
        var b1 = document.createElement("span");
        b1.className = "badge " + group.badgeClass;
        b1.textContent = "Piece " + group.num + " of 6";
        var b2 = document.createElement("span");
        b2.className = "badge " + opt.tagClass;
        b2.textContent = opt.tag;
        topRow.appendChild(b1);
        topRow.appendChild(b2);

        var titleWrap = document.createElement("div");
        titleWrap.className = "tool-inspector-title-row";
        titleWrap.appendChild(createToolBrandSvg(opt.iconId));
        var h4 = document.createElement("h4");
        h4.textContent = opt.name;
        titleWrap.appendChild(h4);

        // Streamlined Left Side Panel: ZERO duplication of the 1-line summary or download button already on the row!
        var whatCard = document.createElement("div");
        whatCard.className = "nested-card";
        var whatBadge = document.createElement("span");
        whatBadge.className = "badge badge-info";
        whatBadge.textContent = "1. What it is & how it works";
        var descP = document.createElement("p");
        descP.className = "resource-desc pre-line-text";
        descP.textContent = opt.whatItIs;
        whatCard.appendChild(whatBadge);
        whatCard.appendChild(descP);

        var whenBox = document.createElement("div");
        whenBox.className = "arch-mode-banner good-mode";
        var wIcon = document.createElement("span");
        wIcon.className = "material-symbols-outlined safety-icon";
        wIcon.textContent = "check_circle";
        var wText = document.createElement("span");
        wText.textContent = "When to pick " + opt.name + ": " + opt.whenToPick;
        whenBox.appendChild(wIcon);
        whenBox.appendChild(wText);

        var cmdCard = document.createElement("div");
        cmdCard.className = "nested-card";
        var cmdBadge = document.createElement("span");
        cmdBadge.className = "badge badge-secondary";
        cmdBadge.textContent = "2. Quick-start setup / command";
        var cmdBox = document.createElement("div");
        cmdBox.className = "vocab-example-box pre-line-text";
        cmdBox.textContent = opt.setupCommand;
        cmdCard.appendChild(cmdBadge);
        cmdCard.appendChild(cmdBox);

        var copyCmdBtn = document.createElement("button");
        copyCmdBtn.type = "button";
        copyCmdBtn.className = "diagram-label-pill";
        var cpIc = document.createElement("span");
        cpIc.className = "material-symbols-outlined diagram-pill-icon";
        cpIc.textContent = "content_copy";
        var cpTxt = document.createElement("span");
        cpTxt.textContent = "Copy setup snippet";
        copyCmdBtn.appendChild(cpIc);
        copyCmdBtn.appendChild(cpTxt);
        copyCmdBtn.addEventListener("click", function () {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(opt.setupCommand).then(function () {
              cpTxt.textContent = "Copied!";
              setTimeout(function () {
                cpTxt.textContent = "Copy setup snippet";
              }, 1800);
            });
          }
        });
        cmdCard.appendChild(copyCmdBtn);

        inspectorEl.appendChild(topRow);
        inspectorEl.appendChild(titleWrap);
        inspectorEl.appendChild(whatCard);
        inspectorEl.appendChild(whenBox);
        inspectorEl.appendChild(cmdCard);
      },
      {
        itemTitle: opt.name,
        autoOpen: Boolean(isUserClick),
        pulse: Boolean(isUserClick)
      }
    );
  }

  function renderToolsDownloadDirectory(container) {
    if (!container) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");

    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var b1 = document.createElement("span");
    b1.className = "badge badge-info";
    b1.textContent = "Step 1 toolkit directory — download links & what each option does";
    var b2 = document.createElement("span");
    b2.className = "badge badge-success";
    b2.textContent = "You only need 1 option per category to start";
    badgeRow.appendChild(b1);
    badgeRow.appendChild(b2);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Your 6-part toolkit: Download links, site icons & how the options compare";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "Don't install everything at once! Below are the 6 pieces of a coding setup, with direct download/signup links and one line explaining the difference between each option. Click any tool card to read its setup guide in the Left Side Panel.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    var activeOptionId = TOOL_GROUPS[0].options[0].id;
    var allOptionCards = [];

    function syncActiveCards() {
      allOptionCards.forEach(function (entry) {
        if (entry.id === activeOptionId) entry.el.classList.add("active");
        else entry.el.classList.remove("active");
      });
    }

    var groupsStack = document.createElement("div");
    groupsStack.className = "tool-download-groups-stack";

    TOOL_GROUPS.forEach(function (grp) {
      var grpCard = document.createElement("div");
      grpCard.className = "tool-download-category-card";

      var grpHeader = document.createElement("div");
      grpHeader.className = "tool-download-category-header";

      var grpTitleRow = document.createElement("div");
      grpTitleRow.className = "resource-title-row";

      var grpTitle = document.createElement("h4");
      grpTitle.className = "tool-download-category-title";
      grpTitle.textContent = grp.title;

      var grpBadge = document.createElement("span");
      grpBadge.className = "badge " + grp.badgeClass;
      grpBadge.textContent = grp.badge;

      grpTitleRow.appendChild(grpTitle);
      grpTitleRow.appendChild(grpBadge);

      var grpDesc = document.createElement("p");
      grpDesc.className = "resource-desc";
      grpDesc.textContent = grp.whatItDoes;

      grpHeader.appendChild(grpTitleRow);
      grpHeader.appendChild(grpDesc);
      grpCard.appendChild(grpHeader);

      var optionsGrid = document.createElement("div");
      optionsGrid.className = "tool-download-options-list";

      grp.options.forEach(function (opt) {
        var optRow = document.createElement("div");
        optRow.className = "tool-download-option-row" + (opt.id === activeOptionId ? " active" : "");
        optRow.setAttribute("role", "button");
        optRow.setAttribute("tabindex", "0");
        optRow.setAttribute("aria-label", "Inspect " + opt.name + " details in left side panel");

        var iconWrap = document.createElement("div");
        iconWrap.className = "tool-download-icon-wrap";
        iconWrap.appendChild(createToolBrandSvg(opt.iconId));

        var mainCol = document.createElement("div");
        mainCol.className = "tool-download-main-col";

        var nameRow = document.createElement("div");
        nameRow.className = "tool-download-name-row";

        var nameStrong = document.createElement("strong");
        nameStrong.className = "tool-download-name";
        nameStrong.textContent = opt.name;

        var optTag = document.createElement("span");
        optTag.className = "badge " + opt.tagClass;
        optTag.textContent = opt.tag;

        nameRow.appendChild(nameStrong);
        nameRow.appendChild(optTag);

        var oneLineP = document.createElement("p");
        oneLineP.className = "tool-download-oneliner";
        oneLineP.textContent = opt.oneLiner;

        mainCol.appendChild(nameRow);
        mainCol.appendChild(oneLineP);

        var actionsCol = document.createElement("div");
        actionsCol.className = "tool-download-actions-col";

        var dlLink = document.createElement("a");
        dlLink.className = "nav-btn nav-btn-primary tool-download-ext-btn";
        dlLink.href = opt.url;
        dlLink.target = "_blank";
        dlLink.rel = "noopener noreferrer";
        var dlTxt = document.createElement("span");
        dlTxt.textContent = opt.actionLabel;
        var dlIc = document.createElement("span");
        dlIc.className = "material-symbols-outlined btn-icon-sm";
        dlIc.textContent = "open_in_new";
        dlLink.appendChild(dlTxt);
        dlLink.appendChild(dlIc);
        dlLink.addEventListener("click", function (e) {
          e.stopPropagation();
        });

        actionsCol.appendChild(dlLink);

        optRow.appendChild(iconWrap);
        optRow.appendChild(mainCol);
        optRow.appendChild(actionsCol);

        function handleSelect() {
          activeOptionId = opt.id;
          syncActiveCards();
          populateToolInSidePanel(grp, opt, true);
        }

        optRow.addEventListener("click", handleSelect);
        optRow.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelect();
          }
        });

        allOptionCards.push({ id: opt.id, el: optRow });
        optionsGrid.appendChild(optRow);
      });

      grpCard.appendChild(optionsGrid);
      groupsStack.appendChild(grpCard);
    });

    card.appendChild(groupsStack);
    container.appendChild(card);

    populateToolInSidePanel(TOOL_GROUPS[0], TOOL_GROUPS[0].options[0], false);
  }

  window.renderToolsDownloadDirectory = renderToolsDownloadDirectory;
})();

// Deployed Eng Pipeline — Bespoke Illustrated SVG Artwork & Flow Connectors for All 7 Stops
// Every stage across every diagram has a purpose-built illustration matching its exact concept.
// Zero hardcoded hex (100% GM3 tokens) and zero innerHTML (SecureCoder compliant).

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

  function svgText(x, y, textStr, size, weight, fillToken, family) {
    var t = svgEl("text", {
      x: String(x),
      y: String(y),
      "text-anchor": "middle",
      fill: fillToken || "var(--color-on-surface)",
      "font-family": family || "var(--font-family-display)",
      "font-size": String(size || 12),
      "font-weight": String(weight || 700)
    });
    t.textContent = textStr;
    return t;
  }

  // 1. Stop 2 Stage 1: Smartphone + Laptop Front-End UI
  function createDeviceArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 124", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("path", { d: "M 18 92 A 74 58 0 0 1 162 92", fill: "none", stroke: "var(--color-outline-variant)", "stroke-width": "2" }));
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "106", rx: "72", ry: "10", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "68", y: "38", width: "76", height: "52", rx: "6", fill: "var(--color-on-surface)", stroke: "var(--color-on-surface)", "stroke-width": "2" }));
    svg.appendChild(svgEl("rect", { x: "73", y: "43", width: "66", height: "42", rx: "3", fill: "var(--color-surface-container-lowest)" }));
    svg.appendChild(svgEl("rect", { x: "86", y: "51", width: "42", height: "26", rx: "4", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgEl("path", { d: "M 99 64 L 105 70 L 117 57", fill: "none", stroke: "var(--color-on-tertiary-container)", "stroke-width": "3.5", "stroke-linecap": "round", "stroke-linejoin": "round" }));
    svg.appendChild(svgEl("path", { d: "M 58 90 L 154 90 L 148 98 L 64 98 Z", fill: "var(--color-on-surface-variant)" }));
    svg.appendChild(svgEl("rect", { x: "28", y: "26", width: "42", height: "72", rx: "7", fill: "var(--color-on-surface)" }));
    svg.appendChild(svgEl("rect", { x: "32", y: "34", width: "34", height: "54", rx: "3", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgEl("line", { x1: "44", y1: "30", x2: "54", y2: "30", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("rect", { x: "37", y: "42", width: "24", height: "14", rx: "2", fill: "var(--color-primary)" }));
    svg.appendChild(svgEl("line", { x1: "37", y1: "64", x2: "58", y2: "64", stroke: "var(--color-on-primary-container)", "stroke-width": "3", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "37", y1: "72", x2: "52", y2: "72", stroke: "var(--color-on-primary-container)", "stroke-width": "3", "stroke-linecap": "round" }));
    return svg;
  }

  // 2. Stop 2 Stage 2: Fluffy Cloud + 3 Server Racks
  function createCloudServerArt(cloudText) {
    var svg = svgEl("svg", { viewBox: "0 0 190 124", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "95", cy: "110", rx: "70", ry: "9", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(
      svgEl("path", {
        d: "M 52 56 C 36 56, 30 42, 42 33 C 44 19, 62 15, 73 23 C 82 9, 108 9, 117 23 C 130 17, 146 25, 144 38 C 156 42, 152 56, 136 56 Z",
        fill: "var(--color-primary-container)",
        stroke: "var(--color-primary)",
        "stroke-width": "3",
        "stroke-linejoin": "round"
      })
    );
    svg.appendChild(svgText(95, 43, cloudText || "Cloud Server", 12, 700, "var(--color-on-primary-container)"));
    [62, 95, 128].forEach(function (cx) {
      svg.appendChild(svgEl("line", { x1: String(cx), y1: "56", x2: String(cx), y2: "66", stroke: "var(--color-primary)", "stroke-width": "3" }));
    });
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

  // 3. Stop 2 Stage 3: 3-Tier SQL Database Cylinder + Table Rows Badge
  function createDatabaseArt(lensText) {
    var svg = svgEl("svg", { viewBox: "0 0 180 124", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("path", { d: "M 18 92 A 74 58 0 0 1 162 92", fill: "none", stroke: "var(--color-outline-variant)", "stroke-width": "2" }));
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "106", rx: "70", ry: "10", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "34", y: "32", width: "74", height: "66", rx: "8", fill: "var(--color-surface-container-high)", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("ellipse", { cx: "71", cy: "32", rx: "37", ry: "10", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 34 54 A 37 9 0 0 0 108 54", fill: "none", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 34 76 A 37 9 0 0 0 108 76", fill: "none", stroke: "var(--color-on-surface-variant)", "stroke-width": "2.5" }));
    // Structured SQL table overlay card on right
    svg.appendChild(svgEl("rect", { x: "94", y: "42", width: "60", height: "50", rx: "6", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "94", y: "42", width: "60", height: "15", rx: "4", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgText(124, 53, lensText || "SQL rows", 10, 700, "var(--color-on-primary-container)", "monospace"));
    svg.appendChild(svgEl("line", { x1: "100", y1: "66", x2: "148", y2: "66", stroke: "var(--color-outline)", "stroke-width": "2.5", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "100", y1: "76", x2: "148", y2: "76", stroke: "var(--color-outline)", "stroke-width": "2.5", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "100", y1: "85", x2: "136", y2: "85", stroke: "var(--color-outline)", "stroke-width": "2.5", "stroke-linecap": "round" }));
    return svg;
  }

  // 4. Stop 2 Stage 4: Outside Services (AI Model API, Stripe Payments, .env Key & Webhooks)
  function createExternalServicesArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Connector lines between the 3 external service cards
    svg.appendChild(svgEl("line", { x1: "52", y1: "58", x2: "128", y2: "58", stroke: "var(--color-primary)", "stroke-width": "2.5", "stroke-dasharray": "4 4" }));
    // Left badge: Frontier AI API
    svg.appendChild(svgEl("rect", { x: "20", y: "34", width: "46", height: "48", rx: "8", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(43, 56, "AI", 15, 700, "var(--color-on-primary-container)"));
    svg.appendChild(svgText(43, 72, "API", 10, 600, "var(--color-on-primary-container)", "monospace"));
    // Middle badge: Secret .env Key Vault
    svg.appendChild(svgEl("rect", { x: "70", y: "24", width: "44", height: "66", rx: "8", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("circle", { cx: "92", cy: "46", r: "9", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(92, 76, ".env", 11, 700, "var(--color-on-surface)", "monospace"));
    // Right badge: Payments / Stripe / Email
    svg.appendChild(svgEl("rect", { x: "118", y: "34", width: "46", height: "48", rx: "8", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(141, 56, "Pay", 13, 700, "var(--color-on-tertiary-container)"));
    svg.appendChild(svgText(141, 72, "Hook", 10, 600, "var(--color-on-tertiary-container)", "monospace"));
    return svg;
  }

  // 5. Stop 6 Stage 4: Human-in-the-Loop Approval (Person + Green Checkmark Bubble)
  function createUserArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 116", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "104", rx: "66", ry: "9", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("path", { d: "M 42 102 C 42 78, 94 78, 94 102 Z", fill: "var(--color-primary-container)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("circle", { cx: "68", cy: "54", r: "18", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 50 52 C 50 34, 86 34, 86 52 C 78 44, 58 44, 50 52 Z", fill: "var(--color-on-surface)" }));
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

  // 6. Stop 1 Stage 1: Laptop Code Editor (File tree + syntax lines + terminal bar)
  function createLaptopEditorArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "72", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "32", y: "20", width: "116", height: "74", rx: "7", fill: "var(--color-on-surface)" }));
    svg.appendChild(svgEl("rect", { x: "37", y: "26", width: "106", height: "62", rx: "4", fill: "var(--color-surface-container-lowest)" }));
    // Sidebar file tree
    svg.appendChild(svgEl("rect", { x: "37", y: "26", width: "28", height: "62", fill: "var(--color-surface-container-high)" }));
    svg.appendChild(svgEl("line", { x1: "42", y1: "36", x2: "59", y2: "36", stroke: "var(--color-primary)", "stroke-width": "3", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "42", y1: "46", x2: "56", y2: "46", stroke: "var(--color-outline)", "stroke-width": "2.5", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "42", y1: "56", x2: "60", y2: "56", stroke: "var(--color-outline)", "stroke-width": "2.5", "stroke-linecap": "round" }));
    // Syntax-highlighted code lines
    svg.appendChild(svgEl("line", { x1: "72", y1: "36", x2: "112", y2: "36", stroke: "var(--color-primary)", "stroke-width": "3.5", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "78", y1: "47", x2: "132", y2: "47", stroke: "var(--color-tertiary)", "stroke-width": "3.5", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "78", y1: "58", x2: "120", y2: "58", stroke: "var(--color-on-surface-variant)", "stroke-width": "3", "stroke-linecap": "round" }));
    // Bottom terminal bar inside IDE
    svg.appendChild(svgEl("rect", { x: "65", y: "68", width: "78", height: "20", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgText(104, 82, ">_ localhost", 10, 700, "var(--color-on-primary-container)", "monospace"));
    // Laptop base
    svg.appendChild(svgEl("path", { d: "M 20 94 L 160 94 L 152 103 L 28 103 Z", fill: "var(--color-on-surface-variant)" }));
    return svg;
  }

  // 7. Stop 1 Stage 2: Cloud Code Repository (Cloud + Git Branch & Merge Graph)
  function createGitCloudRepoArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(
      svgEl("path", {
        d: "M 38 88 C 20 88, 16 66, 30 54 C 32 32, 54 22, 72 32 C 84 14, 116 14, 126 32 C 144 26, 160 40, 156 58 C 168 66, 162 88, 142 88 Z",
        fill: "var(--color-surface-container-lowest)",
        stroke: "var(--color-primary)",
        "stroke-width": "3",
        "stroke-linejoin": "round"
      })
    );
    // Git main line + feature branch inside the cloud
    svg.appendChild(svgEl("line", { x1: "48", y1: "52", x2: "132", y2: "52", stroke: "var(--color-primary)", "stroke-width": "3.5" }));
    svg.appendChild(svgEl("path", { d: "M 66 52 C 74 52, 76 72, 86 72 L 104 72 C 114 72, 116 52, 124 52", fill: "none", stroke: "var(--color-tertiary)", "stroke-width": "3.5" }));
    [52, 66, 124].forEach(function (cx) {
      svg.appendChild(svgEl("circle", { cx: String(cx), cy: "52", r: "5.5", fill: "var(--color-primary)" }));
    });
    svg.appendChild(svgEl("circle", { cx: "95", cy: "72", r: "5.5", fill: "var(--color-tertiary)" }));
    svg.appendChild(svgText(90, 38, "Git Repo", 11, 700, "var(--color-on-surface)"));
    return svg;
  }

  // 8. Stop 1 Stage 3: Cloud Hosting & Live Vercel Website
  function createLiveWebHostArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "70", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Browser window frame
    svg.appendChild(svgEl("rect", { x: "22", y: "18", width: "136", height: "80", rx: "9", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    // Top browser bar
    svg.appendChild(svgEl("rect", { x: "23.5", y: "19.5", width: "133", height: "22", rx: "7", fill: "var(--color-tertiary-container)" }));
    // Window dots
    svg.appendChild(svgEl("circle", { cx: "33", cy: "30.5", r: "2.6", fill: "var(--color-on-tertiary-container)" }));
    svg.appendChild(svgEl("circle", { cx: "41", cy: "30.5", r: "2.6", fill: "var(--color-on-tertiary-container)" }));
    // URL pill inside top bar
    svg.appendChild(svgEl("rect", { x: "50", y: "23.5", width: "100", height: "14", rx: "7", fill: "var(--color-surface-container-lowest)" }));
    svg.appendChild(svgEl("circle", { cx: "58", cy: "30.5", r: "3", fill: "var(--color-tertiary)" }));
    svg.appendChild(svgText(103, 33.5, "app.vercel.app", 9, 700, "var(--color-on-surface)", "monospace"));
    // Left: Deployed Vercel Prism Badge + Live Pulse
    svg.appendChild(svgEl("rect", { x: "32", y: "48", width: "44", height: "40", rx: "7", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2" }));
    svg.appendChild(svgEl("polygon", { points: "54,55 66,76 42,76", fill: "var(--color-primary)" }));
    svg.appendChild(svgEl("circle", { cx: "65", cy: "56", r: "4.5", fill: "var(--color-tertiary)", stroke: "var(--color-surface-container-lowest)", "stroke-width": "1.5" }));
    // Right: Mini live site hero + cards
    svg.appendChild(svgEl("rect", { x: "84", y: "48", width: "64", height: "16", rx: "4", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgText(116, 59, "● Live 200 OK", 9, 700, "var(--color-on-tertiary-container)", "monospace"));
    svg.appendChild(svgEl("rect", { x: "84", y: "70", width: "30", height: "18", rx: "4", fill: "var(--color-surface-container-high)", stroke: "var(--color-outline)", "stroke-width": "1.5" }));
    svg.appendChild(svgEl("rect", { x: "118", y: "70", width: "30", height: "18", rx: "4", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "1.5" }));
    return svg;
  }

  // 9. Stop 5 Stage 1: Python Variables, if/else & Functions (def -> return)
  function createPythonFuncArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "28", y: "20", width: "124", height: "78", rx: "8", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "36", y: "28", width: "68", height: "18", rx: "4", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgText(70, 41, "def fn(x):", 11, 700, "var(--color-on-primary-container)", "monospace"));
    svg.appendChild(svgEl("rect", { x: "48", y: "52", width: "64", height: "16", rx: "4", fill: "var(--color-surface-container-high)" }));
    svg.appendChild(svgText(80, 64, "if x > 0:", 10, 700, "var(--color-on-surface)", "monospace"));
    svg.appendChild(svgEl("rect", { x: "60", y: "74", width: "80", height: "18", rx: "4", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgText(100, 87, "return True", 10, 700, "var(--color-on-tertiary-container)", "monospace"));
    return svg;
  }

  // 10. Stop 5 Stage 2: 1 Dict {key: val} -> DataFrame Table (Rows & Columns)
  function createDictToTableArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Left: {key: val} Dict card
    svg.appendChild(svgEl("rect", { x: "16", y: "34", width: "56", height: "50", rx: "6", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2" }));
    svg.appendChild(svgText(44, 55, "{k: v}", 13, 700, "var(--color-on-primary-container)", "monospace"));
    svg.appendChild(svgText(44, 73, "1 Row", 10, 600, "var(--color-on-primary-container)"));
    // Arrow
    svg.appendChild(svgEl("line", { x1: "76", y1: "59", x2: "94", y2: "59", stroke: "var(--color-primary)", "stroke-width": "3" }));
    svg.appendChild(svgEl("polygon", { points: "92,53 102,59 92,65", fill: "var(--color-primary)" }));
    // Right: DataFrame Table
    svg.appendChild(svgEl("rect", { x: "104", y: "26", width: "62", height: "66", rx: "6", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "104", y: "26", width: "62", height: "18", rx: "4", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgText(135, 39, "Table / DF", 10, 700, "var(--color-on-tertiary-container)"));
    [54, 68, 82].forEach(function (ry) {
      svg.appendChild(svgEl("line", { x1: "110", y1: String(ry), x2: "160", y2: String(ry), stroke: "var(--color-outline)", "stroke-width": "2" }));
    });
    svg.appendChild(svgEl("line", { x1: "134", y1: "44", x2: "134", y2: "90", stroke: "var(--color-outline)", "stroke-width": "1.5" }));
    return svg;
  }

  // 11. Stop 5 Stage 3: Pydantic Schema Contract + Bottom-Up Stack Trace Lens
  function createSchemaStackTraceArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "26", y: "20", width: "128", height: "78", rx: "8", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("line", { x1: "36", y1: "34", x2: "110", y2: "34", stroke: "var(--color-outline)", "stroke-width": "3", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "36", y1: "48", x2: "98", y2: "48", stroke: "var(--color-outline)", "stroke-width": "3", "stroke-linecap": "round" }));
    // Highlighted bottom line of stack trace!
    svg.appendChild(svgEl("rect", { x: "34", y: "62", width: "112", height: "26", rx: "5", fill: "var(--color-error-container)", stroke: "var(--color-error)", "stroke-width": "2" }));
    svg.appendChild(svgText(90, 79, "KeyError: line 42", 11, 700, "var(--color-on-error-container)", "monospace"));
    return svg;
  }

  // 12. Stop 5 Stage 4: Automated Pytest & Golden Evals Scorecard
  function createTestEvalPassArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "30", y: "20", width: "120", height: "78", rx: "8", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "30", y: "20", width: "120", height: "22", rx: "6", fill: "var(--color-tertiary-container)" }));
    svg.appendChild(svgText(90, 35, "pytest · Evals", 11, 700, "var(--color-on-tertiary-container)", "monospace"));
    [54, 70, 86].forEach(function (ry) {
      svg.appendChild(svgEl("circle", { cx: "46", cy: String(ry - 3), r: "6", fill: "var(--color-tertiary-container)" }));
      svg.appendChild(svgEl("path", { d: "M 43 " + (ry - 3) + " L 45.5 " + ry + " L 50 " + (ry - 6), fill: "none", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.2", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("line", { x1: "60", y1: String(ry - 3), x2: "136", y2: String(ry - 3), stroke: "var(--color-primary)", "stroke-width": "3", "stroke-linecap": "round" }));
    });
    return svg;
  }

  // 13. Stop 6 Stage 2: AI Agent Loop + MCP Tool Plug
  function createAgentMcpLoopArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("circle", { cx: "66", cy: "58", r: "28", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "3", "stroke-dasharray": "8 4" }));
    svg.appendChild(svgText(66, 55, "Agent", 12, 700, "var(--color-on-primary-container)"));
    svg.appendChild(svgText(66, 70, "Loop", 10, 600, "var(--color-on-primary-container)"));
    svg.appendChild(svgEl("line", { x1: "94", y1: "58", x2: "116", y2: "58", stroke: "var(--color-primary)", "stroke-width": "4" }));
    svg.appendChild(svgEl("rect", { x: "116", y: "36", width: "46", height: "44", rx: "8", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(139, 55, "MCP", 12, 700, "var(--color-on-tertiary-container)", "monospace"));
    svg.appendChild(svgText(139, 70, "Tools", 10, 600, "var(--color-on-tertiary-container)"));
    return svg;
  }

  // 14. Stop 7 Stage 1: Vet Open-Source License (MIT / Apache Shield + Search Lens)
  function createLicenseSearchArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("path", { d: "M 90 18 L 134 34 V 62 C 134 84, 112 96, 90 102 C 68 96, 46 84, 46 62 V 34 Z", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.5", "stroke-linejoin": "round" }));
    svg.appendChild(svgText(90, 56, "MIT /", 13, 700, "var(--color-on-tertiary-container)"));
    svg.appendChild(svgText(90, 74, "Apache", 12, 700, "var(--color-on-tertiary-container)"));
    return svg;
  }

  // 15. Stop 7 Stage 2: Package Box Install (npm / uv / git clone) + .env Lock
  function createPackageInstallArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Package Box
    svg.appendChild(svgEl("rect", { x: "44", y: "44", width: "92", height: "54", rx: "6", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 36 44 L 54 28 H 126 L 144 44 Z", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2.5", "stroke-linejoin": "round" }));
    svg.appendChild(svgText(90, 72, "npm / uv", 14, 700, "var(--color-on-primary-container)", "monospace"));
    svg.appendChild(svgText(90, 88, "install", 11, 600, "var(--color-on-primary-container)", "monospace"));
    return svg;
  }

  // 16. Stop 7 Stage 3: Snap Open-Source Building Blocks Together (Puzzle / LEGO Bricks)
  function createPuzzleSnapArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Left LEGO / Code Brick ("import UI")
    svg.appendChild(svgEl("rect", { x: "22", y: "34", width: "66", height: "54", rx: "7", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "34", y: "26", width: "16", height: "8", rx: "2", fill: "var(--color-primary)" }));
    svg.appendChild(svgEl("rect", { x: "60", y: "26", width: "16", height: "8", rx: "2", fill: "var(--color-primary)" }));
    svg.appendChild(svgText(55, 58, "import", 12, 700, "var(--color-on-primary-container)", "monospace"));
    svg.appendChild(svgText(55, 74, "Brick A", 11, 600, "var(--color-on-primary-container)"));
    // Interlocking connector tab
    svg.appendChild(svgEl("circle", { cx: "88", cy: "61", r: "9", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    // Right LEGO / Code Brick ("Your App")
    svg.appendChild(svgEl("rect", { x: "92", y: "34", width: "66", height: "54", rx: "7", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "104", y: "26", width: "16", height: "8", rx: "2", fill: "var(--color-on-tertiary-container)" }));
    svg.appendChild(svgEl("rect", { x: "130", y: "26", width: "16", height: "8", rx: "2", fill: "var(--color-on-tertiary-container)" }));
    svg.appendChild(svgText(125, 58, "<App />", 12, 700, "var(--color-on-tertiary-container)", "monospace"));
    svg.appendChild(svgText(125, 74, "Your Code", 11, 600, "var(--color-on-tertiary-container)"));
    return svg;
  }

  // 17. Stop 6 Stage 4: Human-in-the-Loop ('Prepare -> Confirm') Approval Card
  function createHumanApprovalArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "24", y: "20", width: "132", height: "78", rx: "8", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "24", y: "20", width: "132", height: "22", rx: "6", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgText(90, 35, "Draft Preview", 11, 700, "var(--color-on-primary-container)"));
    svg.appendChild(svgEl("line", { x1: "36", y1: "54", x2: "144", y2: "54", stroke: "var(--color-outline)", "stroke-width": "2.5", "stroke-linecap": "round" }));
    // Approve & Reject buttons
    svg.appendChild(svgEl("rect", { x: "34", y: "66", width: "64", height: "22", rx: "5", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "1.8" }));
    svg.appendChild(svgText(66, 81, "Approve ✓", 10, 700, "var(--color-on-tertiary-container)"));
    svg.appendChild(svgEl("rect", { x: "104", y: "66", width: "42", height: "22", rx: "5", fill: "var(--color-surface-container-high)" }));
    svg.appendChild(svgText(125, 81, "Edit", 10, 600, "var(--color-on-surface-variant)"));
    return svg;
  }

  // 18. Stop 1 Stage 4: Browser DevTools Inspect Drawer (< /> Elements, Console & Network Lens)
  function createBrowserInspectArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Browser window
    svg.appendChild(svgEl("rect", { x: "22", y: "18", width: "136", height: "80", rx: "8", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    // Left half: visual page
    svg.appendChild(svgEl("rect", { x: "30", y: "28", width: "52", height: "24", rx: "4", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgEl("line", { x1: "30", y1: "62", x2: "76", y2: "62", stroke: "var(--color-outline)", "stroke-width": "3", "stroke-linecap": "round" }));
    svg.appendChild(svgEl("line", { x1: "30", y1: "74", x2: "66", y2: "74", stroke: "var(--color-outline)", "stroke-width": "3", "stroke-linecap": "round" }));
    // Right half: DevTools Inspect drawer
    svg.appendChild(svgEl("rect", { x: "88", y: "24", width: "64", height: "68", rx: "5", fill: "var(--color-surface-container-high)", stroke: "var(--color-primary)", "stroke-width": "2" }));
    svg.appendChild(svgText(120, 40, "Inspect", 10, 700, "var(--color-primary)", "monospace"));
    svg.appendChild(svgText(120, 56, "<div />", 10, 700, "var(--color-on-surface)", "monospace"));
    svg.appendChild(svgText(120, 72, "200 OK", 10, 700, "var(--color-tertiary)", "monospace"));
    // Magnifying glass over Inspect
    svg.appendChild(svgEl("circle", { cx: "82", cy: "76", r: "12", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("line", { x1: "90", y1: "84", x2: "100", y2: "94", stroke: "var(--color-on-surface)", "stroke-width": "4", "stroke-linecap": "round" }));
    return svg;
  }

  // 19. Stop 6 Stage 1: UI Button Click -> URL Route (/api/users) + Idempotency Key
  function createUrlRouteClickArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Top: Clickable UI Button
    svg.appendChild(svgEl("rect", { x: "38", y: "18", width: "104", height: "28", rx: "14", fill: "var(--color-primary)", stroke: "var(--color-on-surface)", "stroke-width": "2" }));
    svg.appendChild(svgText(90, 36, "Click: Save ↵", 11, 700, "var(--color-on-primary)"));
    // Arrow down to URL route
    svg.appendChild(svgEl("line", { x1: "90", y1: "46", x2: "90", y2: "60", stroke: "var(--color-primary)", "stroke-width": "3" }));
    // Bottom: URL Route Box (/api/users)
    svg.appendChild(svgEl("rect", { x: "20", y: "60", width: "140", height: "36", rx: "7", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(90, 76, "POST /api/users", 11, 700, "var(--color-primary)", "monospace"));
    svg.appendChild(svgText(90, 90, "Idempotency-Key ✓", 9.5, 600, "var(--color-tertiary)", "monospace"));
    return svg;
  }

  // 20. Stop 6 Stage 3: Separate Private Cloud DB + Async Webhook Callback
  function createDbWebhookArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    // Left: Private DB cylinder
    svg.appendChild(svgEl("rect", { x: "22", y: "34", width: "58", height: "56", rx: "6", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("ellipse", { cx: "51", cy: "34", rx: "29", ry: "8", fill: "var(--color-primary-container)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(51, 62, "Private", 10, 700, "var(--color-on-surface)"));
    svg.appendChild(svgText(51, 76, "Cloud DB", 10, 700, "var(--color-primary)"));
    // Right: Webhook callback card
    svg.appendChild(svgEl("rect", { x: "94", y: "32", width: "66", height: "58", rx: "8", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2.5" }));
    svg.appendChild(svgText(127, 54, "Webhook", 11, 700, "var(--color-on-tertiary-container)"));
    svg.appendChild(svgText(127, 70, "Callback", 10, 600, "var(--color-on-tertiary-container)"));
    svg.appendChild(svgText(127, 83, "⚡ Async", 9.5, 700, "var(--color-on-tertiary-container)", "monospace"));
    return svg;
  }

  // 21. Stop 7 Stage 4: Customize & Ship to Production (git push -> Live Ship Card)
  function createRocketShipArt() {
    var svg = svgEl("svg", { viewBox: "0 0 180 120", width: "180", height: "112", class: "stage-art-svg", "aria-hidden": "true" });
    svg.appendChild(svgEl("ellipse", { cx: "90", cy: "108", rx: "68", ry: "8", fill: "var(--color-surface-container-highest)" }));
    svg.appendChild(svgEl("rect", { x: "24", y: "22", width: "132", height: "74", rx: "10", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("rect", { x: "34", y: "32", width: "112", height: "24", rx: "6", fill: "var(--color-primary-container)" }));
    svg.appendChild(svgText(90, 48, "git push -> Ship", 11, 700, "var(--color-on-primary-container)", "monospace"));
    svg.appendChild(svgEl("rect", { x: "44", y: "64", width: "92", height: "22", rx: "11", fill: "var(--color-tertiary-container)", stroke: "var(--color-on-tertiary-container)", "stroke-width": "2" }));
    svg.appendChild(svgText(90, 79, "Live 200 OK ✓", 11, 700, "var(--color-on-tertiary-container)", "monospace"));
    return svg;
  }

  // Aligned Horizontal Arrow (Single-direction or Bidirectional two-way Request <-> Response)
  function createHorizontalStepArrow(topLabel, subLabel, extraEl, isBidirectional) {
    var wrap = document.createElement("div");
    wrap.className = "loop-horiz-arrow-col";

    var lbl = document.createElement("span");
    lbl.className = "loop-arrow-caption";
    lbl.textContent = topLabel;
    wrap.appendChild(lbl);

    if (isBidirectional) {
      var svgBi = svgEl("svg", { viewBox: "0 0 136 44", width: "136", height: "44", class: "loop-horiz-arrow-svg", "aria-hidden": "true" });
      // Top forward arrow (Request ->)
      svgBi.appendChild(svgEl("line", { x1: "4", y1: "13", x2: "116", y2: "13", stroke: "var(--color-primary)", "stroke-width": "3.5", "stroke-linecap": "round" }));
      svgBi.appendChild(svgEl("polygon", { points: "114,6 130,13 114,20", fill: "var(--color-primary)" }));
      // Bottom return arrow (<- Response)
      svgBi.appendChild(svgEl("line", { x1: "20", y1: "31", x2: "132", y2: "31", stroke: "var(--color-tertiary)", "stroke-width": "3.5", "stroke-linecap": "round", "stroke-dasharray": "6 4" }));
      svgBi.appendChild(svgEl("polygon", { points: "22,24 6,31 22,38", fill: "var(--color-tertiary)" }));
      wrap.appendChild(svgBi);
    } else {
      var svg = svgEl("svg", { viewBox: "0 0 136 32", width: "136", height: "32", class: "loop-horiz-arrow-svg", "aria-hidden": "true" });
      svg.appendChild(svgEl("line", { x1: "-16", y1: "16", x2: "152", y2: "16", stroke: "var(--color-primary-container)", "stroke-width": "10", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("line", { x1: "-12", y1: "16", x2: "118", y2: "16", stroke: "var(--color-primary)", "stroke-width": "4", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("line", { x1: "-12", y1: "16", x2: "114", y2: "16", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2", "stroke-dasharray": "5 7", class: "loop-anim-dash" }));
      svg.appendChild(svgEl("polygon", { points: "114,7 132,16 114,25", fill: "var(--color-primary)" }));
      wrap.appendChild(svg);
    }

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

  // Vertical Two-Way Hub Connector (For Stop 2: 2. Cloud Server <-> 4. Outside Services & APIs)
  function createVerticalStepArrow(downLabel, upLabel) {
    var wrap = document.createElement("div");
    wrap.className = "loop-vert-arrow-bridge";

    var leftSpan = document.createElement("span");
    leftSpan.className = "loop-arrow-caption";
    leftSpan.textContent = downLabel || "Calls API (.env key) ↓";

    var svgV = svgEl("svg", { viewBox: "0 0 64 56", width: "64", height: "56", class: "loop-vert-arrow-svg", "aria-hidden": "true" });
    // Downward arrow (Server -> Outside API)
    svgV.appendChild(svgEl("line", { x1: "20", y1: "4", x2: "20", y2: "42", stroke: "var(--color-primary)", "stroke-width": "3.5", "stroke-linecap": "round" }));
    svgV.appendChild(svgEl("polygon", { points: "13,38 20,52 27,38", fill: "var(--color-primary)" }));
    // Upward arrow (Outside API / Webhook -> Server)
    svgV.appendChild(svgEl("line", { x1: "44", y1: "52", x2: "44", y2: "14", stroke: "var(--color-tertiary)", "stroke-width": "3.5", "stroke-linecap": "round", "stroke-dasharray": "5 4" }));
    svgV.appendChild(svgEl("polygon", { points: "37,18 44,4 51,18", fill: "var(--color-tertiary)" }));

    var rightSpan = document.createElement("span");
    rightSpan.className = "loop-arrow-subcaption";
    rightSpan.textContent = upLabel || "↑ Returns AI / Webhook";

    wrap.appendChild(leftSpan);
    wrap.appendChild(svgV);
    wrap.appendChild(rightSpan);
    return wrap;
  }

  function createCurvedReturnWing(side, labelText) {
    var wrap = document.createElement("div");
    wrap.className = "loop-curved-wing";

    var svg = svgEl("svg", { viewBox: "0 0 240 116", width: "240", height: "112", class: "loop-curved-svg", "aria-hidden": "true" });
    if (side === "left") {
      // Clockwise return: flows from Stage 4 (right, x=232, y=74) left and UP into Stage 1 (x=54, y=14)
      var leftPath = "M 232 74 C 124 74, 54 74, 54 16";
      svg.appendChild(svgEl("path", { d: leftPath, fill: "none", stroke: "var(--color-primary-container)", "stroke-width": "10", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: leftPath, fill: "none", stroke: "var(--color-primary)", "stroke-width": "4", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: leftPath, fill: "none", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2", "stroke-dasharray": "5 7", class: "loop-anim-dash" }));
      svg.appendChild(svgEl("polygon", { points: "44,22 54,2 64,22", fill: "var(--color-primary)" }));
      svg.appendChild(svgText(144, 54, labelText || "Sends results", 13, 600, "var(--color-on-surface)"));
    } else {
      // Clockwise flow: flows from Stage 3 (top, x=186, y=6) down and LEFT into Stage 4 (x=18, y=74)
      var rightPath = "M 186 6 C 186 74, 116 74, 18 74";
      svg.appendChild(svgEl("path", { d: rightPath, fill: "none", stroke: "var(--color-primary-container)", "stroke-width": "10", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: rightPath, fill: "none", stroke: "var(--color-primary)", "stroke-width": "4", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("path", { d: rightPath, fill: "none", stroke: "var(--color-surface-container-lowest)", "stroke-width": "2", "stroke-dasharray": "5 7", class: "loop-anim-dash" }));
      svg.appendChild(svgEl("polygon", { points: "24,64 4,74 24,84", fill: "var(--color-primary)" }));
      svg.appendChild(svgText(96, 54, labelText || "Returns data", 13, 600, "var(--color-on-surface)"));
    }
    wrap.appendChild(svg);
    return wrap;
  }

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
    titleEl.style.display = "block";
    titleEl.textContent = opts.title || "";
    headerBtn.appendChild(titleEl);

    if (opts.subtitle) {
      var subEl = document.createElement("span");
      subEl.className = "loop-stage-subtitle";
      subEl.style.display = "block";
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
    createExternalServicesArt: createExternalServicesArt,
    createUserArt: createUserArt,
    createLaptopEditorArt: createLaptopEditorArt,
    createGitCloudRepoArt: createGitCloudRepoArt,
    createLiveWebHostArt: createLiveWebHostArt,
    createBrowserInspectArt: createBrowserInspectArt,
    createPythonFuncArt: createPythonFuncArt,
    createDictToTableArt: createDictToTableArt,
    createSchemaStackTraceArt: createSchemaStackTraceArt,
    createTestEvalPassArt: createTestEvalPassArt,
    createUrlRouteClickArt: createUrlRouteClickArt,
    createAgentMcpLoopArt: createAgentMcpLoopArt,
    createDbWebhookArt: createDbWebhookArt,
    createHumanApprovalArt: createHumanApprovalArt,
    createLicenseSearchArt: createLicenseSearchArt,
    createPackageInstallArt: createPackageInstallArt,
    createPuzzleSnapArt: createPuzzleSnapArt,
    createRocketShipArt: createRocketShipArt,
    createHorizontalStepArrow: createHorizontalStepArrow,
    createVerticalStepArrow: createVerticalStepArrow,
    createCurvedReturnWing: createCurvedReturnWing,
    createLoopStageCard: createLoopStageCard
  };
})();

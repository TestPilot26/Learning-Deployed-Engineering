// Deployed Eng Pipeline — Illustrative Living Diagrams Renderer
// Renders Stop 1 (Illustrated Computer + Cloud + Internet Scene),
// Stop 2 (Illustrated App Map with Language Bridges + Good vs. Fragile toggle),
// and Stop 3 (Living Git Timeline with official GitHub Octicon SVGs).
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  function getDiagramData() {
    return window.PIPELINE_DIAGRAMS_DATA || {};
  }

  function createOcticonSvg(iconKey, className) {
    var dData = getDiagramData();
    var octicons = dData.octiconPaths || {};
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", className || "octicon-svg");
    var paths = octicons[iconKey] || octicons.commit || [];
    paths.forEach(function (d) {
      var p = document.createElementNS(SVG_NS, "path");
      p.setAttribute("fill", "currentColor");
      p.setAttribute("d", d);
      svg.appendChild(p);
    });
    return svg;
  }

  function createFlowConnector(stepText) {
    var col = document.createElement("div");
    col.className = "scene-bridge-connector";

    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = stepText;

    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 80 28");
    svg.setAttribute("class", "flow-connector-svg");
    var line = document.createElementNS(SVG_NS, "line");
    line.setAttribute("x1", "6");
    line.setAttribute("y1", "14");
    line.setAttribute("x2", "66");
    line.setAttribute("y2", "14");
    line.setAttribute("class", "flow-animated-line");
    var head = document.createElementNS(SVG_NS, "polygon");
    head.setAttribute("points", "62,7 74,14 62,21");
    head.setAttribute("class", "flow-arrow-head");
    svg.appendChild(line);
    svg.appendChild(head);

    col.appendChild(badge);
    col.appendChild(svg);
    return col;
  }

  function createIllustratedNodeButton(node, isSelected, onSelect) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scene-node-pill" + (isSelected ? " active" : "");
    btn.setAttribute("data-node-id", node.id);

    var iconCircle = document.createElement("div");
    iconCircle.className = "scene-node-icon-circle " + (node.badgeClass || "badge-info");
    var ic = document.createElement("span");
    ic.className = "material-symbols-outlined scene-node-icon";
    ic.textContent = node.icon;
    iconCircle.appendChild(ic);

    var textCol = document.createElement("div");
    textCol.className = "scene-node-text-col";

    var title = document.createElement("strong");
    title.className = "diagram-node-title";
    title.textContent = node.title;

    var summary = document.createElement("span");
    summary.className = "resource-desc";
    summary.textContent = node.summary;

    textCol.appendChild(title);
    textCol.appendChild(summary);

    btn.appendChild(iconCircle);
    btn.appendChild(textCol);
    btn.addEventListener("click", function () {
      onSelect(node);
    });
    return btn;
  }

  // ============================================================================
  // RENDERER 1: Stop 1 — Illustrated Laptop -> Cloud -> Live Internet Map
  // ============================================================================
  function renderToolsFlowDiagram(container) {
    var nodes = getDiagramData().toolsFlowNodes || [];
    if (!nodes.length) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";

    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive visual map — click any icon to explore";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How your computer, cloud storage, and the live internet connect";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var selectedNodeId = nodes[0].id;
    var allButtons = [];
    var inspectorContainer = document.createElement("div");
    inspectorContainer.className = "diagram-inspector-card";

    function selectNode(node) {
      selectedNodeId = node.id;
      allButtons.forEach(function (b) {
        if (b.getAttribute("data-node-id") === selectedNodeId) b.classList.add("active");
        else b.classList.remove("active");
      });
      updateToolsInspector(inspectorContainer, node);
    }

    // Illustrated 3-Hub Visual Map: [1. Laptop Screen & Base] ---> [2. Cloud Vault] ---> [3. Live Internet Globe]
    var sceneLayout = document.createElement("div");
    sceneLayout.className = "illustrated-scene-layout";

    function createSceneHubBanner(badgeCls, iconName, titleText, subText) {
      var banner = document.createElement("div");
      banner.className = "scene-hub-banner";
      var heroBadge = document.createElement("div");
      heroBadge.className = "scene-hub-hero-icon " + badgeCls;
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined stop-hero-icon";
      ic.textContent = iconName;
      heroBadge.appendChild(ic);
      var titleWrap = document.createElement("div");
      var h4 = document.createElement("h4");
      h4.textContent = titleText;
      var sub = document.createElement("p");
      sub.className = "resource-desc";
      sub.textContent = subText;
      titleWrap.appendChild(h4);
      titleWrap.appendChild(sub);
      banner.appendChild(heroBadge);
      banner.appendChild(titleWrap);
      return banner;
    }

    // HUB 1: Illustrated Computer (Screen Frame + Base Stand)
    var computerCol = document.createElement("div");
    computerCol.className = "computer-illustration-wrap";

    var monitorScreen = document.createElement("div");
    monitorScreen.className = "computer-screen-frame";
    monitorScreen.appendChild(
      createSceneHubBanner(
        "badge-info",
        "laptop_mac",
        "1. Your computer (Local device)",
        "Where your code library lives privately on your machine—good for building, testing, and making mistakes safely before anyone else can see it."
      )
    );

    var computerOrbitGrid = document.createElement("div");
    computerOrbitGrid.className = "computer-orbit-grid";
    nodes.filter(function (n) { return n.hub === "computer"; }).forEach(function (node) {
      var btn = createIllustratedNodeButton(node, node.id === selectedNodeId, selectNode);
      allButtons.push(btn);
      computerOrbitGrid.appendChild(btn);
    });
    monitorScreen.appendChild(computerOrbitGrid);

    var laptopKeyboardBase = document.createElement("div");
    laptopKeyboardBase.className = "computer-keyboard-base";
    var notch = document.createElement("div");
    notch.className = "computer-trackpad-notch";
    laptopKeyboardBase.appendChild(notch);

    computerCol.appendChild(monitorScreen);
    computerCol.appendChild(laptopKeyboardBase);
    sceneLayout.appendChild(computerCol);

    // Connector 1 -> 2
    sceneLayout.appendChild(createFlowConnector("Upload ('git push')"));

    // Right Column stacking Cloud Storage above Live Internet Hosting
    var cloudAndWebCol = document.createElement("div");
    cloudAndWebCol.className = "cloud-web-column";

    // HUB 2: Illustrated Cloud Vault (GitHub)
    var cloudBox = document.createElement("div");
    cloudBox.className = "cloud-illustration-frame";
    cloudBox.appendChild(
      createSceneHubBanner(
        "badge-secondary",
        "cloud_done",
        "2. Cloud storage (GitHub)",
        "Where your code is stored remotely online so you never lose work and can share it."
      )
    );
    nodes.filter(function (n) { return n.hub === "cloud"; }).forEach(function (node) {
      var btn = createIllustratedNodeButton(node, node.id === selectedNodeId, selectNode);
      allButtons.push(btn);
      cloudBox.appendChild(btn);
    });
    cloudAndWebCol.appendChild(cloudBox);

    // Vertical animated arrow from Cloud to Live Internet
    var downConnector = document.createElement("div");
    downConnector.className = "vertical-bridge-connector";
    var downBadge = document.createElement("span");
    downBadge.className = "badge badge-success";
    downBadge.textContent = "Auto-builds website when GitHub updates";
    var downIcon = document.createElement("span");
    downIcon.className = "material-symbols-outlined bullet-icon";
    downIcon.textContent = "south";
    downConnector.appendChild(downBadge);
    downConnector.appendChild(downIcon);
    cloudAndWebCol.appendChild(downConnector);

    // HUB 3: Illustrated Live Internet / Hosting Environment (Vercel + Browser)
    var internetBox = document.createElement("div");
    internetBox.className = "internet-illustration-frame";
    internetBox.appendChild(
      createSceneHubBanner(
        "badge-success",
        "language",
        "3. Live internet hosting (Vercel & Browser)",
        "Where anyone in the world can open your live website link on their phone or computer."
      )
    );

    var netNodesStack = document.createElement("div");
    netNodesStack.className = "flow-zone-nodes";
    nodes.filter(function (n) { return n.hub === "internet"; }).forEach(function (node) {
      var btn = createIllustratedNodeButton(node, node.id === selectedNodeId, selectNode);
      allButtons.push(btn);
      netNodesStack.appendChild(btn);
    });
    internetBox.appendChild(netNodesStack);

    cloudAndWebCol.appendChild(internetBox);
    sceneLayout.appendChild(cloudAndWebCol);

    card.appendChild(sceneLayout);
    updateToolsInspector(inspectorContainer, nodes[0]);
    card.appendChild(inspectorContainer);
    container.appendChild(card);
  }

  function updateToolsInspector(inspectorEl, node) {
    inspectorEl.replaceChildren();

    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badge = document.createElement("span");
    badge.className = "badge " + node.badgeClass;
    badge.textContent = node.badge;
    topRow.appendChild(badge);

    var h4 = document.createElement("h4");
    h4.textContent = node.title;

    var desc = document.createElement("p");
    desc.className = "resource-desc";
    desc.textContent = node.whatItIs;

    var slipCallout = document.createElement("div");
    slipCallout.className = "safety-callout";
    var slipIcon = document.createElement("span");
    slipIcon.className = "material-symbols-outlined safety-icon";
    slipIcon.textContent = "lightbulb";
    var slipText = document.createElement("span");
    slipText.textContent = node.slipUp;
    slipCallout.appendChild(slipIcon);
    slipCallout.appendChild(slipText);

    var bottomRow = document.createElement("div");
    bottomRow.className = "diagram-inspector-footer";

    var cmdBox = document.createElement("div");
    cmdBox.className = "vocab-example-box";
    cmdBox.textContent = node.command;

    var resLink = document.createElement("a");
    resLink.className = "nav-btn nav-btn-primary";
    resLink.href = isSafeHttpUrl(node.videoUrl) ? node.videoUrl : "#";
    resLink.target = "_blank";
    resLink.rel = "noopener noreferrer";
    var linkSpan = document.createElement("span");
    linkSpan.textContent = node.videoTitle;
    var linkIcon = document.createElement("span");
    linkIcon.className = "material-symbols-outlined btn-icon-sm";
    linkIcon.textContent = "open_in_new";
    resLink.appendChild(linkSpan);
    resLink.appendChild(linkIcon);

    bottomRow.appendChild(cmdBox);
    bottomRow.appendChild(resLink);

    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);
    inspectorEl.appendChild(desc);
    inspectorEl.appendChild(slipCallout);
    inspectorEl.appendChild(bottomRow);
  }

  // ============================================================================
  // RENDERER 2: Stop 2 — Illustrated App Map + How Languages Talk Between Pieces
  // ============================================================================
  function renderAppInfrastructureDiagram(container) {
    var dData = getDiagramData();
    var nodes = dData.appInfraNodes || [];
    var languages = dData.appLanguageBridges || [];
    if (!nodes.length) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";

    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-secondary";
    badge.textContent = "Interactive app map — click any piece to see its tools & languages";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Diagram of an app: How the screen, brain, and database talk";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);

    var modeGroup = document.createElement("div");
    modeGroup.className = "badge-row";
    var archMode = "good";

    var btnGood = document.createElement("button");
    btnGood.type = "button";
    btnGood.className = "vocab-filter-chip badge-success selected";
    btnGood.textContent = "Good architecture";

    var btnBad = document.createElement("button");
    btnBad.type = "button";
    btnBad.className = "vocab-filter-chip badge-neutral";
    btnBad.textContent = "Fragile vibe-coded architecture";

    modeGroup.appendChild(btnGood);
    modeGroup.appendChild(btnBad);
    headerRow.appendChild(titleGroup);
    headerRow.appendChild(modeGroup);
    card.appendChild(headerRow);

    var archBanner = document.createElement("div");
    archBanner.className = "arch-mode-banner good-mode";
    card.appendChild(archBanner);

    var selectedNode = nodes[0];
    var nodeBtns = [];
    var archGrid = document.createElement("div");
    archGrid.className = "app-infra-grid";

    var inspectorEl = document.createElement("div");
    inspectorEl.className = "diagram-inspector-card";

    function syncArchBanner() {
      archBanner.replaceChildren();
      var icon = document.createElement("span");
      icon.className = "material-symbols-outlined safety-icon";
      var txt = document.createElement("span");
      if (archMode === "good") {
        archBanner.className = "arch-mode-banner good-mode";
        icon.textContent = "verified";
        txt.textContent = "Good setup: The user's screen never holds secret passwords; every click passes through the Login Guard and Private Backend Brain before touching the Database Filing Cabinet.";
      } else {
        archBanner.className = "arch-mode-banner bad-mode";
        icon.textContent = "warning";
        txt.textContent = "Fragile setup: Secret AI keys pasted directly into browser code, the screen editing the database without a login check, and 45-second AI tasks freezing the page.";
      }
      archBanner.appendChild(icon);
      archBanner.appendChild(txt);
    }

    nodes.forEach(function (node) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "scene-node-pill" + (node.id === selectedNode.id ? " active" : "");
      btn.setAttribute("data-node-id", node.id);

      var iconCircle = document.createElement("div");
      iconCircle.className = "scene-node-icon-circle " + (node.badgeClass || "badge-info");
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined scene-node-icon";
      ic.textContent = node.icon;
      iconCircle.appendChild(ic);

      var textCol = document.createElement("div");
      textCol.className = "scene-node-text-col";

      var top = document.createElement("div");
      top.className = "badge-row";
      var b = document.createElement("span");
      b.className = "badge " + node.badgeClass;
      b.textContent = node.layer;
      top.appendChild(b);

      var t = document.createElement("strong");
      t.className = "diagram-node-title";
      t.textContent = node.title;

      var s = document.createElement("span");
      s.className = "resource-desc";
      s.textContent = node.summary;

      var langBridge = document.createElement("span");
      langBridge.className = "lang-bridge-callout";
      langBridge.textContent = node.bridgeLang;

      textCol.appendChild(top);
      textCol.appendChild(t);
      textCol.appendChild(s);
      textCol.appendChild(langBridge);

      btn.appendChild(iconCircle);
      btn.appendChild(textCol);

      btn.addEventListener("click", function () {
        selectedNode = node;
        nodeBtns.forEach(function (other) {
          if (other.getAttribute("data-node-id") === selectedNode.id) other.classList.add("active");
          else other.classList.remove("active");
        });
        updateAppInfraInspector(inspectorEl, selectedNode, archMode);
      });

      nodeBtns.push(btn);
      archGrid.appendChild(btn);
    });

    btnGood.addEventListener("click", function () {
      archMode = "good";
      btnGood.className = "vocab-filter-chip badge-success selected";
      btnBad.className = "vocab-filter-chip badge-neutral";
      syncArchBanner();
      updateAppInfraInspector(inspectorEl, selectedNode, archMode);
    });

    btnBad.addEventListener("click", function () {
      archMode = "bad";
      btnBad.className = "vocab-filter-chip badge-secondary selected";
      btnGood.className = "vocab-filter-chip badge-neutral";
      syncArchBanner();
      updateAppInfraInspector(inspectorEl, selectedNode, archMode);
    });

    syncArchBanner();
    card.appendChild(archGrid);
    updateAppInfraInspector(inspectorEl, selectedNode, archMode);
    card.appendChild(inspectorEl);

    var langHeading = document.createElement("h3");
    langHeading.className = "vocab-section-heading";
    langHeading.textContent = "Coding languages: How they talk between the pieces";
    card.appendChild(langHeading);

    var langGrid = document.createElement("div");
    langGrid.className = "vocab-cards-grid";
    languages.forEach(function (lItem) {
      var lCard = document.createElement("div");
      lCard.className = "vocab-item-card";

      var top = document.createElement("div");
      top.className = "resource-title-row";
      var namePill = document.createElement("code");
      namePill.className = "vocab-cmd-pill";
      namePill.textContent = lItem.lang;
      var lBadge = document.createElement("span");
      lBadge.className = "badge badge-info";
      lBadge.textContent = lItem.role;
      top.appendChild(namePill);
      top.appendChild(lBadge);

      var actionP = document.createElement("p");
      actionP.className = "resource-desc";
      var actStrong = document.createElement("strong");
      actStrong.textContent = "What it does: ";
      actionP.appendChild(actStrong);
      actionP.appendChild(document.createTextNode(lItem.actionText));

      var prosP = document.createElement("p");
      prosP.className = "resource-desc";
      var prosStrong = document.createElement("strong");
      prosStrong.textContent = "Why pick it: ";
      prosP.appendChild(prosStrong);
      prosP.appendChild(document.createTextNode(lItem.pros));

      var consP = document.createElement("p");
      consP.className = "resource-desc";
      var consStrong = document.createElement("strong");
      consStrong.textContent = "Watch out for: ";
      consP.appendChild(consStrong);
      consP.appendChild(document.createTextNode(lItem.cons));

      lCard.appendChild(top);
      lCard.appendChild(actionP);
      lCard.appendChild(prosP);
      lCard.appendChild(consP);
      langGrid.appendChild(lCard);
    });
    card.appendChild(langGrid);

    container.appendChild(card);
  }

  function updateAppInfraInspector(inspectorEl, node, archMode) {
    inspectorEl.replaceChildren();

    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badge = document.createElement("span");
    badge.className = "badge " + node.badgeClass;
    badge.textContent = node.layer + " · " + node.badge;
    topRow.appendChild(badge);

    var h4 = document.createElement("h4");
    h4.textContent = node.title;
    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);

    var detailsGrid = document.createElement("div");
    detailsGrid.className = "vocab-cards-grid";

    var items = [
      { label: "Popular tools people use for this", body: node.commonTools },
      { label: "Which tool to pick when", body: node.useCases },
      { label: "Languages that talk here", body: node.languages },
      { label: "Why this piece matters", body: node.prosCons }
    ];

    items.forEach(function (info) {
      var box = document.createElement("div");
      box.className = "nested-card";
      var strong = document.createElement("strong");
      strong.textContent = info.label;
      var p = document.createElement("p");
      p.className = "resource-desc";
      p.textContent = info.body;
      box.appendChild(strong);
      box.appendChild(p);
      detailsGrid.appendChild(box);
    });
    inspectorEl.appendChild(detailsGrid);

    var archCompare = document.createElement("div");
    archCompare.className = archMode === "good" ? "arch-mode-banner good-mode" : "arch-mode-banner bad-mode";
    var icon = document.createElement("span");
    icon.className = "material-symbols-outlined safety-icon";
    icon.textContent = archMode === "good" ? "check_circle" : "error";
    var textWrap = document.createElement("div");
    var lead = document.createElement("strong");
    lead.textContent = archMode === "good" ? "In a good setup: " : "In a fragile vibe-coded setup: ";
    var bodySpan = document.createElement("span");
    bodySpan.textContent = archMode === "good" ? node.goodArch : node.badArch;
    textWrap.appendChild(lead);
    textWrap.appendChild(bodySpan);
    archCompare.appendChild(icon);
    archCompare.appendChild(textWrap);
    inspectorEl.appendChild(archCompare);
  }

  // ============================================================================
  // RENDERER 3: Stop 3 — Living Git Graph with Authentic GitHub Octicons
  // ============================================================================
  function renderGitLivingDiagram(container) {
    var gitNodes = getDiagramData().gitLivingNodes || [];
    if (!gitNodes.length) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Living version control timeline — click any step below";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How checkpoints (Commits), sandboxes (Branches), and publishing work";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var graphWrap = document.createElement("div");
    graphWrap.className = "git-graph-stage";

    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 760 190");
    svg.setAttribute("class", "git-graph-svg");

    var mainLine = document.createElementNS(SVG_NS, "path");
    mainLine.setAttribute("d", "M 50 55 L 710 55");
    mainLine.setAttribute("class", "git-branch-line-main");
    svg.appendChild(mainLine);

    var featLine = document.createElementNS(SVG_NS, "path");
    featLine.setAttribute("d", "M 170 55 C 210 55, 210 135, 260 135 L 460 135 C 510 135, 510 55, 560 55");
    featLine.setAttribute("class", "git-branch-line-feature");
    svg.appendChild(featLine);

    var featPulse = document.createElementNS(SVG_NS, "path");
    featPulse.setAttribute("d", "M 170 55 C 210 55, 210 135, 260 135 L 460 135 C 510 135, 510 55, 560 55");
    featPulse.setAttribute("class", "git-branch-line-animated");
    svg.appendChild(featPulse);

    var mainLabel = document.createElementNS(SVG_NS, "text");
    mainLabel.setAttribute("x", "50");
    mainLabel.setAttribute("y", "28");
    mainLabel.setAttribute("class", "git-svg-label");
    mainLabel.textContent = "main timeline (Your real live website)";
    svg.appendChild(mainLabel);

    var featLabel = document.createElementNS(SVG_NS, "text");
    featLabel.setAttribute("x", "235");
    featLabel.setAttribute("y", "172");
    featLabel.setAttribute("class", "git-svg-label-secondary");
    featLabel.textContent = "branch timeline (Safe practice sandbox to test AI edits)";
    svg.appendChild(featLabel);

    var svgDots = [
      { cx: "80", cy: "55", label: "1. Start", type: "main" },
      { cx: "170", cy: "55", label: "2. Split branch", type: "main" },
      { cx: "280", cy: "135", label: "3. Save checkpoint", type: "feat" },
      { cx: "370", cy: "135", label: "4. Check diff", type: "feat" },
      { cx: "460", cy: "135", label: "5. Review PR", type: "pr" },
      { cx: "560", cy: "55", label: "6. Merge back", type: "merge" },
      { cx: "675", cy: "55", label: "7. Live on Vercel!", type: "deploy" }
    ];

    svgDots.forEach(function (dot) {
      var g = document.createElementNS(SVG_NS, "g");
      var c = document.createElementNS(SVG_NS, "circle");
      c.setAttribute("cx", dot.cx);
      c.setAttribute("cy", dot.cy);
      c.setAttribute("r", "11");
      c.setAttribute("class", "git-commit-dot git-dot-" + dot.type);
      var t = document.createElementNS(SVG_NS, "text");
      t.setAttribute("x", dot.cx);
      t.setAttribute("y", Number(dot.cy) === 55 ? "82" : "112");
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("class", "git-svg-node-caption");
      t.textContent = dot.label;
      g.appendChild(c);
      g.appendChild(t);
      svg.appendChild(g);
    });

    graphWrap.appendChild(svg);
    card.appendChild(graphWrap);

    var selectedGitNode = gitNodes[0];
    var gitBtns = [];
    var gitGrid = document.createElement("div");
    gitGrid.className = "app-infra-grid";

    var inspectorEl = document.createElement("div");
    inspectorEl.className = "diagram-inspector-card";

    gitNodes.forEach(function (gNode) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "diagram-node-btn" + (gNode.id === selectedGitNode.id ? " active" : "");
      btn.setAttribute("data-node-id", gNode.id);

      var top = document.createElement("div");
      top.className = "resource-title-row";
      var b = document.createElement("span");
      b.className = "badge " + gNode.badgeClass;
      b.textContent = gNode.badge;
      var oct = createOcticonSvg(gNode.octicon, "octicon-svg");
      top.appendChild(b);
      top.appendChild(oct);

      var title = document.createElement("strong");
      title.className = "diagram-node-title";
      title.textContent = gNode.title;

      var cmdPreview = document.createElement("code");
      cmdPreview.className = "vocab-cmd-pill";
      cmdPreview.textContent = gNode.command;

      btn.appendChild(top);
      btn.appendChild(title);
      btn.appendChild(cmdPreview);

      btn.addEventListener("click", function () {
        selectedGitNode = gNode;
        gitBtns.forEach(function (other) {
          if (other.getAttribute("data-node-id") === selectedGitNode.id) other.classList.add("active");
          else other.classList.remove("active");
        });
        updateGitInspector(inspectorEl, selectedGitNode);
      });

      gitBtns.push(btn);
      gitGrid.appendChild(btn);
    });

    card.appendChild(gitGrid);
    updateGitInspector(inspectorEl, selectedGitNode);
    card.appendChild(inspectorEl);
    container.appendChild(card);
  }

  function updateGitInspector(inspectorEl, gNode) {
    inspectorEl.replaceChildren();

    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badge = document.createElement("span");
    badge.className = "badge " + gNode.badgeClass;
    badge.textContent = gNode.badge;
    var oct = createOcticonSvg(gNode.octicon, "octicon-svg-lg");
    topRow.appendChild(badge);
    topRow.appendChild(oct);

    var h4 = document.createElement("h4");
    h4.textContent = gNode.title;

    var pWhat = document.createElement("p");
    pWhat.className = "resource-desc pre-line-text";
    pWhat.textContent = gNode.whatItIs;

    var saveCallout = document.createElement("div");
    saveCallout.className = "arch-mode-banner good-mode";
    var icon = document.createElement("span");
    icon.className = "material-symbols-outlined safety-icon";
    icon.textContent = "shield";
    var saveText = document.createElement("span");
    saveText.textContent = gNode.whyItSavesYou;
    saveCallout.appendChild(icon);
    saveCallout.appendChild(saveText);

    var cmdBox = document.createElement("div");
    cmdBox.className = "vocab-example-box";
    cmdBox.textContent = gNode.command;

    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);
    inspectorEl.appendChild(pWhat);
    inspectorEl.appendChild(saveCallout);
    inspectorEl.appendChild(cmdBox);
  }

  window.PipelineDiagrams = {
    renderForStop: function (stop, containerEl) {
      if (!containerEl) return;
      containerEl.replaceChildren();
      if (!stop || !stop.diagramType) {
        containerEl.style.display = "none";
        return;
      }
      containerEl.style.display = "block";
      if (stop.diagramType === "tools-flow") {
        renderToolsFlowDiagram(containerEl);
      } else if (stop.diagramType === "app-infrastructure") {
        renderAppInfrastructureDiagram(containerEl);
      } else if (stop.diagramType === "git-living") {
        renderGitLivingDiagram(containerEl);
      }
    }
  };
})();

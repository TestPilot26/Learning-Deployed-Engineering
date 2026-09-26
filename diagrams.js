// Deployed Eng Pipeline — Interactive Living Diagrams Renderer
// Renders Stop 1 (Local-to-GitHub-to-Vercel Flow), Stop 2 (Diagram of an App,
// Infrastructure, Good vs. Fragile Architecture & Coding Languages), and
// Stop 3 (Living Git Graph with authentic GitHub Octicon SVG icons).
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

  // ============================================================================
  // RENDERER 1: Stop 1 — Local-to-GitHub-to-Vercel Living Diagram
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
    badge.textContent = "Interactive living diagram";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How your laptop, GitHub, and Vercel connect";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var zonesGrid = document.createElement("div");
    zonesGrid.className = "tools-flow-zones";

    var zoneDefs = [
      { key: "1. Your Laptop (Localhost)", icon: "laptop_mac", sub: "Private workshop on your hard drive" },
      { key: "2. Cloud Git (GitHub)", icon: "cloud_done", sub: "Remote version history vault" },
      { key: "3. Cloud Production (Vercel)", icon: "public", sub: "Builds & serves public https:// URL" }
    ];

    var selectedNodeId = nodes[0].id;
    var nodeButtons = [];
    var inspectorContainer = document.createElement("div");
    inspectorContainer.className = "diagram-inspector-card";

    zoneDefs.forEach(function (zDef, zIdx) {
      var zoneCol = document.createElement("div");
      zoneCol.className = "flow-zone-box";

      var zHeader = document.createElement("div");
      zHeader.className = "flow-zone-header";
      var zIcon = document.createElement("span");
      zIcon.className = "material-symbols-outlined bullet-icon";
      zIcon.textContent = zDef.icon;
      var zTitleWrap = document.createElement("div");
      var zTitle = document.createElement("h4");
      zTitle.textContent = zDef.key;
      var zSub = document.createElement("span");
      zSub.className = "caption";
      zSub.textContent = zDef.sub;
      zTitleWrap.appendChild(zTitle);
      zTitleWrap.appendChild(zSub);
      zHeader.appendChild(zIcon);
      zHeader.appendChild(zTitleWrap);
      zoneCol.appendChild(zHeader);

      var nodesList = document.createElement("div");
      nodesList.className = "flow-zone-nodes";

      nodes.filter(function (n) { return n.zone === zDef.key; }).forEach(function (node) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "diagram-node-btn" + (node.id === selectedNodeId ? " active" : "");
        btn.setAttribute("data-node-id", node.id);

        var top = document.createElement("div");
        top.className = "resource-title-row";
        var nBadge = document.createElement("span");
        nBadge.className = "badge " + node.badgeClass;
        nBadge.textContent = node.badge;
        var nIcon = document.createElement("span");
        nIcon.className = "material-symbols-outlined btn-icon-sm";
        nIcon.textContent = node.icon;
        top.appendChild(nBadge);
        top.appendChild(nIcon);

        var nTitle = document.createElement("strong");
        nTitle.className = "diagram-node-title";
        nTitle.textContent = node.title;

        var nSum = document.createElement("span");
        nSum.className = "resource-desc";
        nSum.textContent = node.summary;

        btn.appendChild(top);
        btn.appendChild(nTitle);
        btn.appendChild(nSum);

        btn.addEventListener("click", function () {
          selectedNodeId = node.id;
          nodeButtons.forEach(function (b) {
            if (b.getAttribute("data-node-id") === selectedNodeId) b.classList.add("active");
            else b.classList.remove("active");
          });
          updateToolsInspector(inspectorContainer, node);
        });

        nodeButtons.push(btn);
        nodesList.appendChild(btn);
      });

      zoneCol.appendChild(nodesList);
      zonesGrid.appendChild(zoneCol);

      if (zIdx < zoneDefs.length - 1) {
        var arrowCol = document.createElement("div");
        arrowCol.className = "flow-connector-col";
        var arrowLabel = document.createElement("span");
        arrowLabel.className = "badge badge-neutral";
        arrowLabel.textContent = zIdx === 0 ? "git push" : "webhook build";

        var svgArrow = document.createElementNS(SVG_NS, "svg");
        svgArrow.setAttribute("viewBox", "0 0 64 24");
        svgArrow.setAttribute("class", "flow-connector-svg");
        var line = document.createElementNS(SVG_NS, "line");
        line.setAttribute("x1", "4");
        line.setAttribute("y1", "12");
        line.setAttribute("x2", "54");
        line.setAttribute("y2", "12");
        line.setAttribute("class", "flow-animated-line");
        var head = document.createElementNS(SVG_NS, "polygon");
        head.setAttribute("points", "50,6 60,12 50,18");
        head.setAttribute("class", "flow-arrow-head");
        svgArrow.appendChild(line);
        svgArrow.appendChild(head);

        arrowCol.appendChild(arrowLabel);
        arrowCol.appendChild(svgArrow);
        zonesGrid.appendChild(arrowCol);
      }
    });

    card.appendChild(zonesGrid);
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
    badge.textContent = node.zone + " · " + node.badge;
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
  // RENDERER 2: Stop 2 — Interactive Diagram of an App, Infra & Languages
  // ============================================================================
  function renderAppInfrastructureDiagram(container) {
    var dData = getDiagramData();
    var nodes = dData.appInfraNodes || [];
    var languages = dData.languageComparison || [];
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
    badge.textContent = "Interactive system architecture";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Diagram of an app: Layers, tools & languages";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);

    var modeGroup = document.createElement("div");
    modeGroup.className = "badge-row";
    var archMode = "good";

    var btnGood = document.createElement("button");
    btnGood.type = "button";
    btnGood.className = "vocab-filter-chip badge-success selected";
    btnGood.textContent = "Good production architecture";

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
        txt.textContent = "Good architecture pattern: Client UI never holds secrets; every request passes through Auth & the Backend API with validated schemas, parameterized SQL, and async queues for slow AI work.";
      } else {
        archBanner.className = "arch-mode-banner bad-mode";
        icon.textContent = "warning";
        txt.textContent = "Fragile vibe-coded pattern: Secret API keys leaked in browser code, UI mutating database tables directly without server auth, synchronous 45-second AI calls blocking the page, and zero retry safety.";
      }
      archBanner.appendChild(icon);
      archBanner.appendChild(txt);
    }

    nodes.forEach(function (node) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "diagram-node-btn" + (node.id === selectedNode.id ? " active" : "");
      btn.setAttribute("data-node-id", node.id);

      var top = document.createElement("div");
      top.className = "resource-title-row";
      var b = document.createElement("span");
      b.className = "badge " + node.badgeClass;
      b.textContent = node.layer;
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined btn-icon-sm";
      ic.textContent = node.icon;
      top.appendChild(b);
      top.appendChild(ic);

      var t = document.createElement("strong");
      t.className = "diagram-node-title";
      t.textContent = node.title;

      var s = document.createElement("span");
      s.className = "resource-desc";
      s.textContent = node.summary;

      btn.appendChild(top);
      btn.appendChild(t);
      btn.appendChild(s);

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
    langHeading.textContent = "Coding languages: Why we choose each one (pros & cons)";
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
      lBadge.className = "badge " + lItem.badgeClass;
      lBadge.textContent = lItem.badge;
      top.appendChild(namePill);
      top.appendChild(lBadge);

      var whereP = document.createElement("p");
      whereP.className = "resource-desc";
      var whereStrong = document.createElement("strong");
      whereStrong.textContent = "Where it lives: ";
      whereP.appendChild(whereStrong);
      whereP.appendChild(document.createTextNode(lItem.where));

      var prosP = document.createElement("p");
      prosP.className = "resource-desc";
      var prosStrong = document.createElement("strong");
      prosStrong.textContent = "Pros: ";
      prosP.appendChild(prosStrong);
      prosP.appendChild(document.createTextNode(lItem.pros));

      var consP = document.createElement("p");
      consP.className = "resource-desc";
      var consStrong = document.createElement("strong");
      consStrong.textContent = "Trade-offs: ";
      consP.appendChild(consStrong);
      consP.appendChild(document.createTextNode(lItem.cons));

      lCard.appendChild(top);
      lCard.appendChild(whereP);
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
      { label: "Common real-world tools & names", body: node.commonTools },
      { label: "When to use which tool", body: node.useCases },
      { label: "Languages & protocols that speak here", body: node.languages },
      { label: "Language pros & cons at this layer", body: node.prosCons }
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
    lead.textContent = archMode === "good" ? "In a good architecture: " : "In a fragile vibe-coded architecture: ";
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
    badge.textContent = "Living version control graph";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How Git commits, branches, PRs/CLs, and merges work";
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
    mainLabel.textContent = "main branch (Production -> Vercel)";
    svg.appendChild(mainLabel);

    var featLabel = document.createElementNS(SVG_NS, "text");
    featLabel.setAttribute("x", "255");
    featLabel.setAttribute("y", "172");
    featLabel.setAttribute("class", "git-svg-label-secondary");
    featLabel.textContent = "feat/ai-experiment branch (Safe sandbox)";
    svg.appendChild(featLabel);

    var svgDots = [
      { cx: "80", cy: "55", label: "c1: init", type: "main" },
      { cx: "170", cy: "55", label: "c2: branch off", type: "main" },
      { cx: "280", cy: "135", label: "c3: AI edit", type: "feat" },
      { cx: "370", cy: "135", label: "c4: git diff ok", type: "feat" },
      { cx: "460", cy: "135", label: "PR / CL review", type: "pr" },
      { cx: "560", cy: "55", label: "c5: merge PR", type: "merge" },
      { cx: "675", cy: "55", label: "Vercel live!", type: "deploy" }
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

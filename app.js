// Deployed Eng Pipeline — Core View Rendering & Pathway Controller
// Adheres to BillSkill GM3 standards & SecureCoder DOM rules (zero innerHTML).

function isActivityStepDone(stopId, stepIdx) {
  try { return localStorage.getItem("activity_" + stopId + "_" + stepIdx) === "1"; } catch (e) { return false; }
}

function toggleActivityStepDone(stopId, stepIdx) {
  var nextState = !isActivityStepDone(stopId, stepIdx);
  try {
    if (nextState) localStorage.setItem("activity_" + stopId + "_" + stepIdx, "1");
    else localStorage.removeItem("activity_" + stopId + "_" + stepIdx);
  } catch (e) {}
  return nextState;
}

function renderPipelineStops() {
  var container = document.getElementById("pipeline-stops-container");
  if (!container || !window.PIPELINE_DATA) return;
  container.replaceChildren();

  var stops = window.PIPELINE_DATA.stops || [];
  stops.forEach(function (stop, index) {
    var row = document.createElement("div");
    row.className = "pipeline-stop-row";
    row.id = "stop-row-" + stop.id;

    var card = document.createElement("button");
    card.type = "button";
    card.className = "stop-summary-card stop-nav-trigger";
    card.id = "btn-stop-card-" + stop.id;
    card.setAttribute("data-stop-id", stop.id);

    var headerRow = document.createElement("div");
    headerRow.className = "stop-card-header";

    var badge = document.createElement("span");
    badge.className = "badge " + (stop.badgeClass || "badge-info");
    badge.textContent = stop.stage;
    headerRow.appendChild(badge);

    var title = document.createElement("h2");
    title.className = "stop-card-title";
    title.textContent = stop.title;

    var teaser = document.createElement("p");
    teaser.className = "stop-card-teaser";
    teaser.textContent = stop.teaser;

    var cta = document.createElement("span");
    cta.className = "stop-card-cta";
    var ctaText = document.createElement("span");
    ctaText.textContent = "Open stop";
    var ctaIcon = document.createElement("span");
    ctaIcon.className = "material-symbols-outlined btn-icon-sm";
    ctaIcon.textContent = "arrow_forward";
    cta.appendChild(ctaText);
    cta.appendChild(ctaIcon);

    card.appendChild(headerRow);
    card.appendChild(title);
    card.appendChild(teaser);
    card.appendChild(cta);

    var bubbleSlot = document.createElement("div");
    bubbleSlot.className = "stop-bubble-slot";

    var bubbleBtn = document.createElement("button");
    bubbleBtn.type = "button";
    bubbleBtn.className = "stop-bubble stop-nav-trigger " + (stop.tone || "tone-primary");
    bubbleBtn.id = "btn-stop-bubble-" + stop.id;
    bubbleBtn.setAttribute("data-stop-id", stop.id);
    bubbleBtn.setAttribute("aria-label", "Open " + stop.title);
    bubbleBtn.setAttribute("title", stop.title);

    var bubbleIcon = document.createElement("span");
    bubbleIcon.className = "material-symbols-outlined stop-bubble-icon";
    bubbleIcon.textContent = stop.icon;
    bubbleBtn.appendChild(bubbleIcon);
    bubbleSlot.appendChild(bubbleBtn);

    var slotSide = document.createElement("div");
    if (index % 2 === 0) {
      slotSide.className = "stop-card-slot-left";
      slotSide.appendChild(card);
      row.appendChild(slotSide);
      row.appendChild(bubbleSlot);
    } else {
      slotSide.className = "stop-card-slot-right";
      slotSide.appendChild(card);
      row.appendChild(bubbleSlot);
      row.appendChild(slotSide);
    }

    container.appendChild(row);
  });

  document.querySelectorAll(".stop-nav-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var stopId = trigger.getAttribute("data-stop-id");
      if (stopId) navigateTo("#stop/" + stopId);
    });
  });

  setupScrollRevealAndPathway();
}

function updatePathwayGeometry() {
  var wrapper = document.getElementById("pipeline-stage-wrapper");
  var svg = document.getElementById("pathway-svg");
  var trackPath = document.getElementById("pathway-track-path");
  var progressPath = document.getElementById("pathway-progress-path");
  if (!wrapper || !svg || !trackPath || !progressPath) return;

  var bubbles = wrapper.querySelectorAll(".stop-bubble");
  if (!bubbles.length) return;

  var wrapperRect = wrapper.getBoundingClientRect();
  var height = Math.max(wrapper.offsetHeight, 400);
  svg.setAttribute("viewBox", "0 0 240 " + height);

  var points = [];
  var isMobile = window.innerWidth <= 840;
  bubbles.forEach(function (b, idx) {
    var rect = b.getBoundingClientRect();
    var y = rect.top - wrapperRect.top + rect.height / 2;
    var x = isMobile ? 24 : 120 + (idx % 2 === 0 ? -16 : 16);
    points.push({ x: x, y: y });
  });

  if (points.length === 0) return;

  var d = "M " + points[0].x + " " + Math.max(16, points[0].y - 32) + " L " + points[0].x + " " + points[0].y;
  for (var i = 0; i < points.length - 1; i++) {
    var curr = points[i];
    var next = points[i + 1];
    var midY = (curr.y + next.y) / 2;
    var curveX = isMobile ? 24 : i % 2 === 0 ? 164 : 76;
    d += " C " + curveX + " " + midY + ", " + curveX + " " + midY + ", " + next.x + " " + next.y;
  }

  trackPath.setAttribute("d", d);
  progressPath.setAttribute("d", d);

  try {
    var totalLen = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = String(totalLen);
    updatePathwayScrollProgress(totalLen);
  } catch (e) {}
}

function updatePathwayScrollProgress(cachedLen) {
  var wrapper = document.getElementById("pipeline-stage-wrapper");
  var progressPath = document.getElementById("pathway-progress-path");
  if (!wrapper || !progressPath) return;

  var totalLen = cachedLen;
  if (!totalLen) {
    try { totalLen = progressPath.getTotalLength(); } catch (e) { return; }
  }

  var rect = wrapper.getBoundingClientRect();
  var viewportHeight = window.innerHeight || 800;
  var scrolled = viewportHeight * 0.65 - rect.top;
  var ratio = Math.max(0.12, Math.min(1, scrolled / Math.max(1, rect.height - 120)));
  progressPath.style.strokeDashoffset = String(totalLen * (1 - ratio));
}

function setupScrollRevealAndPathway() {
  var rows = document.querySelectorAll(".pipeline-stop-row");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    rows.forEach(function (row) { observer.observe(row); });
  } else {
    rows.forEach(function (row) { row.classList.add("visible"); });
  }
  if (rows[0]) rows[0].classList.add("visible");
  if (rows[1]) rows[1].classList.add("visible");
  setTimeout(updatePathwayGeometry, 60);
}

function renderStopDetail(stopId) {
  if (!window.PIPELINE_DATA || !window.PIPELINE_DATA.stops) return false;
  var stops = window.PIPELINE_DATA.stops;
  var stopIndex = -1;
  var stop = null;
  for (var i = 0; i < stops.length; i++) {
    if (stops[i].id === stopId) { stop = stops[i]; stopIndex = i; break; }
  }
  if (!stop) return false;

  var badgeEl = document.getElementById("detail-stop-badge");
  var iconEl = document.getElementById("detail-stop-icon");
  var titleEl = document.getElementById("detail-stop-title");
  var explainerEl = document.getElementById("detail-stop-explainer");
  var expListEl = document.getElementById("detail-experiences-list");
  var actTitleEl = document.getElementById("detail-activity-title");
  var actListEl = document.getElementById("detail-activity-steps");
  var resGridEl = document.getElementById("detail-resources-grid");
  var prevBtn = document.getElementById("btn-prev-stop");
  var nextBtn = document.getElementById("btn-next-stop");

  if (badgeEl) {
    badgeEl.className = "badge " + (stop.badgeClass || "badge-info");
    badgeEl.textContent = stop.stage;
  }
  if (iconEl) iconEl.textContent = stop.icon;
  if (titleEl) titleEl.textContent = stop.title;
  if (explainerEl) explainerEl.textContent = stop.explainer;

  if (expListEl) {
    expListEl.replaceChildren();
    (stop.experiences || []).forEach(function (item) {
      var li = document.createElement("li");
      li.className = "bullet-item";
      var bulletIcon = document.createElement("span");
      bulletIcon.className = "material-symbols-outlined bullet-icon";
      bulletIcon.textContent = "check_circle";
      var textWrap = document.createElement("div");
      var strong = document.createElement("strong");
      strong.textContent = item.lead + " ";
      var span = document.createElement("span");
      span.textContent = item.body;
      textWrap.appendChild(strong);
      textWrap.appendChild(span);
      li.appendChild(bulletIcon);
      li.appendChild(textWrap);
      expListEl.appendChild(li);
    });
  }

  if (actTitleEl && stop.activity) actTitleEl.textContent = stop.activity.title;
  if (actListEl && stop.activity) {
    actListEl.replaceChildren();
    (stop.activity.steps || []).forEach(function (stepText, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      var done = isActivityStepDone(stop.id, idx);
      btn.className = "activity-step-btn" + (done ? " completed" : "");
      btn.id = "btn-activity-" + stop.id + "-" + idx;

      var checkIcon = document.createElement("span");
      checkIcon.className = "material-symbols-outlined activity-check-icon";
      checkIcon.textContent = done ? "task_alt" : "radio_button_unchecked";

      var label = document.createElement("span");
      label.textContent = stepText;
      btn.appendChild(checkIcon);
      btn.appendChild(label);

      btn.addEventListener("click", function () {
        var nowDone = toggleActivityStepDone(stop.id, idx);
        btn.className = "activity-step-btn" + (nowDone ? " completed" : "");
        checkIcon.textContent = nowDone ? "task_alt" : "radio_button_unchecked";
      });
      actListEl.appendChild(btn);
    });
  }

  if (resGridEl) {
    resGridEl.replaceChildren();
    (stop.resources || []).forEach(function (res, idx) {
      var link = document.createElement("a");
      link.className = "resource-link-card";
      link.id = "link-resource-" + stop.id + "-" + idx;
      link.href = isSafeHttpUrl(res.url) ? res.url : "#";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var typeBadge = document.createElement("span");
      typeBadge.className = "badge " + (res.badgeClass || "badge-info");
      typeBadge.textContent = res.type;
      var extIcon = document.createElement("span");
      extIcon.className = "material-symbols-outlined btn-icon-sm text-muted";
      extIcon.textContent = "open_in_new";
      topRow.appendChild(typeBadge);
      topRow.appendChild(extIcon);

      var rTitle = document.createElement("h3");
      rTitle.className = "resource-title";
      rTitle.textContent = res.title;
      var rDesc = document.createElement("p");
      rDesc.className = "resource-desc";
      rDesc.textContent = res.description;

      link.appendChild(topRow);
      link.appendChild(rTitle);
      link.appendChild(rDesc);
      resGridEl.appendChild(link);
    });
  }

  var diagramContainer = document.getElementById("detail-interactive-diagram");
  if (window.PipelineDiagrams && diagramContainer) {
    window.PipelineDiagrams.renderForStop(stop, diagramContainer);
  }
  if (window.PipelineAgent) {
    window.PipelineAgent.setContext(stop.id, stop.title);
  }

  var vocabSection = document.getElementById("terminal-vocab-section");
  if (vocabSection) {
    if (stop.hasTerminalVocab && window.TERMINAL_VOCAB_DATA) {
      vocabSection.style.display = "flex";
      renderTerminalVocabSection(currentVocabQuery, currentVocabCategory);
    } else {
      vocabSection.style.display = "none";
    }
  }

  if (prevBtn) {
    if (stopIndex > 0) {
      var prevStop = stops[stopIndex - 1];
      prevBtn.style.display = "inline-flex";
      prevBtn.onclick = function () { navigateTo("#stop/" + prevStop.id); };
      var prevLabel = document.getElementById("prev-stop-label");
      if (prevLabel) prevLabel.textContent = prevStop.title;
    } else {
      prevBtn.style.display = "none";
    }
  }

  if (nextBtn) {
    if (stopIndex < stops.length - 1) {
      var nextStop = stops[stopIndex + 1];
      nextBtn.style.display = "inline-flex";
      nextBtn.onclick = function () { navigateTo("#stop/" + nextStop.id); };
      var nextLabel = document.getElementById("next-stop-label");
      if (nextLabel) nextLabel.textContent = nextStop.title;
    } else {
      nextBtn.style.display = "none";
    }
  }
  return true;
}

function renderArchiveView(filterQuery) {
  if (!window.PIPELINE_DATA || !window.PIPELINE_DATA.archive) return;
  var archive = window.PIPELINE_DATA.archive;
  var q = (filterQuery || "").trim().toLowerCase();

  var essayTitleEl = document.getElementById("archive-essay-title");
  var essaySubEl = document.getElementById("archive-essay-subtitle");
  var essayListEl = document.getElementById("archive-essay-sections");
  var libListEl = document.getElementById("archive-library-list");

  if (essayTitleEl) essayTitleEl.textContent = archive.essayTitle;
  if (essaySubEl) essaySubEl.textContent = archive.essaySubtitle;

  if (essayListEl) {
    essayListEl.replaceChildren();
    (archive.sections || []).forEach(function (sec) {
      if (q && sec.heading.toLowerCase().indexOf(q) === -1 && sec.body.toLowerCase().indexOf(q) === -1) return;
      var card = document.createElement("div");
      card.className = "nested-card";
      var h3 = document.createElement("h3");
      h3.textContent = sec.heading;
      var p = document.createElement("p");
      p.className = "resource-desc";
      p.textContent = sec.body;
      card.appendChild(h3);
      card.appendChild(p);
      essayListEl.appendChild(card);
    });
  }

  if (libListEl) {
    libListEl.replaceChildren();
    (archive.library || []).forEach(function (item) {
      if (q && item.title.toLowerCase().indexOf(q) === -1 && item.category.toLowerCase().indexOf(q) === -1 && item.takeaway.toLowerCase().indexOf(q) === -1) return;
      var card = document.createElement("div");
      card.className = "nested-card";
      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var badge = document.createElement("span");
      badge.className = "badge " + (item.badgeClass || "badge-info");
      badge.textContent = item.category;
      topRow.appendChild(badge);
      var title = document.createElement("h3");
      title.className = "resource-title";
      title.textContent = item.title;
      var desc = document.createElement("p");
      desc.className = "resource-desc";
      desc.textContent = item.takeaway;
      card.appendChild(topRow);
      card.appendChild(title);
      card.appendChild(desc);
      libListEl.appendChild(card);
    });
  }

  if (window.ArchiveGlossary && typeof window.ArchiveGlossary.filterByQuery === "function") {
    window.ArchiveGlossary.filterByQuery(filterQuery || "");
  }
}

function switchActiveView(viewId) {
  ["view-pipeline", "view-stop-detail", "view-archive"].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (id === viewId) el.classList.add("active-view");
    else el.classList.remove("active-view");
  });
  var archiveBtn = document.getElementById("btn-nav-archive");
  if (archiveBtn) {
    if (viewId === "view-archive") archiveBtn.classList.add("active");
    else archiveBtn.classList.remove("active");
  }
}

function handleRouteChange() {
  var hash = window.location.hash || "#pipeline";
  dbg("ROUTE -> " + hash);
  var applyRoute = function () {
    if (hash.indexOf("#stop/") === 0) {
      var stopId = decodeURIComponent(hash.slice("#stop/".length));
      if (renderStopDetail(stopId)) {
        switchActiveView("view-stop-detail");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
    }
    if (hash === "#archive") {
      switchActiveView("view-archive");
      if (window.PipelineAgent) {
        window.PipelineAgent.setContext("archive", "Archive & A–Z dictionary");
        if (window.PipelineAgent.setTab) window.PipelineAgent.setTab("guide");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    switchActiveView("view-pipeline");
    if (window.PipelineAgent) {
      window.PipelineAgent.setContext(null, "Full pipeline");
      if (window.PipelineAgent.setTab) window.PipelineAgent.setTab("guide");
    }
    setTimeout(updatePathwayGeometry, 40);
  };
  if (typeof document.startViewTransition === "function") document.startViewTransition(applyRoute);
  else applyRoute();
}

function navigateTo(hash) {
  if (window.location.hash === hash) handleRouteChange();
  else window.location.hash = hash;
}

function init() {
  LOG = [];
  dbg("========== BOOT " + _logStamp() + " (build " + APP_BUILD + ") ==========");
  initTheme();

  var brandBtn = document.getElementById("btn-brand-home");
  if (brandBtn) brandBtn.addEventListener("click", function () { navigateTo("#pipeline"); });

  var archiveBtn = document.getElementById("btn-nav-archive");
  if (archiveBtn) {
    archiveBtn.addEventListener("click", function () {
      navigateTo(window.location.hash === "#archive" ? "#pipeline" : "#archive");
    });
  }

  var substackLink = document.getElementById("btn-nav-substack");
  if (substackLink && window.PIPELINE_DATA && isSafeHttpUrl(window.PIPELINE_DATA.substackUrl)) {
    substackLink.href = window.PIPELINE_DATA.substackUrl;
  }

  var themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      themeMode = effectiveDark() ? "light" : "dark";
      try { localStorage.setItem("app-theme-mode", themeMode); } catch (e) {}
      applyTheme();
      dbg("THEME toggled -> " + themeMode);
    });
  }

  document.querySelectorAll(".pipeline-back-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () { navigateTo("#pipeline"); });
  });

  var searchInput = document.getElementById("input-archive-search");
  var clearBtn = document.getElementById("btn-clear-archive-search");
  if (searchInput && clearBtn) {
    InlineClear.bind(searchInput, clearBtn, function () { renderArchiveView(""); });
    searchInput.addEventListener("input", function () { renderArchiveView(searchInput.value); });
  }

  var vocabSearchInput = document.getElementById("input-terminal-vocab-search");
  var vocabClearBtn = document.getElementById("btn-clear-terminal-vocab");
  if (vocabSearchInput && vocabClearBtn) {
    InlineClear.bind(vocabSearchInput, vocabClearBtn, function () {
      renderTerminalVocabSection("", currentVocabCategory);
    });
    vocabSearchInput.addEventListener("input", function () {
      renderTerminalVocabSection(vocabSearchInput.value, currentVocabCategory);
    });
  }

  renderPipelineStops();
  if (typeof window.initArchiveGlossary === "function") window.initArchiveGlossary();
  renderArchiveView("");
  if (window.PipelineAgent) window.PipelineAgent.init();

  window.addEventListener("hashchange", handleRouteChange);
  window.addEventListener("resize", updatePathwayGeometry);
  window.addEventListener("scroll", function () { updatePathwayScrollProgress(); }, { passive: true });
  handleRouteChange();
}

function safeInit() {
  try { init(); } catch (e) {
    try {
      var el = document.getElementById("app-error") || document.createElement("div");
      el.id = "app-error";
      el.className = "app-error-overlay";
      el.textContent += "[INIT THREW] " + (e && e.stack ? e.stack : e) + "\n";
      document.body.appendChild(el);
    } catch (e2) {}
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", safeInit);
else safeInit();

window.__APP_LOADED__ = true;

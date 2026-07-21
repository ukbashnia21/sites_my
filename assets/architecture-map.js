(() => {
  "use strict";

  const model = JSON.parse(document.getElementById("architecture-data").textContent);
  const map = document.getElementById("system-map");
  const inspector = document.getElementById("inspector");
  const routeSelector = document.getElementById("route-selector");
  const routeStory = document.getElementById("route-story");
  const optionGrid = document.getElementById("option-grid");
  const timeline = document.getElementById("timeline");
  const lessonGrid = document.getElementById("lesson-grid");
  let activeRoute = model.routes[0].id;
  let selectedNode = null;

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function statusLabel(status) {
    return {
      live: "работает",
      planned: "план",
      recommended: "рекомендуется",
      partial: "частично"
    }[status] || status;
  }

  function renderRoutes() {
    routeSelector.innerHTML = model.routes.map((route) => `
      <button class="route-button${route.id === activeRoute ? " is-active" : ""}" type="button" data-route="${escapeHtml(route.id)}">
        ${escapeHtml(route.label)}
      </button>
    `).join("");
  }

  function renderMap() {
    const route = model.routes.find((item) => item.id === activeRoute);
    map.innerHTML = model.groups.map((group) => {
      const nodes = model.nodes.filter((node) => node.group === group.id);
      return `
        <section class="stage" data-group="${escapeHtml(group.id)}">
          <span class="stage__number">${escapeHtml(group.number)}</span>
          <h3>${escapeHtml(group.label)}</h3>
          <p class="stage__summary">${escapeHtml(group.summary)}</p>
          <div class="node-list">
            ${nodes.map((node) => {
              const stepIndex = route.path.indexOf(node.id);
              const isRoute = stepIndex !== -1;
              const classes = ["node", isRoute ? "is-route" : "is-muted", selectedNode === node.id ? "is-selected" : ""].filter(Boolean).join(" ");
              return `
                <button class="${classes}" type="button" data-node="${escapeHtml(node.id)}" title="${escapeHtml(node.details)}">
                  <span class="node__step">${isRoute ? stepIndex + 1 : ""}</span>
                  <span class="node__signal" aria-hidden="true"></span>
                  <strong>${escapeHtml(node.label)}</strong>
                  <small>${escapeHtml(node.short)}</small>
                </button>
              `;
            }).join("")}
          </div>
        </section>
      `;
    }).join("");
    routeStory.innerHTML = `<strong>${escapeHtml(route.label)}:</strong><span>${escapeHtml(route.description)}</span>`;
  }

  function renderInspector(nodeId) {
    const node = model.nodes.find((item) => item.id === nodeId);
    if (!node) return;
    const href = node.href || node.external_href;
    inspector.innerHTML = `
      <p class="inspector__number">${escapeHtml(statusLabel(node.status))} · ${escapeHtml(node.kind)}</p>
      <h2>${escapeHtml(node.label)}</h2>
      <p>${escapeHtml(node.details)}</p>
      <dl>
        <div><dt>Записывает</dt><dd>${node.writes.map(escapeHtml).join(" · ")}</dd></div>
        <div><dt>Читает</dt><dd>${node.reads.map(escapeHtml).join(" · ")}</dd></div>
      </dl>
      ${href ? `<a href="${escapeHtml(href)}"${node.external_href ? ' target="_blank" rel="noopener"' : ""}>Открыть связанную документацию</a>` : ""}
    `;
  }

  function renderOptions() {
    optionGrid.innerHTML = model.options.map((option) => `
      <article class="option${option.id === model.recommended_option ? " is-recommended" : ""}">
        <div class="option__top"><span class="option__number">${escapeHtml(option.number)}</span><span class="option__verdict">${escapeHtml(option.verdict)}</span></div>
        <h3>${escapeHtml(option.label)}</h3>
        <p>${escapeHtml(option.summary)}</p>
        <h4>Сильные стороны</h4>
        <ul>${option.advantages.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <h4>Риски</h4>
        <ul>${option.risks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    `).join("");
  }

  function renderTimeline() {
    timeline.innerHTML = model.rollout.map((step) => `
      <li class="${step.status === "next" ? "is-next" : ""}">
        <span class="timeline__number">${escapeHtml(step.number)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.detail)}</p>
        <span class="timeline__status">${step.status === "next" ? "Следующий" : "Запланировано"}</span>
      </li>
    `).join("");
  }

  function renderLessons() {
    lessonGrid.innerHTML = model.lessons.map((lesson) => `
      <a class="lesson" href="${escapeHtml(lesson.href)}">
        <span class="lesson__number">${escapeHtml(lesson.number)}</span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.theme)}</p>
        <span class="lesson__link">Открыть Markdown →</span>
      </a>
    `).join("");
  }

  function activateTab(tabName) {
    document.querySelectorAll(".tab").forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const isActive = panel.dataset.panel === tabName;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
    window.history.replaceState(null, "", `#${tabName}`);
  }

  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tab]");
    if (tab) activateTab(tab.dataset.tab);

    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      activeRoute = routeButton.dataset.route;
      selectedNode = null;
      renderRoutes();
      renderMap();
    }

    const nodeButton = event.target.closest("[data-node]");
    if (nodeButton) {
      selectedNode = nodeButton.dataset.node;
      renderMap();
      renderInspector(selectedNode);
    }
  });

  renderRoutes();
  renderMap();
  renderOptions();
  renderTimeline();
  renderLessons();

  const requestedTab = window.location.hash.slice(1);
  if (["map", "options", "rollout", "lessons", "rules"].includes(requestedTab)) {
    activateTab(requestedTab);
  }
})();

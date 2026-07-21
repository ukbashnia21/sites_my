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
  const systemSelector = document.getElementById("system-selector");
  const courseSystemDetail = document.getElementById("course-system-detail");
  const auditProject = document.getElementById("audit-project");
  const auditFilters = document.getElementById("audit-filters");
  const auditList = document.getElementById("audit-list");
  const auditScore = document.getElementById("audit-score");
  const auditScoreLabel = document.getElementById("audit-score-label");
  const auditProgress = document.getElementById("audit-progress");
  const questionList = document.getElementById("question-list");
  const questionDetail = document.getElementById("question-detail");
  const toolkitGrid = document.getElementById("toolkit-grid");
  const promptGrid = document.getElementById("prompt-grid");
  let activeRoute = model.routes[0].id;
  let selectedNode = null;
  let activeQuestion = model.questions[0].id;
  let activeSystem = model.course_systems[0].id;
  let activeAuditCategory = model.audit_categories[0].id;
  let activeAuditProject = model.audit_projects[0].id;

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
    const guidance = model.node_guidance[node.id] || {};
    const href = node.href || node.external_href;
    const linkedQuestions = (guidance.question_ids || [])
      .map((id) => model.questions.find((question) => question.id === id))
      .filter(Boolean);
    inspector.innerHTML = `
      <p class="inspector__number">${escapeHtml(statusLabel(node.status))} · ${escapeHtml(node.kind)}</p>
      <h2>${escapeHtml(node.label)}</h2>
      <p>${escapeHtml(node.details)}</p>
      <div class="inspector__contract">
        <section><span>Решение</span><p>${escapeHtml(guidance.decision || "Требует уточнения")}</p></section>
        <section><span>Главный риск</span><p>${escapeHtml(guidance.risk || "Требует аудита")}</p></section>
        <section><span>Как проверяем</span><p>${escapeHtml(guidance.evidence || "Evidence ещё не определено")}</p></section>
      </div>
      <dl>
        <div><dt>Записывает</dt><dd>${node.writes.map(escapeHtml).join(" · ")}</dd></div>
        <div><dt>Читает</dt><dd>${node.reads.map(escapeHtml).join(" · ")}</dd></div>
      </dl>
      ${linkedQuestions.length ? `<div class="inspector__questions"><span>Связанные вопросы</span>${linkedQuestions.map((question) => `<button type="button" data-open-question="${escapeHtml(question.id)}">${escapeHtml(question.number)}</button>`).join("")}</div>` : ""}
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
      <article class="lesson">
        <span class="lesson__number">${escapeHtml(lesson.number)}</span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.theme)}</p>
        <div class="lesson__actions">
          <a href="${escapeHtml(lesson.html_href)}">Открыть HTML</a>
          <a href="${escapeHtml(lesson.href)}">Открыть Markdown</a>
        </div>
      </article>
    `).join("");
  }

  function renderCourseSystems() {
    systemSelector.innerHTML = model.course_systems.map((system) => `
      <button class="course-system${system.id === activeSystem ? " is-active" : ""}" type="button" data-course-system="${escapeHtml(system.id)}">
        <span>${escapeHtml(system.number)}</span>
        <strong>${escapeHtml(system.title)}</strong>
        <small>${escapeHtml(system.subtitle)}</small>
      </button>
    `).join("");
    renderCourseSystemDetail(activeSystem);
  }

  function renderCourseSystemDetail(systemId) {
    const system = model.course_systems.find((item) => item.id === systemId);
    if (!system) return;
    const chapterLinks = system.chapters.map((chapter) => {
      const lesson = chapter.lesson ? model.lessons.find((item) => item.number === chapter.lesson) : null;
      const href = chapter.external_href || `${lesson.html_href}${chapter.anchor ? `#${chapter.anchor}` : ""}`;
      return `<a href="${escapeHtml(href)}"${chapter.external_href ? ' target="_blank" rel="noopener"' : ""}><span>${escapeHtml(chapter.lesson ? `Урок ${chapter.lesson}` : "Источник")}</span>${escapeHtml(chapter.label)}</a>`;
    }).join("");
    courseSystemDetail.innerHTML = `
      <div class="course-system-detail__intro">
        <span>${escapeHtml(system.number)}</span>
        <div><p>${escapeHtml(system.subtitle)}</p><h3>${escapeHtml(system.title)}</h3></div>
      </div>
      <div class="course-system-detail__columns">
        <section><span>Зачем</span><p>${escapeHtml(system.purpose)}</p></section>
        <section><span>Что даёт курс</span><p>${escapeHtml(system.course)}</p></section>
        <section><span>Наша адаптация</span><p>${escapeHtml(system.adaptation)}</p></section>
        <section><span>Готовый результат</span><p>${escapeHtml(system.result)}</p></section>
      </div>
      <div class="course-system-detail__footer">
        <div class="chapter-links"><span>Главы и источники</span>${chapterLinks}</div>
        <div class="audit-links"><span>Связанные проверки</span><div>${system.checklist_ids.map((id) => `<button type="button" data-audit-jump="${escapeHtml(id)}">${escapeHtml(id)}</button>`).join("")}</div></div>
      </div>
    `;
  }

  function auditStorageKey() {
    return `ai-office-audit:v1:${activeAuditProject}`;
  }

  function readAuditState() {
    try {
      return JSON.parse(localStorage.getItem(auditStorageKey()) || "{}");
    } catch (_error) {
      return {};
    }
  }

  function writeAuditState(state) {
    localStorage.setItem(auditStorageKey(), JSON.stringify(state));
  }

  function renderAuditProjects() {
    auditProject.innerHTML = model.audit_projects.map((project) => `<option value="${escapeHtml(project.id)}"${project.id === activeAuditProject ? " selected" : ""}>${escapeHtml(project.label)}</option>`).join("");
  }

  function renderAuditFilters() {
    const filters = [{ id: "all", number: "00", label: "Все 35" }, ...model.audit_categories];
    auditFilters.innerHTML = filters.map((category) => `
      <button type="button" class="audit-filter${category.id === activeAuditCategory ? " is-active" : ""}" data-audit-filter="${escapeHtml(category.id)}">
        <span>${escapeHtml(category.number)}</span>${escapeHtml(category.label)}
      </button>
    `).join("");
  }

  function renderAudit() {
    const state = readAuditState();
    const visible = activeAuditCategory === "all"
      ? model.audit_items
      : model.audit_items.filter((item) => item.category === activeAuditCategory);
    auditList.innerHTML = visible.map((item) => {
      const category = model.audit_categories.find((candidate) => candidate.id === item.category);
      const value = state[item.id] || { status: "unchecked", note: "" };
      return `
        <article class="audit-item audit-item--${escapeHtml(value.status)}" id="audit-${escapeHtml(item.id)}">
          <div class="audit-item__heading">
            <span>${escapeHtml(item.id)}</span>
            <div><small>${escapeHtml(category.label)} · ${escapeHtml(item.cadence)}</small><h3>${escapeHtml(item.title)}</h3></div>
            <select data-audit-status="${escapeHtml(item.id)}" aria-label="Статус ${escapeHtml(item.title)}">
              <option value="unchecked"${value.status === "unchecked" ? " selected" : ""}>Не проверено</option>
              <option value="pass"${value.status === "pass" ? " selected" : ""}>Пройдено</option>
              <option value="partial"${value.status === "partial" ? " selected" : ""}>Частично</option>
              <option value="fail"${value.status === "fail" ? " selected" : ""}>Проблема</option>
              <option value="na"${value.status === "na" ? " selected" : ""}>Не применимо</option>
            </select>
          </div>
          <p>${escapeHtml(item.question)}</p>
          <div class="audit-item__evidence"><span>Evidence</span><p>${escapeHtml(item.evidence)}</p></div>
          <label>Комментарий или ссылка на доказательство
            <input type="text" data-audit-note="${escapeHtml(item.id)}" value="${escapeHtml(value.note || "")}" placeholder="Хранится только в этом браузере">
          </label>
        </article>
      `;
    }).join("");
    renderAuditProgress(state);
  }

  function renderAuditProgress(state) {
    const values = model.audit_items.map((item) => (state[item.id] || {}).status || "unchecked");
    const reviewed = values.filter((value) => value !== "unchecked").length;
    const passed = values.filter((value) => value === "pass" || value === "na").length;
    auditScore.textContent = `${passed}/${model.audit_items.length}`;
    auditScoreLabel.textContent = `${reviewed}/${model.audit_items.length} проверено`;
    auditProgress.max = model.audit_items.length;
    auditProgress.value = reviewed;
  }

  function auditMarkdown() {
    const project = model.audit_projects.find((item) => item.id === activeAuditProject);
    const state = readAuditState();
    const labels = { unchecked: "не проверено", pass: "пройдено", partial: "частично", fail: "проблема", na: "не применимо" };
    const lines = [`# Аудит: ${project.label}`, "", `Дата: ${new Date().toLocaleDateString("ru-RU")}`, ""];
    model.audit_categories.forEach((category) => {
      lines.push(`## ${category.number}. ${category.label}`, "");
      model.audit_items.filter((item) => item.category === category.id).forEach((item) => {
        const value = state[item.id] || { status: "unchecked", note: "" };
        const mark = value.status === "pass" || value.status === "na" ? "x" : " ";
        lines.push(`- [${mark}] **${item.id} ${item.title}** — ${labels[value.status]}`);
        lines.push(`  - Проверка: ${item.question}`);
        lines.push(`  - Evidence: ${item.evidence}`);
        if (value.note) lines.push(`  - Комментарий: ${value.note}`);
      });
      lines.push("");
    });
    return lines.join("\n");
  }

  function copyText(text, button) {
    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = "Скопировано";
      setTimeout(() => { button.textContent = original; }, 1400);
    }).catch(() => {
      button.textContent = "Не удалось скопировать";
    });
  }

  function renderQuestions() {
    questionList.innerHTML = model.questions.map((question) => `
      <button class="question${question.id === activeQuestion ? " is-active" : ""}" type="button" data-question="${escapeHtml(question.id)}">
        <span>${escapeHtml(question.number)}</span>
        <strong>${escapeHtml(question.question)}</strong>
      </button>
    `).join("");
    renderQuestionDetail(activeQuestion);
  }

  function renderQuestionDetail(questionId) {
    const question = model.questions.find((item) => item.id === questionId);
    if (!question) return;
    const related = question.related_nodes
      .map((id) => model.nodes.find((node) => node.id === id))
      .filter(Boolean);
    questionDetail.innerHTML = `
      <p class="inspector__number">Вопрос ${escapeHtml(question.number)}</p>
      <h2>${escapeHtml(question.question)}</h2>
      <p class="question-detail__answer">${escapeHtml(question.answer)}</p>
      <div class="fact-box"><span>Факт для решения</span><p>${escapeHtml(question.fact)}</p></div>
      <div class="question-detail__links">
        <span>Связанные блоки</span>
        <div>${related.map((node) => `<button type="button" data-open-node="${escapeHtml(node.id)}">${escapeHtml(node.label)}</button>`).join("")}</div>
      </div>
      <div class="question-detail__sources">
        <span>Источники</span>
        ${question.sources.map((source) => `<a href="${escapeHtml(source.href)}"${source.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${escapeHtml(source.label)} →</a>`).join("")}
      </div>
    `;
  }

  function renderToolkit() {
    toolkitGrid.innerHTML = model.toolkit.map((tool) => `
      <article class="tool-card tool-card--${escapeHtml(tool.status)}">
        <div class="tool-card__top"><span>${escapeHtml(tool.type)}</span><span>${escapeHtml(tool.status)}</span></div>
        <h3>${escapeHtml(tool.name)}</h3>
        <strong>${escapeHtml(tool.verdict)}</strong>
        <p>${escapeHtml(tool.value)}</p>
        <dl>
          <div><dt>Когда нужен</dt><dd>${escapeHtml(tool.use_when)}</dd></div>
          <div><dt>Ограничение</dt><dd>${escapeHtml(tool.risk)}</dd></div>
        </dl>
        <a href="${escapeHtml(tool.href)}"${tool.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>Открыть первоисточник →</a>
      </article>
    `).join("");
  }

  function renderPrompts() {
    promptGrid.innerHTML = model.design_prompts.map((prompt, index) => `
      <article class="prompt-card">
        <div><span>0${index + 1}</span><h3>${escapeHtml(prompt.title)}</h3></div>
        <p>${escapeHtml(prompt.text)}</p>
        <button type="button" data-copy-prompt="${index}">Копировать промпт</button>
      </article>
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

    const questionButton = event.target.closest("[data-question]");
    if (questionButton) {
      activeQuestion = questionButton.dataset.question;
      renderQuestions();
    }

    const courseSystem = event.target.closest("[data-course-system]");
    if (courseSystem) {
      activeSystem = courseSystem.dataset.courseSystem;
      renderCourseSystems();
    }

    const auditFilter = event.target.closest("[data-audit-filter]");
    if (auditFilter) {
      activeAuditCategory = auditFilter.dataset.auditFilter;
      renderAuditFilters();
      renderAudit();
    }

    const auditJump = event.target.closest("[data-audit-jump]");
    if (auditJump) {
      activeAuditCategory = "all";
      activateTab("audit");
      renderAuditFilters();
      renderAudit();
      requestAnimationFrame(() => document.getElementById(`audit-${auditJump.dataset.auditJump}`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
    }

    const openQuestion = event.target.closest("[data-open-question]");
    if (openQuestion) {
      activeQuestion = openQuestion.dataset.openQuestion;
      activateTab("questions");
      renderQuestions();
    }

    const openNode = event.target.closest("[data-open-node]");
    if (openNode) {
      selectedNode = openNode.dataset.openNode;
      activateTab("map");
      renderMap();
      renderInspector(selectedNode);
    }

    const copyPrompt = event.target.closest("[data-copy-prompt]");
    if (copyPrompt) {
      const prompt = model.design_prompts[Number(copyPrompt.dataset.copyPrompt)];
      copyText(prompt.text, copyPrompt);
    }

    if (event.target.closest("#audit-export")) copyText(auditMarkdown(), event.target.closest("#audit-export"));
    if (event.target.closest("#audit-reset") && window.confirm("Сбросить все 35 статусов и комментарии выбранного проекта?")) {
      localStorage.removeItem(auditStorageKey());
      renderAudit();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target === auditProject) {
      activeAuditProject = auditProject.value;
      renderAudit();
      return;
    }
    if (event.target.matches("[data-audit-status]")) {
      const state = readAuditState();
      const id = event.target.dataset.auditStatus;
      state[id] = { ...(state[id] || {}), status: event.target.value };
      writeAuditState(state);
      renderAudit();
    }
  });

  document.addEventListener("input", (event) => {
    if (!event.target.matches("[data-audit-note]")) return;
    const state = readAuditState();
    const id = event.target.dataset.auditNote;
    state[id] = { ...(state[id] || { status: "unchecked" }), note: event.target.value };
    writeAuditState(state);
    renderAuditProgress(state);
  });

  renderRoutes();
  renderMap();
  renderOptions();
  renderTimeline();
  renderLessons();
  renderCourseSystems();
  renderAuditProjects();
  renderAuditFilters();
  renderAudit();
  renderQuestions();
  renderToolkit();
  renderPrompts();

  const requestedTab = window.location.hash.slice(1);
  if (["map", "options", "rollout", "systems", "audit", "questions", "toolkit", "rules"].includes(requestedTab)) {
    activateTab(requestedTab);
  }
})();

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
  const potokAuditDataElement = document.getElementById("potok-audit-data");
  const emptyPotokAuditData = {
    snapshot_built_at: null,
    latest_source_event_at: null,
    published_at: null,
    window_days: 7,
    pipeline: null,
    audits: [],
    incidents: []
  };
  const potokAuditData = (() => {
    if (!potokAuditDataElement) return emptyPotokAuditData;
    try {
      const parsed = JSON.parse(potokAuditDataElement.textContent);
      return parsed && Array.isArray(parsed.audits) && Array.isArray(parsed.incidents)
        ? parsed
        : emptyPotokAuditData;
    } catch (_) {
      return emptyPotokAuditData;
    }
  })();
  let potokPipelineHealth = potokAuditData.pipeline;
  const potokAuditMetrics = document.getElementById("potok-audit-metrics");
  const potokModelRanking = document.getElementById("potok-model-ranking");
  const potokAuditModels = document.getElementById("potok-audit-models");
  const potokAuditList = document.getElementById("potok-audit-list");
  const potokErrorList = document.getElementById("potok-error-list");
  const potokAuditFreshness = document.getElementById("potok-audit-freshness");
  const potokLatestSource = document.getElementById("potok-latest-source");
  const potokLastCheck = document.getElementById("potok-last-check");
  const potokPublishedAt = document.getElementById("potok-published-at");
  const potokAuditReviewer = document.getElementById("potok-audit-reviewer");
  let activeRoute = model.routes[0].id;
  let selectedNode = null;
  let activeQuestion = model.questions[0].id;
  let activeSystem = model.course_systems[0].id;
  let activeAuditCategory = model.audit_categories[0].id;
  let activeAuditProject = model.audit_projects[0].id;
  let activePotokPeriod = "7d";
  let activePotokReviewer = "all";

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
    if (!lessonGrid) return;
    lessonGrid.innerHTML = model.lessons.map((lesson) => {
      const actions = [];
      if (lesson.html_href) actions.push(`<a href="${escapeHtml(lesson.html_href)}">Открыть HTML</a>`);
      if (lesson.href && lesson.href !== lesson.html_href) actions.push(`<a href="${escapeHtml(lesson.href)}">Открыть Markdown</a>`);
      return `
      <article class="lesson">
        <span class="lesson__number">${escapeHtml(lesson.number)}</span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.theme)}</p>
        ${actions.length ? `<div class="lesson__actions">${actions.join("")}</div>` : ""}
      </article>
    `;
    }).join("");
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
      const base = chapter.external_href || (lesson && lesson.html_href ? `${lesson.html_href}${chapter.anchor ? `#${chapter.anchor}` : ""}` : null);
      const inner = `<span>${escapeHtml(chapter.lesson ? `Урок ${chapter.lesson}` : "Источник")}</span>${escapeHtml(chapter.label)}`;
      if (!base) return `<span class="chapter-links__plain">${inner}</span>`;
      return `<a href="${escapeHtml(base)}"${chapter.external_href ? ' target="_blank" rel="noopener"' : ""}>${inner}</a>`;
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

  function verifiabilityLabel(value) {
    return { machine: "машинная", hybrid: "гибридная", human: "решение владельца" }[value] || value;
  }

  function renderAuditFilters() {
    const filters = [{ id: "all", number: "00", label: `Все ${model.audit_items.length}` }, ...model.audit_categories];
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
            <div><small>${escapeHtml(category.label)} · ${escapeHtml(item.cadence)} · ${escapeHtml(item.layer === "advanced" ? "advanced" : "база")} · ${escapeHtml(verifiabilityLabel(item.verifiability))}</small><h3>${escapeHtml(item.title)}</h3></div>
            <select data-audit-status="${escapeHtml(item.id)}" aria-label="Статус ${escapeHtml(item.title)}">
              <option value="unchecked"${value.status === "unchecked" ? " selected" : ""}>Не проверено</option>
              <option value="pass"${value.status === "pass" ? " selected" : ""}>Пройдено</option>
              <option value="partial"${value.status === "partial" ? " selected" : ""}>Частично</option>
              <option value="fail"${value.status === "fail" ? " selected" : ""}>Проблема</option>
              <option value="na"${value.status === "na" ? " selected" : ""}>Не применимо</option>
            </select>
          </div>
          <p>${escapeHtml(item.question)}</p>
          <div class="audit-item__evidence"><span>Evidence</span><p>${escapeHtml(item.expected_evidence)}</p></div>
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
        lines.push(`  - Evidence: ${item.expected_evidence}`);
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

  const potokVerdictLabel = (verdict) => ({
    PASS: "PASS",
    PASS_WITH_NOTES: "PASS с замечаниями",
    NEEDS_FIX: "Нужны исправления",
    INCONCLUSIVE: "Нет результата"
  }[verdict] || verdict || "Нет результата");

  const potokContourLabel = (contour) => ({
    potok: "Поток",
    knowledge: "База знаний",
    agents: "Агенты",
    automation: "Автоматизация",
    other: "Прочее"
  }[contour] || "Прочее");

  const potokErrorLabel = (error) => ({
    "auth-wait": "ожидание авторизации",
    authentication: "авторизация",
    "input-size": "слишком большой вход",
    "source-changed": "источник изменился",
    timeout: "лимит времени",
    permission: "права доступа",
    sandbox: "песочница",
    network: "сеть",
    "os-error": "системная ошибка ОС",
    "process-exit": "аварийное завершение",
    "acp-response": "сбой ответа Kimi ACP",
    "acp-eof": "обрыв Kimi ACP",
    auditerror: "ошибка адаптера",
    codexreturncode: "сбой Codex reviewer",
    other: "другая техническая ошибка"
  }[error] || (error ? "другая техническая ошибка" : "нет"));

  const potokPipelineStatusLabel = (status) => ({
    FRESH: "FRESH",
    NO_NEW_AUDITS: "NO NEW AUDITS",
    LAGGING: "LAGGING",
    STALE: "STALE",
    FAILED: "FAILED",
    UNKNOWN: "UNKNOWN"
  }[status] || "UNKNOWN");

  const potokPipelineReason = (status, error) => {
    if (status === "FRESH") return "Новые допустимые evidence опубликованы";
    if (status === "NO_NEW_AUDITS") return "Pipeline исправен, новых аудитов нет";
    if (status === "LAGGING") return "Источник новее опубликованного снимка";
    if (status === "STALE") return "Успешная проверка просрочена";
    if (status === "FAILED") return ({
      "malformed-evidence": "Некорректный или частичный evidence",
      "source-unavailable": "Источник evidence недоступен",
      "public-git-failed": "Не удалось обновить публичную публикацию",
      "public-diverged": "Публичная ветка изменилась параллельно",
      "build-failed": "Сборка или проверка завершилась ошибкой",
      "state-invalid": "Локальное состояние pipeline невалидно"
    }[error] || "Последняя попытка завершилась технической ошибкой");
    return "Состояние pipeline нельзя доказать";
  };

  const potokReviewerLabel = (reviewer) => ({
    claude: "Claude",
    kimi: "Kimi",
    codex: "Codex"
  }[reviewer] || "Система");

  const potokFocusLabel = (focus) => ({
    parallelism: "Параллельная работа reviewers",
    isolation: "Изоляция и границы записи",
    authorization: "Авторизация моделей",
    backup: "Бэкап и восстановление",
    deployment: "Deploy и выпуск",
    search: "Поиск и зеркала",
    knowledge: "Second Brain",
    telegram: "Telegram-контур",
    general: "Общая техническая приёмка"
  }[focus] || "Общая техническая приёмка");

  function potokSafeValue(value, verdict) {
    const numeric = Number(value);
    if ([1, 5, 7, 9].includes(numeric)) return numeric;
    return { NEEDS_FIX: 9, PASS_WITH_NOTES: 7, PASS: 5, INCONCLUSIVE: 1 }[verdict] || 1;
  }

  function potokNormalizeRow(row) {
    const source = row && typeof row === "object" ? row : {};
    const candidate = String(source.verdict || "INCONCLUSIVE").toUpperCase();
    const verdict = ["PASS", "PASS_WITH_NOTES", "NEEDS_FIX", "INCONCLUSIVE"].includes(candidate)
      ? candidate
      : "INCONCLUSIVE";
    const duration = Number(source.duration_seconds);
    return {
      ...source,
      reviewer: ["claude", "kimi", "codex"].includes(source.reviewer) ? source.reviewer : "system",
      verdict,
      duration_seconds: Number.isFinite(duration) && duration >= 0 ? duration : null,
      value_score: potokSafeValue(null, verdict),
      value_reason: typeof source.value_reason === "string" && source.value_reason
        ? source.value_reason
        : "Результат не классифицирован"
    };
  }

  const potokReviewerRows = (audit) => (Array.isArray(audit?.reviewers) ? audit.reviewers : []).map(potokNormalizeRow);

  const potokRowVerdictLabel = (row) => row?.error_class
    ? "Технический сбой"
    : potokVerdictLabel(row?.verdict || "INCONCLUSIVE");

  function potokDayKey(value) {
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Moscow", year: "numeric", month: "2-digit", day: "2-digit"
    }).format(date);
  }

  function potokInPeriod(value, period) {
    const date = new Date(value);
    const anchor = new Date(potokAuditData.latest_source_event_at || potokAuditData.snapshot_built_at);
    if (!Number.isFinite(date.getTime()) || !Number.isFinite(anchor.getTime())) return false;
    if (period === "today") return potokDayKey(date) === potokDayKey(anchor);
    if (period === "yesterday") return potokDayKey(date) === potokDayKey(new Date(anchor.getTime() - 86400000));
    const days = Math.max(1, Number(potokAuditData.window_days) || 7);
    return date >= new Date(anchor.getTime() - days * 86400000) && date <= anchor;
  }

  function potokDuration(seconds) {
    if (!Number.isFinite(seconds)) return "—";
    const value = Math.max(0, Math.round(seconds));
    if (value < 60) return `${value} сек`;
    const minutes = Math.floor(value / 60);
    const rest = value % 60;
    return rest ? `${minutes} мин ${rest} сек` : `${minutes} мин`;
  }

  function potokDate(value) {
    if (typeof value !== "string" || !value.trim()) return "—";
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return "—";
    return new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Europe/Moscow", year: "2-digit", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"
    }).format(date);
  }

  function potokMedian(values) {
    const sorted = values.filter(Number.isFinite).sort((a, b) => a - b);
    if (!sorted.length) return null;
    const middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
  }

  function filteredPotokData(reviewer = activePotokReviewer) {
    const audits = (potokAuditData.audits || []).filter((audit) => (
      potokInPeriod(audit.completed_at, activePotokPeriod)
      && (reviewer === "all" || potokReviewerRows(audit).some((row) => row.reviewer === reviewer))
    ));
    const incidents = (potokAuditData.incidents || []).filter((incident) => (
      potokInPeriod(incident.occurred_at, activePotokPeriod)
      && (reviewer === "all" || incident.reviewer === reviewer)
    ));
    const reviewerRows = audits.flatMap((audit) => potokReviewerRows(audit)
      .filter((row) => reviewer === "all" || row.reviewer === reviewer)
      .map((row) => ({ ...row, auditId: audit.id })));
    return { audits, incidents, reviewerRows };
  }

  function renderPotokMetrics(data) {
    const usable = data.reviewerRows.filter((row) => row.verdict !== "INCONCLUSIVE").length;
    const seconds = data.reviewerRows.reduce((sum, row) => sum + (row.duration_seconds || 0), 0);
    const averageValue = data.reviewerRows.length
      ? data.reviewerRows.reduce((sum, row) => sum + row.value_score, 0) / data.reviewerRows.length
      : 0;
    potokAuditMetrics.innerHTML = [
      [data.audits.length, "аудитов"],
      [`${usable}/${data.reviewerRows.length}`, "пригодных результатов"],
      [potokDuration(seconds), "времени моделей"],
      [averageValue ? averageValue.toFixed(1) : "—", "средняя ценность / 9"],
      [data.incidents.length, "инцидентов в техжурнале"]
    ].map(([value, label]) => `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("");
  }

  function renderPotokModels(data) {
    if (activePotokReviewer === "codex") {
      potokAuditModels.innerHTML = `<section class="potok-models__journal-only">
        <div><strong>Codex</strong><span>только технический журнал</span></div>
        <p>Codex не является reviewer в этих парных аудитах. Фильтр показывает только системные инциденты, зафиксированные Codex.</p>
      </section>`;
      return;
    }
    const reviewers = activePotokReviewer === "all" ? ["claude", "kimi"] : [activePotokReviewer];
    potokAuditModels.innerHTML = reviewers.map((reviewer) => {
      const rows = data.reviewerRows.filter((row) => row.reviewer === reviewer);
      const median = potokMedian(rows.map((row) => row.duration_seconds));
      const useful = rows.filter((row) => row.verdict !== "INCONCLUSIVE").length;
      const version = rows.find((row) => row.model_version)?.model_version || "unknown";
      return `<section>
        <div><strong>${escapeHtml(potokReviewerLabel(reviewer))}</strong><span>${escapeHtml(version)}</span></div>
        <dl>
          <div><dt>Медиана</dt><dd>${potokDuration(median)}</dd></div>
          <div><dt>Результат</dt><dd>${useful}/${rows.length}</dd></div>
          <div><dt>NEEDS_FIX</dt><dd>${rows.filter((row) => row.verdict === "NEEDS_FIX").length}</dd></div>
          <div><dt>Нет результата</dt><dd>${rows.filter((row) => row.verdict === "INCONCLUSIVE").length}</dd></div>
        </dl>
      </section>`;
    }).join("");
  }

  function potokModelStats(data, reviewer) {
    const rows = data.reviewerRows.filter((row) => row.reviewer === reviewer);
    const usable = rows.filter((row) => row.verdict !== "INCONCLUSIVE").length;
    const median = potokMedian(rows.map((row) => row.duration_seconds));
    const incidents = data.incidents.filter((item) => item.reviewer === reviewer).length;
    const runErrors = rows.filter((row) => row.error_class).length;
    const uniqueStops = data.audits.filter((audit) => {
      const reviewers = Object.fromEntries(potokReviewerRows(audit).map((row) => [row.reviewer, row]));
      const current = reviewers[reviewer];
      const other = reviewers[reviewer === "claude" ? "kimi" : "claude"];
      return current?.verdict === "NEEDS_FIX" && other?.verdict !== "NEEDS_FIX";
    }).length;
    return { reviewer, rows, usable, median, incidents, runErrors, uniqueStops };
  }

  function renderPotokRanking(data) {
    if (!potokModelRanking) return;
    if (!data.audits.length) {
      potokModelRanking.innerHTML = '<p class="potok-empty">Для рейтинга reviewer-моделей за выбранный период недостаточно данных.</p>';
      return;
    }
    const stats = [potokModelStats(data, "claude"), potokModelStats(data, "kimi")];
    const medians = stats.map((item) => item.median).filter((value) => Number.isFinite(value) && value > 0);
    const fastest = medians.length ? Math.min(...medians) : null;
    stats.forEach((item) => {
      const total = Math.max(1, item.rows.length);
      const completion = item.usable / total;
      const speed = Number.isFinite(item.median) && fastest ? Math.min(1, fastest / item.median) : 0;
      const stability = Math.max(0, 1 - item.runErrors / total);
      item.rating = Math.round((completion * 6 + speed * 2 + stability * 2) * 10) / 10;
    });
    const ordered = [...stats].sort((a, b) => b.rating - a.rating);
    const kimi = stats.find((item) => item.reviewer === "kimi");
    const kimiDecision = kimi.rows.length && kimi.usable / kimi.rows.length >= 0.75 && kimi.uniqueStops > 0
      ? `<strong>Kimi не лишний шум.</strong> Оставить быстрым вторым reviewer: ${kimi.uniqueStops} уникальный stop-сигнал, медиана ${potokDuration(kimi.median)}. Из-за ${kimi.incidents} технических инцидентов Kimi не должна одна открывать или закрывать gate.`
      : `<strong>Kimi пока не доказала обязательную ценность.</strong> Не делать её gate-owner; оставить опциональной до подтверждённых независимых находок.`;
    potokModelRanking.innerHTML = `<div class="potok-ranking__heading">
        <div><p class="eyebrow">Общий рейтинг reviewer-моделей</p><h3>${escapeHtml(potokReviewerLabel(ordered[0].reviewer))} лидирует по операционной надёжности</h3></div>
        <p>${kimiDecision}</p>
      </div>
      <div class="potok-ranking__scores">${ordered.map((item, index) => `<section>
        <span>${index + 1}</span><div><strong>${escapeHtml(potokReviewerLabel(item.reviewer))}</strong><small>${item.usable}/${item.rows.length} пригодных · ${item.uniqueStops} уникальных stop-сигналов · ${item.runErrors} сбоев в аудитах · ${item.incidents} событий в техжурнале</small></div><b>${item.rating.toFixed(1)}<small>/10</small></b>
      </section>`).join("")}</div>
      <p class="potok-ranking__note">Рейтинг операционный, не интеллектуальный. Уникальный stop-сигнал показывает независимый вклад, но считается качественной находкой только после человеческой приёмки.</p>`;
  }

  function renderPotokAudits(data) {
    if (!data.audits.length) {
      potokAuditList.innerHTML = activePotokReviewer === "codex"
        ? '<p class="potok-empty">Codex не выполнял эти парные аудиты. Ниже показаны только его записи в техническом журнале.</p>'
        : '<p class="potok-empty">За выбранный период аудитов нет.</p>';
      return;
    }
    potokAuditList.innerHTML = data.audits.map((audit) => {
      const rows = potokReviewerRows(audit).filter((row) => activePotokReviewer === "all" || row.reviewer === activePotokReviewer);
      const errors = rows.map((row) => row.error_class).filter(Boolean);
      const selectedRow = activePotokReviewer === "all" ? null : rows[0];
      const displayedSeconds = selectedRow ? selectedRow.duration_seconds : audit.wall_seconds;
      const displayedVerdict = String(selectedRow ? selectedRow.verdict : audit.outcome || "INCONCLUSIVE");
      const displayedValue = potokSafeValue(selectedRow ? selectedRow.value_score : audit.value_score, displayedVerdict);
      const displayedReason = selectedRow ? selectedRow.value_reason : audit.value_reason;
      const origin = audit.origin && typeof audit.origin === "object" ? audit.origin : null;
      const originMarkup = origin
        ? `<span class="potok-origin"><span><b>Чат</b>${escapeHtml(origin.chat)}</span><span><b>Проект</b>${escapeHtml(origin.project)}</span><span><b>Задача</b>${escapeHtml(origin.task)}</span></span>`
        : '<small class="potok-origin-missing">Источник не указан</small>';
      return `<article class="potok-audit-row" id="potok-${escapeHtml(audit.id)}">
        <div data-label="Проверка"><strong>${escapeHtml(audit.id)}</strong><small>${potokDate(audit.completed_at)}${audit.parallel && !selectedRow ? " · параллельно" : ""}</small><a class="potok-audit-link" href="#potok-${escapeHtml(audit.id)}" data-potok-audit-link="${escapeHtml(audit.id)}">Открыть разбор</a></div>
        <div data-label="Контур"><span class="potok-contour">${escapeHtml(potokContourLabel(audit.contour))}</span>${originMarkup}</div>
        <div class="potok-review-results" data-label="Результаты моделей">${rows.map((row) => `
          <span class="potok-verdict potok-verdict--${escapeHtml(String(row.verdict || "INCONCLUSIVE").toLowerCase())}">
            <b>${escapeHtml(row.model || potokReviewerLabel(row.reviewer))}</b>${escapeHtml(potokRowVerdictLabel(row))}<small>${potokDuration(row.duration_seconds)} · ${row.value_score}/9</small>
          </span>`).join("")}</div>
        <div data-label="Время"><strong>${potokDuration(displayedSeconds)}</strong><small>${selectedRow ? "выбранная модель" : audit.parallel ? "общее по стене" : "последовательно"}</small></div>
        <div data-label="Ценность"><span class="potok-value potok-value--${escapeHtml(displayedValue)}">${escapeHtml(displayedValue)}/9</span><small>${selectedRow ? escapeHtml(potokReviewerLabel(selectedRow.reviewer)) : "Итог пары"}: ${escapeHtml(displayedReason || "Результат не классифицирован")}</small></div>
        <div data-label="Ошибка">${errors.length ? errors.map((error) => `<span class="potok-error">${escapeHtml(potokErrorLabel(error))}</span>`).join("") : '<span class="potok-ok">нет</span>'}</div>
        <details class="potok-audit-detail" data-potok-audit-detail="${escapeHtml(audit.id)}">
          <summary>Кому поставлена оценка и за что</summary>
          <div class="potok-audit-detail__body">
            <p><strong>Что проверяли:</strong> ${escapeHtml(potokFocusLabel(audit.focus))}. <strong>Источник:</strong> ${origin ? `${escapeHtml(origin.chat)} → ${escapeHtml(origin.project)} → ${escapeHtml(origin.task)}` : "не указан"}. <strong>Итог пары:</strong> ${escapeHtml(potokVerdictLabel(audit.outcome || "INCONCLUSIVE"))}, ${escapeHtml(audit.value_score)}/9 — ${escapeHtml(audit.value_reason || "Результат не классифицирован")}.</p>
            <div>${rows.map((row) => `<section><strong>${escapeHtml(row.model || potokReviewerLabel(row.reviewer))} · ${row.value_score}/9</strong><span>${escapeHtml(potokRowVerdictLabel(row))} · ${potokDuration(row.duration_seconds)}</span><p>${escapeHtml(row.value_reason)}</p></section>`).join("")}</div>
            <small>Публичная карточка показывает только метаданные. Полный текст аудита остаётся в приватном Audit Flow.</small>
          </div>
        </details>
      </article>`;
    }).join("");
  }

  function renderPotokErrors(data) {
    const groups = new Map();
    data.incidents.forEach((incident) => {
      const key = `${incident.reviewer}:${incident.error_class}`;
      groups.set(key, { ...incident, count: (groups.get(key)?.count || 0) + 1 });
    });
    const values = [...groups.values()].sort((a, b) => b.count - a.count);
    potokErrorList.innerHTML = values.length
      ? values.map((item) => `<div><strong>${escapeHtml(item.model)}</strong><span>${escapeHtml(potokErrorLabel(item.error_class))}</span><b>${item.count}</b></div>`).join("")
      : '<p class="potok-empty">За выбранный период технических ошибок нет.</p>';
  }

  function renderPotokAuditDashboard() {
    if (!potokAuditMetrics) return;
    document.querySelectorAll("[data-potok-period]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.potokPeriod === activePotokPeriod);
    });
    const data = filteredPotokData();
    renderPotokMetrics(data);
    renderPotokRanking(filteredPotokData("all"));
    renderPotokModels(data);
    renderPotokAudits(data);
    renderPotokErrors(data);
    renderPotokFreshness();
  }

  function renderPotokFreshness() {
    const checkedAt = new Date(potokPipelineHealth?.checked_at);
    const staleAfter = Number(potokPipelineHealth?.stale_after_seconds);
    let pipelineStatus = ["FRESH", "NO_NEW_AUDITS", "LAGGING", "STALE", "FAILED", "UNKNOWN"]
      .includes(potokPipelineHealth?.status) ? potokPipelineHealth.status : "UNKNOWN";
    if (
      ["FRESH", "NO_NEW_AUDITS"].includes(pipelineStatus)
      && Number.isFinite(checkedAt.getTime())
      && Number.isFinite(staleAfter)
      && Date.now() - checkedAt.getTime() > staleAfter * 1000
    ) pipelineStatus = "STALE";
    const statusClass = pipelineStatus.toLowerCase().replaceAll("_", "-");
    potokAuditFreshness.innerHTML = `<span class="potok-pipeline-status potok-pipeline-status--${escapeHtml(statusClass)}">${escapeHtml(potokPipelineStatusLabel(pipelineStatus))}</span><span>${escapeHtml(potokPipelineReason(pipelineStatus, potokPipelineHealth?.error_class))} · metadata-only</span>`;
    if (potokLatestSource) potokLatestSource.textContent = potokDate(potokAuditData.latest_source_event_at);
    if (potokLastCheck) potokLastCheck.textContent = potokDate(potokPipelineHealth?.checked_at);
    if (potokPublishedAt) potokPublishedAt.textContent = potokDate(potokAuditData.published_at);
    const atlasUpdated = document.getElementById("atlas-updated");
    if (atlasUpdated && potokAuditData.published_at) atlasUpdated.textContent = `Обновлено ${potokDate(potokAuditData.published_at)}`;
  }

  async function refreshPotokPipelineHealth() {
    try {
      const response = await fetch("potok-pipeline-health.json", { cache: "no-store", redirect: "error" });
      if (!response.ok) return;
      const value = await response.json();
      if (
        value && typeof value === "object"
        && ["FRESH", "NO_NEW_AUDITS", "LAGGING", "STALE", "FAILED", "UNKNOWN"].includes(value.status)
        && typeof value.checked_at === "string"
        && typeof value.last_success_at === "string"
        && Number.isFinite(new Date(value.checked_at).getTime())
        && Number.isFinite(new Date(value.last_success_at).getTime())
        && Number.isInteger(value.stale_after_seconds)
        && value.stale_after_seconds >= 60
        && value.stale_after_seconds <= 86400
        && (value.error_class === null || /^[a-z0-9-]{1,48}$/.test(value.error_class))
      ) {
        potokPipelineHealth = value;
        renderPotokFreshness();
      }
    } catch (_) {
      // Embedded reviewed health remains the fail-closed fallback.
    }
  }

  function findPotokAuditDetail(id) {
    return [...document.querySelectorAll("[data-potok-audit-detail]")]
      .find((detail) => detail.dataset.potokAuditDetail === id) || null;
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

    const potokPeriod = event.target.closest("[data-potok-period]");
    if (potokPeriod) {
      activePotokPeriod = potokPeriod.dataset.potokPeriod;
      renderPotokAuditDashboard();
    }

    const auditLink = event.target.closest("[data-potok-audit-link]");
    if (auditLink) {
      const detail = findPotokAuditDetail(auditLink.dataset.potokAuditLink);
      if (detail) detail.open = true;
    }

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
    if (event.target.closest("#audit-reset") && window.confirm(`Сбросить все ${model.audit_items.length} статусов и комментарии выбранного проекта?`)) {
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
    if (event.target === potokAuditReviewer) {
      activePotokReviewer = potokAuditReviewer.value;
      renderPotokAuditDashboard();
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
  renderPotokAuditDashboard();
  refreshPotokPipelineHealth();

  const requestedTab = window.location.hash.slice(1);
  if (["map", "options", "rollout", "systems", "audit", "potok-audits", "questions", "toolkit", "rules"].includes(requestedTab)) {
    activateTab(requestedTab);
  } else if (/^potok-AUD-\d{3}$/.test(requestedTab)) {
    activateTab("potok-audits");
    window.history.replaceState(null, "", `#${requestedTab}`);
    const auditId = requestedTab.replace("potok-", "");
    const detail = findPotokAuditDetail(auditId);
    if (detail) {
      detail.open = true;
      requestAnimationFrame(() => detail.closest(".potok-audit-row")?.scrollIntoView({ block: "center" }));
    }
  }
})();

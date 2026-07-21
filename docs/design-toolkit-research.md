---
title: Инструменты для архитектурного атласа AI-офиса
type: research
status: accepted
created: 2026-07-21
tags:
  - architecture
  - frontend
  - skills
  - mcp
---

# Инструменты для архитектурного атласа

## Вывод

Для текущего проекта не нужен большой набор MCP. Оптимальный стек:

1. `frontend-design` формирует визуальное направление и качество интерфейса.
2. `course-to-system` сохраняет точность источников и отделяет курс от наших решений.
3. Context7 используется точечно для актуальной документации библиотек.
4. Playwright является обязательной проверкой desktop/mobile и интеракций.
5. Figma MCP подключается только после появления реального Figma/ FigJam-файла.
6. Mermaid MCP применяется только к публичным схемам без внутренней информации.

Количество подключений не является KPI. Каждый MCP получает доступ к контексту и
расширяет поверхность риска, поэтому включается под конкретную задачу.

## Матрица решения

| Инструмент | Решение | Польза | Почему не больше |
|---|---|---|---|
| Anthropic `frontend-design` | установлен в Codex | композиция, типографика, визуальная индивидуальность | не заменяет факты, UX и QA |
| `course-to-system` | локальный канон проекта | источник → аудит → решение → checklist → evidence | работает только вместе с валидатором |
| Context7 MCP | уже активен | актуальные version-specific API docs | community-индекс требует сверки с первоисточником |
| Playwright | активен как локальная QA | реальный браузер, mobile, клики, console, overflow | отдельный MCP пока дублирует CLI |
| Figma MCP | отложен | Figma/ FigJam ↔ код, аннотации, компоненты | без Figma-файла создаёт лишний внешний контур |
| Mermaid Chart MCP | отложен | валидация и экспорт документационных схем | текст схемы передаётся внешнему сервису |
| GitHub MCP | пока не нужен | PR, issues, Actions, code search | `gh` CLI уже закрывает текущий workflow |

## Когда подключать Figma MCP

Подключать после выполнения трёх условий:

- создан конкретный Figma или FigJam-файл архитектуры;
- определено, какие блоки разрешено отдавать внешнему сервису;
- нужен двусторонний workflow макет ↔ код, а не просто красивый HTML.

Figma официально поддерживает remote и desktop MCP. Remote подходит для работы
через браузер и ссылок на frame; desktop требует платный Dev или Full seat.

## Когда подключать Mermaid MCP

Использовать для sequence, C4, state и flowchart-диаграмм, которые должны жить в
документации, презентациях или иметь редактируемую ссылку. Внутренние IP, имена
серверов, секреты и private data в удалённый Mermaid MCP не передавать.

## Почему Playwright остаётся обязательным

Красивый макет не доказывает качество реализации. Перед публикацией проверяются:

- desktop и mobile viewport;
- отсутствие горизонтального переполнения;
- все вкладки, вопросы, узлы и внешние ссылки;
- keyboard focus и доступные названия;
- console errors;
- совпадение публичной страницы с JSON-моделью;
- отсутствие локальных путей, токенов и приватных данных.

## Четыре рабочих промпта

### 1. Детализация узла

> Разбери узел архитектуры как инженерный контракт: цель, владелец, входы,
> выходы, источник истины, разрешённые действия, stop-gates, главный риск,
> failure scenario, метрики и evidence. Не добавляй факты без источника.

### 2. Adversarial review

> Найди single points of failure, несколько равноправных writers, чрезмерные
> права, незащищённые секреты, циклы синхронизации, неподтверждённые backup и
> места, где владелец остаётся ручным транспортом.

### 3. Визуальный редизайн

> Используй frontend-design. Сохрани фактическую модель данных, но предложи
> более ясную композицию: сценарии вместо клубка линий, progressive disclosure,
> явные статусы, риски и доказательства. Проверь mobile и accessibility.

### 4. Независимая приёмка

> Не доверяй отчёту. Открой production через Playwright, проверь desktop/mobile,
> все вкладки, интерактивные узлы, ссылки, отсутствие horizontal overflow и
> console errors. Проверь отсутствие локальных путей и секретов.

## Первоисточники

- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
- [Figma MCP: remote и desktop](https://help.figma.com/hc/en-us/articles/35281385065751-Figma-MCP-collection-Compare-Figma-s-remote-and-desktop-MCP-servers)
- [Figma Dev Mode MCP guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server)
- [Microsoft Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Context7](https://github.com/upstash/context7)
- [Mermaid Chart MCP](https://mermaid.ai/docs/ai/mcp-server)
- [GitHub MCP toolsets](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/configure-toolsets)
- [MCP security best practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)

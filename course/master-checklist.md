# Мастер-чек-лист уроков OpenClaw 3–6

> Статус `done` допустим только при наличии evidence в `data/progress.json`.


## Урок 3 · Раздел 00 — Что нужно до начала урока 3

- [ ] `L03-prereq-lesson1` — Урок 1 пройден полностью
  - VPN настроен, отдельный профиль Chrome создан, зарубежный сервер куплен (netcup / Hetzner), Claude Max подключён. Чек-лист урока 1
- [ ] `L03-prereq-lesson2` — Урок 2 пройден полностью
  - Claude Project создан, база знаний загружена, системная инструкция написана. Чек-лист урока 2
- [ ] `L03-prereq-chatgpt` — Подписка на основную модель — «мозг» вашего бота
  - Обязательно для этого урока. Берите тот ИИ, на который оформили подписку в уроке 1 : • ChatGPT Plus ($20) / Pro ($100) → работает через OpenAI Codex • MiniMax Plus ($20) / Max ($50) → дешевле, модель MiniMax M3 Подключаем на шаге 07. chatgpt.com — оформить подписку platform.minimax.io — тарифы MiniMax

## Урок 3 · Раздел 03 — Покупка VPS-сервера для OpenClaw

- [ ] `L03-vps-buy` — Купить новый VPS-сервер у того же хостинга, что в уроке 1
  - Тот же аккаунт (netcup / Hetzner), что в уроке 1 → создайте новый сервер → параметры из таблицы выше. Страна — США или Европа, как и сервер из урока 1.
- [ ] `L03-vps-creds` — Сохранить IP-адрес и пароль от сервера
  - После активации сервера хостинг покажет IP и root-пароль. Скопируйте их в безопасное место — они понадобятся на каждом следующем шаге.

## Урок 3 · Раздел 04 — Установка VS Code + Claude Code

- [ ] `L03-vscode-install` — Скачать и установить Visual Studio Code
  - Выберите версию для вашей ОС (macOS / Windows / Linux). code.visualstudio.com — скачать VS Code
- [ ] `L03-claudecode-install` — Установить расширение Claude Code в VS Code
  - Откройте VS Code → Extensions ( Cmd+Shift+X на Mac / Ctrl+Shift+X на Windows) → в поиске введите Claude Code → установите официальное расширение от Anthropic → перезапустите VS Code. На странице продукта можно посмотреть все способы работы с Claude Code (терминал, VS Code, JetBrains). Самый продвинутый вариант — работа в VS Code. claude.com/product/claude-code — страница продукта
- [ ] `L03-claudecode-auth` — Авторизовать Claude Code через аккаунт Anthropic
  - Откройте Claude Code в боковой панели VS Code → Sign In → авторизуйтесь в браузере через ваш аккаунт claude.ai → дождитесь подтверждения в VS Code.

## Урок 3 · Раздел 05 — Прокачка Claude Code: скиллы, MCP и 4 инструмента

- [ ] `L03-nodejs-install` — Установить Node.js
  - Выберите инструкцию для вашей ОС выше. Проверка: в терминале node -v должен показать версию.
- [ ] `L03-bypass` — Включить Bypass Permissions в VS Code
  - 1. Откройте Настройки (Settings) VS Code. Любым из двух способов: • Горячими клавишами: Cmd + , (запятая) на Mac / Ctrl + , (запятая) на Windows. • Мышкой: на Mac — верхнее меню Code → Settings → Settings ; на Windows — File → Preferences → Settings . Или нажмите шестерёнку ⚙️ в левом нижнем углу окна → Settings . 2. В строке поиска вверху Настроек введите Claude Code . 3. Найдите пункт Claude Code: Allow Dangerously Skip Permissions и поставьте галочку. 4. Вернитесь в чат с агентом → нажмите на название режима в правом нижнем углу окна чата → выберите Bypass permissions .
- [ ] `L03-tool-superpowers` — Установить Superpowers
  - Тест: спросите агента «какие навыки Superpowers тебе доступны?». Как пользоваться: просто просите словами — «реши задачу через TDD», «запусти систематический дебаг», «составь план». github.com/obra/superpowers
- [ ] `L03-tool-taskmaster` — Установить TaskMaster
  - Тест: «Создай тестовый проект, разбей на 5 подзадач, покажи прогресс». Как пользоваться: «разбей проект X на задачи», «покажи следующую задачу», «отметь задачу выполненной». github.com/eyaltoledano/claude-task-master
- [ ] `L03-tool-playwright` — Установить Playwright
  - Тест: «Playwright, открой example.com и сделай скриншот». Как пользоваться: «зайди на сайт X, сними скрин», «открой Y и заполни форму». github.com/microsoft/playwright-mcp
- [ ] `L03-tool-agentmemory` — Установить AgentMemory
  - Тест: «Запомни: меня зовут …» → откройте новую сессию → «как меня зовут?». Если вспомнил — память работает. Как пользоваться: «запомни, что …», «что ты помнишь про …». github.com/rohitg00/agentmemory
- [ ] `L03-tool-workspace` — Установить Workspace MCP (по желанию)
  - Тест: «Создай Google-документ с заголовком Привет». Как пользоваться: «создай таблицу с …», «прочитай мой документ …», «сделай презентацию по …». github.com/taylorwilsdon/google_workspace_mcp

## Урок 3 · Раздел 06 — Автоматическая установка OpenClaw на сервер

- [ ] `L03-skill-openclaw-docs` — Скачать скилл и перенести папку в проект
  - 1. Скачайте архив и распакуйте его двойным кликом — получится папка openclaw-docs . ⬇️ Скачать .zip 2. Перетащите эту папку в проект, открытый в Claude Code (видно в левой панели).
- [ ] `L03-skill-install` — Отправить промпт в Claude Code и перезапустить
  - Claude Code установит скилл и напомнит перезапустить программу. После перезапуска скилл активен.
- [ ] `L03-ssh-key` — Настроить SSH-ключ и алиас my-server
  - После этого подключаетесь к серверу одной командой ssh my-server — без пароля. Этот алиас используем на следующем шаге.
- [ ] `L03-openclaw-install` — OpenClaw установлен на сервере
  - Дождитесь ответа агента. Он сам подключится, скачает пакеты, распутает зависимости и установит систему.
- [ ] `L03-openclaw-onboard` — Пройти онбординг OpenClaw вручную
  - Откройте обычный Терминал (не в чате с агентом) и подключитесь по алиасу (или по root@IP_АДРЕС , если ключ не настраивали):

## Урок 3 · Раздел 07 — Выбор и подключение LLM-провайдеров

- [ ] `L03-llm-codex` — Подключить OpenAI Codex (ChatGPT)
  - 1. В мастере настройки выберите провайдера openai (Codex подключится автоматически) 2. В терминале появится ссылка на авторизацию 3. Откройте её в браузере → войдите в аккаунт ChatGPT 4. Дождитесь подтверждения в терминале
- [ ] `L03-llm-effort` — Установить режим reasoning: High или Extra High
  - Чтобы бот давал максимально глубокие и точные ответы, выберите High (рекомендуется) или xHigh (модель думает дольше, но ответы ещё глубже). Для High:
- [ ] `L03-llm-minimax` — Подключить MiniMax M3
  - 1. Возьмите API-ключ в личном кабинете MiniMax (раздел с ключами) 2. В мастере настройки выберите провайдера MiniMax → Global · API key 3. Вставьте ключ MINIMAX_API_KEY 4. Мастер сам пропишет модель minimax/MiniMax-M3 — это и есть основной мозг бота platform.minimax.io — тарифы и API-ключ
- [ ] `L03-openrouter-connect` — Подключить OpenRouter к OpenClaw
  - В мастере настройки выберите провайдера OpenRouter → вставьте ваш API-ключ из урока 2. Если забыли ключ: зайдите на openrouter.ai/settings/keys и скопируйте существующий или создайте новый. Выбор резервной модели (Fallback): после мастера настройки отправьте в Claude Code задачу для установки бесплатной модели от Qwen. Точный ID модели можно найти на сайте: openrouter.ai/models — каталог моделей

## Урок 3 · Раздел 08 — Веб-панель управления ботом (Web UI)

- [ ] `L03-webui-prompt` — Отправить промпт в Claude Code и получить ссылку
  - Скопируйте промпт выше и отправьте в Claude Code. Он всё настроит и пришлёт готовую ссылку на панель + команду, чтобы открыть туннель снова при необходимости.
- [ ] `L03-webui-open` — Открыть веб-панель по ссылке
  - Перейдите по ссылке от Claude Code в браузере — откроется панель управления ботом. Готово ✅

## Урок 3 · Раздел 09 — Создание Telegram-бота и подключение к OpenClaw

- [ ] `L03-bot-create` — Создать бота в @BotFather
  - Откройте Telegram → найдите @BotFather (обязательно с синей галочкой!). Напишите /newbot → придумайте имя и username (с окончанием «bot»). BotFather выдаст HTTP API токен — скопируйте и сохраните его.
- [ ] `L03-bot-webui` — Настроить бота через WebUI
  - 1. Перейдите в WebUI (из шага 08) 2. Откройте раздел Integrations (или настройки Telegram) 3. Вставьте HTTP API токен от BotFather
- [ ] `L03-bot-pairing` — Пройти Pairing — привязать свой Telegram-аккаунт
  - Pairing — это привязка именно вашего Telegram-аккаунта к OpenClaw, чтобы система знала, что вы — администратор бота. WebUI сгенерирует код подтверждения или ссылку — отправьте код вашему боту в Telegram (или перейдите по ссылке), чтобы подтвердить права. Следуйте инструкции на экране.
- [ ] `L03-bot-test` — Протестировать бота
  - Откройте вашего бота в Telegram → нажмите Start → напишите: «Привет, ты на связи?» Если бот ответил — всё работает. ✅

## Урок 3 · Раздел 10 — Голосовые сообщения боту (распознавание речи)

- [ ] `L03-voice-groq-key` — Получить бесплатный ключ Groq
  - 1. Зарегистрируйтесь на Groq 2. Откройте API Keys → Create API Key 3. Скопируйте ключ (начинается с gsk_... ) console.groq.com — регистрация
- [ ] `L03-voice-test` — Проверить голосовое сообщение
  - Откройте бота в Telegram → зажмите микрофон → скажите: «Привет, агент! Какая сегодня погода?» → отправьте. Бот должен прислать расшифровку и ответ. ✅ Не получилось? Отправьте в Claude Code: Проверь логи: openclaw logs --follow, найди ошибку в модуле audio.
- [ ] `L03-voice-openai-key` — Получить ключ OpenAI и пополнить баланс
  - 1. Зайдите на платформу OpenAI под своим логином ChatGPT 2. Создайте ключ: Create new secret key 3. Пополните баланс в Billing — хотя бы на $10 4. Скопируйте ключ (начинается с sk-... ) platform.openai.com — API-ключи

## Урок 3 · Раздел 11 — Настройка личности агента — SOUL.md и USER.md

- [ ] `L03-soul-learn` — Дать боту узнать вас (сессия в Telegram или распаковка из урока 2)
  - Можно совместить оба пути. Главное — чтобы у бота были живые факты о вас и вашем деле.
- [ ] `L03-soul-setup` — Собрать SOUL.md и USER.md и сохранить на сервер
  - Проверьте черновик в VS Code и подтвердите — Claude Code сохранит файлы в рабочую папку агента. Готово ✅

## Урок 3 · Раздел 12 — Показ остатка лимитов ChatGPT в Telegram-боте

- [ ] `L03-footer-download` — Скачать архив и перенести папку в проект
  - Скачайте, распакуйте и перетащите папку openclaw-codex-footer в проект, открытый в Claude Code. ⬇️ Скачать .zip
- [ ] `L03-footer-install` — Отправить промпт в Claude Code
  - Скопируйте промпт выше и отправьте в Claude Code одним сообщением. Он сам всё обследует, установит и проверит, по ходу рассказывая, что делает.
- [ ] `L03-footer-test` — Написать боту и проверить футер
  - Напишите боту любое сообщение в Telegram — внизу ответа должна появиться строка с остатком лимитов. Готово ✅

## Урок 3 · Раздел 15 — Авто-обновление OpenClaw

- [ ] `L03-autoupd-download` — Скачать и распаковать
  - Нажмите «Скачать», распакуйте архив и перетащите папку openclaw-autoupdate-kit в свой проект, открытый в VS Code с Claude Code.
- [ ] `L03-autoupd-install` — Вставить промпт в Claude Code
  - Вставьте промпт в Claude Code одним сообщением. Дальше он сам всё поставит на ваш сервер и по ходу расскажет, что делает.

## Урок 3 · Раздел 16 — Организация работы в Telegram: группа с топиками

- [ ] `L03-topics-group` — Создать группу и включить Темы
  - 1. Создайте новую группу в Telegram (например, «Мой Агент») 2. Настройки группы → Изменить → включите Темы (Topics) 3. Добавьте в группу вашего бота
- [ ] `L03-topics-chatid` — Узнать chat_id группы
  - Добавьте в группу бота @userinfobot — он сразу пришлёт chat_id вашей группы (число с минусом, например -100123456789 ). Скопируйте ID и удалите бота из группы.
- [ ] `L03-topics-userid` — Узнать свой user ID
  - Напишите боту @userinfobot в личку — он пришлёт ваш числовой ID (просто число, без минуса). Сохраните его — понадобится для конфига.
- [ ] `L03-topics-privacy` — Отключить Privacy Mode у бота в @BotFather
  - Идём в @BotFather → /mybots → выбрать бота → Bot Settings → Group Privacy → Turn off . Без этого бот не будет видеть сообщения в группе.
- [ ] `L03-topics-admin` — Назначить бота Администратором группы
  - Настройки группы → Администраторы → добавьте вашего бота → включите все права (Change Group Info, Delete Messages, Ban Users, Invite Users via Link, Pin Messages, Manage Topics , Manage Video Chats, Add New Admins). Remain Anonymous — выключено.
- [ ] `L03-topics-setup` — Настроить топики через Claude Code
  - Подставьте ваш chat_id в промпт ниже, скопируйте и отправьте в Claude Code .

## Урок 3 · Раздел 17 — Голосовые ответы бота (TTS — Text-to-Speech)

- [ ] `L03-tts-setup` — Включить голосовые ответы через Claude Code
  - Скопируйте промпт ниже и отправьте в Claude Code .
- [ ] `L03-tts-test` — Проверить голосовой ответ
  - Бот должен прислать голосовое сообщение в Telegram. Если не пришло — проверьте логи: openclaw logs --follow

## Урок 4 · Раздел 00 — Предварительные требования

- [ ] `L04-prereq-vps` — VPS-сервер с установленным OpenClaw (урок 3)
- [ ] `L04-prereq-claude` — Claude Code установлен в VS Code и работает (урок 3)
- [ ] `L04-prereq-bot` — Telegram-бот подключён к OpenClaw (урок 3)
- [ ] `L04-prereq-vpn` — VPN включён
- [ ] `L04-prereq-card` — Карта для оплаты домена (~$10–15/год)

## Урок 4 · Раздел 03 — Регистрация на GitHub и создание репозиториев

- [ ] `L04-github-reg` — Зарегистрироваться на GitHub
  - Email + username + пароль. Рекомендация: тот же Gmail, что заводили в уроке 1. github.com — регистрация
- [ ] `L04-github-public` — Создать Public-репозиторий (основной)
  - Кнопка «New repository» → название: например, sites → тип: Public → галочка «Add a README file» . Это наш основной репозиторий для сайтов — именно к нему привяжем домен. Всё бесплатно.
- [ ] `L04-github-private` — Создать Private-репозиторий (демонстрация)
  - Создаём ещё один репозиторий с типом Private — код не виден другим пользователям. Полезен для конфиденциальных проектов.

## Урок 4 · Раздел 04 — Подключение к GitHub: SSH, GitHub CLI и MCP

- [ ] `L04-ssh-gen` — Сгенерировать SSH-ключ на VPS
  - Уже подключились к серверу? Выполните команду (одинаковая для всех — это Linux на VPS):
- [ ] `L04-ssh-copy` — Скопировать публичный ключ
  - Скопируйте всю строку целиком , которая выводится. Она начинается с ssh-ed25519 и заканчивается вашим email.
- [ ] `L04-ssh-github` — Добавить SSH-ключ в GitHub
  - 1. Откройте GitHub → иконка профиля → Settings 2. В левом меню: SSH and GPG keys 3. Нажмите New SSH key 4. Title: например, OpenClaw VPS 5. Key type: Authentication Key 6. Key: вставьте скопированную строку 7. Нажмите Add SSH key github.com/settings/keys — страница SSH-ключей
- [ ] `L04-ssh-test` — Проверить SSH-подключение
  - Вернитесь в терминал VPS и выполните:
- [ ] `L04-pat-create` — Создать Personal Access Token на GitHub
  - 1. Откройте ссылку ниже (или: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)) 2. Нажмите Generate new token → Generate new token (classic) 3. GitHub попросит подтвердить пароль 4. Заполните: • Note: OpenClaw VPS (название для себя) • Expiration: No expiration (или 90 дней — тогда придётся обновлять) • Scopes: поставьте галочки на repo (полный доступ к репозиториям) и delete_repo (удаление репо) 5. Нажмите Generate token 6. Скопируйте токен! Он начинается с ghp_ и показывается только один раз . Сохраните его в надёжное место. github.com/settings/tokens — страница токенов
- [ ] `L04-gh-install` — Установить GitHub CLI на VPS
  - Скопируйте и вставьте всю команду целиком в терминал VPS. Она установит GitHub CLI из официального репозитория:
- [ ] `L04-gh-auth` — Авторизовать GitHub CLI через токен
  - Замените <ВАШ_ТОКЕН> на токен, который скопировали (начинается с ghp_ ):
- [ ] `L04-gh-check` — Проверить авторизацию GitHub CLI
  - Должно показать: ✓ Logged in to github.com account <ваш_username>
- [ ] `L04-test-push` — Тест SSH: OpenClaw пушит файл в существующий репозиторий
  - Отправьте промпт ниже боту в Telegram (OpenClaw):
- [ ] `L04-test-create-repo` — Тест GitHub CLI: OpenClaw создаёт новый репозиторий
  - Отправьте промпт ниже боту в Telegram (OpenClaw):
- [ ] `L04-mcp-cc-add` — Добавить GitHub MCP в Claude Code
  - Откройте терминал в VS Code и выполните (одинаково на Mac и Windows):
- [ ] `L04-mcp-cc-auth` — Авторизоваться через GitHub
  - 1. Запустите Claude Code (команда claude или чат в VS Code) 2. Введите /mcp 3. Выберите github → Authenticate 4. Откроется браузер → войдите в свой GitHub → подтвердите доступ. Готово — токен вводить не нужно.
- [ ] `L04-mcp-cc-check` — Проверить подключение
  - Должно показать ✓ Connected · github . Теперь Claude Code умеет работать с вашим GitHub структурно.
- [ ] `L04-mcp-oc-prompt` — Поручить Claude Code подключить GitHub MCP в OpenClaw
  - Отправьте промпт ниже в Claude Code. Подставьте тот же PAT, что создали в Части 2:

## Урок 4 · Раздел 05 — Покупка домена на Porkbun

- [ ] `L04-domain-buy` — Купить домен на Porkbun
  - Поиск → выбор зоны ( .com — универсальный, .site — дешёвый, .dev — для техно) → оплата картой. porkbun.com — купить домен
- [ ] `L04-dns-open` — Открыть управление DNS в Porkbun
  - 1. Войдите в аккаунт Porkbun 2. Перейдите в Domain Management (управление доменами) 3. Найдите ваш домен → нажмите DNS (или иконку шестерёнки → DNS Records) Вы окажетесь на странице, где можно добавлять и удалять DNS-записи. porkbun.com/account — панель управления
- [ ] `L04-dns-delete` — Удалить стандартные записи Porkbun
  - На странице DNS вы увидите уже готовые записи (parking page от Porkbun). Удалите их все — они будут мешать. Нажмите иконку удаления (🗑️) рядом с каждой записью.
- [ ] `L04-dns-a` — Создать 4 A-записи
  - Для каждой A-записи: Type → A , Host → оставить пустым , Answer → IP-адрес из таблицы . Повторите 4 раза для каждого IP-адреса. Это адреса серверов GitHub Pages — они принимают трафик вашего домена.
- [ ] `L04-dns-cname` — Создать CNAME-запись для www
  - Type → CNAME , Host → www , Answer → username.github.io (замените username на ваш логин GitHub). Эта запись нужна, чтобы www.ваш-домен.com тоже работал.

## Урок 4 · Раздел 06 — Подключение домена к GitHub Pages

- [ ] `L04-pages-enable` — Включить GitHub Pages в Public-репозитории
  - Репозиторий → Settings → Pages → Source: Deploy from a branch → Branch: main , папка: / (root) → Save
- [ ] `L04-pages-domain` — Привязать свой домен
  - В том же разделе Pages → Custom domain → вписать свой домен (например, mybusiness.com ) → Save . GitHub создаст файл CNAME в репозитории автоматически.
- [ ] `L04-pages-https` — Включить Enforce HTTPS
  - Поставить галочку Enforce HTTPS в настройках Pages. Если галочка неактивна — подождите, пока DNS пропагируется.
- [ ] `L04-pages-check` — Проверить сайт в браузере
  - Откройте https://ваш-домен.com — должна отобразиться страница из репозитория.

## Урок 4 · Раздел 07 — Дизайнерские скиллы для крутых сайтов

- [ ] `L04-skill-cc-prompt` — Поручить Claude Code установить frontend-design себе
  - По умолчанию ставим глобально (во всех проектах). Нужно только в текущем — поменяйте на «локально» в промпте. После установки перезапустите VS Code.
- [ ] `L04-skill-oc-prompt` — Поручить Claude Code установить frontend-design в OpenClaw
  - Отправьте промпт в Claude Code:
- [ ] `L04-refero-try` — Попробовать стиль из Refero на своём лендинге
  - Выберите стиль → скопируйте DESIGN.md → отдайте агенту вместе с задачей. Сравните результат с дизайном «по умолчанию». styles.refero.design — библиотека DESIGN.md

## Урок 4 · Раздел 08 — Практика: полный цикл — от идеи до сайта на домене

- [ ] `L04-practice-create` — Создать лендинг через вайб-кодинг
  - В Claude или Claude Code: описываем словами, что хотим → получаем готовый HTML. Пробуем разные варианты: лендинг для бизнеса, портфолио, таблица, обратный отсчёт.
- [ ] `L04-practice-deploy` — Задеплоить через OpenClaw в Telegram
  - Отправляем промпт ниже боту — он создаст лендинг с использованием дизайнерских скиллов и зальёт на GitHub Pages.
- [ ] `L04-practice-check` — Проверить сайт на своём домене
  - Откройте https://ваш-домен.com — должен отобразиться ваш лендинг с замочком 🔒
- [ ] `L04-practice-iterate` — Внести правки через разговор с ботом
  - Попробуйте: «Добавь секцию с отзывами», «Поменяй цвета на тёмную тему», «Сделай мобильную адаптацию лучше». Агент правит → пушит → сайт обновляется.

## Урок 5 · Раздел 00 — Предварительные требования

- [ ] `L05-prereq-vps` — VPS-сервер с установленным OpenClaw (урок 3)
  - OpenClaw должен запускаться и отвечать в Telegram-боте.
- [ ] `L05-prereq-cc` — Claude Code установлен в VS Code и работает (урок 3)
  - SSH-подключение к VPS из VS Code настроено, «Режим бога» активен.
- [ ] `L05-prereq-bot` — Telegram-бот подключён к OpenClaw (урок 3)
  - Бот отвечает голосом и текстом.
- [ ] `L05-prereq-vpn` — VPN включён
  - Если вы в РФ — ваш Amnezia VPN должен быть поднят. Без VPN Google Cloud Console может капризничать.
- [ ] `L05-prereq-domain1` — Домен №1 работает с GitHub Pages (урок 4)
  - Это проверка того, что вы прошли урок 4 полностью.
- [ ] `L05-prereq-google` — Google-аккаунт активен (создан в уроке 1)
  - Это тот же Gmail, что создавали в первом уроке.
- [ ] `L05-prereq-card` — Карта для оплаты Домена №2 (~$8–15/год)
  - Та же зарубежная виртуальная карта, что покупали Домен №1.
- [ ] `L05-prereq-auth-app` — Приложение-аутентификатор на телефоне
  - Google Authenticator. Нужно для 2FA в n8n. Если нет — поставьте прямо сейчас.
- [ ] `L05-prereq-pwmgr` — Менеджер паролей (рекомендация)
  - Любой менеджер паролей. В этом уроке у вас будет появляться много критичных паролей и токенов — лучше хранить их нормально, а не в заметках.

## Урок 5 · Раздел 03 — Покупка Домена №2

- [ ] `L05-dom2-login` — Войти на Porkbun (там же, где покупали Домен №1)
  - Используем тот же аккаунт — удобнее управлять. porkbun.com
- [ ] `L05-dom2-buy` — Купить Домен №2
  - Рекомендации по имени: — короткое (до 15 символов) — лучше зона .com , .online или .app — в имени — что-то про автоматизации или ваше имя: <имя>-automation.com , my-n8n.online , workflows-<имя>.app — примеры: stasautomation.com , bitcoinschool-n8n.com , mariaflows.online Примерная стоимость: $8–15/год .
- [ ] `L05-dom2-nopages` — НЕ настраиваем GitHub Pages на этом домене
  - Домен №2 нужен только для n8n. GitHub Pages здесь не используем.
- [ ] `L05-dom2-save` — Сохранить название Домена №2 в заметках
  - Он будет использоваться во всех последующих секциях.

## Урок 5 · Раздел 04 — Разворачиваем n8n на своём сервере и Домене №2

- [ ] `L05-dns-open` — Открыть DNS-настройки Домена №2 на Porkbun
  - Porkbun → My Domains → ваш Домен №2 → DNS
- [ ] `L05-dns-delete` — Удалить все дефолтные A-записи
  - Porkbun ставит по умолчанию «parked» записи — их надо снести.
- [ ] `L05-dns-a-root` — Добавить A-запись: @ → IP вашего VPS
  - Type: A , Host: оставить пустым (или @ ), Answer: ваш IP VPS (тот же, что в уроке 3). TTL: 600 (10 минут).
- [ ] `L05-dns-a-www` — Добавить A-запись: www → IP вашего VPS
  - Type: A , Host: www , Answer: тот же IP.
- [ ] `L05-dns-save` — Сохранить изменения
- [ ] `L05-dns-wait` — Подождать 5–30 минут, пока DNS распространится
  - Проверить можно командой dig ваш-домен-2.com или на сайте dnschecker.org
- [ ] `L05-n8n-vs-code` — Открыть VS Code с подключением к VPS (как в уроке 3)
  - Remote-SSH к серверу, «Режим бога» в Claude Code включён.
- [ ] `L05-n8n-docker-check` — Проверить что Docker установлен
  - Если Docker не установлен (урок 3 прошёл не до конца) — просто скажите Claude Code «установи Docker».
- [ ] `L05-n8n-install` — Запустить установку n8n через Claude Code
  - Отправьте промпт ниже в чат Claude Code. Замените <ВАШ_ДОМЕН_2> на реальный домен перед отправкой.
- [ ] `L05-n8n-wait` — Дождаться окончания установки (5–10 минут)
  - Claude Code напишет что-то вроде «n8n is running on https://...».
- [ ] `L05-n8n-save-basic` — Сохранить логин и пароль от BASIC_AUTH в менеджер паролей
  - Это первый слой защиты. Без него никто даже не увидит форму входа n8n.
- [ ] `L05-n8n-open-browser` — Открыть https://ваш-домен-2.com в браузере
  - Должен появиться запрос логина/пароля от BASIC_AUTH → вводите → дальше увидите форму регистрации n8n.

## Урок 5 · Раздел 05 — Первая авторизация в n8n + безопасность + 2FA + MCP

- [ ] `L05-reg-fill` — На форме регистрации ввести данные
  - — Email: ваш основной Gmail (из урока 1) — First name / Last name — Password: 16+ символов, сгенерированный менеджером паролей Не используйте «свой любимый пароль» — сгенерируйте новый в менеджере паролей.
- [ ] `L05-reg-save-pwd` — Сохранить пароль в менеджере паролей
  - Если потеряете — восстановить сложно, придётся через сервер лезть в базу n8n.
- [ ] `L05-reg-started` — Нажать «Get started»
  - После регистрации сразу попадёте в главный интерфейс n8n.
- [ ] `L05-2fa-settings` — Открыть Settings (иконка настроек слева внизу)
- [ ] `L05-2fa-personal` — Перейти в раздел Personal
- [ ] `L05-2fa-find` — Найти блок Two-factor authentication
- [ ] `L05-2fa-enable` — Нажать Enable
- [ ] `L05-2fa-app` — Открыть приложение-аутентификатор на телефоне
  - Google Authenticator.
- [ ] `L05-2fa-scan` — Отсканировать QR-код из n8n
- [ ] `L05-2fa-verify` — Ввести 6-значный код из приложения → Verify
- [ ] `L05-2fa-recovery` — Сохранить recovery codes в менеджер паролей
  - Это 8–10 одноразовых кодов для восстановления, если телефон потерян. Сохранить ОБЯЗАТЕЛЬНО . Бумажка в ящике стола тоже подойдёт.
- [ ] `L05-2fa-relogin` — Выйти из n8n и зайти заново
  - Проверяем, что 2FA реально включилась. При логине должен запросить 6-значный код.
- [ ] `L05-sec-users` — Settings → Users: убедитесь, что вы единственный пользователь
- [ ] `L05-sec-ext` — Settings → External Secrets: пока пусто
  - Используем в будущем для продвинутых сценариев.
- [ ] `L05-mcp-apikey` — Создать API Key в своём n8n
  - Settings → n8n API → Create API Key . Скопировать ключ — он понадобится в следующем шаге. Сохранить в менеджер паролей.
- [ ] `L05-mcp-install` — Выполнить команду установки MCP через терминал VS Code
  - Замените <ВАШ_ДОМЕН_2> и <ВАШ_N8N_API_KEY> на свои значения.
- [ ] `L05-mcp-restart` — Перезапустить Claude Code
  - Закройте и заново откройте сессию, чтобы подхватился новый MCP-сервер.
- [ ] `L05-mcp-check` — Проверить подключение
  - В чате Claude Code выполнить команду /mcp — должен появиться n8n-mcp в списке со статусом «connected» . Если нет — посмотрите логи через claude mcp list .
- [ ] `L05-mcp-test` — Тестовый промпт — убедиться, что Claude Code видит ваш n8n
  - Отправьте в Claude Code промпт ниже. Если вернулся список (или «у вас нет workflow» — если n8n пустой) — всё работает.

## Урок 5 · Раздел 06 — Подключение Google к n8n и OpenClaw

- [ ] `L05-gcp-open` — Открыть Google Cloud Console
  - Авторизуйтесь под тем Gmail, который хотите использовать. Это может быть ваш основной Gmail. console.cloud.google.com
- [ ] `L05-gcp-project` — Создать новый проект
  - Верхняя панель → кнопка с именем текущего проекта → New Project . — Имя проекта: например, OpenClaw Automations — Organization: оставить по умолчанию — Нажать Create , подождать 10–30 секунд.
- [ ] `L05-gcp-select` — Убедиться, что создаваемый проект выбран
  - Сверху в плашке должно быть имя нового проекта.
- [ ] `L05-gcp-apis` — Включить нужные API (последовательно 4 штуки)
  - Для каждого: вводите название в поиск → открываете карточку → Enable → ждёте подтверждения → идёте к следующему. — Google Calendar API — Google Drive API — Google Sheets API — Gmail API console.cloud.google.com/apis/library
- [ ] `L05-gcp-check` — Проверить список включённых API
  - Должны быть видны все 4 API в списке «Enabled APIs & Services». console.cloud.google.com/apis/dashboard
- [ ] `L05-oauth-open` — Шаг 1. Открыть Google Auth Platform
  - В левом меню Cloud Console → APIs & Services → OAuth consent screen (или напрямую Google Auth Platform ). Откроется мастер из 4 шагов: App Information → Audience → Contact Information → Finish . console.cloud.google.com/auth/overview
- [ ] `L05-oauth-basic` — Шаг 2. App Information — основная информация
  - — App name: OpenClaw Automations (или любое) — User support email: ваш Gmail Нажать Next .
- [ ] `L05-oauth-usertype` — Шаг 3. Audience — выбрать тип пользователей
  - — Если у вас обычный Gmail (@gmail.com) → выбрать External . Другой вариант Google не даст сохранить. — Если у вас Google Workspace (корпоративная почта) → выбрать Internal . Это сильно упрощает жизнь: не надо проходить верификацию, токены не протухают через 7 дней. Нажать Next .
- [ ] `L05-oauth-contact` — Шаг 4. Contact Information — контакты разработчика
  - — Developer contact email: ваш Gmail Нажать Next .
- [ ] `L05-oauth-summary` — Шаг 5. Finish — подтвердить и попасть в Overview
  - Поставить галочку согласия с Google API Services User Data Policy и нажать Continue . Вас вернёт на главную Google Auth Platform.
- [ ] `L05-oauth-testusers` — Шаг 6. Добавить Test users
  - В левом меню раздел Audience → промотать вниз до блока Test users → Add users → ввести свой Gmail → Save . Это КРИТИЧНО . В режиме Testing только добавленные сюда аккаунты смогут пройти OAuth-вход.
- [ ] `L05-path-a-status` — Шаг 1. Открыть Google Auth Platform → Audience
  - В левом меню Cloud Console.
- [ ] `L05-path-a-publish` — Шаг 2. Нажать Publish app
  - Кнопка находится в верхней части раздела Audience в блоке Publishing status (текущий статус — Testing ).
- [ ] `L05-path-a-confirm` — Шаг 3. Подтвердить публикацию
  - Google покажет диалог «Push to production?» — нажать Confirm .
- [ ] `L05-path-a-get-status` — Шаг 4. Получить сообщение о статусе
  - — Если scopes базовые (что мы и используем) — статус станет In production сразу. Refresh token становится бессрочным (не протухает через 7 дней). — Если scopes sensitive — Google попросит пройти верификацию. В этом случае либо проходите её, либо возвращайтесь на Путь Б.
- [ ] `L05-path-b-reminder` — Создать напоминание в календаре
  - «Обновить OAuth-токен Google для n8n и OpenClaw» — каждый понедельник в 10:00. Позже в секции 09 сделаем это через Cron Jobs OpenClaw автоматически.
- [ ] `L05-path-b-refresh` — Когда токен протухает — обновить
  - — Открыть n8n → Settings → Credentials → найти Google-креденшалы — Нажать на них → кнопка Sign in with Google → пройти заново — Повторить для всех Google credentials (Calendar, Drive, Sheets, Gmail) — Если такая же ошибка в OpenClaw — см. Часть 6 этой секции.
- [ ] `L05-cred-open` — Открыть Credentials
  - В левом меню APIs & Services → Credentials . console.cloud.google.com/apis/credentials
- [ ] `L05-cred-create` — Создать OAuth client ID
  - Нажать + Create credentials → OAuth client ID . — Application type: Web application — Name: n8n + OpenClaw
- [ ] `L05-cred-redirects` — Добавить Authorized redirect URIs
  - Сюда надо вписать ДВА URL — один для n8n, один для OpenClaw. Если завтра добавите третий сервис — вернётесь сюда же и добавите ещё.
- [ ] `L05-cred-create-btn` — Нажать Create
- [ ] `L05-cred-copy` — Скопировать Client ID и Client Secret
  - Появится окно с двумя строками. Сохраните обе в менеджер паролей прямо сейчас — потом Client Secret скрывается.
- [ ] `L05-cred-save` — Сохранить в заметки: Client ID и Client Secret
  - — Client ID: xxxx.apps.googleusercontent.com — Client Secret: GOCSPX-xxxxx
- [ ] `L05-n8n-cred-new` — Открыть n8n → Settings → Credentials → + New credential
- [ ] `L05-n8n-cal-start` — Начать с Google Calendar
  - В поиске: Google Calendar OAuth2 API . Открыть → Continue .
- [ ] `L05-n8n-cal-fill` — Заполнить форму
  - — Client ID: вставить из Части 4 — Client Secret: вставить из Части 4
- [ ] `L05-n8n-cal-signin` — Нажать Sign in with Google
  - — Откроется окно Google OAuth — Выбрать ваш Gmail (тот, что добавлен в Test users или любой, если вы в Production) — Если появится предупреждение «Google hasn't verified this app» — нажать Advanced → Go to OpenClaw Automations (unsafe) . Это нормально для ваших собственных приложений. — Разрешить все запрошенные доступы
- [ ] `L05-n8n-cal-connected` — Вернуться в n8n — должна появиться галочка «Account connected»
- [ ] `L05-n8n-cal-save` — Сохранить credential с именем Google Calendar → Save
- [ ] `L05-n8n-drive` — Повторить для Google Drive
  - + New credential → Google Drive OAuth2 API . Те же Client ID и Secret. Sign in with Google . Имя: Google Drive .
- [ ] `L05-n8n-sheets` — Повторить для Google Sheets
  - Google Sheets OAuth2 API . Те же Client ID и Secret. Имя: Google Sheets .
- [ ] `L05-n8n-gmail` — Повторить для Gmail
  - Gmail OAuth2 . Те же Client ID и Secret. Имя: Gmail .
- [ ] `L05-n8n-check-list` — Проверить список credentials
  - В Settings → Credentials должно быть 4 Google-подключения. У каждого — зелёная галочка.
- [ ] `L05-test-new-wf` — Создать новый workflow
  - Главная страница n8n → + Create Workflow .
- [ ] `L05-test-manual-trigger` — Добавить ноду Manual Trigger
- [ ] `L05-test-cal-node` — Добавить ноду Google Calendar
  - — Credential: выбрать Google Calendar — Resource: Event — Operation: Create — Calendar: выбрать ваш основной календарь — Start: сегодня + 1 час — End: сегодня + 2 часа — Summary: Test из n8n
- [ ] `L05-test-exec` — Нажать Execute workflow
- [ ] `L05-test-verify` — Открыть Google Calendar и проверить
  - Событие Test из n8n должно появиться.
- [ ] `L05-oc-vps-connect` — Подключиться к VPS через VS Code (Remote-SSH)
- [ ] `L05-oc-install-skills` — Установить Google-скиллы через Claude Code
  - Отправьте промпт ниже в чат Claude Code.
- [ ] `L05-oc-set-creds` — Передать Client ID/Secret Claude Code для настройки
  - Отправьте промпт ниже. Замените <ВСТАВЬТЕ_...> на реальные значения перед отправкой.
- [ ] `L05-oc-oauth-pass` — Пройти OAuth по ссылке, которую выдал Claude Code
  - Откроется страница Google → выбрать Gmail → разрешить доступы → вернуться обратно. Если увидите предупреждение «Google hasn't verified» → Advanced → Go to OpenClaw Automations .
- [ ] `L05-oc-test-cal-send` — Telegram-боту: «Создай событие в моём календаре на завтра в 15:00 с названием "Тест OpenClaw + Google"»
- [ ] `L05-oc-test-cal-verify` — Открыть Google Calendar — событие должно появиться
- [ ] `L05-oc-test-drive-send` — Telegram-боту: «Создай в моём Google Drive новую папку "OpenClaw Test"»
- [ ] `L05-oc-test-drive-verify` — Открыть Google Drive — папка должна появиться
- [ ] `L05-oc-test-sheets-send` — Telegram-боту: «Создай новую Google Sheets таблицу "Тест OpenClaw" с колонками Дата, Операция, Сумма»
- [ ] `L05-oc-test-sheets-verify` — Проверить в Google Sheets
- [ ] `L05-oc-test-gmail-send` — Telegram-боту: «Покажи мне последние 3 непрочитанных письма из Gmail»
- [ ] `L05-oc-test-gmail-verify` — Проверить, что бот показал реальные письма
- [ ] `L05-final-n8n-cal` — n8n + Google Calendar — тестовое событие создано
- [ ] `L05-final-n8n-drive` — n8n + Google Drive — тестовая папка создана
- [ ] `L05-final-n8n-sheets` — n8n + Google Sheets — тестовая таблица создана
- [ ] `L05-final-n8n-gmail` — n8n + Gmail — тестовое письмо отправлено / прочитано
- [ ] `L05-final-oc-cal` — OpenClaw + Google Calendar — через бота создано событие
- [ ] `L05-final-oc-drive` — OpenClaw + Google Drive — через бота создана папка
- [ ] `L05-final-oc-sheets` — OpenClaw + Google Sheets — через бота создана таблица
- [ ] `L05-final-oc-gmail` — OpenClaw + Gmail — через бота прочитана почта

## Урок 5 · Раздел 07 — OpenClaw → n8n + уведомления от n8n в Telegram

- [ ] `L05-hook-create-wf` — В n8n создать новый workflow: From OpenClaw — universal webhook
- [ ] `L05-hook-add-webhook` — Добавить ноду Webhook
  - — HTTP Method: POST — Path: оставить по умолчанию (n8n сгенерирует случайный путь) — Respond: Immediately
- [ ] `L05-hook-copy-url` — Скопировать Test URL вебхука
  - Выглядит как https://n8n.ваш-домен-2.com/webhook-test/xxxxxx
- [ ] `L05-hook-add-set` — Добавить ноду Set — чтобы видеть, что прилетело
  - Добавить поле received_message = {{ $json.message }}
- [ ] `L05-hook-save` — Сохранить workflow
- [ ] `L05-hook-activate` — Активировать workflow (правый верхний угол — тумблер Active )
  - Как только активируете — Test URL заменится на Production URL, скопируйте его.
- [ ] `L05-hook-remember` — Сказать Claude Code / OpenClaw запомнить webhook
  - Отправьте промпт ниже в чат агента.
- [ ] `L05-hook-test` — Протестировать
  - Написать боту: «Отправь в n8n сообщение: Привет, я OpenClaw». В n8n открыть выполнения ( Executions ) — должно появиться новое с вашим сообщением.
- [ ] `L05-tg-cred` — В n8n создать credential для Telegram
  - Settings → Credentials → + New credential → Telegram API . — Access Token: вставить токен вашего бота (тот же, что в OpenClaw) — Name: My OpenClaw Bot → Save
- [ ] `L05-tg-node` — В workflow добавить ноду Telegram
  - — Credential: My OpenClaw Bot — Resource: Message — Operation: Send Message — Chat ID: ваш Telegram Chat ID Как узнать свой Chat ID — написать боту /start , потом в адресе https://api.telegram.org/bot<TOKEN>/getUpdates найти chat":{"id":...} . — Text: например, 🤖 Привет от n8n! Время: {{ $now }}
- [ ] `L05-tg-exec` — Запустить workflow вручную Execute workflow
- [ ] `L05-tg-verify` — Проверить Telegram — должно прийти сообщение от бота

## Урок 5 · Раздел 09 — Cron Jobs в OpenClaw

- [ ] `L05-cron-show` — Сказать Claude Code показать существующие Cron Jobs
- [ ] `L05-cron-create-morning` — Отправить промпт Claude Code
- [ ] `L05-cron-test-morning` — Протестировать принудительным запуском

## Урок 5 · Раздел 10 — Готовый сценарий: встреча → напоминание → финансы

- [ ] `L05-scen-sheets` — Подготовка: создать таблицу финансов
  - Google Sheets → новый файл Финансы 2026 . Лист Консультации с колонками: Дата, Время, Ученик, Тема, Сумма, Статус.
- [ ] `L05-scen-reminders` — Часть 1. Создать напоминания в n8n
- [ ] `L05-scen-webhook` — Часть 2. Webhook для записи платежа
- [ ] `L05-scen-oc-webhook` — Часть 3. Настроить OpenClaw на вызов webhook
- [ ] `L05-scen-friday` — Часть 4. Пятничная сводка через Cron Job
- [ ] `L05-scen-test` — Часть 5. Тест полного цикла
  - — Создать в календаре «Консультации» тестовое событие через 5 минут (5 минут длительность) — Проверить: пришло ли напоминание — Дождаться окончания события — Через ~15 мин получить вопрос от бота «Сумма платежа?» — Ответить: «10 000 от Тест Тестова за тест» — Проверить Google Sheets → строка появилась — (Опционально) запустить Cron Job вручную: «запусти Weekly Finance Summary сейчас»

## Урок 5 · Раздел 12 — Практика: свой сценарий под свой бизнес

- [ ] `L05-prac-niche` — Выбрать нишу из банка идей ниже (или свою)
- [ ] `L05-prac-describe` — Описать сценарий простым текстом в заметках
  - Шаг за шагом, что должно происходить.
- [ ] `L05-prac-split` — Разметить — что делает n8n, что делает Cron Job в OpenClaw
- [ ] `L05-prac-build` — Собрать сценарий вайб-кодингом через Claude Code и Telegram-бот
- [ ] `L05-prac-test` — Протестировать полный цикл
- [ ] `L05-prac-bring` — Принести рабочий сценарий на онлайн-встречу 5 для разбора

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 01 — Документация OpenClaw — как ориентироваться и искать ответы самому · Раздел 02 — Скилл openclaw-docs — вся документация внутри Claude Code

- [ ] `L06-urok6-part1-ch01-verify-skill` — Проверить, что скилл openclaw-docs стоит в Claude Code
  - Откройте Claude Code и отправьте промпт ниже. Если агент подтверждает, что скилл openclaw-docs установлен и активен — всё готово, переходите к следующему разделу. Если скилла нет — поставьте его по инструкции ниже (это тот же самый пункт из Урока 3).

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 09 — Шаг 1. Достаём Gateway-токен с сервера

- [ ] `L06-urok6-part1-ch02-get-token` — Подключиться к серверу и достать токен
  - Подключитесь к серверу через VS Code Remote-SSH (или обычным ssh в локальном терминале) и выполни команду ниже. На экран выведется длинная строка — это и есть токен. Скопируйте его в буфер обмена.
- [ ] `L06-urok6-part1-ch02-save-token-local` — Сохранить токен локально на компьютере
  - Создайте папку ~/.openclaw/ у себя на компьютере и положи туда файл gateway.token с содержимым из предыдущего шага. Выберите команду для своей ОС.
- [ ] `L06-urok6-part1-ch02-verify-token` — Проверить, что токен сохранился
  - Выберите команду для своей ОС — должно вывестись содержимое файла (ваш токен).

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 10 — Шаг 2. Узнаём WebSocket-адрес вашего Gateway

- [ ] `L06-urok6-part1-ch02-check-gateway-url` — Проверить, что Gateway доступен
  - Подключитесь к серверу по SSH и проверьте, что Gateway работает на порту 18789.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 11 — Шаг 3. Создаём .mcp.json в папке OpenClaw

- [ ] `L06-urok6-part1-ch02-create-mcp-json` — Попросить Claude Code создать .mcp.json с openclaw MCP
  - В промпте ниже замените <WSS_URL> на свой WebSocket-адрес (например wss://openclaw.ваш-домен.com:18789 ). Путь к токену оставляем как есть — мы же его сохранили в Шаге 1.
- [ ] `L06-urok6-part1-ch02-replace-wss-url` — Заменить <WSS_URL> на свой реальный адрес Gateway
  - Откройте созданный .mcp.json и руками замените <WSS_URL> на свой реальный WebSocket-адрес из Шага 2. Например: wss://openclaw.example.com:18789 . Сохраните файл.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 12 — Шаг 4. Отключаем messages_send — Claude Code не пишет в каналы от лица бота

- [ ] `L06-urok6-part1-ch02-disable-messages-send` — Попросить Claude Code обновить .mcp.json — добавить disabledTools
  - Отправьте промпт ниже Claude Code. Он откроет .mcp.json и добавит блок disabledTools в секции openclaw .

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 14 — Шаг 6. Подключаем Context7 — добавляем в .mcp.json

- [ ] `L06-urok6-part1-ch02-check-node` — Проверить, что Node.js установлен
  - Команда работает одинаково на Mac и Windows.
- [ ] `L06-urok6-part1-ch02-add-context7` — Попросить Claude Code добавить Context7 в .mcp.json
  - Отправьте промпт ниже Claude Code. Он откроет .mcp.json и добавит блок про Context7.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 15 — Шаг 7. Перезапускаем сессию Claude Code и проверяем

- [ ] `L06-urok6-part1-ch02-restart-claude` — Закрыть текущую сессию Claude Code и открыть новую в той же папке OpenClaw
  - Это нужно, чтобы Claude Code подхватил .mcp.json и установил соединения с openclaw MCP и Context7.
- [ ] `L06-urok6-part1-ch02-verify-mcp-connected` — Проверить, что MCP-серверы подключились
  - Отправьте Claude Code короткий промпт ниже. Он покажет, какие MCP-инструменты ему доступны.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 02 — MCP OpenClaw — прокачиваем Claude Code до режима БОГА · Раздел 16 — Тестируем «режим БОГА» на трёх реальных кейсах

- [ ] `L06-urok6-part1-ch02-test-1-audit` — Тест №1 — Аудит работы агента (используем openclaw MCP)
  - Claude Code через openclaw MCP читает реальные диалоги вашего агента и даёт сводку. Это работа Слоя 3 — глаза/уши.
- [ ] `L06-urok6-part1-ch02-test-2-soul-edit` — Тест №2 — Симуляция правки SOUL (используем все 3 слоя)
  - Claude Code берёт «плохой» диалог из истории, проверяет документацию OpenClaw по SOUL.md, предлагает правку и показывает, как изменился бы ответ. Это работа всех трёх слоёв вместе.
- [ ] `L06-urok6-part1-ch02-test-3-context7` — Тест №3 — Написать скилл с актуальной либой (используем Context7)
  - Просим Claude Code написать скилл, использующий внешнюю библиотеку. Context7 подтянет актуальную доку, и код будет рабочий.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 21 — Шаг 1. Создаём отдельного Telegram-бота через BotFather

- [ ] `L06-urok6-part1-ch03-create-tg-bot` — Создать нового Telegram-бота через @BotFather
  - Откройте @BotFather в Telegram → отправьте /newbot → задайте отображаемое имя (например Claude Engineer ) → задайте уникальный username, обязательно заканчивающийся на bot → скопируйте токен из ответа BotFather. Токен выглядит так: 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11 .
- [ ] `L06-urok6-part1-ch03-get-my-tg-id` — Узнать свой Telegram User ID
  - Это понадобится для allowlist в Шаге 13. Откройте @userinfobot в Telegram → отправьте любое сообщение → бот ответит вашим ID (число типа 123456789 ). Сохраните его рядом с токеном бота.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 22 — Шаг 2. Настраиваем SSH-конфиг на компьютере

- [ ] `L06-urok6-part1-ch03-ssh-config` — Создать или дополнить ~/.ssh/config на компьютере
  - Откройте файл ~/.ssh/config на компьютере (создайте если нет) и добавьте два блока ниже. Замените <IP> , <PORT> и путь к ключу на свои значения. Юзер claude-bot мы создадим в Шаге 3.
- [ ] `L06-urok6-part1-ch03-test-ssh-root` — Проверить SSH-подключение под root
  - Команда выполняется в локальном терминале на компьютере. Должен увидеть root .

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 23 — Шаг 3. Создаём юзера claude-bot на сервере

- [ ] `L06-urok6-part1-ch03-connect-as-root` — Подключиться к серверу под root через VS Code Remote-SSH
  - В VS Code: Cmd+Shift+P (Mac) / Ctrl+Shift+P (Windows) → Remote-SSH: Connect to Host → выберите openclaw-root . Откройте Terminal в VS Code — он будет на сервере под root.
- [ ] `L06-urok6-part1-ch03-create-user` — Создать юзера claude-bot и добавить в sudo
  - В терминале сервера (под root) выполни команду ниже. Команда passwd попросит задать пароль — придумай надёжный, сохраните в безопасное место.
- [ ] `L06-urok6-part1-ch03-copy-ssh-key` — Разрешить SSH-вход новому юзеру по ключу
  - Скопируйте авторизованные SSH-ключи root-а в домашнюю папку нового юзера, чтобы заходить по тому же ключу.
- [ ] `L06-urok6-part1-ch03-test-ssh-bot` — Проверить SSH-подключение под claude-bot
  - В локальном терминале на компьютере выполни команду — должен увидеть claude-bot .

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 24 — Шаг 4. Даём юзеру claude-bot доступ к файлам OpenClaw-агента

- [ ] `L06-urok6-part1-ch03-chown-openclaw` — Передать владение /root/.openclaw/ юзеру claude-bot
  - В терминале сервера под root . После выполнения папка останется в /root/ , но все файлы внутри будут принадлежать claude-bot .
- [ ] `L06-urok6-part1-ch03-verify-chown` — Проверить, что владелец сменился
  - Должен увидеть claude-bot claude-bot рядом с .openclaw .

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 25 — Шаг 5. Подключаемся под claude-bot для основной работы

- [ ] `L06-urok6-part1-ch03-connect-as-bot` — Подключиться к серверу под claude-bot через VS Code Remote-SSH
  - Cmd+Shift+P / Ctrl+Shift+P → Remote-SSH: Connect to Host → выберите openclaw-bot . Откройте Terminal в VS Code — он будет на сервере под claude-bot . Все следующие команды выполняем здесь.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 26 — Шаг 6. Устанавливаем Node.js (если нет) и Bun

- [ ] `L06-urok6-part1-ch03-check-node` — Проверить версию Node.js
  - Если выводит v18.x.x или новее — пропусти следующий шаг (установка Node.js). Если ниже или команда не найдена — переходи к установке.
- [ ] `L06-urok6-part1-ch03-install-node` — Установить Node.js 20 LTS (только если нужно)
  - Команда требует sudo (юзер claude-bot в группе sudo). Введёт пароль claude-bot , который вы задали в Шаге 3.
- [ ] `L06-urok6-part1-ch03-install-bun` — Установить Bun (требование Telegram-плагина)
  - Установка Bun не требует sudo — он ставится в домашнюю папку юзера. После установки добавляем в PATH.
- [ ] `L06-urok6-part1-ch03-verify-bun` — Проверить, что Bun установлен
  - Должен вывести версию Bun.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 27 — Шаг 7. Устанавливаем Claude Code прямо на сервере

- [ ] `L06-urok6-part1-ch03-setup-npm-prefix` — Настроить npm user-prefix и добавить в PATH
  - Создаём папку для глобальных пакетов и прописываем её в PATH.
- [ ] `L06-urok6-part1-ch03-install-claude-code` — Установить Claude Code CLI
  - Без sudo — пакет ставится в домашнюю папку юзера.
- [ ] `L06-urok6-part1-ch03-verify-claude` — Проверить, что Claude Code установлен
  - Должен вывести путь до бинарника и версию.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 28 — Шаг 8. Авторизуем Claude Code прямо на сервере (OAuth device flow)

- [ ] `L06-urok6-part1-ch03-claude-login` — Запустить claude и пройти OAuth-авторизацию
  - Запустите команду claude в терминале сервера. На первом запуске покажет ссылку и device-код. Откройте ссылку в браузере на компьютере, войдите в claude.ai, введите код. После подтверждения в терминале сервера появится Welcome back! — значит авторизация прошла.
- [ ] `L06-urok6-part1-ch03-exit-claude-first` — Выйти из Claude Code (Ctrl+D или /exit)
  - Авторизация прошла, токен сохранён в ~/.claude/ . Сейчас выходим из сессии — дальше будем работать с рабочей папкой.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 29 — Шаг 9. Переносим .mcp.json на сервер и ставим боту скилл openclaw-docs

- [ ] `L06-urok6-part1-ch03-create-bot-folder` — Создать на сервере папку под рабочее окружение бота
  - В терминале сервера (под claude-bot) — создаём папку, в которую перенесём OpenClaw.
- [ ] `L06-urok6-part1-ch03-scp-openclaw` — Скопировать локальную папку OpenClaw на сервер по SCP
  - Команда выполняется в локальном терминале на компьютере. Замените путь в начале команды на полный путь к вашей локальной папке OpenClaw (где лежит .mcp.json из Главы 02). Выберите команду для своей ОС.
- [ ] `L06-urok6-part1-ch03-verify-openclaw-server` — Проверить, что папка появилась на сервере
  - В терминале сервера — должен увидеть .mcp.json .
- [ ] `L06-urok6-part1-ch03-scp-skill-docs` — Скопировать скилл openclaw-docs на серверного бота по SCP
  - Команда выполняется в локальном терминале на компьютере. Она создаёт на сервере папку скиллов и копирует туда скилл openclaw-docs (тот, что вы поставили себе в Уроке 3 — он лежит в ~/.claude/skills/openclaw-docs ). Выберите команду для своей ОС.
- [ ] `L06-urok6-part1-ch03-verify-skill-server` — Проверить, что скилл появился на сервере
  - В терминале сервера — должен увидеть папку openclaw-docs с файлом SKILL.md и подпапкой reference/ .

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 30 — Шаг 10. Настраиваем gateway-токен для MCP openclaw

- [ ] `L06-urok6-part1-ch03-find-gateway-token` — Найти gateway-токен в конфиге OpenClaw
  - В терминале сервера. Поиск идёт в файле /root/.openclaw/openclaw.json (теперь принадлежит claude-bot). Скопируйте значение поля token в секции gateway.
- [ ] `L06-urok6-part1-ch03-create-gateway-token` — Создать ~/.openclaw/gateway.token с найденным значением
  - Замените ВСТАВЬТЕ_ТОКЕН на реальный токен из предыдущего шага. Команда создаст папку, файл и выставит права 600 (только владелец).
- [ ] `L06-urok6-part1-ch03-verify-gateway-token` — Проверить, что токен сохранён
  - Должен вывести содержимое токена.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 31 — Шаг 11. Проверяем подключение MCP openclaw + context7

- [ ] `L06-urok6-part1-ch03-cd-openclaw-folder` — Зайти в рабочую папку и запустить Claude Code
  - Claude Code должен запускаться из папки , где лежит .mcp.json — иначе MCP не подхватятся.
- [ ] `L06-urok6-part1-ch03-verify-mcp` — Проверить статус MCP-серверов
  - Внутри сессии Claude Code отправьте команду — должен увидеть openclaw ✔ connected и context7 ✔ connected . Если что-то failed — проверьте токен в Шаге 10 и пути в .mcp.json .

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 32 — Шаг 12. Устанавливаем Telegram-плагин и конфигурируем токен

- [ ] `L06-urok6-part1-ch03-add-marketplace` — Добавить маркетплейс плагинов
  - Внутри открытой сессии Claude Code. Если уже добавлен — будет соответствующее сообщение.
- [ ] `L06-urok6-part1-ch03-install-tg-plugin` — Установить Telegram-плагин
  - На вопрос про scope выбирай User scope .
- [ ] `L06-urok6-part1-ch03-reload-plugins` — Перезагрузить плагины
  - Чтобы команда /telegram:configure стала доступна.
- [ ] `L06-urok6-part1-ch03-configure-tg` — Сконфигурировать токен бота
  - Замените <ваш_токен> на реальный токен из Шага 1.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 33 — Шаг 13. Закрываем доступ через allowlist по Telegram User ID

- [ ] `L06-urok6-part1-ch03-allow-self` — Добавить свой Telegram User ID в allowlist
  - Внутри сессии Claude Code. Замените <ваш_id> на свой Telegram User ID из @userinfobot .
- [ ] `L06-urok6-part1-ch03-allowlist-policy` — Включить allowlist-режим
  - Теперь только пользователи в allowlist смогут писать боту. Все остальные — silent-drop.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 34 — Шаг 14. Запускаем Claude Code в tmux в режиме channels

- [ ] `L06-urok6-part1-ch03-check-tmux` — Проверить, что tmux установлен
  - Должен вывести версию. Если команда не найдена — установите: sudo apt install -y tmux .
- [ ] `L06-urok6-part1-ch03-tmux-new` — Создать новую tmux-сессию claude-bot
  - Команда создаст сессию и сразу войдёт в неё. После этого вы в новом терминале (внутри tmux).
- [ ] `L06-urok6-part1-ch03-start-channels` — Запустить Claude Code с Telegram-каналом
  - Внутри tmux-сессии зайдите в рабочую папку и запустите Claude Code в режиме channels.
- [ ] `L06-urok6-part1-ch03-tmux-detach` — Отсоединиться от tmux-сессии (detach)
  - Не закрывай терминал просто так — это убьёт процесс. Правильно: нажмите Ctrl+B , затем отпусти и нажмите d . Увидите [detached] — Claude Code остался работать в фоне.
- [ ] `L06-urok6-part1-ch03-verify-tmux` — Проверить, что tmux-сессия живёт
  - Должен увидеть строку с claude-bot . Это значит, что бот работает в фоне.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 35 — Тест №1. С телефона: найдите и проанализируй SOUL.md главного агента

- [ ] `L06-urok6-part1-ch03-test-soul` — Отправить боту запрос на анализ SOUL.md (без правок)
  - Скопируйте промпт ниже и отправьте боту в Telegram. Бот найдёт SOUL.md, проанализирует структуру и предложит правки. Важно: в промпте написано «ничего не меняй» — это безопасно для теста.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 36 — Тест №2. С телефона: перезапустите Gateway и проверьте health

- [ ] `L06-urok6-part1-ch03-test-gateway` — Отправить боту запрос на перезапуск Gateway
  - Бот сначала объяснит план (как именно перезапустит, какие риски), потом спросит подтверждение. Это безопасно — он сам предупредит «через 3 секунды отвечу после рестарта».

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 37 — Тест №3. С телефона: напишите скилл с актуальной либой через Context7

- [ ] `L06-urok6-part1-ch03-test-context7` — Попросить бота написать скилл с актуальной либой
  - Бот через Context7 подтянет свежую доку, через MCP openclaw найдёт где сохранять скиллы, и сгенерирует рабочий код.

## Урок 6 · ЧАСТЬ 1 · ГЛАВА 03 — Claude Code в Telegram — мобильный инженер в кармане · Раздел 38 — Шаг 15. Настраиваем автозапуск tmux-сессии при reboot сервера

- [ ] `L06-urok6-part1-ch03-create-systemd` — Создать systemd-юнит для автозапуска tmux-сессии
  - Команда требует sudo. Создаст файл /etc/systemd/system/claude-bot.service с настройкой автозапуска.
- [ ] `L06-urok6-part1-ch03-enable-systemd` — Включить автозапуск сервиса
  - Сначала останавливаем текущую tmux-сессию (если запущена), потом включаем сервис, потом стартуем через systemd.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 44 — Шаг 1. Скачиваем Obsidian на компьютер

- [ ] `L06-urok6-part2-ch01-download-obsidian` — Скачать и установить Obsidian на компьютер
  - Зайдите на obsidian.md → большая кнопка Get Obsidian → выберите версию для своей ОС (Mac или Windows) → установите. Бесплатно, без регистрации.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 45 — Шаг 2. Создаём vault со структурой папок

- [ ] `L06-urok6-part2-ch01-create-vault` — Создать vault через Obsidian → Create new vault
  - Откройте Obsidian → Create new vault . Имя — например second-brain . Расположение — где удобно (например, ~/Documents/second-brain ). Нажмите Create . Vault создан.
- [ ] `L06-urok6-part2-ch01-create-folders` — Создать внутри vault 4 подпапки: raw, wiki, daily, outputs
  - В Obsidian слева — правый клик по vault → New folder . Создайте поочерёдно: raw , wiki , daily , outputs .
- [ ] `L06-urok6-part2-ch01-create-gitkeep-files` — Создать файл .gitkeep в каждой из 4 папок (raw, wiki, daily, outputs)
  - ⚠️ Важно — иначе все следующие шаги сломаются. Git не отслеживает пустые папки. Если папки пустые — они не уедут на GitHub при первом push, и агенты на сервере получат vault без структуры. Решение: в каждой из 4 папок создаём пустой служебный файл .gitkeep . Это стандартная практика — точка в начале делает файл скрытым, он не мешается, но фиксирует папку в git. Как сделать через Obsidian: 1. В левой панели Obsidian → правый клик по папке raw → New note 2. Имя файла введите точно так: .gitkeep (с точкой в начале, без .md ) 3. Когда Obsidian спросит «создать файл без расширения?» — соглашайся 4. Файл создан, ничего внутрь не пиши 5. Повтори для папок wiki , daily , outputs Альтернатива через терминал (если правый клик не работает или Obsidian не даёт создать файл с точкой):
- [ ] `L06-urok6-part2-ch01-create-index` — Создать в корне vault файл INDEX.md
  - Правый клик по корню vault → New note → имя INDEX . Внутрь пока ничего не пиши — это будет «оглавление» ваших знаний, агенты сами начнут его наполнять.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 46 — Шаг 3. Создаём CLAUDE.md с правилами для агентов

- [ ] `L06-urok6-part2-ch01-create-claudemd` — Создать в корне vault файл CLAUDE.md с промптом-правилами
  - В корне vault создайте файл CLAUDE.md и вставьте содержимое из промпт-блока ниже. Это «инструкция по эксплуатации» вашего второго мозга для всех AI-агентов.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 47 — Шаг 4. Устанавливаем плагин Obsidian Git

- [ ] `L06-urok6-part2-ch01-enable-community-plugins` — Включить Community plugins в настройках Obsidian
  - Settings (⚙️ внизу слева) → Community plugins → большая кнопка Turn on community plugins . Подтвердите — Obsidian предупредит, что коммьюнити-плагины делают сторонние разработчики.
- [ ] `L06-urok6-part2-ch01-install-obsidian-git` — Установить плагин Obsidian Git
  - В том же окне настроек: Browse → в поиске введите просто Git (без слова «Obsidian», иначе поиск выдаст не тот плагин — GitHobs) → в списке найдите плагин с названием Git (первая карточка слева вверху, с ~2.5M скачиваний), автор Vinzent, (Denis Olehov) → нажмите Install → потом Enable .

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 48 — Шаг 5. Создаём приватный GitHub-репо для vault

- [ ] `L06-urok6-part2-ch01-create-repo` — Создать новый приватный репозиторий на GitHub
  - Зайдите на github.com/new → имя репо: second-brain (или ваше) → выберите Private → НЕ ставь галочки про README, gitignore, license (они помешают first push) → Create repository .
- [ ] `L06-urok6-part2-ch01-copy-repo-url` — Скопировать SSH-URL репозитория
  - На странице созданного репо — кнопка SSH вверху → копируй URL вида git@github.com:<username>/second-brain.git . Сохраните его — пригодится в следующих шагах.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 49 — Шаг 6. Привязываем локальный vault к GitHub-репо

- [ ] `L06-urok6-part2-ch01-init-git` — Инициализировать git в папке vault и сделать первый push
  - Откройте локальный терминал на компьютере (Terminal на Mac, PowerShell на Windows). Замените ~/Documents/second-brain на путь к вашему vault'у, и URL — на свой из Шага 5.
- [ ] `L06-urok6-part2-ch01-verify-push` — Проверить, что vault появился на GitHub
  - Обновите страницу вашего репо на GitHub — должны появиться все файлы и папки vault'а: CLAUDE.md , INDEX.md , папки raw/ , wiki/ , daily/ , outputs/ .

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 50 — Шаг 7. Настраиваем автоматическую синхронизацию в плагине Git

- [ ] `L06-urok6-part2-ch01-configure-obsidian-git` — Включить автоматическую синхронизацию в плагине Git
  - 1. Откройте настройки плагина: Settings (⚙️ внизу слева) → в левом меню найдите Git (в разделе «Community plugins») → кликни. 2. Найдите секцию Automatic (в самом верху). В ней: — Auto commit-and-sync interval (minutes) → впишите 5 . Это главное поле — каждые 5 минут плагин будет автоматически делать commit + pull + push одним действием . — Auto pull interval (minutes) → впишите 5 . Каждые 5 минут будет тянуть свежие изменения с сервера. — Auto commit-and-sync after stopping file edits → включите тумблер. Автокоммит сработает только когда вы перестанете печатать. Без этого плагин может коммитить прямо во время набора — раздражает. 3. Прокрути ниже до секции Commit-and-sync . Там убедитесь, что включены: — Push on commit-and-sync → должно быть ON (по умолчанию включено) — Pull on commit-and-sync → должно быть ON (по умолчанию включено) Это значит, что одно действие «commit-and-sync» делает сразу commit → pull → push . Поэтому отдельное Auto push interval вам НЕ нужно — оставьте его 0 . 4. Закройте настройки — они сохраняются автоматически.
- [ ] `L06-urok6-part2-ch01-verify-autosync` — Проверка: убедиться, что автосинхронизация реально работает
  - Прежде чем идти на сервер — проверим, что плагин действительно пушит на GitHub. 1. Откройте свою заметку INDEX.md в Obsidian → допиши любой текст (например, «тест автосинка»). 2. Жди 5 минут (или сделайте ручной push сразу: нажмите Cmd+P → введите Git: Commit-and-sync → Enter). 3. Откройте свой репо на GitHub → вкладка Commits ( https://github.com/<ваш-username>/second-brain/commits/main ). 4. Должен появиться новый коммит с сообщением вида: vault backup: 2026-04-30 22:30:15 (либо ваше кастомное сообщение, если меняли в настройках). 5. Кликни по этому коммиту → убедитесь, что внутри есть ваша правка INDEX.md .

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 01 — Obsidian-vault + GitHub — ставим инфраструктуру «второго мозга» · Раздел 51 — Шаг 8. На сервере — клонируем vault через Claude Code-бот в Telegram

- [ ] `L06-urok6-part2-ch01-bot-context` — Узнать у бота в Telegram его контекст (юзер, home, ключи)
  - Откройте Telegram → отправьте Claude Code-боту промпт ниже. Бот ответит чем-то вроде: «Я работаю под юзером claude-bot , home — /home/claude-bot , SSH-ключей к GitHub пока нет, папки obsidian-vault нет» . ✅ Запомните эти данные — они понадобятся в следующих подшагах.
- [ ] `L06-urok6-part2-ch01-server-generate-key` — Попросить бота сгенерировать SSH-ключ и показать публичную часть
  - Отправьте боту промпт ниже. Замените <ваш_юзер> на реальный (тот, что бот выдал в Подшаге 1, обычно claude-bot ). Бот сгенерирует ключ и выведет публичную часть — длинная строка вида ssh-ed25519 AAAA... claude-bot@server . Скопируйте её в буфер .
- [ ] `L06-urok6-part2-ch01-add-deploy-key` — Добавить публичный ключ как Deploy Key в GitHub-репо
  - 1. Откройте: https://github.com/<ваш-username>/second-brain/settings/keys/new (замените <ваш-username> на свой) 2. Title: claude-bot server (или любая метка) 3. Key: вставьте публичный ключ из буфера ( Cmd+V ) 4. ⚠️ ОБЯЗАТЕЛЬНО поставьте галку Allow write access — без неё бот не сможет пушить 5. Жмите Add key
- [ ] `L06-urok6-part2-ch01-bot-clone-vault` — Возвращайся в Telegram → отправить боту промпт на клонирование
  - Замените <ваш-github-username> на свой реальный. Бот настроит SSH-config, проверит связь с GitHub, склонирует vault, настроит git identity и сделает тестовый push — всё сам, после каждого шага показывая результат.
- [ ] `L06-urok6-part2-ch01-verify-folder-structure` — Страховка: проверить и при необходимости создать недостающие папки на сервере
  - ⚠️ Если вы проходили Шаг 45 в старой версии гайда (без .gitkeep ) — на сервер приехал vault без папок wiki/ , daily/ , outputs/ . Сейчас это починим. Отправьте Claude Code-боту команду ниже (или выполни сам через SSH под claude-bot ):
- [ ] `L06-urok6-part2-ch01-verify-on-mac` — Открыть Obsidian на компьютере и проверить, что заметка пришла
  - Откройте Obsidian на компьютере → Cmd+P → введите Git: Pull → Enter. В папке raw/ должна появиться заметка test-from-server.md .

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 02 — Подключаем Claude Code и OpenClaw — оба агента в одном «втором мозге» · Раздел 53 — Шаг 1. Подключаем Claude Code-бот к vault'у

- [ ] `L06-urok6-part2-ch02-bot-paths` — Спросить у бота актуальные пути (whoami, $HOME, AGENTS.md, vault)
  - Откройте Telegram → отправьте Claude Code-боту промпт ниже. Бот ответит факты — например: юзер claude-bot , AGENTS.md в ~/claude-code-bot/OpenClaw/AGENTS.md , vault в ~/obsidian-vault/ . Сохраните эти пути — они понадобятся.
- [ ] `L06-urok6-part2-ch02-update-agents-md` — Отправить боту промпт на обновление AGENTS.md
  - Бот сам допишет новый блок правил в свой AGENTS.md — с защитой от git-конфликтов ( git pull --rebase перед push) и разделением зон ответственности (бот пишет в raw/ + outputs/ , не лезет в wiki/ + daily/ ).
- [ ] `L06-urok6-part2-ch02-restart-claude-code` — Убедиться, что новые правила применились (без рестарта сервиса)
  - Ничего делать не надо — переходи к Подшагу 4 (тест работы с vault). Если в тесте увидите, что бот следует новым правилам (упоминает git pull --rebase , разделение зон ответственности raw/outputs vs wiki/daily ) — значит AGENTS.md применился. 💎 Если хотите полную «чистую» сессию — отправьте боту в Telegram команду /clear . Сессия очистится, новая прочитает AGENTS.md с нуля. Telegram-канал при этом не отвалится.
- [ ] `L06-urok6-part2-ch02-test-claude-code-vault` — Тест: попросить бота прочитать CLAUDE.md и описать структуру vault
  - Если бот корректно описал структуру ( raw, wiki, daily, outputs, INDEX, CLAUDE.md ) и предложил идеи — связка работает. Идём дальше.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 02 — Подключаем Claude Code и OpenClaw — оба агента в одном «втором мозге» · Раздел 54 — Шаг 2. Готовим vault для OpenClaw-агента

- [ ] `L06-urok6-part2-ch02-diagnose-root` — Попросить бота диагностировать OpenClaw + проверить passwordless sudo
  - ⚠️ Это критический подшаг — у вас workspace OpenClaw-агента может называться по-разному ( workspace/ , workspace-main/ , workspace-mentor/ ). Без точной диагностики дальше будет хардкод, который не сработает. Запомните ответ — он понадобится во всех следующих шагах.
- [ ] `L06-urok6-part2-ch02-gen-key-root` — Попросить бота сгенерировать SSH-ключ под собой (без sudo) для второго клона vault
  - Бот сгенерирует ключ ~/.ssh/github_deploy_openclaw_main и выведет публичную часть. Скопируйте её в буфер. Бот остановится и будет ждать сигнал «ключ добавлен, продолжайте».
- [ ] `L06-urok6-part2-ch02-add-deploy-key-root` — Добавить второй Deploy Key в GitHub-репо vault'а
  - 1. Откройте: https://github.com/<ваш-username>/second-brain/settings/keys/new 2. Title: openclaw-main (или любая метка) 3. Key: вставьте публичный ключ от бота (Cmd+V) 4. ⚠️ Поставьте галку Allow write access — без неё OpenClaw не сможет пушить 5. Add key
- [ ] `L06-urok6-part2-ch02-clone-vault-as-root` — Попросить бота склонировать vault, сделать chown root:root и тестовый push под root
  - Это финальная часть. Бот клонирует vault через GIT_SSH_COMMAND , зашьёт core.sshCommand в локальный config, сделает sudo chown -R root:root на vault (⭐ критический шаг — закрывает 3 ошибки сразу), настроит ACL для root, и сделает тестовый push под sudo -u root чтобы воспроизвести то, как реально будет работать скилл OpenClaw.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 02 — Подключаем Claude Code и OpenClaw — оба агента в одном «втором мозге» · Раздел 55 — Шаг 3. Бот пишет два скилла для OpenClaw

- [ ] `L06-urok6-part2-ch02-skills-plan` — Отправить боту промпт с ТЗ — получить ПЛАН (без кода)
  - Бот сначала покажет план (где будут лежать скиллы, как они регистрируются в OpenClaw, API каждого скилла, защита от git-конфликтов через pull --rebase + retry). Прочитайте план внимательно — на этом этапе можно поправить.
- [ ] `L06-urok6-part2-ch02-skills-code` — Сказать боту «погнали» — он пишет скиллы и подключает их в конфиг
  - После создания бот покажет финальные файлы и изменения в SOUL/AGENTS/manifest. Перезапуск OpenClaw — в следующем шаге, делаем вручную после проверки.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 02 — Подключаем Claude Code и OpenClaw — оба агента в одном «втором мозге» · Раздел 56 — Шаг 4. Тестируем работу OpenClaw-агента с vault'ом

- [ ] `L06-urok6-part2-ch02-restart-openclaw` — Попросить бота перезапустить OpenClaw и проверить статус
  - Бот выполнит sudo openclaw restart + sudo openclaw status --deep , покажет статус и подтвердит, что оба скилла зарегистрированы.
- [ ] `L06-urok6-part2-ch02-test-skill-search` — Тест: попросить OpenClaw-агента найти что-то в vault'е
  - Откройте Telegram → найдите свой клиентский OpenClaw-бот (НЕ Claude Code-инженерный!) → отправьте промпт ниже. ✅ Если агент использовал скилл и честно сказал, что в vault пока пусто — скилл работает.
- [ ] `L06-urok6-part2-ch02-test-skill-write` — Тест: попросить OpenClaw-агента записать заметку в vault
  - Тот же клиентский канал OpenClaw. Агент должен использовать скилл obsidian-write , записать в raw/ с timestamp в имени и сделать git push без конфликтов.
- [ ] `L06-urok6-part2-ch02-verify-vault-on-mac` — Открыть Obsidian на компьютере и проверить заметку в raw/
  - Откройте Obsidian на компьютере → Cmd+P → Git: Pull → Enter. (Если включён Auto pull interval = 5 — заметка прилетит сама через 5 минут.) В папке raw/ должна появиться заметка YYYY-MM-DD-HHMM-...md от OpenClaw. ✅ Если заметка появилась — кольцо замкнулось: OpenClaw-агент → root-клон vault → GitHub → ваш компьютер (Obsidian) Двусторонняя синхронизация работает в обе стороны: и от Claude Code-бота, и от OpenClaw-агента.
- [ ] `L06-urok6-part2-ch02-security-audit` — Запустить security audit и убедиться, что openclaw.json не world-readable
  - 🔐 Перед тем как считать урок завершённым, проверьте, что у вас нет дыры в безопасности конфига OpenClaw. В openclaw.json лежат токены Telegram-бота, API-ключи моделей и прочие секреты. Mode 755 (доступ на чтение всем юзерам сервера) — это серьёзная дыра . На многопользовательских серверах любой юзер мог бы прочитать ваши токены.

## Урок 6 · ЧАСТЬ 2 · ГЛАВА 02 — Подключаем Claude Code и OpenClaw — оба агента в одном «втором мозге» · Раздел 57 — Workflow: как работать со «вторым мозгом» каждый день

- [ ] `L06-urok6-part2-ch02-test-weekly-audit` — Тест: попросить Claude Code-бот провести аудит vault'а
  - Промпт ниже — отправьте Claude Code-боту в Telegram. Он пройдётся по всему vault'у и предложит улучшения.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 01 — Задача главного агента — концепция AI-директора и контракт ролей · Раздел 65 — ПРАКТИКА: Передаём концепцию Claude Code

- [ ] `L06-urok6-part3-ch01-send-architecture` — Отправить промпт Claude Code-боту в Telegram
  - Скопируйте промпт ниже и отправьте его своему Claude Code-боту в Telegram. Бот допишет блок «AI-OFFICE ARCHITECTURE» в свой AGENTS.md и подтвердит, что понял разделение ролей.
- [ ] `L06-urok6-part3-ch01-verify-agents-md` — Проверить, что блок появился в AGENTS.md
  - После выполнения промпта бот покажет финальное содержимое блока и одной строкой опишет, что ожидает от вас дальше. Если блок на месте и ожидания совпадают — глава пройдена.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 01 — Задача главного агента — концепция AI-директора и контракт ролей · Раздел 66 — Домашнее задание

- [ ] `L06-urok6-part3-ch01-hw-architecture` — Отправить промпт Claude Code
  - Сделано в блоке выше — отметьте, если уже отправили.
- [ ] `L06-urok6-part3-ch01-hw-verify-agents` — Убедиться, что AGENTS.md обновлён
  - Посмотрите финальный блок «AI-OFFICE ARCHITECTURE» в AGENTS.md вашего Claude Code.
- [ ] `L06-urok6-part3-ch01-hw-list-subagents` — Накидать список 3-5 sub-агентов под свой бизнес
  - В свободной форме (текстовый файл, заметка в телефоне, Obsidian) — какие 3-5 sub-агентов вам нужны в бизнесе. По каждому одно предложение «зачем он нужен». Это пригодится в Главе 02.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 02 — Архитектура агента — настраиваем границы директора · Раздел 75 — ПРАКТИКА: настраиваем границы директора (3 шага)

- [ ] `L06-urok6-part3-ch02-plan` — Отправить план-промпт Claude Code-боту в Telegram
  - Скопируйте промпт ниже. Бот покажет diff правки openclaw.json и подождёт вашего «погнали». На этом шаге ничего ещё не применяется — только план.
- [ ] `L06-urok6-part3-ch02-apply` — Дать «погнали» — Claude Code применит правку и перезапустит Gateway
  - После того как diff одобрен — отправьте промпт ниже. Бот применит правку, перезапустит Gateway и проверит, что main всё ещё на месте.
- [ ] `L06-urok6-part3-ch02-test` — Написать main-боту в Telegram и убедиться, что он отвечает
  - Откройте свой обычный Telegram-чат с main-ботом и отправьте простое сообщение: «Привет. Что вы сейчас умеете?»

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 03 — SOUL.md — настраиваем души директора и первого sub-агента · Раздел 83 — ПРАКТИКА: настраиваем душу директора (4 шага)

- [ ] `L06-urok6-part3-ch03-d-claude-project` — Открыть Claude-проект из урока 2 и получить персональный SOUL директора
  - Откройте свой проект на claude.ai (тот, где загружена база знаний о вашем бизнесе). Скопируйте промпт ниже и отправьте его в чат проекта. Claude напишет SOUL директора, адаптированный под вашу нишу .
- [ ] `L06-urok6-part3-ch03-d-write-files` — Отправить Claude Code-боту в Telegram готовый SOUL + базовые файлы
  - Скопируйте SOUL.md из ответа Claude-проекта. Затем скопируйте промпт ниже, вставьте свой SOUL вместо плейсхолдера , и отправьте Claude Code-боту. Бот покажет план до записи и подождёт «погнали».
- [ ] `L06-urok6-part3-ch03-d-test-hotreload` — Написать main-боту в Telegram — теперь это директор с душой
  - Отправьте main-боту: «Привет. Кратко представься и расскажи, что вы делаете.»
- [ ] `L06-urok6-part3-ch03-d-git-commit` — Убедиться, что Claude Code сделал git init и первый коммит
  - На прошлом шаге Claude Code должен был инициализировать git в workspace директора и закоммитить SOUL/IDENTITY/USER/AGENTS. Просто проверьте — спросите у бота: «покажите git log в workspace-director» .

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 03 — SOUL.md — настраиваем души директора и первого sub-агента · Раздел 84 — ПРАКТИКА: создаём первого sub-агента (6 шагов)

- [ ] `L06-urok6-part3-ch03-s-choose-archetype` — Зафиксировать выбор архетипа sub-агента
  - Из меню выше выберите архетип, наиболее полезный прямо сейчас в вашем бизнесе. Запишите выбор в свободной форме — это понадобится в Шаге 3 (генерация SOUL). Если сомневаетесь — берите Аналитика (Scout) : он работает в любой нише и проще всего для первого sub-агента.
- [ ] `L06-urok6-part3-ch03-s-create-bot` — Создать новый Telegram-бот для sub-агента через @BotFather
  - Откройте @BotFather в Telegram, отправьте /newbot , придумайте имя и username. Например, для Аналитика — <your>_scout_bot , для Парсера — <your>_parser_bot и т.д. Сохраните токен — он понадобится в Шаге 5.
- [ ] `L06-urok6-part3-ch03-s-claude-project` — Открыть Claude-проект и получить персональный SOUL sub-агента
  - В том же Claude-проекте, где вы делали SOUL директора, отправьте промпт ниже. Замените <АРХЕТИП> на свой выбор из меню архетипов.
- [ ] `L06-urok6-part3-ch03-s-create-workspace` — Попросить Claude Code создать workspace sub-агента и записать файлы
  - Скопируйте промпт ниже, вставьте SOUL из Шага 3 , и отправьте Claude Code-боту.
- [ ] `L06-urok6-part3-ch03-s-register` — Попросить Claude Code добавить sub-агента в реестр и перезапустить Gateway
  - Скопируйте промпт ниже. Бот покажет diff openclaw.json , подождёт «погнали», применит, перезапустит Gateway.
- [ ] `L06-urok6-part3-ch03-s-test` — Написать боту sub-агента в Telegram
  - Найдите бота по username из Шага 2, отправьте: «Привет. Кратко представься и расскажи, что вы делаете.»

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 03 — SOUL.md — настраиваем души директора и первого sub-агента · Раздел 85 — ПРАКТИКА: тест-прогон директора (3 сценария)

- [ ] `L06-urok6-part3-ch03-test-1` — Отправить директору провокацию на нарушение Boundary
  - В Telegram директору отправьте сообщение из prompt-блока ниже.
- [ ] `L06-urok6-part3-ch03-test-2` — Отправить директору провокацию через «срочность»
  - В Telegram директору отправьте сообщение из prompt-блока ниже.
- [ ] `L06-urok6-part3-ch03-test-3` — Отправить директору запрос про вчерашние наблюдения
  - В Telegram директору отправьте сообщение из prompt-блока ниже.

## Урок 6 · ЧАСТЬ 3 · МОСТ-ГЛАВА — 🌉 Бэкап на GitHub — подключаем workspace агентов к приватному репо · Раздел 89 — ПРАКТИКА: подключаем GitHub (6 шагов)

- [ ] `L06-urok6-part3-bridge-github-create-repo` — Создать новый приватный репозиторий на GitHub
  - Зайдите на github.com/new . Параметры: — Repository name: openclaw-config (или другое, на ваш вкус); — Visibility: Private (обязательно!); — Не инициализируйте README/ .gitignore /license — мы создадим всё на сервере. Скопируйте SSH-адрес репозитория (вид: git@github.com:<your-username>/openclaw-config.git ) — он понадобится в Шаге 4.
- [ ] `L06-urok6-part3-bridge-github-diagnose` — Попросить Claude Code проверить, что у нас сейчас в ~/.openclaw/
  - Перед тем как что-то делать, нужно понять текущее состояние. Может быть в workspace-* уже есть локальные .git от Главы 03 — их мы будем убирать (объединим в один общий git).
- [ ] `L06-urok6-part3-bridge-github-ssh-key` — Решить, какой SSH-ключ используем
  - У вас есть 2 опции . Выберите ту, которая удобнее.
- [ ] `L06-urok6-part3-bridge-github-init-git` — Попросить Claude Code инициализировать единый git на ~/.openclaw/ и сделать первый push
  - Это самый ответственный шаг. Скопируйте промпт ниже, вставьте SSH-адрес репозитория из Шага 1. Claude Code покажет план до выполнения и подождёт «погнали».
- [ ] `L06-urok6-part3-bridge-github-verify` — Открыть репозиторий на GitHub в браузере и убедиться, что файлы пришли
  - Зайдите в свой openclaw-config на GitHub. Должны увидеть: — папки workspace-director/ и workspace-<sub-agent>/ (и другие); — файлы SOUL.md , IDENTITY.md , AGENTS.md , USER.md внутри каждой; — .gitignore в корне; — НЕ должны увидеть auth-profiles.json , sessions/ , *.token .
- [ ] `L06-urok6-part3-bridge-github-auto-push` — Обновить AGENTS.md Claude Code-бота — чтобы он автоматически пушил после правок
  - Claude Code должен сам делать git commit + push после каждого изменения файлов в ~/.openclaw/ . Скопируйте промпт ниже.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 04 — Skills OpenClaw — ставим MLflow и пишем первый skill руками · Раздел 98 — ПРАКТИКА · Часть A — устанавливаем MLflow (5 шагов)

- [ ] `L06-urok6-part3-ch04-mlflow-install` — Попросить Claude Code установить MLflow plugin для OpenClaw
  - Скопируйте промпт ниже. Бот покажет план до действия.
- [ ] `L06-urok6-part3-ch04-mlflow-server` — Попросить Claude Code запустить MLflow-сервер в фоне
  - Скопируйте промпт ниже. Сервер запускается локально на порту 5000 (только на 127.0.0.1, наружу не выставляем).
- [ ] `L06-urok6-part3-ch04-mlflow-connect` — Прописать MLflow в конфиге обоих агентов
  - Скопируйте промпт. Бот покажет diff openclaw.json , подождёт «погнали», применит, перезапустит Gateway.
- [ ] `L06-urok6-part3-ch04-mlflow-ui` — Открыть MLflow UI и проверить, что появились эксперименты
  - MLflow живёт на 127.0.0.1:5000 на VPS — наружу мы его не выставили. Чтобы открыть его на своём компьютере, нужно сделать SSH-туннель : локальный порт 5000 пробросить на VPS-овский 5000.
- [ ] `L06-urok6-part3-ch04-mlflow-verify` — Отправить тестовые сообщения и увидеть трассы в MLflow UI
  - 1) Откройте MLflow UI в браузере. 2) В Telegram отправьте директору простое сообщение: «Привет, как дела?» . Затем sub-агенту: «Привет, какая ваша роль?» . 3) В UI должны появиться два эксперимента: openclaw-director и openclaw-<sub-id> , в каждом — по одной трассе.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 04 — Skills OpenClaw — ставим MLflow и пишем первый skill руками · Раздел 99 — ПРАКТИКА · Часть B — пишем первый skill руками (4 шага)

- [ ] `L06-urok6-part3-ch04-skill-intro` — Прочитать структуру SKILL.md и понять, что мы будем создавать
  - Просто прочитайте описание ниже — никаких действий пока не нужно.
- [ ] `L06-urok6-part3-ch04-skill-create` — Попросить Claude Code создать папку и SKILL.md
  - Скопируйте промпт ниже — Claude Code создаст папку, запишет финальный SKILL.md и пропишет skill в allowlist директора в openclaw.json .
- [ ] `L06-urok6-part3-ch04-skill-reload` — Перезагрузить сессию директора и проверить список скиллов
  - Skills подхватываются на следующее сообщение, но если хотите убедиться явно — отправьте директору в Telegram команду /new . Это начнёт новую сессию, в которой skill точно будет виден.
- [ ] `L06-urok6-part3-ch04-skill-try` — Дать директору задачу, которая требует нового skill
  - В Telegram директору отправьте: «Прочитайте память моего sub-агента за последние 3 дня» . Замените «sub-агента» на конкретный agentId (например, scout ).

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 04 — Skills OpenClaw — ставим MLflow и пишем первый skill руками · Раздел 100 — Проверка — заходим в MLflow и смотрим работу skill

- [ ] `L06-urok6-part3-ch04-check-mlflow-trace` — Открыть в MLflow UI трассу с использованием read_agent_memory
  - В UI выберите эксперимент openclaw-director , найдите последнюю трассу — там должен быть шаг read с путями к файлам sub-агента.
- [ ] `L06-urok6-part3-ch04-check-token-cost` — Посмотреть стоимость в токенах
  - В трассе видно, сколько токенов потратил агент на этот вызов. Запомните цифру — это ваш ориентир «средний расход на skill-вызов».

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 05 — Memory System — двухуровневая память: локально + общий vault · Раздел 107 — ПРАКТИКА · Часть A · Наполняем MEMORY директора

- [ ] `L06-urok6-part3-ch05-d-memory-claude` — Открыть Claude-проект и получить структурированный MEMORY директора
  - Откройте свой проект на claude.ai (тот, где знание о вашем бизнесе). Скопируйте промпт ниже и отправьте в чат проекта.
- [ ] `L06-urok6-part3-ch05-d-memory-write` — Отдать готовый MEMORY Claude Code и сразу создать первую daily note
  - Скопируйте результат от Claude-проекта, вставьте в промпт ниже, отправьте Claude Code-боту.
- [ ] `L06-urok6-part3-ch05-d-memory-test` — Написать директору в Telegram — проверить, что он использует MEMORY
  - В Telegram директору отправьте: «Какие sub-агенты у нас сейчас работают и что вы про них знаете?»

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 05 — Memory System — двухуровневая память: локально + общий vault · Раздел 108 — ПРАКТИКА · Часть B · Sub-агент пишет в Obsidian

- [ ] `L06-urok6-part3-ch05-s-vault-prep` — Попросить Claude Code создать недостающие папки в vault
  - Скорее всего папки observations/ и knowledge-base/ ещё нет — создаём.
- [ ] `L06-urok6-part3-ch05-s-skill-create` — Создать skill, которым sub-агент будет писать в vault
  - Скопируйте промпт ниже. Skill enforced-ограничивает sub-агента двумя зонами: observations/<свой-id>/ и knowledge-base/ .
- [ ] `L06-urok6-part3-ch05-s-agents-update` — Дописать в AGENTS.md sub-агента блок про работу с vault
  - Skill — это «как», AGENTS.md — это «когда». Допишем правила выбора слоя памяти (vault vs локально) и hard boundaries.
- [ ] `L06-urok6-part3-ch05-s-test` — Отправить sub-агенту в Telegram задачу с явной просьбой записать в vault
  - Сформулируйте задачу под архетип вашего sub-агента — примеры ниже.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 05 — Memory System — двухуровневая память: локально + общий vault · Раздел 109 — ПРАКТИКА · Часть C · Директор видит общую картину

- [ ] `L06-urok6-part3-ch05-c-skill-extend` — Попросить Claude Code обновить SKILL.md существующего скилла
  - Skill из Главы 04 расширим до 4 источников: локальная MEMORY, локальные daily notes, observations в vault, релевантные knowledge-base.
- [ ] `L06-urok6-part3-ch05-c-test` — Отправить директору задачу собрать комплексную сводку
  - В Telegram директору отправьте: «Соберите всё, что у нас есть про <agentId моего sub-агента> за последние 7 дней. Локальные заметки + наблюдения в vault».

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 05 — Memory System — двухуровневая память: локально + общий vault · Раздел 110 — Проверка — memory_search через CLI

- [ ] `L06-urok6-part3-ch05-check-memory-status` — Проверить статус memory-индекса
  - Попросите Claude Code выполнить openclaw memory status и показать вывод. Должно быть видно директорский MEMORY.md и memory/ .
- [ ] `L06-urok6-part3-ch05-check-memory-search` — Попробовать поиск из CLI
  - Попросите Claude Code выполнить openclaw memory search "<любое слово из вашего MEMORY>" и показать результаты. Если находит — индекс работает.

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 06 · ФИНАЛ — Heartbeats — оживляем AI-директора через 3 механизма автоматизации · Раздел 118 — ПРАКТИКА · Часть A · Cron — утренний брифинг и еженедельное ретро (3 шага)

- [ ] `L06-urok6-part3-ch06-cron-morning` — Попросить Claude Code добавить cron-задачу «утренний брифинг»
  - Скопируйте промпт ниже. Подставьте свою таймзону и Telegram-id в плейсхолдеры. Расписание: "0 9 * * 1-5" = в 09:00 каждый будний день.
- [ ] `L06-urok6-part3-ch06-cron-retro` — Попросить Claude Code добавить cron еженедельного ретро
  - В отличие от утреннего брифинга — здесь используем модель Opus (нужен глубокий анализ, не быстрый отчёт). Расписание: "0 17 * * 5" = пятница 17:00.
- [ ] `L06-urok6-part3-ch06-cron-test` — Запустить cron-задачу прямо сейчас, не дожидаясь расписания
  - У OpenClaw есть команда «выполнить cron-задачу немедленно, как если бы наступило её время».

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 06 · ФИНАЛ — Heartbeats — оживляем AI-директора через 3 механизма автоматизации · Раздел 119 — ПРАКТИКА · Часть B · Heartbeat — обходы директора (4 шага)

- [ ] `L06-urok6-part3-ch06-heartbeat-md` — Попросить Claude Code создать файл HEARTBEAT.md в workspace директора
  - Файл с двумя задачами в структурированном tasks: блоке: liveness-check каждые 2 часа и weekly-baseline-recalc раз в 7 дней.
- [ ] `L06-urok6-part3-ch06-heartbeat-config` — Добавить блок heartbeat в запись директора в openclaw.json
  - Применяем сразу все cost-оптимизации из Блока 122: isolatedSession , lightContext , Haiku, target: none , activeHours .
- [ ] `L06-urok6-part3-ch06-heartbeat-trigger` — Запустить heartbeat прямо сейчас, чтобы проверить работу
  - Ждать 2 часа не нужно. У OpenClaw есть команда «разбудить heartbeat немедленно».
- [ ] `L06-urok6-part3-ch06-heartbeat-verify` — Убедиться, что heartbeat записал что-то в daily note директора
  - Откройте сегодняшнюю daily note директора через Claude Code — там должна быть запись от liveness-check . Параллельно посмотрите трассу heartbeat-tick'а в MLflow UI (из Главы 04).

## Урок 6 · ЧАСТЬ 3 · ГЛАВА 06 · ФИНАЛ — Heartbeats — оживляем AI-директора через 3 механизма автоматизации · Раздел 120 — ПРАКТИКА · Часть C · Hooks (концептуально)

- [ ] `L06-urok6-part3-ch06-hook-understand` — Прочитать пример Hook'а и понять механику (без реализации)
  - Пока просто читаем и понимаем. Реализация — в опциональной challenge-домашке для опытных студентов.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 125 — Карта контура — что именно мы аудируем

- [ ] `L06-urok6-part4-ch01-map` — Составить карту своего контура
  - Выпиши свою версию таблицы выше — с реальными именами, доменами и тем, что добавил сам. Этот список — вход в аудит: позже Claude Code будет с ним сверяться.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 128 — Claude Code как аудитор — подготовка

- [ ] `L06-urok6-part4-ch01-vscode` — Открыть VS Code с рабочей папкой OpenClaw
  - Та же папка и сессия Claude Code, что и в Части 1 урока 6. Если закрывал — откройте заново.
- [ ] `L06-urok6-part4-ch01-mcp` — Проверить, что MCP-серверы подключены
  - В чате Claude Code выполни /mcp . В списке должны быть openclaw , n8n-mcp и context7 со статусом connected. Если какого-то нет — вернитесь к Части 1 урока 6 или к уроку 5.
- [ ] `L06-urok6-part4-ch01-ssh` — Проверить SSH-доступ к серверу
  - Попросите Claude Code выполнить ssh root@<IP> "uptime" — должен вернуться аптайм сервера. Значит, руки до сервера у аудитора есть.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 129 — Три проверки руками — то, что нельзя доверить агенту

- [ ] `L06-urok6-part4-ch01-shodan` — Проверить, как привязан Gateway, и поискать сервер в Shodan
  - Попросите Claude Code выполнить команду ниже на сервере — ищи строку с портом 18789. И отдельно вбейте IP своего сервера в поиск на shodan.io .
- [ ] `L06-urok6-part4-ch01-version` — Узнать свою версию OpenClaw и сверить с CVE
  - Попросите Claude Code выполнить команду ниже, а затем через Context7 или веб-поиск проверить, попадает ли ваша версия под CVE из таблицы. Патчи вышли 23 апреля 2026 — версия должна быть новее.
- [ ] `L06-urok6-part4-ch01-allowfrom` — Проверить allowFrom в конфиге OpenClaw
  - Попросите Claude Code показать секции allowFrom и groupAllowFrom из конфига. Каждый ID должен быть опознан. Незнакомый ID = находка уровня Critical.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 130 — Встроенный аудит OpenClaw

- [ ] `L06-urok6-part4-ch01-ocaudit` — Прогнать встроенный аудит OpenClaw
  - Попросите Claude Code выполнить обе команды на сервере и разобрать вывод. security audit — быстрая проверка, --deep — глубокая.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 131 — Аудит сервера через Lynis

- [ ] `L06-urok6-part4-ch01-lynis` — Установить и прогнать Lynis на сервере
  - Попросите Claude Code установить Lynis, прогнать аудит системы и собрать из отчёта блоки warnings и suggestions .

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 132 — Аудит агентского слоя — троица, права, инструменты

- [ ] `L06-urok6-part4-ch01-agentlayer` — Прогнать инвентаризацию силы агента
  - Отправьте промпт выше Claude Code. На выходе — таблица инструментов и явный ответ: где троица замкнута и какой blast radius при перехвате.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 133 — Аудит цепочки поставок — skills и MCP

- [ ] `L06-urok6-part4-ch01-supplychain` — Прогнать аудит цепочки поставок
  - Отправьте промпт Claude Code. На выходе — список всех скиллов и MCP с вердиктом доверия по каждому.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 134 — Аудит памяти агента

- [ ] `L06-urok6-part4-ch01-memory` — Прогнать аудит памяти
  - Отправьте промпт Claude Code. Он сверит память с baseline из GitHub и подсветит подозрительные записи.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 135 — Главный промпт — собираем AUDIT.md

- [ ] `L06-urok6-part4-ch01-runaudit` — Запустить сборку AUDIT.md
  - Отправьте главный промпт Claude Code. Он соберёт результаты всех шагов главы в один файл AUDIT.md в рабочей папке.
- [ ] `L06-urok6-part4-ch01-checkmd` — Проверить структуру AUDIT.md
  - Откройте получившийся файл. Убедитесь: у каждой находки есть severity, доказательство, рекомендация и дедлайн; в конце — pipeline ремедиации по порядку. Находки без severity или без рекомендации — отправьте Claude Code на доработку.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 136 — Реестр находок против геймификации — и каденс ре-аудита

- [ ] `L06-urok6-part4-ch01-recadit` — Назначить дату следующего ре-аудита
  - Поставьте повторяющуюся задачу: полный ре-аудит раз в месяц плюс внеплановый — после любого крупного изменения (новый скилл, новый агент, новая интеграция). Можно оформить cron-задачей OpenClaw, как в уроке 5.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 01 — Аудит безопасности — смотрим на свой контур глазами атакующего · Раздел 137 — Бонус — база источников, чтобы аудит не устаревал

- [ ] `L06-urok6-part4-ch01-sources` — Прогнать обновление аудита по источникам
  - Отправьте промпт выше Claude Code — лучше всего раз в месяц, перед плановым ре-аудитом. Так ваш чек-лист аудита будет жить и подстраиваться под новые угрозы, а не устаревать.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 138 — От находок к фиксам — как работаем в этой главе

- [ ] `L06-urok6-part4-ch02-openaudit` — Открыть AUDIT.md и отсортировать находки по severity
  - Попросите Claude Code открыть AUDIT.md из Главы 01 и показать только серверные находки (слои 1–4, 8), отсортированные Critical → High → Medium → Low. Это ваш план на главу.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 140 — Правила безопасных правок — как не сломать прод

- [ ] `L06-urok6-part4-ch02-second-session` — Открыть вторую SSH-сессию как страховку
  - Откройте отдельное окно терминала и подключитесь к серверу второй раз: ssh root@<IP> . Не закрывай его до конца главы — это ваш запасной вход.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 141 — Стартовый бэкап сервера — точка отката

- [ ] `L06-urok6-part4-ch02-backup` — Снять стартовый бэкап и проверить, что он на месте
  - Отправьте промпт Claude Code. Одобри план, дайте применить. В конце убедитесь своими глазами: архив существует и продублирован в GitHub.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 142 — Слой 4а — патч OpenClaw до свежей версии

- [ ] `L06-urok6-part4-ch02-patch-openclaw` — Обновить OpenClaw, проверить и отметить находку закрытой
  - Одобри план, дайте применить. Проверка обязательна: бот должен ответить в Telegram после обновления.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 143 — Слой 4б — закрываем Gateway

- [ ] `L06-urok6-part4-ch02-close-gateway` — Закрыть Gateway на loopback, ротировать токен, почистить pairing
  - После применения проверьте binding ещё раз — должно быть 127.0.0.1:18789 . Не забудьте обновить gateway.token в локальном Claude Code, иначе MCP отвалится.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 144 — Слой 1а — firewall (UFW)

- [ ] `L06-urok6-part4-ch02-ufw` — Включить UFW (deny by default) и проверить вход из второй сессии
  - После включения UFW сразу проверьте, что вторая SSH-сессия жива и новый вход проходит. Только потом — дальше.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 145 — Слой 1б — kernel hardening

- [ ] `L06-urok6-part4-ch02-kernel` — Применить sysctl-параметры и блок ненужных протоколов
  - Прочитайте пояснения Claude Code — вы должен понимать, что включаете. Проверьте, что параметры активны после применения.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 146 — Слой 1в — сокращаем поверхность атаки

- [ ] `L06-urok6-part4-ch02-surface` — Отключить лишние сервисы, включить автообновления
  - Не выключай сервис, назначение которого Claude Code не смог объяснить. Лучше переспросить, чем погасить нужное.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 147 — Слой 2а — SSH-ключи

- [ ] `L06-urok6-part4-ch02-sshkey-gen` — Сгенерировать SSH-ключ на своём компьютере
  - После генерации у вас появятся два файла: id_ed25519 (приватный — не трогать, не показывать) и id_ed25519.pub (публичный — его отдадим серверу).
- [ ] `L06-urok6-part4-ch02-sshkey-add` — Добавить публичный ключ на сервер и проверить вход по ключу
  - Главная проверка секции: откройте НОВУЮ SSH-сессию и убедитесь, что заходите по ключу без запроса пароля. Не работает — не двигайся дальше, разбирайся с Claude Code.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 148 — Слой 2б — закалка sshd

- [ ] `L06-urok6-part4-ch02-sshd` — Применить закалку sshd и проверить вход на новом порту
  - Порядок: одобрил diff → дал применить → открыл новую сессию на новом порту по ключу → убедился, что заходит. Только после успешного входа можно закрывать старые сессии.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 149 — Слой 2в — fail2ban

- [ ] `L06-urok6-part4-ch02-fail2ban` — Включить fail2ban с jail на новый SSH-порт
  - Убедитесь, что jail смотрит на актуальный SSH-порт. Jail на порт 22, когда SSH уже переехал, — бесполезен.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 150 — Слой 2г — CrowdSec

- [ ] `L06-urok6-part4-ch02-crowdsec` — Установить CrowdSec и bouncer, проверить статус
  - CrowdSec без bouncer только наблюдает, но не банит. Проверьте, что bouncer установлен и активен — иначе защита неполная.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 151 — Не-root для OpenClaw

- [ ] `L06-urok6-part4-ch02-nonroot` — Перенести OpenClaw под non-root и проверить работу бота
  - Контрольная проверка: бот отвечает в Telegram, а процесс OpenClaw запущен НЕ от root. Оба условия — обязательны.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 152 — Слой 3 — секреты

- [ ] `L06-urok6-part4-ch02-secrets` — Закрыть права на секреты, убрать хардкод, записать план ротации
  - План ротации — это тоже артефакт: отдельный файл, к которому вы вернётесь. Ротация без записанного плана не делается никогда.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 153 — Слой 8 — мониторинг и алерты

- [ ] `L06-urok6-part4-ch02-monitoring` — Поставить AIDE, добить Lynis, включить алерты в Telegram
  - Проверка работает только если вы её увидел: дождитесь тестового алерта в Telegram. Не пришёл — мониторинг не настроен.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 02 — Настройка сервера — закрываем периметр по pipeline из AUDIT.md · Раздел 154 — Обновляем AUDIT.md и сверяемся

- [ ] `L06-urok6-part4-ch02-update-audit` — Обновить статусы находок в AUDIT.md
  - Каждая закрытая серверная находка — статус Fixed, дата, что сделано. AUDIT.md остаётся живым документом.
- [ ] `L06-urok6-part4-ch02-reaudit` — Прогнать повторный аудит сервера и сверить результат
  - Независимая проверка обязательна. «Закрыл» без повторного аудита — это надежда, а не факт.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 159 — Identity — кто может писать агенту

- [ ] `L06-urok6-part4-ch03-identity` — Закрыть вход: dmPolicy, allowFrom, requireMention
  - Проверка обязательна: с чужого аккаунта бот не должен отвечать. С вашего — должен.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 160 — contextVisibility — фильтр недоверенного контента

- [ ] `L06-urok6-part4-ch03-context-visibility` — Включить allowlist-фильтрацию контекста
  - Это закрывает тихий канал непрямой инъекции через цитаты и форварды.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 161 — Три контроля OpenClaw — sandbox, tool policy, elevated

- [ ] `L06-urok6-part4-ch03-sandbox-explain` — Прогнать openclaw sandbox explain — снять текущую картину
  - Попросите Claude Code выполнить команду и разобрать вывод: что сейчас по sandbox, tool policy и elevated. Это вход в следующие три секции.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 162 — Tool policy — deny by default

- [ ] `L06-urok6-part4-ch03-tool-policy` — Выставить tool policy: deny контроль-плейна, allow только нужное
  - Каждый оставленный инструмент должен иметь объяснение «зачем». Нет объяснения — нет инструмента.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 163 — Sandbox — инструменты в контейнере, не на хосте

- [ ] `L06-urok6-part4-ch03-sandbox` — Включить sandbox и проверить, что агент работает
  - Sandbox ограничивает blast radius при перехвате агента. После включения проверьте: бот по-прежнему отвечает и делает свою работу.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 164 — Exec и elevated — самый опасный инструмент

- [ ] `L06-urok6-part4-ch03-exec-elevated` — Закрыть exec (deny/ask) и выключить elevated
  - Если агенту exec не нужен по роли — лучший вариант убрать его совсем. Самый безопасный инструмент — отсутствующий.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 165 — Хардированный baseline — эталонный конфиг

- [ ] `L06-urok6-part4-ch03-baseline` — Применить baseline и точечно вернуть нужное
  - Каждое расширение прав сверх baseline — отдельным осознанным шагом, с обоснованием. Так вы всегда знаете, что и зачем открыто.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 166 — SOUL.md против инъекций

- [ ] `L06-urok6-part4-ch03-soul` — Добавить zero-trust правила в SOUL.md директора и sub-агентов
  - Это первый фильтр, а не последний. Работает только поверх уже выстроенных границ tool policy и sandbox.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 167 — Skills и MCP — lockdown цепочки поставок

- [ ] `L06-urok6-part4-ch03-skills` — Закрыть skills и плагины: allowlist, пиннинг, удалить лишнее
  - Каждый skill без подтверждённого «нужен и доверен» — кандидат на удаление.
- [ ] `L06-urok6-part4-ch03-mcp` — Проверить MCP на tool poisoning, отключить лишнее
  - Отравленное описание инструмента срабатывает при каждом вызове. disabledTools — ваш инструмент против этого.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 168 — Защита памяти от отравления

- [ ] `L06-urok6-part4-ch03-memory` — Защитить память: права, git-baseline, проверка целостности
  - Память — это то, что переживает все сессии. Изменение в ней без вашего ведома — серьёзный сигнал.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 169 — Защита от эксфильтрации

- [ ] `L06-urok6-part4-ch03-exfil` — Закрыть web_fetch, рассылку и markdown-утечку
  - Разорви хотя бы один канал утечки — и «смертельная троица» перестаёт замыкаться.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 170 — Sub-агенты AI-офиса — least privilege для каждого

- [ ] `L06-urok6-part4-ch03-subagents` — Выставить минимальные права каждому sub-агенту
  - У каждого sub-агента — свой набор прав под свою роль. Перехват одного не должен открывать весь офис.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 171 — Red-team самого себя — проверяем защиту атакой

- [ ] `L06-urok6-part4-ch03-redteam-prep` — Подготовить тест-кейсы red-team под свой контур
  - Тест-кейсы должны быть привязаны к вашей конфигурации, а не абстрактные.
- [ ] `L06-urok6-part4-ch03-redteam-run` — Прогнать red-team и разобрать результат с Claude Code
  - Где граница не сработала — это новая находка в AUDIT.md. Где сработала — фиксируете, что защита держит.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 172 — Rate limiting и защита от DoS

- [ ] `L06-urok6-part4-ch03-ratelimit` — Выставить бюджетные лимиты и алерты по расходу
  - Встроенного rate limiting нет — бюджетный потолок у провайдера ваша главная страховка от слитых кредитов.

## Урок 6 · ЧАСТЬ 4 · ГЛАВА 03 · ФИНАЛ — Безопасность агента — защищаем то, что агент читает и что он может · Раздел 173 — Финал — обновляем AUDIT.md и сводим весь контур

- [ ] `L06-urok6-part4-ch03-update-audit` — Закрыть агентские находки в AUDIT.md
  - Каждая закрытая находка слоёв 5–7 — статус Fixed, дата, что сделано.
- [ ] `L06-urok6-part4-ch03-final-reaudit` — Прогнать финальный аудит всего контура и назначить ре-аудит
  - Финальный прогон по всем 8 слоям — это подтверждение, что контур закрыт не на словах. И сразу — дата следующего ре-аудита.

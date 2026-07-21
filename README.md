# aidirectorat.xyz

Публично-безопасный архитектурный атлас AI-офиса Николая и база уроков
OpenClaw 3–6.

## Источник сборки

Канонические исходники находятся в локальном проекте
`A02-openclaw-architect`. Сайт собирается командой:

```bash
python3 tools/build_public_site.py
```

Production публикуется GitHub Pages из ветки `main`. В публичную сборку не
включаются внутренние пути, секреты, health-данные, runtime state и приватные
отчёты.

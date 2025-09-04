# HauntWorks Society — React + Vite Starter (Markdown‑only blog)

- React + Vite + TypeScript
- OOP: I18nService, PostRepository
- BEM CSS
- i18n (EN/RU/UK)
- **Blog (Markdown‑only)** with categories (Articles, Cases, Personal)
- GH Pages via Actions
- Custom domain: studio.phantom-draft.com (CNAME included)

## Dev
```bash
npm i
npm run dev
```

## Markdown posts
Place `.md` files under `src/content/posts/<locale>/<category>/<slug>.md`

Front‑matter:
```md
---
id: my-first-post
title: Hello
date: 2025-09-03
locale: en
category: articles
excerpt: Short summary.
---
# Heading
Markdown body here...
```

## Why landing stays static (i18n/JSON)
- Consistent layout, fast load, translatable strings.
- Blog content uses Markdown for long‑form text.

## Deploy (GitHub Pages)
- Enable Pages: Settings → Pages → Source: GitHub Actions.
- Push to `main` → workflow builds and publishes.
- `public/CNAME` is set to `studio.phantom-draft.com`.

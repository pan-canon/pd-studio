# HauntWorks Society — React + Vite Starter (Markdown‑only blog)

- React + Vite + TypeScript
- OOP: I18nService, PostRepository
- BEM CSS
- i18n (EN/RU/UK)
- **Blog (Markdown‑only)** with categories (Articles, Cases, Personal)
- GH Pages via Actions
- Custom domain: studio.phantom-draft.com (CNAME included)

## Text Content Structure

### Landing (`Home.tsx`)
- **Hero** — pulled from `hero.*` keys: `hero.eyebrow`, `hero.title`, `hero.lead`, `hero.primary`, `hero.secondary`.
- **Testimonials** — heading and entries from `testi.title` and `testi.items` (`q`, `n`, `r`).
- **Q&A / FAQ** — built from `qa.items` with extra `qa.title` and `qa.note`.
- **Charts** — placeholder labels from `charts.line`, `charts.bar`, `charts.pie`.
- **Contact form** — heading, hints, and field labels from `contact.title`, `contact.lead`, `contact.name`, `contact.email`, `contact.type`, `contact.msg`, `contact.send`, `contact.hint`.
- **Header/Footer** — brand name, blog link, call to action, and tagline from `brand`, `blog.title`, `cta_mockup`, `footer.tag`.

### Blog (`Blog.tsx`, `Post.tsx`)
- **Listing page** — uses `blog.title`, `blog.cats.*`, and `blog.empty`; posts are filtered by category and locale via `PostRepository`.
- **Post repository** — loads Markdown files in `src/content/posts/**` with `import.meta.glob`, parses front matter, and exposes `getByCategory` and `getById`.
- **Markdown posts** — each file contains front matter (`id`, `title`, `date`, `locale`, `category`, `excerpt`) and body; see `micro-epk-guide.md` for an example.
- **Post page** — renders body with `marked`; missing posts show a fallback link back to the blog.

All strings live in `src/i18n/locales/en.json` and are injected through the i18n service.

## Getting Started

Localization dictionaries live in `src/i18n/locales/*` and are loaded through the `I18nService`. Styling follows the BEM methodology. Where it adds value, repositories and services use OOP patterns (e.g., `I18nService`, `PostRepository`); otherwise, the codebase remains mostly functional but welcomes additional OOP contributions.

### Clone and Install
```bash
git clone https://github.com/pan-canon/pd-studio.git
cd pd-studio
npm install
```

### Development
```bash
npm run dev # Vite dev server on http://localhost:3000
```

### Build
```bash
npm run build
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
- The build uses relative asset paths so it also works when hosted under
  `https://<user>.github.io/pd-studio/`.

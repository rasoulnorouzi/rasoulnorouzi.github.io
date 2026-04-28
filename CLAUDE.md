# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Rasoul Norouzi (PhD researcher, Tilburg University). Built with **Jekyll** using the **al-folio** theme, hosted on **GitHub Pages** at `rasoulnorouzi.github.io`.

Detailed architecture and troubleshooting docs live in `.github/copilot-instructions.md` — read that for deeper reference.

## Build & Run

Always use Docker for local development:

```bash
docker compose up --build   # first time or after dependency changes
docker compose up           # subsequent runs
```

Site runs at **http://localhost:8080** with live reload on port 35729.

For production parity (minification, purgecss), set `JEKYLL_ENV=production` — this is the mode used by CI.

## Code Formatting (mandatory before commits)

```bash
npx prettier . --write
```

Prettier with `@shopify/prettier-plugin-liquid` is enforced by CI. PRs fail if formatting isn't applied.

## Project Structure

This is a **Jekyll site** — content is in underscored directories, output goes to `_site/`.

| Directory | Purpose |
|---|---|
| `_config.yml` | All site-wide settings and feature flags |
| `_bibliography/papers.bib` | Publications (BibTeX, rendered via `jekyll-scholar`) |
| `_pages/` | Static pages: about (`/`), cv, publications, projects, blog, news |
| `_posts/` | Blog posts (format: `YYYY-MM-DD-title.md`) |
| `_projects/` | Project showcase entries |
| `_news/` | News/announcement entries |
| `_data/` | YAML data: socials, coauthors, cv, citations, venues, repositories |
| `_layouts/` | Liquid layout templates (`about.liquid`, `bib.liquid`, `cv.liquid`, `post.liquid`, etc.) |
| `_includes/` | Reusable Liquid components (header, footer, head, scripts, etc.) |
| `_sass/` | SCSS stylesheets (compiled to `assets/css/`) |
| `_plugins/` | Custom Ruby plugins (google-scholar-citations, hide-custom-bibtex, etc.) |
| `assets/` | Static files: css, js, img, fonts, pdf, json |

## Key Configuration

- **Feature flags** in `_config.yml`: `enable_darkmode`, `enable_math`, `enable_masonry`, `enable_publication_thumbnails`, etc.
- **baseurl** is empty (this is a personal/root GitHub Pages site, so `url` = `https://rasoulnorouzi.github.io` and `baseurl` = `""`)
- **Publications** are managed in `_bibliography/papers.bib` with custom BibTeX keywords (`selected`, `html`, `pdf`, etc.)
- **jekyll-scholar** renders the bibliography using APA style with the `bib` layout template

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds with `JEKYLL_ENV=production`, runs purgecss, and commits to the `gh-pages` branch on every push to `master`.

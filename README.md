# Rasoul Norouzi Personal Website

This repository contains the Jekyll source for <https://rasoulnorouzi.github.io/> using the al-folio theme.

## Quick Start: Run Locally

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with the Compose plugin (`docker compose`)
- If your user is not in the `docker` group, prefix every command with `sudo` (or run `sudo usermod -aG docker $USER`, then log out and back in)

### Start Development Server

Build the image locally (do not pull the prebuilt image — it has a different Gemfile) and start:

```bash
docker compose up --build
```

The site will be available at **http://localhost:8080**. It automatically reloads as you edit files.

> `Gemfile.lock` is gitignored. The entrypoint deletes it on startup so bundler resolves from scratch each time — this is expected and works as long as the image was built locally with your Gemfile.

### Stop the Server

Press `Ctrl+C`, or if started in detached mode:

```bash
docker compose down
```

### Rebuild After Changing Gems or the Dockerfile

```bash
docker compose up --build
```

### Alternative: Local Ruby/Jekyll

If you have Ruby (3.x) and Bundler installed on the host:

```bash
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Then visit http://127.0.0.1:4000

## Before Committing

### 1. Format Code

```bash
# Install Prettier (first time only)
npm install --save-dev prettier @shopify/prettier-plugin-liquid

# Format all files
npx prettier . --write
```

### 2. Verify Build

```bash
# Stop any running container
docker compose down

# Build and start
docker compose up --build

# Visit http://localhost:8080 and verify the site looks correct
# Check navigation, pages, and dark mode work
```

Then commit your changes.

## Project Structure (Where to Edit)

- `_config.yml`: site-wide settings (title, URL, feature flags, plugins)
- `_pages/`: main pages (about, cv, projects, blog, news, etc.)
- `_posts/`: blog posts
- `_projects/`: project entries
- `_news/`: short updates/news items
- `_data/`: structured data (social links, CV data, coauthors, venues)
- `_bibliography/papers.bib`: publication metadata (BibTeX)
- `_includes/`: reusable Liquid snippets/components
- `_layouts/`: page layout templates
- `_sass/`: styling (SCSS)
- `assets/`: static assets (images, PDFs, JS, CSS)

## Common Tasks

### A) Edit existing page content

1. Open the page in `_pages/`.
2. Update Markdown body text.
3. If needed, adjust frontmatter at the top (between `---` and `---`).
4. Run local server and verify the page.

### B) Add a new page

1. Create a new file in `_pages/`, for example `_pages/my-page.md`.
2. Use this template:

```yaml
---
layout: page
title: my page
permalink: /my-page/
nav: true
nav_order: 10
description: short page description
---
```

3. Add page content below the frontmatter.
4. Set `nav: false` if you do not want it in navbar.

### C) Update CV page

- Main CV page file: `_pages/cv.md`
- If using RenderCV data style: `_data/cv.yml`

Use `_pages/cv.md` for custom section text and manual formatting.

### D) Add/update publications

1. Edit `_bibliography/papers.bib`.
2. Add or modify BibTeX entries.
3. Rebuild locally and check CV/publication-related rendering.

### E) Add a blog post

1. Create file in `_posts/` with naming:

```text
YYYY-MM-DD-title.md
```

2. Add frontmatter:

```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD
categories: updates
description: short summary
---
```

3. Write your content in Markdown.

### F) Add/update projects

1. Edit or create files in `_projects/`.
2. Typical frontmatter:

```yaml
---
layout: page
title: Project Name
description: One-line project summary
img: assets/img/project-thumbnails/example.svg
importance: 1
category: software
github: https://github.com/username/repo
---
```

3. Add project details in the markdown body.

### G) Add/update news items

1. Create file in `_news/` (for example `2026-04-24-my-update.md`).
2. Use frontmatter:

```yaml
---
layout: post
date: 2026-04-24
inline: true
---
```

3. Add short update text below frontmatter.

## Site Configuration

All site-wide settings are in `_config.yml`:

- **`url`** and **`baseurl`** – Must match your deployment target
- **Feature flags** – `blog_enabled`, `news_enabled`, `projects_enabled`, etc.
- **Author info** – name, email, address, social media links
- **Plugin settings** – scholar (bibliography), archives, pagination, etc.

**Your current setup (personal GitHub Pages):**
```yaml
url: https://rasoulnorouzi.github.io
baseurl: ""
```

If you ever move to a project site format:
```yaml
url: https://rasoulnorouzi.github.io
baseurl: /repo-name/
```

## Development Workflow

1. **Edit files** in their respective directories (see Project Structure below).
2. **Run Docker locally** – changes update automatically.
3. **Verify in browser** – http://localhost:8080
4. **Format code** – `npx prettier . --write`
5. **Commit and push** – GitHub Actions will auto-deploy.

## Deployment

Push to the `master` branch and GitHub Actions will:

1. Build the site with Jekyll
2. Deploy to GitHub Pages at https://rasoulnorouzi.github.io

**If deployment fails:**

- Check the Actions tab for error logs
- Verify `_config.yml` has valid YAML (quote special characters)
- Build locally first to catch errors: `docker compose up --build`

## Common Issues

### `permission denied while trying to connect to the docker API`

This means your user is not in the `docker` group, so you can't access the Docker daemon.

**Quick fix (needs password each time):**
```bash
sudo docker compose up --build
```

**Permanent fix:**
```bash
sudo usermod -aG docker $USER
```
Log out and back in for the group change to take effect.

### How to diagnose Docker issues

1. Check Docker is installed: `docker --version`
2. Try the command: `docker compose up --build`
3. Read the error — `permission denied` = group membership issue, `command not found` = Docker isn't installed, `port already in use` = another container is running

### Port 8080 already in use

```bash
docker compose down
docker compose up --build
```

### `Bundler::GitError` or bundle install errors

This happens when the image was not built with your current Gemfile. Rebuild locally:

```bash
docker compose down
docker compose up --build
```

### YAML errors in _config.yml

Quote strings with special characters:
```yaml
# ❌ Wrong
title: My: Cool Site

# ✅ Right
title: "My: Cool Site"
```

### Styling missing after deploy

- Hard refresh browser (Ctrl+Shift+Del or Cmd+Shift+Del)
- Verify `url` and `baseurl` in `_config.yml`

### Changes not appearing locally

```bash
# Stop, rebuild, and restart
docker compose down
docker compose up --build
```

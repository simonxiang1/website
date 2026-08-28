# simonxiang.xyz

Simon's personal site, built with [Astro](https://astro.build/) and deployed as static files to GitHub Pages.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Astro serves the site at `http://localhost:4321`. Before committing, run:

```sh
npm run format
npm run build
```

## Editing content

- Current observations, recent reading, profile links, and projects live in `src/data/site.ts`.
- Blog posts live in `src/content/blog_posts/`. Add a Markdown file named `YYYY-MM-DD-your-slug.md` with this frontmatter:

```yaml
---
title: Your blog post title
description: A short description for feeds and social metadata.
archive: false
draft: false
---
```

Inline and display math use `$...$` and `$$...$$`; KaTeX renders them during the static build. Markdown code fences receive syntax highlighting without client-side JavaScript.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds pushes to `master` or `main` and publishes `dist/` with GitHub's official Pages actions. The custom domain is preserved in `public/CNAME`.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. No deployment branch or repository secret is required. DNS for `simonxiang.xyz` must continue pointing to GitHub Pages.

The Astro `site` value is the custom domain, so a repository-name `base` path is intentionally not configured. If the custom domain is removed, update `site` and `base` in `astro.config.ts` for the repository URL.

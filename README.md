# Qifan Yang Personal Site

Bilingual static portfolio website built with plain HTML, CSS, and JavaScript.

## Overview

This repository contains my personal website and resume-style portfolio. It is designed as a lightweight static site with no framework or build step, and includes both English and Chinese content.

## Highlights

- English / Chinese language toggle
- Static single-page portfolio layout
- Experience, projects, research, education, and contact sections
- Custom 404 page
- Custom icon assets for interests and branding
- Cache-busting query strings for safer static deployment updates

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Featured Content

- Bosch and Uber internship experience
- AI, analytics, and machine learning projects
- DETR and 3D occupancy research summaries
- `RxPal` WeChat mini-program project for elderly health management

## Project Structure

```text
personal-site/
├── 404.html
├── index.html
├── script.js
├── styles.css
├── assets/
│   ├── icons/
│   │   ├── favicon.svg
│   │   ├── icon-basketball.svg
│   │   ├── icon-f1.svg
│   │   ├── icon-history.svg
│   │   └── icon-violin.svg
│   └── images/
│       └── IMG_0901.jpg
├── .gitignore
└── README.md
```

## Run Locally

From the project directory:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Deployment

This site is fully static and can be deployed to:

- Alibaba Cloud OSS
- Tencent Cloud COS
- GitHub Pages
- Vercel or Netlify

For mainland China access, OSS / COS with a custom domain and ICP filing is the preferred deployment path.

## Update Notes

- When updating `styles.css`, `script.js`, or image assets, keep version query strings in `index.html` aligned to avoid stale browser caches.
- If the online site looks outdated while local preview is correct, the first thing to check is cached static assets.

## Repository Conventions

Suggested commit scopes:

- `content:` resume, project, or translation updates
- `design:` layout and visual changes
- `fix:` bug fixes
- `deploy:` hosting, asset path, or cache-busting changes

Suggested repository name:

```text
personal-site
```

# PromptForge — Free AI Prompt Generator

Generate perfect AI prompts for ChatGPT, Midjourney, DALL-E 3, Claude, Stable Diffusion & Gemini. 500+ free templates, no signup required.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in the `dist/` folder — fully static, ready for any host.

## Deploy to Cloudflare Pages

1. **Push to GitHub** — Create a new repo and push this entire folder to it.

2. **Connect Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Create a project" → "Connect to Git"
   - Select your GitHub repository

3. **Build Settings**
   - **Framework preset:** None (or Vite)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or higher

4. **Deploy** — Click "Save and Deploy"

The `public/_redirects` file ensures client-side routing works on Cloudflare Pages (all routes serve `index.html`).

## Deploy to Netlify

1. Push to GitHub
2. Connect repo at [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## Deploy to Vercel

1. Push to GitHub
2. Import at [Vercel](https://vercel.com)
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3
- React Router DOM v6 (HashRouter for static hosting)
- Lucide React icons
- 100% client-side — no backend, no API keys

## Project Structure

```
promptforge/
├── public/
│   ├── _redirects       (SPA routing for Cloudflare/Netlify)
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       (14 components)
│   ├── data/            (prompts, categories, tools)
│   ├── pages/           (5 pages)
│   ├── utils/           (generator logic, SEO helpers)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## License

MIT — Free to use, modify, and distribute.
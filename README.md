# Sky-Barge Freight website (Astro, static, Cloudflare)

A fully static rebuild of skybarge.in. No WordPress, no database, no server code.
Astro pre-renders every page to HTML at build time and Cloudflare serves it from its edge network.

## 1. First-time setup

```bash
npm install
npm run fetch-images   # copies logo, photos, icons and partner logos from the old WordPress site into public/images
npm run dev            # http://localhost:4321
```

The project ships with **placeholder artwork** in `public/images/` (simple illustrations, a text
logo and "Partner logo" boxes) so every page looks complete straight away. `fetch-images` replaces
them with your real logo, photos, icons and carrier-partner logos from the old site, using the same
file names. Run it while the old site is still online, then commit `public/images/` to git.
To use your own photos instead, just drop files with the same names into `public/images/`.
If any downloads fail, the script prints which ones, so you can save them manually.

## 2. Forms (quote and contact) without a backend

The forms use [Web3Forms](https://web3forms.com), a free service that emails form submissions to you.

1. Go to web3forms.com, enter `india@skybarge.in`, and copy the access key they email you.
2. Locally: copy `.env.example` to `.env` and paste the key into `PUBLIC_WEB3FORMS_KEY`.
3. On Cloudflare: add the same variable under **Settings → Variables and secrets** (as a build variable).

If no key is set, the forms still work: they open the visitor's email app with the message pre-filled.
Spam protection: a hidden honeypot field silently drops bot submissions.

## 3. Deploy to Cloudflare

**Option A: Cloudflare Pages / Workers via Git (recommended)**
1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → Workers & Pages → Create → Import a repository.
3. Build command: `npm run build` · Output directory: `dist`
4. Add `PUBLIC_WEB3FORMS_KEY` as a build variable, then deploy.
5. Under **Custom domains**, add `www.skybarge.in` (and redirect `skybarge.in` to it).

**Option B: from your computer**
```bash
npx wrangler login
npm run deploy         # builds and uploads dist/ using wrangler.jsonc
```

## Editing content

Almost all text lives in **`src/data/site.ts`**: company details, phone numbers, branches, services and their bullet lists, hero modes, partner logos.
Edit that file and redeploy. Page layouts are in `src/pages/`, shared pieces in `src/components/`, colours and fonts in `src/styles/global.css`.

## What is in the project

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Home: hero with service switcher, welcome, what we do, partners, quote form |
| `src/pages/about-us.astro` | About us |
| `src/pages/all-services.astro` | Services overview |
| `src/pages/services/[slug].astro` | One page per service, generated from `site.ts` |
| `src/pages/global-network.astro` | Lognet Global / WCA and Cooperative Logistics Network |
| `src/pages/contact-us.astro` | Contact form, Delhi / Mumbai / Chennai offices, map |
| `src/pages/404.astro` | Not-found page |
| `src/pages/sitemap.xml.ts` | Sitemap for Google |
| `public/_redirects` | Redirects old WordPress URLs |
| `public/_headers` | Security and caching headers |

All URLs match the old site (`/about-us/`, `/services/custom-clearance/` etc.), so existing Google rankings and links keep working.

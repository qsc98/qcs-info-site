# Quality Senior Care — website

Marketing site for Quality Senior Health Care (New Hope ADHC LLC), an Adult Day Health Care center in Fairdale, KY. Built with **Next.js 16 (App Router, static export)**, **React 19** and **Tailwind CSS 4**, deployed to **Netlify** from the `out/` folder.

## Business facts live in one place

`site.config.js` holds the name, address, phone, email, hours, payment sources, social links and the launch state. Components read from it; nothing is hard-coded in pages. Before launch:

1. Set `launch.status` to `'open'`.
2. Fill in `contact.phone`, `contact.phoneDisplay` and `hours`.
3. Add real `social` URLs if you want icons.

While `launch.status` is `'pre-launch'`, phone CTAs route to the waitlist, the contact form is replaced by the waitlist form, and hours read "To be announced".

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # writes the static site to out/
npx serve out      # preview the export
```

Node 20.9+ is required.

## Structure

- `app/` — routes (`page.js` per folder), `layout.js`, metadata routes (`sitemap.js`, `robots.js`, `manifest.js`, `opengraph-image.js`, icons), `globals.css` (Tailwind theme tokens).
- `components/` — layout (header, mobile nav, footer), page sections, shared UI in `misc/`.
- `lib/seo.js` — per-page metadata helper and the route list for the sitemap.
- `public/assets/` — images and Lottie animations.

Forms post to Netlify Forms; they are detected from the static HTML at deploy time.

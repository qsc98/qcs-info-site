# Site Audit — Quality Senior Care / Quality Adult Day Health Care (Fairdale, KY)

**Audit date:** 2026-10-23
**Scope:** every file in `pages/`, `components/`, `styles/`, `utils/`, `public/`, build/deploy/CI config, plus a local `npm ci && npm run build && npm run lint` and inspection of the exported `out/` folder. No code was changed.
**Audience assumed:** adult children of seniors, caregivers, case managers, Medicaid waiver clients; many older, not tech-savvy, on phones.

---

## Summary

The site is a well-styled Next.js 16 static export, but today it cannot convert a visitor into a phone call or tour request:

- Every **phone link is a placeholder** (`tel:+1502XXXXXXX`, `tel:+1-000-000-0000`) and the only visible number reads "(502) XXX-XXXX".
- The **contact form sends nothing** (it logs to the browser console) yet tells families "your request is in — we'll call you within 1–2 business days".
- **7 of 9 pages have no `<title>` or meta description**; the two that do carry template leftovers (a stranger's Twitter handle, an `og:image` on a foreign domain).
- The home page ships **~5 MB of images** and renders every section invisible until JavaScript loads; the design fonts are never loaded.
- Core facts contradict each other (hours Mon–Sat 7–7 vs Mon–Fri 8–5; "licensed" vs "pending state licensure"; five different business names).

The build itself passes and most body text has good contrast and size. The fixes are mostly small, content-and-wiring work rather than rewrites.

---

## 1. Project overview

### Stack (resolved versions from `package-lock.json`)

| Package | Version | Notes |
|---|---|---|
| next | 16.0.3 | Pages Router, `output: 'export'`, `images.unoptimized: true`, Turbopack. Requires Node ≥ 20.9. |
| react / react-dom | 18.3.1 | Allowed by Next 16 peer range (`^18.2.0 \|\| ^19`). |
| tailwindcss | 3.4.17 | v3; config carries shadcn/ui leftovers. |
| framer-motion | **6.0.0 (exact pin)** | Released Jan 2022. Used only for scroll fade-ins. |
| @lottiefiles/dotlottie-react | 0.15.0 | WASM player; used on 7 pages. |
| react-hook-form 7.62 + zod 4.0.17 + @hookform/resolvers 5.2 | | One form. |
| react-scroll 1.9.3, react-countup 6.5.3, react-icons 5.5, @heroicons/react 2.2 | | |
| eslint 9.39 + eslint-config-next 16.0.3 + tailwindcss/import plugins, prettier 3.6 | | Flat config. |

### Structure

```
pages/        _app, _document, index, about-us, adult-day-care, careers, contact,
              in-home-care, medical-transportation, nutritious-meals, our-center
components/   Layout/ (Header, MobileNavBar, NotificationBar, Footer, Layout, ScrollAnimationWrapper)
              ServicesSection/ (home-page service cards + FAQ lists)
              misc/ (PrimaryCta, Bullet, FaqSection, InfoStat, InsightCard, SectionEyebrow, SectionHeading, …)
              Hero, AboutUs, BenifitAndStats, PaymentLocations, ContactUs, ContactForm.tsx, FaqList, OurCenterGallery, SeoHead
styles/tailwind.css   utils/getScrollAnimation.js   public/assets (images + .lottie)   public/site.webmanifest
```

### Build / deploy (Netlify)

- `netlify.toml`: `command = "npm run build && npm run export"`, publish `out`, `NETLIFY_NEXT_PLUGIN_SKIP=true`, and a catch-all redirect `/* → /index.html 200`.
- `package.json` `export` script is literally `next build`, so **Netlify runs the full build twice** on every deploy.
- The catch-all rewrite turns every unknown URL into the home page with HTTP 200 (soft 404). Next already generates `out/404.html`, but the redirect prevents Netlify from serving it. `/favicon.ico` (no favicon exists) also returns the home page HTML.
- Local build result (Node 24): **passes**, 11 static routes. Warnings printed:
  - "Next.js inferred your workspace root… detected multiple lockfiles" (a stray `/Users/bp/package-lock.json` on this machine; harmless on Netlify but set `turbopack.root` to silence).
  - `caniuse-lite` data 14 months old; `baseline-browser-mapping` data stale (repeated 12×).
  - No TypeScript errors even though `components/ContactForm.tsx` exists with no `tsconfig.json` and no `typescript`/`@types/react` in `package.json` (typescript is only present transitively via eslint-config-next). This works today but is fragile; declare the deps or rename the file to `.jsx`.
- Export size: **15 MB total — 11 MB in `out/assets`**, 3.6 MB in `_next/static`.

### CI (`.github/workflows/test.yml`) — effectively broken

- `on:` block is malformed (`pull_request` nested under `push`), so the trigger is invalid/ignored.
- Node matrix is **16**; Next 16 requires ≥ 20.9, so the build step would fail if it ran.
- Uses `npm i --force` and `actions/checkout@v3` / `setup-node@v3` (Node 16 runtime, deprecated by GitHub).

### Lint

- `npm run lint` runs (the `--ext` flag is tolerated by this ESLint version) and reports **2 errors, 15 warnings** → `npm run lint:ci` (`--max-warnings=0`) fails.
  - Errors: unescaped `'` in `pages/contact.js:26` and `:111` (`react/no-unescaped-entities`).
  - Warnings: `text-md` is not a Tailwind class (4 service components), `radio` not a Tailwind class ×2 (`ContactForm.tsx`, a DaisyUI leftover), `text-black-800` undefined (`FaqList.js:14`), `hover:shadow-green` undefined (`ButtonOutline..js`), missing `useEffect` dependency `centerSlide` ×2 (`OurCenterGallery.js:89,101`), classname order ×2 (`Hero.js`), import order ×2 and a shorthand hint (`contact.js`).

### `npm audit`

33 advisories (1 critical, 27 high, 4 moderate, 1 low). The critical one is **`next` 16.0.3: "RCE in React flight protocol"** (fixed in later 16.x). Because the site is a static export with no server, runtime exposure is low, but the build toolchain should be updated. Others are dev-time transitive deps (babel, typescript-eslint, fast-glob/braces, postcss, tailwindcss via chokidar, svgo, sharp).

### Outdated, unused or broken pieces

| Item | Detail | Files |
|---|---|---|
| README | Says Next 13 + DaisyUI (DaisyUI was removed in commit 5664a5c); clone step `cd adhc-site` is the wrong folder name. | `README.md` |
| Unused dependencies | `embla-carousel-react` (gallery is hand-rolled), `@svgr/webpack` + the dead `turbopack.rules` SVG loader in `next.config.mjs` (SVGs are served from `/public`, never imported). `postcss-import` is unnecessary. | `package.json`, `next.config.mjs`, `postcss.config.js` |
| Unused components | `PageBackButton.js`, `ButtonPrimary.js`, `ButtonOutline..js` (note the double-dot filename). | `components/misc/` |
| Unused assets (≈ 3 MB) | `main_hero_section.jpg` 1.27 MB, `service_offerings_section.jpg` 1.43 MB, `Logo.png`, `Logo-2.png`, `quality-adhc-logo.svg`; `landingpage.png` (221 KB) in repo root. | `public/assets/`, `/` |
| Dead CSS | `.slick-dots` rules (react-slick never installed); `li.custom-list/.circle-check/.check` reference `/assets/Icon/checklist.svg` and `jam_check.svg` which **do not exist** (the browser requests them on every page and gets the home page HTML back); shadcn leftovers (`.dark` variables, `chart-*` colors, accordion keyframes using `--radix-*`), unused `blob` keyframe. `theme.boxShadow` is set outside `extend`, which deletes Tailwind's `shadow-2xl`/`shadow-inner`. | `styles/tailwind.css`, `tailwind.config.js` |
| Tailwind config | `content` includes a nonexistent `./app/**`; `darkMode: ['class']` with no toggle. | `tailwind.config.js` |
| Fonts | `_document.js` loads **Rubik** from Google Fonts (render-blocking) but `font-rubik` is never used. The design uses `font-jakarta` (26 uses) and `font-inter` (html default) which are **never loaded** — the whole site renders in the system fallback and still pays for the Rubik request. | `pages/_document.js`, `styles/tailwind.css` |
| `_document.js` | Boilerplate `getInitialProps` is unnecessary. | |
| `clean` script | Runs `npm cache clean --force` (affects the whole machine's npm cache). | `package.json` |
| Web manifest | Not linked from `<head>`; points to `/favicon/*.png` files that don't exist; `theme_color: #F53838` is the template red; description typo "Qualtiy". | `public/site.webmanifest` |

---

## 2. Bugs

### Critical

1. **Contact form does not send anything.** `components/ContactForm.tsx:42-47` — `onSubmit` is `console.log(...)`, `setSubmitted(true)`, `reset()`. There is no Netlify Forms attribute, no fetch, no endpoint. The success banner then promises "We'll call you within 1–2 business days" and shows the placeholder phone number. Every inquiry submitted since launch has been lost.
2. **All phone links are placeholders.** `tel:+1502XXXXXXX` in `components/Hero.js:83`, `components/ContactForm.tsx:201`, `pages/adult-day-care.js:460`, `pages/contact.js:83`, `pages/in-home-care.js:433`, `pages/our-center.js:326`; `tel:+1-000-000-0000` in `pages/about-us.js:243`, `pages/medical-transportation.js:301`, `pages/nutritious-meals.js:325`. Visible text "(502) XXX-XXXX" on `pages/contact.js:84` and the form success message.
3. **No page titles on 7 pages.** Only `pages/index.js` and `pages/contact.js` render `<SeoHead>`. Verified in `out/`: `about-us`, `adult-day-care`, `careers`, `in-home-care`, `medical-transportation`, `nutritious-meals`, `our-center` have no `<title>` and no description.

### Broken links and dead controls

4. Footer "Privacy Policy", "Terms of Service", "Disclaimer" → `/privacy-policy`, `/terms-of-service`, `/disclaimer` do not exist (served as the home page by the Netlify catch-all). `components/Layout/Footer.js:121-130`.
5. Footer "Explore Our Services" items are `<li className="cursor-pointer">`, not links. `Footer.js:44-55`.
6. `href="#contact"` CTAs on pages that have no `#contact` element → button does nothing: `pages/about-us.js:246`, `pages/adult-day-care.js:463`, `pages/in-home-care.js:436`, `pages/nutritious-meals.js:328`. (`pages/careers.js:99` correctly uses `/#contact`.)
7. "Services Overview" in both menus is a react-scroll link to `#services`, which exists only on the home page; on every other page it silently does nothing. `components/Layout/Header.js:90-100`, `components/Layout/MobileNavBar.js:37-54`. The react-scroll `<a>` also has no `href`, so it is not keyboard-focusable.
8. `/our-center` (photos, hours, map, tour checklist) is **not in any menu** — reachable only from the hero's "Learn about our center" button.
9. All social links point to `https://facebook.com`, `https://instagram.com`, `https://linkedin.com` (generic home pages). `Header.js`, `Footer.js`, `components/ContactUs.js`, `pages/contact.js`.
10. Footer newsletter form has no `action`, handler, or `name` attributes; "Sign Up" submits a GET to the same page and reloads. `Footer.js:20-35`.
11. Footer Google Maps embed uses a fabricated place id (`0x88690a4695555555:0x1111111111111111`) at coordinates that differ from the `pages/our-center.js` embed for the same address → likely wrong pin. `Footer.js:65`.
12. Hero "i" tooltip is hover-only on a 16 px span; unusable on touch and keyboard. `components/Hero.js:94-103`.

### Rendering / logic

13. `components/misc/SectionHeading.js` always renders an `<h2>`; `pages/careers.js:188-191` calls it with no `title` → an **empty `<h2>`**, immediately followed by `FaqSection` rendering its own "Frequently Asked Questions" heading.
14. `pages/careers.js:102` passes `variant="outline"` to `PrimaryCta`, which has no such prop and spreads it onto the DOM (React unknown-prop warning). `pages/careers.js:178-181` passes `icon={...}` to `Bullet`, which ignores it.
15. Both the mobile and desktop `DotLottieReact` instances are mounted on every inner page (one hidden via `hidden sm:block`), so **two WASM players load and animate per page**. All 7 Lottie pages.
16. `components/Layout/ScrollAnimationWrapper.jsx` uses `viewport={{ once: true, amount: 0.6 }}` with `initial` = `opacity: 0, y: 150`. Any wrapped block taller than ~1.6× the viewport can never be 60 % visible and **never appears**. The exported home page contains **30 elements with inline `opacity:0`**; nothing is visible until JS hydrates and the observer fires.
17. Nav "active" state is local `useState`, not derived from the router, so highlights are wrong after navigation and `'services'` is never set on desktop. `Header.js:10`, `MobileNavBar.js`.
18. `?from=…` query strings on the four home-page service CTAs (`components/ServicesSection/*.js`) are unused and leak into `<link rel="canonical">`/`og:url` via `router.asPath`, creating duplicate URLs.
19. Undefined Tailwind classes: `text-md` (4 service components), `text-black-800` (`FaqList.js`), `hover:shadow-green` (`ButtonOutline..js`), `radio` ×2 (`ContactForm.tsx`).
20. No favicon at all; `/favicon.ico` 404s into the home page.
21. **Hours contradiction:** "Mon–Sat • 7 AM – 7 PM" (`PaymentLocations.js`, `adult-day-care.js`, `our-center.js`, `about-us.js`, `careers.js`) vs **"Mon-Fri from 8am to 5pm"** (`pages/contact.js:81`).
22. Careers banner: "check back in early summer 2026" is stale, while the same page lists "who we're hiring today". `pages/careers.js:79-82, 135`.

---

## 3. Accessibility (WCAG 2.1 AA)

### Text size and legibility

- `text-xs` (12 px) is used ~40 times, often for information families need: section subtitles (also uppercase with 0.2em letter-spacing — `SectionHeading.js`, `ServiceOfferings.js`, `BenifitAndStats.js`, `PaymentLocations.js`, `AboutUs.js`, `ContactUs.js`), hero "Medicaid & private pay accepted" (`Hero.js:92`), InfoStat labels, mobile nav labels, "Who It Supports" eyebrows.
- Below 12 px: mobile "Service Navigator" `text-[0.58rem]` (~9.3 px) and "Close" `text-[0.65rem]` (~10.4 px) in `MobileNavBar.js:136-143`; notification-bar brand `text-[0.65rem]`; hero tooltip 11 px with a 10 px "i" badge.
- Uppercase + wide tracking on small text is hard for older readers and screen magnifier users. Target ≥ 16 px body, ≥ 14 px for any supporting text, sentence case.

### Contrast (computed, WCAG relative luminance)

| Pair | Ratio | Result |
|---|---|---|
| Navy `#1a4566` on white (headings) | 10.1:1 | Pass |
| `text-slate-600` body on white | 7.6:1 | Pass |
| Section subtitle `#4F5665` on white | 7.4:1 | Pass |
| White on teal CTA `#116768` | 6.6:1 | Pass |
| Footer `#AFB5C0` text on `#0f172a` | 8.7:1 | Pass |
| `text-slate-500` small text on white | 4.8:1 | Pass (barely) |
| **`text-slate-400` dropdown arrows / icons / input placeholders** | **2.56:1** | **Fail** (`Header.js`, `ContactForm.tsx`) |
| **Error text `text-red-500` at 12–14 px** | **3.76:1** | **Fail** (`ContactForm.tsx`) |
| **Input border `slate-200` on white** | **1.23:1** | **Fail** 3:1 non-text contrast |
| **Card border `slate-100` on white** | **1.10:1** | **Fail** 3:1 (borders are the only boundary cue on many cards) |

Also: global `h1/h2/h3` use `bg-clip-text text-transparent` gradients (`styles/tailwind.css:10-20`); automated tools cannot measure these, and headings sit on photo backgrounds at 40–50 % opacity (`section-shell` hero blocks), so real-world contrast varies by position.

### Images and alt text

- `alt="Logo"` twice (`Header.js:55`, `Footer.js:78`) — should be the business name; the header one is inside the home link.
- Hero `alt="Seniors enjoying"` (`Hero.js:111`) is vague; `ServiceOfferings.js:28` `alt="Service Offerings"` on an 814 KB infographic that likely conveys the service list.
- Gallery placeholders carry real-sounding alts ("Center exterior", "Dining and café area") for a generic placeholder graphic. `OurCenterGallery.js:22-27`.
- `pages/careers.js:84-87` background `div` lacks `aria-hidden`.

### Heading order

- Home: h1 → h2 … → h3 — fine.
- `pages/contact.js`: h1, then **h3** "Email Us/Visit Us/Call Us" before the h2 "Send us a Message".
- Footer: h2 "Get the latest news!" → **h4** "Explore Our Services" (skips h3), on every page.
- `pages/careers.js`: empty h2 (bug 13).
- `pages/in-home-care.js:226-229, 310-313`: eyebrow and h2 carry identical text ("Why Families Choose Us", "Safety, Training & Oversight").
- `pages/medical-transportation.js:267-275`: h4/h5 inside a card after an h3 — acceptable but noisy.

### Keyboard and focus

- Services dropdown button: no `aria-expanded`, `aria-controls`, or `aria-haspopup`; no Escape to close; closes only on `mousedown` outside. `Header.js:60-82`.
- react-scroll links (`<a>` without `href`) are unfocusable. `Header.js`, `MobileNavBar.js`.
- Focus indicators removed with no replacement: `FaqList.js:12` (`focus:outline-none`), every input in `ContactForm.tsx` (`focus:outline-none`), `PageBackButton.js` (`focus-visible:outline-none`).
- No skip-to-content link; `<nav>` elements have no `aria-label` (two navs on every page).
- Gallery: `div tabIndex=0` with `onKeyDown` but no `role`; `aria-roledescription="carousel"`/`"slide"` without roles is invalid; progress buttons are `h-1` (4 px) tall. `OurCenterGallery.js:122-190`.

### Forms (`components/ContactForm.tsx`)

- Five `<label>`s have no `htmlFor` and inputs have no `id` → labels not announced.
- Radio groups ("How can we help?", "Best time to call") lack `fieldset`/`legend`; the group label is a `<p>`.
- Errors are plain `<p>` not tied with `aria-describedby`; inputs lack `aria-invalid`; success message is not a live region.
- Positives: PHI warning, consent checkbox, `type="email"`/`type="tel"`.

### Tap targets (≥ 44 × 44 px recommended, 24 px minimum)

- Header social icons 20 × 20 px with no padding — and the header's social row is **visible on mobile** too. `Header.js:172-197`.
- Mobile nav icon buttons ≈ 36 px; "Close" pill ≈ 20 px tall; gallery progress bars 4 px tall; hero tooltip 16 px.

### Motion

- **No `prefers-reduced-motion` handling anywhere** (grep: zero matches).
- Infinite `animate-float` on the hero image (`Hero.js:108`, `tailwind.config.js`), spring slide/fade on every section (`utils/getScrollAnimation.js`), CountUp counters (`BenifitAndStats.js`), autoplaying Lottie on 7 pages, `whileHover` lifts.
- Gallery auto-advances every 4 s with no pause/stop control (hover pause only) → fails **WCAG 2.2.2 Pause, Stop, Hide**. `OurCenterGallery.js:92-101`.
- framer-motion 6 exposes `useReducedMotion`; dotlottie accepts `autoplay={false}`; CSS needs an `@media (prefers-reduced-motion: reduce)` block.

### Other

- Icon-only social links without `aria-label` in `ContactUs.js:61-69`, `Footer.js:101-109`, `pages/contact.js:93-101` (Header has them).
- Language `lang="en"` set; `<main>` landmark present; `<details>/<summary>` FAQ on inner pages is natively accessible (good).

---

## 4. User experience — the 10-second test

| Question | Verdict | Why |
|---|---|---|
| What services do you offer? | Partial (desktop) / **Fail** (mobile) | Hero headline "Quality You Can Trust. Care You Deserve." and body copy never say "adult day health care" or "Fairdale". The four service cards sit below a 1.2 MB floating illustration that appears **first** on mobile (`Hero.js:107`, `order-1`). |
| Who qualifies (Medicaid / waiver)? | **Fail** | One 12 px line "Medicaid & private pay accepted" with a hover-only tooltip. No waiver names, no eligibility criteria, no "how to apply", no case-manager pathway. The inner costs tables say "availability varies by state" — generic, not Kentucky-specific. |
| Hours? | **Fail** | Third home section ("Why Families Trust Us"); not in header/notification bar; contact page contradicts (Mon–Fri 8–5). |
| Location? | Fail on mobile | Address is in the desktop-only notification bar (`lg:flex`); on phones it first appears in the footer. No "Fairdale / South Louisville" in the headline. |
| Transportation? | Pass | Hero card + dedicated page. |
| How to call? | **Fail** | Placeholder numbers; no phone text on any page except contact; header and mobile nav have no Call button. Phone is **not** tap-to-call and **not** visible on every page. |
| How to schedule a tour? | **Fail** | No "Schedule a tour" CTA on the home page ("Learn about our center" instead). Tour language exists only deep in `/our-center` and `/adult-day-care`. |

Additional UX issues:

- Hidden key page (`/our-center`), dead "Services Overview" off-home, dead `#contact` buttons, dead footer links (see §2).
- Dropdown labels use "↗" and "↓" glyphs as the only hint of behaviour.
- Jargon without expansion: "ADLs", "LTC", "DSP", "respite". ("CNA", "RN/LPN", "PHI" are expanded or common.)
- Trust-eroding contradictions: "Licensed & trained team" / "Adult Day Health Care licensed" (`adult-day-care.js:29, 341`) vs notification bar "Opening soon—pending state licensure" (`NotificationBar.js:29`); home FAQ promises "medication management, vitals monitoring" (`AdultDayCareService.js:21`) while inner pages say "medication reminders per policy"; "Research-backed outcomes" with four unsourced statistics (`BenifitAndStats.js`).
- Five business names in use (see §6) and two email domains.
- Good: large readable body copy, clear service pages, FAQs on every service, cost/funding tables, tour checklist.

---

## 5. Mobile (375 px)

- **Notification bar / header overlap.** `Header.js:49` fixes the header at `top-[2.25rem]`, assuming a 32 px bar. The mobile bar text "QUALITY ADULT DAY HEALTH CARE" at 12 px uppercase with `tracking-[0.4em]` needs ~380 px and wraps to two lines at 375 px, so the header covers the second line. `NotificationBar.js:7`.
- **Floating bottom nav occludes content.** `MobileNavBar.js:82` is `fixed bottom-6` (~100 px tall) but `<main>`/footer have no bottom padding → it covers footer legal links, the contact form's "Send Message" button when scrolled to the end, and final CTAs.
- Header social icons (20 px) remain on mobile next to the logo while the real navigation is at the bottom; address and "opening soon" notice are hidden on mobile.
- Home hero: `pt-24` (96 px) is less than bar + header (~131 px), so the illustration begins under the transparent header. `Hero.js:37`.
- Inner pages: `Layout` `pt-32` + two `mt-6` wrappers ≈ 176 px of blank space before the eyebrow pill, then a 343 px square Lottie before the first button. `Layout.js:9`, each page's outer `div`.
- The hero tooltip is hover-only; unusable on touch.
- Costs tables are a plain two-column `<table>` with `px-5` cells and no scroll wrapper — readable but cramped.
- Mobile services drawer opens upward to `max-h-[520px]`; fine at 667 px, tight on 568 px screens.
- Each inner page also loads the hidden desktop Lottie (bug 15), doubling animation work on phones.
- Not seen: horizontal overflow (no `overflow-x` issues found in source; `main` overflow rule is commented out but animations move on Y only).

Recommend confirming visually at 375 × 667 after fixes.

---

## 6. SEO and local search

- **Titles/descriptions:** only `/` ("Quality Senior Care") and `/contact` ("Contact Us - Quality Senior Care") have them. Neither mentions adult day health care, Fairdale, Louisville, or Medicaid. 7 pages have none.
- **Template leftovers in `components/SeoHead.js`:** `og:image` → `https://next-landing-vpn.vercel.app/assets/main_hero_section.jpg` (another site's domain), `twitter:site` `@F2aldi`, description "Quality services to elevate the daily lives of adults", `url: https://qualityseniorcare.org` (confirm this is the live domain), `author` "Quality Senior Healthcare Team". The favicon array is defined but commented out of the render.
- **Canonical/og:url** use `router.asPath`, so `?from=…` variants produce distinct canonicals.
- **Missing:** `robots.txt`, `sitemap.xml`, JSON-LD (`LocalBusiness`/`HealthAndBeautyBusiness` or `MedicalBusiness` with `openingHoursSpecification`, `address`, `telephone`, `geo`, `areaServed`, `paymentAccepted`), favicon set, `<link rel="manifest">`, `theme-color`, custom 404 served (Netlify catch-all overrides `out/404.html`).
- **NAP consistency (Name / Address / Phone):**
  - Names: "Quality Senior Care" (titles, SeoHead, package name), "Quality Adult Day Health Care" (notification bar), "Quality Adult Care Services" / "QCS" (manifest, consent text), "Quality Senior Health Care" (footer ©), "Quality Senior Healthcare Team" (meta author). Pick one legal/DBA name and use it everywhere, including the manifest and schema.
  - Address: consistent "811 Mt Holly Rd, Fairdale, KY 40118" except footer punctuation "Fairdale KY, 40118" (`Footer.js:61`). Footer and about copy say "Louisville, KY"; schema should list Fairdale with `areaServed` Louisville/Jefferson County.
  - Phone: placeholders everywhere.
  - Hours: contradictory (§2 item 21).
  - Email: `admin@qualityseniorcare.org` vs `careers@qualityadultday.com` (`careers.js:55`).
- Duplicate FAQ content between home (`components/ServicesSection/*.js`) and inner pages with different answers — consolidate so one canonical answer exists.
- Soft 404s from the SPA fallback let search engines index junk URLs as the home page.

---

## 7. Performance

### Images (all served `unoptimized` at original size)

| Asset | Size | Dimensions | Where |
|---|---|---|---|
| `main_hero_section.svg` | 1.23 MB | SVG wrapping **2 embedded base64 rasters** | Home hero (`Hero.js:110`) |
| `aboutus.jpg` | 1.06 MB | 6883 × 5000, rendered at 384 px, `priority` | Home (`AboutUs.js:44`) |
| `service_offerings_section.svg` | 814 KB | SVG wrapping 2 embedded rasters | Home (`ServiceOfferings.js:27`) |
| `background-card.jpg` | 645 KB | 6309 × 3679 | **Every page** via stylesheet (card backgrounds) |
| `honeycomb-background.jpg` | 519 KB | 7801 × 4001 | Every page via stylesheet + inline styles |
| `background-3.jpg` | 447 KB | 7001 × 4001 | Home (`AboutUs.js:19`) |
| `background-2.jpg` | 119 KB | 3000 × 2000 | Every page via stylesheet |
| `Logo-Transparent.png` / `Logo-Circle.png` | 107 KB / 71 KB | 500 × 500 for a 75 px logo | Header / footer, every page |
| `background-card-2.jpg` | 68 KB | 2000 × 1125 | Every page |
| `background.jpg` | 42 KB | 2000 × 1333 | Heroes |

Home page image payload ≈ **5.1 MB**; every inner page ≈ **1.35 MB** of backgrounds + logo before its own Lottie. No WebP/AVIF, no responsive `srcset`/`sizes` (irrelevant while `unoptimized`), CSS backgrounds cannot lazy-load. `quality={100}` props are no-ops. The stylesheet also requests two **nonexistent** `/assets/Icon/*.svg` files on every page.

### JavaScript (gzipped, measured from `out/`)

| Page | First-load JS + CSS |
|---|---|
| `/` | 241 KB |
| `/contact` | 250 KB (adds react-hook-form + zod + Lottie) |
| Other pages | 193–196 KB |
| `/404` | 104 KB |

Largest chunks: 54 KB (React + Next runtime), 59 KB ×2 (dotlottie player split), 53 KB, 47 KB (framer-motion), 30 KB ×3. For a brochure site, ~200 KB gz per page is heavy; the interactive surface is a dropdown, a bottom nav, FAQ toggles, one gallery and one form.

- framer-motion 6 (~47 KB gz) is used only for fade-in-on-scroll and hover lifts — replaceable with CSS `@keyframes` + a 20-line IntersectionObserver, or at least `LazyMotion`/`m` components.
- dotlottie WASM runtime on 7 pages, imported eagerly and mounted twice per page (§2 item 15). Use `next/dynamic(..., { ssr: false })`, mount once, and skip under reduced motion.
- react-scroll, react-countup, react-hook-form + zod + resolvers each add weight for a single small feature.

### Fonts

- One render-blocking Google Fonts request for Rubik that nothing uses; Plus Jakarta Sans and Inter never load. Use `next/font/google` (self-hosted, `display: swap`) for the two real fonts and delete the Rubik link.

### Rendering model (client vs server)

- Pages Router static export: HTML is pre-rendered, which is good. But every animated block is pre-rendered with inline `opacity:0; transform: translateY(150px)` (30 instances on the home page), so **LCP and all content wait for hydration + IntersectionObserver**. Users with slow JS or disabled JS see blank sections.
- All components are client-rendered React; only Header, MobileNavBar, FaqList, OurCenterGallery and ContactForm need state. The rest could be static markup.
- Netlify builds twice (§1).

---

## 8. Content gaps

Pages or information families, caregivers and case managers typically look for and cannot find:

- **Eligibility / admissions:** who qualifies (age, level-of-care criteria, physician order or assessment requirements), intake steps, what documents to bring (only a 3-line checklist on `/our-center`).
- **Kentucky Medicaid waiver guidance:** which waiver programs cover adult day health care, how to apply, how a case manager refers, contact points (Area Agency on Aging — KIPDA for Jefferson County — and DCBS). Current copy says "availability varies by state". *Content to confirm with the owner.*
- **Pricing / rates:** "Clear daily/half-day rates" are promised but no numbers or rate sheet.
- **Accepted insurance / payers:** three words ("Medicaid, Private Pay, Veteran Benefits") and no plan names, VA program names, or LTC carriers.
- **Daily schedule:** fragments on `/adult-day-care` and `/our-center` but no single, printable schedule, activity calendar or sample menu by week.
- **Staff:** three "Image Coming Soon" placeholders titled "Team Member 1/2/3 — Role • Credentials" (`about-us.js:173-195`). No director/RN named.
- **Testimonials / reviews:** none anywhere; no Google Business Profile link.
- **Photos:** six placeholder slides (`Image-placeholder.png`) in the gallery; no real images of the center.
- **Holidays / closures / inclement weather policy.**
- **Languages spoken, cultural/faith accommodations** (mentioned in passing on transport page only).
- **Privacy policy, accessibility statement, non-discrimination notice, 404 page.**
- **News / events** despite a newsletter signup in the footer.
- **Service area map** (zip codes / counties for transportation).
- **Spanish or large-print option.**

---

## 9. Trust and compliance

- **No privacy policy, terms, or disclaimer** although the footer links to all three. For a health-adjacent service collecting names, phones and emails this is the first thing a case manager or cautious family checks.
- **Contact form** (`ContactForm.tsx`) collects first/last name, email, phone, service interest (including "Adult Day Health Care") and a free-text message, then **discards it while reporting success**. It does carry a "do not include PHI" note and a consent checkbox (good). When wired up: send over HTTPS to a destination you control (Netlify Forms or Formspree are acceptable for non-PHI intake), state in the privacy policy that the form is not for medical information, and add a honeypot/spam check. If the business later wants health details in the form, a HIPAA-eligible vendor and a BAA are required.
- **Licensure claims vs status:** "Adult Day Health Care licensed", "Licensed & trained team", "Licensed nurses & CNAs on-site", "RN-led oversight" appear while the notification bar says "pending state licensure". Kentucky regulates ADHC claims; align wording with actual status before launch.
- **Unsourced statistics** labelled "Research-backed outcomes" (33 %, 78 %, 5×, 74 %). Cite sources or remove.
- **Careers page** lists "open roles" and benefits ("Medical, dental, vision… from day one") while hiring has not begun — potential EEO/advertising concern; mark as planned roles.
- **Third-party embeds** (two Google Maps iframes, Google Fonts) load without notice — acceptable in the US but disclose in the privacy policy.
- **Security headers:** none configured in `netlify.toml` (`Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`). Low risk for a static site; easy win.
- **Dependency security:** `next` 16.0.3 has a published critical advisory; update the toolchain.
- Positive: HTTPS on Netlify by default; `rel="noopener noreferrer"` on external links; no analytics/trackers; no cookies set by the site itself.

---

## Prioritized fix list

Effort: **S** < 2 h, **M** half-day to a day, **L** multi-day or needs new content from the owner.

### Critical — the site cannot generate a call or inquiry today

| # | Fix | Effort | Files |
|---|---|---|---|
| C1 | Wire the contact form to a real destination (Netlify Forms with `data-netlify="true"` + hidden `form-name`, or Formspree); on failure show an error with the phone number; remove the false "your request is in" copy until it is true. | M | `components/ContactForm.tsx`, `netlify.toml`, `pages/contact.js` |
| C2 | Replace every placeholder `tel:` and "(502) XXX-XXXX" with the real number; add a visible, tap-to-call phone in the header, notification bar, mobile bottom nav ("Call" item) and footer so it is on every page. | S | `components/Hero.js`, `components/ContactForm.tsx`, `components/Layout/Header.js`, `NotificationBar.js`, `MobileNavBar.js`, `Footer.js`, `pages/about-us.js`, `adult-day-care.js`, `contact.js`, `in-home-care.js`, `medical-transportation.js`, `nutritious-meals.js`, `our-center.js` |
| C3 | Add `<SeoHead>` with a unique, local title and description to the 7 pages that lack one; fix defaults (real `og:image` on own domain, remove `@F2aldi`, confirm site URL, strip query strings from canonical). | S | `components/SeoHead.js`, `pages/about-us.js`, `adult-day-care.js`, `careers.js`, `in-home-care.js`, `medical-transportation.js`, `nutritious-meals.js`, `our-center.js` |
| C4 | Fix dead `#contact` buttons (→ `/contact`), footer legal links, footer service list (→ real links), "Services Overview" (→ `/#services`), add `/our-center` to both menus. | S | `pages/about-us.js`, `adult-day-care.js`, `in-home-care.js`, `nutritious-meals.js`, `components/Layout/Footer.js`, `Header.js`, `MobileNavBar.js` |
| C5 | Publish a privacy policy (and simple terms/disclaimer) page; link from footer and the form. | M | new `pages/privacy-policy.js` (+ terms, disclaimer), `components/Layout/Footer.js`, `components/ContactForm.tsx` |
| C6 | Resolve factual contradictions: one set of hours, one business name, one email domain, licensure wording matching actual status, medication-management vs reminders. | S (content decisions from owner) | `pages/contact.js`, `components/Layout/NotificationBar.js`, `Footer.js`, `SeoHead.js`, `public/site.webmanifest`, `pages/adult-day-care.js`, `our-center.js`, `careers.js`, `components/ServicesSection/AdultDayCareService.js` |

### High — findability, speed and accessibility for the target audience

| # | Fix | Effort | Files |
|---|---|---|---|
| H1 | Rewrite hero: headline names the service and place ("Adult Day Health Care in Fairdale, KY"), show hours + address + "Medicaid & private pay" as readable text, two CTAs: **Call** and **Schedule a tour**; put text before the illustration on mobile. | S | `components/Hero.js` |
| H2 | Image pipeline: export real JPG/WebP at display size (hero ≤ 1200 px, about ≤ 800 px, backgrounds ≤ 1600 px and heavily compressed, logos ≤ 150 px PNG/SVG); replace the raster-in-SVG hero/services images; delete unused originals. Target < 800 KB images on home. | M | `public/assets/*`, `components/Hero.js`, `ServiceOfferings.js`, `AboutUs.js`, `Header.js`, `Footer.js`, `styles/tailwind.css`, pages with inline backgrounds |
| H3 | Load Plus Jakarta Sans + Inter with `next/font/google`; remove the Rubik link. | S | `pages/_app.js`, `pages/_document.js`, `tailwind.config.js` |
| H4 | Respect `prefers-reduced-motion`: gate framer-motion variants with `useReducedMotion`, Lottie `autoplay` off, CSS media query for `animate-float`, gallery autoplay off + visible Pause button. | M | `utils/getScrollAnimation.js`, `components/Layout/ScrollAnimationWrapper.jsx`, `components/OurCenterGallery.js`, `styles/tailwind.css`, all 7 Lottie pages |
| H5 | Make content visible without JS: lower `viewport.amount` to ~0.15, animate from `opacity: 1` on the server (or add `.no-js` fallback), or drop the entrance animation entirely. | S | `components/Layout/ScrollAnimationWrapper.jsx`, `utils/getScrollAnimation.js` |
| H6 | Form accessibility: `id`/`htmlFor`, `fieldset`/`legend` for radio groups, `aria-describedby` + `aria-invalid` for errors, `role="status"` on success, visible focus rings, darker placeholder/error/border colors. | S | `components/ContactForm.tsx` |
| H7 | Mobile layout: add bottom padding equal to the floating nav height on `<main>`/footer; fix notification-bar wrapping and header offset; hide header social icons below `lg`; raise all sub-14 px text to ≥ 14 px. | M | `components/Layout/Layout.js`, `Header.js`, `NotificationBar.js`, `MobileNavBar.js`, `components/misc/SectionHeading.js`, `InfoStat.js` |
| H8 | Local SEO plumbing: `robots.txt`, `sitemap.xml`, `LocalBusiness` JSON-LD (name, address, phone, geo, hours, `areaServed`, `paymentAccepted`), favicon set + `<link rel="manifest">` + `theme-color`, custom 404 by removing the SPA catch-all redirect. | M | `public/robots.txt`, `public/sitemap.xml` (or `next-sitemap`), `components/SeoHead.js`, `public/favicon/*`, `public/site.webmanifest`, `netlify.toml`, `pages/404.js` |
| H9 | Keyboard: `aria-expanded`/`aria-controls` + Escape on the Services dropdown; replace react-scroll links with real `<Link href="/#services">`; restore focus styles on FAQ buttons; skip link; `aria-label` on both navs and all icon-only links. | S | `components/Layout/Header.js`, `MobileNavBar.js`, `components/FaqList.js`, `ContactUs.js`, `Footer.js`, `pages/contact.js` |
| H10 | Repair CI and scripts: valid `on:` block, Node 20/22, `npm ci`, actions v4; make `export` a no-op or drop it from the Netlify command; fix the 2 lint errors so `lint:ci` passes; update `next` past the critical advisory. | S | `.github/workflows/test.yml`, `package.json`, `netlify.toml`, `pages/contact.js` |

### Medium — content depth and code health

| # | Fix | Effort | Files |
|---|---|---|---|
| M1 | New "Eligibility & Medicaid Waivers" page (who qualifies, Kentucky waiver programs, how to apply, referral path for case managers, documents to bring); link from hero, nav and costs tables. | L (content from owner) | new `pages/eligibility.js`, `components/Layout/Header.js`, `MobileNavBar.js`, `pages/adult-day-care.js` |
| M2 | Consolidate FAQs into one source of truth; remove conflicting home-page answers or make them match. | S | `components/ServicesSection/*.js`, `pages/*.js` |
| M3 | Mount one Lottie per page via `next/dynamic` (`ssr: false`), choose size with CSS. | S | 7 pages |
| M4 | Clean-up: remove `embla-carousel-react`, `@svgr/webpack`, `postcss-import`, the svgr Turbopack rule, unused components, unused/oversized assets, dead CSS (`slick`, `custom-list`, shadcn vars), `./app/**` content glob; fix README. | S | `package.json`, `next.config.mjs`, `postcss.config.js`, `components/misc/PageBackButton.js`, `ButtonPrimary.js`, `ButtonOutline..js`, `public/assets/*`, `styles/tailwind.css`, `tailwind.config.js`, `README.md`, `landingpage.png` |
| M5 | Social links → real profiles (or remove until they exist). | S | `components/Layout/Header.js`, `Footer.js`, `components/ContactUs.js`, `pages/contact.js` |
| M6 | Heading-order fixes: contact page h2 before h3s, footer h4 → h3, careers empty h2, duplicate eyebrow/title text. | S | `pages/contact.js`, `components/Layout/Footer.js`, `pages/careers.js`, `pages/in-home-care.js`, `components/misc/SectionHeading.js` |
| M7 | Replace or cite the four statistics; soften "Research-backed". | S | `components/BenifitAndStats.js` |
| M8 | Derive nav active state from `useRouter().pathname`. | S | `components/Layout/Header.js`, `MobileNavBar.js` |
| M9 | Remove `?from=` query strings; fix footer map embed to the correct place id. | S | `components/ServicesSection/*.js`, `components/Layout/Footer.js` |
| M10 | Newsletter form: wire to a provider or remove. | S | `components/Layout/Footer.js` |
| M11 | Alt text: business name on logos, descriptive hero/services alts, honest gallery alts. | S | `components/Layout/Header.js`, `Footer.js`, `Hero.js`, `ServiceOfferings.js`, `OurCenterGallery.js` |

### Nice-to-have

| # | Fix | Effort | Files |
|---|---|---|---|
| N1 | Replace framer-motion with CSS animations + IntersectionObserver; drop react-scroll and react-countup. | M | `components/Layout/ScrollAnimationWrapper.jsx`, `utils/getScrollAnimation.js`, all components using `motion.*` |
| N2 | Security headers (`CSP`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) via `netlify.toml` `[[headers]]`. | S | `netlify.toml` |
| N3 | Real photos, staff bios, testimonials, printable daily schedule and sample menu, accepted-payer list, holiday calendar, languages spoken. | L (content) | `pages/our-center.js`, `about-us.js`, `adult-day-care.js`, `nutritious-meals.js`, `components/OurCenterGallery.js` |
| N4 | Upgrade framer-motion (or `motion`), React 19, refresh `caniuse-lite`; add `typescript` + `@types/*` + `tsconfig.json` or rename the one `.tsx`. | M | `package.json`, `components/ContactForm.tsx` |
| N5 | Accessibility statement page; Spanish toggle or at least key pages translated; large-text toggle. | L | new pages, `components/Layout/Header.js` |
| N6 | Set `turbopack.root` to silence the lockfile warning; remove `clean` script's global cache wipe. | S | `next.config.mjs`, `package.json` |

---

*Measurements: image sizes via `stat`/`sips`; contrast via WCAG relative-luminance formula; bundle sizes via gzip of files referenced by each exported HTML page; build and lint output from a local `npm ci && npm run build && npm run lint` on Node 24.*

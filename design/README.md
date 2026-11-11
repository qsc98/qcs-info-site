# Quality Senior Health Care — home page design (final reference)

This folder is the single source of truth for the approved home page design.
It is self-contained: plain HTML, SVG and JSON, no tooling, no account needed.
If you are an AI agent or a developer picking this up later, read this file
first; everything you need to rebuild or re-iterate the page is here or in the
files it points to.

| File | What it is |
| --- | --- |
| [final/Home-final-Desktop.html](final/Home-final-Desktop.html) | The approved page at 1280px, exactly as signed off. Open in a browser. |
| [final/Home-final-Mobile.html](final/Home-final-Mobile.html) | The same page at 390px. |
| [final/sections/desktop/](final/sections/desktop/), [final/sections/mobile/](final/sections/mobile/) | The page split into one HTML fragment per section, in page order, byte-identical to the full pages. Edit a fragment to re-iterate one section. |
| [tokens.json](tokens.json) | The design tokens from §2 in machine-readable form. |
| [assets/](assets/) | The seven illustrations (SVG) and the logo (PNG). |

The full pages and the fragments use **inline styles only**, so every size,
gap, color and radius is readable directly in the markup. This document
explains the system behind those numbers, carries the final copy, and records
the rules that are not visible in the HTML (behaviour, states, accessibility).

---

## 1. Context the design depends on

- **Business state:** New Hope ADHC LLC, d/b/a Quality Senior Health Care, Fairdale KY. Licensed by the Commonwealth of Kentucky; **not yet operating**; Kentucky Medicaid provider enrollment in progress. Phone, hours and rates are intentionally absent until opening. The only conversion is a **waitlist email** (Netlify form).
- **Services (always all four, equal weight):** Adult Day Health Care · In-Home Care · Medical Transportation · Nutritious Meals. The page must never read as "day care only".
- **Audience:** adult children and spouses (45–70, mostly on phones), professional referrers (discharge planners, case managers, social workers), and some participants themselves. Hence: large type, high contrast, warm but competent tone, no stock-photo feel.
- **Imagery rule:** no photographs of real people. All imagery is flat vector illustration in the brand palette (see §4). If photos are introduced later, keep the slot aspect ratios and still avoid faces.
- **Wording rule:** never "parent" / "Mom or Dad" in copy that addresses the reader; the reader's relationship to the person varies. Use "the person", "someone you care for", "the caregiver", or address the household.
- **Config source of truth in code:** `site.config.js` (name, legal name, address, email, launch status, payment lists). Copy below that repeats those values should be read from config in the build.

---

## 2. Design tokens

Also in [tokens.json](tokens.json).

### 2.1 Color

| Token | Hex | Where it is used |
| --- | --- | --- |
| navy | `#1a4566` | headings, hero panel base, dark panels, footer, primary button on light surfaces, logo tab text |
| teal | `#116768` | accent word in every H2, icons, eyebrow labels, CTA on dark surfaces, toggles-on, links (`#0d5556` on hover) |
| mint | `#e8f3f1` | soft panels (stats stage, who-section left panel), icon tiles, selected states |
| mint-strong | `#9fd8cf` | accent word on navy (hero), stat numbers on navy, icons/links on navy, first avatar circle |
| mint-mid | `#5fb3a5` | second avatar circle, illustration greens |
| grey | `#f7f8f5` | alternate section background, chat card, card header strips |
| border | `#e3ebe8` | card borders, dividers, chip borders |
| text | `#1f2937` | body text on white |
| text-muted | `#475569` | paragraphs, card lines |
| text-faint | `#64748b` | captions, footnotes, card sub-lines |
| on-navy-muted | `#c9d7e3` | paragraphs on navy |
| on-navy-faint | `#9fb0c0` | footer legal bar |
| on-teal-muted | `#d8efeb` | paragraph on the teal waitlist panel |
| on-image-text | `#e6edf3` | hero sub-paragraph over the image |
| amber | `#f5b544` | third avatar circle, sun in illustrations |
| amber-status | `#ffd27a` on navy, `#b7791f` on light | the word "Enrolling" next to Kentucky Medicaid |

Translucent whites on the hero image: pills `rgba(255,255,255,0.16)` fill / `rgba(255,255,255,0.35)` border; service pills `0.14` / `0.30`; mobile grid tiles `0.14` / `0.28`; secondary button border `rgba(255,255,255,0.7)`.

Hero overlay (keeps white nav links and text legible on any image):
`linear-gradient(180deg, rgba(10,31,51,0.55) 0%, rgba(10,31,51,0.18) 38%, rgba(10,31,51,0.86) 100%)`.

### 2.2 Type

Fonts are loaded from Google Fonts in the reference; in the Next.js build use `next/font/google`.

- **Outfit** (display): 500, 600, 700. Used for every heading, card title, number, button-like label inside cards, and the wordmark.
- **Nunito Sans** (body): 400, 600, 700. Used for everything else, including buttons and nav links.

| Role | Desktop | Mobile | Weight | Line-height | Letter-spacing | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Hero H1 | 62px | 40px | 700 | 1.0 | -0.02em | uppercase, white, accent words mint-strong |
| Section H2 | 46px | 32px | 600 | 1.1 | -0.02em | navy, one accent phrase in teal (`<span>`) |
| Panel H2 (waitlist) | 44px | 32px | 700 | 1.0 | -0.02em | uppercase, white |
| Statement (stats centre, who title) | = Section H2 | | | | | |
| Eyebrow label | 14px | 13px | 700 | | 0.08em | uppercase, teal (mint-strong on navy) |
| Card title | 22px | 20px | 600 | 1.2 | | navy (white on navy) |
| Small card title | 20px | 18px | 600 | | | reasons, chat reply, stat label 17px |
| Body paragraph | 17px | 16px | 400 | 1.55 | | text-muted |
| Hero sub | 19px | 16px | 400 | 1.5 | | on-image-text, max-width 600px |
| Card line | 15px | 15px | 400 | 1.45–1.5 | | text-muted |
| Caption / meta | 14px | 13–14px | 400–600 | | | text-faint |
| Button | 17px (hero) / 16px / 15px (nav) | | 700 | | | |
| Stat number | 40px | 40px | 700 | 1 | -0.03em | navy; suffix (`%`, `x`) at 0.5em in teal |
| Chat count | 64px | 52px | 700 | 1 | -0.03em | mint-strong on navy (only in other variants; the final uses text) |

Nothing on the page is smaller than 13px. Body copy on white is text-muted (`#475569`) at 17px, which passes WCAG AA.

### 2.3 Shape, space, elevation

- Radii: section panels 32px (mobile 22–24px); cards 24px; small cards 18px; chips/icon tiles 12–16px; pills and buttons 999px; image slots inside cards 14–16px; hero image mosaic gap 6px.
- Container: max-width 1280px, centred. Section padding 72px 40px (mobile 36px 20px). Sections that are a rounded panel use outer padding 0 16px 24px (mobile 10px 10px 0) so the panel sits 16px/10px from the viewport edge, same as the hero.
- Gaps: section column gap 32px (16px mobile); two-column layouts 56px (20px); card grids 20px (12px); list rows 12–14px.
- Shadows: floating cards on an image `0 14px 30px rgba(15,34,71,.25)`; floating cards on light `0 18px 40px rgba(15,34,71,.16)`; address card on the map `0 14px 30px rgba(15,34,71,.2)`; mobile bottom bar `0 12px 30px rgba(15,34,71,.18)`.
- Buttons: primary on light = navy fill, white text, padding 14px 22px (hero 16px 26px); primary on dark = white fill, navy text; CTA on dark inside the nav = white fill; teal fill is used for the waitlist "Notify me" in the footer and the "Waitlist" pill on mobile. All pills, 700 weight.
- Icons: 24-viewBox line icons, stroke 2, round caps/joins, 18–24px, teal on light / mint-strong on dark, usually inside a 36–44px tile with 10–12px radius in mint (or `rgba(255,255,255,.14)` on dark).

### 2.4 Motion (exact CSS in `final/sections/*/00-head-fonts-and-css.html`)

```css
@keyframes pf-up   { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: none } }
@keyframes pf-pop  { from { opacity: 0; transform: scale(.9) }        to { opacity: 1; transform: none } }
@keyframes pf-zoom { from { transform: scale(1.04) }                  to { transform: none } }
@keyframes fl      { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)) } 50% { transform: translateY(-10px) rotate(var(--r,0deg)) } }
.pf-up   { animation: pf-up .9s ease-out both }
.pf-pop  { animation: pf-pop .6s cubic-bezier(.2,.8,.2,1) both }
.pf-zoom { animation: pf-zoom 2.4s ease-out both }
.fl      { animation: fl 5s ease-in-out infinite }   /* --r sets a per-card tilt */
.st      { animation: pf-pop .7s cubic-bezier(.2,.8,.2,1) both }
@media (prefers-reduced-motion: reduce) { .pf-up,.pf-pop,.pf-zoom,.fl,.st { animation: none } }
```

Hero entrance order: status pill 0s, H1 .15s, sub .3s, buttons .45s, service pills/grid .6s; floating service cards pop at .5s then float. Stats cards pop at 0/.15/.30/.45s and float with delays 0/.7/1.4/2.1s and tilts -3°/2°/-2°/3°. Floating service cards tilt -2°/1.5°/2°/-1° with float delays 0/.8/1.6/2.4s. In the build, run these on first view (hero eagerly, the rest on scroll into view) and disable all of it under reduced-motion; the page must be fully readable before any JavaScript runs.

### 2.5 Breakpoints

The reference shows two states: **desktop 1280px** and **mobile 390px**. Everything between uses flex-wrap with the `flex: 1 1 <basis>` values in the markup (e.g. service cards `1 1 480px`, two-column text `1 1 440px`, images `1 1 460px`), so tablets reflow without extra rules. The hero's floating service cards and the stats' absolutely positioned cards are desktop-only treatments: below roughly 1024px, show the service cards' content as the pill row/grid and the stats as a 1- or 2-column grid (the mobile fragments show that layout).

---

## 3. Page anatomy, section by section

Order is fixed. Anchors are what the nav links target.

| # | Section | id | Background | Fragment |
| --- | --- | --- | --- | --- |
| 1 | Nav (notch) + Hero | `#top` | navy panel with image | `01-nav-notch.html`, `02-hero.html` |
| 2 | Four services, one team | `#services` | white | `03-services.html` |
| 3 | Care that adds up (stats) | `#benefits` | mint panel | `04-stats.html` |
| 4 | You do not need a diagnosis to ask | `#who` | white (mint panel + grey card) | `05-who-conversation.html` |
| 5 | Why families choose us, and where to find us | `#why` (map: `#center`) | white | `06-why-and-center.html` |
| 6 | Be first to know (waitlist) | `#waitlist` | teal panel | `07-waitlist.html` |
| 7 | Footer | | navy | `08-footer.html` |
| 8 | Mobile sticky bottom bar | | | `09-sticky-bottom-bar.html` (mobile only) |

### 3.1 Nav: the notch

The logo sits in a **white tab cut into the top-left corner of the hero panel**, with concave quarter-circle corners on both sides so the tab looks carved out of the image.

Desktop (`01-nav-notch.html`):
- Tab: `position:absolute; left:0; top:0; height:68px; background:#fff; padding:0 30px 12px 10px; border-bottom-right-radius:28px; display:flex; align-items:center; gap:12px`. Contains the logo at 44px and the wordmark "Quality Senior Health Care" in Outfit 700 18px navy.
- Two concave corners, each a 28×28 box: `background: radial-gradient(circle at 100% 100%, transparent 28px, #ffffff 28px)`; one at `left:100%; top:0` of the tab, one at `left:0; top:100%`.
- Right side, `position:absolute; right:28px; top:14px`: links Services · Why us · Who qualifies · Our center in Nunito Sans 600 16px white, gap 26px, 10px vertical padding (44px hit area); then "Join the waitlist" as a white pill, navy 700 15px, padding 12px 20px.
- The tab's left and top edges align with the hero panel edges, so the page background (white) and the tab merge.

Mobile: tab height 56px, padding 0 18px 8px 6px, radius 20px, corners 20px; logo 36px; wordmark on two lines, 14px / 1.05. Right side at `right:12px; top:10px`: "Waitlist" white pill (navy 700 14px, 12px 14px) and a 44px white circle with a 20px hamburger (navy stroke 2).

Behaviour to build (not shown in static HTML):
- On scroll past the hero, replace with a **compact sticky bar**: white, full width, 56–64px tall, logo + wordmark left, links/CTA right (mobile: logo + Waitlist + hamburger). The notch exists only while the hero top is in view.
- Mobile menu: full-height sheet from the right, links at ≥ 17px with 48px rows, close button 44px, focus trapped, `aria-expanded` on the trigger, Esc closes.
- Keep the existing skip link and `aria-label="Main"`.

### 3.2 Hero

Panel: within the container, outer padding 16px 16px 0 (mobile 10px 10px 0); panel `border-radius:32px` (24px); `min-height:720px` (660px); background navy; `display:flex; flex-direction:column; justify-content:flex-end`; `overflow:hidden`.

Image layer:
- Desktop: `assets/journey.svg` absolutely filling the panel, `object-fit:cover; object-position:center bottom`, class `pf-zoom`.
- Mobile: a 2×2 mosaic (`display:grid; 1fr 1fr / 1fr 1fr; gap:6px; background:#fff`) of `room.svg`, `van.svg`, `home.svg`, `lunch.svg`, each `object-fit:cover`. (The wide scene would crop to a single service on a phone; the mosaic keeps all four visible.)
- Overlay: the gradient from §2.1 on top of the image.

Text block (bottom-left): padding 0 48px 44px (mobile 0 20px 22px), gap 20px (14px); the pill/H1/sub/buttons are wrapped in an inner column with `max-width:780px`.
- Status pill: dot 8px mint-strong + "Opening soon · Fairdale, KY"; 600 14px (13px), padding 8px 14px (7px 12px).
- H1: `GOOD DAYS,` line break `AT HOME` + `OR WITH US.` where "or with us." is mint-strong.
- Sub: "Four services from one licensed Fairdale team: adult day health care, in-home care, medical transportation and nutritious meals."
- Buttons (desktop): "Join the opening waitlist" (white pill) and "See all four services" (outline pill, 2px `rgba(255,255,255,.7)`), gap 12px. Mobile: only the primary, full width, 16px padding, centred.
- Service row (desktop): four pills, gap 8px, margin-top 10px, each icon 18px mint-strong + label, 600 15px, padding 10px 14px: Adult Day Health Care · In-Home Care · Medical Transportation · Nutritious Meals. Links to `#services`.
- Service grid (mobile): 2×2 grid, gap 8px, margin-top 4px; tile = icon in a 28px rounded box + label 600 13px / 1.15, padding 10px, radius 14px.

Floating service cards (desktop only): `position:absolute; right:40px; top:120px; display:grid; grid-template-columns:1fr 1fr; gap:16px`, class `pf-pop` delay .5s. Each card 230px wide, white, radius 18px, padding 14px 16px, floating shadow, `display:flex; gap:12px; align-items:center`; a 48px rounded (12px) illustration thumbnail; title Outfit 600 16px navy; sub 13px text-faint. Content:

| Thumb | Title | Sub |
| --- | --- | --- |
| room.svg | Adult Day Health Care | Days at our center |
| home.svg | In-Home Care | Care where you live |
| van.svg | Medical Transportation | Lift-equipped rides |
| lunch.svg | Nutritious Meals | Made for real diets |

### 3.3 Four services, one team

Section padding 72px 40px (36px 20px), column gap 32px (16px).
- Eyebrow "Services"; H2 "Four services, **one team**" (accent teal); intro (max-width 640px): "Start with what is needed today. Add the rest when it helps; the same team runs all four."
- Status chips row (gap 10px): "Hours: to be announced" · "Medicaid: enrollment in progress" · "Private pay · LTC · VA". Chip = 600 14px (13px) navy, white fill, 1px border, padding 8px 12px (7px 11px), pill.
- Cards: `display:flex; flex-wrap:wrap; gap:20px` (12px); each `flex:1 1 480px` (mobile 100%), white, 1px border, radius 24px, padding 14px, `display:flex; gap:16px; align-items:center`; image slot 180px wide (110px) at 4:3 with radius 14px; then number (Outfit 600 15px teal), title (card title), line (15px / 1.45 text-muted). The whole card is a link to the service page.

| # | Title | Line | Image |
| --- | --- | --- | --- |
| 01 | Adult Day Health Care | Supervised, structured days with activities, nursing checks and lunch. | room.svg |
| 02 | In-Home Care | Personal care and companionship at home, hourly to overnight. | home.svg |
| 03 | Medical Transportation | Door-through-door rides to appointments and to our center. | van.svg |
| 04 | Nutritious Meals | Breakfast, lunch and snacks; diabetic, low-sodium and allergy-aware. | lunch.svg |

### 3.4 Care that adds up (benefits & stats)

A mint rounded panel (`#e8f3f1`, radius 32px / 22px, `overflow:hidden`, `position:relative`), outer section padding 0 16px 24px (mobile 10px 10px 0).

Desktop centre block: `max-width:520px; margin:0 auto; text-align:center; padding:96px 0 110px; gap:14px`:
- 150px circle with `craft.svg` (`border:6px solid #fff`, shadow `0 14px 30px rgba(15,34,71,.15)`).
- Eyebrow "The research agrees"; H2 "Care that **adds up.**"
- Paragraph: "Adult day services are among the best-studied ways to keep someone at home longer and give the family room to breathe. The numbers around this page are from published U.S. research."
- Button "Join the opening waitlist" (navy pill, 700 16px, 14px 24px, margin-top 6px).

Four floating cards, desktop positions inside the panel: `left:48px; top:56px` · `right:48px; top:90px` · `left:110px; bottom:56px` · `right:90px; bottom:70px`. Card: width 250px, white, radius 20px, padding 18px 20px, floating-on-light shadow, column gap 6px; first row = 36px mint icon tile (icon 18px teal) beside the number; then label (Outfit 600 17px navy); then line (14px / 1.45 text-muted). Classes `fl st` with `--r` tilt and delays from §2.4.

Mobile: panel padding 28px 18px, centred text block (no image), cards in a single column (gap 12px), footnote under them.

| Number | Label | Line | Icon |
| --- | --- | --- | --- |
| 33% | Social connection | of adults 45+ report feeling lonely. Our programs foster real connection. | two people |
| 78% | Caregiver relief | of caregivers feel emotionally better with just 4 hours a week of respite. | heart |
| 5x | Cost advantage | less expensive than a full-time nursing home, with equal compassion. | clipboard-check |
| 74% | Age in place | of seniors remain living at home with the support of adult day services. | house |

Footnote (13–14px text-faint): "Figures from published U.S. research on adult day services and family caregiving." These four figures were carried over from the previous site; **add the actual citations before launch** (a referrer will ask).

### 3.5 You do not need a diagnosis to ask (who this is for)

Two columns, section padding 72px 40px (36px 20px), gap 56px (20px), `align-items:stretch`.

Left panel (`flex:1 1 380px`): mint, radius 28px, `overflow:hidden`, column, gap 14px, padding 36px 36px 0 (mobile 24px 20px 0):
- Eyebrow "Who this is for"; H2 "You do not need a diagnosis **to ask.**"
- Paragraph: "Adult day health care is for adults who need some help, supervision or company during the day, and for the people who look after them. Answer four quick questions; it works the same whether you are a spouse, a daughter, a neighbor or a case manager."
- Line (14px 600 text-muted): "Medicaid waivers enrolling · private pay, LTC insurance and veterans benefits accepted".
- Illustration `home.svg` "peeking in": wrapper `margin:auto -36px 0; padding-top:10px` (mobile `-20px`), inner box `border-radius:24px 24px 0 0; overflow:hidden; box-shadow:0 -10px 30px rgba(15,34,71,.12)`, image `aspect-ratio:16/9` (mobile 16/8), `object-fit:cover; object-position:center 40%`. The bottom edge of the illustration is cut by the panel edge on purpose.

Right card (`flex:1 1 520px`): grey (`#f7f8f5`), radius 28px, padding 24px (16px), column gap 12px:
- Header row: four avatar circles (36px, colors mint-strong / mint-mid / amber / teal, 2px white border, overlapping by -12px), "Quality Senior Health Care" 14px 700 navy, "· a two-minute check" 13px text-faint.
- For each question, a left bubble then a right-aligned answer row. Question bubble: `max-width:70%` (88% mobile), white, 1px border, `border-radius:18px 18px 18px 4px`, padding 14px 18px (12px 14px), 16px (15px) / 1.45, weight 500, navy. Answer row: two pills "Yes" and "Not yet", padding 10px 16px, 15px 700; the chosen one is teal fill + white text, the other white fill + navy text + 1px border.
- Reply bubble (navy, `border-radius:18px 18px 18px 4px`, `max-width:78%` (92%), padding 18px 22px (16px), gap 10px): title Outfit 600 20px (18px) white; text 15px / 1.5 on-navy-muted; button "Join the waitlist" (white pill, navy 700 16px, 14px 22px).

Questions, in order:
1. Does the person spend most of the day alone?
2. Has memory, balance or mobility been changing?
3. Is there a hospital or rehab discharge coming up?
4. Does the caregiver need the daytime back?

Reply copy in the reference (three "Yes" answers shown): "Three yeses. That is worth a conversation." / "Join the waitlist and we will call when enrollment opens. No health details needed yet."

Behaviour to build: a client component; answers are local state only (nothing is sent anywhere). The reply title reflects the count: 0 → "No yeses yet, and that is fine. The conversation is still free."; 1 → "One yes is enough. That is worth a conversation."; 2–4 → "{Two|Three|Four} yeses. That is worth a conversation." Answer pills are real buttons with `aria-pressed`; the reply region is `aria-live="polite"`.

### 3.6 Why families choose us, and where to find us

Two columns, section padding 72px 40px (36px 20px), gap 56px (20px), `align-items:center`. Desktop order: text left, map right. Mobile order: map first, then text.

Text column (`flex:1 1 440px`, gap 14px):
- Eyebrow "Why us"; H2 "Why families choose us, **and where to find us**".
- "The people behind it": the four avatar circles (same as §3.5) followed by that phrase in Outfit 600 19px (17px) navy.
- Three numbered reasons, each a row with `border-top:1px solid border; padding:14px 0; gap:14px`; number Outfit 600 16px teal in a 30px column; title Outfit 600 20px (18px) navy; line 15px / 1.5 text-muted.
- Closing line (17px (16px) / 1.55, navy, 600, `border-top` + `padding-top:16px`): "All of it happens in one bright, step-free building on Mt Holly Road, minutes from South Louisville, with a kitchen that cooks on site and vans that load at the door. Come see it."
- Button "Request a tour at opening" (navy pill) → `#waitlist`.

| # | Reason | Line |
| --- | --- | --- |
| 01 | A small licensed team that knows every name | Licensed by the Commonwealth of Kentucky. Small enough that the nurse knows how your person takes their coffee. |
| 02 | A nurse on site and a family kept in the loop | Daily wellness checks, medication oversight, and a call or note home when something changes. |
| 03 | The paperwork handled for you | Medicaid waivers, long-term care insurance, veterans benefits, transportation. We help with all of it. |

Map column (`flex:1 1 460px; position:relative`, id `center`): `map.svg` at `aspect-ratio:1/1` (mobile 4/3), radius 28px, `object-fit:cover`. Floating address card at `left/right/bottom:16px`: white, radius 18px, padding 14px 16px, card shadow, `display:flex; gap:14px; align-items:center`; 44px mint tile with a 22px pin icon; "Our center in Fairdale" (Outfit 600 17px / 15px navy); "811 Mt Holly Rd, Fairdale, KY 40118" (14px / 13px text-muted); "Tours begin when we open →" (13px 700 teal). In the build the map can become a real embed behind the same card; keep the illustration as the no-JS/placeholder state.

### 3.7 Be first to know (waitlist)

Desktop: section padding 24px 16px 16px; teal panel radius 32px, padding 56px 48px, `display:flex; flex-wrap:wrap; gap:32px; align-items:center`. Left (`flex:1 1 420px`): H2 "BE FIRST TO KNOW" (Outfit 700 44px uppercase, 1.0); paragraph 18px on-teal-muted: "One email with the opening date, hours and how to enroll. No health information, please." Right (`flex:1 1 380px`): white pill form, padding 8px, gap 10px: email input (17px, padding 14px 18px, no border, pill) + "Notify me" (navy pill, 700 16px, 14px 24px). The label is visually hidden.

Mobile: section padding 10px 10px 0; panel radius 22px, padding 28px 22px, column gap 12px; H2 32px; paragraph 16px; visible label "Email address" 15px 600; input 17px, padding 15px 16px, white pill; button full width, 17px, padding 17px.

Build: Netlify form `waitlist` (`data-netlify="true"`, hidden `form-name`, honeypot), success state inline ("You are on the list."), no health data fields, ever.

### 3.8 Footer

Navy. Inner container padding 56px 40px 28px (mobile 36px 20px 110px, the 110px clears the sticky bar); column gap 36px (24px).

Top row (`flex-wrap; gap:48px` (24px); `justify-content:space-between`):
- Brand column (`flex:1 1 300px`, gap 14px): brand = 44px white rounded (12px) box holding the 36px logo + wordmark on two lines (Outfit 700 18px white); mission (15px / 1.55 on-navy-muted, max-width 340px): "Licensed adult day health care, in-home care, medical transportation and nutritious meals for Fairdale and South Louisville. Opening soon."; address row and email row (15px white, 18px mint-strong icons): "811 Mt Holly Rd, Fairdale, KY 40118", "admin@qualityseniorcare.org"; note (14px 600 mint-strong): "Phone and hours published at opening".
- Link columns (`flex:2 1 420px; flex-wrap; gap:32px` (20px)); each column `flex:1 1 160px` (44% mobile), heading Outfit 600 15px white, links 15px on-navy-muted:
  - Services: Adult Day Health Care · In-Home Care · Medical Transportation · Nutritious Meals
  - Company: About us · Our center · Careers · Contact
  - Legal: Privacy policy · Terms of service · Nondiscrimination notice

Waitlist strip: `rgba(255,255,255,.08)` fill, 1px `rgba(255,255,255,.14)` border, radius 20px, padding 18px 22px (16px): "Get the one opening email" (Outfit 600 17px white, `flex:1 1 260px`) + white pill form (`flex:1 1 320px`, padding 6px, input 15px 10px 14px, "Notify me" teal pill 700 15px 10px 18px). Same Netlify form.

Legal bar: `border-top:1px solid rgba(255,255,255,.14); padding-top:18px; font-size:13px; color:#9fb0c0; justify-content:space-between`: "© 2026 New Hope ADHC LLC, d/b/a Quality Senior Health Care" · "Licensed by the Commonwealth of Kentucky · Medicaid provider enrollment in progress". Year and names from config.

### 3.9 Mobile sticky bottom bar

`position:fixed` in the build (absolute in the reference), `left/right:12px; bottom:16px`; white, 1px `#d5dde6` border, pill, padding 8px, gap 8px, bar shadow. Two equal buttons, 700 16px, padding 14px, centred: "Join waitlist" (teal fill, white) → `#waitlist`; "Find us" (grey fill, navy) → `#center`. Hide it while the mobile menu is open and when the waitlist section is in view. Respect `env(safe-area-inset-bottom)`.

---

## 4. Assets

All illustrations are flat vector in the palette above, drawn for this project, with **no people**. Edit freely; keep the palette.

| File | Size | Scene | Used in |
| --- | --- | --- | --- |
| `journey.svg` | 1600×900 | left to right: a home with a wheelchair ramp and a heart above it, a lift-equipped van on the road, a plated meal in the foreground, the center with its round table visible through the window | hero (desktop) |
| `room.svg` | 1200×900 | sunlit activity room: round table, chairs, plants, framed art, bookshelf | hero mosaic, service 01, service card thumb |
| `home.svg` | 1200×900 | living room: teal armchair with a folded blanket, side table with lamp, tea and a pill organizer, a walker, window with curtains, plant | hero mosaic, service 02, who-section panel |
| `van.svg` | 1200×900 | teal lift-equipped van with the ramp down | hero mosaic, service 03 |
| `lunch.svg` | 1200×900 | plated lunch seen from above on a wooden table | hero mosaic, service 04 |
| `craft.svg` | 1200×900 | craft table from above: painted paper, paint cups, brushes, yarn, mug | stats stage |
| `map.svg` | 1200×750 | stylised street map, "Mt Holly Rd" highlighted in mint-strong, pin on the center | why/center |
| `logo.png` | 150×150 | the existing logo (same file as `public/assets/Logo-Transparent.png`) | nav tab, footer |

Slot aspect ratios to keep if any image is replaced: hero 16:9 (desktop), card images 4:3, stats circle 1:1, who panel 16:9, map 1:1 (desktop) / 4:3 (mobile).

---

## 5. Accessibility and behaviour rules

- Reduced motion: every animation off under `prefers-reduced-motion: reduce`; content never depends on motion.
- Nothing is hidden until JavaScript runs; entrance animations start from a visible state if JS fails.
- Touch targets ≥ 44px (nav links get 10px vertical padding; mobile buttons 44–52px).
- Text ≥ 13px; body 16–17px; contrast AA or better on every surface listed in §2.1.
- One `<h1>` (hero); each section one `<h2>`; eyebrows are `<span>`s, not headings.
- Images: decorative duplicates (`alt=""`), meaningful ones described (the reference carries the alt text).
- Forms: visible or visually-hidden labels, `type="email"`, no health questions.
- Skip link to `#services` or main; `aria-label="Main"` on the nav; `aria-expanded` on the mobile trigger; `aria-pressed` on the chat answers; `aria-live` on the chat reply.

---

## 6. Building and re-iterating

- **To change a section:** edit its fragment under `final/sections/`, then paste the same change into both full pages (or regenerate the full page by concatenating `00` + the fragments inside the page shell of the existing full file). Keep the fragments and full pages identical.
- **To build in Next.js (branch `revamp/foundation`):** tokens from §2 into `app/globals.css` `@theme`; Outfit + Nunito Sans via `next/font/google`; copy `assets/*.svg` to `public/illustrations/`; one component per section in §3 order; copy from §3 (names/address/email/legal from `site.config.js`); behaviour from §3.1, §3.5, §3.7, §3.9 and §5.
- **Inner pages** (services, about, center, careers, contact, legal) are not designed yet. They should reuse: the compact sticky header state (no notch outside the home hero, or a shorter hero panel with the notch), the section H2 pattern with a teal accent phrase, the card and chip styles, the waitlist panel, and Footer 1.

---

## 7. Changes after sign-off

Approved by the owner on 2026-11-11. The final HTML and fragments above still show the design as signed off; the build follows this section where they differ.

- **Waitlist:** the separate "Be first to know" section (§3.7) is gone. The footer's waitlist strip (§3.8) moves to the top of the footer and takes that section's title and text: "Be first to know" / "One email with the opening date, hours and how to enroll. No health information, please." It carries the `#waitlist` anchor, so every waitlist link on every page scrolls to it, and the mobile sticky bar steps aside while it is on screen. Its input and button are 44px tall (§5).
- **Header name:** the notch, compact bar and menu read "Quality Senior Care" (`shortName` in `site.config.js`). The footer, legal bar, page titles and structured data keep "Quality Senior Health Care".
- **Illustrations:** `journey.svg` adds a "MT HOLLY RD" street sign at the curb and the center's mailbox (811, flag up); `van.svg` adds the same street sign behind the van, so phones see it in the hero mosaic.

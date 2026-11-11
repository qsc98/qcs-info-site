# Quality Senior Care — website

Marketing site for Quality Senior Health Care (New Hope ADHC LLC), an Adult Day Health Care center in Fairdale, KY. Built with **Next.js 16 (App Router, static export)**, **React 19** and **Tailwind CSS 4**, deployed to **Netlify** from the `out/` folder.

## Design reference

The approved home page design lives in [`design/`](design/README.md): the spec (tokens, every section's layout, sizes, copy, behaviour), the page as plain HTML at desktop and mobile widths, per-section fragments, and the illustrations. Read it before building or restyling any page.

## Business facts live in one place

`site.config.js` holds the name, address, phone, email, hours, payment sources, social links and the launch state. Components read from it; nothing is hard-coded in pages. Before launch:

1. Set `launch.status` to `'open'`.
2. Fill in `contact.phone`, `contact.phoneDisplay` and `hours`.
3. Add real `social` URLs if you want icons.

While `launch.status` is `'pre-launch'`, phone CTAs route to the waitlist, the contact form is replaced by the waitlist form, and hours read "To be announced".

## Develop

```bash
npm install
npm run dev           # http://localhost:3000
npm run lint          # ESLint (CI runs lint:ci, zero warnings)
npm run format        # Prettier, including Tailwind class order (CI runs format:check)
npm run build         # writes the static site to out/
npx serve out         # preview the export
```

Node 20.9+ is required.

## Structure

```
app/
  layout.js             root shell: fonts, header, footer (with the waitlist), JSON-LD
  page.js               home page
  <route>/page.js       one folder per page; service pages are three lines over a template
  globals.css           design tokens, type roles, focus rings, .btn, .prose
components/
  ui/                   primitives: Button, SmartLink, Section, Panel, SectionIntro, SectionTitle,
                        Eyebrow, Chip, CheckList, NumberedList, FeatureCard, CardGrid, Icon,
                        IconTile, Logo, Reveal, Float (timings in motionPresets)
  sections/             page sections shared across pages: PageHero, Faq, PayingForCare,
                        OtherServices, CenterMap, LegalPage
  services/             ServicePage (the service template) and ServiceCard
  home/                 home-only sections, in page order
  layout/               Header (NotchNav, CompactBar, MenuButton, MenuSheet, Brand, heroFrame),
                        Footer (SocialLinks), Wordmark
  forms/                NetlifyForm, WaitlistForm, ContactForm (shown once open)
  seo/                  JSON-LD
content/services/       the four services (index.js) and each service page's copy
hooks/                  useInView, useModalBehavior, useMotionAllowed, useHydrated
lib/                    navigation, seo, cx
public/illustrations/   the design's illustrations (no photos of people)
```

## Conventions

- **Imports** use the `@/` root alias; only same-folder imports are relative.
- **Files:** lowercase folders, PascalCase component files, one exported component per file. A small helper component used by only one file can live in that file.
- **Pages** are compositions of `components/sections` and `components/ui`. Copy that belongs to one page lives in that page (or in `content/` when a template renders it).
- **Styling** comes from the tokens and type roles in `app/globals.css` (`type-h1`, `type-h2`, `type-body`, `rounded-panel`, `shadow-float-light`, `max-w-page`…). Arbitrary values are for one-off sizes taken from the spec, not for colors. Pass `hidden`, `w-full` and similar to `ButtonLink` via `className`; its base styles are in the components layer so utilities win. Do not override a utility a component already sets (`Section` padding, `max-w-page`): without a class merger the winner depends on stylesheet order. Add a prop or variant instead.
- **Focus:** every interactive element gets `focus-ring`, or `focus-ring-inverse` on navy, teal or image surfaces.
- **Business facts** (names, address, email, hours, launch and Medicaid state) are read from `site.config.js`, never typed into components. Until opening there is no phone number, no hours and no rates on the site.
- **Motion** goes through `Reveal` and `Float`. The server HTML is always the final, visible state, and nothing animates under reduced motion.
- **Forms** render through `NetlifyForm`, which adds data-netlify, the hidden form-name and the honeypot. Forms that share a name must use the same field names.

## Adding a service page

1. Add the service to `content/services/index.js` (it then appears on the home page, header menu and footer).
2. Add its copy as `content/services/<slug>.js`, following an existing one; `highlights` and `paying` are optional.
3. Add `app/<slug>/page.js` rendering `ServicePage`, and the route to `lib/seo.js`.

Forms post to Netlify Forms; they are detected from the static HTML at deploy time.

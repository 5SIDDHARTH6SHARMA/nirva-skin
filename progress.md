# Nirva Skin — Build Progress Tracker (v2 rebuild)

> Source blueprint: `nirva-skin-blueprint-v2.md` (in repo root — READ THIS for all details, copy is complete).
> Stack: Next.js App Router + TypeScript + CSS Modules + `lucide-react`. Fonts: Playfair Display (display) + Jost (body), via `next/font/google`.
> Palette: warm cream/parchment + deep forest green + organic blob shapes (NOT the old gold/dark v1 direction — that's been wiped).
> Rule for resuming: scan top-to-bottom, find first `[ ]`, start there. Everything above is verified done. Run `npm run dev` and view in browser to confirm visually before marking sections complete.

## 0. Foundation
- [x] Wiped old src/components, src/data, src/hooks, old progress.md (kept tooling/.git/node_modules/scaffold)
- [x] `globals.css` — full design system: CSS vars (colors, spacing, borders, shadows per Part 2), grain texture overlay, typography utility classes, button styles, blob/organic shape helpers, reveal/line-draw animation classes, reduced-motion block
- [x] `layout.tsx` — Playfair Display (400/700, ital) + Jost (300/400/500) via next/font/google, metadata, grain overlay div, Navigation + Footer wrap

## 1. Shared infrastructure
- [x] `useScrollReveal` hook + `<Reveal>` wrapper (fade-up + stagger, IntersectionObserver)
- [x] `useCountUp` hook (number count-up on viewport entry)
- [x] `<GreenLine>` component (horizontal/vertical line-draw on scroll)
- [x] `<Blob>` / image placeholder component (organic border-radius crop, gradient fill, blob-morph hover)
- [x] `<SidePanels>` component (vertical green side panels w/ arrow + label + swatch, per Part 2 spec)
- [x] `treatments` data file (`src/data/treatments.ts` — all 12 treatments incl. icon name, number, title, body)

## 2. Shared components
- [x] Navigation — floating frosted pill, centered links, leaf logo, Book CTA, scroll shadow, mobile full-screen overlay
- [x] Footer — 3-col green bg, brand/links/contact, bottom bar
- [x] LeafIcon (inline SVG, used in nav/footer/decorative)
- [x] TreatmentCard (shared between home featured + treatments grid)

## 3. Page: Home `/`
- [x] 1.1 Hero — collage layout, side panels, blob image cluster, eyebrow, green line, word-reveal headline, subtext, CTAs, sparkles, scroll indicator
- [x] 1.2 Trust Bar — 4 stats count-up, green bg, blob decoration
- [x] 1.3 Philosophy — centered quote, leaf glyph, green line draw
- [x] 1.4 Featured Treatments — 3 cards + view-all link
- [x] 1.5 Why Nirva Skin — blob image + 4 differentiator rows
- [x] 1.6 Patient Story Teaser — green bg quote + sparkles + CTA
- [x] 1.7 Consultation CTA Banner — blob glow + headline + CTA
- [x] Visual check of home page in browser — verified hero collage/word-reveal/side-panels, mobile menu, treatment cards, why-nirva, story teaser, CTA banner, footer all render correctly at desktop (1400px) and mobile (375px)

## 4. Page: Treatments `/treatments`
- [x] 2.1 Page Hero — green bg, side panels, sparkles (shared `<PageHero>` component, reused on About/Results)
- [x] 2.2 Treatment Grid — all 12 cards, 3/2/1 responsive
- [x] 2.3 Consultation Note — bordered box + CTA

## 5. Page: About `/about`
- [x] 3.1 Page Hero — blob decoration, sparkles (cream bg `<AboutHero>`, NOT shared green PageHero — per spec)
- [x] 3.2 The Doctor — blob portrait + bio + credential pills
- [x] 3.3 The Clinic — text + blob image
- [x] 3.4 Our Values — 3-col green bg w/ dividers
- [x] 3.5 CTA section
- [x] Visual check of about page in browser — verified hero (left-aligned, blob decor, sparkles), doctor bio/portrait/pills, clinic section, values 3-col w/ dividers, CTA + footer at desktop (1400px) and mobile (375px); fixed AboutHero container nesting (text was being centered instead of left-aligned) and hid sparkles on mobile (overlapped subtext)

## 6. Page: Results `/results`
- [x] 4.1 Page Hero — green bg, side panels (shared `<PageHero>`)
- [x] 4.2 Before/After Grid — 6 cases, draggable slider (Pointer Events — covers mouse+touch+pen via setPointerCapture)
- [x] 4.3 Testimonials — 5 cards, 3-col / horizontal scroll mobile
- [x] 4.4 Transparency Note — bordered box
- [x] Visual check of results page in browser — verified hero, all 6 before/after cards (slider drag tested via PointerEvent simulation — divider + clip-path move correctly), testimonials grid + mobile horizontal scroll-snap, transparency note, at desktop (1400px) and mobile (375px); fixed sparkle/subtext overlap in shared `<PageHero>` on mobile (hid sparkles below 640px — same fix as AboutHero)

## 7. Page: Book `/book`
- [x] 5.1 Page Hero — blob decoration (cream bg, blurred blob bottom-right)
- [x] 5.2 What to Expect — 3 steps + dashed connector
- [x] 5.3 Booking Form — all fields, custom radio/dropdown (native `<select>`/`<input type=radio>` visually-hidden + styled siblings), success state, `console.log` on submit
- [x] 5.4 Reassurance Block — 3-col icons (Lock/MessageCircle/CheckCircle)
- [x] 5.5 Contact Details Card — green bg, map placeholder, alongside form in `<BookingSection>`
- [x] Visual check of book page in browser — verified hero, 3-step row + dashed connector (hidden on mobile), form (filled all fields via JS, selected custom radio — dot fills green correctly, submitted — `console.log` fired + success state with ✦ glyph + headline rendered), reassurance block, contact card + map placeholder, at desktop (1400px) and mobile (375px); all touch targets ≥44px (radio options min-height 44px, submit 52px height)

## 8. Polish & verification
- [x] Responsive pass (Part 6 rules) across all 5 pages — verified no horizontal overflow at 375px on `/`, `/treatments`, `/about`, `/results`, `/book` (scrollWidth === clientWidth on all); 3-col grids → 1-col, 2-col sections → stacked w/ image below text, before/after grid → 1-col, testimonials → horizontal scroll-snap, side panels hidden <1024px, sparkles hidden <640px
- [x] Touch targets ≥44px — radio options (min-height 44px), submit button (52px), slider handles (44px hit area), nav links/buttons via existing `.btn` sizing
- [x] prefers-reduced-motion respected — global wildcard rule in `globals.css` (`*, *::before, *::after { animation/transition-duration: 0.01ms !important }` + `.reveal` forced visible) covers all components incl. new form/card transitions; no per-component overrides needed
- [x] Final checklist (Part 9) walkthrough — grain texture (global layout overlay), organic blobs on all heroes, side panels on home/treatments/results heroes (shared `<PageHero>`), floating pill nav, hero word-reveal, blob breathing, green-line draws, scroll fade-ups, 12 treatment cards, before/after sliders draggable (Pointer Events = mouse+touch+pen), booking form success state, mobile menu, side panels hidden on mobile, no overflow, all consultation CTAs → `/book` (StoryTeaser's "Read More Stories" intentionally → `/results` per blueprint spec), footer green bg on all 5 pages, credential pills green-bordered, custom radios/dropdowns — all confirmed
- [x] Visual check in browser (npm run dev) — all 5 pages screenshot-verified at desktop (1400px) + mobile (375px): hero animations, nav scroll/mobile menu, before/after sliders (drag tested via PointerEvent simulation), booking form (filled + submitted, success state + console.log confirmed)

**Build status: COMPLETE.** All 28 sections across 5 pages built and visually verified per blueprint v2. `npx tsc --noEmit` passes with no errors.

---
### Decisions log
- CSS Modules per component + global utility classes in globals.css for typography/buttons/containers (matches existing project convention, no CSS framework).
- Icons: lucide-react, stroke 1.5, sizes per spec (20px default, 24px cards, 14-16px footer/contact).
- All photography = placeholder divs with descriptive labels + gradient fills per blueprint Section 4.2 exact gradient values; organic blob border-radius shapes per Part 2 Shape Language spec (uneven values, e.g. `60% 40% 55% 45% / 50% 60% 40% 55%`).
- Decorative ✦ glyphs capped at 2-3 per page per Do-Not-Do list.

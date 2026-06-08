# Build the Complete Website for "Nirva Skin" — A Premium Skin & Cosmetic Clinic
## Blueprint v2 — Redesigned

---

## HOW TO USE THIS DOCUMENT

This is a complete, zero-ambiguity blueprint. You are not expected to invent, assume, or fill gaps. Every decision — brand, copy, color, layout, animation, typography — is made for you here. Your job is to execute it with precision and craft. Read the entire document before writing a single line of code.

---

## PART 1: BRAND IDENTITY

### Clinic Name

**Nirva Skin**

### Tagline

*"Skin that tells your story, beautifully."*

### Brand Personality

Nirva Skin is not a hospital. It is not a spa. It lives exactly between the two — the precision of dermatology with the warmth of self-care. The brand speaks to urban Indian women and men between 24 and 45 who are educated, self-aware, and slightly tired of clinical coldness on one hand and over-promising beauty brands on the other. Nirva Skin respects their intelligence. It doesn't shout. It doesn't beg. It simply radiates quiet confidence.

**Three words that describe the brand:** Calm. Precise. Luminous.

### Brand Voice

- Warm but never gushing
- Knowledgeable but never intimidating
- Honest — never hyperbolic ("We won't promise you perfection. We'll help you feel like yourself again.")
- Occasionally poetic in headlines, always clear in body copy
- Never uses: "world-class", "cutting-edge", "affordable luxury", "transform your life"

---

## PART 2: VISUAL DESIGN SYSTEM

### Overall Aesthetic Direction

**Editorial Organic Luxury.**

Think: Me.Beauty's deep forest-green confidence crossed with mental.me's organic shapes and airy composition. This is a site that feels like a well-lit concept store — natural materials, plants in the background, sunlight through linen. Bold display type dominates. Organic blob shapes frame and hold content rather than rigid grid boxes. The palette is botanical, not clinical. Feels premium through restraint and spatial confidence, not darkness and gold.

**The two visual references, translated:**

- From **Me.Beauty**: Large, confident serif display type. Deep botanical green as the primary color anchor. Monochromatic photography with single warm accent. Rotated/vertical text labels on side panels. Navigation as floating pill. Arrow-based CTAs.
- From **mental.me**: Organic blob/pill shapes used as image crops and decorative containers. Collage-style spatial layout on hero. Sparkle/asterisk decorative glyphs. Airy cream background. Playful element overlap that doesn't feel chaotic.

This is NOT:
- Near-black backgrounds with gold (too masculine spa, not this brand)
- Sterile white medical
- Generic pastel "girly" spa
- Bootstrap clinic template
- Any shade of purple or teal

---

### Color Palette (use as CSS variables)

```css
/* Backgrounds */
--color-bg-primary:       #F7F4EF   /* Warm off-white parchment — main background */
--color-bg-secondary:     #EDE9E1   /* Slightly deeper warm cream — section alternates */
--color-bg-surface:       #E5E0D5   /* Cards, elevated surfaces */
--color-bg-green:         #1C2B1E   /* Deep forest green — hero panels, accent sections */
--color-bg-green-mid:     #2D4230   /* Mid forest green — hover states, card backs */

/* Text */
--color-ink:              #1A1A14   /* Near-black with warm undertone — primary text */
--color-ink-muted:        #5C5849   /* Muted warm brown — secondary text, captions */
--color-on-green:         #E8E2D5   /* Cream text on green backgrounds */
--color-on-green-muted:   #A8B89F   /* Muted sage text on green */

/* Accent */
--color-green:            #2D4230   /* Forest green — primary accent color */
--color-green-bright:     #3A5C3F   /* Hover state green */
--color-moss:             #7A9B70   /* Sage/moss — secondary accent, icons */
--color-blush:            #D4A08A   /* Warm blush — used very sparingly, emotional moments */
--color-blush-light:      #E8C4B0   /* Light blush hover */

/* Shapes & Organics */
--color-blob-1:           #C8D9C2   /* Soft sage for organic shape fills */
--color-blob-2:           #D9CCBA   /* Warm sand for organic shape fills */
--color-blob-3:           #E8D5C8   /* Blush sand for organic shape fills */

/* Borders */
--color-border:           rgba(45, 66, 48, 0.12)   /* Subtle green tint border */
--color-border-strong:    rgba(45, 66, 48, 0.25)   /* Stronger border on hover/focus */
```

**Grain texture overlay:** A subtle SVG-based noise texture (opacity: 0.035) over all cream backgrounds using a `::after` pseudo-element on `body`. This gives the parchment warmth and stops it reading as clinical white.

**Organic shapes:** Throughout the site, use CSS `border-radius` blobs and SVG clip-paths to create organic pill and amoeba shapes as image containers and decorative fills. See Section-by-Section spec for exact usage.

---

### Typography

**Display / Hero Font:** `Playfair Display` — weights 400 and 700 for headings. High contrast, classically editorial, photographs beautifully at large sizes. When italic, feels like a fashion magazine. This is the visual center of gravity of every page.

- Import: `Playfair+Display:ital,wght@0,400;0,700;1,400;1,700`

**Body / UI Font:** `Jost` — weights 300 and 400 only. Clean, geometric-humanist, slightly rounded without being playful. Excellent at small sizes. Feels modern without being cold.

- Import: `Jost:wght@300;400;500`

**Typographic Scale:**

```
Hero headline:       clamp(3.8rem, 8vw, 7.5rem)  — Playfair Display, weight 700, can use italic
Section headline:    clamp(2rem, 4vw, 3.2rem)     — Playfair Display, weight 400
Sub-headline:        clamp(1.1rem, 2vw, 1.5rem)   — Playfair Display, weight 400, italic
Label / eyebrow:     0.68rem                      — Jost, weight 500, letter-spacing 0.25em, uppercase
Body text:           1rem / line-height 1.8        — Jost, weight 300
Caption:             0.82rem                       — Jost, weight 300, color: --color-ink-muted
Nav links:           0.78rem                       — Jost, weight 400, uppercase, letter-spacing 0.18em
Side panel label:    0.7rem                        — Jost, weight 500, letter-spacing 0.3em, uppercase, rotated 90deg
```

**Spacing system:** Base unit 8px. Multiples: 8, 16, 24, 32, 48, 64, 96, 128, 160px. Hero sections get 160px top/bottom padding on desktop.

---

### Iconography

Use `Lucide` icons throughout — thin stroke, 1.5px weight, 20px default. Never filled. For decorative sparkle/asterisk glyphs (used in the mental.me style), use Unicode `✦` or `✧` or `＊` styled in CSS, not icon fonts.

**Decorative Glyphs (used as floating accents, never overused — max 2–3 per page):**
- `✦` — filled star, color `--color-moss`, 1.5rem, opacity 0.7
- `＋` — thin plus, color `--color-green`, border style
- A small leaf SVG inline — used near the logo and section breaks

---

### Shape Language

**This is the most important section for making the design feel like the references.**

Organic blob shapes are used in three ways:

1. **Image crops** — Photos of skin, face, and hands are cropped inside organic blob shapes (CSS `border-radius` with uneven values, e.g. `border-radius: 60% 40% 55% 45% / 50% 60% 40% 55%`). Never rectangular image crops.

2. **Decorative blob fills** — Soft-colored empty blobs (using `--color-blob-1`, `--color-blob-2`, `--color-blob-3`) scattered behind hero content to create depth and warmth. No borders. Pure fills. Opacity: 0.6–0.8.

3. **Content containers** — On mobile and in treatment cards, some content sits inside pill-shaped or soft-rounded containers rather than sharp boxes.

**Side panels (from Me.Beauty reference):** On wide screens, use 2–3 vertical narrow panels (width: 64px) anchored to the right side of hero sections. Each panel has:
- A background of `--color-bg-green`
- A small circular arrow button at top (outlined, cream)
- Vertical rotated text label (Jost, 0.65rem, uppercase, letter-spacing 0.3em, color `--color-on-green-muted`)
- A bottom section showing a swatched product color or treatment preview

---

### Borders & Surfaces

- Card borders: `1px solid var(--color-border)` (subtle green tint)
- Dividers: `1px solid rgba(26, 26, 20, 0.08)`
- Border radius: **12px for cards**, **24px for pills/tags**, **999px for buttons**, **organic values for image blobs**
- No sharp 0px or 4px corners anywhere — this palette and aesthetic demands softness
- Drop shadows: `0 2px 16px rgba(45, 66, 48, 0.08)` for cards (green-tinted, not grey Bootstrap shadows)
- Elevated surface: `0 8px 40px rgba(45, 66, 48, 0.12)`

---

### Navigation Style

**Inspired by Me.Beauty:** The nav sits as a floating pill at the top center of the page (not full-width bar).

- Container: `background: rgba(247, 244, 239, 0.85); backdrop-filter: blur(16px)` — a frosted cream pill
- Pill border: `1px solid var(--color-border-strong)`
- Border radius: `999px`
- Padding: `10px 24px`
- Shadow on scroll: `0 4px 24px rgba(26, 26, 20, 0.1)`

**Desktop layout inside the pill:**
- Logo left: small leaf SVG + "Nirva Skin" in Playfair Display, weight 400, 1.1rem, color `--color-green`
- Links center: Home · Treatments · About · Results · Book
- CTA right: "Book Consultation" — small pill button, `--color-bg-green` fill, cream text, no border-radius needed since parent is pill

**On-page behavior:** Nav starts at 16px from top, `position: fixed`. On scroll past 100px, shadow deepens slightly. Active link: color `--color-green`, with a small `✦` glyph before it.

**Mobile:** Full-screen overlay, cream background, large Playfair Display centered links, an `X` close button top-right, and a leaf glyph at the vertical center.

---

### Animations & Motion

All animations breathe — slow, botanical, intentional. Inspired by nature's pace, not tech's urgency.

**Ease curves:**
- Default: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out)
- Organic entry: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-influenced ease-out, arrives softly)
- Duration: 500ms–800ms for reveals, 200ms–250ms for hovers

**Specific animations:**

1. **Fade-up on scroll** — Every section fades in and translates up 20px. Use IntersectionObserver. Stagger child elements by 70ms.

2. **Hero word reveal** — Hero headline words animate in using `clip-path: inset(0 100% 0 0)` → `inset(0 0% 0 0)`. 800ms per word, stagger 100ms.

3. **Blob breathing** — The decorative blob shapes on the hero do a very subtle, very slow scale pulse: `transform: scale(1)` → `scale(1.04)`, keyframe 14s loop, `animation-timing-function: ease-in-out`, `alternate`. This is subtle. Barely perceptible. Do not make blobs obviously wobble.

4. **Button hover** — Buttons with `--color-bg-green` fill: darken to `--color-bg-green-mid` on hover. Cream outline buttons: fill with green on hover, text turns cream. Transition: 220ms ease-out.

5. **Card hover** — Treatment cards: `transform: translateY(-6px)`, shadow deepens, border brightens to `--color-border-strong`. Duration: 250ms.

6. **Side panel hover** — The vertical side panels (on hero): small upward nudge of the circular arrow button (translateY(-3px)). 200ms.

7. **Image blob morph** — On hero image hover, the organic blob shape gently morphs to a slightly different set of border-radius values. 600ms ease-in-out.

8. **Number count-up** — Trust bar stat numbers count from 0 on viewport entry. Use JS, 1200ms duration.

9. **Green line draw** — Decorative thin green horizontal rules animate from width: 0 on scroll entry. 700ms ease-out.

---

## PART 3: SITE ARCHITECTURE — 5 PAGES

```
1. /          → Home
2. /treatments → Treatments
3. /about      → About the Clinic & Doctor
4. /results    → Results & Stories
5. /book       → Book a Consultation
```

**Shared components (present on every page):**
- Navigation (floating pill, fixed)
- Footer

---

## PART 4: SHARED COMPONENTS

### Navigation

See Part 2 — Navigation Style for full spec.

---

### Footer

**Background:** `--color-bg-green`. Top border: none (the green is the separator).

**Layout:** Three columns on desktop, stacked on mobile. All text on `--color-on-green`.

**Column 1 — Brand:**
Leaf SVG + "Nirva Skin" in Playfair Display italic, 1.4rem, `--color-on-green`. Tagline below in Jost weight 300, `--color-on-green-muted`. Then:

> "Nirva Skin is a dermatology and cosmetic clinic offering evidence-based skin treatments. We believe great skin is earned through care, not promises."

**Column 2 — Quick Links:**
Heading "Explore" in Jost 500, uppercase, letter-spacing 0.2em, `--color-on-green-muted` (small). Links in Jost 300, `--color-on-green`, hover: `--color-moss`.

- Treatments
- About Us
- Patient Stories
- Book a Consultation
- Privacy Policy

**Column 3 — Contact & Hours:**
Heading "Find Us" same style as Column 2 heading.

```
📍  Clinic address, City — 000 000
📞  +91 98XXX XXXXX
✉   hello@nirvaskin.in

Clinic Hours:
Mon – Sat: 10:00 AM – 7:00 PM
Sunday: 11:00 AM – 3:00 PM
```

Icons: Lucide, 14px, `--color-moss`.

**Bottom bar:**
`1px solid rgba(255,255,255,0.08)` divider above. `© 2025 Nirva Skin. All rights reserved.` centered in 0.72rem Jost 300, `--color-on-green-muted`.

---

## PART 5: PAGE-BY-PAGE SPECIFICATION

---

### PAGE 1: HOME (`/`)

**Purpose:** Create an immediate, visceral impression of botanical luxury and clinical trust. Reduce hesitation. Lead toward booking.

---

#### Section 1.1 — Hero

**Layout:** Full viewport height. Background: `--color-bg-primary` (warm cream). Grain texture visible.

**The hero is a collage layout — not two clean columns:**

- Left side (60% width): Stacked large display type, starting from the vertical middle
- Right side (40% width): A cluster of 2–3 overlapping blob-shaped image containers. The images show: (a) a close-up of glowing skin, warm lit, (b) a gentle product texture/serum drop, (c) a partial face portrait, eyes closed, peaceful. Use placeholder divs with gradient fills `linear-gradient(160deg, var(--color-blob-1), var(--color-blob-2))` if images unavailable.
- Behind the type on the left: 1–2 large decorative blob shapes in `--color-blob-3`, opacity 0.5, slightly blurred (`filter: blur(40px)`), z-index: 0. Text sits above at z-index: 1.
- Top-right: Two narrow vertical green side panels (64px wide, full height of right section), styled per Part 2 spec. First panel labeled "SKIN CARE", second "CONSULTATION". Each has a circular arrow button and a color swatch at bottom.

**Eyebrow label (above headline):**
`NIRVA SKIN — EST. 2024` in Jost 500, uppercase, letter-spacing 0.25em, `--color-ink-muted`, 0.68rem.

**Thin green line (40px, animated draw on load):** Sits between eyebrow and headline.

**Headline (Playfair Display, weight 700, hero size):**

> *"The skin you're in
> deserves more
> than a quick fix."*

Each line on its own `<span>`, word-by-word clip-path reveal animation on load.

**Subtext (Jost 300, 1rem, `--color-ink-muted`, max-width 420px):**

> We're a dermatology and cosmetic clinic built around one belief: real results come from understanding your skin, not rushing it.

**CTAs:**
- Primary: `Book a Consultation` — pill button, `--color-bg-green` fill, cream text, 999px radius, 48px height
- Secondary: `See Our Treatments` — pill button, transparent fill, `--color-border-strong` border, ink text

**Decorative sparkle glyphs:** Two `✦` glyphs, `--color-moss`, 1.2rem, scattered near the headline — one top-right of the word "skin", one bottom-left of the subtext block.

**Scroll indicator:** Bottom center. Small Lucide `ArrowDown` icon, `--color-moss`, slow bounce animation (2s loop, translateY 0 → 8px).

---

#### Section 1.2 — Trust Bar

**Background:** `--color-bg-green`. 80px top/bottom padding.

**Layout:** Four stats in a horizontal row. No borders between them, just generous spacing.

```
2,400+              12                  8                   100%
Patients Treated    Treatments          Years Combined       Dermatologist-Led
                    Offered             Experience
```

Stat number: Playfair Display, weight 700, 2.8rem, `--color-on-green`.
Label: Jost 400, 0.68rem, uppercase, letter-spacing 0.2em, `--color-on-green-muted`.

**Animation:** Numbers count up from 0 on viewport entry.

**Right edge decoration:** One small organic blob shape (40px, `--color-moss`, opacity: 0.2) floating near the top-right corner of this strip.

---

#### Section 1.3 — Philosophy Statement

**Layout:** Centered, max-width 680px, 128px top/bottom padding. Background: `--color-bg-primary`.

**Eyebrow:** `OUR PHILOSOPHY`

**Decorative element above eyebrow:** A small leaf SVG, `--color-moss`, centered, 24px.

**Headline (Playfair Display italic, weight 400):**

> *"We don't chase trends.
> We treat skin."*

**Body (Jost 300, two paragraphs):**

> Most clinics will tell you everything is possible. We'll tell you what's right for *your* skin — because no two patients are the same, and no treatment should be either.

> At Nirva Skin, every consultation begins with listening. We take the time to understand your skin history, your concerns, and what you actually want — before we recommend anything at all.

**Decorative element below copy:** An animated green line that draws in on scroll (full width of the text block, not page-width).

---

#### Section 1.4 — Featured Treatments

**Background:** `--color-bg-secondary` (slightly deeper cream).

**Eyebrow + Headline layout:** Left-aligned, with headline in Playfair Display.

**Eyebrow:** `WHAT WE TREAT`

**Headline:**

> *"Every concern.
> A considered answer."*

**Three treatment cards in a row (desktop), stacked (mobile):**

**Card anatomy:**
- Background: `--color-bg-primary`
- Border: `1px solid var(--color-border)`
- Border radius: 16px
- Top row: Lucide icon (24px, `--color-moss`) left + treatment number (`01`, `02`) in Playfair italic right, `--color-ink-muted`
- Thin green line (40px) below the top row, animated on card's first scroll entry
- Headline: Playfair Display, 1.3rem, `--color-ink`
- Body: Jost 300, 0.9rem, `--color-ink-muted`
- Bottom: `Explore →` link, Jost 400, `--color-green`, with a right-arrow glyph in a small circle (Me.Beauty-style arrow button)
- Hover: translateY(-6px), shadow deepens, border → `--color-border-strong`

**Card 1 — Acne & Acne Scars**
Icon: `Droplets` | *From active breakouts to years-old scars — we treat the root, not just the surface.*

**Card 2 — Pigmentation & Uneven Tone**
Icon: `Sun` | *Melasma, sun damage, dark spots — addressed with treatments calibrated to your skin tone.*

**Card 3 — Anti-Ageing**
Icon: `Sparkles` | *Fine lines, loss of firmness, dull texture — treated with precision, never with excess.*

**Below grid:** Centered — `View All 12 Treatments →` Jost 400, `--color-green`, underline animates in on hover (scaleX: 0 → 1).

---

#### Section 1.5 — Why Nirva Skin

**Layout:** Two-column. Left: tall blob-cropped image placeholder (a doctor in consultation, warm lighting). Right: text content. Background: `--color-bg-primary`. The left image is cropped in an organic blob shape, slightly overlapping into the right column at the top.

**Eyebrow:** `WHY PATIENTS CHOOSE US`

**Headline (Playfair Display italic):**

> *"A clinic that
> takes its time."*

**Four differentiator rows:**

```
01   Dermatologist-Led, Always
     Every treatment is prescribed and supervised by a qualified dermatologist — never delegated.

02   No Upselling, Ever
     We'll recommend what your skin needs. If it doesn't need something, we'll say so.

03   Evidence-Based Treatments
     We use only clinically proven protocols. No fads, no miracle machines, no empty promises.

04   Transparent Pricing
     You'll know the cost before the consultation ends. No surprise bills, no hidden packages.
```

Number: Playfair Display, weight 700, 1.4rem, `--color-moss`. Title: Jost 500, 0.9rem, `--color-ink`. Body: Jost 300, 0.88rem, `--color-ink-muted`.

Each row separated by a subtle `1px solid var(--color-border)` line.

---

#### Section 1.6 — Patient Story Teaser

**Layout:** Full-width. Background: `--color-bg-green`. 96px top/bottom padding. Centered content, max-width 700px.

**Decorative:** Two scattered `✦` glyphs in `--color-moss`, behind the quote text.

**Quote (Playfair Display italic, weight 400, 1.8rem, `--color-on-green`):**

> *"I'd had acne for eleven years. I'd tried everything. Nirva Skin was the first place that actually listened to me before suggesting anything."*

**Attribution (Jost 400, `--color-on-green-muted`):**
Priya M., 31 — Acne Treatment Patient

**CTA below:** `Read More Stories →` — outlined pill button, cream border, cream text, hover: fills with `--color-bg-green-mid`.

---

#### Section 1.7 — Consultation CTA Banner

**Layout:** Full-width. Background: `--color-bg-secondary`. 128px top/bottom padding. Text centered.

**Large organic blob decoration** — one large blurred blob (200px, `--color-blob-1`, opacity: 0.6, filter: blur(60px)) centered behind the text. Creates a soft atmospheric glow.

**Headline (Playfair Display, weight 700, large, `--color-ink`):**

> *"Your skin consultation
> begins with a conversation."*

**Subtext (Jost 300, `--color-ink-muted`, max-width 520px):**

> Book a 45-minute consultation with our dermatologist. No packages, no pressure — just an honest assessment of your skin and a clear plan forward.

**CTA:** `Book Your Consultation` — large pill button, `--color-bg-green` fill, cream text.

**Fine print (Jost 300, 0.78rem, `--color-ink-muted`):**
*Consultations available Mon–Sat. Online and in-clinic options.*

---

### PAGE 2: TREATMENTS (`/treatments`)

**Purpose:** Communicate expertise and range. Help patients self-identify their concern and feel understood.

---

#### Section 2.1 — Page Hero

**Layout:** 55vh height. Background: `--color-bg-green`. Left-aligned text. Two vertical side panels on far right (same style as homepage hero, different labels: "12 TREATMENTS" and "BOOK NOW"). Scattered `✦` glyphs in `--color-moss`.

**Eyebrow (Jost, cream-muted):** `OUR TREATMENTS`

**Headline (Playfair Display, weight 700, `--color-on-green`, italic):**

> *"Twelve treatments.
> One philosophy: your skin, understood."*

**Subtext (Jost 300, `--color-on-green-muted`):**

> Every treatment at Nirva Skin is preceded by a consultation. We don't offer treatments in isolation — we build a plan.

---

#### Section 2.2 — Treatment Grid

**Background:** `--color-bg-primary`. 3 columns desktop, 2 tablet, 1 mobile. Same card anatomy as Section 1.4.

**All 12 Treatment Cards:**

```
01  Acne & Acne Scars              Icon: Droplets
    Active acne, hormonal breakouts, post-acne marks, and deep ice-pick scars — treated with a
    combination of clinical peels, topical protocols, and laser when needed.

02  Pigmentation & Melasma         Icon: Sun
    Uneven skin tone, dark patches, sun damage, and melasma addressed with targeted treatments
    that respect your natural complexion.

03  Anti-Ageing & Rejuvenation     Icon: Sparkles
    Fine lines, sagging skin, loss of volume, and dull texture — approached with non-surgical
    precision and long-term thinking.

04  Chemical Peels                 Icon: Layers
    Medical-grade peels customised to your skin type — for texture, tone, acne, or general
    skin health. Not a one-size-fits-all approach.

05  Laser Treatments               Icon: Zap
    From hair reduction to pigmentation correction — our laser protocols are calibrated per
    skin tone and concern, not applied universally.

06  Hair Loss (Alopecia)           Icon: Wind
    PRP therapy, scalp analysis, and evidence-based hair restoration for both men and women.
    We address cause, not just symptom.

07  Under-Eye Treatment            Icon: Eye
    Dark circles, hollowness, puffiness — assessed individually. Not every under-eye concern
    has the same cause, and not every cause has the same fix.

08  Skin Hydration & Glow          Icon: Droplet
    Hydrafacials, mesotherapy, and IV skin boosters for those who want their skin to simply
    look healthy, rested, and alive.

09  Mole & Skin Tag Removal        Icon: Circle
    Safe, precise removal of benign moles, skin tags, and DPN — with proper assessment
    before every procedure.

10  Scar Revision                  Icon: Activity
    Whether surgical, acne-related, or from injury — scar revision at Nirva Skin uses
    microneedling, fractional laser, and subcision.

11  Bridal Skin Packages           Icon: Calendar
    A structured 3–6 month pre-wedding skin programme designed around your wedding date,
    not a menu of random treatments.

12  Men's Dermatology              Icon: User
    Acne, pigmentation, hair loss, anti-ageing — the same science, designed for how men's
    skin works and how men want to be spoken to.
```

---

#### Section 2.3 — The Consultation Note

**Layout:** Full-width centered box, max-width 680px, green border (`--color-border-strong`), border-radius 16px, `--color-bg-secondary` background, centered text, 48px padding.

**Content (Playfair Display italic for the bold part, Jost 300 for body):**

> **Every treatment begins with a consultation.**
> We don't book treatments directly. First, we understand your skin. Then, we build your plan. This is not a delay — it's the most important part of your care.

**CTA:** `Book a Consultation →` pill button, `--color-bg-green`, cream text.

---

### PAGE 3: ABOUT (`/about`)

**Purpose:** Build trust. Humanise the clinic. Make the doctor real. Justify the premium positioning.

---

#### Section 3.1 — Page Hero

**Background:** `--color-bg-primary`. Left-aligned. Large organic blob shape in `--color-blob-2`, opacity 0.5, bottom-right of the hero section (decorative). Two `✦` glyphs scattered.

**Eyebrow:** `OUR STORY`

**Headline (Playfair Display, weight 700):**

> *"We built Nirva Skin
> because patients
> deserved better."*

**Subtext (Jost 300, max-width 480px):**

> Not a chain. Not a franchise. A single clinic, built by a dermatologist who got tired of watching patients get rushed, upsold, and undertreated.

---

#### Section 3.2 — The Doctor

**Layout:** Background `--color-bg-secondary`. Two-column: Left 45% — a tall blob-cropped photo placeholder (warm-lit portrait, doctor in non-intimidating clinical setting, placeholder text: "[ Dr. Aarav Mehta — warm studio portrait ]"). Right 55% — text.

**Eyebrow:** `MEET YOUR DERMATOLOGIST`

**Headline (Playfair Display italic):**

> *Dr. Aarav Mehta*

**Sub-headline (Playfair Display, weight 400, smaller):**
MD Dermatology, AIIMS Delhi

**Body (Jost 300, three short paragraphs):**

> Dr. Mehta trained at AIIMS Delhi and completed a fellowship in cosmetic dermatology in Singapore before returning to India to build the kind of clinic he always wished existed for his own patients.

> He started Nirva Skin with one principle: every patient deserves the same quality of attention, whether they're coming in for a mole check or a full skin transformation.

> He does not delegate consultations. He does not upsell. He will tell you, with honesty, what your skin needs — and what it doesn't.

**Credential tags:** Small pill-shaped outlined tags in `--color-border-strong` with `--color-green` text. Jost 400, 0.72rem.

- MD Dermatology — AIIMS Delhi
- Fellowship in Cosmetic Dermatology
- 8+ Years Clinical Experience
- Member, Indian Association of Dermatologists

---

#### Section 3.3 — The Clinic

**Background:** `--color-bg-primary`. Two-column: text left, image blob right.

**Eyebrow:** `OUR SPACE`

**Headline (Playfair Display italic):**

> *"Designed to feel like
> a deep breath."*

**Body (Jost 300, two paragraphs):**

> We spent a long time designing Nirva Skin's physical space. We wanted it to feel neither clinical-cold nor spa-soft — but something in between. Warm stone walls. Natural light. No harsh overhead fluorescents. No waiting room anxiety.

> You'll be offered water when you arrive. You'll never feel rushed. And you'll leave knowing exactly what happens next.

---

#### Section 3.4 — Our Values

**Background:** `--color-bg-green`. Three-column layout. Each column: title in Playfair Display italic `--color-on-green`, body Jost 300 `--color-on-green-muted`. Thin vertical lines (`1px solid rgba(255,255,255,0.1)`) separate columns on desktop.

**Value 1 — Honesty before everything**

> We will tell you if a treatment won't work for your skin. We will tell you if you don't need something. We have turned away patients who wanted treatments that weren't right for them. We'd rather lose the booking.

**Value 2 — Evidence, not trends**

> We don't add treatments to our menu because they're trendy. We add them when the clinical evidence is strong enough. If something isn't proven, we don't offer it.

**Value 3 — Your skin, for life**

> We're not trying to create repeat dependency. We're trying to give your skin the foundation to stay healthy with minimum intervention. The goal is for you to need us less over time.

---

#### Section 3.5 — CTA

**Background:** `--color-bg-secondary`. Centered.

**Headline (Playfair Display italic):** *"Come and meet us."*

**Subtext (Jost 300):** A consultation is just a conversation. You'll leave with clarity — whether or not you book a treatment.

**CTA:** `Book a Consultation` — pill button, `--color-bg-green`, cream text.

---

### PAGE 4: RESULTS (`/results`)

**Purpose:** Show social proof without feeling like a before/after factory. Keep it human and specific.

---

#### Section 4.1 — Page Hero

**Background:** `--color-bg-green`. Same layout language as Treatments page hero, with side panels and `✦` glyphs.

**Eyebrow:** `PATIENT RESULTS`

**Headline (Playfair Display italic, weight 700, `--color-on-green`):**

> *"Real patients.
> Real skin. Real time."*

**Subtext (Jost 300, `--color-on-green-muted`):**

> These are not touched-up photographs. These are honest results from patients who agreed to share their journey. Some took 3 months. Some took a year. Skin takes its time.

---

#### Section 4.2 — Before/After Grid

**Background:** `--color-bg-primary`. 2-column grid. Each before/after pair in a card with border-radius 16px and `--color-border` border.

**Slider interaction:** A draggable vertical divider reveals the "after" image over the "before" image. The divider handle is a small circle with a Lucide `ChevronsLeftRight` icon, `--color-bg-green` fill, cream icon.

**6 Before/After Cases (use placeholder gradient divs if no images):**

```
Case 1: Acne & Scarring         — Female, 26
        "12 weeks. Chemical peels + topical protocol."
        Before placeholder: linear-gradient(135deg, #C4956A, #8A6048)
        After placeholder:  linear-gradient(135deg, #E8C4A0, #C9A880)

Case 2: Melasma                 — Female, 38
        "6 months. Laser + topical depigmentation."
        Before placeholder: linear-gradient(135deg, #B8896A, #8A5A40)
        After placeholder:  linear-gradient(135deg, #D9B090, #C4906A)

Case 3: Hair Loss               — Male, 34
        "4 months. PRP + oral supplements."

Case 4: Anti-Ageing             — Female, 45
        "Skin booster + microneedling, 3 months."

Case 5: Acne Scars              — Male, 29
        "Fractional laser + subcision, 5 sessions."

Case 6: Under-Eye Hollowness    — Female, 41
        "Filler + PRP, single session."
```

**Each card anatomy:**
- Duration badge top-right: small pill, `--color-bg-green`, cream text, Jost 400, 0.72rem
- Treatment label below: Jost 400, 0.75rem, `--color-green`, uppercase, letter-spacing 0.15em
- Patient note below in Playfair italic, `--color-ink-muted`

---

#### Section 4.3 — Patient Testimonials

**Background:** `--color-bg-secondary`. 3-column grid desktop, horizontal scroll mobile.

**5 Testimonial Cards:**

**Card style:** `--color-bg-primary` background, `--color-border` border, border-radius 16px, padding 32px. Large Playfair italic opening quote mark in `--color-moss`, 4rem, decorative.

1. *"I was nervous about coming in — I'd had bad experiences at other clinics where I felt judged for my acne. The first consultation with Dr. Mehta felt completely different. He just... listened."*
   — Anika S., 27, Delhi

2. *"I'd been living with melasma for six years and had given up. Nirva Skin was the first place that gave me an honest answer about what was possible — and then actually delivered it."*
   — Rohini K., 39, Pune

3. *"As someone who was skeptical about going to a cosmetic clinic — too much 'anti-ageing' noise out there — I appreciated that nobody tried to sell me anything beyond what I asked about."*
   — Sameer T., 42, Bengaluru

4. *"The before/after photos don't fully capture it. It's not just the skin — it's the confidence. I stopped wearing concealer to work for the first time in eight years."*
   — Meera D., 30, Mumbai

5. *"My hair loss was affecting me badly. Three other clinics had given me generic advice. Dr. Mehta ran actual tests, found an underlying cause, and then treated that. Six months later my hair is back."*
   — Karan V., 35, Hyderabad

Quote text: Playfair Display italic, 1.05rem, `--color-ink`.
Attribution: Jost 400, 0.8rem, `--color-moss`.
Left accent border: `3px solid var(--color-moss)`, border-radius 2px.

---

#### Section 4.4 — Transparency Note

**Layout:** Full-width, centered container, max-width 700px, `--color-border-strong` border, border-radius 16px, `--color-bg-secondary` background, padding 40px.

**Heading (Playfair Display italic, `--color-green`):** *A note on our results.*

**Body (Jost 300, `--color-ink-muted`):**
> All before/after photographs are from real Nirva Skin patients with written consent. Results vary based on skin type, concern severity, adherence to protocol, and individual biology. We will never show you a result we cannot realistically replicate. If your case is significantly different, we will tell you.

---

### PAGE 5: BOOK A CONSULTATION (`/book`)

**Purpose:** Make booking feel easy, calm, and trust-reinforcing. No form anxiety.

---

#### Section 5.1 — Page Hero

**Background:** `--color-bg-primary`. Left-aligned. One large organic blob shape, `--color-blob-1`, opacity 0.5, blurred, bottom-right. Standard eyebrow + headline layout.

**Eyebrow:** `BOOK A CONSULTATION`

**Headline (Playfair Display italic, weight 700):**

> *"Let's talk about
> your skin."*

**Subtext (Jost 300, `--color-ink-muted`, max-width 460px):**

> A 45-minute consultation with Dr. Mehta. We'll look at your skin, listen to your history, and tell you honestly what we'd recommend — and why.

---

#### Section 5.2 — What to Expect

**Background:** `--color-bg-secondary`. Three-step row (horizontal desktop, vertical mobile).

Each step: large step number in Playfair Display weight 700, 3rem, `--color-moss`. Title in Playfair italic. Body in Jost 300.

**Connecting line between steps:** A dashed `--color-border-strong` horizontal line connecting the three number circles on desktop.

```
Step 1 — Fill in the form below
         Takes two minutes. Tell us your primary concern and preferred timing.

Step 2 — We confirm within 24 hours
         A member of our team will call or WhatsApp to confirm your slot.

Step 3 — Come in (or join online)
         In-clinic or video consultation available. 45 minutes. No rushing.
```

---

#### Section 5.3 — Booking Form

**Background:** `--color-bg-primary`. Form container: centered, max-width 560px, `--color-bg-surface` background, border `1px solid var(--color-border-strong)`, border-radius 20px, padding 48px.

**Input style:** Bottom-border only (`border: none; border-bottom: 1px solid var(--color-border-strong); border-radius: 0`). Background transparent. Focus: border-bottom color transitions to `--color-green`. Label: Jost 500, 0.72rem, uppercase, letter-spacing 0.15em, `--color-ink-muted`. Input text: Jost 300.

**Form fields:**

```
Full Name *
Phone Number *
Email Address *
Primary Concern *   [Dropdown: Acne & Scarring / Pigmentation & Melasma / Anti-Ageing /
                     Hair Loss / Chemical Peel / Laser Treatment / Other]
Preferred Date *    [Date picker]
Preferred Time *    [Dropdown: Morning (10am–1pm) / Afternoon (1pm–4pm) / Evening (4pm–7pm)]
Consultation Type * [Radio: In-Clinic / Video Call]
Anything else?      [Optional textarea, 3 rows]
```

**Radio buttons:** Custom styled — small circle + dot, using `--color-green` for selected state. Not browser-default.

**Dropdown:** Custom styled with a Lucide `ChevronDown` icon, matching the overall aesthetic.

**Submit button:** Full-width, `--color-bg-green` fill, cream text, border-radius 999px, 52px height, Jost 500, "Request My Consultation" + Lucide `ArrowRight` inline icon. Hover: `--color-bg-green-mid`.

**Below form:**

> We'll confirm within 24 hours. Your information is never shared.
> Prefer WhatsApp? [Message us directly →]

Jost 300, 0.85rem, `--color-ink-muted`. WhatsApp link in `--color-green`.

**Success state:** On submit, the form card fades out and a success message fades in: a centered `✦` glyph in `--color-moss`, a Playfair italic headline *"We'll be in touch."*, and a Jost 300 body line "We've received your request and will confirm within 24 hours."

---

#### Section 5.4 — Reassurance Block

**Background:** `--color-bg-secondary`. Three-column, centered icons.

Each item: Lucide icon (24px, `--color-moss`), Jost 500 title, Jost 300 body.

```
🔒  Private & Confidential
    Your consultation details and skin history are strictly confidential.

💬  No Pressure, Ever
    You are under no obligation to book a treatment after your consultation.

✅  Free First Consultation*
    Your first consultation is complimentary. *Valid for new patients only.
```

---

#### Section 5.5 — Contact Details Card

**Layout:** Alongside or below form. Card with `--color-bg-green` background, border-radius 16px, padding 32px. All text `--color-on-green`.

```
📍  [Clinic Name], [Street], [City] — [PIN]
    [Placeholder Google Maps embed here — rounded 12px iframe]

📞  +91 98XXX XXXXX

✉   hello@nirvaskin.in

🕐  Mon–Sat: 10:00 AM – 7:00 PM
    Sunday: 11:00 AM – 3:00 PM
```

Icons: Lucide, 16px, `--color-moss`.

---

## PART 6: RESPONSIVE DESIGN RULES

**Breakpoints:**

```
Mobile:   < 640px
Tablet:   640px – 1024px
Desktop:  > 1024px
```

**Mobile-specific rules:**
- Hero collage layout → stacked (blob image cluster moves below headline)
- Side panels on hero → hidden on mobile (not enough width)
- 3-column grids → 1 column
- 2-column sections → stacked (image always below text)
- Trust bar → 2×2 grid
- Before/after grid → 1 column
- Testimonials → horizontal scroll with snap points
- Navigation pill → slightly smaller, still centered or top-fixed
- Organic blob decorations → scale down by 40%, reduce opacity to 0.35

**Touch targets:** All interactive elements minimum 44×44px.

---

## PART 7: PERFORMANCE & TECHNICAL NOTES

- Use Next.js or plain HTML/CSS/JS — both are acceptable
- All images: `loading="lazy"`, use blob-shaped CSS clip-paths or border-radius for shaping (not `clip-path` SVG on `<img>` for performance — wrap in a `<div>` with `overflow: hidden` and the border-radius applied to the container)
- Grain texture: SVG feTurbulence filter as a CSS background, not a raster image
- Organic blobs: Pure CSS `border-radius` with multiple values — no SVG clip-paths needed
- Fonts: Load only specified weights. `font-display: swap`
- Before/after slider: Vanilla JS, no library needed. Mouse + touch events.
- Form: `console.log` on submit + success state UI — no backend required for demo
- `will-change: transform` only on blob breathing animation and card hover elements
- `@media (prefers-reduced-motion: reduce)` — wrap all animations, disable all except immediate visibility states
- Color contrast: Jost 300 on `--color-bg-primary` (#F7F4EF) must be checked. Use `--color-ink` (#1A1A14) for all body text — this passes WCAG AA comfortably. `--color-on-green` (#E8E2D5) on `--color-bg-green` (#1C2B1E) also passes.

---

## PART 8: DO NOT DO LIST

- ❌ Near-black or dark grey backgrounds anywhere (this design is cream and forest green only)
- ❌ Gold accents — replaced entirely by forest green and moss
- ❌ Cormorant Garamond, DM Sans, or any of the v1 fonts
- ❌ Sharp corners (0px radius) on any element
- ❌ Rectangular image crops — every photo must be in an organic blob shape
- ❌ Bootstrap-style card drop shadows (grey, symmetrical, heavy)
- ❌ Purple, teal, or blue as any accent
- ❌ Bold body text
- ❌ Full-width flat navigation bar (use the floating pill)
- ❌ The side panels removed for "simplicity" — they are essential to the visual identity
- ❌ Filled icons (Lucide stroke only)
- ❌ Any copy using: "world-class", "state-of-the-art", "cutting-edge", "affordable luxury"
- ❌ Generic stock photo aesthetic in placeholder descriptions
- ❌ Bouncy, spring-physics, or playful animations — organic and slow only
- ❌ More than two font families (Playfair Display + Jost only)
- ❌ Excessive use of `✦` glyph — max 2–3 per page

---

## PART 9: FINAL CHECKLIST BEFORE DELIVERY

- [ ] Grain texture visible on all cream backgrounds
- [ ] Organic blob shapes present on hero (decorative fills + image crops)
- [ ] Vertical side panels (64px, forest green) present on homepage hero, treatments hero, results hero
- [ ] Floating pill navigation is present and transitions correctly on scroll
- [ ] Hero text clip-path word reveal fires on load
- [ ] Blob breathing animation is subtle (barely perceptible)
- [ ] All photos/image placeholders are blob-cropped (never rectangular)
- [ ] Green line draw animations fire on all section decorative lines
- [ ] Scroll-triggered fade-ups work on all sections
- [ ] All 12 treatment cards present on `/treatments`
- [ ] Before/after sliders are draggable and functional on `/results` (mouse + touch)
- [ ] Booking form shows success state on submit
- [ ] Mobile menu opens and closes cleanly
- [ ] Side panels hidden on mobile without breaking layout
- [ ] Typography scale consistent — no rogue font sizes
- [ ] No overflow on mobile
- [ ] All CTAs lead to `/book`
- [ ] Footer uses `--color-bg-green` background, all 5 pages
- [ ] `prefers-reduced-motion` respected
- [ ] Credential tags on About page are pill-shaped with green border
- [ ] Custom radio buttons and dropdowns on booking form (not browser-default)

---

*End of Blueprint v2. Total pages: 5. Total sections specified: 28. Design language overhauled. No detail left to invention.*

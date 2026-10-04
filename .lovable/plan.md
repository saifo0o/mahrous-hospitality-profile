# Presentation Enhancement — "Architectural Editorial Signature" (whole site)

## Goal
Deepen the current Ink / Paper / Clay editorial identity across every page using the approved
"Architectural Editorial Signature" direction: oversized Fraunces headlines with italic
second-lines, clay corner-bracket signature frames, elevated dark stats band with a ghost
watermark, hover-reveal editorial rows, and floating ink label chips. Same palette (#F5F2EA /
#14171A / #B5502B / #1E3630), same type voices (Fraunces headlines, Inter body, Amiri/Cairo
for Arabic), light theme only.

## Design system additions (src/index.css)
- `.corner-frame` — clay 2px L-brackets on two opposite corners of portrait/card containers
  (replaces/evolves the current single-corner `.signature-frame`), with RTL-mirrored variant.
- `.section-eyebrow-italic` — Fraunces italic clay eyebrow ("01 — The Framework") as the new
  numbered section marker; keep the existing uppercase eyebrow class for compact spots.
- `.ghost-word` — giant (20–28rem) Fraunces italic watermark at 2–4% opacity, positioned
  off-corner in dark bands; `pointer-events-none`, overflow-safe.
- `.float-label` — ink chip (`bg-primary text-primary-foreground`, 0.4em tracking uppercase,
  heavy shadow) that overlaps the edge of an image/frame.
- `.editorial-row` — full-width hairline-underlined rows where the description reveals on
  hover (title turns clay), with `hidden md:block` fallback so touch devices always show text.
- `.oversized-stat` — Fraunces numeral at text-6xl→text-8xl with clay 0.4em uppercase label.
- Keep the paper-grain body texture; tune only where a band needs its own.

## Homepage (src/components/*)
1. **HeroSection** — rebuild hero grid to the chosen composition: clay-bracket portrait with
   `grayscale → color` slow hover, floating "Independent Advisor" style ink chip (label adapted
   to real title), headline "Islam / *Mahrous*" with staggered indent and clay italic second
   line, thin vertical rule beside the intro paragraph. Keep the existing CTAs (Book a
   consultation, Executive dossier PDF, career story link) and the stat strip.
2. **StatsSection** — elevate to the "Legacy" band: huge Fraunces numerals (30+ years, 4,484+
   trained, 31% RevPAR, $62M+ deployed — real figures only), clay uppercase labels, hairline
   white/10 top+bottom rules, ghost watermark word behind. Count-up animation retained.
3. **BrandLogos** — keep marquee; lift the strip onto the ivory field with hairline rules
   above/below and slightly larger, crisper white logo cards.
4. **MethodologySection** — convert the phase list to hover-reveal editorial rows (title in
   Fraunces, phase numeral right-aligned in tiny uppercase); detail card becomes a white
   elevated panel with a clay corner bracket.
5. **ProjectsSection** — case-study cards keep Challenge → Intervention → Impact, restyled:
   larger Fraunces titles, clay bracket on imagery, impact numeral treatment matching the
   stats band. Real property photos only (no AI imagery).
6. **Testimonials / Awards / Blog teasers** — align to the system: hairline rules, ghost
   watermark in the dark awards band, editorial-row rhythm, consistent eyebrow style.
7. **ContactSection / Footer** — dark ink footer with hairline rules, Fraunces italic closing
   line, clay micro-accents; keep contact channels (incl. +20 109 555 6779 KSA/EG).

## Inner pages
- **About** — same eyebrow + corner-frame treatment on portraits and gallery.
- **Projects (page)** — hero headline with italic second line; case-study list adopts
  editorial rows; detail pages keep current structure, restyled headers.
- **Consulting** — three pillars become numbered editorial cards with corner brackets;
  hover-reveal for the pillar details.
- **Career** — keep the 5-chapter memoir; style chapter openers as oversized Fraunces
  numerals + italic titles, hairline dividers.
- **Blog / BlogPost** — article headers in the new hero style; featured card gets the
  floating label chip; keep LinkedIn OG sharing untouched.
- **Contact (page)** — form and info blocks on white panels with clay brackets.

## Constraints
- All figures come from existing site copy (26+ years, 4,484+/5,000+ trained, 31%/+35% RevPAR,
  $62M+/$70M+ deployed, 19-property Marriott council, etc.) — no invented numbers.
- Real photos only; no AI-generated brand/property imagery; no new logos.
- Preserve bilingual EN/AR: every new string gets an Arabic translation; RTL mirrors corner
  brackets, indents, and rules (existing `[dir="rtl"]` pattern).
- Light theme only; no dark-mode regressions; keep reduced-motion and accessibility overrides.
- No changes to SEO components, JSON-LD, sitemap, OG sharing, admin/CMS, or backend.

## Verification
- Build clean; typecheck clean.
- Playwright pass over home + each inner page in EN and AR: screenshots, hover states, RTL
  mirroring, no horizontal overflow at mobile width.
- Confirm stats/figures match existing copy; confirm LinkedIn sharing still works on a blog
  article.

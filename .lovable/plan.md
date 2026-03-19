

# Website Enhancement Plan

## Current State

The website is well-built with page transitions, brand logos marquee, bilingual support, testimonials with autoplay, career timeline, and project filtering. The homepage includes: Hero, BrandLogos, Stats, About, Experience, Projects, Testimonials, and Contact sections.

## What's Missing & Can Be Enhanced

### 1. Homepage Gaps
- **No Awards section on homepage** — Awards page exists but homepage doesn't showcase any
- **No Case Studies / Media section on homepage** — DynamicLoader has entries for `CaseStudiesSection`, `MediaSection`, `AwardsSection`, `BlogSection`, `SpeakingSection` but none are rendered on Index.tsx
- **Contact form is not functional** — uses `setTimeout` mock instead of actually sending data (no database insert or email edge function)

### 2. Inner Page Improvements
- **About page skills** are flat text chips — no visual skill meters or progress indicators
- **Blog page** has no featured/pinned article hero, no reading time estimates
- **Awards page** doesn't pull from the `awards` database table — uses hardcoded data

### 3. Functional Gaps
- **Contact form doesn't persist** — form submission is faked with `setTimeout`, messages aren't saved to database
- **Newsletter signup component exists** but isn't used anywhere
- **No social share buttons** on blog posts or project pages

### 4. Visual Polish
- **Hero section** — no typewriter/word-reveal animation on the tagline (planned but not implemented)
- **Stats section** — no completion glow effect after number animation finishes
- **Experience cards** — no brand logos next to company names
- **Footer** — no "Trusted by" brand row at the bottom

---

## Implementation Plan

### A. Add Missing Homepage Sections
- Add `AwardsSection` and `BlogSection` to `Index.tsx` between Testimonials and Contact
- These already exist as components and are registered in `DynamicLoader`

### B. Make Contact Form Functional
- Create a `contact_messages` database table (name, email, subject, message, created_at)
- Update `Contact.tsx` to insert into the database on submit
- Add RLS policy allowing anonymous inserts

### C. Hero Typewriter Effect
- Add a word-by-word reveal animation to the hero tagline using framer-motion staggerChildren

### D. Experience Cards — Brand Logos
- Import brand logos (Marriott, IHG, Accor, Sheraton, Prime Hotels) into `ExperienceSection.tsx`
- Show small logo next to each company name

### E. About Page — Skill Progress Bars
- Replace flat skill chips with animated progress bars or radial indicators
- Group skills by category (Operations, Leadership, Technical)

### F. Blog — Reading Time & Featured Article
- Add estimated reading time (word count / 200) to blog cards
- Style the first blog post as a larger featured hero card

### G. Awards Page — Database Integration
- Fetch awards from the `awards` database table instead of hardcoded data
- Fall back to hardcoded data if database is empty

### H. Footer Enhancement
- Add a compact brand logos row above the footer columns

---

## Files to Modify

```text
src/pages/Index.tsx              (add AwardsSection, BlogSection)
src/components/HeroSection.tsx   (typewriter animation on tagline)
src/components/ExperienceSection.tsx (brand logos next to companies)
src/pages/About.tsx              (skill progress bars)
src/pages/Blog.tsx               (reading time, featured article)
src/pages/Awards.tsx             (fetch from database)
src/pages/Contact.tsx            (save to database)
src/components/Footer.tsx        (brand logos row)
```

Database migration: Create `contact_messages` table with public insert RLS policy.

All changes use existing dependencies. No new packages needed.


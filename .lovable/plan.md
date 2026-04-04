

# Mobile-First Enhancement Plan

## Current Issues on Mobile

1. **Hero section**: Text is `text-5xl` on all screens — too large for phones. Hero image and floating badges (`-right-10`, `-left-10`) overflow on small screens. CTA buttons don't stack well.
2. **Navbar**: Mobile menu exists but no touch-friendly improvements — no swipe-to-close, tap targets are small (36px icons).
3. **Brand logos marquee**: Cards are `w-28 h-20` minimum — still large, and the marquee animation may be janky on mobile. No `prefers-reduced-motion` respect.
4. **Stats section**: 4 stats in a row — likely wraps awkwardly on mobile.
5. **Contact section**: Grid doesn't collapse cleanly; contact items may overflow.
6. **Footer**: 4-column grid too dense on small screens. Pre-footer CTA text is `text-3xl` minimum.
7. **WhatsApp + BackToTop buttons**: Both `fixed bottom-6 right-6` / `bottom-20 right-8` — may overlap each other.
8. **Touch targets**: Many links and buttons are smaller than 44px minimum recommended.
9. **No mobile viewport meta optimizations**: Missing `viewport-fit=cover` for notched phones.
10. **About section image**: Fixed `h-[520px]` — too tall on small phones, causes excess scrolling.
11. **Heavy animations**: Multiple framer-motion animations run simultaneously on mobile, causing jank.

## Implementation Plan

### A. Hero Section Mobile Optimization
- Reduce heading to `text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl`
- Reduce hero image from `w-72 h-80` to `w-56 h-64 sm:w-72 sm:h-80`
- Clamp floating badge positions so they don't overflow: use `right-0` / `left-0` on mobile instead of negative offsets
- Stack CTA buttons vertically on mobile: `flex-col sm:flex-row`
- Hide brand logos row in hero on mobile (already shown in BrandLogos marquee below)

### B. Navbar Mobile UX
- Increase mobile menu tap targets to min 44px height
- Add `backdrop-blur` to mobile menu overlay
- Add touch-friendly padding to mobile nav items

### C. Brand Logos Marquee
- Reduce card size on mobile: `w-20 h-14 sm:w-28 sm:h-20`
- Add `@media (prefers-reduced-motion: reduce)` to pause marquee animation
- Reduce gap on mobile

### D. Stats Section
- Use `grid-cols-2` on mobile instead of letting it wrap randomly
- Reduce number size on mobile

### E. About Section
- Change image height from `h-[520px]` to `h-[320px] sm:h-[420px] lg:h-[520px]`

### F. Footer Mobile
- Collapse 4-column grid to single column on mobile with accordion-style sections
- Stack newsletter signup full-width on mobile
- Reduce pre-footer CTA heading size

### G. Floating Buttons (WhatsApp + BackToTop)
- Position BackToTop at `bottom-24` to avoid overlapping WhatsApp
- Reduce button sizes slightly on mobile
- Ensure minimum 44px touch targets

### H. Global Mobile Polish
- Add `viewport-fit=cover` to index.html meta viewport for safe area insets on notched phones
- Add `env(safe-area-inset-bottom)` padding to fixed bottom elements
- Reduce framer-motion animation complexity on mobile using `useReducedMotion`
- Add CSS: `@media (prefers-reduced-motion: reduce)` to disable heavy animations

### I. Touch & Accessibility
- Ensure all interactive elements have min 44×44px touch targets
- Add `-webkit-tap-highlight-color: transparent` for cleaner tap feedback

## Files to Modify
```text
index.html                        (viewport-fit=cover)
src/index.css                     (mobile typography, reduced motion, safe-area)
src/components/HeroSection.tsx    (responsive text, image, badges, CTA stack)
src/components/Navbar.tsx         (larger tap targets in mobile menu)
src/components/BrandLogos.tsx     (smaller cards on mobile, reduced motion)
src/components/StatsSection.tsx   (2-col grid on mobile)
src/components/AboutSection.tsx   (responsive image height)
src/components/Footer.tsx         (single column mobile, reduced CTA text)
src/components/BackToTopButton.tsx (safe positioning, avoid WhatsApp overlap)
src/components/WhatsAppButton.tsx  (safe-area padding)
src/components/ContactSection.tsx  (mobile padding adjustments)
```

No new dependencies needed. All changes use existing Tailwind responsive prefixes and CSS.


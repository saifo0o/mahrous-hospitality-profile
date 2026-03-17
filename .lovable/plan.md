

# Enhancement Plan

## Issues to Fix

1. **Build errors**: `process.env.NODE_ENV` references in `performance.ts` and `ErrorBoundary.tsx` — replace with `import.meta.env.DEV` (Vite standard)

2. **About section image**: Currently uses the same photo as hero (`ceab1cbd`). Replace with the newly uploaded professional photo (`user-uploads://image.png`)

3. **Brand logos**: Current AI-generated logos need replacing with real company logos fetched from the web (Marriott, IHG, Accor, Sheraton, Crowne Plaza, Four Points by Sheraton)

4. **Prime Hotels logo**: Use the uploaded `user-uploads://prime_logo_black.png` for Prime Hotels across the site

5. **Career page — Prime Hotels entry**: Add the Prime Hotels logo next to "Group Operations Director" 

6. **Career page — Crowne Plaza Alexandria**: Add a real photo of Crowne Plaza Alexandria (search web for actual property image)

7. **Projects page — Crowne Plaza Alexandria**: Same — use a real Crowne Plaza Alexandria image instead of the generic Unsplash photo

## Implementation Steps

### A. Fix Build Errors
- **`src/utils/performance.ts`**: Replace all `process.env.NODE_ENV === 'development'` with `import.meta.env.DEV`, remove `NodeJS` namespace reference
- **`src/components/ErrorBoundary.tsx`**: Same `process.env` fix

### B. Copy Uploaded Assets
- Copy `user-uploads://image.png` → `src/assets/profile-new.jpeg` (for About section)
- Copy `user-uploads://prime_logo_black.png` → `src/assets/logos/prime-hotels.png` (overwrite generated one)

### C. Fetch Real Brand Logos
Search web for official/high-quality logos of:
- Marriott International
- IHG Hotels & Resorts
- Accor Hotels
- Sheraton Hotels & Resorts
- Crowne Plaza
- Four Points by Sheraton

Use AI image generation to create clean, professional versions of each logo if web sources aren't directly usable. Regenerate the logo asset files in `src/assets/logos/`.

### D. Fetch Real Crowne Plaza Alexandria Image
Search web for actual Crowne Plaza Alexandria Mirage property photo. Use it in both:
- `src/pages/Career.tsx` — Crowne Plaza entry (currently has no image)
- `src/pages/Projects.tsx` — Crowne Plaza Alexandria card (currently uses generic Unsplash)

### E. Update Components
- **`src/components/AboutSection.tsx`**: Change image src to use the new uploaded profile photo
- **`src/components/HeroSection.tsx`**: Keep current hero photo, no change
- **`src/pages/Career.tsx`**: Add Prime Hotels logo display next to the Group Operations Director entry; add Crowne Plaza Alexandria image
- **`src/pages/Projects.tsx`**: Update Crowne Plaza Alexandria image URL
- **`src/components/BrandLogos.tsx`**: Already imports from `src/assets/logos/` — will use updated logo files automatically

### F. General UI Polish
- Ensure brand logo cards have consistent sizing and dark mode treatment
- Verify marquee animation works smoothly with new logo images

### Files Modified
```text
src/utils/performance.ts          (fix build errors)
src/components/ErrorBoundary.tsx   (fix build errors)
src/assets/logos/*.png             (replace with real logos + uploaded Prime logo)
src/assets/profile-new.jpeg       (new uploaded photo)
src/components/AboutSection.tsx    (use new profile photo)
src/pages/Career.tsx               (add Prime logo, add CP Alexandria image)
src/pages/Projects.tsx             (update CP Alexandria image)
```


# Fix slow / "blank" loading on mobile

## What's going on
- Every page starts fully invisible and fades in only after all the code has downloaded and run. On a phone with a slower connection, you see a blank cream screen for several seconds, so it looks like nothing loaded.
- The hero headline also starts invisible and blurred, then animates in word by word. Blur effects are slow on iPhones.
- All pages download together on the first visit, even pages you haven't opened (Career, Blog, Admin and others). That makes the first download much bigger than it needs to be.
- Some photos are large: a 1.2 MB portrait PNG, a 790 KB background image, and several 300–460 KB photos.
- The offline cache script clears its saved files on every update, so phones can end up downloading everything again.

## Fixes
1. **Show content right away**: the homepage text and portrait appear as soon as the page opens. Animations play on top of visible content instead of hiding it first. Remove the blur effect on mobile, and respect the phone's "reduce motion" setting.
2. **Smaller first download**: load each page only when someone opens it. The homepage stays fast, and the other pages load on demand with a light placeholder.
3. **Lighter photos**: convert the large PNG/JPG photos to compressed WebP. Use the right size for phones, and only load photos further down the page as you scroll to them.
4. **Instant first view**: show a simple cream background with your name immediately in the page itself, before the app code finishes loading. Give the hero portrait download priority.
5. **Safer offline caching**: stop clearing the cache on every visit, so photos and fonts load from memory when people come back.
6. **Check it**: test on iPhone-sized Safari and Chrome with a slow phone connection. Measure how long it takes for something to appear, before and after the fixes.

## Technical details
- `PageTransition`: drop the `initial opacity:0` on first mount, or use `initial={false}`. In HeroSection variants, remove `filter: blur` and start at opacity 1 when `useReducedMotion` is on or the screen is narrow.
- `App.tsx`: use `React.lazy` + `Suspense` for every route except Index.
- Images: run sharp once to make WebP versions in `src/assets` and `public/images`. Add `loading="lazy"` below the fold. Add a preload for the hero portrait.
- `index.html`: add inline critical CSS and a static shell inside `#root`.
- `public/sw.js`: version the cache, stop wiping it on activate, and use stale-while-revalidate for static assets.

# Improve Search Visibility for islam-mahrous.com

## What I found

Your site is hosted on **Vercel** at islam-mahrous.com. Your Google Search Console accounts already contain `islam-mahrous.com` as a **domain property — but it is not verified yet**, so Search Console shows you no data and Google has no confirmed ownership. Also:

- **A placeholder verification tag** sits in the site code (`YOUR_VERIFICATION_CODE` in `src/components/SEOHead.tsx`) — it does nothing and must be replaced with a real token.
- Sitemap, canonical links, and meta tags already correctly point to `islam-mahrous.com` — good foundation.

## Plan

### Step 1 — Verify ownership in Search Console
Two options (I'll recommend the fastest):
- **Option A (fastest):** I request a meta-tag verification token from your connected Google account, place the real tag in the site's code, and you deploy to Vercel. I then verify `https://islam-mahrous.com/` as a URL-prefix property.
- **Option B (broader coverage):** I give you a DNS TXT record to add at your domain registrar; this verifies the existing domain property (`sc-domain:islam-mahrous.com`) which also covers all subdomains and protocols.

Either way, verification unlocks your Search Console data.

### Step 2 — Submit the sitemap
- Submit `https://islam-mahrous.com/sitemap.xml` to the verified property so Google reliably discovers all pages (home, about, career, projects, awards, contact, plus blog articles as they're published).

### Step 3 — Improve rankings from real data
- Read your actual Search Console queries, clicks, impressions, and average positions.
- Tune page titles and descriptions for the searches that matter (e.g. "hospitality consultant Egypt", "hotel pre-opening expert").
- Your daily automated articles keep feeding Google fresh content — a strong long-term signal.

## What I need from you
- A Vercel deployment after I add the verification tag (Option A), **or** registrar access to add one DNS TXT record (Option B).
- Nothing else — sitemap submission and data analysis happen through your connected Google account.

## Technical details
- Verification via the Site Verification API through your connected Search Console account ("Islam's Google Search Console").
- Meta tag replaces the placeholder in `src/components/SEOHead.tsx` (and/or `index.html` for server-rendered HTML).
- Sitemap submission via the Search Console API after verification.
- No design or content changes to the site.

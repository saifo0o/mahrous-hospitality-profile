# Improve Search Visibility for islam-mahrous.com

## What I found

Your Google Search Console accounts show `islam-mahrous.com` as a **domain property that is not verified yet** — so Google has no confirmed ownership and Search Console cannot show you data for it. Two further issues:

1. **The domain is not connected to this website.** Your published site currently lives at `mahrous-hospitality-profile.lovable.app`, while your sitemap, canonical links, and meta tags all point to `islam-mahrous.com`. Google sees references to a domain that doesn't serve your site.
2. **A placeholder verification tag exists** in the site's code (`YOUR_VERIFICATION_CODE` in `src/components/SEOHead.tsx`) — it does nothing and should be removed or replaced with a real token.

## Plan

### Step 1 — Connect the domain to your site
- Link `islam-mahrous.com` as a custom domain to this project (requires you to update DNS records at your domain registrar — I'll guide you through the exact records).
- Publish so the site is live on the real domain.

### Step 2 — Verify ownership in Search Console
- Request a meta-tag verification token from your connected Google account.
- Add the real tag to the site (replacing the placeholder), publish, and verify.
- Add `https://islam-mahrous.com/` as a verified property.

### Step 3 — Submit the sitemap
- Submit `https://islam-mahrous.com/sitemap.xml` so Google discovers all pages (home, about, career, projects, awards, contact).
- Blog articles already get unique URLs (`/blog/...`) — these will be picked up as they're published.

### Step 4 — Ongoing visibility improvements (after verification)
- Read real Search Console data (queries, clicks, impressions) and tune page titles/descriptions for the searches that matter (e.g. "hospitality consultant Egypt", "hotel pre-opening expert").
- Your daily automated articles keep feeding Google fresh content — a strong long-term ranking signal.

## What I need from you
- Access to your domain registrar (where you bought islam-mahrous.com) to add DNS records — or you can add them yourself with my instructions.
- Approval to publish the site during setup.

## Technical details
- Domain connect via `domain_connect` tools; DNS records shown for your registrar.
- Verification via Site Verification API (META method) through the connected Search Console account (the connection named "Islam's Google Search Console").
- Sitemap submission via Search Console API after verification.
- No changes to page design or content.

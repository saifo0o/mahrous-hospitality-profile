// Serves a lightweight HTML page with proper Open Graph meta tags for blog posts.
// Social platforms (LinkedIn, Twitter, Facebook, WhatsApp) crawl this URL to render
// rich previews; real users get auto-redirected to the SPA blog post route.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE_URL = "https://mahrous-hospitality-profile.lovable.app";

const escapeHtml = (s: string) =>
  (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    // Path looks like /functions/v1/og-blog/<slug> OR ?slug=<slug>
    const slug =
      url.searchParams.get("slug") ||
      url.pathname.split("/").filter(Boolean).pop() ||
      "";

    if (!slug || slug === "og-blog") {
      return new Response("Missing slug", { status: 400, headers: corsHeaders });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: post } = await supabase
      .from("blog_posts")
      .select("title, excerpt, image_url, slug, published_at, created_at, tags")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (!post) {
      return new Response("Article not found", { status: 404, headers: corsHeaders });
    }

    const title = escapeHtml(post.title);
    const description = escapeHtml(post.excerpt || "");
    const image = escapeHtml(post.image_url || `${SITE_URL}/profile.jpg`);
    const articleUrl = `${SITE_URL}/blog/${post.slug}`;
    const published = post.published_at || post.created_at;
    const tags: string[] = Array.isArray(post.tags) ? post.tags : [];

    const html = `<!DOCTYPE html>
<html lang="en" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="UTF-8" />
  <title>${title} | Islam Mahrous</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${articleUrl}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${articleUrl}" />
  <meta property="og:site_name" content="Islam Mahrous" />
  <meta property="article:published_time" content="${published}" />
  <meta property="article:author" content="Islam Mahrous" />
  ${tags.map((t) => `<meta property="article:tag" content="${escapeHtml(t)}" />`).join("\n  ")}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />

  <meta http-equiv="refresh" content="0; url=${articleUrl}" />
  <script>window.location.replace(${JSON.stringify(articleUrl)});</script>
</head>
<body>
  <p>Redirecting to <a href="${articleUrl}">${title}</a>…</p>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300, s-maxage=600",
      },
    });
  } catch (err) {
    console.error("og-blog error:", err);
    return new Response("Server error", { status: 500, headers: corsHeaders });
  }
});

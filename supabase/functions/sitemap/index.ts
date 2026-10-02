import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.0';

const SITE = 'https://islam-mahrous.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const STATIC_PAGES: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/career', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/awards', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'daily', priority: '0.8' },
  { path: '/consulting', changefreq: 'monthly', priority: '0.7' },
  { path: '/book-consultation', changefreq: 'monthly', priority: '0.6' },
];

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function pageUrl(path: string): string {
  return `${SITE}${path === '/' ? '' : path}`;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    let posts: Array<{ slug: string; published_at: string | null; created_at: string; updated_at?: string | null }> = [];

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      const { data } = await supabase
        .from('blog_posts')
        .select('slug, published_at, created_at, updated_at')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(1000);
      if (data) posts = data;
    } else {
      console.warn('sitemap: missing Supabase env, serving static pages only');
    }

    const now = new Date().toISOString().split('T')[0];

    const staticUrls = STATIC_PAGES.map((p) => `  <url>
    <loc>${pageUrl(p.path)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${pageUrl(p.path)}?lang=en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${pageUrl(p.path)}?lang=ar"/>
  </url>`).join('\n');

    const postUrls = posts.map((post) => {
      const lastmod = (post.updated_at || post.published_at || post.created_at || '').split('T')[0];
      return `  <url>
    <loc>${SITE}/blog/${esc(post.slug)}</loc>
    <lastmod>${lastmod || now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/blog/${esc(post.slug)}?lang=en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE}/blog/${esc(post.slug)}?lang=ar"/>
  </url>`;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${postUrls}
</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800, s-maxage=1800',
      },
      status: 200,
    });
  } catch (error) {
    console.error('sitemap error:', error);
    return new Response('Sitemap error', { status: 500, headers: corsHeaders });
  }
});

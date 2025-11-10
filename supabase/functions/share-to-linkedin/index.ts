import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { postId } = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Fetch blog post
    const { data: post, error: postError } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", postId)
      .single();

    if (postError || !post) {
      throw new Error("Blog post not found");
    }

    // Fetch LinkedIn settings
    const { data: settings, error: settingsError } = await supabase
      .from("linkedin_settings")
      .select("*")
      .limit(1)
      .single();

    if (settingsError || !settings || !settings.auto_share_enabled || !settings.access_token) {
      console.log("LinkedIn auto-sharing not configured or disabled");
      return new Response(
        JSON.stringify({ success: false, message: "LinkedIn sharing not configured" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Check if token is expired
    if (settings.expires_at && new Date(settings.expires_at) < new Date()) {
      console.log("LinkedIn access token expired");
      return new Response(
        JSON.stringify({ success: false, message: "LinkedIn token expired" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        }
      );
    }

    const postUrl = `${Deno.env.get("SUPABASE_URL")?.replace("supabase.co", "lovableproject.com")}/blog/${post.slug}`;
    
    // Share to LinkedIn
    const linkedInResponse = await fetch("https://api.linkedin.com/v2/ugcPosts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${settings.access_token}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify({
        author: "urn:li:person:YOUR_PERSON_URN",
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: `${post.title}\n\n${post.excerpt}\n\nRead more: ${postUrl}`,
            },
            shareMediaCategory: "ARTICLE",
            media: [
              {
                status: "READY",
                originalUrl: postUrl,
              },
            ],
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      }),
    });

    if (!linkedInResponse.ok) {
      const errorText = await linkedInResponse.text();
      console.error("LinkedIn API error:", errorText);
      throw new Error(`LinkedIn API error: ${linkedInResponse.status}`);
    }

    console.log(`Successfully shared blog post "${post.title}" to LinkedIn`);

    return new Response(
      JSON.stringify({ success: true, message: "Post shared to LinkedIn" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sharing to LinkedIn:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

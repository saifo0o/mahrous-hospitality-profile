import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.76.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const HOTEL_TOPICS = [
  "Guest Satisfaction and Service Excellence",
  "Staff Training and Team Leadership",
  "Revenue Management Strategies",
  "Front Office Operations",
  "Housekeeping Standards and Efficiency",
  "Food & Beverage Management",
  "Hotel Sustainability Practices",
  "Crisis Management and Problem Solving",
  "Technology in Modern Hotels",
  "Guest Experience Innovation",
  "Pre-Opening and Renovations",
  "Luxury Hotel Standards",
  "Staff Motivation and Retention",
  "Operational Excellence",
  "Budget Management",
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!LOVABLE_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing required environment variables");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Select a random topic
    const topic = HOTEL_TOPICS[Math.floor(Math.random() * HOTEL_TOPICS.length)];
    
    console.log(`Generating article about: ${topic}`);

    // Generate article using Lovable AI
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are Islam Mahrous, a seasoned General Manager with over 30 years of experience in luxury hospitality across MENA and international markets. You specialize in pre-openings, renovations, and operational excellence. Write from your authentic perspective with real-world insights, practical advice, and professional yet relatable tone.`
          },
          {
            role: "user",
            content: `Write a comprehensive hotel management article about "${topic}" with the following requirements:

1. Create an engaging, SEO-optimized title (50-60 characters) that includes relevant keywords
2. Write a compelling meta description (150-160 characters)
3. Structure the article with:
   - Introduction (hook the reader with a real scenario)
   - 3-5 main sections with H2 headings
   - Actionable tips and practical advice in each section
   - Real-world examples from your GM experience
   - A conclusion with key takeaways
4. Word count: 700-900 words
5. Tone: Professional yet conversational, like a mentor sharing wisdom
6. Include specific, actionable advice that readers can implement
7. End with a call-to-action encouraging readers to explore more hospitality insights
8. Suggest 3-5 relevant tags for categorization

Return ONLY a valid JSON object with this structure:
{
  "title": "SEO-optimized title",
  "meta_description": "Compelling meta description",
  "excerpt": "Brief 2-3 sentence summary",
  "content": "Full article in markdown format with ## for H2 headings",
  "category": "One of: Operations, Leadership, Guest Experience, Revenue Management, or Innovation",
  "tags": ["tag1", "tag2", "tag3"]
}`
          }
        ],
        temperature: 0.8,
      }),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        throw new Error("AI rate limit exceeded. Please try again later.");
      }
      if (aiResponse.status === 402) {
        throw new Error("AI credits exhausted. Please add funds to continue.");
      }
      throw new Error(`AI generation failed: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const generatedText = aiData.choices[0].message.content;
    
    console.log("AI response received, parsing content...");

    // Parse the JSON response
    let articleData;
    try {
      // Extract JSON from potential markdown code blocks
      const jsonMatch = generatedText.match(/```json\n([\s\S]*?)\n```/) || 
                       generatedText.match(/```\n([\s\S]*?)\n```/) ||
                       [null, generatedText];
      articleData = JSON.parse(jsonMatch[1] || generatedText);
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      throw new Error("Failed to parse article content");
    }

    // Generate slug from title
    const slug = articleData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Insert article into database
    const { data: newArticle, error: insertError } = await supabase
      .from('blog_posts')
      .insert({
        title: articleData.title,
        slug: slug,
        excerpt: articleData.excerpt,
        content: articleData.content,
        category: articleData.category,
        tags: articleData.tags,
        published: true,
        published_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw new Error(`Failed to save article: ${insertError.message}`);
    }

    console.log("Article published successfully:", newArticle.id);

    return new Response(
      JSON.stringify({
        success: true,
        article: {
          id: newArticle.id,
          title: newArticle.title,
          slug: newArticle.slug,
          published_at: newArticle.published_at,
        },
        message: "Daily article generated and published successfully",
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error("Error in generate-daily-article:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

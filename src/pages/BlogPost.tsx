import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, Clock, Eye, Tag, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { toast } from 'sonner';

import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  category?: string;
  tags?: string[];
  published: boolean;
  published_at?: string;
  created_at: string;
  views_count?: number;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data as BlogPost);
        await supabase
          .from('blog_posts')
          .update({ views_count: (data.views_count || 0) + 1 })
          .eq('id', data.id);
      }
      setLoading(false);
    })();
  }, [slug]);

  // Build a share URL that crawlers (LinkedIn etc.) can read OG tags from.
  const canonicalUrl = `${window.location.origin}/blog/${slug}`;
  const ogShareUrl = `${SUPABASE_URL}/functions/v1/og-blog/${slug}`;

  const readingTime = post
    ? Math.max(1, Math.ceil((post.content?.split(/\s+/).length || 0) / 200))
    : 1;

  const socialLinks = post
    ? [
        {
          name: 'LinkedIn',
          icon: Linkedin,
          url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(ogShareUrl)}`,
          color: 'hover:bg-[#0A66C2] hover:text-white',
        },
        {
          name: 'Twitter',
          icon: Twitter,
          url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(ogShareUrl)}`,
          color: 'hover:bg-[#1DA1F2] hover:text-white',
        },
        {
          name: 'Facebook',
          icon: Facebook,
          url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ogShareUrl)}`,
          color: 'hover:bg-[#1877F2] hover:text-white',
        },
      ]
    : [];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      toast.success(language.code === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!');
    } catch {
      toast.error('Failed to copy link');
    }
  };

  if (loading) {
    return (
      <PageTransition>
        <Navbar />
        <div className="min-h-screen pt-32 flex items-center justify-center text-muted-foreground">
          {language.code === 'ar' ? 'جاري التحميل...' : 'Loading article...'}
        </div>
        <Footer />
      </PageTransition>
    );
  }

  if (notFound || !post) {
    return (
      <PageTransition>
        <Navbar />
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language.code === 'ar' ? 'المقال غير موجود' : 'Article not found'}
          </h1>
          <Button onClick={() => navigate('/blog')} variant="outline">
            <ArrowLeft className={`w-4 h-4 ${language.code === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {language.code === 'ar' ? 'العودة للمدونة' : 'Back to blog'}
          </Button>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <EnhancedSEOHead
        title={post.title}
        description={post.excerpt}
        image={post.image_url}
        type="article"
        publishedTime={post.published_at || post.created_at}
        tags={post.tags || []}
      />
      <Navbar />
      <article className={`min-h-screen bg-background pt-28 pb-20 ${language.code === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-4">
              <BreadcrumbNav items={[
                { label: language.code === 'ar' ? 'المدونة' : 'Blog', href: '/blog' },
                { label: post.title, active: true },
              ]} />
            </div>

            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className={`w-4 h-4 ${language.code === 'ar' ? 'rotate-180' : ''}`} />
              {language.code === 'ar' ? 'كل المقالات' : 'All articles'}
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.category && <Badge variant="secondary" className="rounded-sm">{post.category}</Badge>}
              {post.tags?.slice(0, 3).map((t) => (
                <Badge key={t} variant="outline" className="rounded-sm text-xs">
                  <Tag className="w-3 h-3 me-1" />{t}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-normal font-playfair text-foreground leading-tight mb-5">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border/60">
              <span className="font-medium text-foreground">{language.code === 'ar' ? 'بواسطة إسلام محروس' : 'By Islam Mahrous'}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{format(new Date(post.published_at || post.created_at), 'MMMM dd, yyyy')}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{readingTime} min read</span>
              {post.views_count && post.views_count > 0 && (
                <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" />{post.views_count}</span>
              )}
            </div>

            {post.image_url && (
              <div className="my-8 rounded-sm overflow-hidden border border-border">
                <img src={post.image_url} alt={post.title} className="w-full h-auto object-cover" />
              </div>
            )}

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-playfair prose-a:text-primary">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border/60">
              <p className="text-sm font-semibold text-foreground mb-3">
                {language.code === 'ar' ? 'شارك هذا المقال' : 'Share this article'}
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${s.name}`}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-sm border border-border text-muted-foreground transition-colors ${s.color}`}
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-sm border border-border text-muted-foreground hover:bg-muted transition-colors"
                >
                  <Link2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </PageTransition>
  );
};

export default BlogPostPage;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, TrendingUp, Eye, Search, Clock, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Input } from '@/components/ui/input';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';
import { BlogCover } from '@/components/ui/blog-covers';

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
  author_id?: string;
}

const getReadingTime = (content: string | null | undefined): number => {
  if (!content) return 1;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

const Blog = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => { fetchBlogPosts(); }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase.from('blog_posts').select('*').eq('published', true).order('published_at', { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostClick = (post: BlogPost) => {
    navigate(`/blog/${post.slug}`);
  };

  const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)));
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <PageTransition>
      <div className={`min-h-screen flex flex-col bg-background ${language.code === 'ar' ? 'text-right' : 'text-left'}`}>
      <EnhancedSEOHead
        title={language.code === 'ar' ? 'المدونة' : 'Blog - Hotel Management Insights'}
        description={language.code === 'ar' ? 'رؤى يومية في إدارة الضيافة' : "Insights from 30+ years in luxury hospitality"}
        tags={['hospitality blog', 'hotel management']}
        type="website"
      />
      <Navbar />
      <div className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-6">
            <BreadcrumbNav items={[{ label: language.code === 'ar' ? 'المدونة' : 'Blog', active: true }]} />
          </div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
            <div className="section-eyebrow">
              <TrendingUp size={12} />
              {language.code === 'ar' ? 'رؤى يومية' : 'Daily Insights'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-playfair text-foreground mb-5 leading-[1.1]">
              {language.code === 'ar' ? 'المدونة' : 'The Blog'}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {language.code === 'ar'
                ? 'نصائح عملية ورؤى من خبرة تمتد لأكثر من 30 عامًا في الضيافة العالمية.'
                : "Practical tips and real-world insights from 30+ years in global hospitality."}
            </p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 space-y-4">
            <div className="relative max-w-xl">
              <Search className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 ${language.code === 'ar' ? 'right-3' : 'left-3'}`} />
              <Input
                placeholder={language.code === 'ar' ? 'ابحث عن المقالات...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`h-12 rounded-sm border-border focus:border-accent focus:ring-accent/20 ${language.code === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant={!selectedCategory ? "default" : "outline"} className="cursor-pointer rounded-sm" onClick={() => setSelectedCategory(null)}>
                {language.code === 'ar' ? 'الكل' : 'All'}
              </Badge>
              {categories.map(cat => (
                <Badge key={cat} variant={selectedCategory === cat ? "default" : "outline"} className="cursor-pointer rounded-sm" onClick={() => setSelectedCategory(cat || null)}>
                  {cat}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Loading */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-sm border border-border/50 overflow-hidden">
                  <div className="skeleton-shimmer h-48 w-full" />
                  <div className="p-5 space-y-3">
                    <div className="skeleton-shimmer h-3 w-20" />
                    <div className="skeleton-shimmer h-5 w-full" />
                    <div className="skeleton-shimmer h-4 w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-14 h-14 rounded-sm bg-muted flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-foreground font-medium mb-1">
                {language.code === 'ar' ? 'لا توجد مقالات' : 'No articles found'}
              </p>
              <p className="text-sm text-muted-foreground">
                {language.code === 'ar' ? 'جرّب تغيير كلمات البحث أو التصنيف.' : 'Try a different search term or category.'}
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => handlePostClick(featuredPost)}
                  className="mb-10 bg-card rounded-sm border border-border/50 overflow-hidden cursor-pointer hover:border-accent/40 transition-colors duration-300 group"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-full overflow-hidden">
                      <BlogCover title={featuredPost.title} category={featuredPost.category || undefined} imageUrl={featuredPost.image_url} className="w-full h-full" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <Badge variant="secondary" className="w-fit mb-4 rounded-sm text-xs">
                        {language.code === 'ar' ? 'مقال مميز' : 'Featured'}
                      </Badge>
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {featuredPost.category && <Badge variant="outline" className="text-xs rounded-sm">{featuredPost.category}</Badge>}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-normal font-playfair text-foreground mb-3 group-hover:text-accent-foreground transition-colors line-clamp-2">{featuredPost.title}</h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{format(new Date(featuredPost.published_at || featuredPost.created_at), 'MMM dd, yyyy')}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{getReadingTime(featuredPost.content)} min read</span>
                        {featuredPost.views_count && featuredPost.views_count > 0 && <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{featuredPost.views_count}</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Remaining Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => handlePostClick(post)}
                    className="bg-card rounded-sm border border-border/50 overflow-hidden cursor-pointer hover:border-accent/40 transition-colors duration-300 group flex flex-col"
                  >
                    <div className="h-48 overflow-hidden">
                      <BlogCover title={post.title} category={post.category || undefined} imageUrl={post.image_url} className="w-full h-full" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.category && <Badge variant="secondary" className="text-xs rounded-sm">{post.category}</Badge>}
                        {post.tags?.slice(0, 1).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs rounded-sm"><Tag className="w-3 h-3 me-1" />{tag}</Badge>
                        ))}
                      </div>
                      <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-accent-foreground transition-colors">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 mt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{format(new Date(post.published_at || post.created_at), 'MMM dd, yyyy')}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{getReadingTime(post.content)} min</span>
                          {post.views_count && post.views_count > 0 && <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{post.views_count}</span>}
                        </div>
                        <span className="text-accent-foreground font-medium">{language.code === 'ar' ? 'اقرأ ←' : 'Read →'}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Blog;

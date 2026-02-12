
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, TrendingUp, Eye, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import BlogPostModal from '@/components/BlogPostModal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import EnhancedSEOHead from '@/components/EnhancedSEOHead';

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

const Blog = () => {
  const { language } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handlePostClick = async (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    await supabase.from('blog_posts').update({ views_count: (post.views_count || 0) + 1 }).eq('id', post.id);
  };

  const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)));
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <EnhancedSEOHead
        title={language.code === 'ar' ? 'المدونة' : 'Blog - Hotel Management Insights'}
        description={language.code === 'ar' ? 'رؤى يومية في إدارة الضيافة' : "Insights from 30+ years in luxury hospitality"}
        tags={['hospitality blog', 'hotel management']}
        type="website"
      />
      <Navbar />
      <div className="min-h-screen bg-background pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground mb-4">
              <TrendingUp size={14} />
              {language.code === 'ar' ? 'رؤى يومية' : 'Daily Insights'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
              {language.code === 'ar' ? 'المدونة' : 'Blog'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language.code === 'ar'
                ? 'نصائح عملية ورؤى من خبرة تمتد لأكثر من 30 عامًا.'
                : "Practical tips and real-world insights from 30+ years in hospitality."}
            </p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 space-y-4">
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={language.code === 'ar' ? 'ابحث...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant={!selectedCategory ? "default" : "outline"} className="cursor-pointer rounded-full" onClick={() => setSelectedCategory(null)}>
                {language.code === 'ar' ? 'الكل' : 'All'}
              </Badge>
              {categories.map(cat => (
                <Badge key={cat} variant={selectedCategory === cat ? "default" : "outline"} className="cursor-pointer rounded-full" onClick={() => setSelectedCategory(cat || null)}>
                  {cat}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Loading */}
          {loading ? (
            <div className="text-center py-20 text-muted-foreground">{language.code === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">{language.code === 'ar' ? 'لا توجد مقالات' : 'No articles found'}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handlePostClick(post)}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  {post.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img src={post.image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {post.category && <Badge variant="secondary" className="text-xs rounded-full">{post.category}</Badge>}
                      {post.tags?.slice(0, 1).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs rounded-full"><Tag className="w-3 h-3 mr-1" />{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-accent-foreground transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 mt-4 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{format(new Date(post.published_at || post.created_at), 'MMM dd, yyyy')}</span>
                        {post.views_count && post.views_count > 0 && <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{post.views_count}</span>}
                      </div>
                      <span className="text-accent-foreground font-medium">{language.code === 'ar' ? 'اقرأ ←' : 'Read →'}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <BlogPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} post={selectedPost} />
      </div>
      <Footer />
    </>
  );
};

export default Blog;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, TrendingUp, Eye, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogPostModal from './BlogPostModal';

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

const BlogSection = () => {
  const { language } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const getReadingTime = (content: string | null) => {
    if (!content) return 1;
    return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
  };

  const handlePostClick = async (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    
    await supabase
      .from('blog_posts')
      .update({ views_count: (post.views_count || 0) + 1 })
      .eq('id', post.id);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            {language.code === 'ar' ? 'جاري التحميل...' : 'Loading...'}
          </p>
        </div>
      </section>
    );
  }

  if (!posts.length) {
    return null;
  }

  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            {language.code === 'ar' ? 'رؤى يومية' : 'Daily Insights'}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {language.code === 'ar' ? 'رؤى إدارة الضيافة' : 'Hotel Management Insights'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language.code === 'ar'
              ? 'مقالات يومية من منظور مدير عام متمرس'
              : "Daily articles from a seasoned General Manager's perspective"}
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card 
              className="cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden group border-2 hover:border-accent/30"
              onClick={() => handlePostClick(featuredPost)}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {featuredPost.image_url && (
                  <div className="h-64 md:h-full overflow-hidden relative">
                    <img
                      src={featuredPost.image_url}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
                      {language.code === 'ar' ? 'مقال مميز' : 'Featured'}
                    </Badge>
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    {featuredPost.category && (
                      <Badge variant="secondary" className="text-xs font-semibold">{featuredPost.category}</Badge>
                    )}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{getReadingTime(featuredPost.content)} min read</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(featuredPost.published_at || featuredPost.created_at), 'MMM dd, yyyy')}</span>
                    </div>
                    {featuredPost.views_count && featuredPost.views_count > 0 && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views_count}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Posts Grid */}
        {otherPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/30 h-full flex flex-col"
                  onClick={() => handlePostClick(post)}
                >
                  <CardHeader className="relative pb-0 flex-shrink-0">
                    {post.image_url && (
                      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {post.category && (
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {post.category}
                        </Badge>
                      )}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{getReadingTime(post.content)} min</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="line-clamp-3 mb-4 text-base flex-grow">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(post.published_at || post.created_at), 'MMM dd, yyyy')}</span>
                        </div>
                        {post.views_count && post.views_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views_count}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-primary font-medium">
                        {language.code === 'ar' ? 'اقرأ المزيد ←' : 'Read more →'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/blog">
            <Button variant="outline" className="rounded-xl gap-2 px-8 py-5 text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              {language.code === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
              <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>

      <BlogPostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        post={selectedPost}
      />
    </section>
  );
};

export default BlogSection;

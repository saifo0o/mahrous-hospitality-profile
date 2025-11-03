import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

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
    
    // Increment view count
    await supabase
      .from('blog_posts')
      .update({ views_count: (post.views_count || 0) + 1 })
      .eq('id', post.id);
  };

  const categories = Array.from(new Set(posts.map(p => p.category).filter(Boolean)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              {language.code === 'ar' ? 'جاري التحميل...' : 'Loading...'}
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <EnhancedSEOHead
        title={language.code === 'ar' ? 'المدونة - رؤى إدارة الضيافة' : 'Blog - Hotel Management Insights'}
        description={language.code === 'ar'
          ? 'مقالات يومية من منظور مدير عام متمرس - نصائح عملية ورؤى واقعية من خبرة تمتد لأكثر من 30 عاماً في الضيافة الفاخرة'
          : "Daily articles from a seasoned General Manager's perspective - practical tips and real-world insights from 30+ years in luxury hospitality"}
        tags={['hospitality blog', 'hotel management', 'GM insights', 'hospitality tips']}
        type="website"
      />
      <Navbar />
      <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="w-3 h-3 mr-1" />
              {language.code === 'ar' ? 'رؤى يومية' : 'Daily Insights'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
              {language.code === 'ar' ? 'رؤى إدارة الضيافة' : 'Hotel Management Insights'}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {language.code === 'ar'
                ? 'مقالات يومية من منظور مدير عام متمرس - نصائح عملية ورؤى واقعية من خبرة تمتد لأكثر من 30 عاماً في الضيافة الفاخرة'
                : "Daily articles from a seasoned General Manager's perspective - practical tips and real-world insights from 30+ years in luxury hospitality"}
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder={language.code === 'ar' ? 'ابحث في المقالات...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card border-2"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(null)}
              >
                {language.code === 'ar' ? 'الكل' : 'All'}
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedCategory(category || null)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                {language.code === 'ar' ? 'لم يتم العثور على مقالات' : 'No articles found'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                        {post.tags && post.tags.slice(0, 2).map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
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
        </div>

        <BlogPostModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          post={selectedPost}
        />
      </div>
      <Footer />
    </>
  );
};

export default Blog;

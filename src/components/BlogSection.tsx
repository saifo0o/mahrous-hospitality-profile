import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogPostModal from './BlogPostModal';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured: boolean;
  author: string;
  tags: string[];
}

const BlogSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: language.code === 'ar' 
        ? "مستقبل الضيافة الفاخرة في منطقة الشرق الأوسط" 
        : "The Future of Luxury Hospitality in the Middle East",
      excerpt: language.code === 'ar'
        ? "استكشاف الاتجاهات الناشئة والتقنيات المبتكرة التي تشكل مستقبل صناعة الضيافة الفاخرة في المنطقة."
        : "Exploring emerging trends and innovative technologies shaping the future of luxury hospitality in the region.",
      content: language.code === 'ar'
        ? `<p>تشهد صناعة الضيافة الفاخرة في منطقة الشرق الأوسط تحولاً جذرياً مع دخول تقنيات جديدة وتغير توقعات الضيوف.</p>
           <h3>الاتجاهات الرئيسية</h3>
           <p>من أبرز الاتجاهات التي نشهدها اليوم:</p>
           <ul>
           <li>الذكاء الاصطناعي في تخصيص تجربة الضيوف</li>
           <li>الاستدامة كعامل أساسي في التصميم والتشغيل</li>
           <li>التكنولوجيا اللاتلامسية في جميع نقاط التفاعل</li>
           </ul>
           <p>هذه التطورات تتطلب من قادة الصناعة إعادة التفكير في استراتيجياتهم وطرق تقديم الخدمات.</p>`
        : `<p>The luxury hospitality industry in the Middle East is undergoing a radical transformation with new technologies and changing guest expectations.</p>
           <h3>Key Trends</h3>
           <p>Some of the most prominent trends we're seeing include:</p>
           <ul>
           <li>AI-powered guest experience personalization</li>
           <li>Sustainability as a core design and operational factor</li>
           <li>Contactless technology across all touchpoints</li>
           </ul>
           <p>These developments require industry leaders to rethink their strategies and service delivery methods.</p>`,
      publishDate: "2024-11-15",
      readTime: language.code === 'ar' ? "5 دقائق" : "5 min read",
      category: language.code === 'ar' ? "استراتيجية" : "Strategy",
      featured: true,
      author: "Islam Mahrous",
      tags: ['hospitality', 'technology', 'MENA', 'luxury']
    },
    {
      id: '2',
      title: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح: دليل شامل"
        : "Pre-Opening Operations Management: A Comprehensive Guide",
      excerpt: language.code === 'ar'
        ? "أفضل الممارسات والاستراتيجيات المثبتة لضمان افتتاح ناجح للفنادق والمنتجعات."
        : "Best practices and proven strategies for ensuring successful hotel and resort openings.",
      content: language.code === 'ar'
        ? `<p>إدارة عمليات ما قبل الافتتاح هي واحدة من أكثر المراحل تعقيداً وأهمية في صناعة الضيافة.</p>
           <h3>المراحل الأساسية</h3>
           <p>تشمل المراحل الأساسية لعمليات ما قبل الافتتاح:</p>
           <ol>
           <li>التخطيط الاستراتيجي وتحديد الأهداف</li>
           <li>تجنيد وتدريب الفريق</li>
           <li>وضع الأنظمة والإجراءات</li>
           <li>التسويق والحجوزات</li>
           </ol>
           <p>النجاح في هذه المرحلة يحدد مسار الفندق لسنوات قادمة.</p>`
        : `<p>Pre-opening operations management is one of the most complex and critical phases in the hospitality industry.</p>
           <h3>Key Phases</h3>
           <p>The essential phases of pre-opening operations include:</p>
           <ol>
           <li>Strategic planning and goal setting</li>
           <li>Team recruitment and training</li>
           <li>Systems and procedures implementation</li>
           <li>Marketing and reservations</li>
           </ol>
           <p>Success in this phase determines the hotel's trajectory for years to come.</p>`,
      publishDate: "2024-10-28",
      readTime: language.code === 'ar' ? "8 دقائق" : "8 min read",
      category: language.code === 'ar' ? "العمليات" : "Operations",
      featured: false,
      author: "Islam Mahrous",
      tags: ['pre-opening', 'operations', 'management', 'hotels']
    },
    {
      id: '3',
      title: language.code === 'ar'
        ? "تحويل تجربة الضيوف من خلال التكنولوجيا"
        : "Transforming Guest Experience Through Technology",
      excerpt: language.code === 'ar'
        ? "كيف تعيد التقنيات الحديثة تشكيل تفاعل الضيوف وتوقعاتهم في صناعة الضيافة."
        : "How modern technologies are reshaping guest interactions and expectations in hospitality.",
      content: language.code === 'ar'
        ? `<p>التكنولوجيا تعيد تعريف تجربة الضيوف في الفنادق الحديثة بطرق لم نتخيلها من قبل.</p>
           <h3>التقنيات المؤثرة</h3>
           <p>أهم التقنيات التي تؤثر على تجربة الضيوف:</p>
           <ul>
           <li>تطبيقات الهاتف المحمول للخدمات الفندقية</li>
           <li>أنظمة إدارة المباني الذكية</li>
           <li>خدمات الذكاء الاصطناعي والمساعدات الافتراضية</li>
           </ul>
           <p>المفتاح هو التوازن بين التكنولوجيا واللمسة الإنسانية.</p>`
        : `<p>Technology is redefining guest experiences in modern hotels in ways we never imagined before.</p>
           <h3>Impactful Technologies</h3>
           <p>Key technologies affecting guest experience:</p>
           <ul>
           <li>Mobile apps for hotel services</li>
           <li>Smart building management systems</li>
           <li>AI services and virtual assistants</li>
           </ul>
           <p>The key is balancing technology with the human touch.</p>`,
      publishDate: "2024-10-10",
      readTime: language.code === 'ar' ? "6 دقائق" : "6 min read",
      category: language.code === 'ar' ? "التكنولوجيا" : "Technology",
      featured: false,
      author: "Islam Mahrous",
      tags: ['technology', 'guest experience', 'innovation', 'digital transformation']
    }
  ];

  const categories = [
    { value: 'all', label: language.code === 'ar' ? "الكل" : "All" },
    { value: language.code === 'ar' ? "استراتيجية" : "Strategy", label: language.code === 'ar' ? "استراتيجية" : "Strategy" },
    { value: language.code === 'ar' ? "العمليات" : "Operations", label: language.code === 'ar' ? "العمليات" : "Operations" },
    { value: language.code === 'ar' ? "التكنولوجيا" : "Technology", label: language.code === 'ar' ? "التكنولوجيا" : "Technology" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading inline-block">
            {language.code === 'ar' ? "الرؤى والخبرات" : "Insights & Expertise"}
          </h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            {language.code === 'ar'
              ? "أحدث الأفكار والاتجاهات في صناعة الضيافة من خلال أكثر من 30 عاماً من الخبرة القيادية"
              : "Latest thoughts and trends in hospitality from over 30 years of leadership experience"
            }
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div 
          className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder={language.code === 'ar' ? "ابحث في المقالات..." : "Search articles..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card 
                className={`h-full hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                  post.featured ? 'ring-2 ring-luxury-gold' : ''
                }`}
                onClick={() => handlePostClick(post)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {post.featured && (
                    <div className="flex items-center mb-3">
                      <TrendingUp className="h-4 w-4 text-luxury-gold mr-2" />
                      <span className="text-luxury-gold text-sm font-medium">
                        {language.code === 'ar' ? "مميز" : "Featured"}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-luxury-navy text-white px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString(language.code === 'ar' ? 'ar-EG' : 'en-US')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-luxury-navy dark:text-white mb-3 group-hover:text-luxury-gold transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className={`flex items-center text-luxury-gold hover:text-luxury-navy transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="font-medium">
                      {language.code === 'ar' ? "اقرأ المزيد" : "Read More"}
                    </span>
                    <ArrowRight className={`h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">
              {language.code === 'ar' ? "لم يتم العثور على مقالات" : "No articles found"}
            </p>
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button className="bg-luxury-navy hover:bg-blue-900">
            {language.code === 'ar' ? "عرض جميع المقالات" : "View All Articles"}
          </Button>
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


import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured: boolean;
}

const BlogSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: language.code === 'ar' 
        ? "مستقبل الضيافة الفاخرة في منطقة الشرق الأوسط" 
        : "The Future of Luxury Hospitality in the Middle East",
      excerpt: language.code === 'ar'
        ? "استكشاف الاتجاهات الناشئة والتقنيات المبتكرة التي تشكل مستقبل صناعة الضيافة الفاخرة في المنطقة."
        : "Exploring emerging trends and innovative technologies shaping the future of luxury hospitality in the region.",
      publishDate: "2024-11-15",
      readTime: language.code === 'ar' ? "5 دقائق" : "5 min read",
      category: language.code === 'ar' ? "استراتيجية" : "Strategy",
      featured: true
    },
    {
      id: '2',
      title: language.code === 'ar'
        ? "إدارة عمليات ما قبل الافتتاح: دليل شامل"
        : "Pre-Opening Operations Management: A Comprehensive Guide",
      excerpt: language.code === 'ar'
        ? "أفضل الممارسات والاستراتيجيات المثبتة لضمان افتتاح ناجح للفنادق والمنتجعات."
        : "Best practices and proven strategies for ensuring successful hotel and resort openings.",
      publishDate: "2024-10-28",
      readTime: language.code === 'ar' ? "8 دقائق" : "8 min read",
      category: language.code === 'ar' ? "العمليات" : "Operations",
      featured: false
    },
    {
      id: '3',
      title: language.code === 'ar'
        ? "تحويل تجربة الضيوف من خلال التكنولوجيا"
        : "Transforming Guest Experience Through Technology",
      excerpt: language.code === 'ar'
        ? "كيف تعيد التقنيات الحديثة تشكيل تفاعل الضيوف وتوقعاتهم في صناعة الضيافة."
        : "How modern technologies are reshaping guest interactions and expectations in hospitality.",
      publishDate: "2024-10-10",
      readTime: language.code === 'ar' ? "6 دقائق" : "6 min read",
      category: language.code === 'ar' ? "التكنولوجيا" : "Technology",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className={`h-full hover:shadow-lg transition-all duration-300 cursor-pointer group ${post.featured ? 'ring-2 ring-luxury-gold' : ''}`}>
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
    </section>
  );
};

export default BlogSection;

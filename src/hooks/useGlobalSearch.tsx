
import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'blog' | 'project' | 'testimonial' | 'speaking' | 'award';
  url: string;
  category?: string;
  date?: string;
  relevanceScore: number;
}

export const useGlobalSearch = () => {
  const [query, setQuery] = useState('');
  const { language } = useLanguage();

  // Mock data - in a real app, this would come from your CMS/database
  const allContent = useMemo(() => {
    const blogPosts = [
      {
        id: 'blog-1',
        title: language.code === 'ar' 
          ? "مستقبل الضيافة الفاخرة في منطقة الشرق الأوسط" 
          : "The Future of Luxury Hospitality in the Middle East",
        excerpt: language.code === 'ar'
          ? "استكشاف الاتجاهات الناشئة والتقنيات المبتكرة التي تشكل مستقبل صناعة الضيافة الفاخرة في المنطقة."
          : "Exploring emerging trends and innovative technologies shaping the future of luxury hospitality in the region.",
        type: 'blog' as const,
        url: '/blog/future-luxury-hospitality',
        category: language.code === 'ar' ? "استراتيجية" : "Strategy",
        date: "2024-11-15"
      },
      {
        id: 'blog-2',
        title: language.code === 'ar'
          ? "إدارة عمليات ما قبل الافتتاح: دليل شامل"
          : "Pre-Opening Operations Management: A Comprehensive Guide",
        excerpt: language.code === 'ar'
          ? "أفضل الممارسات والاستراتيجيات المثبتة لضمان افتتاح ناجح للفنادق والمنتجعات."
          : "Best practices and proven strategies for ensuring successful hotel and resort openings.",
        type: 'blog' as const,
        url: '/blog/pre-opening-operations',
        category: language.code === 'ar' ? "العمليات" : "Operations",
        date: "2024-10-28"
      }
    ];

    const projects = [
      {
        id: 'project-1',
        title: language.code === 'ar' 
          ? "تجديد شامل لفندق شيراتون المنتزه الإسكندرية" 
          : "Sheraton Montazah Alexandria Complete Renovation",
        excerpt: language.code === 'ar'
          ? "تحويل عقار عمره 40 عامًا يضم 288 غرفة مع الحفاظ على العمليات الجزئية والتعامل مع البنية التحتية القديمة."
          : "Transforming a 40-year-old property with 288 rooms while maintaining partial operations and dealing with aging infrastructure.",
        type: 'project' as const,
        url: '/projects/sheraton-alexandria',
        category: language.code === 'ar' ? "تجديد رئيسي" : "Major Renovation",
        date: "2018-2020"
      }
    ];

    const speakingTopics = [
      {
        id: 'speaking-1',
        title: language.code === 'ar'
          ? "استراتيجيات ما قبل الافتتاح للفنادق الفاخرة"
          : "Pre-Opening Strategies for Luxury Hotels",
        excerpt: language.code === 'ar'
          ? "دليل شامل لضمان الإطلاق الناجح من التخطيط إلى العمليات"
          : "Comprehensive guide to ensuring successful launches from planning to operations",
        type: 'speaking' as const,
        url: '/speaking/pre-opening-strategies',
        category: language.code === 'ar' ? "استراتيجية" : "Strategy"
      }
    ];

    return [...blogPosts, ...projects, ...speakingTopics];
  }, [language]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    
    return allContent
      .map(item => {
        let relevanceScore = 0;
        
        // Title match (highest weight)
        if (item.title.toLowerCase().includes(searchTerm)) {
          relevanceScore += 10;
        }
        
        // Excerpt match
        if (item.excerpt.toLowerCase().includes(searchTerm)) {
          relevanceScore += 5;
        }
        
        // Category match
        if (item.category?.toLowerCase().includes(searchTerm)) {
          relevanceScore += 3;
        }
        
        // Type match
        if (item.type.includes(searchTerm)) {
          relevanceScore += 2;
        }

        return { ...item, relevanceScore };
      })
      .filter(item => item.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 10); // Limit to top 10 results
  }, [query, allContent]);

  return {
    query,
    setQuery,
    results: searchResults,
    isSearching: query.length > 0,
    hasResults: searchResults.length > 0
  };
};

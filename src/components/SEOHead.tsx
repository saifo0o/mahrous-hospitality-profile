
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  schema?: Record<string, any>[];
  canonical?: string;
}

// Base URL for the site
const BASE_URL = 'https://islam-mahrous.com';
const DEFAULT_IMAGE = `${BASE_URL}/profile.jpg`;

const SEOHead: React.FC<SEOProps> = ({ 
  title,
  description,
  image = DEFAULT_IMAGE,
  schema = [],
  canonical,
}) => {
  const location = useLocation();
  const { language } = useLanguage();
  const currentPath = location.pathname;
  
  // Default metadata based on the current path
  const getDefaultMetadata = () => {
    const defaults: Record<string, { title: string, description: string }> = {
      '/': {
        title: language.code === 'en' 
          ? 'Islam Mahrous | Global Hospitality Executive' 
          : 'إسلام محروس | مدير تنفيذي عالمي في الضيافة',
        description: language.code === 'en'
          ? 'Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence across MENA and international markets.' 
          : 'مدير تنفيذي في مجال الضيافة مع أكثر من 30 عاماً من الخبرة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي في أسواق الشرق الأوسط وشمال إفريقيا والأسواق الدولية.'
      },
      '/about': {
        title: language.code === 'en' 
          ? 'About Islam Mahrous | Hospitality Leadership Journey'
          : 'نبذة عن إسلام محروس | رحلة قيادة في مجال الضيافة',
        description: language.code === 'en'
          ? 'Learn about Islam Mahrous\'s extensive hospitality career, expertise in hotel operations, and leadership philosophy developed over 30+ years in the industry.'
          : 'تعرف على المسيرة المهنية الواسعة لإسلام محروس في مجال الضيافة، وخبرته في إدارة الفنادق، وفلسفته في القيادة التي تطورت على مدار أكثر من 30 عامًا في الصناعة.'
      },
      '/career': {
        title: language.code === 'en'
          ? 'Career Journey | Islam Mahrous Hospitality Executive'
          : 'المسار المهني | إسلام محروس مدير تنفيذي في الضيافة',
        description: language.code === 'en'
          ? 'Explore Islam Mahrous\'s progression from hotel management to executive leadership roles across global luxury hospitality brands and markets.'
          : 'استكشف تطور إسلام محروس من إدارة الفنادق إلى أدوار القيادة التنفيذية عبر العلامات التجارية العالمية الفاخرة وأسواق الضيافة.'
      },
      '/projects': {
        title: language.code === 'en'
          ? 'Projects & Case Studies | Islam Mahrous Portfolio'
          : 'المشاريع ودراسات الحالة | محفظة إسلام محروس',
        description: language.code === 'en'
          ? 'View signature hospitality projects, hotel openings, renovations, and turnarounds led by Islam Mahrous throughout his executive career.'
          : 'تصفح مشاريع الضيافة المميزة، وافتتاحات الفنادق، والتجديدات، وعمليات التحول التي قادها إسلام محروس خلال مسيرته التنفيذية.'
      },
      '/awards': {
        title: language.code === 'en'
          ? 'Awards & Recognition | Islam Mahrous Achievements'
          : 'الجوائز والتكريم | إنجازات إسلام محروس',
        description: language.code === 'en'
          ? 'Discover the awards, honors, and industry recognition received by Islam Mahrous throughout his distinguished hospitality career.'
          : 'اكتشف الجوائز والأوسمة والتكريم الصناعي الذي حصل عليه إسلام محروس خلال مسيرته المهنية المتميزة في الضيافة.'
      },
      '/contact': {
        title: language.code === 'en'
          ? 'Contact Islam Mahrous | Hospitality Consultation'
          : 'تواصل مع إسلام محروس | استشارات الضيافة',
        description: language.code === 'en'
          ? 'Connect with Islam Mahrous for hospitality consulting, speaking engagements, or executive leadership opportunities in the hotel industry.'
          : 'تواصل مع إسلام محروس للحصول على استشارات الضيافة أو المشاركة في الخطابات أو فرص القيادة التنفيذية في صناعة الفنادق.'
      }
    };
    
    return defaults[currentPath as keyof typeof defaults] || defaults['/'];
  };
  
  const defaultData = getDefaultMetadata();
  const pageTitle = title || defaultData.title;
  const pageDescription = description || defaultData.description;
  const pageUrl = `${BASE_URL}${currentPath}`;
  const pageCanonical = canonical || pageUrl;
  
  // Construct person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Islam Mahrous",
    "url": BASE_URL,
    "image": DEFAULT_IMAGE,
    "sameAs": [
      "https://www.linkedin.com/in/islammahrous/"
    ],
    "jobTitle": "Hospitality Executive",
    "worksFor": {
      "@type": "Organization",
      "name": "Islam Mahrous Hospitality Consulting"
    },
    "description": "Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence."
  };
  
  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": BASE_URL,
    "name": "Islam Mahrous | Global Hospitality Executive",
    "description": "Official website of Islam Mahrous, a global hospitality executive with over 30 years of experience.",
    "inLanguage": language.code === 'en' ? 'en-US' : 'ar-EG'
  };
  
  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE_URL
      }
    ]
  };
  
  // Add current page to breadcrumb if not on homepage
  if (currentPath !== '/') {
    const pathSegments = currentPath.split('/').filter(Boolean);
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1),
      "item": `${BASE_URL}/${pathSegments[0]}`
    });
  }
  
  // Combine all schema data
  const allSchema = [
    personSchema,
    websiteSchema,
    breadcrumbSchema,
    ...schema
  ];
  
  // Alternate language links
  const alternateLinks = [
    { hrefLang: 'en', href: `${BASE_URL}${currentPath}?lang=en` },
    { hrefLang: 'ar', href: `${BASE_URL}${currentPath}?lang=ar` },
    { hrefLang: 'x-default', href: `${BASE_URL}${currentPath}` }
  ];
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Language Alternates */}
      {alternateLinks.map((link, index) => (
        <link key={index} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Islam Mahrous" />
      <meta property="og:locale" content={language.code === 'en' ? 'en_US' : 'ar_EG'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Google Search Console Verification (Replace with your actual verification code) */}
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      
      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(allSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

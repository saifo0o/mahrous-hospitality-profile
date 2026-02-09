
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  schema?: Record<string, any>[];
}

const BASE_URL = 'https://islam-mahrous.com';
const DEFAULT_IMAGE = `${BASE_URL}/profile.jpg`;

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  schema = []
}) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Enhanced person schema with more details
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Islam Mahrous",
    "url": BASE_URL,
    "image": {
      "@type": "ImageObject",
      "url": DEFAULT_IMAGE,
      "width": 400,
      "height": 400
    },
    "sameAs": [
      "https://www.linkedin.com/in/islam-mahrous-"
    ],
    "jobTitle": "Hospitality Executive",
    "worksFor": {
      "@type": "Organization",
      "name": "Islam Mahrous Hospitality Consulting",
      "url": BASE_URL
    },
    "description": "Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence.",
    "nationality": "Egyptian",
    "knowsLanguage": ["English", "Arabic"],
    "award": [
      "Middle East & Africa General Manager Award - Customer Excellence (2017)",
      "Best-in-Class Award Star Voice (2017)",
      "Best Director of Operational Innovation - Africa & Indian Ocean region (2007)"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Hospitality Executive",
      "occupationalCategory": "Management",
      "experienceRequirements": "30+ years"
    }
  };

  // Professional service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Islam Mahrous Hospitality Consulting",
    "description": "Expert hospitality consulting services including pre-opening operations, renovations, and operational excellence.",
    "provider": {
      "@type": "Person",
      "name": "Islam Mahrous"
    },
    "areaServed": ["Middle East", "Africa", "International"],
    "serviceType": [
      "Hospitality Consulting",
      "Hotel Operations",
      "Pre-opening Operations",
      "Renovation Management",
      "Operational Excellence"
    ]
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

  // Add current page to breadcrumb
  if (location.pathname !== '/') {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1),
      "item": `${BASE_URL}/${pathSegments[0]}`
    });
  }

  const allSchema = [
    personSchema,
    professionalServiceSchema,
    breadcrumbSchema,
    ...schema
  ];

  const pageTitle = title || (language.code === 'ar' 
    ? 'إسلام محروس | مدير تنفيذي عالمي في الضيافة'
    : 'Islam Mahrous | Global Hospitality Executive');
    
  const pageDescription = description || (language.code === 'ar'
    ? 'مدير تنفيذي في مجال الضيافة مع أكثر من 30 عاماً من الخبرة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي.'
    : 'Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence.');

  return (
    <Helmet>
      {/* Enhanced Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={`hospitality executive, hotel management, ${tags.join(', ')}`} />
      <meta name="author" content="Islam Mahrous" />
      <link rel="canonical" href={`${BASE_URL}${location.pathname}`} />

      {/* Open Graph Enhanced */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={`${BASE_URL}${location.pathname}`} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Islam Mahrous" />
      <meta property="og:locale" content={language.code === 'ar' ? 'ar_EG' : 'en_US'} />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@islammahrous" />
      <meta name="twitter:creator" content="@islammahrous" />

      {/* Performance & SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${location.pathname}?lang=en`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}${location.pathname}?lang=ar`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${location.pathname}`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(allSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;

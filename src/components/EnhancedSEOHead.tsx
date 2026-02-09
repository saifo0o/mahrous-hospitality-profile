
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://islam-mahrous.com';
const DEFAULT_IMAGE = `${BASE_URL}/profile.jpg`;

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  canonicalUrl,
  noIndex = false
}) => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Enhanced schema markup
  const createPersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Islam Mahrous",
    "url": BASE_URL,
    "image": {
      "@type": "ImageObject",
      "url": DEFAULT_IMAGE,
      "width": 800,
      "height": 800
    },
    "sameAs": [
      "https://www.linkedin.com/in/islam-mahrous-"
    ],
    "jobTitle": "Global Hospitality Executive",
    "worksFor": {
      "@type": "Organization",
      "name": "Islam Mahrous Hospitality Consulting",
      "url": BASE_URL,
      "logo": DEFAULT_IMAGE
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
      "occupationalCategory": "Management Occupations",
      "experienceRequirements": "30+ years of hospitality industry experience"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Cornell University School of Hotel Administration"
      }
    ]
  });

  const createOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Islam Mahrous Hospitality Consulting",
    "description": "Expert hospitality consulting services including pre-opening operations, renovations, and operational excellence.",
    "founder": {
      "@type": "Person",
      "name": "Islam Mahrous"
    },
    "areaServed": ["Middle East", "Africa", "Europe", "Asia"],
    "serviceType": [
      "Hospitality Consulting",
      "Hotel Operations Management",
      "Pre-opening Operations",
      "Hotel Renovation Management",
      "Operational Excellence Consulting",
      "Strategic Planning",
      "Performance Optimization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospitality Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pre-Opening Operations",
            "description": "Comprehensive pre-opening management for luxury hotels and resorts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel Renovations",
            "description": "Strategic renovation management while maintaining operations"
          }
        }
      ]
    }
  });

  const createWebsiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": BASE_URL,
    "name": "Islam Mahrous | Global Hospitality Executive",
    "description": "Official website of Islam Mahrous, a global hospitality executive with over 30 years of experience.",
    "inLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language", 
        "name": "Arabic",
        "alternateName": "ar"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  });

  const createBreadcrumbSchema = () => {
    const breadcrumbs = {
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

    if (location.pathname !== '/') {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      pathSegments.forEach((segment, index) => {
        breadcrumbs.itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1),
          "item": `${BASE_URL}/${pathSegments.slice(0, index + 1).join('/')}`
        });
      });
    }

    return breadcrumbs;
  };

  const allSchema = [
    createPersonSchema(),
    createOrganizationSchema(),
    createWebsiteSchema(),
    createBreadcrumbSchema()
  ];

  const pageTitle = title || (language.code === 'ar' 
    ? 'إسلام محروس | مدير تنفيذي عالمي في الضيافة'
    : 'Islam Mahrous | Global Hospitality Executive');
    
  const pageDescription = description || (language.code === 'ar'
    ? 'مدير تنفيذي في مجال الضيافة مع أكثر من 30 عاماً من الخبرة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي.'
    : 'Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence.');

  const currentUrl = canonicalUrl || `${BASE_URL}${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={`hospitality executive, hotel management, ${tags.join(', ')}`} />
      <meta name="author" content="Islam Mahrous" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots and Indexing */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large'} />
      <meta name="googlebot" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph Enhanced */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Islam Mahrous" />
      <meta property="og:locale" content={language.code === 'ar' ? 'ar_EG' : 'en_US'} />
      
      {/* Article specific meta tags */}
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
      <meta name="twitter:image:alt" content={pageTitle} />
      <meta name="twitter:site" content="@islammahrous" />
      <meta name="twitter:creator" content="@islammahrous" />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href={`${currentUrl}?lang=en`} />
      <link rel="alternate" hrefLang="ar" href={`${currentUrl}?lang=ar`} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Performance optimizations */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(allSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEOHead;

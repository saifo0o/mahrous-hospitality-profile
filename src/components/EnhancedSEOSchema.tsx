import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';

interface SEOSchemaProps {
  type?: 'person' | 'organization' | 'article' | 'website';
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
}

const EnhancedSEOSchema: React.FC<SEOSchemaProps> = ({
  type = 'person',
  title,
  description,
  url = window.location.href,
  image = '/lovable-uploads/2a742c4a-aaea-4c0f-ad38-ea2891228c62.jpg',
  datePublished,
  dateModified,
  author
}) => {
  const { language } = useLanguage();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Islam Mahrous",
    "jobTitle": language.code === 'ar' 
      ? "مدير تنفيذي عالمي في الضيافة" 
      : "Global Hospitality Executive",
    "description": description || (language.code === 'ar'
      ? "مدير تنفيذي في مجال الضيافة مع أكثر من 30 عاماً من الخبرة متخصص في عمليات ما قبل الافتتاح والتجديدات والتميز التشغيلي في أسواق الشرق الأوسط وشمال إفريقيا والأسواق الدولية."
      : "Hospitality Executive with over 30 years of experience specializing in pre-opening, renovations, and operational excellence across MENA and international markets."
    ),
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/islam-mahrous",
      "https://twitter.com/islammahrous",
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Luxury Hospitality Group"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Cornell University School of Hotel Administration"
    },
    "knowsAbout": [
      "Hotel Management",
      "Hospitality Operations",
      "Revenue Management",
      "Guest Experience",
      "Team Leadership",
      "Property Development",
      "Luxury Hotels",
      "MENA Markets"
    ],
    "award": [
      "Hospitality Excellence Award 2023",
      "MENA Hotel Manager of the Year 2022",
      "Outstanding Achievement in Hospitality 2021"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Islam Mahrous Hospitality Consulting",
    "description": description,
    "url": url,
    "logo": image,
    "founder": {
      "@type": "Person",
      "name": "Islam Mahrous"
    },
    "serviceArea": [
      "United Arab Emirates",
      "Saudi Arabia",
      "Egypt",
      "Morocco",
      "Jordan",
      "Lebanon"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospitality Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel Pre-Opening Consultation",
            "description": "Comprehensive pre-opening services for luxury hotels"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Operational Excellence Consulting",
            "description": "Optimization of hotel operations and guest experience"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title || "Islam Mahrous - Global Hospitality Executive",
    "description": description,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "Person",
      "name": "Islam Mahrous"
    },
    "inLanguage": language.code === 'ar' ? 'ar' : 'en',
    "isAccessibleForFree": true
  };

  const articleSchema = datePublished ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author?.name || "Islam Mahrous",
      "url": author?.url
    },
    "publisher": {
      "@type": "Person",
      "name": "Islam Mahrous",
      "url": url
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": language.code === 'ar' ? 'ar' : 'en'
  } : null;

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema;
      case 'article':
        return articleSchema;
      case 'website':
        return websiteSchema;
      default:
        return personSchema;
    }
  };

  const schema = getSchema();

  return (
    <Helmet>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:locale" content={language.code === 'ar' ? 'ar_SA' : 'en_US'} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Islam Mahrous" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific */}
      {type === 'article' && datePublished && (
        <>
          <meta property="article:published_time" content={datePublished} />
          {dateModified && <meta property="article:modified_time" content={dateModified} />}
          <meta property="article:author" content={author?.name || "Islam Mahrous"} />
        </>
      )}
    </Helmet>
  );
};

export default EnhancedSEOSchema;
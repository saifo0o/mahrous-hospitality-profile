
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items, className = '' }) => {
  const { language, isRTL } = useLanguage();

  const homeLabel = language.code === 'ar' ? 'الرئيسية' : 'Home';

  return (
    <nav className={`${className}`} aria-label="Breadcrumb">
      <ol className={`flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 ${isRTL ? 'space-x-reverse' : ''}`}>
        {/* Home link */}
        <li>
          <Link 
            to="/" 
            className="flex items-center hover:text-luxury-gold transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className={`${isRTL ? 'mr-1' : 'ml-1'}`}>{homeLabel}</span>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className={`h-4 w-4 text-gray-400 ${isRTL ? 'rotate-180' : ''}`} />
            {item.href && !item.active ? (
              <Link 
                to={item.href}
                className={`hover:text-luxury-gold transition-colors ${isRTL ? 'mr-2' : 'ml-2'}`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`${item.active ? 'text-gray-900 dark:text-white font-medium' : ''} ${isRTL ? 'mr-2' : 'ml-2'}`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbNav;

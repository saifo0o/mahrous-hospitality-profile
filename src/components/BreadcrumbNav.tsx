
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
      <ol className={`flex items-center flex-wrap gap-x-2 text-xs uppercase tracking-wider text-muted-foreground ${isRTL ? 'space-x-reverse' : ''}`}>
        {/* Home link */}
        <li>
          <Link
            to="/"
            className="flex items-center hover:text-accent transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className={`${isRTL ? 'mr-1' : 'ml-1'}`}>{homeLabel}</span>
          </Link>
        </li>

        {/* Breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-2">
            <ChevronRight className={`h-3.5 w-3.5 text-accent/50 ${isRTL ? 'rotate-180' : ''}`} />
            {item.href && !item.active ? (
              <Link
                to={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={item.active ? 'text-foreground font-semibold' : ''}>
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


import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import GlobalSearchModal from './GlobalSearchModal';

const EnhancedSearchButton: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSearchOpen(true)}
        className="relative group"
        title={language.code === 'ar' ? 'البحث' : 'Search'}
      >
        <Search className="h-5 w-5 transition-transform group-hover:scale-110" />
        <div className="absolute inset-0 rounded-full bg-luxury-gold/20 scale-0 group-hover:scale-100 transition-transform duration-200" />
      </Button>
      
      <GlobalSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default EnhancedSearchButton;

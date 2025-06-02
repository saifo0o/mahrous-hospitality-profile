
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchModal from './SearchModal';
import { useLanguage } from '@/context/LanguageContext';

const SearchButton: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsSearchOpen(true)}
        className="relative"
        title={language.code === 'ar' ? 'البحث' : 'Search'}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">
          {language.code === 'ar' ? 'البحث' : 'Search'}
        </span>
      </Button>
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default SearchButton;

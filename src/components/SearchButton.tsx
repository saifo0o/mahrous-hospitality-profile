
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdvancedSearchModal from './AdvancedSearchModal';
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
        className="relative group"
        title={language.code === 'ar' ? 'البحث' : 'Search'}
      >
        <Search className="h-4 w-4 group-hover:text-luxury-gold transition-colors" />
        <span className="sr-only">
          {language.code === 'ar' ? 'البحث' : 'Search'}
        </span>
        
        {/* Keyboard shortcut hint */}
        <span className="hidden md:block ml-2 text-xs text-gray-500 group-hover:text-gray-400">
          ⌘K
        </span>
      </Button>
      
      <AdvancedSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

// Add keyboard shortcut listener
React.useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      const searchButton = document.querySelector('[title*="Search"]') as HTMLButtonElement;
      searchButton?.click();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);

export default SearchButton;

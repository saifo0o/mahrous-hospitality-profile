import React, { useState, useEffect, useRef } from 'react';
import { Search, Clock, TrendingUp, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'trending' | 'suggestion';
  category?: string;
}

interface AdvancedSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  suggestions?: SearchSuggestion[];
}

const AdvancedSearchWithAutocomplete: React.FC<AdvancedSearchProps> = ({
  onSearch,
  placeholder,
  suggestions = []
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { language } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default suggestions
  const defaultSuggestions: SearchSuggestion[] = [
    { id: '1', text: 'Hotel Management', type: 'trending', category: 'expertise' },
    { id: '2', text: 'Pre-Opening Operations', type: 'trending', category: 'services' },
    { id: '3', text: 'Luxury Hotels', type: 'suggestion', category: 'portfolio' },
    { id: '4', text: 'Awards and Recognition', type: 'recent', category: 'achievements' },
    { id: '5', text: 'Speaking Engagements', type: 'suggestion', category: 'events' },
    ...suggestions
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = defaultSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(defaultSuggestions.slice(0, 6));
    }
  }, [query, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(filteredSuggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setIsOpen(false);
      // Add to recent searches
      localStorage.setItem('recentSearches', JSON.stringify([
        query,
        ...JSON.parse(localStorage.getItem('recentSearches') || '[]').slice(0, 4)
      ]));
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    onSearch(suggestion.text);
    setIsOpen(false);
  };

  const clearQuery = () => {
    setQuery('');
    setFilteredSuggestions(defaultSuggestions.slice(0, 6));
    inputRef.current?.focus();
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'recent':
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case 'trending':
        return <TrendingUp className="h-4 w-4 text-primary" />;
      default:
        return <Search className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || (language.code === 'ar' ? 'البحث...' : 'Search...')}
          className="pl-10 pr-10 h-11 border-border/50 focus:border-primary"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearQuery}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && filteredSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                  index === selectedIndex
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent/50'
                }`}
              >
                {getSuggestionIcon(suggestion.type)}
                <div className="flex-1">
                  <span className="text-sm">{suggestion.text}</span>
                  {suggestion.category && (
                    <span className="text-xs text-muted-foreground ml-2">
                      in {suggestion.category}
                    </span>
                  )}
                </div>
                {suggestion.type === 'trending' && (
                  <span className="text-xs text-primary font-medium">
                    {language.code === 'ar' ? 'رائج' : 'Trending'}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedSearchWithAutocomplete;
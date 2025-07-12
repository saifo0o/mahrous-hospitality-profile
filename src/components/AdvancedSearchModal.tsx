
import React, { useState, useEffect } from 'react';
import { Search, Clock, Filter, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useGlobalSearch, SearchResult } from '@/hooks/useGlobalSearch';
import { trackSearchQuery } from '@/utils/enhanced-analytics';

interface AdvancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdvancedSearchModal: React.FC<AdvancedSearchModalProps> = ({ isOpen, onClose }) => {
  const { language, isRTL } = useLanguage();
  const { query, setQuery, results, isSearching, hasResults } = useGlobalSearch();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save search to recent searches
  const saveRecentSearch = (searchQuery: string) => {
    if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {
      const updated = [searchQuery, ...recentSearches.slice(0, 4)];
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  };

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      saveRecentSearch(searchQuery);
      trackSearchQuery(searchQuery, results.length);
    }
  };

  const filteredResults = selectedFilter === 'all' 
    ? results 
    : results.filter(result => result.type === selectedFilter);

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog': return '📖';
      case 'project': return '🏨';
      case 'speaking': return '🎤';
      case 'testimonial': return '💬';
      case 'award': return '🏆';
      default: return '📄';
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    if (language.code === 'ar') {
      switch (type) {
        case 'blog': return 'مقال';
        case 'project': return 'مشروع';
        case 'speaking': return 'محاضرة';
        case 'testimonial': return 'شهادة';
        case 'award': return 'جائزة';
        default: return 'محتوى';
      }
    }
    
    switch (type) {
      case 'blog': return 'Blog';
      case 'project': return 'Project';
      case 'speaking': return 'Speaking';
      case 'testimonial': return 'Testimonial';
      case 'award': return 'Award';
      default: return 'Content';
    }
  };

  const filterOptions = [
    { value: 'all', label: language.code === 'ar' ? 'الكل' : 'All' },
    { value: 'blog', label: language.code === 'ar' ? 'المقالات' : 'Blog Posts' },
    { value: 'project', label: language.code === 'ar' ? 'المشاريع' : 'Projects' },
    { value: 'speaking', label: language.code === 'ar' ? 'المحاضرات' : 'Speaking' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={language.code === 'ar' ? "ابحث في الموقع..." : "Search the site..."}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mt-3">
            <Filter className="h-4 w-4 text-gray-500" />
            <div className="flex gap-2 flex-wrap">
              {filterOptions.map(option => (
                <Button
                  key={option.value}
                  variant={selectedFilter === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(option.value)}
                  className="text-xs"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-96 overflow-y-auto">
          {!isSearching && recentSearches.length > 0 && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {language.code === 'ar' ? 'عمليات البحث الأخيرة' : 'Recent Searches'}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {recentSearches.map((search, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {isSearching && (
            <div className="p-4">
              {hasResults ? (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {language.code === 'ar' 
                      ? `${filteredResults.length} نتيجة للبحث عن "${query}"`
                      : `${filteredResults.length} results for "${query}"`
                    }
                  </div>
                  {filteredResults.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer group"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{getTypeIcon(result.type)}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-luxury-gold transition-colors">
                              {result.title}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {getTypeLabel(result.type)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {result.excerpt}
                          </p>
                          {result.category && (
                            <div className="mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {result.category}
                              </Badge>
                            </div>
                          )}
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-luxury-gold transition-colors opacity-0 group-hover:opacity-100" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>
                    {language.code === 'ar' 
                      ? `لم يتم العثور على نتائج للبحث عن "${query}"`
                      : `No results found for "${query}"`
                    }
                  </p>
                  <p className="text-sm mt-1">
                    {language.code === 'ar' 
                      ? 'جرب مصطلحات بحث مختلفة'
                      : 'Try different search terms'
                    }
                  </p>
                </div>
              )}
            </div>
          )}

          {!isSearching && recentSearches.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>
                {language.code === 'ar' 
                  ? 'ابدأ البحث لاستكشاف المحتوى'
                  : 'Start typing to search content'
                }
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedSearchModal;

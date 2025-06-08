
import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Clock, BookOpen, Award, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useGlobalSearch } from '@/hooks/useGlobalSearch';
import { Link } from 'react-router-dom';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const { language, isRTL } = useLanguage();
  const { query, setQuery, results, isSearching, hasResults } = useGlobalSearch();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    if (searchTerm.trim()) {
      const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-4 h-4" />;
      case 'project': return <Briefcase className="w-4 h-4" />;
      case 'award': return <Award className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      blog: language.code === 'ar' ? 'مدونة' : 'Blog',
      project: language.code === 'ar' ? 'مشروع' : 'Project',
      award: language.code === 'ar' ? 'جائزة' : 'Award',
      speaking: language.code === 'ar' ? 'محاضرة' : 'Speaking'
    };
    return labels[type as keyof typeof labels] || type;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={language.code === 'ar' ? 'البحث في جميع المحتويات...' : 'Search all content...'}
              className="flex-1 bg-transparent outline-none text-lg"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isSearching && hasResults && (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  {language.code === 'ar' ? 'النتائج' : 'Results'}
                </h3>
                <div className="space-y-2">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      to={result.url}
                      onClick={onClose}
                      className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-luxury-gold mt-1">
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900 dark:text-white truncate">
                              {result.title}
                            </h4>
                            <span className="text-xs px-2 py-1 bg-luxury-gold/10 text-luxury-gold rounded-full">
                              {getTypeLabel(result.type)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {result.excerpt}
                          </p>
                          {result.date && (
                            <p className="text-xs text-gray-500 mt-1">{result.date}</p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isSearching && !hasResults && (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>{language.code === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}</p>
              </div>
            )}

            {!isSearching && (
              <div className="p-4">
                {recentSearches.length > 0 && (
                  <>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                      {language.code === 'ar' ? 'عمليات البحث الأخيرة' : 'Recent Searches'}
                    </h3>
                    <div className="space-y-1 mb-6">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="flex items-center gap-2 w-full p-2 text-left rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{search}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
                
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">
                    {language.code === 'ar' 
                      ? 'ابدأ في الكتابة للبحث في المشاريع والمقالات والمزيد'
                      : 'Start typing to search projects, articles, and more'
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GlobalSearchModal;

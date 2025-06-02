
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'experience' | 'project' | 'award' | 'page';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { language, isRTL } = useLanguage();

  // Mock search data - in real implementation, this would come from your content
  const searchData: SearchResult[] = [
    {
      title: language.code === 'ar' ? 'نبذة عني' : 'About Me',
      description: language.code === 'ar' ? 'تعرف على مسيرتي المهنية في الضيافة' : 'Learn about my hospitality career journey',
      url: '/about',
      type: 'page'
    },
    {
      title: language.code === 'ar' ? 'المشاريع' : 'Projects',
      description: language.code === 'ar' ? 'استكشف مشاريع الضيافة المميزة' : 'Explore signature hospitality projects',
      url: '/projects',
      type: 'page'
    },
    {
      title: language.code === 'ar' ? 'الجوائز' : 'Awards',
      description: language.code === 'ar' ? 'الجوائز والتكريم المهني' : 'Professional awards and recognition',
      url: '/awards',
      type: 'page'
    },
    {
      title: language.code === 'ar' ? 'المسار المهني' : 'Career Journey',
      description: language.code === 'ar' ? 'أكثر من 30 عاماً من الخبرة القيادية' : 'Over 30 years of leadership experience',
      url: '/career',
      type: 'page'
    }
  ];

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    const searchTimeout = setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query, language.code]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 bg-white dark:bg-luxury-navy rounded-lg shadow-xl z-50 ${isRTL ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Input */}
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder={language.code === 'ar' ? 'ابحث في الموقع...' : 'Search the website...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-lg placeholder:text-gray-400"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="ml-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading && (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-luxury-gold mx-auto"></div>
                  <p className="mt-2 text-gray-500">
                    {language.code === 'ar' ? 'جاري البحث...' : 'Searching...'}
                  </p>
                </div>
              )}

              {!isLoading && query.length >= 2 && results.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  {language.code === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}
                </div>
              )}

              {!isLoading && results.length > 0 && (
                <div className="py-2">
                  {results.map((result, index) => (
                    <motion.button
                      key={index}
                      className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-none bg-transparent"
                      onClick={() => handleResultClick(result.url)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <h3 className="font-medium text-luxury-navy dark:text-white">
                        {result.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {result.description}
                      </p>
                      <span className="text-xs text-luxury-gold mt-2 inline-block">
                        {result.type}
                      </span>
                    </motion.button>
                  ))}
                </div>
              )}

              {query.length < 2 && (
                <div className="p-8 text-center text-gray-500">
                  {language.code === 'ar' 
                    ? 'اكتب حرفين على الأقل للبحث' 
                    : 'Type at least 2 characters to search'}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;

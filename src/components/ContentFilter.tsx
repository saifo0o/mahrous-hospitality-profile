
import React from 'react';
import { Filter, SortAsc, SortDesc, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface SortOption {
  value: string;
  label: string;
}

interface ContentFilterProps {
  categories: FilterOption[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOptions: SortOption[];
  selectedSort: string;
  onSortChange: (sort: string) => void;
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  resultCount?: number;
  showViewToggle?: boolean;
  className?: string;
}

const ContentFilter: React.FC<ContentFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOptions,
  selectedSort,
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
  resultCount,
  showViewToggle = true,
  className = ''
}) => {
  const { language } = useLanguage();

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Left side - Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-1">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {language.code === 'ar' ? 'تصفية:' : 'Filter:'}
            </span>
          </div>
          
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.value)}
                className="text-xs relative"
              >
                {category.label}
                {category.count !== undefined && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Right side - Sort and View */}
        <div className="flex items-center gap-3">
          {/* Results count */}
          {resultCount !== undefined && (
            <span className="text-sm text-gray-500">
              {language.code === 'ar' 
                ? `${resultCount} نتيجة`
                : `${resultCount} results`
              }
            </span>
          )}

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {language.code === 'ar' ? 'ترتيب:' : 'Sort:'}
            </span>
            <Select value={selectedSort} onValueChange={onSortChange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <div className="flex items-center gap-2">
                      {option.value.includes('asc') ? (
                        <SortAsc className="h-3 w-3" />
                      ) : (
                        <SortDesc className="h-3 w-3" />
                      )}
                      {option.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* View mode toggle */}
          {showViewToggle && onViewModeChange && (
            <div className="flex border border-gray-200 dark:border-gray-600 rounded-md">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                className="rounded-r-none px-2"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange('list')}
                className="rounded-l-none px-2"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentFilter;


import React from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage, languages } from '@/context/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (langCode: 'en' | 'ar') => {
    if (langCode !== language.code) {
      setLanguage(langCode);
    }
  };

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 bg-white">
            <Globe className="h-4 w-4" />
            <span>{language.flag}</span>
            <span className="hidden md:inline">{language.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          <DropdownMenuItem
            key="en"
            onClick={() => handleLanguageChange('en')}
            className={`cursor-pointer flex items-center gap-2 ${language.code === 'en' ? 'bg-gray-100 font-medium' : ''}`}
          >
            <span>{languages.en.flag}</span>
            <span>{languages.en.name}</span>
            {language.code === 'en' && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
          <DropdownMenuItem
            key="ar"
            onClick={() => handleLanguageChange('ar')}
            className={`cursor-pointer flex items-center gap-2 ${language.code === 'ar' ? 'bg-gray-100 font-medium' : ''}`}
          >
            <span>{languages.ar.flag}</span>
            <span>{languages.ar.name}</span>
            {language.code === 'ar' && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;

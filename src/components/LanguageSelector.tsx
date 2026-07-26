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
          <Button variant="outline" className="flex items-center gap-2 bg-background border-border/60 hover:bg-muted transition-colors rounded-sm">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span>{language.flag}</span>
            <span className="hidden md:inline text-sm font-medium">{language.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-popover border-border/60 rounded-sm shadow-lg">
          <DropdownMenuItem
            key="en"
            onClick={() => handleLanguageChange('en')}
            className={`cursor-pointer flex items-center gap-2 rounded-sm py-2 ${language.code === 'en' ? 'bg-accent text-accent-foreground font-semibold' : 'text-foreground'}`}
          >
            <span>{languages.en.flag}</span>
            <span className="text-sm">{languages.en.name}</span>
            {language.code === 'en' && <span className="ms-auto text-xs">✓</span>}
          </DropdownMenuItem>
          <DropdownMenuItem
            key="ar"
            onClick={() => handleLanguageChange('ar')}
            className={`cursor-pointer flex items-center gap-2 rounded-sm py-2 ${language.code === 'ar' ? 'bg-accent text-accent-foreground font-semibold' : 'text-foreground'}`}
          >
            <span>{languages.ar.flag}</span>
            <span className="text-sm">{languages.ar.name}</span>
            {language.code === 'ar' && <span className="ms-auto text-xs">✓</span>}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;

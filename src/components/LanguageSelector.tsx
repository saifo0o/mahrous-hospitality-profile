
import React, { useState } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

// Available languages
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true }
];

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleLanguageChange = (language: typeof languages[0]) => {
    setCurrentLanguage(language);
    // In a real implementation, this would update the app's language context
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.rtl ? 'rtl' : 'ltr';
    // For demo purposes, we'll show a toast notification
    console.log(`Language changed to ${language.name}`);
  };

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 bg-white">
            <Globe className="h-4 w-4" />
            <span>{currentLanguage.flag}</span>
            <span className="hidden md:inline">{currentLanguage.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className="cursor-pointer flex items-center gap-2"
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;

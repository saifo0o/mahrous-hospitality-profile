import React, { useEffect, useState } from 'react';
import { Accessibility, Eye, EyeOff, Type, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/LanguageContext';

const AccessibilityEnhancements: React.FC = () => {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    // Font size
    root.setAttribute('data-font-size', fontSize);
    
    // High contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
  }, [fontSize, highContrast, reducedMotion]);

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    localStorage.setItem('accessibility-font-size', size);
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('accessibility-high-contrast', newValue.toString());
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('accessibility-reduced-motion', newValue.toString());
  };

  const readAloud = () => {
    if ('speechSynthesis' in window) {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language.code === 'ar' ? 'ar-SA' : 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  // Load saved preferences
  useEffect(() => {
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    const savedHighContrast = localStorage.getItem('accessibility-high-contrast') === 'true';
    const savedReducedMotion = localStorage.getItem('accessibility-reduced-motion') === 'true';
    
    if (savedFontSize) setFontSize(savedFontSize);
    setHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          aria-label={language.code === 'ar' ? 'خيارات إمكانية الوصول' : 'Accessibility options'}
        >
          <Accessibility className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* Font Size Options */}
        <DropdownMenuItem
          onClick={() => handleFontSizeChange('small')}
          className={fontSize === 'small' ? 'bg-accent' : ''}
        >
          <Type className="h-4 w-4 mr-2" />
          {language.code === 'ar' ? 'خط صغير' : 'Small Text'}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => handleFontSizeChange('normal')}
          className={fontSize === 'normal' ? 'bg-accent' : ''}
        >
          <Type className="h-4 w-4 mr-2" />
          {language.code === 'ar' ? 'خط عادي' : 'Normal Text'}
        </DropdownMenuItem>
        
        <DropdownMenuItem
          onClick={() => handleFontSizeChange('large')}
          className={fontSize === 'large' ? 'bg-accent' : ''}
        >
          <Type className="h-4 w-4 mr-2" />
          {language.code === 'ar' ? 'خط كبير' : 'Large Text'}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* High Contrast Toggle */}
        <DropdownMenuItem onClick={toggleHighContrast}>
          {highContrast ? (
            <EyeOff className="h-4 w-4 mr-2" />
          ) : (
            <Eye className="h-4 w-4 mr-2" />
          )}
          {language.code === 'ar' 
            ? (highContrast ? 'إيقاف التباين العالي' : 'تفعيل التباين العالي')
            : (highContrast ? 'Disable High Contrast' : 'Enable High Contrast')
          }
        </DropdownMenuItem>

        {/* Reduced Motion Toggle */}
        <DropdownMenuItem onClick={toggleReducedMotion}>
          <div className="h-4 w-4 mr-2 flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full bg-current ${reducedMotion ? '' : 'animate-pulse'}`} />
          </div>
          {language.code === 'ar' 
            ? (reducedMotion ? 'تفعيل الحركة' : 'تقليل الحركة')
            : (reducedMotion ? 'Enable Motion' : 'Reduce Motion')
          }
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Screen Reader */}
        <DropdownMenuItem onClick={readAloud}>
          <Volume2 className="h-4 w-4 mr-2" />
          {language.code === 'ar' ? 'قراءة الصفحة' : 'Read Page Aloud'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibilityEnhancements;
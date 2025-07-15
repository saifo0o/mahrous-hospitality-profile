import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

interface PWAInstallPromptProps {
  onInstall?: () => void;
  onDismiss?: () => void;
}

const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ onInstall, onDismiss }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Show prompt if not dismissed recently
      const lastDismissed = localStorage.getItem('pwa-prompt-dismissed');
      const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
      
      if (!lastDismissed || parseInt(lastDismissed) < oneDayAgo) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show iOS install prompt if on iOS and not in standalone mode
    if (iOS && !window.matchMedia('(display-mode: standalone)').matches) {
      const lastDismissed = localStorage.getItem('pwa-prompt-dismissed');
      const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
      
      if (!lastDismissed || parseInt(lastDismissed) < oneDayAgo) {
        setTimeout(() => setShowPrompt(true), 3000); // Show after 3 seconds
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        onInstall?.();
      }
      
      setDeferredPrompt(null);
    }
    
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
    setShowPrompt(false);
    onDismiss?.();
  };

  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {language.code === 'ar' 
                  ? 'تثبيت التطبيق' 
                  : 'Install App'
                }
              </h3>
              
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                {isIOS ? (
                  language.code === 'ar'
                    ? 'اضغط على زر المشاركة ثم "إضافة إلى الشاشة الرئيسية" للحصول على أفضل تجربة.'
                    : 'Tap the share button and "Add to Home Screen" for the best experience.'
                ) : (
                  language.code === 'ar'
                    ? 'ثبت التطبيق للحصول على وصول سريع وتجربة أفضل.'
                    : 'Install the app for quick access and a better experience.'
                )}
              </p>
              
              <div className="flex gap-2">
                {!isIOS && (
                  <Button
                    size="sm"
                    onClick={handleInstall}
                    className="text-xs h-7"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    {language.code === 'ar' ? 'تثبيت' : 'Install'}
                  </Button>
                )}
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDismiss}
                  className="text-xs h-7"
                >
                  {language.code === 'ar' ? 'إغلاق' : 'Dismiss'}
                </Button>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="flex-shrink-0 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;
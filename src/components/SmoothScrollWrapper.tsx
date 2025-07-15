import React, { useEffect } from 'react';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Add smooth scrolling behavior to anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;
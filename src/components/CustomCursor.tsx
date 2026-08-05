import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointers (has a cursor)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    setIsVisible(true);

    let rafId: number | null = null;
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (rafId !== null) return;
      
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (cursorRingRef.current) {
          cursorRingRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });
    };

    const addHoverListeners = () => {
      const interactiveSelector = 'a, button, [role="button"], input, select, textarea, .interactive-element, .hover-lift';
      const elements = document.querySelectorAll(interactiveSelector);
      
      elements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Watch DOM changes to re-add listeners on dynamic component load
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    window.addEventListener('mousemove', onMouseMove);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Add initial listeners
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      
      const elements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .interactive-element, .hover-lift');
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={cursorRingRef} 
        className={`custom-cursor hidden md:block ${isHovered ? 'hovered' : ''}`}
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={cursorDotRef} 
        className="custom-cursor-dot hidden md:block" 
        style={{ willChange: 'transform' }}
      />
    </>
  );
}

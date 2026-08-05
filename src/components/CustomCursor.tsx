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

    // Use event delegation for hover states instead of MutationObserver
    const interactiveSelector = 'a, button, [role="button"], input, select, textarea, .interactive-element, .hover-lift';
    
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
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

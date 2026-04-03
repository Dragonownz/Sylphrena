'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'slide-up' | 'pop-in' | 'flip-in-y' | 'zoom-in-rotate';
}

export function ScrollRevealSection({
  children,
  className = '',
  animation = 'slide-up',
}: ScrollRevealSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  const animationClasses = {
    'slide-up': 'animate-slide-up-fade',
    'pop-in': 'animate-pop-in',
    'flip-in-y': 'animate-flip-in-y',
    'zoom-in-rotate': 'animate-zoom-in-rotate',
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} ${animationClasses[animation]} ${className}`}
    >
      {children}
    </section>
  );
}

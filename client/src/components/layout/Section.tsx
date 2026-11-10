import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /**
   * Defines the vertical padding size.
   * Uses standardized global CSS variables from globals.css.
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Universal Section Container.
 * Ensures consistent vertical rhythm and spacing across the entire application.
 */
export function Section({ children, padding = 'md', className, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        padding === 'md' && "section-py-md section-py-md-lg",
        padding === 'sm' && "section-py-sm section-py-sm-lg",
        padding === 'lg' && "section-py-lg section-py-lg-lg",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

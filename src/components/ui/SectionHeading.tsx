import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  badge?: string;
  tagline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  tagline,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'relative mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        align === 'right' && 'text-right ml-auto max-w-3xl',
        align === 'left' && 'max-w-3xl',
        className
      )}
    >
      {/* Architectural Index / Badge */}
      {(badge || tagline) && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-3.5 px-3 py-1 text-xs font-mono tracking-wider uppercase rounded-sm border',
            isDark
              ? 'bg-earth-900/80 text-terracotta-400 border-terracotta-900/60'
              : 'bg-sand-100 text-terracotta-700 border-sand-300'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-pulse"></span>
          {badge && <span className="font-semibold text-terracotta-600 dark:text-terracotta-400">{badge}</span>}
          {badge && tagline && <span className="opacity-40">|</span>}
          {tagline && <span>{tagline}</span>}
        </div>
      )}

      {/* Main Headline */}
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-[1.15]',
          isDark ? 'text-white' : 'text-earth-950'
        )}
      >
        {title}
      </h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg font-sans leading-relaxed text-balance',
            isDark ? 'text-earth-300' : 'text-earth-700'
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Architectural decorative baseline indicator */}
      <div
        className={cn(
          'mt-6 flex items-center gap-1.5',
          align === 'center' && 'justify-center',
          align === 'right' && 'justify-end'
        )}
      >
        <div className="w-12 h-0.5 bg-terracotta-500"></div>
        <div className="w-2 h-0.5 bg-sand-400"></div>
        <div className="w-1 h-0.5 bg-sand-300"></div>
      </div>
    </div>
  );
};

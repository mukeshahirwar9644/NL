import React from 'react';
import { cn } from '../../lib/utils';

interface DimensionLineProps {
  label: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const DimensionLine: React.FC<DimensionLineProps> = ({
  label,
  orientation = 'horizontal',
  className,
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={cn('flex flex-col items-center justify-between text-terracotta-600/70 font-mono text-[10px]', className)}>
        <div className="w-2 h-px bg-terracotta-500/60"></div>
        <div className="h-full w-px bg-dashed bg-terracotta-400/40 relative flex items-center justify-center">
          <span className="rotate-90 whitespace-nowrap px-1 bg-white/80 dark:bg-earth-900/80 rounded-xs">{label}</span>
        </div>
        <div className="w-2 h-px bg-terracotta-500/60"></div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-between text-terracotta-600/70 font-mono text-[10px]', className)}>
      <div className="h-2 w-px bg-terracotta-500/60"></div>
      <div className="w-full h-px bg-terracotta-400/40 relative flex items-center justify-center">
        <span className="px-2 bg-white/80 dark:bg-earth-900/80 rounded-xs">{label}</span>
      </div>
      <div className="h-2 w-px bg-terracotta-500/60"></div>
    </div>
  );
};

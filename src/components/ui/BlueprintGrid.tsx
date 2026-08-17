import React from 'react';
import { cn } from '../../lib/utils';

interface BlueprintGridProps {
  variant?: 'light' | 'dark';
  withCoordinates?: boolean;
  className?: string;
}

export const BlueprintGrid: React.FC<BlueprintGridProps> = ({
  variant = 'light',
  withCoordinates = true,
  className,
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden select-none',
        isDark ? 'bg-grid-blueprint-dark opacity-30' : 'bg-grid-blueprint-light opacity-40',
        className
      )}
    >
      {withCoordinates && (
        <>
          {/* Top-left coordinate badge */}
          <div
            className={cn(
              'absolute top-3 left-4 font-mono text-[10px] tracking-widest uppercase opacity-40',
              isDark ? 'text-terracotta-300' : 'text-earth-600'
            )}
          >
            REF: SEC-01 // ARCH.GRD [24°18'N 78°42'E]
          </div>

          {/* Top-right blueprint elevation mark */}
          <div
            className={cn(
              'absolute top-3 right-4 font-mono text-[10px] tracking-widest uppercase opacity-40 hidden sm:block',
              isDark ? 'text-terracotta-300' : 'text-earth-600'
            )}
          >
            LVL +0.00 // SCALE 1:100
          </div>

          {/* Architectural crosshairs in corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-terracotta-500/40"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-terracotta-500/40"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-terracotta-500/40"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-terracotta-500/40"></div>
        </>
      )}
    </div>
  );
};

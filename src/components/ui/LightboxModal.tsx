import React, { useEffect } from 'react';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  title,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-earth-950/95 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-terracotta-400 bg-earth-900/80 px-2.5 py-1 rounded border border-earth-800">
              {currentIndex + 1} / {images.length}
            </span>
            {title && <span className="text-sm font-heading font-medium text-sand-100 hidden sm:inline">{title}</span>}
          </div>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 rounded-full bg-earth-900/80 text-white hover:bg-terracotta-600 transition-colors border border-earth-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-earth-900/80 text-white hover:bg-terracotta-600 transition-colors border border-earth-800 shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-earth-900/80 text-white hover:bg-terracotta-600 transition-colors border border-earth-800 shadow-xl"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        )}

        {/* Main Image Frame */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-6xl max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={title || 'Project preview'}
            className="max-w-full max-h-[82vh] object-contain rounded shadow-2xl border border-earth-800"
          />
          <div className="absolute bottom-2 right-2 text-white/50 text-[10px] font-mono bg-earth-950/60 px-2 py-0.5 rounded flex items-center gap-1">
            <ZoomIn className="w-3 h-3" />
            <span>High Resolution</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

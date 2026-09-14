import React, { useEffect, useState } from 'react';
import { OnyxLogo } from './OnyxLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 300 : 1000;

    const timer = setTimeout(() => {
      setFadingOut(true);
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(finishTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-500 ease-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute w-80 h-80 rounded-full bg-[#E50914]/20 blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center select-none px-4 text-center">
        <div className="mb-2">
          <OnyxLogo size="xl" showSubtitle={true} />
        </div>

        <div className="w-32 h-1 bg-[#1F1F1F] rounded-full mt-6 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-[#E50914] animate-pulse w-full origin-left" />
        </div>
      </div>
    </div>
  );
};

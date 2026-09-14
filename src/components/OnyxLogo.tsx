import React from 'react';

interface OnyxLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  accentColor?: string;
}

export const OnyxLogo: React.FC<OnyxLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  accentColor = '#E50914'
}) => {
  const heightMap = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-24',
    xl: 'h-32'
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 700 190"
        className={`${heightMap[size]} w-auto max-w-full drop-shadow-[0_0_15px_rgba(229,9,20,0.35)] transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Barbell Weights */}
        <g fill="#FFFFFF">
          {/* Small plate */}
          <rect x="76" y="45" width="12" height="60" rx="6" />
          {/* Medium plate */}
          <rect x="96" y="30" width="14" height="90" rx="7" />
          {/* Large plate */}
          <rect x="118" y="15" width="16" height="110" rx="8" />
          {/* Sleeve connector */}
          <rect x="140" y="66" width="40" height="8" rx="4" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Main Logo Text: ONYX (Clear Vertical Space) */}
        <g fill="#FFFFFF">
          {/* 'O' with Target concentric ring */}
          <circle cx="235" cy="65" r="36" stroke="#FFFFFF" strokeWidth="15" fill="none" />
          <circle cx="235" cy="65" r="13" fill="#FFFFFF" />
          <circle cx="235" cy="65" r="5" fill={accentColor} />

          {/* 'N' */}
          <path d="M 290 28 L 290 102 L 308 102 L 338 54 L 338 102 L 356 102 L 356 28 L 338 28 L 308 76 L 308 28 Z" />

          {/* 'Y' */}
          <path d="M 372 28 L 398 68 L 398 102 L 416 102 L 416 68 L 442 28 L 422 28 L 407 55 L 392 28 Z" />

          {/* 'X' */}
          <path d="M 452 28 L 478 65 L 452 102 L 472 102 L 488 78 L 504 102 L 524 102 L 498 65 L 524 28 L 504 28 L 488 52 L 472 28 Z" />
        </g>

        {/* Right Barbell Weights (Symmetrical Mirroring) */}
        <g fill="#FFFFFF">
          {/* Sleeve connector */}
          <rect x="520" y="66" width="40" height="8" rx="4" fill="#FFFFFF" opacity="0.9" />
          {/* Large plate */}
          <rect x="566" y="15" width="16" height="110" rx="8" />
          {/* Medium plate */}
          <rect x="588" y="30" width="14" height="90" rx="7" />
          {/* Small plate */}
          <rect x="608" y="45" width="12" height="60" rx="6" />
        </g>

        {/* Subtitle Text: THE PROFESSIONAL FITNESS STUDIO (Clear 45px Gap Below ONYX, 100% Unclipped) */}
        {showSubtitle && (
          <text
            x="350"
            y="166"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="20"
            fontWeight="900"
            letterSpacing="4"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            className="font-black drop-shadow-md"
          >
            THE PROFESSIONAL FITNESS STUDIO
          </text>
        )}
      </svg>
    </div>
  );
};

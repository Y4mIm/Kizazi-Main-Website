import React from 'react';

interface PatternProps {
  className?: string;
  opacity?: string;
  color?: string;
}

// A subtle background pattern inspired by woven textures and digital nodes
export const TechWeavePattern: React.FC<PatternProps> = ({ className = "", opacity = "0.03", color = "currentColor" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tech-weave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Geometric diamond shape common in African textile, stylized as tech nodes */}
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke={color} strokeWidth="0.5" />
            <circle cx="20" cy="20" r="2" fill={color} />
            <circle cx="0" cy="20" r="1" fill={color} />
            <circle cx="40" cy="20" r="1" fill={color} />
            <circle cx="20" cy="0" r="1" fill={color} />
            <circle cx="20" cy="40" r="1" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-weave)" />
      </svg>
    </div>
  );
};

// A linear accent inspired by Mudcloth zigzags (mountains/paths) combined with circuit traces
export const ChevronCircuitDivider: React.FC<PatternProps> = ({ className = "", opacity = "0.1", color = "currentColor" }) => {
  return (
    <div className={`w-full h-6 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="chevron-circuit" x="0" y="0" width="100" height="24" patternUnits="userSpaceOnUse">
             <path d="M0 24 L25 4 L50 24 L75 4 L100 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
             <circle cx="25" cy="4" r="3" fill={color} />
             <circle cx="75" cy="4" r="3" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chevron-circuit)" />
      </svg>
    </div>
  );
};

// Minimalist dash pattern inspired by Bogolanfini (Mudcloth)
export const MudclothDashPattern: React.FC<PatternProps> = ({ className = "", opacity = "0.05", color = "currentColor" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mudcloth-dash" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Rhythmic dashes mimicking stitched fabric lines */}
            <line x1="10" y1="10" x2="10" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16" y1="12" x2="16" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="10" x2="22" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Scattered geometric accents */}
            <path d="M45 40 L55 40 M50 35 L50 45" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="50" cy="10" r="1.5" fill={color} />
            <line x1="40" y1="50" x2="50" y2="50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mudcloth-dash)" />
      </svg>
    </div>
  );
};

// Corner accents for cards/sections
export const AfroGeometricCorner: React.FC<{ className?: string; color?: string; rotation?: string }> = ({ 
  className = "", 
  color = "#0060af",
  rotation = "0"
}) => {
  return (
    <svg 
      width="60" 
      height="60" 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`absolute pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Outer Bracket */}
      <path d="M60 2 H 2 V 60" stroke={color} strokeWidth="2" strokeLinecap="square" />
      {/* Inner Geometric Step (Common in Bantu art) */}
      <path d="M40 12 H 12 V 40" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
      <rect x="12" y="12" width="6" height="6" fill={color} />
    </svg>
  );
};
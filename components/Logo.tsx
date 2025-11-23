import React from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", scrolled = false, isFooter = false }) => {
  const boxColor = "#0060af"; // Kizazi Blue
  
  // Determine text colors based on background context
  // Navy Theme Logic:
  // Footer: White text
  // Scrolled: Dark text (on white nav)
  // Transparent/Hero: White text
  const nameTextColor = isFooter ? "#ffffff" : (scrolled ? "#0a192f" : "#ffffff");
  const taglineColor = isFooter ? "#94a3b8" : (scrolled ? "#0060af" : "#cbd5e1");
  const circuitColor = isFooter ? "#60a5fa" : (scrolled ? "#0060af" : "#60a5fa");

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-end gap-2"> {/* Reduced gap from 3 to 2 */}
        {/* Graphic Emblem */}
        <div className="relative flex-shrink-0">
          <svg width="90" height="40" viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
             {/* Circuit Lines */}
             <path d="M15 15 V 8 H 8" stroke={circuitColor} strokeWidth="1.5" fill="none" />
             <circle cx="8" cy="8" r="2" fill={circuitColor} />

             <path d="M35 15 V 5 H 50 V 10" stroke={circuitColor} strokeWidth="1.5" fill="none" />
             <circle cx="50" cy="10" r="2" fill={circuitColor} />

             <path d="M70 15 V 6 H 80" stroke={circuitColor} strokeWidth="1.5" fill="none" />
             <circle cx="80" cy="6" r="2" fill={circuitColor} />
             
             <path d="M25 15 V 10 H 20" stroke={circuitColor} strokeWidth="1.5" fill="none" />
             <circle cx="20" cy="10" r="1.5" fill={circuitColor} />

             {/* Main Box */}
             <rect x="0" y="15" width="90" height="30" rx="4" fill={boxColor} />
             <text x="45" y="36" fontSize="18" fontWeight="800" fill="white" textAnchor="middle" fontFamily="'Outfit', sans-serif">Kizazi</text>
          </svg>
        </div>
        
        {/* Text Part: Technologies */}
        {/* Adjusted spacing and line-height to be tight and simple */}
        <span className="text-2xl font-bold tracking-tight leading-none mb-1 font-display" style={{ color: nameTextColor }}>
          Technologies
        </span>
      </div>
      
      {/* Tagline */}
      <span className="text-[0.6rem] font-bold tracking-[0.25em] uppercase mt-0.5 ml-0.5 font-sans opacity-90" style={{ color: taglineColor }}>
        Innovations for Generations
      </span>
    </div>
  );
};

export default Logo;
"use client";
import React from "react";

interface AuroraBackgroundProps {
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -inset-[10px] opacity-40"
        style={{
          filter: 'blur(40px)',
          willChange: 'transform',
          maskImage: showRadialGradient 
            ? 'radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)' 
            : undefined,
          WebkitMaskImage: showRadialGradient 
            ? 'radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)' 
            : undefined,
        }}
      >
        {/* Main aurora layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, 
                rgba(59, 130, 246, 0.8) 10%, 
                rgba(129, 140, 248, 0.8) 15%, 
                rgba(147, 197, 253, 0.8) 20%, 
                rgba(196, 181, 253, 0.8) 25%, 
                rgba(96, 165, 250, 0.8) 30%
              ),
              repeating-linear-gradient(100deg, 
                rgba(0, 0, 0, 0.1) 0%, 
                rgba(0, 0, 0, 0.1) 7%, 
                transparent 10%, 
                transparent 12%, 
                rgba(0, 0, 0, 0.1) 16%
              )
            `,
            backgroundSize: '300%, 200%',
            backgroundPosition: '50% 50%, 50% 50%',
          }}
        />
        {/* Animated overlay */}
        <div
          className="absolute inset-0 animate-aurora mix-blend-overlay"
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, 
                rgba(59, 130, 246, 0.5) 10%, 
                rgba(129, 140, 248, 0.5) 15%, 
                rgba(147, 197, 253, 0.5) 20%, 
                rgba(196, 181, 253, 0.5) 25%, 
                rgba(96, 165, 250, 0.5) 30%
              )
            `,
            backgroundSize: '200%, 100%',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>
    </div>
  );
};

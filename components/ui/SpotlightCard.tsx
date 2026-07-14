"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  style?: React.CSSProperties;
}

export const SpotlightCard = ({
  children,
  className = "",
  glowColor = "rgba(147, 51, 234, 0.15)", // Purple neon glow
  borderColor = "rgba(168, 85, 247, 0.4)", // Border glow
  style = {},
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        "relative rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-300 group",
        className
      )}
      style={style}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500 z-0"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Border glow overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500 z-10"
        style={{
          opacity: isFocused ? 1 : 0,
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, black, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, black, transparent 100%)`,
        }}
      />
      
      {/* Children content wrapper */}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );
};

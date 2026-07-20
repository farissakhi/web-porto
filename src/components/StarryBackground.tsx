"use client";

import { useEffect, useState } from "react";

export default function StarryBackground() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate small random stars
    const generatedStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`, // 0.5px to 2px
      opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `0 0 2px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
    </div>
  );
}

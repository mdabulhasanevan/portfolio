"use client"
import React, { useState, useEffect } from "react";

const TextRain = ({ words }) => {
  // State to control whether the text rain is still active
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Stop the rain after 10 seconds
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 10000); // 10 seconds

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Repeat the words multiple times to create many "raindrops"
  const raindrops = Array.from({ length: 50 }, () => words[Math.floor(Math.random() * words.length)]);

  if (!isActive) {
    return null; // Return nothing after 10 seconds
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {raindrops.map((word, index) => (
        <span
          key={index}
          className="absolute text-4xl text-blue-950 animate-rain"
          style={{
            left: `${Math.random() * 100}%`, // Randomize horizontal position
            animationDelay: `${Math.random() * 9}s`, // Randomize animation delay
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextRain;

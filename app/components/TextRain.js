import React from "react";

const TextRain = ({ words }) => {
  // Repeat the words multiple times to create many "raindrops"
  const raindrops = Array.from({ length: 50 }, () => words[Math.floor(Math.random() * words.length)]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {raindrops.map((word, index) => (
        <span
          key={index}
          className="absolute text-4xl text-orange-950 animate-rain"
          style={{
            left: `${Math.random() * 100}%`, // Randomize horizontal position
            animationDelay: `${Math.random() * 5}s`, // Randomize animation delay
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextRain;

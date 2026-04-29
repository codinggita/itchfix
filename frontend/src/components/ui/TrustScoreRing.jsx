import React from 'react';

/**
 * TrustScoreRing - A circular SVG gauge representing the TrustScore.
 * 
 * @param {number} score - The score value (0-100).
 * @param {number} size - The size of the ring in pixels (default 52).
 */
const TrustScoreRing = ({ score = 0, size = 52 }) => {
  const strokeWidth = size * 0.12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  // Determine color based on score
  let color = '#E53E3E'; // red (<60)
  if (score >= 80) {
    color = '#00C9A7'; // teal (≥80)
  } else if (score >= 60) {
    color = '#F59E0B'; // amber (60-79)
  }

  return (
    <div 
      className="relative flex items-center justify-center" 
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1E2D4A"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {/* Score Text */}
      <span 
        className="absolute font-mono-financial font-bold"
        style={{ 
          fontSize: size * 0.3, 
          color: color 
        }}
      >
        {score}
      </span>
    </div>
  );
};

export default TrustScoreRing;

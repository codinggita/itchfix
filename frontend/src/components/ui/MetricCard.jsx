import React from 'react';

/**
 * MetricCard - A dashboard card for displaying key performance indicators.
 * 
 * @param {string} title - The title of the metric.
 * @param {string|number} value - The value to display (e.g., ₹12.4L).
 * @param {string} color - The theme color for left border and value (#00C9A7, #F59E0B, etc.).
 * @param {string} subtext - Optional subtext or change indicator.
 */
const MetricCard = ({ title, value, color = '#00C9A7', subtext }) => {
  return (
    <div 
      className="bg-card-bg border border-border-main rounded-[14px] p-5 lg:p-6 overflow-hidden relative"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <h3 className="text-text-muted text-[11px] uppercase font-bold tracking-[0.08em] mb-2">
        {title}
      </h3>
      
      <div 
        className="font-mono-financial text-[28px] font-extrabold leading-tight"
        style={{ color: color }}
      >
        {value}
      </div>

      {subtext && (
        <div className="text-text-faint text-[11px] mt-2 font-medium">
          {subtext}
        </div>
      )}
    </div>
  );
};

export default MetricCard;

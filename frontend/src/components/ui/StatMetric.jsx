import React from 'react';

/**
 * StatMetric - A compact stat display for profile headers or grids.
 * 
 * @param {string} label - Metric name
 * @param {string|number} value - Main value
 * @param {string} subValue - Supporting text
 * @param {number} trend - Percentage change (positive/negative)
 */
const StatMetric = ({ label, value, subValue, trend }) => {
  return (
    <div className="flex flex-col gap-1 p-1">
      <span className="text-[10px] font-bold text-text-ghost uppercase tracking-[0.15em]">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-[20px] font-dm-mono font-bold text-text-primary">
          {value}
        </span>
        {trend !== undefined && (
          <span className={`text-[10px] font-bold ${trend > 0 ? 'text-trust-teal' : 'text-trust-red'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      {subValue && (
        <span className="text-[11px] text-text-muted font-medium">
          {subValue}
        </span>
      )}
    </div>
  );
};

export default StatMetric;

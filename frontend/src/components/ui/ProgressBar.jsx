import React from 'react';

/**
 * InventoryProgressBar - A progress bar for stock levels with color coding.
 * 
 * @param {string} label - Item name (e.g., Cotton Fabric)
 * @param {number} percentage - Stock percentage (0-100)
 */
const InventoryProgressBar = ({ label, percentage }) => {
  // Determine color based on percentage
  let colorClass = 'bg-trust-teal'; // OK
  let statusText = 'OK';
  let textColor = 'text-trust-teal';

  if (percentage <= 10) {
    colorClass = 'bg-trust-red';
    statusText = 'CRITICAL';
    textColor = 'text-trust-red';
  } else if (percentage <= 30) {
    colorClass = 'bg-trust-amber';
    statusText = 'LOW';
    textColor = 'text-trust-amber';
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-[13px] font-semibold text-text-secondary">{label}</span>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${textColor}`}>
            {statusText}
          </span>
          <span className="font-mono-financial text-[13px] text-text-primary">
            {percentage}%
          </span>
        </div>
      </div>
      
      <div className="h-2 w-full bg-border-main rounded-full overflow-hidden">
        <div 
          className={`h-full ${colorClass} transition-all duration-700 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default InventoryProgressBar;

import React from 'react';

/**
 * FilterPill - A clickable filter toggle for lists and tables.
 * 
 * @param {string} label - Filter name
 * @param {boolean} isActive - Selection state
 * @param {number} count - Optional count badge
 * @param {function} onClick - Click handler
 */
const FilterPill = ({ label, isActive, count, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-1.5 rounded-pill border transition-all duration-200
        ${isActive 
          ? 'bg-trust-teal text-sidebar-bg border-trust-teal font-bold shadow-lg shadow-trust-teal/20' 
          : 'bg-input-bg text-text-muted border-border-main hover:border-text-faint hover:text-text-secondary'}
      `}
    >
      <span className="text-[11px] uppercase tracking-wider">{label}</span>
      {count !== undefined && (
        <span className={`
          text-[10px] font-dm-mono px-1.5 rounded-full
          ${isActive ? 'bg-sidebar-bg/20 text-sidebar-bg' : 'bg-border-main text-text-ghost'}
        `}>
          {count}
        </span>
      )}
    </button>
  );
};

export default FilterPill;

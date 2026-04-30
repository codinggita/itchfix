import React from 'react';

/**
 * Divider - A simple line to separate sections.
 * 
 * @param {string} orientation - 'horizontal' or 'vertical'
 * @param {string} label - Optional text in the middle
 */
const Divider = ({ orientation = 'horizontal', label, className = '' }) => {
  if (orientation === 'vertical') {
    return (
      <div className={`w-[1px] h-full bg-border-main mx-4 ${className}`}></div>
    );
  }

  return (
    <div className={`relative flex items-center w-full my-6 ${className}`}>
      <div className="flex-1 border-t border-border-main"></div>
      {label && (
        <span className="px-4 text-[10px] font-bold text-text-ghost uppercase tracking-[0.2em] whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="flex-1 border-t border-border-main"></div>
    </div>
  );
};

export default Divider;

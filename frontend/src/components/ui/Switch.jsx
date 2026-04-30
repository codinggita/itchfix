import React from 'react';

/**
 * Switch - A toggle switch component for settings and boolean options.
 * 
 * @param {boolean} checked - Current state
 * @param {function} onChange - Toggle handler
 * @param {string} label - Optional label
 */
const Switch = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)} 
        />
        <div className={`
          w-10 h-5 rounded-full transition-colors duration-200
          ${checked ? 'bg-trust-teal' : 'bg-border-main'}
        `}></div>
        <div className={`
          absolute top-1 left-1 bg-white w-3 h-3 rounded-full transition-transform duration-200
          ${checked ? 'translate-x-5' : 'translate-x-0'}
        `}></div>
      </div>
      {label && (
        <span className="text-[13px] font-bold text-text-secondary group-hover:text-text-primary transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;

import React from 'react';
import { Check } from 'lucide-react';

/**
 * Checkbox - A custom checkbox component for TrustBiz.
 * 
 * @param {boolean} checked - Current state
 * @param {function} onChange - Toggle handler
 * @param {string} label - Optional label
 */
const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group w-fit">
      <div className="relative">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)} 
        />
        <div className={`
          w-5 h-5 rounded-[4px] border-2 transition-all duration-200 flex items-center justify-center
          ${checked ? 'bg-trust-teal border-trust-teal' : 'bg-input-bg border-border-main group-hover:border-text-faint'}
        `}>
          {checked && <Check size={14} className="text-sidebar-bg stroke-[3]" />}
        </div>
      </div>
      {label && (
        <span className="text-[13px] font-bold text-text-secondary group-hover:text-text-primary transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;

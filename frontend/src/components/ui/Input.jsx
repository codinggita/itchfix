import React from 'react';

/**
 * Input - Reusable input component following TrustBiz design system.
 * 
 * @param {string} label - Optional label for the input
 * @param {string} error - Optional error message
 * @param {React.ReactNode} icon - Optional icon to display on the left
 */
const Input = ({ 
  label, 
  error, 
  icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-[11px] font-bold uppercase text-text-muted tracking-[0.08em] ml-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint">
            {icon}
          </div>
        )}
        
        <input
          className={`
            w-full bg-input-bg border border-border-main rounded-[8px] px-4 py-2.5 
            text-[13px] text-text-primary placeholder:text-text-ghost
            focus:outline-none focus:border-trust-teal/50 transition-all
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-trust-red/50 focus:border-trust-red' : ''}
            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <span className="text-[11px] text-trust-red font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

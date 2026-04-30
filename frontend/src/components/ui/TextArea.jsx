import React from 'react';

/**
 * TextArea - A multi-line text input for TrustBiz.
 * 
 * @param {string} label - Input label
 * @param {string} error - Error message
 * @param {number} rows - Number of visible text lines
 */
const TextArea = ({ label, error, rows = 4, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-[11px] font-bold uppercase text-text-muted tracking-[0.08em] ml-1">
          {label}
        </label>
      )}
      
      <textarea
        rows={rows}
        className={`
          w-full bg-input-bg border border-border-main rounded-[8px] px-4 py-2.5 
          text-[13px] text-text-primary placeholder:text-text-ghost
          focus:outline-none focus:border-trust-teal/50 transition-all resize-none
          ${error ? 'border-trust-red/50 focus:border-trust-red' : ''}
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-[11px] text-trust-red font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextArea;

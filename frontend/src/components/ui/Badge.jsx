import React from 'react';

/**
 * Badge - A fully rounded pill/badge component for TrustBiz.
 * 
 * @param {string} variant - 'teal', 'amber', 'red', 'purple', 'pink', 'ghost'
 * @param {string} prefix - Optional prefix character/icon
 * @param {React.ReactNode} children - Badge content
 */
const Badge = ({ 
  variant = 'teal', 
  prefix, 
  children, 
  className = '' 
}) => {
  const variants = {
    teal: 'bg-trust-teal/10 text-trust-teal border-trust-teal/20',
    amber: 'bg-trust-amber/10 text-trust-amber border-trust-amber/20',
    red: 'bg-trust-red/10 text-trust-red border-trust-red/20',
    purple: 'bg-trust-purple/10 text-trust-purple border-trust-purple/20',
    pink: 'bg-trust-pink/10 text-trust-pink border-trust-pink/20',
    ghost: 'bg-transparent text-text-muted border-border-main'
  };

  return (
    <div className={`
      inline-flex items-center px-3 py-1 rounded-[20px] border text-[10px] font-bold uppercase tracking-wider
      ${variants[variant]} ${className}
    `}>
      {prefix && <span className="mr-1.5">{prefix}</span>}
      {children}
    </div>
  );
};

export default Badge;

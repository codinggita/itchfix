import React from 'react';

/**
 * Button - Reusable button component following TrustBiz design system.
 * 
 * @param {string} variant - 'primary', 'ghost', 'danger'
 * @param {boolean} fullWidth - If true, button takes 100% width
 * @param {React.ReactNode} children - Button content
 */
const Button = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "px-6 py-2.5 rounded-[10px] font-dm-sans font-bold text-[13px] transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-trust-teal text-sidebar-bg hover:bg-trust-teal/90",
    ghost: "bg-transparent border border-border-main text-text-muted hover:text-text-secondary hover:border-text-muted/30",
    danger: "bg-[#E53E3E22] border border-[#E53E3E44] text-trust-red hover:bg-[#E53E3E33]"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

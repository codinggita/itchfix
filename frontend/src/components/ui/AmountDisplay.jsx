import React from 'react';

/**
 * AmountDisplay - A specialized component for currency values.
 * Strictly follows the DM Mono font rule for financial numbers.
 * 
 * @param {number|string} value - The numerical value
 * @param {string} size - 'sm', 'md', 'lg', 'xl'
 * @param {string} color - Custom hex or text class
 * @param {boolean} showSymbol - Whether to show ₹ symbol
 */
const AmountDisplay = ({ 
  value, 
  size = 'md', 
  color = 'text-text-primary',
  showSymbol = true 
}) => {
  const sizes = {
    sm: 'text-[12px]',
    md: 'text-[15px]',
    lg: 'text-[22px]',
    xl: 'text-[28px]'
  };

  // Simple formatter for Indian numbering system if needed
  const formattedValue = typeof value === 'number' 
    ? new Intl.NumberFormat('en-IN').format(value)
    : value;

  return (
    <div className={`font-dm-mono font-bold inline-flex items-center gap-1 ${sizes[size]} ${color}`}>
      {showSymbol && <span className="opacity-70 text-[0.85em]">₹</span>}
      <span>{formattedValue}</span>
    </div>
  );
};

export default AmountDisplay;

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Dropdown - A custom select component for TrustBiz.
 * 
 * @param {string} label - Input label
 * @param {Array} options - Array of { label, value }
 * @param {function} onChange - Value change handler
 * @param {string} placeholder - Placeholder text
 */
const Dropdown = ({ label, options = [], onChange, placeholder = "Select option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option.value);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full relative" ref={dropdownRef}>
      {label && (
        <label className="text-[11px] font-bold uppercase text-text-muted tracking-[0.08em] ml-1">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full bg-input-bg border border-border-main rounded-[8px] px-4 py-2.5 
          text-[13px] flex items-center justify-between transition-all
          ${selected ? 'text-text-primary' : 'text-text-ghost'}
          ${isOpen ? 'border-trust-teal/50 ring-1 ring-trust-teal/20' : 'hover:border-text-faint'}
        `}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-card-bg border border-border-main rounded-[8px] shadow-2xl z-[60] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar py-1">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`
                  w-full px-4 py-2 text-left text-[13px] transition-colors
                  ${selected?.value === option.value ? 'bg-trust-teal/10 text-trust-teal font-bold' : 'text-text-secondary hover:bg-white/5'}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

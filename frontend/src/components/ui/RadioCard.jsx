import React from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * RadioCard - A selectable card used for choosing between major options (e.g., Business Type).
 * 
 * @param {string} id - Unique identifier
 * @param {string} name - Group name
 * @param {string} label - Title
 * @param {string} description - Detail text
 * @param {React.ReactNode} icon - Leading icon
 * @param {string} selected - Currently selected ID
 * @param {function} onChange - Selection handler
 */
const RadioCard = ({ id, name, label, description, icon, selected, onChange }) => {
  const isSelected = selected === id;

  return (
    <label className={`
      relative flex flex-col gap-4 p-5 rounded-card border-2 cursor-pointer transition-all duration-200
      ${isSelected ? 'bg-trust-teal/5 border-trust-teal shadow-lg shadow-trust-teal/10' : 'bg-card-bg border-border-main hover:border-text-faint'}
    `}>
      <input 
        type="radio" 
        name={name} 
        className="sr-only" 
        checked={isSelected} 
        onChange={() => onChange(id)} 
      />
      
      <div className="flex justify-between items-start">
        <div className={`
          w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors
          ${isSelected ? 'bg-trust-teal text-sidebar-bg' : 'bg-border-main/20 text-text-muted'}
        `}>
          {icon}
        </div>
        {isSelected && (
          <CheckCircle2 size={18} className="text-trust-teal animate-in zoom-in duration-300" />
        )}
      </div>

      <div>
        <h4 className={`text-[14px] font-bold uppercase tracking-wider transition-colors ${isSelected ? 'text-trust-teal' : 'text-text-primary'}`}>
          {label}
        </h4>
        <p className="text-[12px] text-text-muted mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </label>
  );
};

export default RadioCard;

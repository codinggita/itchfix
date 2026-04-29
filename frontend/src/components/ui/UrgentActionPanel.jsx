import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

/**
 * UrgentActionPanel - A red-bordered panel for critical alerts and actions.
 * 
 * @param {string} title - Action title
 * @param {string} description - Brief description
 * @param {string} buttonText - Action button text
 */
const UrgentActionPanel = ({ title, description, buttonText, onAction }) => {
  return (
    <div className="bg-trust-red/5 border border-trust-red/30 rounded-card p-5 flex items-center gap-4 relative overflow-hidden">
      {/* Accent Background Glow */}
      <div className="absolute -left-4 -top-4 w-16 h-16 bg-trust-red/10 blur-2xl rounded-full"></div>
      
      <div className="w-10 h-10 rounded-full bg-trust-red/20 flex items-center justify-center text-trust-red shrink-0">
        <AlertCircle size={20} />
      </div>

      <div className="flex-1 space-y-1">
        <h4 className="text-[14px] font-bold text-text-primary uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-[12px] text-text-secondary">
          {description}
        </p>
      </div>

      <button 
        onClick={onAction}
        className="flex items-center gap-2 bg-trust-red text-white px-4 py-2 rounded-button text-[12px] font-bold hover:bg-trust-red/90 transition-colors shadow-lg shadow-trust-red/20"
      >
        {buttonText}
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default UrgentActionPanel;

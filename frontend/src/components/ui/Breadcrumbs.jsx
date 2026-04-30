import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Breadcrumbs - Navigation trail component.
 * 
 * @param {Array} items - Array of { label, path } objects
 */
const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <div className={`
              flex items-center text-[11px] font-bold uppercase tracking-widest transition-colors
              ${isLast ? 'text-text-primary' : 'text-text-ghost hover:text-text-muted cursor-pointer'}
            `}>
              {item.label}
            </div>
            {!isLast && (
              <ChevronRight size={12} className="text-text-ghost" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

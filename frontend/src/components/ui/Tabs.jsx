import React from 'react';

/**
 * Tabs - A simple tab navigation component.
 * 
 * @param {Array} items - Array of { label, id } objects
 * @param {string} activeTab - Currently active tab id
 * @param {function} onTabChange - Change handler
 */
const Tabs = ({ items = [], activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-border-main">
      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] transition-all relative
              ${isActive ? 'text-trust-teal' : 'text-text-ghost hover:text-text-muted'}
            `}
          >
            {item.label}
            {isActive && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-trust-teal rounded-full animate-in fade-in duration-300"></div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;

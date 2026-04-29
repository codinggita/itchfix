import React from 'react';
import { Search } from 'lucide-react';

/**
 * SearchBar - A specialized search input for the top navbar or lists.
 * 
 * @param {string} placeholder - Input placeholder
 * @param {number} width - Custom width in px (default 280)
 */
const SearchBar = ({ placeholder = "Search...", width = 280, onChange }) => {
  return (
    <div className="relative group" style={{ width }}>
      <Search 
        size={14} 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-trust-teal transition-colors" 
      />
      <input 
        type="text" 
        onChange={onChange}
        placeholder={placeholder} 
        className="w-full bg-input-bg border border-border-main rounded-radius-input py-1.5 pl-9 pr-4 text-[12px] text-text-primary placeholder:text-text-ghost focus:outline-none focus:border-trust-teal/50 focus:ring-1 focus:ring-trust-teal/20 transition-all"
      />
    </div>
  );
};

export default SearchBar;

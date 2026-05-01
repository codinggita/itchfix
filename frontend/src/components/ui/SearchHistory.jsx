import React from 'react';
import { motion } from 'framer-motion';
import { History, Search, X, ArrowUpRight } from 'lucide-react';

const SearchHistory = ({ items = [], onClear, onItemClick, onRemoveItem }) => {
  return (
    <div className="bg-card-bg border border-border-main rounded-card overflow-hidden">
      <div className="px-5 py-3 border-b border-border-main flex items-center justify-between bg-page-bg/30">
        <div className="flex items-center gap-2 text-text-secondary">
          <History size={16} />
          <h4 className="text-[12px] font-bold uppercase tracking-wider">Recent Searches</h4>
        </div>
        {items.length > 0 && (
          <button 
            onClick={onClear}
            className="text-[10px] font-bold text-text-ghost hover:text-trust-red uppercase tracking-widest transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="divide-y divide-border-main/50">
        {items.length === 0 ? (
          <div className="p-8 text-center space-y-2">
            <Search size={24} className="mx-auto text-text-ghost/30" />
            <p className="text-[11px] text-text-ghost uppercase font-bold tracking-widest">No recent searches</p>
          </div>
        ) : (
          items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: 'rgba(var(--color-page-bg), 0.5)' }}
              className="group flex items-center justify-between px-5 py-3 cursor-pointer transition-colors"
              onClick={() => onItemClick?.(item)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-page-bg border border-border-main flex items-center justify-center text-text-ghost group-hover:text-trust-teal group-hover:border-trust-teal/30 transition-all">
                  <Search size={14} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary group-hover:text-trust-teal transition-colors">{item.query}</p>
                  <p className="text-[10px] text-text-ghost font-mono uppercase tracking-tighter">{item.category} • {item.timestamp}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => { e.stopPropagation(); onRemoveItem?.(item.id); }}
                  className="p-1.5 hover:bg-trust-red/10 hover:text-trust-red rounded-md text-text-ghost transition-all"
                >
                  <X size={14} />
                </button>
                <ArrowUpRight size={14} className="text-trust-teal" />
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchHistory;

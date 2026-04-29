import React from 'react';
import { Search, Bell, Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="h-[48px] bg-page-bg border-b border-border-main flex items-center justify-between px-6 sticky top-0 z-40 ml-[220px]">
      {/* Left: Search */}
      <div className="relative w-[280px]">
        <Search 
          size={14} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" 
        />
        <input 
          type="text" 
          placeholder="Search suppliers, deals, or GST..." 
          className="w-full bg-input-bg border border-border-main rounded-radius-input py-1.5 pl-9 pr-4 text-[12px] text-text-primary placeholder:text-text-ghost focus:outline-none focus:border-trust-teal/50 transition-colors"
        />
      </div>

      {/* Right: Notifications & Plan */}
      <div className="flex items-center gap-4">
        {/* Growth Plan Pill */}
        <div className="flex items-center gap-2 bg-trust-purple/10 border border-trust-purple/20 px-3 py-1 rounded-pill">
          <Zap size={12} className="text-trust-purple" fill="currentColor" />
          <span className="text-[10px] font-bold text-trust-purple uppercase tracking-wider">
            Growth Plan
          </span>
        </div>

        {/* Notification Bell */}
        <button className="relative p-1.5 text-text-muted hover:text-text-secondary transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-trust-red border-2 border-page-bg rounded-full flex items-center justify-center text-[8px] font-bold text-white">
            3
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

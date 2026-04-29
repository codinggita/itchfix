import React from 'react';
import { User } from 'lucide-react';

/**
 * UserProfileCard - A compact profile card used in the sidebar.
 * 
 * @param {string} name - User name
 * @param {string} plan - Subscription plan (e.g., Growth)
 * @param {boolean} isVerified - MSME verification status
 */
const UserProfileCard = ({ name, plan, isVerified }) => {
  return (
    <div className="bg-card-bg/50 rounded-[10px] p-3 flex items-center gap-3 border border-border-main/50 hover:border-trust-teal/30 transition-all cursor-pointer group">
      <div className="w-9 h-9 rounded-full bg-trust-teal/10 flex items-center justify-center text-trust-teal border border-trust-teal/20 group-hover:bg-trust-teal/20 transition-all">
        <User size={18} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-bold text-text-primary truncate group-hover:text-trust-teal transition-colors">
          {name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          {isVerified && (
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-trust-teal animate-pulse"></span>
              <span className="text-[9px] font-extrabold text-trust-teal uppercase tracking-widest">
                MSME Verified
              </span>
            </div>
          )}
          {!isVerified && (
            <span className="text-[9px] font-bold text-text-ghost uppercase tracking-wider">
              {plan} Plan
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

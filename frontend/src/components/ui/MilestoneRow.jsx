import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

/**
 * MilestoneRow - A row showing a specific milestone in an escrow deal.
 * 
 * @param {string} label - Milestone name
 * @param {string} amount - ₹ amount
 * @param {boolean} isReleased - Whether funds are released
 * @param {boolean} isCurrent - If this is the active milestone
 */
const MilestoneRow = ({ label, amount, isReleased, isCurrent }) => {
  return (
    <div className={`
      flex items-center gap-4 p-4 rounded-radius-input border transition-all duration-200
      ${isCurrent ? 'bg-trust-purple/5 border-trust-purple/30 shadow-sm' : 'bg-input-bg/50 border-border-main/50'}
    `}>
      <div className={`shrink-0 ${isReleased ? 'text-trust-teal' : isCurrent ? 'text-trust-purple' : 'text-text-ghost'}`}>
        {isReleased ? <CheckCircle2 size={20} /> : <Circle size={20} />}
      </div>
      
      <div className="flex-1">
        <h5 className={`text-[13px] font-bold ${isReleased ? 'text-text-faint line-through' : 'text-text-secondary'}`}>
          {label}
        </h5>
        <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
          {isReleased ? 'Released' : isCurrent ? 'In Progress' : 'Pending'}
        </p>
      </div>

      <div className={`font-dm-mono font-bold text-[14px] ${isReleased ? 'text-text-faint' : 'text-text-primary'}`}>
        {amount}
      </div>
    </div>
  );
};

export default MilestoneRow;

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, MoreVertical, CreditCard } from 'lucide-react';

const BankCard = ({ 
  bankName, 
  accountNumber, 
  accountType = 'Current Account', 
  isPrimary = false,
  status = 'active',
  onMenuClick 
}) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-card-bg border border-border-main rounded-card p-5 relative overflow-hidden group"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
        <Building2 size={80} />
      </div>

      <div className="flex justify-between items-start relative z-10">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-page-bg border border-border-main flex items-center justify-center text-trust-teal">
            <Building2 size={24} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-text-primary leading-tight">{bankName}</h4>
              {isPrimary && (
                <span className="text-[10px] font-bold bg-trust-teal/10 text-trust-teal px-2 py-0.5 rounded-full border border-trust-teal/20 uppercase tracking-tighter">
                  Primary
                </span>
              )}
            </div>
            <p className="text-[12px] text-text-muted">{accountType}</p>
          </div>
        </div>
        
        <button 
          onClick={onMenuClick}
          className="p-1 hover:bg-page-bg rounded-md text-text-ghost transition-colors"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="mt-8 flex items-end justify-between relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-[0.15em]">Account Number</p>
          <p className="text-lg font-mono font-bold text-text-secondary tracking-wider">
            •••• •••• {accountNumber.slice(-4)}
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1.5 text-trust-teal">
            <CheckCircle2 size={14} />
            <span className="text-[11px] font-bold uppercase tracking-wider">Verified</span>
          </div>
          <CreditCard size={20} className="text-text-ghost/30" />
        </div>
      </div>

      {/* Status Bar */}
      <div className={`absolute bottom-0 left-0 h-1 bg-trust-teal transition-all duration-300 ${isPrimary ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </motion.div>
  );
};

export default BankCard;

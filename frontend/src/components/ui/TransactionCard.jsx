import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import StatusPill from './StatusPill';
import AmountDisplay from './AmountDisplay';

const TransactionCard = ({ 
  id, 
  amount, 
  status = 'pending', 
  date, 
  businessName, 
  type = 'payment', // 'payment' or 'receipt'
  isEscrow = false,
  onClick 
}) => {
  const isIncoming = type === 'receipt';
  
  const statusStyles = {
    verified: 'border-l-trust-teal',
    pending: 'border-l-trust-amber',
    risky: 'border-l-trust-red',
    completed: 'border-l-trust-teal',
    failed: 'border-l-trust-red'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={`group relative bg-card-bg border border-border-main rounded-card p-4 flex flex-col gap-3 transition-all cursor-pointer hover:shadow-lg hover:shadow-trust-teal/5 border-l-4 ${statusStyles[status] || 'border-l-border-main'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isIncoming ? 'bg-trust-teal/10 text-trust-teal' : 'bg-trust-amber/10 text-trust-amber'}`}>
            {isIncoming ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
          </div>
          <div>
            <h4 className="font-bold text-text-primary text-sm truncate max-w-[150px]">{businessName}</h4>
            <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-mono">
              <Clock size={10} />
              {date}
            </div>
          </div>
        </div>
        <div className="text-right">
          <AmountDisplay 
            value={amount} 
            size="sm" 
            color={isIncoming ? 'text-trust-teal' : 'text-text-primary'} 
            showSymbol 
          />
          <p className="text-[10px] text-text-ghost font-mono uppercase mt-0.5 tracking-wider">#{id}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border-main/50">
        <div className="flex items-center gap-2">
          <StatusPill status={status} size="sm" />
          {isEscrow && (
            <div className="flex items-center gap-1 text-[10px] font-bold text-trust-teal uppercase tracking-tighter bg-trust-teal/5 px-2 py-0.5 rounded-full border border-trust-teal/20">
              <ShieldCheck size={10} />
              Escrow Protected
            </div>
          )}
        </div>
        {!isEscrow && status === 'pending' && (
          <div className="flex items-center gap-1 text-[10px] font-medium text-trust-amber">
            <AlertCircle size={10} />
            <span className="hidden sm:inline">Verification Pending</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TransactionCard;

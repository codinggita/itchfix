import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MessageCircle, FileText, Gavel } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

const DisputeCard = ({ 
  transactionId, 
  subject, 
  status = 'open', // 'open', 'resolved', 'under_review'
  dateRaised, 
  lastUpdate,
  description 
}) => {
  const statusConfig = {
    open: { label: 'Open Dispute', variant: 'danger', icon: <AlertTriangle size={14} /> },
    under_review: { label: 'Under Review', variant: 'warning', icon: <Gavel size={14} /> },
    resolved: { label: 'Resolved', variant: 'success', icon: <FileText size={14} /> }
  };

  const config = statusConfig[status] || statusConfig.open;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card-bg border border-trust-red/20 rounded-card p-5 relative overflow-hidden"
    >
      {/* Risk Gradient Overlay */}
      <div className="absolute top-0 left-0 w-1 h-full bg-trust-red" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-text-primary">{subject}</h4>
            <Badge variant={config.variant} size="sm">
              <span className="flex items-center gap-1">
                {config.icon}
                {config.label}
              </span>
            </Badge>
          </div>
          <p className="text-[11px] font-mono text-text-ghost uppercase tracking-wider">ID: {transactionId}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-text-muted font-bold uppercase">Raised On</p>
          <p className="text-[12px] text-text-secondary font-mono">{dateRaised}</p>
        </div>
      </div>

      <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border-main">
        <div className="flex items-center gap-2 text-[11px] text-text-ghost">
          <MessageCircle size={12} />
          Last update {lastUpdate}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">View Details</Button>
          <Button variant="outline" size="sm" className="border-trust-red/20 text-trust-red hover:bg-trust-red/5">
            Respond
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DisputeCard;

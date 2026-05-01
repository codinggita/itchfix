import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Info } from 'lucide-react';

const TrustFactorItem = ({ 
  label, 
  impact = 'positive', // 'positive', 'negative', 'neutral'
  scoreEffect, 
  description 
}) => {
  const impactStyles = {
    positive: { 
      icon: <Plus size={12} />, 
      color: 'text-trust-teal', 
      bg: 'bg-trust-teal/10', 
      border: 'border-trust-teal/20' 
    },
    negative: { 
      icon: <Minus size={12} />, 
      color: 'text-trust-red', 
      bg: 'bg-trust-red/10', 
      border: 'border-trust-red/20' 
    },
    neutral: { 
      icon: <Info size={12} />, 
      color: 'text-text-muted', 
      bg: 'bg-page-bg', 
      border: 'border-border-main' 
    }
  };

  const style = impactStyles[impact] || impactStyles.neutral;

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`group flex items-center justify-between p-3 rounded-lg border transition-all ${style.bg} ${style.border}`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${style.color} border ${style.border}`}>
          {style.icon}
        </div>
        <div className="space-y-0.5">
          <h5 className="text-sm font-bold text-text-primary">{label}</h5>
          <p className="text-[11px] text-text-muted">{description}</p>
        </div>
      </div>
      
      <div className={`text-right ${style.color}`}>
        <span className="text-sm font-mono font-bold">
          {impact === 'positive' ? '+' : impact === 'negative' ? '-' : ''}
          {scoreEffect}
        </span>
        <p className="text-[9px] font-bold uppercase tracking-tighter opacity-70">Points</p>
      </div>
    </motion.div>
  );
};

export default TrustFactorItem;

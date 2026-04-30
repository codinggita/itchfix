import React from 'react';
import { ShieldCheck, Lock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * TrustBadge - Animated achievement/verification badges.
 * 
 * @param {string} type - 'msme', 'escrow', 'rated'
 * @param {boolean} locked - If true, shows grayscale/locked state
 */
const TrustBadge = ({ type = 'msme', locked = false }) => {
  const configs = {
    msme: {
      icon: <ShieldCheck size={24} />,
      label: 'MSME Verified',
      color: 'text-trust-teal',
      bg: 'bg-trust-teal/10',
      border: 'border-trust-teal/30'
    },
    escrow: {
      icon: <Lock size={24} />,
      label: 'Escrow Safe',
      color: 'text-trust-purple',
      bg: 'bg-trust-purple/10',
      border: 'border-trust-purple/30'
    },
    rated: {
      icon: <Star size={24} />,
      label: 'Top Rated',
      color: 'text-trust-amber',
      bg: 'bg-trust-amber/10',
      border: 'border-trust-amber/30'
    }
  };

  const config = configs[type];

  return (
    <motion.div
      whileHover={!locked ? { scale: 1.05 } : {}}
      className={`
        relative w-32 h-32 flex flex-col items-center justify-center gap-3 rounded-[24px] border-2 transition-all
        ${locked ? 'grayscale opacity-30 border-border-main bg-white/5' : `${config.bg} ${config.border} shadow-lg`}
      `}
    >
      {!locked && (
        <div className={`absolute inset-0 rounded-[24px] blur-xl opacity-20 ${config.bg}`}></div>
      )}
      
      <div className={`relative z-10 ${locked ? 'text-text-ghost' : config.color}`}>
        {config.icon}
      </div>
      
      <span className={`relative z-10 text-[10px] font-bold uppercase tracking-widest text-center px-2 ${locked ? 'text-text-ghost' : 'text-text-primary'}`}>
        {config.label}
      </span>

      {locked && (
        <div className="absolute top-2 right-2">
          <Lock size={12} className="text-text-ghost" />
        </div>
      )}
    </motion.div>
  );
};

export default TrustBadge;

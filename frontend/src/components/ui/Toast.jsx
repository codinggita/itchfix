import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info, X } from 'lucide-react';

/**
 * Toast - A floating notification component.
 * 
 * @param {string} message - Notification message
 * @param {string} type - 'success', 'error', 'warning', 'info'
 * @param {function} onClose - Function to remove the toast
 */
const Toast = ({ message, type = 'success', onClose }) => {
  const configs = {
    success: { icon: <CheckCircle2 size={18} />, color: 'text-trust-teal', bg: 'bg-[#0A2E1F]' },
    error: { icon: <XCircle size={18} />, color: 'text-trust-red', bg: 'bg-[#2E0A0A]' },
    warning: { icon: <AlertCircle size={18} />, color: 'text-trust-amber', bg: 'bg-[#2A1E05]' },
    info: { icon: <Info size={18} />, color: 'text-trust-purple', bg: 'bg-[#1A1E2E]' }
  };

  const config = configs[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className={`
        flex items-center gap-4 p-4 rounded-card border border-border-main shadow-2xl min-w-[300px]
        ${config.bg}
      `}
    >
      <div className={config.color}>{config.icon}</div>
      <p className="flex-1 text-[13px] font-bold text-text-primary">
        {message}
      </p>
      <button 
        onClick={onClose}
        className="text-text-ghost hover:text-text-primary transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

export default Toast;

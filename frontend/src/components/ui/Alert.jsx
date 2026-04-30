import React from 'react';
import { Info, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

/**
 * Alert - A contextual message component for feedback and warnings.
 * 
 * @param {string} variant - 'info', 'warning', 'success', 'danger'
 * @param {string} title - Alert title
 * @param {string} message - Alert description
 */
const Alert = ({ variant = 'info', title, message }) => {
  const variants = {
    info: {
      bg: 'bg-trust-purple/10',
      border: 'border-trust-purple/20',
      text: 'text-trust-purple',
      icon: <Info size={18} />
    },
    warning: {
      bg: 'bg-trust-amber/10',
      border: 'border-trust-amber/20',
      text: 'text-trust-amber',
      icon: <AlertCircle size={18} />
    },
    success: {
      bg: 'bg-trust-teal/10',
      border: 'border-trust-teal/20',
      text: 'text-trust-teal',
      icon: <CheckCircle2 size={18} />
    },
    danger: {
      bg: 'bg-trust-red/10',
      border: 'border-trust-red/20',
      text: 'text-trust-red',
      icon: <XCircle size={18} />
    }
  };

  const config = variants[variant];

  return (
    <div className={`${config.bg} border ${config.border} rounded-radius-input p-4 flex gap-3`}>
      <div className={config.text}>{config.icon}</div>
      <div className="space-y-1">
        {title && <h5 className={`text-[13px] font-bold uppercase tracking-wider ${config.text}`}>{title}</h5>}
        <p className="text-[12px] text-text-secondary leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default Alert;

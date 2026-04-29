import React from 'react';

/**
 * StatusPill - A rounded badge component for displaying status.
 * 
 * @param {string} status - The status type (paid, escrow, overdue, disputed, pending, verified, risky).
 * @param {string} label - Optional custom label.
 */
const StatusPill = ({ status = 'pending', label }) => {
  const statusConfig = {
    paid: {
      bg: 'bg-[#0A2E1F]',
      text: 'text-[#00C9A7]',
      label: 'Paid',
      prefix: null
    },
    escrow: {
      bg: 'bg-[#2A1E05]',
      text: 'text-[#F59E0B]',
      label: 'In Escrow',
      prefix: null
    },
    overdue: {
      bg: 'bg-[#2E0A0A]',
      text: 'text-[#E53E3E]',
      label: 'Overdue',
      prefix: null
    },
    disputed: {
      bg: 'bg-[#2E0A1A]',
      text: 'text-[#F472B6]',
      label: 'Disputed',
      prefix: null
    },
    pending: {
      bg: 'bg-[#1A1E2E]',
      text: 'text-[#818CF8]',
      label: 'Pending',
      prefix: null
    },
    verified: {
      bg: 'bg-[#0A2E1F]',
      text: 'text-[#00C9A7]',
      label: 'Verified',
      prefix: '✓'
    },
    risky: {
      bg: 'bg-[#2E0A0A]',
      text: 'text-[#E53E3E]',
      label: 'Risky',
      prefix: '⚠'
    }
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.pending;
  const displayLabel = label || config.label;

  return (
    <div className={`
      inline-flex items-center px-3 py-1 rounded-[20px] text-[11px] font-semibold tracking-[0.08em] uppercase
      ${config.bg} ${config.text}
    `}>
      {config.prefix && <span className="mr-1.5 text-[12px]">{config.prefix}</span>}
      {displayLabel}
    </div>
  );
};

export default StatusPill;

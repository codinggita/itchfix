import React from 'react';
import { Check, X } from 'lucide-react';

/**
 * VerificationGrid - Shows the status of GST, PAN, and Bank verifications.
 * 
 * @param {boolean} gst - GST verification status
 * @param {boolean} pan - PAN verification status
 * @param {boolean} bank - Bank verification status
 */
const VerificationGrid = ({ gst, pan, bank }) => {
  const items = [
    { label: 'GST Number', status: gst },
    { label: 'PAN Card', status: pan },
    { label: 'Bank Details', status: bank }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <div 
          key={item.label}
          className={`
            p-4 rounded-radius-input border flex items-center justify-between transition-all
            ${item.status 
              ? 'bg-trust-teal/5 border-trust-teal/20' 
              : 'bg-trust-red/5 border-trust-red/20'}
          `}
        >
          <span className={`text-[11px] font-bold uppercase tracking-wider ${item.status ? 'text-trust-teal' : 'text-trust-red'}`}>
            {item.label}
          </span>
          <div className={`
            w-6 h-6 rounded-full flex items-center justify-center
            ${item.status ? 'bg-trust-teal text-sidebar-bg' : 'bg-trust-red text-white'}
          `}>
            {item.status ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerificationGrid;

import React from 'react';
import TrustScoreRing from './TrustScoreRing';
import StatusPill from './StatusPill';
import { Check, X } from 'lucide-react';

/**
 * SupplierCard - Card component for the Supplier Network grid.
 */
const SupplierCard = ({ name, gst, score, verifiedFlags = {}, status, onClick }) => {
  return (
    <div 
      className="bg-card-bg border border-border-main rounded-card p-5 flex flex-col gap-4 hover:border-trust-teal/30 transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-text-primary font-dm-sans font-bold text-[15px] group-hover:text-trust-teal transition-colors truncate max-w-[140px]">
            {name}
          </h3>
          <p className="font-mono-financial text-[11px] text-text-muted tracking-wider">
            GST: {gst}
          </p>
        </div>
        <TrustScoreRing score={score} size={52} />
      </div>

      {/* Verification Flags */}
      <div className="flex gap-3 py-2 border-y border-border-main/50">
        {['GST', 'PAN', 'Bank'].map((type) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              verifiedFlags[type.toLowerCase()] 
                ? 'bg-trust-teal/20 text-trust-teal' 
                : 'bg-trust-red/20 text-trust-red'
            }`}>
              {verifiedFlags[type.toLowerCase()] ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
            </div>
            <span className="text-[10px] font-bold text-text-faint uppercase tracking-wider">{type}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-1">
        <StatusPill status={status} />
        <button className="text-[11px] font-bold text-trust-teal uppercase tracking-[0.08em] hover:underline">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default SupplierCard;

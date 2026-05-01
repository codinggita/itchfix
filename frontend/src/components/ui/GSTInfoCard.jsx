import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, FileCheck } from 'lucide-react';

const GSTInfoCard = ({ 
  gstin, 
  legalName, 
  status = 'Active', 
  filingStatus = 'Regular', 
  lastFiled,
  registrationDate
}) => {
  const isActive = status.toLowerCase() === 'active';

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-page-bg border border-border-main rounded-card p-6 space-y-6"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-trust-teal uppercase tracking-[0.2em]">Verified GSTIN</p>
          <h3 className="text-xl font-mono font-bold text-text-primary tracking-tight">{gstin}</h3>
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${isActive ? 'bg-trust-teal/5 border-trust-teal/20 text-trust-teal' : 'bg-trust-red/5 border-trust-red/20 text-trust-red'}`}>
          {isActive ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
          <span className="text-[11px] font-bold uppercase tracking-wider">{status}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Legal Name</p>
          <p className="text-sm font-bold text-text-secondary truncate">{legalName}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Taxpayer Type</p>
          <p className="text-sm font-bold text-text-secondary">{filingStatus}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Reg. Date</p>
          <div className="flex items-center gap-1.5 text-sm font-mono text-text-muted">
            <Clock size={12} />
            {registrationDate}
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Last Filed</p>
          <div className="flex items-center gap-1.5 text-sm font-mono text-text-muted">
            <FileCheck size={12} className="text-trust-teal" />
            {lastFiled}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border-main/50">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-text-ghost">Data fetched from GSTN Portal</span>
          <button className="text-[10px] font-bold text-trust-teal uppercase hover:underline">Download Certificate</button>
        </div>
      </div>
    </motion.div>
  );
};

export default GSTInfoCard;

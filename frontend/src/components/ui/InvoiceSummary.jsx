import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, DollarSign, Building } from 'lucide-react';
import AmountDisplay from './AmountDisplay';
import Button from './Button';
import Badge from './Badge';

const InvoiceSummary = ({ 
  invoiceNo, 
  date, 
  dueDate, 
  amount, 
  gstAmount, 
  status = 'pending',
  clientName 
}) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-card-bg border border-border-main rounded-card p-6 space-y-6"
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-xl bg-trust-teal/10 text-trust-teal flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-text-primary text-lg">Invoice {invoiceNo}</h4>
            <div className="flex items-center gap-2">
              <Badge variant={status === 'paid' ? 'success' : 'warning'} size="sm">
                {status.toUpperCase()}
              </Badge>
              <span className="text-[11px] text-text-muted font-mono">{date}</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="rounded-full px-3">
          <Download size={16} />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6 py-4 border-y border-border-main/50">
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest flex items-center gap-1.5">
            <Building size={10} /> Billed To
          </p>
          <p className="text-sm font-bold text-text-secondary truncate">{clientName}</p>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest flex items-center gap-1.5">
            <Calendar size={10} /> Due Date
          </p>
          <p className="text-sm font-bold text-trust-red font-mono">{dueDate}</p>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center text-[12px]">
          <span className="text-text-muted">Subtotal + GST</span>
          <span className="text-text-secondary font-mono">₹{gstAmount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-text-primary uppercase tracking-tighter">Total Amount</span>
          <AmountDisplay value={amount} size="md" color="text-trust-teal" showSymbol />
        </div>
      </div>

      <Button variant={status === 'paid' ? 'ghost' : 'primary'} fullWidth size="sm">
        {status === 'paid' ? 'View Receipt' : 'Pay via Escrow'}
      </Button>
    </motion.div>
  );
};

export default InvoiceSummary;

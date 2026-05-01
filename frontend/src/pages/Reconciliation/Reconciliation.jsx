import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  FileText,
  Banknote,
  Plus,
  Link as LinkIcon,
  Zap
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import SearchBar from '../../components/ui/SearchBar';

const Reconciliation = () => {
  const [matchingStatus, setMatchingStatus] = useState('pending');

  const transactions = [
    { id: 'TXN-001', bank: 'HDFC Bank', amount: '₹45,000', date: 'May 01, 2026', type: 'Inbound', status: 'pending' },
    { id: 'TXN-002', bank: 'Razorpay', amount: '₹12,400', date: 'Apr 30, 2026', type: 'Settlement', status: 'matched' },
    { id: 'TXN-003', bank: 'ICICI Bank', amount: '₹8,200', date: 'Apr 28, 2026', type: 'Inbound', status: 'unmatched' },
  ];

  const invoices = [
    { id: 'INV-8829', entity: 'Reliance Textiles', amount: '₹45,000', date: 'Apr 25, 2026', status: 'pending' },
    { id: 'INV-8830', entity: 'Tata Steel', amount: '₹12,400', date: 'Apr 22, 2026', status: 'paid' },
    { id: 'INV-8831', entity: 'Gujarat Chem', amount: '₹9,500', date: 'Apr 20, 2026', status: 'pending' },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Reconciliation', path: '/reconciliation' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight flex items-center gap-3">
            Payment Reconciliation <Badge variant="teal" size="sm" className="hidden sm:inline-flex">AI Powered</Badge>
          </h1>
          <p className="text-text-muted text-xs md:text-sm">Automatically match bank settlements with your sales invoices.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" className="flex-1 md:flex-none">
            <FileText size={16} className="mr-2" /> Export
          </Button>
          <Button variant="primary" size="sm" className="flex-1 md:flex-none">
            <RefreshCw size={16} className="mr-2" /> Sync
          </Button>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-card-bg border border-border-main rounded-card p-5 md:p-6 flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-trust-teal/10 text-trust-teal rounded-2xl flex items-center justify-center shrink-0">
            <CheckCircle2 size={20} className="md:size-6" />
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-text-ghost uppercase tracking-widest">Matched Today</p>
            <h3 className="text-lg md:text-xl font-display font-bold text-text-primary">12 Transactions</h3>
          </div>
        </div>
        <div className="bg-card-bg border border-border-main rounded-card p-5 md:p-6 flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-trust-amber/10 text-trust-amber rounded-2xl flex items-center justify-center shrink-0">
            <AlertCircle size={20} className="md:size-6" />
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-text-ghost uppercase tracking-widest">Pending Match</p>
            <h3 className="text-lg md:text-xl font-display font-bold text-text-primary">04 Transactions</h3>
          </div>
        </div>
        <div className="bg-card-bg border border-border-main rounded-card p-5 md:p-6 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-trust-purple/10 text-trust-purple rounded-2xl flex items-center justify-center shrink-0">
            <Banknote size={20} className="md:size-6" />
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-text-ghost uppercase tracking-widest">Total Reconciled</p>
            <h3 className="text-lg md:text-xl font-display font-bold text-text-primary">₹14.20L</h3>
          </div>
        </div>
      </div>

      {/* Matching Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative">
        {/* Connection Lines Decor (Static for now) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:flex items-center justify-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-border-main to-transparent" />
        </div>

        {/* Left: Bank Statements */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-base md:text-lg font-display font-bold text-text-primary">Bank Statements</h2>
            <div className="flex gap-2">
              <button className="text-[10px] font-bold text-text-ghost uppercase tracking-widest hover:text-text-muted">Latest</button>
              <button className="text-[10px] font-bold text-text-ghost uppercase tracking-widest hover:text-text-muted">Filter</button>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {transactions.map((txn) => (
              <motion.div 
                key={txn.id}
                whileHover={{ x: 4 }}
                className={`bg-card-bg border rounded-xl p-3 md:p-4 flex items-center justify-between cursor-pointer transition-all ${
                  txn.status === 'matched' ? 'border-trust-teal/30 opacity-60' : 'border-border-main hover:border-trust-teal/50'
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ${txn.type === 'Inbound' ? 'bg-trust-teal/10 text-trust-teal' : 'bg-trust-purple/10 text-trust-purple'}`}>
                    <Banknote size={16} className="md:size-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-text-primary truncate">{txn.bank}</h4>
                    <p className="text-[9px] md:text-[10px] text-text-muted font-mono truncate">{txn.id} • {txn.date}</p>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <p className="text-sm font-mono font-bold text-text-primary">{txn.amount}</p>
                  {txn.status === 'matched' && <span className="text-[8px] md:text-[9px] font-bold text-trust-teal uppercase">Matched</span>}
                </div>
              </motion.div>
            ))}
            <Button variant="outline" fullWidth size="sm" className="border-dashed border-border-main text-text-ghost hover:text-text-muted py-3">
              <Plus size={14} className="mr-2" /> Add Statement
            </Button>
          </div>
        </div>

        {/* Right: Sales Invoices */}
        <div className="space-y-4 md:space-y-6 mt-4 lg:mt-0">
          <div className="flex justify-between items-center">
            <h2 className="text-base md:text-lg font-display font-bold text-text-primary">Sales Invoices</h2>
            <div className="flex gap-2">
              <button className="text-[10px] font-bold text-text-ghost uppercase tracking-widest hover:text-text-muted">Unpaid</button>
              <button className="text-[10px] font-bold text-text-ghost uppercase tracking-widest hover:text-text-muted">Search</button>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {invoices.map((inv) => (
              <motion.div 
                key={inv.id}
                whileHover={{ x: -4 }}
                className={`bg-card-bg border rounded-xl p-3 md:p-4 flex items-center justify-between cursor-pointer transition-all ${
                  inv.status === 'paid' ? 'border-trust-teal/30 opacity-60' : 'border-border-main hover:border-trust-teal/50'
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 ${inv.status === 'paid' ? 'bg-trust-teal/10 text-trust-teal' : 'bg-trust-amber/10 text-trust-amber'}`}>
                    <FileText size={16} className="md:size-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-text-primary truncate">{inv.entity}</h4>
                    <p className="text-[9px] md:text-[10px] text-text-muted font-mono truncate">{inv.id} • {inv.date}</p>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <p className="text-sm font-mono font-bold text-text-primary">{inv.amount}</p>
                  <button className="text-[8px] md:text-[9px] font-bold text-trust-teal uppercase hover:underline flex items-center gap-1 justify-end">
                    <LinkIcon size={10} /> Match Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Suggestion Banner */}
      <section className="bg-trust-purple/5 border border-trust-purple/20 rounded-card p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-trust-purple/20 rounded-full flex items-center justify-center text-trust-purple shrink-0 animate-pulse">
            <Zap size={20} className="md:size-6" fill="currentColor" />
          </div>
          <div className="space-y-1 min-w-0">
            <h3 className="text-base md:text-lg font-bold text-text-primary truncate">AI Matching Suggestion</h3>
            <p className="text-xs md:text-sm text-text-muted truncate">3 transactions perfectly match with invoices.</p>
          </div>
        </div>
        <Button variant="primary" className="w-full sm:w-auto bg-trust-purple hover:bg-trust-purple/90 shadow-lg shadow-trust-purple/20 text-xs md:text-sm py-3 md:py-2">
          Auto-Match All <ArrowRight size={16} className="ml-2" />
        </Button>
      </section>
    </div>
  );
};

export default Reconciliation;

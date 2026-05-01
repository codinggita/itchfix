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
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Reconciliation', path: '/reconciliation' }]} />
          <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight flex items-center gap-3">
            Payment Reconciliation <Badge variant="teal" size="sm">AI Powered</Badge>
          </h1>
          <p className="text-text-muted text-sm">Automatically match bank settlements with your sales invoices.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <FileText size={16} className="mr-2" /> Export Report
          </Button>
          <Button variant="primary" size="sm">
            <RefreshCw size={16} className="mr-2" /> Sync Statements
          </Button>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-bg border border-border-main rounded-card p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-trust-teal/10 text-trust-teal rounded-2xl flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Matched Today</p>
            <h3 className="text-xl font-display font-bold text-text-primary">12 Transactions</h3>
          </div>
        </div>
        <div className="bg-card-bg border border-border-main rounded-card p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-trust-amber/10 text-trust-amber rounded-2xl flex items-center justify-center">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Pending Match</p>
            <h3 className="text-xl font-display font-bold text-text-primary">04 Transactions</h3>
          </div>
        </div>
        <div className="bg-card-bg border border-border-main rounded-card p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-trust-purple/10 text-trust-purple rounded-2xl flex items-center justify-center">
            <Banknote size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Total Reconciled</p>
            <h3 className="text-xl font-display font-bold text-text-primary">₹14.20L</h3>
          </div>
        </div>
      </div>

      {/* Matching Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* Connection Lines Decor (Static for now) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:flex items-center justify-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-border-main to-transparent" />
        </div>

        {/* Left: Bank Statements */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-display font-bold text-text-primary">Bank Statements</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="xs">Latest</Button>
              <Button variant="ghost" size="xs">Filter</Button>
            </div>
          </div>

          <div className="space-y-4">
            {transactions.map((txn) => (
              <motion.div 
                key={txn.id}
                whileHover={{ x: 4 }}
                className={`bg-card-bg border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all ${
                  txn.status === 'matched' ? 'border-trust-teal/30 opacity-60' : 'border-border-main hover:border-trust-teal/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${txn.type === 'Inbound' ? 'bg-trust-teal/10 text-trust-teal' : 'bg-trust-purple/10 text-trust-purple'}`}>
                    <Banknote size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{txn.bank}</h4>
                    <p className="text-[10px] text-text-muted font-mono">{txn.id} • {txn.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono font-bold text-text-primary">{txn.amount}</p>
                  {txn.status === 'matched' && <span className="text-[9px] font-bold text-trust-teal uppercase">Matched</span>}
                </div>
              </motion.div>
            ))}
            <Button variant="outline" fullWidth size="sm" className="border-dashed border-border-main text-text-ghost hover:text-text-muted">
              <Plus size={14} className="mr-2" /> Add Statement Manually
            </Button>
          </div>
        </div>

        {/* Right: Sales Invoices */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-display font-bold text-text-primary">Sales Invoices</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="xs">Unpaid</Button>
              <Button variant="ghost" size="xs">Search</Button>
            </div>
          </div>

          <div className="space-y-4">
            {invoices.map((inv) => (
              <motion.div 
                key={inv.id}
                whileHover={{ x: -4 }}
                className={`bg-card-bg border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all ${
                  inv.status === 'paid' ? 'border-trust-teal/30 opacity-60' : 'border-border-main hover:border-trust-teal/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${inv.status === 'paid' ? 'bg-trust-teal/10 text-trust-teal' : 'bg-trust-amber/10 text-trust-amber'}`}>
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{inv.entity}</h4>
                    <p className="text-[10px] text-text-muted font-mono">{inv.id} • {inv.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono font-bold text-text-primary">{inv.amount}</p>
                  <button className="text-[9px] font-bold text-trust-teal uppercase hover:underline flex items-center gap-1 justify-end">
                    <LinkIcon size={10} /> Match Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Suggestion Banner */}
      <section className="bg-trust-purple/5 border border-trust-purple/20 rounded-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-trust-purple/20 rounded-full flex items-center justify-center text-trust-purple animate-pulse">
            <Zap size={24} fill="currentColor" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-text-primary">AI Matching Suggestion</h3>
            <p className="text-sm text-text-muted">We found 3 transactions that perfectly match with your pending invoices.</p>
          </div>
        </div>
        <Button variant="primary" className="bg-trust-purple hover:bg-trust-purple/90 shadow-lg shadow-trust-purple/20">
          Auto-Match All <ArrowRight size={16} className="ml-2" />
        </Button>
      </section>
    </div>
  );
};

export default Reconciliation;

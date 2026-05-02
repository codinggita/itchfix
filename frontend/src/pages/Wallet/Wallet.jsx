import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wallet as WalletIcon, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  CreditCard, 
  Banknote, 
  ShieldCheck, 
  History,
  MoreVertical,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Toast from '../../components/ui/Toast';

const WalletHeader = ({ onAction }) => (
  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="space-y-1">
      <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Business Wallet', path: '/wallet' }]} />
      <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Business Wallet</h1>
      <p className="text-text-muted text-xs md:text-sm">Manage your operational funds and instant escrow deposits.</p>
    </div>
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="sm" onClick={() => onAction('Opening withdrawal request...', 'info')}>
        <ArrowDownLeft size={16} className="mr-2" /> Withdraw
      </Button>
      <Button variant="primary" size="sm" onClick={() => onAction('Opening add funds modal...', 'info')}>
        <Plus size={16} className="mr-2" /> Add Funds
      </Button>
    </div>
  </header>
);

const BalanceSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2 bg-gradient-to-br from-trust-teal to-trust-purple p-8 rounded-[24px] text-page-bg relative overflow-hidden shadow-2xl shadow-trust-teal/20">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <WalletIcon size={120} />
      </div>
      <div className="space-y-6 relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Total Available Balance</p>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter">₹24,85,200.00</h2>
        </div>
        <div className="flex gap-8 pt-4 border-t border-page-bg/10">
          <div className="space-y-1">
            <p className="text-[9px] font-bold uppercase tracking-wider opacity-70">Locked in Escrow</p>
            <p className="text-lg font-mono font-bold">₹8,12,000</p>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-bold uppercase tracking-wider opacity-70">Last Settlement</p>
            <p className="text-lg font-mono font-bold">₹1,45,000</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-card-bg border border-border-main rounded-[24px] p-6 space-y-6">
      <h3 className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Linked Payout Account</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-page-bg rounded-xl border border-border-main">
          <div className="w-10 h-10 rounded-lg bg-trust-teal/10 text-trust-teal flex items-center justify-center shrink-0">
            <Banknote size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-text-primary truncate">HDFC Bank Ltd</p>
            <p className="text-[10px] text-text-muted font-mono uppercase">XXXX XXXX 5678</p>
          </div>
          <Badge variant="teal" size="sm">Primary</Badge>
        </div>
        <p className="text-[11px] text-text-muted leading-relaxed">
          Withdrawals to your primary account are processed instantly via IMPS/RTGS.
        </p>
        <button className="text-[10px] font-bold text-trust-teal uppercase tracking-widest hover:underline flex items-center gap-2">
          Manage Accounts <ExternalLink size={12} />
        </button>
      </div>
    </div>
  </div>
);

const WalletActivity = ({ onAction }) => {
  const activities = [
    { id: 'WLT-102', type: 'deposit', amount: '+ ₹5,00,000', status: 'completed', date: 'Today, 10:30 AM', via: 'Razorpay' },
    { id: 'WLT-101', type: 'withdrawal', amount: '- ₹1,20,000', status: 'pending', date: 'Yesterday', via: 'Bank Transfer' },
    { id: 'WLT-099', type: 'escrow_release', amount: '+ ₹1,45,000', status: 'completed', date: 'Apr 30, 2026', via: 'Deal #9021' },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-lg font-display font-bold text-text-primary">Recent Wallet Activity</h3>
        <button className="text-[11px] font-bold text-text-ghost uppercase tracking-widest hover:text-trust-teal" onClick={() => onAction('Opening full history...', 'info')}>View All</button>
      </div>
      <div className="space-y-3">
        {activities.map((act) => (
          <div key={act.id} className="bg-card-bg border border-border-main rounded-xl p-4 flex items-center justify-between group hover:border-trust-teal/30 transition-all cursor-pointer" onClick={() => onAction(`Viewing details for ${act.id}`, 'info')}>
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                act.type === 'deposit' ? 'bg-trust-teal/10 text-trust-teal' : 
                act.type === 'withdrawal' ? 'bg-trust-red/10 text-trust-red' : 'bg-trust-purple/10 text-trust-purple'
              }`}>
                {act.type === 'deposit' ? <ArrowUpRight size={18} /> : 
                 act.type === 'withdrawal' ? <ArrowDownLeft size={18} /> : <ShieldCheck size={18} />}
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-text-primary truncate">{act.via}</h4>
                <p className="text-[10px] text-text-muted font-mono uppercase">{act.id} • {act.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-sm font-mono font-bold ${act.amount.startsWith('+') ? 'text-trust-teal' : 'text-text-primary'}`}>{act.amount}</p>
              <span className={`text-[9px] font-bold uppercase ${act.status === 'completed' ? 'text-trust-teal' : 'text-trust-amber'}`}>{act.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Wallet() {
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => setToasts(curr => curr.filter(t => t.id !== id)), 4000);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map(t => (
            <Toast key={t.id} message={t.message} type={t.type} onClose={() => {}} />
          ))}
        </AnimatePresence>
      </div>
      <WalletHeader onAction={addToast} />
      <BalanceSection />
      <WalletActivity onAction={addToast} />
      
      <section className="bg-card-bg border border-border-main rounded-[24px] p-6 flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-trust-purple/10 text-trust-purple flex items-center justify-center shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">RBI Regulated Escrow</h4>
          <p className="text-xs text-text-muted">Your funds are held in a secure Node Account regulated by RBI guidelines.</p>
        </div>
      </section>
    </div>
  );
}

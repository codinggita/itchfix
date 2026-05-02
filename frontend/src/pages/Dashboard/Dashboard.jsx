import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import MetricCard from '../../components/ui/MetricCard';
import DataTable from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import { DASHBOARD_STATS, RECENT_TRANSACTIONS } from '../../utils/constants';
import { TrendingUp, AlertCircle, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from '../../components/ui/Toast';

const Dashboard = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const columns = [
    { 
      header: 'Transaction ID', 
      accessor: 'id',
      render: (val) => <span className="font-mono-financial font-bold text-text-primary">{val}</span>
    },
    { 
      header: 'Entity / Partner', 
      accessor: 'entity',
      render: (val) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold">
            {val.charAt(0)}
          </div>
          <span className="truncate max-w-[120px]">{val}</span>
        </div>
      )
    },
    { 
      header: 'Amount', 
      accessor: 'amount',
      render: (val) => <span className="font-mono-financial font-bold text-text-primary">{val}</span>
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (val) => {
        const variants = {
          paid: { variant: 'teal', label: 'PAID' },
          escrow: { variant: 'amber', label: 'IN ESCROW' },
          pending: { variant: 'purple', label: 'PENDING' },
          overdue: { variant: 'red', label: 'OVERDUE' }
        };
        const { variant, label } = variants[val] || { variant: 'ghost', label: val.toUpperCase() };
        return <Badge variant={variant}>{label}</Badge>;
      }
    },
    { header: 'Date', accessor: 'date' },
    { 
      header: 'Action', 
      accessor: 'id',
      render: (id) => (
        <button 
          className="text-[11px] font-bold text-trust-teal hover:underline uppercase tracking-wider"
          onClick={() => addToast(`Opening details for ${id}...`, 'info')}
        >
          View
        </button>
      )
    }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      <SEO title="Dashboard" description="Overview of your business transactions and trust score on TrustBiz." />
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast 
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-text-primary tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-text-muted text-xs md:text-sm">
            Welcome back, Rahul. Here's what's happening with TrustBiz today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-card-bg border border-border-main px-3 py-1.5 md:px-4 md:py-2 rounded-radius-button flex items-center gap-2">
            <Clock size={14} className="text-text-ghost" />
            <span className="text-[11px] md:text-[12px] font-bold text-text-secondary">May 01, 2026</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {DASHBOARD_STATS.map((stat, index) => (
          <MetricCard 
            key={index}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            subtext={stat.subtext}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Recent Transactions Table */}
        <div className="lg:col-span-2 space-y-4 min-w-0">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-lg font-display font-bold text-text-primary">Recent Transactions</h2>
            <button 
              className="text-[11px] md:text-[12px] font-bold text-trust-teal hover:underline uppercase tracking-widest"
              onClick={() => addToast('Navigating to full transaction history...', 'info')}
            >
              View All
            </button>
          </div>
          <div className="overflow-hidden">
            <DataTable columns={columns} data={RECENT_TRANSACTIONS} />
          </div>
        </div>

        {/* Right: Insights / Trust Score */}
        <div className="space-y-6">
          <h2 className="text-lg font-display font-bold text-text-primary px-1">Business Insights</h2>
          
          <div className="bg-card-bg border border-border-main rounded-card p-6 space-y-6 relative overflow-hidden shadow-2xl shadow-trust-teal/5">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-trust-teal/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-trust-teal/10 flex items-center justify-center text-trust-teal shadow-lg shadow-trust-teal/5 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest truncate">Trust Rating</p>
                <h3 className="text-xl font-display font-bold text-text-primary truncate">Tier-1 MSME</h3>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-text-muted">Profile Completion</span>
                <span className="text-trust-teal">92%</span>
              </div>
              <div className="h-1.5 w-full bg-border-main rounded-full overflow-hidden">
                <div className="h-full bg-trust-teal w-[92%]" />
              </div>
            </div>

            <div className="bg-page-bg/50 border border-border-main rounded-radius-input p-4 space-y-3">
              <div className="flex gap-3">
                <TrendingUp size={16} className="text-trust-teal shrink-0" />
                <p className="text-[12px] text-text-secondary leading-snug">
                  Your trust score increased by <span className="text-trust-teal font-bold">+14 points</span> this week.
                </p>
              </div>
              <div className="flex gap-3">
                <AlertCircle size={16} className="text-trust-amber shrink-0" />
                <p className="text-[12px] text-text-secondary leading-snug">
                  Complete your <span className="text-trust-amber font-bold">GST Re-verification</span> soon.
                </p>
              </div>
            </div>

            <button 
              className="w-full py-3 bg-trust-teal text-page-bg rounded-radius-button text-[12px] font-bold uppercase tracking-widest hover:bg-trust-teal/90 transition-colors shadow-lg shadow-trust-teal/20"
              onClick={() => addToast('Opening trust optimization guide...', 'info')}
            >
              Boost Trust Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

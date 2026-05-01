import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Search, 
  Filter, 
  MoreHorizontal,
  ExternalLink,
  History,
  AlertCircle,
  Zap
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import MetricGroup from '../../components/ui/MetricGroup';
import DataTable from '../../components/ui/Table';
import StatusPill from '../../components/ui/StatusPill';
import AmountDisplay from '../../components/ui/AmountDisplay';
import Button from '../../components/ui/Button';
import SearchBar from '../../components/ui/SearchBar';
import FilterPill from '../../components/ui/FilterPill';
import ActionMenu from '../../components/ui/ActionMenu';
import Toast from '../../components/ui/Toast';

const EscrowDashboard = () => {
  const [activeTab, setActiveCategory] = useState('All');
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAction = (action, id) => {
    addToast(`${action} for ${id} initiated...`, 'info');
  };

  const metrics = [
    { label: 'Total Locked', value: '₹42.50L', trend: 'up', trendValue: '12%', icon: <Lock size={20} /> },
    { label: 'Pending Release', value: '₹8.12L', trend: 'down', trendValue: '4%', icon: <History size={20} /> },
    { label: 'Protected Deals', value: '24', trend: 'up', trendValue: '8%', icon: <ShieldCheck size={20} /> },
    { label: 'Disputed Funds', value: '₹1.20L', trend: 'neutral', trendValue: '0%', icon: <AlertCircle size={20} /> },
  ];

  const columns = [
    { 
      header: 'Transaction ID', 
      accessor: 'id',
      render: (id) => <span className="font-mono text-[11px] font-bold text-text-primary uppercase tracking-wider">{id}</span>
    },
    { 
      header: 'Counterparty', 
      accessor: 'businessName',
      render: (name) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-trust-teal/10 flex items-center justify-center text-trust-teal shrink-0">
            <ShieldCheck size={14} />
          </div>
          <span className="font-bold text-sm truncate max-w-[120px]">{name}</span>
        </div>
      )
    },
    { 
      header: 'Amount', 
      accessor: 'amount',
      render: (amount) => <AmountDisplay value={amount} size="sm" showSymbol />
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <StatusPill status={status} />
    },
    { 
      header: 'Last Update', 
      accessor: 'date',
      render: (date) => <span className="text-[11px] text-text-muted font-mono whitespace-nowrap">{date}</span>
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (id) => (
        <ActionMenu actions={[
          { label: 'View Details', icon: <ExternalLink size={14} />, onClick: () => handleAction('View details', id) },
          { label: 'Release Funds', icon: <ArrowUpRight size={14} />, onClick: () => handleAction('Fund release', id) },
          { label: 'Raise Dispute', icon: <AlertCircle size={14} />, variant: 'danger', onClick: () => handleAction('Dispute raising', id) }
        ]} />
      )
    }
  ];

  const data = [
    { id: 'TXN-9021', businessName: 'Reliance Textiles', amount: '1,45,000.00', status: 'verified', date: '2 hours ago' },
    { id: 'TXN-9025', businessName: 'Tata Components', amount: '82,400.00', status: 'pending', date: '5 hours ago' },
    { id: 'TXN-8812', businessName: 'Gujarat Chemicals', amount: '3,12,000.00', status: 'verified', date: 'Yesterday' },
    { id: 'TXN-8790', businessName: 'Rajesh Auto Parts', amount: '12,500.00', status: 'risky', date: '2 days ago' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>

      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Escrow Accounts', path: '/escrow' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Escrow Accounts</h1>
          <p className="text-text-muted text-xs md:text-sm">Securely manage your transaction funds and approvals.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Opening audit log...', 'info')}>
            <History size={16} className="mr-2" /> Audit Log
          </Button>
          <Button variant="primary" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Opening new escrow wizard...', 'info')}>
            <Lock size={16} className="mr-2" /> New Escrow
          </Button>
        </div>
      </header>

      {/* Metrics */}
      <div className="overflow-x-auto no-scrollbar pb-2">
        <MetricGroup metrics={metrics} />
      </div>

      {/* Main Content */}
      <section className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
            {['All', 'Active', 'Pending', 'Released', 'Disputed'].map(cat => (
              <FilterPill 
                key={cat} 
                label={cat} 
                isActive={activeTab === cat} 
                onClick={() => {
                  setActiveCategory(cat);
                  addToast(`Filtering by ${cat}...`, 'info');
                }} 
              />
            ))}
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <SearchBar placeholder="Search transactions..." width="100%" />
            <Button variant="outline" size="sm" className="px-3 border-border-main shrink-0" onClick={() => addToast('Opening filters...', 'info')}>
              <Filter size={16} />
            </Button>
          </div>
        </div>

        <div className="bg-card-bg border border-border-main rounded-card overflow-x-auto">
          <div className="min-w-[800px] lg:min-w-0">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </section>

      {/* Security Info Banner */}
      <footer className="bg-trust-teal/5 border border-trust-teal/20 rounded-card p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-trust-teal text-page-bg flex items-center justify-center shrink-0">
          <ShieldCheck size={24} className="md:size-28" />
        </div>
        <div className="space-y-1 flex-1 text-center md:text-left">
          <h4 className="font-bold text-text-primary uppercase tracking-wider text-xs md:text-sm">RBI Regulated Security</h4>
          <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">
            All funds are held in RBI-regulated Escrow accounts through our banking partners. TrustBiz does not touch your capital.
          </p>
        </div>
        <Button variant="ghost" size="sm" className="text-trust-teal hover:bg-trust-teal/5 text-xs md:text-sm" onClick={() => addToast('Opening safety guide...', 'info')}>
          Learn about Escrow Safety
        </Button>
      </footer>
    </div>
  );
};

export default EscrowDashboard;

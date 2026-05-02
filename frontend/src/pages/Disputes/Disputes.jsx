import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  Scale, 
  MessageSquare, 
  FileText, 
  Clock,
  ExternalLink,
  Plus
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import DataTable from '../../components/ui/Table';
import Toast from '../../components/ui/Toast';
import SEO from '../../components/common/SEO';
import Skeleton from '../../components/ui/Skeleton';

const disputesData = [
  { id: 'DSP-102', txn: 'TXN-9021', partner: 'Reliance Textiles', type: 'Quality Mismatch', status: 'mediation', date: 'May 01, 2026' },
  { id: 'DSP-098', txn: 'TXN-8756', partner: 'Mumbai Logistics', type: 'Delayed Delivery', status: 'resolved', date: 'Apr 25, 2026' },
  { id: 'DSP-105', txn: 'TXN-9112', partner: 'Gujarat Chem', type: 'Quantity Shortage', status: 'pending', date: 'May 02, 2026' },
];

const DisputesHeader = ({ onAction }) => (
  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="space-y-1">
      <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Disputes & Mediation', path: '/disputes' }]} />
      <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Resolution Center</h1>
      <p className="text-text-muted text-xs md:text-sm">Manage disputes and access RBI-regulated mediation services.</p>
    </div>
    <Button variant="primary" size="sm" onClick={() => onAction('Opening new dispute wizard...', 'info')}>
      <Plus size={16} className="mr-2" /> Raise Dispute
    </Button>
  </header>
);

const DisputesStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {[
      { label: 'Under Mediation', value: '02', icon: <Scale size={20} className="text-trust-amber" />, bg: 'bg-trust-amber/5' },
      { label: 'Resolved (30d)', value: '14', icon: <CheckCircle2 size={20} className="text-trust-teal" />, bg: 'bg-trust-teal/5' },
      { label: 'Avg. Resolution', value: '3.4 Days', icon: <Clock size={20} className="text-trust-purple" />, bg: 'bg-trust-purple/5' }
    ].map((stat, i) => (
      <div key={i} className={`p-5 rounded-card border border-border-main ${stat.bg} flex items-center justify-between`}>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">{stat.label}</span>
          <p className="text-2xl font-display font-bold text-text-primary">{stat.value}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-card-bg border border-border-main flex items-center justify-center">
          {stat.icon}
        </div>
      </div>
    ))}
  </div>
);

const DisputesTable = ({ onAction }) => {
  const columns = [
    { header: 'Case ID', accessor: 'id', render: (val) => <span className="font-mono font-bold text-xs">{val}</span> },
    { header: 'Transaction', accessor: 'txn', render: (val) => <span className="font-mono text-[10px] text-text-muted">{val}</span> },
    { header: 'Partner', accessor: 'partner', render: (val) => <span className="font-bold text-sm">{val}</span> },
    { header: 'Type', accessor: 'type', render: (val) => <span className="text-xs text-text-secondary">{val}</span> },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (val) => {
        const variants = { resolved: 'teal', mediation: 'amber', pending: 'purple' };
        return <Badge variant={variants[val] || 'ghost'}>{val.toUpperCase()}</Badge>;
      }
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (id) => (
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/5 rounded-lg text-trust-teal transition-colors" onClick={() => onAction(`Opening chat for ${id}`, 'info')}>
            <MessageSquare size={16} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-text-ghost transition-colors" onClick={() => onAction(`Viewing evidence for ${id}`, 'info')}>
            <FileText size={16} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="bg-card-bg border border-border-main rounded-card overflow-hidden">
      <DataTable columns={columns} data={disputesData} />
    </div>
  );
};

export default function Disputes() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => setToasts(curr => curr.filter(t => t.id !== id)), 4000);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <SEO title="Disputes & Mediation" description="Resolve B2B trade conflicts with our regulated mediation service." />
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map(t => (
            <Toast key={t.id} message={t.message} type={t.type} onClose={() => {}} />
          ))}
        </AnimatePresence>
      </div>
      <DisputesHeader onAction={addToast} />
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-24 rounded-card" />)}
        </div>
      ) : (
        <DisputesStats />
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-display font-bold text-text-primary px-2">Active Cases</h2>
        {isLoading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-16 w-full rounded-xl" />)}
          </div>
        ) : (
          <DisputesTable onAction={addToast} />
        )}
      </div>
      
      <section className="bg-trust-red/5 border border-trust-red/20 rounded-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-trust-red/10 text-trust-red flex items-center justify-center shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-text-primary">Legal Mediation Policy</h4>
            <p className="text-xs text-text-muted">TrustBiz provides 100% legal coverage for all verified MSME transactions up to ₹50L.</p>
          </div>
        </div>
        <Button variant="ghost" className="text-trust-red hover:bg-trust-red/5" onClick={() => addToast('Downloading policy PDF...', 'info')}>
          Read Policy <ExternalLink size={14} className="ml-2" />
        </Button>
      </section>
    </div>
  );
}

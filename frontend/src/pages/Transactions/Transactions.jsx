import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  Calendar
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import DataTable from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import Toast from '../../components/ui/Toast';
import SEO from '../../components/common/SEO';
import Skeleton from '../../components/ui/Skeleton';
import SearchBar from '../../components/ui/SearchBar';

const transactionsData = [
  { id: 'TXN-9021', partner: 'Reliance Textiles', amount: '₹1,45,000', status: 'paid', date: 'May 02, 2026', type: 'Credit' },
  { id: 'TXN-9022', partner: 'Tata Components', amount: '₹82,400', status: 'escrow', date: 'May 01, 2026', type: 'Credit' },
  { id: 'TXN-8812', partner: 'Gujarat Chem', amount: '₹12,000', status: 'pending', date: 'Apr 28, 2026', type: 'Debit' },
  { id: 'TXN-8756', partner: 'Mumbai Logistics', amount: '₹4,500', status: 'overdue', date: 'Apr 25, 2026', type: 'Debit' },
  { id: 'TXN-8644', partner: 'Flipkart Hub', amount: '₹98,000', status: 'paid', date: 'Apr 22, 2026', type: 'Credit' },
];

const TransactionsHeader = ({ onAction }) => (
  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="space-y-1">
      <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Transactions', path: '/transactions' }]} />
      <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Transaction History</h1>
      <p className="text-text-muted text-xs md:text-sm">Detailed log of all your business payments and escrow settlements.</p>
    </div>
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="sm" onClick={() => onAction('Exporting CSV...', 'info')}>
        <Download size={16} className="mr-2" /> Export CSV
      </Button>
      <Button variant="primary" size="sm" onClick={() => onAction('Opening date filter...', 'info')}>
        <Calendar size={16} className="mr-2" /> Select Range
      </Button>
    </div>
  </header>
);

const TransactionStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {[
      { label: 'Monthly Volume', value: '₹14.2L', icon: <ArrowUpRight className="text-trust-teal" />, bg: 'bg-trust-teal/5' },
      { label: 'Pending Settlement', value: '₹2.8L', icon: <Clock className="text-trust-amber" />, bg: 'bg-trust-amber/5' },
      { label: 'Success Rate', value: '99.2%', icon: <CheckCircle2 className="text-trust-purple" />, bg: 'bg-trust-purple/5' }
    ].map((stat, i) => (
      <div key={i} className={`p-5 rounded-card border border-border-main ${stat.bg} space-y-2`}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">{stat.label}</span>
          {stat.icon}
        </div>
        <p className="text-2xl font-display font-bold text-text-primary">{stat.value}</p>
      </div>
    ))}
  </div>
);

const TransactionsList = ({ onAction }) => {
  const columns = [
    { header: 'TXN ID', accessor: 'id', render: (val) => <span className="font-mono font-bold text-xs">{val}</span> },
    { header: 'Partner', accessor: 'partner', render: (val) => <span className="font-bold text-sm">{val}</span> },
    { header: 'Amount', accessor: 'amount', render: (val) => <span className="font-mono font-bold text-trust-teal">{val}</span> },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (val) => {
        const variants = { paid: 'teal', escrow: 'amber', pending: 'purple', overdue: 'red' };
        return <Badge variant={variants[val] || 'ghost'}>{val.toUpperCase()}</Badge>;
      }
    },
    { header: 'Date', accessor: 'date', render: (val) => <span className="text-xs text-text-muted">{val}</span> },
    {
      header: 'Action',
      accessor: 'id',
      render: (id) => (
        <button className="p-2 hover:bg-white/5 rounded-lg text-text-ghost transition-colors" onClick={() => onAction(`Opening details for ${id}`, 'info')}>
          <MoreVertical size={16} />
        </button>
      )
    }
  ];

  return (
    <div className="bg-card-bg border border-border-main rounded-card overflow-hidden">
      <DataTable columns={columns} data={transactionsData} />
    </div>
  );
};

export default function Transactions() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => setToasts(curr => curr.filter(t => t.id !== id)), 4000);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <SEO title="Transaction History" description="View all your past and pending business transactions." />
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map(t => (
            <Toast key={t.id} message={t.message} type={t.type} onClose={() => {}} />
          ))}
        </AnimatePresence>
      </div>
      <TransactionsHeader onAction={addToast} />
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-28 rounded-card" />)}
        </div>
      ) : (
        <TransactionStats />
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-display font-bold text-text-primary">All Transactions</h2>
          <div className="flex items-center gap-2">
            <SearchBar placeholder="Search partner or ID..." width="240px" />
            <Button variant="ghost" size="sm" className="border border-border-main"><Filter size={16} /></Button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 w-full rounded-xl" />)}
          </div>
        ) : (
          <TransactionsList onAction={addToast} />
        )}
      </div>
    </div>
  );
}

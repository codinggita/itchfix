import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  AlertTriangle, 
  ArrowUpRight, 
  RefreshCw, 
  Plus, 
  Filter, 
  MoreVertical,
  ArrowDown,
  History,
  TrendingUp
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import StatMetric from '../../components/ui/StatMetric';
import DataTable from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import SearchBar from '../../components/ui/SearchBar';
import FilterPill from '../../components/ui/FilterPill';
import Toast from '../../components/ui/Toast';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const metrics = [
    { label: 'Total Stock Value', value: '₹24.8L', trend: 'up', trendValue: '5.2%', icon: <Package size={20} /> },
    { label: 'Low Stock Items', value: '08', trend: 'down', trendValue: '12%', icon: <AlertTriangle size={20} className="text-trust-red" /> },
    { label: 'Avg. Turnover', value: '18 Days', trend: 'up', trendValue: '2.4%', icon: <RefreshCw size={20} /> },
    { label: 'Forecasted Demand', value: '+14%', trend: 'up', trendValue: 'High', icon: <TrendingUp size={20} /> },
  ];

  const inventoryData = [
    { id: 'SKU-1021', name: 'Cotton Yarn 60s', category: 'Raw Material', stock: 120, minStock: 200, unit: 'Bales', price: '₹4,200', status: 'low' },
    { id: 'SKU-1022', name: 'Polyester Blend X', category: 'Raw Material', stock: 850, minStock: 500, unit: 'Meters', price: '₹180', status: 'verified' },
    { id: 'SKU-1045', name: 'Industrial Dye - Teal', category: 'Chemicals', stock: 45, minStock: 100, unit: 'Litres', price: '₹1,250', status: 'risky' },
    { id: 'SKU-1088', name: 'Packing Boxes (L)', category: 'Packaging', stock: 1200, minStock: 300, unit: 'Units', price: '₹45', status: 'verified' },
    { id: 'SKU-1102', name: 'Elastic Tape 20mm', category: 'Accessories', stock: 15, minStock: 50, unit: 'Rolls', price: '₹320', status: 'low' },
  ];

  const columns = [
    { header: 'SKU ID', accessor: 'id', render: (id) => <span className="font-mono text-[11px] font-bold text-text-primary">{id}</span> },
    { header: 'Product Name', accessor: 'name', render: (name) => <span className="font-bold text-sm text-text-primary truncate max-w-[120px]">{name}</span> },
    { header: 'Category', accessor: 'category', render: (cat) => <Badge variant="ghost" size="sm" className="hidden sm:inline-flex">{cat}</Badge> },
    { 
      header: 'Current Stock', 
      accessor: 'stock', 
      render: (stock, row) => (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`font-mono font-bold ${stock < row.minStock ? 'text-trust-red' : 'text-text-secondary'}`}>{stock}</span>
            <span className="text-[9px] md:text-[10px] text-text-ghost uppercase">{row.unit}</span>
          </div>
          <div className="h-1 w-16 md:w-20 bg-border-main rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${stock < row.minStock ? 'bg-trust-red' : 'bg-trust-teal'}`} 
              style={{ width: `${Math.min((stock / row.minStock) * 100, 100)}%` }}
            />
          </div>
        </div>
      ) 
    },
    { header: 'Unit Price', accessor: 'price', render: (price) => <span className="font-mono font-bold text-text-primary text-xs md:text-sm">{price}</span> },
    { 
      header: 'Status', 
      accessor: 'status', 
      render: (status) => (
        <Badge variant={status === 'low' ? 'danger' : status === 'risky' ? 'warning' : 'success'} className="whitespace-nowrap">
          {status === 'low' ? 'Low Stock' : status === 'risky' ? 'Reorder' : 'In Stock'}
        </Badge>
      ) 
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (id) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="px-2 h-8" onClick={() => addToast(`Opening details for ${id}...`, 'info')}>
            <ArrowUpRight size={14} />
          </Button>
          <button 
            className="p-1.5 hover:bg-page-bg rounded-md text-text-ghost transition-colors"
            onClick={() => addToast('More options coming soon!', 'info')}
          >
            <MoreVertical size={16} />
          </button>
        </div>
      )
    }
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
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Inventory', path: '/inventory' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Stock & Inventory</h1>
          <p className="text-text-muted text-xs md:text-sm">Monitor stock levels and automate replenishment with smart alerts.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Opening stock history...', 'info')}>
            <History size={16} className="mr-2" /> Stock History
          </Button>
          <Button variant="primary" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Opening add item wizard...', 'info')}>
            <Plus size={16} className="mr-2" /> Add New Item
          </Button>
        </div>
      </header>

      {/* Metrics */}
      <div className="overflow-x-auto no-scrollbar pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-[600px] lg:min-w-0">
          {metrics.map((m, i) => (
            <StatMetric key={i} {...m} />
          ))}
        </div>
      </div>

      {/* Low Stock Urgent Alert */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-trust-red/5 border border-trust-red/20 rounded-card p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-trust-red/10 text-trust-red flex items-center justify-center shrink-0 animate-pulse">
            <AlertTriangle size={20} />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">Critical Stock Alert</h4>
            <p className="text-[11px] md:text-xs text-text-muted">8 items are below minimum safety levels. Reorder immediately.</p>
          </div>
        </div>
        <Button variant="primary" size="sm" className="w-full sm:w-auto bg-trust-red hover:bg-trust-red/90 border-none py-2" onClick={() => addToast('Bulk restock initiated!', 'success')}>
          Restock All Now
        </Button>
      </motion.div>

      {/* Main Inventory Section */}
      <section className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
            {['All', 'Raw Material', 'Chemicals', 'Packaging', 'Accessories'].map(cat => (
              <FilterPill 
                key={cat} 
                label={cat} 
                isActive={activeTab === cat} 
                onClick={() => {
                  setActiveTab(cat);
                  addToast(`Filtering by ${cat}...`, 'info');
                }} 
              />
            ))}
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <SearchBar placeholder="Search items..." width="100%" className="lg:min-w-[300px]" />
            <Button variant="outline" size="sm" className="px-3 border-border-main shrink-0" onClick={() => addToast('Opening filters...', 'info')}>
              <Filter size={16} />
            </Button>
          </div>
        </div>

        <div className="bg-card-bg border border-border-main rounded-card overflow-x-auto shadow-xl shadow-trust-teal/5">
          <div className="min-w-[800px] lg:min-w-0">
            <DataTable columns={columns} data={inventoryData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventory;

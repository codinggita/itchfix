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

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('All');

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
    { header: 'Product Name', accessor: 'name', render: (name) => <span className="font-bold text-sm text-text-primary">{name}</span> },
    { header: 'Category', accessor: 'category', render: (cat) => <Badge variant="ghost" size="sm">{cat}</Badge> },
    { 
      header: 'Current Stock', 
      accessor: 'stock', 
      render: (stock, row) => (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className={`font-mono font-bold ${stock < row.minStock ? 'text-trust-red' : 'text-text-secondary'}`}>{stock}</span>
            <span className="text-[10px] text-text-ghost uppercase">{row.unit}</span>
          </div>
          <div className="h-1 w-20 bg-border-main rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${stock < row.minStock ? 'bg-trust-red' : 'bg-trust-teal'}`} 
              style={{ width: `${Math.min((stock / row.minStock) * 100, 100)}%` }}
            />
          </div>
        </div>
      ) 
    },
    { header: 'Unit Price', accessor: 'price', render: (price) => <span className="font-mono font-bold text-text-primary">{price}</span> },
    { 
      header: 'Status', 
      accessor: 'status', 
      render: (status) => (
        <Badge variant={status === 'low' ? 'danger' : status === 'risky' ? 'warning' : 'success'}>
          {status === 'low' ? 'Low Stock' : status === 'risky' ? 'Reorder Soon' : 'In Stock'}
        </Badge>
      ) 
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="px-2 h-8">
            <ArrowUpRight size={14} />
          </Button>
          <button className="p-1.5 hover:bg-page-bg rounded-md text-text-ghost transition-colors">
            <MoreVertical size={16} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Inventory', path: '/inventory' }]} />
          <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight">Stock & Inventory</h1>
          <p className="text-text-muted text-sm">Monitor stock levels and automate replenishment with smart alerts.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <History size={16} className="mr-2" /> Stock History
          </Button>
          <Button variant="primary" size="sm">
            <Plus size={16} className="mr-2" /> Add New Item
          </Button>
        </div>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <StatMetric key={i} {...m} />
        ))}
      </div>

      {/* Low Stock Urgent Alert */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-trust-red/5 border border-trust-red/20 rounded-card p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-trust-red/10 text-trust-red flex items-center justify-center animate-pulse">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">Critical Stock Alert</h4>
            <p className="text-xs text-text-muted">8 items are below minimum safety levels. Reorder immediately to avoid production delays.</p>
          </div>
        </div>
        <Button variant="primary" size="sm" className="bg-trust-red hover:bg-trust-red/90 border-none">
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
                onClick={() => setActiveTab(cat)} 
              />
            ))}
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <SearchBar placeholder="Search items by SKU or Name..." width="100%" className="lg:min-w-[300px]" />
            <Button variant="outline" size="sm" className="px-3 border-border-main">
              <Filter size={16} />
            </Button>
          </div>
        </div>

        <div className="bg-card-bg border border-border-main rounded-card overflow-hidden shadow-xl shadow-trust-teal/5">
          <DataTable columns={columns} data={inventoryData} />
        </div>
      </section>
    </div>
  );
};

export default Inventory;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, 
  SlidersHorizontal, 
  Plus, 
  Grid, 
  List, 
  Download,
  ShieldCheck,
  Search,
  MoreVertical,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import SearchBar from '../../components/ui/SearchBar';
import FilterPill from '../../components/ui/FilterPill';
import SupplierCard from '../../components/ui/SupplierCard';
import Button from '../../components/ui/Button';
import Pagination from '../../components/ui/Pagination';
import Toast from '../../components/ui/Toast';

const suppliersData = [
  { id: 1, name: 'Reliance Textiles Pvt Ltd', gst: '24AABCR1234A1Z5', score: 94, status: 'verified', verifiedFlags: { gst: true, pan: true, bank: true }, category: 'Textiles' },
  { id: 2, name: 'Tata Components Ltd', gst: '22AABCT5678B2Z3', score: 87, status: 'verified', verifiedFlags: { gst: true, pan: true, bank: true }, category: 'Manufacturing' },
  { id: 3, name: 'Flipkart Vendors Hub', gst: '29AABCF2345C3Z1', score: 61, status: 'pending', verifiedFlags: { gst: true, pan: true, bank: false }, category: 'Retail' },
  { id: 4, name: 'Rajesh Auto Parts', gst: '08AABCR4567E5Z7', score: 42, status: 'risky', verifiedFlags: { gst: true, pan: false, bank: false }, category: 'Automobile' },
  { id: 5, name: 'Gujarat Chemicals', gst: '24AABCG9876D1Z2', score: 78, status: 'verified', verifiedFlags: { gst: true, pan: true, bank: true }, category: 'Chemicals' },
  { id: 6, name: 'Mumbai Logistics Solutions', gst: '27AABCL5544F9Z8', score: 82, status: 'verified', verifiedFlags: { gst: true, pan: true, bank: true }, category: 'Logistics' },
  { id: 7, name: 'Indore Food Processors', gst: '23AABCF3322G4Z1', score: 55, status: 'pending', verifiedFlags: { gst: true, pan: false, bank: true }, category: 'Food' },
  { id: 8, name: 'Delhi Tech Supplies', gst: '07AABCD1100H2Z3', score: 38, status: 'risky', verifiedFlags: { gst: false, pan: false, bank: false }, category: 'Technology' },
];

const categories = ['All', 'Textiles', 'Manufacturing', 'Retail', 'Automobile', 'Chemicals', 'Logistics', 'Food', 'Technology'];

export default function SupplierNetwork() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewType, setViewType] = useState('grid');
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredSuppliers = suppliersData.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         supplier.gst.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || supplier.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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

      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Supplier Network', path: '/suppliers' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Supplier Network</h1>
          <p className="text-text-muted text-xs md:text-sm">Connect with verified Indian businesses and manufacturers.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => addToast('Exporting supplier list...', 'info')}>
            <Download size={16} className="mr-2" /> Export
          </Button>
          <Button variant="primary" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Opening invite modal...', 'info')}>
            <Plus size={16} className="mr-2" /> Invite
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <section className="bg-card-bg border border-border-main rounded-card p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full sm:w-[320px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-ghost" />
            <input 
              type="text"
              placeholder="Search name or GSTIN..."
              className="w-full bg-input-bg border border-border-main rounded-radius-input py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-trust-teal/50"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="h-8 w-px bg-border-main hidden sm:block" />
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
            {['Verified', 'Pending', 'High Score'].map(filter => (
              <FilterPill key={filter} label={filter} isActive={false} onClick={() => addToast(`Filtering by ${filter}...`, 'info')} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-border-main pt-4 lg:pt-0">
          <div className="flex items-center gap-2 bg-page-bg border border-border-main rounded-lg p-1">
            <button 
              onClick={() => setViewType('grid')}
              className={`p-1.5 rounded-md transition-all ${viewType === 'grid' ? 'bg-card-bg text-trust-teal shadow-sm' : 'text-text-ghost hover:text-text-muted'}`}
            >
              <Grid size={18} />
            </button>
            <button 
              onClick={() => setViewType('list')}
              className={`p-1.5 rounded-md transition-all ${viewType === 'list' ? 'bg-card-bg text-trust-teal shadow-sm' : 'text-text-ghost hover:text-text-muted'}`}
            >
              <List size={18} />
            </button>
          </div>
          <Button variant="ghost" size="sm" className="text-text-muted" onClick={() => addToast('Opening advanced filters...', 'info')}>
            <SlidersHorizontal size={16} className="mr-2" /> Filters
          </Button>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-pill text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
              activeCategory === cat 
                ? 'bg-trust-teal/10 text-trust-teal border border-trust-teal/20' 
                : 'text-text-ghost hover:text-text-muted border border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content Grid/List */}
      {viewType === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSuppliers.map(supplier => (
            <SupplierCard key={supplier.id} {...supplier} onClick={() => addToast(`Opening ${supplier.name}...`, 'info')} />
          ))}
        </div>
      ) : (
        <div className="bg-card-bg border border-border-main rounded-card overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-input-bg border-b border-border-main">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-text-ghost uppercase tracking-widest">Supplier</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-ghost uppercase tracking-widest hidden md:table-cell">GSTIN</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-ghost uppercase tracking-widest">TrustScore</th>
                <th className="px-6 py-4 text-[10px] font-bold text-text-ghost uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-main">
              {filteredSuppliers.map(s => (
                <tr key={s.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-text-primary text-sm">{s.name}</div>
                    <div className="text-[10px] text-text-muted uppercase font-bold">{s.category}</div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="font-mono text-xs text-text-secondary">{s.gst}</span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={s.score > 80 ? 'teal' : s.score > 50 ? 'amber' : 'red'}>{s.score}/100</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-trust-teal hover:underline text-xs font-bold uppercase tracking-widest" onClick={() => addToast(`Opening ${s.name}...`, 'info')}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {filteredSuppliers.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-16 h-16 bg-card-bg border border-border-main rounded-2xl flex items-center justify-center mx-auto text-text-ghost">
            <Search size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-text-primary">No suppliers found</h3>
            <p className="text-text-muted text-sm max-w-xs mx-auto">Try adjusting your filters or search terms.</p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>Clear All</Button>
        </div>
      )}

      <Pagination />
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Plus, Grid, List, Download } from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import SearchBar from '../../components/ui/SearchBar';
import FilterPill from '../../components/ui/FilterPill';
import SupplierCard from '../../components/ui/SupplierCard';
import Button from '../../components/ui/Button';
import Pagination from '../../components/ui/Pagination';

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
  const [viewType, setViewType] = useState('grid'); // 'grid' or 'list'

  const filteredSuppliers = suppliersData.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         supplier.gst.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || supplier.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Supplier Network', path: '/suppliers' }]} />
          <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight">Supplier Network</h1>
          <p className="text-text-muted text-sm">Connect with verified Indian businesses and manufacturers.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Download size={16} className="mr-2" /> Export List
          </Button>
          <Button variant="primary" size="sm">
            <Plus size={16} className="mr-2" /> Invite Supplier
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <section className="bg-card-bg border border-border-main rounded-card p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <SearchBar 
            placeholder="Search by name or GSTIN..." 
            width="100%" 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:max-w-[320px]"
          />
          <div className="h-8 w-px bg-border-main hidden sm:block" />
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
            <Filter size={14} className="text-text-ghost shrink-0" />
            {['Verified', 'Pending', 'High Score'].map(filter => (
              <FilterPill 
                key={filter} 
                label={filter} 
                isActive={false} 
                onClick={() => {}}
              />
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
          <Button variant="ghost" size="sm" className="text-text-muted">
            <SlidersHorizontal size={16} className="mr-2" /> More Filters
          </Button>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map(cat => (
          <FilterPill 
            key={cat} 
            label={cat} 
            isActive={activeCategory === cat} 
            onClick={() => setActiveCategory(cat)}
            count={cat === 'All' ? suppliersData.length : suppliersData.filter(s => s.category === cat).length}
          />
        ))}
      </div>

      {/* Grid */}
      <section>
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSuppliers.map((supplier) => (
              <motion.div
                key={supplier.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <SupplierCard supplier={supplier} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredSuppliers.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="w-20 h-20 bg-card-bg border border-border-main rounded-full flex items-center justify-center mx-auto text-text-ghost">
              <Filter size={32} />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-text-primary">No suppliers found</h3>
              <p className="text-text-muted text-sm">Try adjusting your search or category filters.</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </section>

      {/* Footer / Pagination */}
      <footer className="pt-8 border-t border-border-main flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-text-ghost font-medium">
          Showing <span className="text-text-secondary font-mono">{filteredSuppliers.length}</span> of <span className="text-text-secondary font-mono">{suppliersData.length}</span> suppliers
        </p>
        <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
      </footer>
    </div>
  );
}

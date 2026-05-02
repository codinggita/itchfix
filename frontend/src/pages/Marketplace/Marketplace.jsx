import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
  Plus,
  Grid,
  List as ListIcon
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import SearchBar from '../../components/ui/SearchBar';
import Toast from '../../components/ui/Toast';

const MarketplaceHeader = ({ onAction }) => (
  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="space-y-1">
      <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'B2B Marketplace', path: '/marketplace' }]} />
      <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">B2B Marketplace</h1>
      <p className="text-text-muted text-xs md:text-sm">Discover verified raw materials and industrial supplies from trusted Indian manufacturers.</p>
    </div>
    <Button variant="primary" size="sm" onClick={() => onAction('Opening listing wizard...', 'info')}>
      <Plus size={16} className="mr-2" /> List Product
    </Button>
  </header>
);

const MarketplaceToolbar = ({ onAction, activeTab, setActiveTab }) => {
  const categories = ['All', 'Textiles', 'Metals', 'Chemicals', 'Electronics', 'Packaging'];
  return (
    <section className="bg-card-bg border border-border-main rounded-card p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
        <SearchBar placeholder="Search products, suppliers..." width="100%" className="sm:max-w-[320px]" />
        <div className="h-8 w-px bg-border-main hidden sm:block" />
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                onAction(`Filtering by ${cat}...`, 'info');
              }}
              className={`px-4 py-1.5 rounded-pill text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === cat 
                  ? 'bg-trust-teal/10 text-trust-teal border border-trust-teal/20' 
                  : 'text-text-ghost hover:text-text-muted border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="text-text-ghost" onClick={() => onAction('Opening filters...', 'info')}>
          <Filter size={16} className="mr-2" /> Filters
        </Button>
      </div>
    </section>
  );
};

const ProductGrid = ({ onAction }) => {
  const products = [
    { id: 1, name: 'Premium Cotton Yarn 60s', supplier: 'Reliance Textiles', price: '₹420/Bale', location: 'Surat', rating: 4.9, image: '🧶' },
    { id: 2, name: 'Industrial Grade Steel Sheets', supplier: 'Tata Steel Ltd', price: '₹85/Kg', location: 'Jamshedpur', rating: 4.8, image: '🏗️' },
    { id: 3, name: 'Polymer Resin X-90', supplier: 'Gujarat Chemicals', price: '₹1,250/Drum', location: 'Vapi', rating: 4.7, image: '🧪' },
    { id: 4, name: 'Eco-friendly Kraft Boxes', supplier: 'Mumbai Packaging', price: '₹12/Unit', location: 'Mumbai', rating: 4.5, image: '📦' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div 
          key={product.id}
          whileHover={{ y: -5 }}
          className="bg-card-bg border border-border-main rounded-[24px] overflow-hidden group hover:border-trust-teal/30 transition-all flex flex-col"
        >
          <div className="h-40 bg-page-bg flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
            {product.image}
          </div>
          <div className="p-5 space-y-4 flex-1 flex flex-col">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Badge variant="ghost" size="sm" className="text-[9px] uppercase tracking-widest">In Stock</Badge>
                <div className="flex items-center gap-1 text-trust-amber">
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] font-bold">{product.rating}</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-text-primary text-base leading-tight group-hover:text-trust-teal transition-colors">
                {product.name}
              </h3>
              <p className="text-[10px] font-bold text-text-ghost uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck size={12} className="text-trust-teal" /> {product.supplier}
              </p>
            </div>
            <div className="pt-2 border-t border-border-main flex items-center justify-between mt-auto">
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-text-ghost uppercase tracking-widest">Price</p>
                <p className="text-sm font-mono font-bold text-text-primary">{product.price}</p>
              </div>
              <Button variant="ghost" size="sm" className="p-2 rounded-lg bg-page-bg" onClick={() => onAction(`Adding ${product.name} to inquiry...`, 'info')}>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Marketplace() {
  const [toasts, setToasts] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

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
      <MarketplaceHeader onAction={addToast} />
      <MarketplaceToolbar onAction={addToast} activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProductGrid onAction={addToast} />
      
      <section className="bg-trust-teal/5 border border-trust-teal/10 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-trust-teal/10 rounded-full flex items-center justify-center text-trust-teal shrink-0">
            <ShoppingBag size={28} />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-display font-bold text-text-primary">Bulk Sourcing?</h3>
            <p className="text-sm text-text-muted max-w-md">Our procurement experts can help you find the best prices for high-volume industrial orders.</p>
          </div>
        </div>
        <Button variant="outline" className="px-10 border-trust-teal/20 text-trust-teal hover:bg-trust-teal/5" onClick={() => addToast('Opening procurement form...', 'info')}>
          Get Custom Quote
        </Button>
      </section>
    </div>
  );
}

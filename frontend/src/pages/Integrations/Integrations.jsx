import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Search, 
  Plus, 
  ExternalLink, 
  Zap, 
  CreditCard, 
  Database, 
  ShieldCheck, 
  MessageSquare,
  Filter
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import IntegrationCard from '../../components/ui/IntegrationCard';
import SearchBar from '../../components/ui/SearchBar';
import Button from '../../components/ui/Button';
import Toast from '../../components/ui/Toast';
import { INTEGRATIONS } from '../../utils/constants';

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [toasts, setToasts] = useState([]);

  const categories = ['All', 'Payments', 'Accounting', 'Compliance', 'Communication', 'Utility'];

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getIcon = (name) => {
    switch (name) {
      case 'Razorpay': return CreditCard;
      case 'Tally Prime': return Database;
      case 'GSTN Portal': return ShieldCheck;
      case 'WhatsApp': return MessageSquare;
      case 'PhonePe': return Zap;
      case 'Google Sheets': return Layers;
      default: return Layers;
    }
  };

  const filteredIntegrations = INTEGRATIONS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAction = (name, status) => {
    if (status === 'connected') {
      addToast(`Configuring ${name} settings...`, 'info');
    } else {
      addToast(`Initiating connection with ${name}...`, 'info');
      setTimeout(() => addToast(`${name} connected successfully!`, 'success'), 2000);
    }
  };

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
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Integrations', path: '/integrations' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">App Marketplace</h1>
          <p className="text-text-muted text-xs md:text-sm">Connect your favorite business tools to automate your workflow.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Opening developer documentation...', 'info')}>
            <ExternalLink size={16} className="mr-2" /> Developer Docs
          </Button>
          <Button variant="primary" size="sm" className="flex-1 md:flex-none" onClick={() => addToast('Request form coming soon!', 'info')}>
            <Plus size={16} className="mr-2" /> Request App
          </Button>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="bg-card-bg border border-border-main rounded-card p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <SearchBar 
            placeholder="Search integrations..." 
            width="100%" 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:max-w-[320px]"
          />
          <div className="h-8 w-px bg-border-main hidden sm:block" />
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 w-full sm:w-auto">
            <Filter size={14} className="text-text-ghost shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  addToast(`Filtering by ${cat}...`, 'info');
                }}
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
        </div>
      </section>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map((item) => (
          <IntegrationCard 
            key={item.id}
            name={item.name}
            description={item.description}
            icon={getIcon(item.name)}
            isConnected={item.status === 'connected'}
            status={item.status}
            onClick={() => handleAction(item.name, item.status)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredIntegrations.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-16 h-16 bg-card-bg border border-border-main rounded-2xl flex items-center justify-center mx-auto text-text-ghost">
            <Layers size={32} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-text-primary">No integrations found</h3>
            <p className="text-text-muted text-sm max-w-xs mx-auto">
              We couldn't find any integrations matching your search.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Integrations;

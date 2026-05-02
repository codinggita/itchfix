import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/common/SEO';
import Skeleton from '../../components/ui/Skeleton';
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

export default function Inventory() {
  const [isLoading, setIsLoading] = useState(true);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => setToasts(curr => curr.filter(t => t.id !== id)), 4000);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <SEO title="Inventory Management" description="Monitor and manage your industrial stock levels." />
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map(t => (
            <Toast key={t.id} message={t.message} type={t.type} onClose={() => {}} />
          ))}
        </AnimatePresence>
      </div>
      <InventoryHeader onAction={addToast} />
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-24 rounded-card" />)}
        </div>
      ) : (
        <InventoryStats />
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-display font-bold text-text-primary px-2">Stock Inventory</h2>
        {isLoading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-16 w-full rounded-xl" />)}
          </div>
        ) : (
          <InventoryList onAction={addToast} />
        )}
      </div>
    </div>
  );
}

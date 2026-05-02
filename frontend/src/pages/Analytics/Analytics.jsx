import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ReTooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Calendar, Download, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import MetricCard from '../../components/ui/MetricCard';
import Toast from '../../components/ui/Toast';

const data = [
  { name: 'Jan', revenue: 4000, deals: 24 },
  { name: 'Feb', revenue: 3000, deals: 13 },
  { name: 'Mar', revenue: 2000, deals: 98 },
  { name: 'Apr', revenue: 2780, deals: 39 },
  { name: 'May', revenue: 1890, deals: 48 },
  { name: 'Jun', revenue: 2390, deals: 38 },
];

const AnalyticsHeader = ({ onAction }) => (
  <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div className="space-y-1">
      <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Analytics', path: '/analytics' }]} />
      <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Financial Analytics</h1>
      <p className="text-text-muted text-xs md:text-sm">Track your business growth and escrow performance.</p>
    </div>
    <div className="flex items-center gap-3">
      <div 
        onClick={() => onAction('Opening date range selector...', 'info')}
        className="bg-card-bg border border-border-main px-3 py-2 rounded-radius-button flex items-center gap-2 cursor-pointer hover:border-trust-teal/50 transition-colors"
      >
        <Calendar size={16} className="text-trust-teal" />
        <span className="text-xs font-bold text-text-secondary">Last 30 Days</span>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="hidden sm:flex"
        onClick={() => onAction('Preparing exportable report...', 'info')}
      >
        <Download size={16} className="mr-2" /> Export Report
      </Button>
    </div>
  </header>
);

const AnalyticsStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
    <MetricCard 
      title="Total Revenue" 
      value="₹45.2L" 
      color="#00C9A7" 
      subtext={<span className="flex items-center gap-1 text-trust-teal"><ArrowUpRight size={12} /> +12.5% vs last month</span>}
    />
    <MetricCard 
      title="Escrow Volume" 
      value="₹12.8L" 
      color="#F59E0B" 
      subtext={<span className="flex items-center gap-1 text-trust-amber"><TrendingUp size={12} /> 8 active deals</span>}
    />
    <MetricCard 
      title="Avg. Deal Size" 
      value="₹5.4L" 
      color="#818CF8" 
      subtext={<span className="flex items-center gap-1 text-text-faint">Consistent growth</span>}
    />
    <MetricCard 
      title="Dispute Rate" 
      value="0.8%" 
      color="#E53E3E" 
      subtext={<span className="flex items-center gap-1 text-trust-red"><ArrowDownRight size={12} /> -2% improvement</span>}
    />
  </div>
);

const RevenueChart = () => (
  <div className="bg-card-bg border border-border-main rounded-card p-6 space-y-6">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-display font-bold text-text-primary">Revenue Trend</h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-trust-teal" />
          <span className="text-[10px] font-bold text-text-ghost uppercase">Revenue</span>
        </div>
      </div>
    </div>
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1E2D4A" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748B', fontSize: 12, fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748B', fontSize: 12, fontWeight: 600 }}
          />
          <ReTooltip 
            contentStyle={{ backgroundColor: '#0D1929', border: '1px solid #1E2D4A', borderRadius: '8px' }}
            itemStyle={{ color: '#F1F5F9', fontSize: '12px', fontWeight: 'bold' }}
            cursor={{ fill: '#1E2D4A', opacity: 0.4 }}
          />
          <Bar dataKey="revenue" fill="#00C9A7" radius={[4, 4, 0, 0]} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default function Analytics() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast 
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>

      <AnalyticsHeader onAction={addToast} />
      <AnalyticsStats />
      
      <div className="grid grid-cols-1 gap-8">
        <RevenueChart />
      </div>
    </div>
  );
}

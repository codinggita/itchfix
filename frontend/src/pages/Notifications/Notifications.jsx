import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  MessageSquare, 
  ShieldCheck, 
  Clock,
  MoreVertical,
  Trash2,
  Filter,
  Circle
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Toast from '../../components/ui/Toast';

const Notifications = () => {
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

  const notifications = [
    {
      id: 1,
      type: 'deal',
      title: 'New Proposal Received',
      message: 'Reliance Textiles has sent a new proposal for Deal #TXN-9021.',
      time: '2 mins ago',
      isRead: false,
      icon: <MessageSquare size={16} />
    },
    {
      id: 2,
      type: 'escrow',
      title: 'Funds Securely Locked',
      message: 'Payment of ₹1,45,000 for Deal #TXN-8812 is now held in escrow.',
      time: '1 hour ago',
      isRead: false,
      icon: <Lock size={16} />
    },
    {
      id: 3,
      type: 'security',
      title: 'KYC Verified Successfully',
      message: 'Your business profile has been verified as a Tier-1 MSME.',
      time: '5 hours ago',
      isRead: true,
      icon: <ShieldCheck size={16} />
    },
    {
      id: 4,
      type: 'alert',
      title: 'Low Stock Warning',
      message: 'Cotton Yarn 60s is below the safety threshold (120 units left).',
      time: 'Yesterday',
      isRead: true,
      icon: <AlertCircle size={16} />
    }
  ];

  const categories = ['All', 'Deals', 'Escrow', 'Security', 'Alerts'];

  const getIconColor = (type) => {
    switch (type) {
      case 'deal': return 'bg-trust-purple/10 text-trust-purple';
      case 'escrow': return 'bg-trust-teal/10 text-trust-teal';
      case 'security': return 'bg-trust-teal/10 text-trust-teal';
      case 'alert': return 'bg-trust-red/10 text-trust-red';
      default: return 'bg-page-bg text-text-muted';
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 md:space-y-8">
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
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Notifications', path: '/notifications' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Notifications</h1>
          <p className="text-text-muted text-xs md:text-sm">Stay updated with your business activities and deal statuses.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" onClick={() => addToast('Marking all as read...', 'info')}>
            Mark all as read
          </Button>
        </div>
      </header>

      {/* Filters */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 border-b border-border-main">
        <Filter size={16} className="text-text-ghost shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              addToast(`Filtering by ${cat}...`, 'info');
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

      {/* Notification List */}
      <div className="space-y-3">
        {notifications.map((notif) => (
          <motion.div
            key={notif.id}
            whileHover={{ x: 4 }}
            className={`
              group bg-card-bg border rounded-xl p-4 flex items-start gap-4 transition-all cursor-pointer
              ${notif.isRead ? 'border-border-main opacity-70' : 'border-trust-teal/30 bg-trust-teal/[0.02] shadow-sm'}
            `}
            onClick={() => addToast(`Opening ${notif.title}...`, 'info')}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${getIconColor(notif.type)}`}>
              {notif.icon}
            </div>
            
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-text-primary truncate">{notif.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-text-ghost font-mono uppercase">{notif.time}</span>
                  {!notif.isRead && <Circle size={8} className="fill-trust-teal text-trust-teal" />}
                </div>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{notif.message}</p>
            </div>

            <button 
              className="p-1.5 text-text-ghost hover:text-trust-red transition-colors rounded-md opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                addToast('Notification deleted.', 'success');
              }}
            >
              <Trash2 size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer / Load More */}
      <div className="text-center pt-4">
        <button className="text-[11px] font-bold text-text-ghost hover:text-trust-teal uppercase tracking-[0.2em] transition-colors">
          View Notification Archive
        </button>
      </div>
    </div>
  );
};

export default Notifications;

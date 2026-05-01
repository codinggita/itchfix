import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Book, MessageSquare, Phone, ArrowRight } from 'lucide-react';

const HelpCenterCard = () => {
  const links = [
    { title: 'User Guides', icon: <Book size={18} />, description: 'Learn how to use TrustBiz.' },
    { title: 'Live Chat', icon: <MessageSquare size={18} />, description: 'Talk to our support team.' },
    { title: 'Call Us', icon: <Phone size={18} />, description: '+91 800-TRUST-BIZ' },
  ];

  return (
    <div className="bg-card-bg border border-border-main rounded-card overflow-hidden">
      <div className="p-6 bg-gradient-to-br from-trust-teal/10 to-page-bg border-b border-border-main">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-trust-teal text-page-bg flex items-center justify-center shadow-lg shadow-trust-teal/20">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-xl font-bold font-display text-text-primary">Help Center</h3>
        </div>
        <p className="text-sm text-text-muted">Need assistance with a transaction or verification?</p>
      </div>

      <div className="p-4 space-y-2">
        {links.map((link, idx) => (
          <motion.button
            key={idx}
            whileHover={{ x: 4, backgroundColor: 'rgba(var(--color-page-bg), 0.5)' }}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-transparent hover:border-border-main transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="text-trust-teal group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary">{link.title}</p>
                <p className="text-[11px] text-text-ghost">{link.description}</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-text-ghost opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.button>
        ))}
      </div>

      <div className="p-6 bg-page-bg/30 border-t border-border-main">
        <div className="bg-card-bg border border-border-main p-4 rounded-xl flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Support ID</p>
            <p className="text-sm font-mono font-bold text-text-secondary">#TB-SUP-9902</p>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-trust-teal/10 text-trust-teal border border-trust-teal/20">
            <div className="w-1.5 h-1.5 rounded-full bg-trust-teal animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Priority</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterCard;

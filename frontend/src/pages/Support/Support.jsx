import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  Search, 
  ChevronRight, 
  FileText, 
  ShieldCheck, 
  Lock,
  ExternalLink,
  Plus
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Toast from '../../components/ui/Toast';

const Support = () => {
  const [toasts, setToasts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const faqs = [
    { q: 'How do I release funds from Escrow?', a: 'Once you verify the delivery and quality, click on "Release Funds" in your Escrow Dashboard.' },
    { q: 'What is a Trust Score?', a: 'Trust Score is a rating based on your payment history, delivery timeliness, and verification status.' },
    { q: 'How long does KYC verification take?', a: 'Typically, our team verifies documents within 24 business hours.' }
  ];

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 md:space-y-12">
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>

      <header className="text-center space-y-4">
        <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Support Center', path: '/support' }]} />
        <h1 className="text-3xl md:text-5xl font-bold font-display text-text-primary tracking-tight">How can we <span className="text-trust-teal">help you?</span></h1>
        <p className="text-text-muted text-sm md:text-lg max-w-2xl mx-auto">Search our knowledge base or get in touch with our specialist support team.</p>
        
        <div className="relative max-w-xl mx-auto pt-4">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-ghost" />
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full bg-card-bg border border-border-main rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-trust-teal/50 transition-all shadow-xl shadow-trust-teal/5"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-bg border border-border-main rounded-card p-6 space-y-4 hover:border-trust-teal/30 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-trust-teal/10 text-trust-teal flex items-center justify-center">
            <MessageSquare size={24} />
          </div>
          <h3 className="font-bold text-text-primary">Live Chat</h3>
          <p className="text-xs text-text-muted">Chat with our support bots or agents in real-time.</p>
          <Button variant="ghost" size="sm" fullWidth className="group-hover:bg-trust-teal/5" onClick={() => addToast('Starting live chat...', 'info')}>Start Chat</Button>
        </div>

        <div className="bg-card-bg border border-border-main rounded-card p-6 space-y-4 hover:border-trust-purple/30 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-trust-purple/10 text-trust-purple flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-text-primary">Email Support</h3>
          <p className="text-xs text-text-muted">Get detailed help for complex issues via email.</p>
          <Button variant="ghost" size="sm" fullWidth className="group-hover:bg-trust-purple/5" onClick={() => addToast('Opening email composer...', 'info')}>Send Email</Button>
        </div>

        <div className="bg-card-bg border border-border-main rounded-card p-6 space-y-4 hover:border-trust-amber/30 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-trust-amber/10 text-trust-amber flex items-center justify-center">
            <Phone size={24} />
          </div>
          <h3 className="font-bold text-text-primary">Phone Support</h3>
          <p className="text-xs text-text-muted">Priority call support for Tier-1 MSMEs.</p>
          <Button variant="ghost" size="sm" fullWidth className="group-hover:bg-trust-amber/5" onClick={() => addToast('Requesting callback...', 'info')}>Request Call</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* FAQs */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
            <HelpCircle size={20} className="text-trust-teal" /> Popular Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-card-bg border border-border-main rounded-xl overflow-hidden">
                <summary className="p-4 md:p-6 cursor-pointer list-none flex items-center justify-between font-bold text-sm text-text-primary">
                  {faq.q}
                  <ChevronRight size={16} className="text-text-ghost group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-4 md:px-6 pb-6 text-sm text-text-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Raise a Ticket */}
        <div className="lg:col-span-5">
          <section className="bg-card-bg border border-border-main rounded-card p-6 md:p-8 space-y-6 sticky top-24">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-text-primary">Raise a Ticket</h3>
              <p className="text-xs text-text-muted">Can't find what you're looking for?</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); addToast('Ticket submitted successfully!', 'success'); }}>
              <Input label="Subject" placeholder="e.g. Issue with payment release" />
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Description</label>
                <textarea 
                  className="w-full bg-page-bg border border-border-main rounded-xl p-4 text-sm text-text-secondary focus:outline-none focus:border-trust-teal/50 transition-all min-h-[120px]"
                  placeholder="Tell us more about the issue..."
                />
              </div>
              <Button variant="primary" fullWidth size="lg" type="submit">Submit Ticket</Button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;

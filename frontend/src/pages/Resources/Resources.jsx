import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  FileText, 
  Bookmark, 
  Search, 
  ArrowRight, 
  Filter,
  Newspaper,
  ShieldCheck,
  Video
} from 'lucide-react';
import Button from '../../components/ui/Button';
import LandingNavbar from '../../components/layout/LandingNavbar';
import Footer from '../../components/layout/Footer';
import Toast from '../../components/ui/Toast';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toasts, setToasts] = useState([]);

  const categories = ['All', 'Guides', 'Case Studies', 'Video Tutorials', 'Legal'];

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const resources = [
    {
      title: 'Getting Started with Escrow',
      category: 'Guides',
      desc: 'Learn how to secure your first transaction with TrustBiz escrow milestones.',
      time: '5 min read',
      icon: <BookOpen size={20} className="text-trust-teal" />
    },
    {
      title: 'MSME Verification Process',
      category: 'Legal',
      desc: 'A step-by-step guide to verifying your business documents on the platform.',
      time: '8 min read',
      icon: <FileText size={20} className="text-trust-amber" />
    },
    {
      title: 'How to Raise a Dispute',
      category: 'Guides',
      desc: 'Understanding our mediation process and how to resolve deal conflicts.',
      time: '4 min read',
      icon: <Bookmark size={20} className="text-trust-red" />
    },
    {
      title: 'Video: Integrating Tally',
      category: 'Video Tutorials',
      desc: 'Watch how to sync your Tally Prime data with ItchFix for auto-reconciliation.',
      time: '12 min watch',
      icon: <Play size={20} className="text-trust-purple" />
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         res.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    addToast('Thanks for subscribing to our newsletter!', 'success');
  };

  return (
    <div className="bg-page-bg min-h-screen flex flex-col">
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>

      <LandingNavbar />
      
      <main className="flex-1 pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary tracking-tight">
                Knowledge <span className="text-trust-teal">Hub</span>
              </h1>
              <p className="text-base md:text-lg text-text-muted">
                Everything you need to master B2B operations, compliance, and growth in the Indian market.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-ghost" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full bg-card-bg border border-border-main rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-trust-teal/50 transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-4 border-b border-border-main">
            <Filter size={16} className="text-text-ghost shrink-0 mr-1" />
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  addToast(`Filtering by ${cat}...`, 'info');
                }}
                className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all border ${
                  activeCategory === cat 
                    ? 'bg-trust-teal text-page-bg border-trust-teal shadow-lg shadow-trust-teal/20' 
                    : 'text-text-ghost hover:text-text-primary border-transparent hover:border-border-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((res) => (
                <motion.div 
                  key={res.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group bg-card-bg border border-border-main rounded-[24px] p-6 md:p-8 hover:border-trust-teal/30 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-trust-teal/5"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-page-bg border border-border-main rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-trust-teal/5 group-hover:border-trust-teal/20 transition-colors">
                        {res.icon}
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold text-text-ghost uppercase tracking-widest bg-page-bg px-2.5 py-1 rounded border border-border-main">
                        {res.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary group-hover:text-trust-teal transition-colors leading-tight">
                        {res.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {res.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-border-main/50 mt-8">
                    <span className="text-[10px] md:text-xs font-bold text-text-ghost uppercase tracking-widest">
                      {res.time}
                    </span>
                    <button 
                      className="flex items-center gap-2 text-xs md:text-sm font-bold text-trust-teal hover:gap-3 transition-all"
                      onClick={() => addToast(`Opening ${res.title}...`, 'info')}
                    >
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-card-bg border border-border-main rounded-2xl flex items-center justify-center mx-auto text-text-ghost">
                <Search size={32} />
              </div>
              <h3 className="text-lg font-bold text-text-primary">No resources found</h3>
              <Button variant="ghost" size="sm" onClick={() => {setSearchQuery(''); setActiveCategory('All');}}>
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Newsletter Section */}
          <section className="bg-trust-teal/5 border border-trust-teal/10 rounded-[32px] p-8 md:p-12 text-center space-y-8 mt-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-trust-teal/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
            <div className="max-w-xl mx-auto space-y-4 relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">Stay Updated</h2>
              <p className="text-sm md:text-base text-text-muted">
                Get the latest insights on MSME regulations and B2B best practices delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input 
                required
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-card-bg border border-border-main rounded-xl px-6 py-3 text-sm focus:outline-none focus:border-trust-teal/50 transition-all"
              />
              <Button type="submit" variant="primary" className="px-8 py-3">Subscribe</Button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;

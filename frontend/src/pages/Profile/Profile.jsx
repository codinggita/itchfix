import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Building2, 
  MapPin, 
  Globe, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Star,
  Clock,
  ExternalLink,
  Camera,
  Edit3
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Toast from '../../components/ui/Toast';

const Profile = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const businessInfo = {
    name: 'Reliance Textiles Pvt Ltd',
    category: 'Textile Manufacturer',
    location: 'Surat, Gujarat, India',
    gst: '24AABCR1234A1Z5',
    pan: 'AABCR1234A',
    trustScore: 94,
    memberSince: 'Oct 2023',
    verified: true,
    stats: [
      { label: 'Deals Completed', value: '142' },
      { label: 'Escrow Volume', value: '₹1.2Cr' },
      { label: 'Avg. Rating', value: '4.9/5' }
    ]
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 md:space-y-8">
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
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Business Profile', path: '/profile' }]} />
          <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Business Profile</h1>
          <p className="text-text-muted text-xs md:text-sm">Public view of your verified business identity.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="primary" size="sm" onClick={() => addToast('Opening edit profile...', 'info')}>
            <Edit3 size={16} className="mr-2" /> Edit Profile
          </Button>
        </div>
      </header>

      {/* Profile Cover & Header */}
      <div className="bg-card-bg border border-border-main rounded-[24px] overflow-hidden shadow-xl shadow-trust-teal/5">
        <div className="h-32 md:h-48 bg-gradient-to-r from-trust-teal/20 via-trust-purple/10 to-trust-amber/10 relative">
          <button 
            className="absolute bottom-4 right-4 p-2 bg-page-bg/80 backdrop-blur rounded-lg text-text-primary hover:bg-page-bg transition-all border border-border-main"
            onClick={() => addToast('Update cover photo...', 'info')}
          >
            <Camera size={16} />
          </button>
        </div>
        
        <div className="px-6 md:px-8 pb-8 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12 md:-mt-16">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-page-bg border-4 border-card-bg shadow-2xl flex items-center justify-center text-trust-teal overflow-hidden relative group">
              <Building2 size={48} className="md:size-64" />
              <button 
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-all"
                onClick={() => addToast('Update logo...', 'info')}
              >
                <Camera size={20} />
              </button>
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{businessInfo.name}</h2>
                <Badge variant="teal" size="sm">
                  <ShieldCheck size={12} className="mr-1" /> VERIFIED MSME
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-text-ghost" /> {businessInfo.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <Award size={14} className="text-text-ghost" /> {businessInfo.category}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-text-ghost" /> Joined {businessInfo.memberSince}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Stats & Contact */}
        <div className="space-y-8">
          <section className="bg-card-bg border border-border-main rounded-card p-6 space-y-6">
            <h3 className="font-bold text-text-primary uppercase tracking-widest text-[10px] md:text-[12px]">Trust Performance</h3>
            <div className="grid grid-cols-1 gap-6">
              {businessInfo.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] text-text-ghost uppercase font-bold">{stat.label}</p>
                  <p className="text-2xl font-display font-bold text-text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card-bg border border-border-main rounded-card p-6 space-y-6">
            <h3 className="font-bold text-text-primary uppercase tracking-widest text-[10px] md:text-[12px]">Verification Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border-main/50">
                <span className="text-xs text-text-muted">GSTIN</span>
                <span className="text-xs font-mono font-bold text-text-primary">{businessInfo.gst}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border-main/50">
                <span className="text-xs text-text-muted">PAN</span>
                <span className="text-xs font-mono font-bold text-text-primary">{businessInfo.pan}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-text-muted">Trust Score</span>
                <Badge variant="teal">{businessInfo.trustScore}/100</Badge>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Bio & Reviews */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-card-bg border border-border-main rounded-card p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-text-primary">About Business</h3>
            <p className="text-text-secondary leading-relaxed">
              Reliance Textiles Pvt Ltd is a premier manufacturer and exporter of high-quality fabrics, specializing in sustainable cotton and innovative polyester blends. With over 15 years of industry experience, we serve major retail brands across India and Southeast Asia. Our state-of-the-art facility in Surat is certified for environmental compliance and fair labor practices.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="ghost" size="sm" className="bg-page-bg" onClick={() => addToast('Visiting website...', 'info')}>
                <Globe size={14} className="mr-2" /> Website <ExternalLink size={12} className="ml-2 opacity-50" />
              </Button>
              <Button variant="ghost" size="sm" className="bg-page-bg" onClick={() => addToast('Calling business...', 'info')}>
                <Phone size={14} className="mr-2" /> Call Now
              </Button>
              <Button variant="ghost" size="sm" className="bg-page-bg" onClick={() => addToast('Emailing business...', 'info')}>
                <Mail size={14} className="mr-2" /> Email
              </Button>
            </div>
          </section>

          <section className="bg-card-bg border border-border-main rounded-card p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-text-primary">Recent Reviews</h3>
              <div className="flex items-center gap-1 text-trust-amber">
                <Star size={16} fill="currentColor" />
                <span className="font-bold text-sm">4.9</span>
                <span className="text-text-ghost text-xs">(48 reviews)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { name: 'Adani Ports', rating: 5, comment: 'Excellent delivery speed and quality of materials. Highly recommended for bulk orders.', date: '2 weeks ago' },
                { name: 'Tata Steel', rating: 4, comment: 'Great professional behavior. Escrow release was smooth.', date: '1 month ago' }
              ].map((review, idx) => (
                <div key={idx} className="space-y-2 pb-6 border-b border-border-main last:border-0 last:pb-0">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-text-primary">{review.name}</h4>
                    <span className="text-[10px] text-text-ghost font-mono uppercase">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5 text-trust-amber">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill={i < review.rating ? 'currentColor' : 'none'} className={i >= review.rating ? 'text-text-ghost' : ''} />
                    ))}
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
            
            <Button variant="ghost" fullWidth size="sm" className="text-text-ghost hover:text-trust-teal uppercase tracking-widest text-[10px]" onClick={() => addToast('Loading all reviews...', 'info')}>
              View All 48 Reviews
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;

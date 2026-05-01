import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import TrustBadge from './TrustBadge';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-trust-teal/5 rounded-full blur-[120px] -mr-60 -mt-40" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-trust-amber/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-trust-teal/10 border border-trust-teal/20"
            >
              <TrustBadge variant="msme" size="sm" />
              <span className="text-[11px] font-bold text-trust-teal uppercase tracking-widest">Trusted by 2,000+ Indian MSMEs</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-text-primary leading-[1.1] tracking-tight"
            >
              Secure B2B Deals with <span className="text-trust-teal">Verified Trust</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Eliminate payment risks and verify suppliers instantly. TrustBiz provides India's first Escrow-backed B2B marketplace for SMEs.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" className="px-10 h-14 text-base">
                Start Trading Safely <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="ghost" size="lg" className="px-10 h-14 text-base">
                How it Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-6 pt-6"
            >
              <div className="space-y-1">
                <p className="text-2xl font-display font-bold text-text-primary font-mono tracking-tighter">₹500Cr+</p>
                <p className="text-[11px] text-text-ghost uppercase font-bold tracking-widest">Transactions Protected</p>
              </div>
              <div className="w-px h-10 bg-border-main hidden sm:block" />
              <div className="space-y-1">
                <p className="text-2xl font-display font-bold text-text-primary font-mono tracking-tighter">98%</p>
                <p className="text-[11px] text-text-ghost uppercase font-bold tracking-widest">Dispute Resolution</p>
              </div>
              <div className="w-px h-10 bg-border-main hidden sm:block" />
              <div className="flex items-center gap-1 text-trust-amber">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="ml-2 text-text-primary font-bold">4.9/5</span>
              </div>
            </motion.div>
          </div>

          {/* Image/UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 bg-card-bg border border-border-main rounded-card p-6 shadow-2xl shadow-trust-teal/20 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-trust-teal/10 flex items-center justify-center text-trust-teal">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Escrow Locked</p>
                    <p className="text-[10px] text-text-muted font-mono tracking-widest">TXN: #9021-TB</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-display font-bold text-text-primary font-mono tracking-tighter">₹2,45,000.00</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-2 w-full bg-page-bg rounded-full overflow-hidden">
                  <div className="h-full bg-trust-teal w-2/3 rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold text-text-ghost uppercase tracking-widest">
                  <span>Ordered</span>
                  <span className="text-trust-teal">Quality Check</span>
                  <span>Released</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-main flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-trust-amber/10 flex items-center justify-center text-trust-amber">
                  <CheckCircle2 size={16} />
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  Compliance verification passed for <span className="font-bold">Reliance Textiles</span>
                </p>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-trust-teal/10 rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-trust-amber/10 rounded-full -z-10 animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

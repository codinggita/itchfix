import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from './Button';

const NewsletterSignup = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-trust-teal/5 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-trust-teal/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-card-bg border border-border-main rounded-[2rem] p-8 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-trust-teal/10">
          {/* Decor Icon */}
          <div className="w-16 h-16 rounded-2xl bg-trust-teal/10 text-trust-teal flex items-center justify-center mx-auto mb-4 rotate-3 group-hover:rotate-0 transition-transform">
            <Mail size={32} />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="text-4xl font-display font-bold text-text-primary">Stay Ahead in <span className="text-trust-teal">B2B Trading</span></h3>
            <p className="text-text-muted">Get weekly insights on Indian market trends, compliance updates, and verified supplier lists directly in your inbox.</p>
          </div>

          <div className="max-w-md mx-auto relative group">
            <input 
              type="email" 
              placeholder="Enter your business email" 
              className="w-full bg-page-bg border border-border-main rounded-full py-4 pl-6 pr-36 text-sm focus:outline-none focus:border-trust-teal/50 transition-all placeholder:text-text-ghost"
            />
            <div className="absolute right-1.5 top-1.5">
              <Button variant="primary" size="sm" className="rounded-full px-6 h-11">
                Subscribe <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-[10px] font-bold text-text-ghost uppercase tracking-widest">
              <ShieldCheck size={14} className="text-trust-teal" />
              No Spam
            </div>
            <div className="w-1 h-1 bg-border-main rounded-full" />
            <div className="flex items-center gap-2 text-[10px] font-bold text-text-ghost uppercase tracking-widest">
              <ShieldCheck size={14} className="text-trust-teal" />
              Unsubscribe anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

import React from 'react';
import { ShieldCheck, Globe, Mail, MessageSquare, MapPin, Phone, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card-bg border-t border-border-main pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-trust-teal rounded-lg flex items-center justify-center shadow-lg shadow-trust-teal/20">
                <ShieldCheck className="text-page-bg" size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-display font-bold text-text-primary tracking-tight">TrustBiz</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              India's first B2B marketplace designed to eliminate payment risks for MSMEs. We verify trust, so you can focus on growth.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, MessageSquare, Mail, Info].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full border border-border-main flex items-center justify-center text-text-ghost hover:text-trust-teal hover:border-trust-teal/30 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4">
              {['Features', 'Smart Escrow', 'Supplier Network', 'TrustScore'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-muted hover:text-trust-teal transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-4">
              {['MSME Guide', 'Case Studies', 'Pricing', 'API Docs'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-muted hover:text-trust-teal transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-trust-teal shrink-0" />
                <p className="text-sm text-text-muted leading-relaxed">
                  204, Trade Centre, BKC, Mumbai,<br />Maharashtra 400051, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-trust-teal shrink-0" />
                <p className="text-sm text-text-muted">+91 1800-200-TRUST</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-trust-teal shrink-0" />
                <p className="text-sm text-text-muted">support@trustbiz.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border-main flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold text-text-ghost uppercase tracking-widest">
            © 2026 TrustBiz India Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[11px] font-bold text-text-ghost uppercase tracking-widest hover:text-trust-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-[11px] font-bold text-text-ghost uppercase tracking-widest hover:text-trust-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decor */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-trust-teal/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
};

export default Footer;

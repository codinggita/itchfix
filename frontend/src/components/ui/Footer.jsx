import React from 'react';

/**
 * Footer - Standard footer for landing pages and public screens.
 */
const Footer = () => {
  return (
    <footer className="bg-sidebar-bg border-t border-border-main py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-[20px] font-display font-extrabold text-text-primary">
            Trust<span className="text-trust-teal">Biz</span>
          </h2>
          <p className="text-[13px] text-text-muted leading-relaxed max-w-xs">
            Empowering Indian SMEs with secure payments and verified supplier networks. Trust every deal.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Platform</h4>
          <ul className="space-y-2">
            {['Suppliers', 'Smart Escrow', 'Negotiation', 'Stock Alerts'].map(link => (
              <li key={link}>
                <a href="#" className="text-[13px] text-text-ghost hover:text-trust-teal transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Company</h4>
          <ul className="space-y-2">
            {['About Us', 'MSME Guide', 'Privacy Policy', 'Contact Support'].map(link => (
              <li key={link}>
                <a href="#" className="text-[13px] text-text-ghost hover:text-trust-teal transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-right md:text-left">
          <h4 className="text-[11px] font-bold text-text-primary uppercase tracking-widest">Connect</h4>
          <div className="flex gap-4">
            {/* Social links placeholder */}
            <div className="w-8 h-8 rounded-full bg-border-main/20 hover:bg-trust-teal/20 transition-all cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-border-main/20 hover:bg-trust-teal/20 transition-all cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-border-main/20 hover:bg-trust-teal/20 transition-all cursor-pointer"></div>
          </div>
          <p className="text-[11px] text-text-faint pt-4">© 2026 TrustBiz India. MSME Verified Partner.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

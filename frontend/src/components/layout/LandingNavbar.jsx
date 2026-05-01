import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-page-bg/80 backdrop-blur-md border-b border-border-main">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-trust-teal rounded-lg flex items-center justify-center shadow-lg shadow-trust-teal/20">
            <ShieldCheck className="text-page-bg" size={22} fill="currentColor" />
          </div>
          <span className="text-xl font-display font-bold text-text-primary tracking-tight">TrustBiz</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'How it Works', 'Pricing', 'Resources'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-text-muted hover:text-trust-teal transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-card-bg border-b border-border-main p-6 space-y-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {['Features', 'How it Works', 'Pricing', 'Resources'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg font-medium text-text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-border-main flex flex-col gap-3">
            <Button variant="ghost" fullWidth>Login</Button>
            <Button variant="primary" fullWidth>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;

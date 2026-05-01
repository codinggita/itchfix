import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, Lock, ArrowRight, User, Building2, Eye, EyeOff } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Badge from '../../components/ui/Badge';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle auth here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-page-bg flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side: Branding & Info (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-card-bg border-r border-border-main p-16 flex-col justify-between relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-trust-teal/5 via-transparent to-trust-amber/5 -z-10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-trust-teal/10 rounded-full blur-[100px] -z-10" />

        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-trust-teal rounded-xl flex items-center justify-center shadow-lg shadow-trust-teal/20">
            <ShieldCheck className="text-page-bg" size={24} fill="currentColor" />
          </div>
          <span className="text-2xl font-display font-bold text-text-primary tracking-tight">TrustBiz</span>
        </Link>

        <div className="space-y-8 relative z-10">
          <motion.h2 
            key={isLogin ? 'login-h2' : 'signup-h2'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold text-text-primary leading-[1.1] tracking-tight"
          >
            {isLogin ? (
              <>Secure your <span className="text-trust-teal">B2B Deals</span> with Verified Trust.</>
            ) : (
              <>Join the network of <span className="text-trust-teal">Verified Indian MSMEs</span>.</>
            )}
          </motion.h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-md">
            India's first escrow-backed marketplace for SMEs. Eliminate payment risks and build lasting business relationships.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <Badge variant="success" size="lg" className="px-4 py-2 text-[12px]">MSME PROTECTED</Badge>
            <Badge variant="ghost" size="lg" className="px-4 py-2 text-[12px] border-border-main">RBI REGULATED ESCROW</Badge>
          </div>
        </div>

        <div className="flex items-center gap-8 text-[11px] font-bold text-text-ghost uppercase tracking-widest">
          <span>© 2026 TrustBiz India</span>
          <a href="#" className="hover:text-trust-teal transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-trust-teal transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Right Side: Auth Forms */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16 relative">
        {/* Mobile Logo */}
        <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-12">
          <div className="w-9 h-9 bg-trust-teal rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-page-bg" size={22} fill="currentColor" />
          </div>
          <span className="text-xl font-display font-bold text-text-primary">TrustBiz</span>
        </Link>

        <div className="w-full max-w-[420px] space-y-10">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-text-primary font-display tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create Business Account'}
            </h1>
            <p className="text-text-muted">
              {isLogin ? "Enter your credentials to access your dashboard" : "Start your 14-day free Growth plan trial today."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                  <Input label="Legal Business Name" placeholder="e.g. Reliance Textiles" icon={<Building2 size={16} />} required />
                  <Input label="Authorized Representative" placeholder="Rahul Shah" icon={<User size={16} />} required />
                </motion.div>
              )}
            </AnimatePresence>

            <Input label="Business Email" type="email" placeholder="name@company.com" icon={<Mail size={16} />} required />
            
            <div className="relative group">
              <Input 
                label="Password" 
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                icon={<Lock size={16} />} 
                required 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-3 text-text-ghost hover:text-trust-teal transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-border-main bg-page-bg text-trust-teal focus:ring-trust-teal/20" />
                  <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">Remember me</span>
                </label>
                <a href="#" className="text-sm font-bold text-trust-teal hover:underline uppercase tracking-tighter">Forgot Password?</a>
              </div>
            )}

            <Button variant="primary" fullWidth size="lg" className="h-14 text-base uppercase tracking-widest font-bold">
              {isLogin ? 'Sign In' : 'Register Business'} <ArrowRight size={20} className="ml-2" />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-main"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]">
              <span className="bg-page-bg px-4 text-text-ghost font-bold">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" fullWidth size="sm" className="h-12 border-border-main">
              Google
            </Button>
            <Button variant="outline" fullWidth size="sm" className="h-12 border-border-main">
              LinkedIn
            </Button>
          </div>

          <p className="text-center text-sm text-text-muted">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-trust-teal hover:underline uppercase tracking-tighter"
            >
              {isLogin ? 'Register Now' : 'Sign In Instead'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

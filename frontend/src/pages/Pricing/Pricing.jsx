import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Shield, Building, Info } from 'lucide-react';
import Button from '../../components/ui/Button';
import LandingNavbar from '../../components/layout/LandingNavbar';
import Footer from '../../components/layout/Footer';
import Toast from '../../components/ui/Toast';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const plans = [
    {
      name: 'Starter',
      price: '0',
      desc: 'For individual sellers & small traders.',
      icon: <Shield className="text-trust-teal" size={24} />,
      features: [
        'Up to ₹50k Escrow/mo',
        'Basic Supplier Search',
        '3 KYC Verifications/mo',
        'Email Support'
      ],
      cta: 'Start Free',
      variant: 'ghost'
    },
    {
      name: 'Growth',
      price: isAnnual ? '2,499' : '2,999',
      desc: 'For growing MSMEs & distributors.',
      icon: <Zap className="text-trust-purple" size={24} />,
      features: [
        'Unlimited Escrow',
        'Advanced TrustScore Data',
        'Bulk KYC Onboarding',
        'Tally & Razorpay Sync',
        'Priority Support'
      ],
      cta: 'Start 14-day Trial',
      variant: 'primary',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large manufacturers & exporters.',
      icon: <Building className="text-trust-amber" size={24} />,
      features: [
        'Multi-entity Management',
        'Custom API Access',
        'Dedicated Account Manager',
        'Legal Mediation Support',
        'White-label Reports'
      ],
      cta: 'Contact Sales',
      variant: 'outline'
    }
  ];

  const handlePlanSelect = (planName) => {
    addToast(`Selected ${planName} plan. Redirecting to checkout...`, 'info');
  };

  return (
    <div className="bg-page-bg min-h-screen">
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>

      <LandingNavbar />
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tight leading-tight">
              Scale your business with <span className="text-trust-teal text-nowrap">Confidence.</span>
            </h1>
            <p className="text-base md:text-lg text-text-muted px-2">
              Choose the plan that fits your business stage. No hidden fees, just pure B2B trust.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-text-primary' : 'text-text-ghost'}`}>Monthly</span>
              <button 
                onClick={() => {
                  setIsAnnual(!isAnnual);
                  addToast(`Switched to ${!isAnnual ? 'Yearly' : 'Monthly'} billing`, 'info');
                }}
                className="w-12 h-6 bg-border-main rounded-full relative p-1 transition-colors hover:bg-text-ghost group"
              >
                <div className={`w-4 h-4 bg-trust-teal rounded-full transition-transform duration-300 shadow-sm ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-bold transition-colors ${isAnnual ? 'text-text-primary' : 'text-text-ghost'}`}>
                Yearly <span className="text-trust-teal text-[10px] ml-1 bg-trust-teal/10 px-1.5 py-0.5 rounded border border-trust-teal/20">SAVE 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan) => (
              <motion.div 
                key={plan.name}
                whileHover={{ y: -5 }}
                className={`bg-card-bg border rounded-[24px] p-6 md:p-8 space-y-6 md:space-y-8 relative overflow-hidden flex flex-col transition-all duration-300 ${
                  plan.highlight ? 'border-trust-purple/40 shadow-2xl shadow-trust-purple/10' : 'border-border-main hover:border-text-ghost'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-trust-purple text-page-bg text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-page-bg border border-border-main rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    {plan.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary truncate">{plan.name}</h3>
                    <p className="text-xs md:text-sm text-text-muted mt-1 leading-relaxed">{plan.desc}</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-display font-black text-text-primary">
                    {plan.price !== 'Custom' ? `₹${plan.price}` : 'Custom'}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-text-ghost font-bold text-sm">/ {isAnnual ? 'year' : 'month'}</span>
                  )}
                </div>

                <ul className="space-y-3 md:space-y-4 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary">
                      <div className="shrink-0 w-5 h-5 bg-trust-teal/10 text-trust-teal rounded-full flex items-center justify-center mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant} 
                  fullWidth 
                  size="lg" 
                  className="py-4 md:py-3 text-xs md:text-sm uppercase tracking-widest font-black"
                  onClick={() => handlePlanSelect(plan.name)}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Support Section */}
          <section className="bg-card-bg/50 border border-border-main rounded-[24px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-trust-teal/10 rounded-full flex items-center justify-center text-trust-teal shrink-0">
                <Info size={28} />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-text-primary">Need a custom plan?</h4>
                <p className="text-sm text-text-muted">We offer special pricing for government-registered MSMEs and non-profits.</p>
              </div>
            </div>
            <Button variant="outline" className="w-full md:w-auto px-10" onClick={() => addToast('Opening contact form...', 'info')}>
              Talk to Us
            </Button>
          </section>

          {/* FAQ Link */}
          <div className="text-center pt-4 md:pt-8">
            <p className="text-text-muted text-xs md:text-sm">
              Have questions? <a href="/resources" className="text-trust-teal font-bold hover:underline">Visit our Knowledge Hub</a> or <a href="mailto:support@trustbiz.in" className="text-trust-teal font-bold hover:underline">Email Support</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

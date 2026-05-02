import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  FileText, 
  ChevronRight,
  Info,
  Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Toast from '../../components/ui/Toast';
import Badge from '../../components/ui/Badge';

const CheckoutSteps = ({ currentStep }) => {
  const steps = ['Review', 'Escrow Terms', 'Payment'];
  return (
    <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
              i <= currentStep ? 'bg-trust-teal border-trust-teal text-page-bg' : 'border-border-main text-text-ghost'
            }`}>
              {i + 1}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${i <= currentStep ? 'text-trust-teal' : 'text-text-ghost'}`}>{step}</span>
          </div>
          {i < steps.length - 1 && <div className={`h-0.5 flex-1 mx-4 ${i < currentStep ? 'bg-trust-teal' : 'bg-border-main'}`} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(curr => curr.filter(t => t.id !== id)), 4000);
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else {
      addToast('Order placed & funds locked in Escrow!', 'success');
      setTimeout(() => navigate('/dashboard'), 2000);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8">
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map(t => <Toast key={t.id} message={t.message} type={t.type} onClose={() => {}} />)}
        </AnimatePresence>
      </div>

      <header className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-card-bg rounded-lg border border-border-main text-text-primary transition-all">
          <ArrowLeft size={20} />
        </button>
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'Marketplace', path: '/marketplace' }, { label: 'Checkout', path: '#' }]} />
          <h1 className="text-2xl font-display font-bold text-text-primary">Finalize Your Order</h1>
        </div>
      </header>

      <CheckoutSteps currentStep={step} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                <section className="bg-card-bg border border-border-main rounded-[24px] p-6 space-y-6">
                  <h3 className="font-bold text-text-primary flex items-center gap-2"><FileText size={18} className="text-trust-teal" /> Order Summary</h3>
                  <div className="flex gap-4 p-4 bg-page-bg rounded-xl border border-border-main">
                    <div className="w-16 h-16 bg-card-bg rounded-lg flex items-center justify-center text-3xl">🧶</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary">Premium Cotton Yarn 60s</h4>
                      <p className="text-xs text-text-muted">Supplier: Reliance Textiles</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-mono font-bold text-trust-teal">₹420/Bale x 100</span>
                        <span className="text-sm font-mono font-bold text-text-primary">₹42,000</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="bg-card-bg border border-border-main rounded-[24px] p-6 space-y-4">
                  <h3 className="font-bold text-text-primary flex items-center gap-2"><Truck size={18} className="text-trust-teal" /> Delivery Address</h3>
                  <div className="p-4 bg-page-bg rounded-xl border border-border-main space-y-1">
                    <p className="text-sm font-bold text-text-primary">Tata Components Ltd - Warehouse A</p>
                    <p className="text-xs text-text-muted">Plot 42, GIDC Industrial Estate, Vapi, Gujarat - 396191</p>
                  </div>
                </section>
              </motion.div>
            )}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                <section className="bg-card-bg border border-border-main rounded-[24px] p-6 space-y-6">
                  <h3 className="font-bold text-text-primary flex items-center gap-2"><ShieldCheck size={18} className="text-trust-teal" /> Escrow Milestone Setup</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Advance Deposit', percent: '20%', amount: '₹8,400', desc: 'Released upon order confirmation' },
                      { label: 'Quality Check', percent: '50%', amount: '₹21,000', desc: 'Released after inspection at warehouse' },
                      { label: 'Final Delivery', percent: '30%', amount: '₹12,600', desc: 'Released after successful delivery' }
                    ].map((m, i) => (
                      <div key={i} className="p-4 bg-page-bg rounded-xl border border-border-main flex justify-between items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-text-primary">{m.label} ({m.percent})</p>
                          <p className="text-[10px] text-text-muted">{m.desc}</p>
                        </div>
                        <span className="font-mono font-bold text-trust-teal">{m.amount}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                <section className="bg-card-bg border border-border-main rounded-[24px] p-6 space-y-6">
                  <h3 className="font-bold text-text-primary flex items-center gap-2"><CreditCard size={18} className="text-trust-teal" /> Payment Method</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-trust-teal/5 border-2 border-trust-teal rounded-xl space-y-2 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <Badge variant="teal">Wallet</Badge>
                        <ShieldCheck size={16} className="text-trust-teal" />
                      </div>
                      <p className="text-xs text-text-muted">Available Balance</p>
                      <p className="text-lg font-mono font-bold text-text-primary">₹24,85,200</p>
                    </div>
                    <div className="p-4 bg-page-bg border border-border-main rounded-xl space-y-2 opacity-50 cursor-not-allowed">
                      <Badge variant="ghost">Bank Transfer</Badge>
                      <p className="text-xs text-text-muted">HDFC Bank ...5678</p>
                      <p className="text-lg font-mono font-bold text-text-primary">Direct Pay</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <section className="bg-card-bg border border-border-main rounded-[24px] p-6 space-y-6">
            <h3 className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Price Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Items Total</span>
                <span className="text-text-primary font-mono font-bold">₹42,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">GST (18%)</span>
                <span className="text-text-primary font-mono font-bold">₹7,560</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Platform Fee</span>
                <span className="text-trust-teal font-mono font-bold">FREE</span>
              </div>
              <div className="pt-3 border-t border-border-main flex justify-between">
                <span className="font-bold text-text-primary">Total Payable</span>
                <span className="text-xl font-display font-black text-trust-teal tracking-tighter">₹49,560</span>
              </div>
            </div>
            <Button variant="primary" fullWidth size="lg" onClick={handleNext}>
              {step === 2 ? 'Pay & Lock in Escrow' : 'Continue'} <ChevronRight size={16} className="ml-2" />
            </Button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-text-ghost font-bold uppercase tracking-widest">
              <Lock size={12} /> Secure 256-bit SSL Encryption
            </div>
          </section>

          <section className="bg-trust-teal/5 border border-trust-teal/10 rounded-card p-4 flex gap-4">
            <Info size={20} className="text-trust-teal shrink-0" />
            <p className="text-[10px] text-text-muted leading-relaxed">
              Funds will be held in a secure <span className="font-bold text-trust-teal">RBI-regulated node account</span> and only released upon your milestone approvals.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

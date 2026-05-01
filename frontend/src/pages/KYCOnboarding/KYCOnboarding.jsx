import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Info } from 'lucide-react';
import KYCForm from '../../components/forms/KYCForm';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const KYCOnboarding = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    // In a real app, this would submit the data to the backend
    // For now, we'll just navigate back to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'KYC Verification', path: '/kyc' }]} />
          <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight">Business Verification</h1>
          <p className="text-text-muted text-sm">Complete your KYC to unlock full escrow and trading features.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Form Area */}
        <div className="lg:col-span-8">
          <KYCForm onComplete={handleComplete} />
        </div>

        {/* Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-card-bg border border-border-main rounded-card p-6 space-y-4">
            <div className="flex items-center gap-3 text-trust-teal">
              <ShieldCheck size={20} />
              <h3 className="font-bold uppercase tracking-widest text-[12px]">Why verify?</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: 'Unlock Escrow', desc: 'Securely lock and release funds for large deals.' },
                { title: 'MSME Badge', desc: 'Get a verified badge on your profile to build trust.' },
                { title: 'Legal Protection', desc: 'Access our in-built dispute resolution and mediation.' }
              ].map((item, idx) => (
                <li key={idx} className="space-y-1">
                  <p className="text-sm font-bold text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-trust-amber/5 border border-trust-amber/20 rounded-card p-6 space-y-4">
            <div className="flex items-center gap-3 text-trust-amber">
              <Info size={20} />
              <h3 className="font-bold uppercase tracking-widest text-[12px]">Important Note</h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Ensure all uploaded documents are clear and valid. Any mismatch between your GSTIN and legal documents may lead to verification rejection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KYCOnboarding;

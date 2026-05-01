import React from 'react';
import LandingNavbar from '../../components/layout/LandingNavbar';
import HeroSection from '../../components/ui/HeroSection';
import FeatureGrid from '../../components/ui/FeatureGrid';
import PricingCard from '../../components/ui/PricingCard';
import TestimonialSection from '../../components/ui/TestimonialSection';
import FAQSection from '../../components/ui/FAQSection';
import NewsletterSignup from '../../components/ui/NewsletterSignup';
import Footer from '../../components/layout/Footer';
import TrustBadge from '../../components/ui/TrustBadge';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function LandingPage() {
  return (
    <div className="bg-page-bg min-h-screen">
      <LandingNavbar />
      
      <main>
        <HeroSection />

        {/* Social Proof Bar */}
        <section className="py-12 border-y border-border-main bg-card-bg/50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-bold text-text-ghost uppercase tracking-[0.4em] mb-10">
              Verified Partnerships & Integrations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
              {['GSTN', 'MSME India', 'Razorpay', 'HDFC Bank', 'Tally'].map((partner) => (
                <span key={partner} className="text-2xl font-display font-black text-text-primary tracking-tighter">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FeatureGrid />

        {/* How it Works - Quick Steps */}
        <section id="how-it-works" className="py-24 bg-card-bg/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-[12px] font-bold text-trust-teal uppercase tracking-[0.3em]">Workflow</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary leading-tight">
                  Secure your first deal in <span className="text-trust-teal">3 minutes</span>
                </h3>
                
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Verify Partner', desc: 'Instantly check GSTIN and TrustScore of any Indian business.' },
                    { step: '02', title: 'Lock Escrow', desc: 'Deposit funds in a secure RBI-regulated escrow account.' },
                    { step: '03', title: 'Approve & Release', desc: 'Verify product quality and release payment with one click.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <span className="text-4xl font-display font-black text-trust-teal/20 group-hover:text-trust-teal/40 transition-colors">
                        {item.step}
                      </span>
                      <div className="space-y-1 pt-2">
                        <h4 className="text-lg font-bold text-text-primary">{item.title}</h4>
                        <p className="text-sm text-text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="border-trust-teal/20 text-trust-teal hover:bg-trust-teal/5">
                    View Detailed Guide <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card-bg border border-border-main rounded-card p-2 shadow-2xl overflow-hidden">
                   <div className="bg-page-bg rounded-lg p-6 space-y-6">
                      <div className="flex items-center justify-between border-b border-border-main pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-trust-teal flex items-center justify-center text-page-bg">
                            <ShieldCheck size={18} />
                          </div>
                          <span className="text-sm font-bold text-text-primary uppercase tracking-wider">Escrow Manager</span>
                        </div>
                        <div className="text-[10px] font-mono text-text-muted">ID: #DEAL-9901</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-text-muted">Current Stage</span>
                          <span className="text-xs font-bold text-trust-teal uppercase tracking-widest bg-trust-teal/10 px-2 py-1 rounded">Quality Check</span>
                        </div>
                        <div className="h-1.5 w-full bg-border-main rounded-full overflow-hidden">
                          <div className="h-full bg-trust-teal w-[75%]" />
                        </div>
                      </div>

                      <div className="bg-card-bg border border-border-main p-4 rounded-lg space-y-3">
                        <div className="flex justify-between">
                          <span className="text-[10px] font-bold text-text-ghost uppercase">Total Amount</span>
                          <span className="text-sm font-mono font-bold text-text-primary">₹12,45,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[10px] font-bold text-text-ghost uppercase">Status</span>
                          <span className="text-[10px] font-bold text-trust-teal uppercase">Securely Locked</span>
                        </div>
                      </div>

                      <Button variant="primary" fullWidth size="sm" className="h-11">
                        Approve & Release Funds
                      </Button>
                   </div>
                </div>
                {/* Decor */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-trust-amber/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-trust-teal/20 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <h2 className="text-[12px] font-bold text-trust-teal uppercase tracking-[0.3em]">Plans for Everyone</h2>
              <h3 className="text-4xl font-display font-bold text-text-primary">Choose your <span className="text-trust-teal">Growth Path</span></h3>
              <p className="text-text-muted">From startup vendors to large-scale manufacturers, we have a plan that fits your business needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard 
                name="Starter" 
                price="0" 
                description="Perfect for new vendors testing the market."
                features={['3 Escrow Deals / mo', 'Basic GST Check', 'Email Support', 'Trust Score Badge']}
              />
              <PricingCard 
                name="Growth" 
                price="2,499" 
                isPopular={true}
                description="Our most popular plan for active traders."
                features={['Unlimited Escrow Deals', 'Advanced Compliance Audit', 'Priority Support', 'AI Negotiation Tool', 'Custom Invoicing']}
              />
              <PricingCard 
                name="Enterprise" 
                price="9,999" 
                description="For large manufacturers with complex needs."
                features={['Multi-user Access', 'ERP Integration (Tally/SAP)', 'Dedicated Account Manager', 'Legal Mediation Support', 'White-label Reports']}
              />
            </div>
          </div>
        </section>

        <TestimonialSection />
        <FAQSection />
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
}

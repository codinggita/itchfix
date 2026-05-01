import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, BarChart3, Clock, Lock } from 'lucide-react';

const features = [
  {
    name: 'Smart Escrow Protection',
    description: 'Payments are locked in secure escrow and only released after quality verification and mutual approval.',
    icon: <Lock size={24} />,
    color: 'text-trust-teal',
    bg: 'bg-trust-teal/10'
  },
  {
    name: 'Instant GST Verification',
    description: 'Verify supplier GSTIN, filing history, and legal names in real-time via GSTN integration.',
    icon: <ShieldCheck size={24} />,
    color: 'text-trust-purple',
    bg: 'bg-trust-purple/10'
  },
  {
    name: 'AI Negotiation Engine',
    description: 'Optimize deal terms and pricing using our AI that understands Indian B2B market trends.',
    icon: <Zap size={24} />,
    color: 'text-trust-amber',
    bg: 'bg-trust-amber/10'
  },
  {
    name: 'TrustScore Analytics',
    description: 'Every business gets a dynamic TrustScore based on compliance, delivery history, and payment behavior.',
    icon: <BarChart3 size={24} />,
    color: 'text-trust-teal',
    bg: 'bg-trust-teal/10'
  },
  {
    name: 'Dispute Resolution',
    description: 'In-built mediation and dispute handling for quality mismatches or delivery delays.',
    icon: <Clock size={24} />,
    color: 'text-trust-red',
    bg: 'bg-trust-red/10'
  },
  {
    name: 'MSME Network',
    description: 'Connect with a verified network of 2,000+ manufacturers and wholesalers across India.',
    icon: <Users size={24} />,
    color: 'text-trust-purple',
    bg: 'bg-trust-purple/10'
  }
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-page-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-[12px] font-bold text-trust-teal uppercase tracking-[0.3em]">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-text-primary leading-tight">
            Everything you need for <span className="text-trust-teal">Fearless Trading</span>
          </h3>
          <p className="text-text-muted text-lg">
            TrustBiz provides a comprehensive suite of tools designed specifically for the Indian SME ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card-bg border border-border-main rounded-card p-8 group transition-all hover:shadow-2xl hover:shadow-trust-teal/5"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-3 font-display tracking-tight">{feature.name}</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;

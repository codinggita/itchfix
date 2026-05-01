import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Avatar from './Avatar';

const testimonials = [
  {
    name: 'Rajesh Khanna',
    role: 'Founder, Khanna Textiles',
    content: 'TrustBiz has completely changed how we deal with new buyers. The Escrow system gives us peace of mind knowing the payment is secured.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    name: 'Anjali Sharma',
    role: 'Procurement Head, AutoParts India',
    content: 'The GST verification tool is a lifesaver. We saved over ₹12 Lakhs by identifying a non-compliant supplier before making the payment.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Vikram Mehta',
    role: 'CEO, Mehta Steel Corp',
    content: 'The TrustScore helps us stand out. Since getting our MSME verification badge, we have seen a 40% increase in inquiries.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-page-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-[12px] font-bold text-trust-teal uppercase tracking-[0.3em]">Success Stories</h2>
          <h3 className="text-4xl font-display font-bold text-text-primary">Trusted by India's <span className="text-trust-teal">Top SMEs</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card-bg border border-border-main rounded-card p-8 relative group"
            >
              <Quote className="absolute top-6 right-6 text-trust-teal/10 group-hover:text-trust-teal/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-trust-amber text-trust-amber" />)}
              </div>

              <p className="text-text-secondary leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <Avatar name={t.name} src={t.image} size="md" />
                <div>
                  <h4 className="font-bold text-text-primary text-sm">{t.name}</h4>
                  <p className="text-[11px] text-text-muted uppercase font-bold tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

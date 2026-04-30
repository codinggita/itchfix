import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

/**
 * PricingCard - Plans for the landing page.
 * 
 * @param {string} name - Plan name
 * @param {string} price - ₹ Price per month
 * @param {Array} features - List of features
 * @param {boolean} isPopular - Highlights the card
 */
const PricingCard = ({ name, price, features = [], isPopular = false }) => {
  return (
    <div className={`
      relative p-8 rounded-card border-2 flex flex-col gap-8 transition-all duration-300
      ${isPopular 
        ? 'bg-card-bg border-trust-teal shadow-2xl shadow-trust-teal/10 scale-105 z-10' 
        : 'bg-card-bg/50 border-border-main hover:border-text-faint'}
    `}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-trust-teal text-sidebar-bg text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-pill shadow-lg">
          Most Popular
        </div>
      )}

      <div className="space-y-2">
        <h4 className="text-[14px] font-bold text-text-muted uppercase tracking-widest">{name}</h4>
        <div className="flex items-baseline gap-1">
          <span className="text-[32px] font-dm-mono font-extrabold text-text-primary italic">₹{price}</span>
          <span className="text-[12px] text-text-ghost font-bold uppercase tracking-wider">/mo</span>
        </div>
      </div>

      <ul className="flex-1 space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-[13px] text-text-secondary">
            <div className="w-5 h-5 rounded-full bg-trust-teal/10 flex items-center justify-center text-trust-teal shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <Button 
        variant={isPopular ? 'primary' : 'ghost'} 
        fullWidth
        className="font-extrabold tracking-widest uppercase text-[11px]"
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;

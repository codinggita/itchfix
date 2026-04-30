import React from 'react';
import { Quote } from 'lucide-react';

/**
 * TestimonialCard - Customer success stories for the landing page.
 * 
 * @param {string} name - Customer name
 * @param {string} role - Designation/Title
 * @param {string} quote - Testimonial text
 * @param {string} avatar - Image URL
 */
const TestimonialCard = ({ name, role, quote, avatar }) => {
  return (
    <div className="bg-card-bg border border-border-main rounded-card p-8 relative group hover:border-trust-purple/30 transition-all">
      <div className="absolute top-6 right-8 text-trust-purple/10 group-hover:text-trust-purple/20 transition-colors">
        <Quote size={48} fill="currentColor" />
      </div>

      <p className="text-[15px] text-text-secondary leading-relaxed mb-8 relative z-10 italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border-main bg-input-bg">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-bold text-trust-purple">
              {name[0]}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-[14px] font-bold text-text-primary">{name}</h4>
          <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React from 'react';

/**
 * FeatureCard - Used in landing pages to highlight product capabilities.
 * 
 * @param {string} title - Feature name
 * @param {string} description - Feature detail
 * @param {React.ReactNode} icon - Feature icon
 * @param {string} color - 'teal', 'purple', 'amber', 'pink'
 */
const FeatureCard = ({ title, description, icon, color = 'teal' }) => {
  const colorMap = {
    teal: 'text-trust-teal bg-trust-teal/10 border-trust-teal/20',
    purple: 'text-trust-purple bg-trust-purple/10 border-trust-purple/20',
    amber: 'text-trust-amber bg-trust-amber/10 border-trust-amber/20',
    pink: 'text-trust-pink bg-trust-pink/10 border-trust-pink/20'
  };

  return (
    <div className="bg-card-bg border border-border-main rounded-card p-8 flex flex-col gap-6 hover:-translate-y-1 hover:border-border-main/80 transition-all duration-300 group">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center border ${colorMap[color]} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-[18px] font-display font-extrabold text-text-primary tracking-tight italic">
          {title}
        </h3>
        <p className="text-[13px] text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;

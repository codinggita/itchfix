import React from 'react';

/**
 * StepIndicator - Progress indicator for multi-step wizards like Onboarding.
 * 
 * @param {number} currentStep - Current active step (1-indexed)
 * @param {Array} steps - Array of step names
 */
const StepIndicator = ({ currentStep = 1, steps = [] }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border-main -translate-y-1/2 z-0"></div>
        
        {/* Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-[2px] bg-trust-teal -translate-y-1/2 z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-3">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-dm-mono font-bold text-[14px] transition-all duration-300
                ${isCurrent ? 'bg-trust-teal text-sidebar-bg scale-110 shadow-lg shadow-trust-teal/20' : 
                  isActive ? 'bg-trust-teal text-sidebar-bg' : 'bg-input-bg border-2 border-border-main text-text-muted'}
              `}>
                {stepNumber}
              </div>
              <span className={`
                absolute top-12 whitespace-nowrap text-[10px] font-bold uppercase tracking-wider transition-colors duration-300
                ${isActive ? 'text-trust-teal' : 'text-text-ghost'}
              `}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;

import React from 'react';

/**
 * TimelineItem - An individual item in a dispute or process timeline.
 * 
 * @param {string} title - Event title
 * @param {string} description - Event details
 * @param {string} date - Timestamp
 * @param {boolean} isLast - If it's the last item (removes line)
 * @param {string} type - 'success', 'warning', 'info'
 */
const TimelineItem = ({ title, description, date, isLast, type = 'info' }) => {
  const colors = {
    success: 'bg-trust-teal',
    warning: 'bg-trust-amber',
    info: 'bg-trust-purple',
    danger: 'bg-trust-red'
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${colors[type]} z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
        {!isLast && <div className="w-[2px] flex-1 bg-border-main my-1"></div>}
      </div>
      
      <div className="pb-8 space-y-1">
        <div className="flex items-center gap-3">
          <h4 className="text-[13px] font-bold text-text-primary uppercase tracking-wider">
            {title}
          </h4>
          <span className="text-[10px] font-bold text-text-ghost font-dm-mono">
            {date}
          </span>
        </div>
        <p className="text-[12px] text-text-muted leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;

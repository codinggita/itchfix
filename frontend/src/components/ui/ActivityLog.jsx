import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ShieldCheck, AlertCircle, FileText, ArrowRight } from 'lucide-react';

const ActivityLog = ({ activities = [] }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'verification': return <ShieldCheck size={16} className="text-trust-teal" />;
      case 'payment': return <CheckCircle2 size={16} className="text-trust-teal" />;
      case 'dispute': return <AlertCircle size={16} className="text-trust-red" />;
      case 'document': return <FileText size={16} className="text-trust-amber" />;
      default: return <Clock size={16} className="text-text-ghost" />;
    }
  };

  return (
    <div className="bg-card-bg border border-border-main rounded-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border-main flex items-center justify-between">
        <h3 className="font-bold text-text-primary text-sm uppercase tracking-wider">Transaction Audit Log</h3>
        <span className="text-[10px] font-mono text-text-muted">ID: #LOG-8821</span>
      </div>

      <div className="p-6">
        <div className="relative space-y-6">
          {/* Vertical Line */}
          <div className="absolute left-[7.5px] top-2 bottom-2 w-px bg-border-main/50" />

          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex gap-4 pl-6 group"
            >
              {/* Dot Icon */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-card-bg border-2 border-border-main flex items-center justify-center z-10 group-hover:border-trust-teal transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-text-ghost group-hover:bg-trust-teal transition-colors" />
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(activity.type)}
                    <span className="text-sm font-bold text-text-primary">{activity.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">{activity.time}</span>
                </div>
                
                <p className="text-[12px] text-text-muted leading-relaxed">
                  {activity.description}
                </p>

                {activity.link && (
                  <button className="flex items-center gap-1 text-[11px] font-bold text-trust-teal uppercase tracking-wider hover:gap-2 transition-all">
                    {activity.linkText || 'View Details'} <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-page-bg/30 px-6 py-3 border-t border-border-main text-center">
        <button className="text-[11px] font-bold text-text-ghost uppercase tracking-widest hover:text-trust-teal transition-colors">
          View Full History Log
        </button>
      </div>
    </div>
  );
};

export default ActivityLog;

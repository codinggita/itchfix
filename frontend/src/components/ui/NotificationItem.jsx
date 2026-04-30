import React from 'react';
import { Bell, MessageSquare, ShieldCheck, AlertTriangle } from 'lucide-react';

/**
 * NotificationItem - Individual notification row for the feed.
 * 
 * @param {string} type - 'message', 'alert', 'verification', 'system'
 * @param {string} title - Notification title
 * @param {string} description - Detailed text
 * @param {string} time - Time ago (e.g., 2m ago)
 * @param {boolean} isUnread - Shows an unread dot
 */
const NotificationItem = ({ type = 'system', title, description, time, isUnread }) => {
  const configs = {
    message: { icon: <MessageSquare size={16} />, color: 'text-trust-purple', bg: 'bg-trust-purple/10' },
    alert: { icon: <AlertTriangle size={16} />, color: 'text-trust-amber', bg: 'bg-trust-amber/10' },
    verification: { icon: <ShieldCheck size={16} />, color: 'text-trust-teal', bg: 'bg-trust-teal/10' },
    system: { icon: <Bell size={16} />, color: 'text-text-ghost', bg: 'bg-border-main/20' }
  };

  const config = configs[type];

  return (
    <div className={`
      group flex gap-4 p-4 rounded-radius-input border border-transparent transition-all cursor-pointer
      ${isUnread ? 'bg-card-bg border-border-main/50 shadow-sm' : 'hover:bg-white/5'}
    `}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${config.bg} ${config.color}`}>
        {config.icon}
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex justify-between items-start">
          <h4 className={`text-[13px] font-bold truncate ${isUnread ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
            {title}
          </h4>
          <span className="text-[10px] font-bold text-text-ghost uppercase tracking-wider whitespace-nowrap ml-2">
            {time}
          </span>
        </div>
        <p className="text-[12px] text-text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {isUnread && (
        <div className="flex flex-col justify-center">
          <div className="w-2 h-2 rounded-full bg-trust-teal shadow-[0_0_8px_rgba(0,201,167,0.5)]"></div>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;

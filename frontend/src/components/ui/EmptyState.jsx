import React from 'react';
import { Inbox } from 'lucide-react';
import Button from './Button';

/**
 * EmptyState - Placeholder for when no data is available in lists or tables.
 * 
 * @param {string} title - Main message
 * @param {string} description - Supporting text
 * @param {string} actionText - Optional button text
 * @param {function} onAction - Optional button click handler
 */
const EmptyState = ({ 
  title = "No data found", 
  description = "There are no items to display here at the moment.", 
  actionText, 
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-card-bg/30 border border-dashed border-border-main rounded-card">
      <div className="w-16 h-16 rounded-full bg-border-main/10 flex items-center justify-center text-text-ghost mb-6">
        <Inbox size={32} />
      </div>
      
      <h3 className="text-[16px] font-bold text-text-primary uppercase tracking-wider mb-2">
        {title}
      </h3>
      <p className="text-[13px] text-text-muted max-w-[280px] leading-relaxed mb-8">
        {description}
      </p>

      {actionText && (
        <Button variant="ghost" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

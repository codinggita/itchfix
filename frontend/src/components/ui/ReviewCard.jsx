import React from 'react';
import { Star } from 'lucide-react';

/**
 * ReviewCard - A card component for supplier reviews.
 * 
 * @param {string} author - Reviewer name
 * @param {string} company - Reviewer company
 * @param {number} rating - Rating (1-5)
 * @param {string} comment - Review text
 * @param {string} date - Review date
 */
const ReviewCard = ({ author, company, rating, comment, date }) => {
  return (
    <div className="bg-card-bg border border-border-main rounded-card p-5 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-[14px] font-bold text-text-primary">{author}</h4>
          <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider">{company}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < rating ? 'text-trust-amber fill-trust-amber' : 'text-text-ghost'} 
            />
          ))}
        </div>
      </div>

      <p className="text-[13px] text-text-secondary leading-relaxed italic">
        "{comment}"
      </p>

      <div className="pt-2 border-t border-border-main/50 flex justify-between items-center">
        <span className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Verified Transaction</span>
        <span className="text-[10px] font-dm-mono text-text-ghost">{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;

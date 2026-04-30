import React from 'react';
import { Star } from 'lucide-react';

const ReviewSummary = ({ 
  rating = 0, 
  totalReviews = 0, 
  breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } 
}) => {
  const stars = [5, 4, 3, 2, 1];

  return (
    <div className="bg-card-bg border border-border-main rounded-card p-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
      {/* Overall Score */}
      <div className="flex flex-col items-center justify-center text-center space-y-2 min-w-[140px]">
        <h3 className="text-[11px] font-bold text-text-muted uppercase tracking-[0.1em]">Average Rating</h3>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold font-mono text-text-primary leading-none">{rating.toFixed(1)}</span>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < Math.floor(rating) ? 'fill-trust-teal text-trust-teal' : 'text-border-main'} 
              />
            ))}
          </div>
          <p className="text-[12px] text-text-muted mt-3 font-medium">Based on {totalReviews} reviews</p>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-32 bg-border-main/50 self-center" />

      {/* Breakdown Bars */}
      <div className="flex-1 w-full space-y-3">
        {stars.map((star) => {
          const count = breakdown[star] || 0;
          const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
          
          return (
            <div key={star} className="flex items-center gap-4 group">
              <div className="flex items-center gap-1.5 w-8">
                <span className="text-sm font-mono font-bold text-text-secondary">{star}</span>
                <Star size={12} className="fill-text-ghost text-text-ghost group-hover:fill-trust-teal group-hover:text-trust-teal transition-colors" />
              </div>
              
              <div className="flex-1 h-2 bg-page-bg rounded-full overflow-hidden border border-border-main/20">
                <div 
                  className="h-full bg-trust-teal rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              
              <div className="w-10 text-right">
                <span className="text-[11px] font-mono font-medium text-text-muted">{Math.round(percentage)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSummary;

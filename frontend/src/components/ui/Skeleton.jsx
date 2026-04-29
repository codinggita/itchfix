import React from 'react';

/**
 * Skeleton - A loading placeholder component with pulse animation.
 * 
 * @param {string} className - Tailwind classes for size/shape (e.g., w-full h-4 rounded)
 */
const Skeleton = ({ className = '' }) => {
  return (
    <div 
      className={`
        animate-pulse bg-border-main/40 rounded
        ${className}
      `}
    />
  );
};

/**
 * SkeletonCard - A pre-built skeleton for a standard card.
 */
export const SkeletonCard = () => (
  <div className="bg-card-bg border border-border-main rounded-card p-5 space-y-4">
    <div className="flex justify-between items-start">
      <div className="space-y-2 flex-1">
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-1/2 h-3" />
      </div>
      <Skeleton className="w-12 h-12 rounded-full" />
    </div>
    <div className="space-y-2">
      <Skeleton className="w-full h-3" />
      <Skeleton className="w-full h-3" />
      <Skeleton className="w-2/3 h-3" />
    </div>
    <div className="flex justify-between items-center pt-2">
      <Skeleton className="w-20 h-6 rounded-pill" />
      <Skeleton className="w-16 h-3" />
    </div>
  </div>
);

export default Skeleton;

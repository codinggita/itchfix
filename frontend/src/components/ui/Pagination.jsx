import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Pagination - Navigation for large data tables.
 * 
 * @param {number} totalPages - Total number of pages
 * @param {number} currentPage - Current active page
 * @param {function} onPageChange - Handler for page changes
 */
const Pagination = ({ totalPages = 5, currentPage = 1, onPageChange }) => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-card-bg/30 border-t border-border-main rounded-b-card">
      <p className="text-[11px] font-bold text-text-ghost uppercase tracking-wider">
        Showing Page <span className="text-text-primary font-dm-mono">{currentPage}</span> of <span className="text-text-primary font-dm-mono">{totalPages}</span>
      </p>

      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange?.(currentPage - 1)}
          className="p-1.5 rounded-radius-input border border-border-main text-text-muted hover:text-text-primary hover:border-text-faint disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={16} />
        </button>
        
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange?.(page)}
              className={`
                w-8 h-8 rounded-radius-input text-[11px] font-bold font-dm-mono transition-all
                ${isActive 
                  ? 'bg-trust-teal text-sidebar-bg' 
                  : 'text-text-muted hover:text-text-primary hover:bg-white/5'}
              `}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
          className="p-1.5 rounded-radius-input border border-border-main text-text-muted hover:text-text-primary hover:border-text-faint disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

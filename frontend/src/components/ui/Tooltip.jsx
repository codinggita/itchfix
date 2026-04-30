import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Tooltip - A small popover for showing extra information.
 * 
 * @param {string} text - Tooltip content
 * @param {React.ReactNode} children - The element that triggers the tooltip
 */
const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[100]"
          >
            <div className="bg-[#0A1628] border border-border-main text-text-primary text-[11px] font-bold px-3 py-1.5 rounded-[6px] shadow-2xl whitespace-nowrap uppercase tracking-wider">
              {text}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#0A1628]"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;

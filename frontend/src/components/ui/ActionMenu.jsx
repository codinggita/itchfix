import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ActionMenu - A dropdown menu for row-level or card-level actions.
 * 
 * @param {Array} actions - Array of { label, onClick, icon, variant: 'default'|'danger' }
 */
const ActionMenu = ({ actions = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-full transition-all"
      >
        <MoreVertical size={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-[#0A1628] border border-border-main rounded-card shadow-2xl z-[150] overflow-hidden"
          >
            <div className="py-1">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    action.onClick();
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-[12px] font-bold uppercase tracking-wider transition-colors
                    ${action.variant === 'danger' 
                      ? 'text-trust-red hover:bg-trust-red/10' 
                      : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'}
                  `}
                >
                  {action.icon && <span className="shrink-0">{action.icon}</span>}
                  {action.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActionMenu;

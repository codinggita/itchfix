import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullPage = true }) => {
  return (
    <div className={`${fullPage ? 'fixed inset-0 z-[100] bg-page-bg/80 backdrop-blur-sm' : 'w-full py-20'} flex flex-col items-center justify-center space-y-4`}>
      <div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 border-4 border-trust-teal/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 border-4 border-t-trust-teal rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <p className="text-[10px] font-bold text-trust-teal uppercase tracking-[0.3em] animate-pulse">
        TrustBiz Secure Loading...
      </p>
    </div>
  );
};

export default Loader;

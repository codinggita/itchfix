import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-main last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-lg font-bold text-text-primary group-hover:text-trust-teal transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-border-main flex items-center justify-center text-text-ghost transition-all duration-300 ${isOpen ? 'rotate-180 bg-trust-teal text-page-bg border-trust-teal' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Is TrustBiz an RBI-regulated platform?",
      answer: "TrustBiz partners with RBI-regulated Escrow-as-a-Service providers and scheduled commercial banks to ensure your funds are always in safe, regulated custody."
    },
    {
      question: "How long does it take to verify a supplier?",
      answer: "Basic GST and MSME verification happens in real-time (under 30 seconds). Advanced TrustScore analysis can take up to 24 hours as it analyzes multiple data points."
    },
    {
      question: "What happens if I receive a damaged product?",
      answer: "If you have used our Escrow system, you can raise a dispute immediately. The funds will remain locked while our mediation team reviews the quality certificates and evidence."
    },
    {
      question: "Are there any hidden charges for Escrow?",
      answer: "No. We charge a flat fee or a small percentage per transaction depending on your plan. All charges are shown upfront before you lock the deal."
    }
  ];

  return (
    <section className="py-24 bg-card-bg/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="w-12 h-12 rounded-full bg-trust-teal/10 text-trust-teal flex items-center justify-center mx-auto">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-4xl font-display font-bold text-text-primary">Got <span className="text-trust-teal">Questions?</span></h3>
          <p className="text-text-muted">Everything you need to know about India's first B2B Trust platform.</p>
        </div>

        <div className="bg-card-bg border border-border-main rounded-card p-4 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

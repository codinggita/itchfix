import React from 'react';
import { Bot, User, MessageSquare } from 'lucide-react';

/**
 * NegotiationBubble - Chat-style message bubble for payment terms negotiation.
 * 
 * @param {string} sender - 'buyer', 'supplier', or 'ai'
 * @param {string} message - The content of the message
 * @param {string} time - Timestamp
 */
const NegotiationBubble = ({ sender = 'buyer', message, time }) => {
  const isAI = sender === 'ai';
  const isBuyer = sender === 'buyer';

  return (
    <div className={`flex w-full mb-6 ${isBuyer ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[80%] ${isBuyer ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          isAI ? 'bg-trust-teal/20 text-trust-teal border border-trust-teal/30' : 
          isBuyer ? 'bg-trust-purple/20 text-trust-purple' : 'bg-trust-amber/20 text-trust-amber'
        }`}>
          {isAI ? <Bot size={16} /> : <User size={16} />}
        </div>

        {/* Bubble */}
        <div className="space-y-1">
          <div className={`p-4 rounded-[14px] text-[13px] leading-relaxed ${
            isAI ? 'bg-trust-teal/10 border border-trust-teal/20 text-text-primary' :
            isBuyer ? 'bg-trust-purple text-sidebar-bg font-bold' : 'bg-card-bg border border-border-main text-text-secondary'
          }`}>
            {isAI && (
              <div className="flex items-center gap-2 mb-2 text-trust-teal font-bold text-[11px] uppercase tracking-wider">
                <MessageSquare size={12} fill="currentColor" />
                AI Suggestion
              </div>
            )}
            {message}
          </div>
          
          <p className={`text-[10px] font-bold text-text-ghost uppercase tracking-widest ${isBuyer ? 'text-right' : 'text-left'}`}>
            {sender} • {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NegotiationBubble;

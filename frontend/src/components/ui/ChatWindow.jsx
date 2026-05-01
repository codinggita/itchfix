import React from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, MoreHorizontal, User, ShieldCheck } from 'lucide-react';
import Button from './Button';
import Avatar from './Avatar';

const ChatWindow = ({ 
  recipientName, 
  recipientStatus = 'online', 
  messages = [], 
  onSendMessage 
}) => {
  return (
    <div className="flex flex-col h-[500px] bg-card-bg border border-border-main rounded-card overflow-hidden shadow-xl shadow-trust-teal/5">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-border-main flex items-center justify-between bg-page-bg/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar name={recipientName} size="md" />
            {recipientStatus === 'online' && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-trust-teal border-2 border-card-bg rounded-full" />
            )}
          </div>
          <div>
            <h4 className="font-bold text-text-primary flex items-center gap-1.5">
              {recipientName}
              <ShieldCheck size={14} className="text-trust-teal" />
            </h4>
            <p className="text-[11px] text-text-muted capitalize">{recipientStatus}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-border-main/20 rounded-full transition-colors">
          <MoreHorizontal size={20} className="text-text-ghost" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {messages.map((msg, idx) => {
          const isMe = msg.sender === 'me';
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] space-y-1 ${isMe ? 'items-end' : 'items-start'}`}>
                <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  isMe 
                    ? 'bg-trust-teal text-page-bg rounded-tr-none font-medium' 
                    : 'bg-page-bg border border-border-main text-text-secondary rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
                <p className="text-[10px] text-text-ghost font-mono px-1">
                  {msg.time} {isMe && '• Read'}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border-main bg-page-bg/30">
        <div className="relative flex items-center gap-2">
          <button className="p-2 text-text-ghost hover:text-trust-teal transition-colors">
            <Paperclip size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Type your message..."
            className="flex-1 bg-card-bg border border-border-main rounded-full px-5 py-2.5 text-sm focus:outline-none focus:border-trust-teal/50 transition-all placeholder:text-text-ghost"
          />
          <Button variant="primary" size="sm" className="rounded-full px-3 h-10 w-10 flex items-center justify-center">
            <Send size={18} />
          </Button>
        </div>
        <p className="text-[9px] text-center text-text-ghost mt-3 uppercase tracking-widest font-bold">
          Encrypted & Logged for Escrow Verification
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;

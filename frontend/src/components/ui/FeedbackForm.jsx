import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Send, ShieldCheck } from 'lucide-react';
import Button from './Button';
import TextArea from './TextArea';

const FeedbackForm = ({ transactionId, supplierName, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <div className="bg-card-bg border border-border-main rounded-card overflow-hidden shadow-xl shadow-trust-teal/5">
      <div className="p-6 bg-page-bg/50 border-b border-border-main text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-trust-teal/10 text-trust-teal flex items-center justify-center mx-auto mb-2">
          <ShieldCheck size={24} />
        </div>
        <h3 className="text-xl font-bold font-display text-text-primary">Rate Your Experience</h3>
        <p className="text-sm text-text-muted">How was your transaction with <span className="text-trust-teal font-bold">{supplierName}</span>?</p>
        <p className="text-[10px] font-mono text-text-ghost uppercase tracking-widest pt-1">Transaction ID: {transactionId}</p>
      </div>

      <div className="p-8 space-y-8">
        {/* Star Rating */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="p-1"
              >
                <Star 
                  size={40} 
                  className={`transition-colors duration-200 ${
                    star <= (hoverRating || rating) 
                      ? 'fill-trust-teal text-trust-teal' 
                      : 'text-border-main fill-transparent'
                  }`}
                />
              </motion.button>
            ))}
          </div>
          <span className="text-[12px] font-bold text-trust-teal uppercase tracking-[0.2em] h-4">
            {rating === 5 ? 'Excellent' : rating === 4 ? 'Very Good' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : rating === 1 ? 'Poor' : ''}
          </span>
        </div>

        {/* Comment Area */}
        <TextArea 
          label="Detailed Feedback" 
          placeholder="Share your experience regarding product quality, delivery time, and communication..."
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="space-y-4">
          <Button 
            variant="primary" 
            fullWidth 
            disabled={rating === 0}
            onClick={() => onSubmit?.({ rating, comment })}
            className="h-12 text-sm uppercase tracking-widest font-bold"
          >
            <Send size={16} className="mr-2" /> Submit Review
          </Button>
          <p className="text-[10px] text-center text-text-ghost leading-relaxed px-4">
            Your feedback helps maintain the <span className="font-bold text-trust-teal">TrustScore</span> of suppliers and ensures a safer ecosystem for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

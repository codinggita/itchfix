import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Plus,
  Send,
  Gavel
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ChatWindow from '../../components/ui/ChatWindow';
import MilestoneRow from '../../components/ui/MilestoneRow';
import StatusPill from '../../components/ui/StatusPill';
import AmountDisplay from '../../components/ui/AmountDisplay';
import Button from '../../components/ui/Button';
import NegotiationBubble from '../../components/ui/NegotiationBubble';
import Badge from '../../components/ui/Badge';

const Negotiation = () => {
  const [activeNegotiation, setActiveNegotiation] = useState('Reliance Textiles');

  const milestones = [
    { label: 'Advance Payment', amount: '₹43,500', status: 'completed' },
    { label: 'Quality Verification', amount: '₹0', status: 'in_progress' },
    { label: 'Final Delivery', amount: '₹1,01,500', status: 'pending' },
  ];

  const messages = [
    { sender: 'them', text: 'Namaste Rahul, we have reviewed your quantity requirement for Batch #102.', time: '09:45 AM' },
    { sender: 'me', text: 'Great. Can we finalize the credit period? We need at least 45 days.', time: '10:05 AM' },
    { sender: 'them', text: 'We can offer 30 days. However, we can reduce the advance to 15%.', time: '10:15 AM' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Negotiations', path: '/payment-terms' }]} />
          <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight flex items-center gap-3">
            Deal Negotiation <Badge variant="warning" size="sm">Active</Badge>
          </h1>
          <p className="text-text-muted text-sm">Finalize payment terms and escrow milestones with your partners.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <FileText size={16} className="mr-2" /> View Contract
          </Button>
          <Button variant="primary" size="sm">
            <Lock size={16} className="mr-2" /> Lock Deal
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Chat Area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-card-bg border border-border-main rounded-card overflow-hidden flex flex-col h-[650px]">
            <ChatWindow 
              recipientName="Reliance Textiles"
              recipientStatus="online"
              messages={messages}
            />
          </div>
        </div>

        {/* Right: Terms & Milestones */}
        <div className="lg:col-span-5 space-y-8">
          {/* Current Proposal Card */}
          <section className="bg-card-bg border border-border-main rounded-card p-6 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Gavel size={100} />
            </div>
            
            <div className="flex items-center justify-between border-b border-border-main pb-4">
              <h3 className="font-bold text-text-primary uppercase tracking-widest text-[12px]">Current Proposal</h3>
              <StatusPill status="pending" label="In Negotiation" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-ghost uppercase">Total Deal Value</p>
                <AmountDisplay value="1,45,000.00" size="md" color="text-trust-teal" showSymbol />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-text-ghost uppercase">Credit Period</p>
                <p className="text-lg font-mono font-bold text-text-secondary">30 Days</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Escrow Milestones</h4>
              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <MilestoneRow key={i} {...m} />
                ))}
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Button variant="outline" fullWidth size="sm">Modify Terms</Button>
              <Button variant="primary" fullWidth size="sm">Accept Proposal</Button>
            </div>
          </section>

          {/* AI Suggestion Box */}
          <section className="bg-trust-purple/5 border border-trust-purple/20 rounded-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-trust-purple">
              <ShieldCheck size={18} />
              <h4 className="text-sm font-bold uppercase tracking-wider">AI Deal Optimizer</h4>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Based on <span className="font-bold">Reliance Textiles'</span> history, they usually accept a <span className="text-trust-purple font-bold">45-day credit period</span> if the advance is increased to <span className="text-trust-purple font-bold">20%</span>.
            </p>
            <Button variant="ghost" size="sm" className="text-trust-purple hover:bg-trust-purple/10 w-full justify-between">
              Apply Suggestion <ChevronRight size={14} />
            </Button>
          </section>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-4 bg-card-bg border border-border-main rounded-card hover:border-trust-teal/30 transition-all group">
              <Plus size={20} className="text-text-ghost group-hover:text-trust-teal mb-2" />
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Add Milestone</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-card-bg border border-border-main rounded-card hover:border-trust-amber/30 transition-all group">
              <FileText size={20} className="text-text-ghost group-hover:text-trust-amber mb-2" />
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Request Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Negotiation;

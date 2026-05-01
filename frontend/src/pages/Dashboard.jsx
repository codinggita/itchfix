import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MetricCard from '../components/ui/MetricCard';
import StatusPill from '../components/ui/StatusPill';
import TrustScoreRing from '../components/ui/TrustScoreRing';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import DataTable from '../components/ui/Table';
import SupplierCard from '../components/ui/SupplierCard';
import UrgentActionPanel from '../components/ui/UrgentActionPanel';
import InventoryProgressBar from '../components/ui/ProgressBar';
import ComplianceBarChart from '../components/ui/ComplianceBarChart';
import NegotiationBubble from '../components/ui/NegotiationBubble';
import Modal from '../components/ui/Modal';
import StepIndicator from '../components/ui/StepIndicator';
import MilestoneRow from '../components/ui/MilestoneRow';
import TimelineItem from '../components/ui/TimelineItem';
import Badge from '../components/ui/Badge';
import SearchBar from '../components/ui/SearchBar';
import UserProfileCard from '../components/ui/UserProfileCard';
import DocumentCard from '../components/ui/DocumentCard';
import ReviewCard from '../components/ui/ReviewCard';
import FilterPill from '../components/ui/FilterPill';
import FileUploader from '../components/ui/FileUpload';
import Skeleton, { SkeletonCard } from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import Alert from '../components/ui/Alert';
import Tabs from '../components/ui/Tabs';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Dropdown from '../components/ui/Dropdown';
import Switch from '../components/ui/Switch';
import TextArea from '../components/ui/TextArea';
import Checkbox from '../components/ui/Checkbox';
import Tooltip from '../components/ui/Tooltip';
import Toast from '../components/ui/Toast';
import Avatar from '../components/ui/Avatar';
import Accordion from '../components/ui/Accordion';
import Divider from '../components/ui/Divider';
import ActionMenu from '../components/ui/ActionMenu';
import AmountDisplay from '../components/ui/AmountDisplay';
import Pagination from '../components/ui/Pagination';
import RadioCard from '../components/ui/RadioCard';
import FeatureCard from '../components/ui/FeatureCard';
import StatMetric from '../components/ui/StatMetric';
import Footer from '../components/ui/Footer';
import TestimonialCard from '../components/ui/TestimonialCard';
import TrustBadge from '../components/ui/TrustBadge';
import NotificationItem from '../components/ui/NotificationItem';
import VerificationGrid from '../components/ui/VerificationGrid';
import PricingCard from '../components/ui/PricingCard';
import TransactionCard from '../components/ui/TransactionCard';
import ReviewSummary from '../components/ui/ReviewSummary';
import BusinessProfileHeader from '../components/ui/BusinessProfileHeader';
import MetricGroup from '../components/ui/MetricGroup';
import BankCard from '../components/ui/BankCard';
import IntegrationCard from '../components/ui/IntegrationCard';
import DisputeCard from '../components/ui/DisputeCard';
import GSTInfoCard from '../components/ui/GSTInfoCard';
import TrustFactorItem from '../components/ui/TrustFactorItem';
import ChatWindow from '../components/ui/ChatWindow';
import ActivityLog from '../components/ui/ActivityLog';
import InvoiceSummary from '../components/ui/InvoiceSummary';
import { Plus, Info, Edit, Trash2, ExternalLink, Factory, Store, ShieldCheck, CreditCard, MessageSquare, Briefcase, Zap, Database, AlertTriangle, ShieldAlert, FileText, History } from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [selectedBizType, setSelectedBizType] = useState('mfg');

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id) => {
    setToasts(currentToasts => currentToasts.filter(t => t.id !== id));
  };

  const columns = [
    { header: 'Supplier Name', accessor: 'name' },
    { 
      header: 'TrustScore', 
      accessor: 'score',
      render: (score) => (
        <Tooltip text={`Score: ${score}/100`}>
          <TrustScoreRing score={score} size={40} />
        </Tooltip>
      )
    },
    { header: 'GST Number', accessor: 'gst' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <StatusPill status={status} />
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: () => (
        <ActionMenu actions={[
          { label: 'View Details', icon: <ExternalLink size={14} />, onClick: () => {} },
          { label: 'Edit Info', icon: <Edit size={14} />, onClick: () => {} },
          { label: 'Delete', icon: <Trash2 size={14} />, variant: 'danger', onClick: () => {} }
        ]} />
      )
    }
  ];

  const data = [
    { name: 'Reliance Textiles Pvt Ltd', score: 94, gst: '27AABCR1234A1Z5', status: 'verified' },
    { name: 'Tata Components Ltd', score: 87, gst: '22AABCT5678B2Z3', status: 'verified' },
    { name: 'Flipkart Vendors Hub', score: 61, gst: '29AABCF2345C3Z1', status: 'pending' },
    { name: 'Rajesh Auto Parts', score: 42, gst: '08AABCR4567E5Z7', status: 'risky' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 pb-0 relative">
      <div className="fixed top-8 right-8 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>

      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Dashboard', path: '/dashboard' }]} />
          <h1 className="text-3xl font-bold font-display text-trust-teal">TrustBiz Dashboard</h1>
          <p className="text-text-muted">Welcome back, Rahul Shah (MSME Verified)</p>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={16} /> New Transaction
        </Button>
      </header>

      {/* Batch 21 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-trust-teal/60 shadow-2xl shadow-trust-teal/10">
        <div className="flex items-center justify-between border-b border-border-main pb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-trust-teal uppercase tracking-widest">Batch 21 UI Preview</h2>
            <p className="text-[11px] text-text-muted font-mono">NEGOTIATION & AUDIT LOGS</p>
          </div>
          <Badge variant="success" className="animate-pulse">Finalizing Library</Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. Chat Window */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
              <MessageSquare size={14} className="text-trust-teal" /> 1. Negotiation Chat
            </h3>
            <ChatWindow 
              recipientName="Reliance Textiles"
              messages={[
                { sender: 'them', text: 'Regarding Batch #102, the GST invoice is attached.', time: '10:15 AM' },
                { sender: 'me', text: 'Checking now. Is the quality certificate included?', time: '10:18 AM' },
                { sender: 'them', text: 'Yes, it is in the same PDF.', time: '10:20 AM' },
              ]}
            />
          </div>

          {/* 2. Activity Log & Invoice Summary */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                <History size={14} className="text-trust-teal" /> 2. Audit Trail
              </h3>
              <ActivityLog 
                activities={[
                  { type: 'verification', title: 'GST Verified', description: 'Reliance Textiles GSTIN 27AABCR... verified.', time: 'Today, 9:00 AM' },
                  { type: 'payment', title: 'Payment Locked', description: '₹1,45,000 locked in escrow for Deal #9021.', time: 'Today, 10:45 AM', link: true },
                  { type: 'document', title: 'Invoice Uploaded', description: 'Invoice #INV-2024-001 uploaded by supplier.', time: 'Yesterday', link: true, linkText: 'View Invoice' },
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                <FileText size={14} className="text-trust-teal" /> 3. Invoice Summary
              </h3>
              <InvoiceSummary 
                invoiceNo="INV-2024-001"
                date="May 01, 2026"
                dueDate="May 15, 2026"
                amount="1,45,000.00"
                gstAmount="26,100.00"
                clientName="Tata Components Ltd"
                status="pending"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Batch 20 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-trust-red/40 opacity-60">
        <div className="flex items-center justify-between border-b border-border-main pb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-trust-red uppercase tracking-widest">Batch 20 UI Preview</h2>
            <p className="text-[11px] text-text-muted font-mono">COMPLIANCE & RISK MANAGEMENT</p>
          </div>
          <Badge variant="danger" className="animate-pulse">Security Focus</Badge>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Dispute Management */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle size={14} className="text-trust-red" /> 1. Dispute Management
            </h3>
            <DisputeCard 
              transactionId="TXN-4402"
              subject="Quality Mismatch - Batch #102"
              status="under_review"
              dateRaised="Apr 25, 2026"
              lastUpdate="2 hours ago"
              description="The received fabric quality does not match the approved sample from March. Thread count is lower than specified."
            />
          </div>

          {/* 2. Detailed GST View */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert size={14} className="text-trust-teal" /> 2. Compliance Deep-Dive
            </h3>
            <GSTInfoCard 
              gstin="27AABCR1234A1Z5"
              legalName="Reliance Textiles Pvt Ltd"
              status="Active"
              filingStatus="Regular Taxpayer"
              registrationDate="12/08/2017"
              lastFiled="Mar 2026 (GSTR-3B)"
            />
          </div>

          {/* 3. Trust Score Factors */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={14} className="text-trust-teal" /> 3. Trust Score Factors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TrustFactorItem 
                label="GST Compliance"
                impact="positive"
                scoreEffect={15}
                description="Consistent GSTR-1 & 3B filing for 24 months."
              />
              <TrustFactorItem 
                label="Late Delivery"
                impact="negative"
                scoreEffect={8}
                description="3 shipments delayed in the last quarter."
              />
              <TrustFactorItem 
                label="MSME Verified"
                impact="positive"
                scoreEffect={10}
                description="Udyam Registration verified successfully."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Batch 19 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-trust-teal/50 opacity-60">
        <div className="flex items-center justify-between border-b border-border-main pb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-trust-teal uppercase tracking-widest">Batch 19 UI Preview</h2>
            <p className="text-[11px] text-text-muted font-mono">FINANCIAL & INTEGRATION MODULES</p>
          </div>
          <Badge variant="success" className="animate-pulse">Active Dev</Badge>
        </div>
        
        <div className="space-y-10">
          {/* 1. Metric Group */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
              <Zap size={14} className="text-trust-teal" /> 1. Metric Group Layout
            </h3>
            <MetricGroup 
              metrics={[
                { label: 'Active Escrows', value: '12', trend: 'up', trendValue: '14%', icon: <ShieldCheck size={20} /> },
                { label: 'Pending GST', value: '₹42,500', trend: 'down', trendValue: '5%', icon: <Briefcase size={20} /> },
                { label: 'Total Volume', value: '₹12.4L', trend: 'up', trendValue: '22%', icon: <CreditCard size={20} /> },
                { label: 'Trust Messages', value: '48', trend: 'neutral', trendValue: '0%', icon: <MessageSquare size={20} /> },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 2. Bank Card */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                <CreditCard size={14} className="text-trust-teal" /> 2. Bank Management
              </h3>
              <BankCard 
                bankName="HDFC Bank Ltd"
                accountNumber="XXXXXX5678"
                accountType="Current Account"
                isPrimary={true}
              />
            </div>

            {/* 3. Integration Cards */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                <Database size={14} className="text-trust-teal" /> 3. SaaS Integrations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <IntegrationCard 
                  name="Tally Prime"
                  description="Sync invoices and reconciliation data directly with your Tally ERP."
                  isConnected={true}
                  icon={Database}
                />
                <IntegrationCard 
                  name="WhatsApp Biz"
                  description="Send automated payment reminders and trust score updates."
                  status="beta"
                  icon={MessageSquare}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch 18 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-trust-teal/30 opacity-60">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-trust-teal uppercase tracking-widest">Batch 18 UI Preview</h2>
          <Badge variant="success">Production Ready</Badge>
        </div>
        
        <div className="space-y-10">
          {/* 1. Business Profile Header */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">1. Business Profile Header</h3>
            <BusinessProfileHeader 
              name="Reliance Textiles Pvt Ltd"
              category="Wholesale Textile Manufacturer"
              location="Surat, Gujarat"
              website="www.reliancetextiles.in"
              joinedDate="Oct 2023"
              trustScore={94}
              isVerified={true}
              gstNumber="24AABCR1234A1Z5"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 2. Review Summary */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">2. Review Summary</h3>
              <ReviewSummary 
                rating={4.8}
                totalReviews={128}
                breakdown={{ 5: 90, 4: 25, 3: 8, 2: 3, 1: 2 }}
              />
            </div>

            {/* 3. Transaction Cards */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">3. Transaction Cards (Compact)</h3>
              <div className="grid grid-cols-1 gap-4">
                <TransactionCard 
                  id="TXN-9021"
                  amount="1,45,000.00"
                  status="completed"
                  date="Apr 28, 2026"
                  businessName="Tata Components Ltd"
                  type="payment"
                  isEscrow={true}
                />
                <TransactionCard 
                  id="TXN-9025"
                  amount="82,400.00"
                  status="pending"
                  date="Apr 30, 2026"
                  businessName="Rajesh Auto Parts"
                  type="receipt"
                  isEscrow={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch 15 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-border-main opacity-60">
        <h2 className="text-xl font-bold text-text-secondary uppercase tracking-widest text-center">Batch 15 UI Preview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notification Feed */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Live Feed</h3>
            <div className="bg-card-bg rounded-card border border-border-main p-2 space-y-1">
              <NotificationItem 
                type="verification" 
                title="GST Verified" 
                description="Reliance Textiles verification complete." 
                time="2m ago" 
                isUnread 
              />
              <NotificationItem 
                type="message" 
                title="New AI Suggestion" 
                description="Optimization found for Deal #902." 
                time="15m ago" 
              />
            </div>
          </div>

          {/* Verification Status */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Compliance Checklist</h3>
            <VerificationGrid gst={true} pan={true} bank={false} />
            <div className="pt-4">
              <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider mb-4">Subscription Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PricingCard 
                  name="Growth" 
                  price="2,499" 
                  isPopular 
                  features={['Unlimited Escrows', 'AI Negotiation', 'Priority Support']} 
                />
                <PricingCard 
                  name="Starter" 
                  price="0" 
                  features={['3 Escrows/mo', 'Basic Verification', 'Email Support']} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <section className="space-y-4">
        <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Footer Layout</h3>
        <Footer />
      </section>

      {/* Simplified Dashboard for clarity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-50 pointer-events-none">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card-bg border border-border-main rounded-card p-6 h-40 flex items-center justify-center">
            <p className="text-text-ghost uppercase font-bold text-[11px] tracking-widest">Previous Batches Hidden for Space</p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Transaction">
        <div className="space-y-6">
          <Dropdown label="Select Supplier" options={data.map(d => ({ label: d.name, value: d.gst }))} />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase text-text-muted tracking-[0.08em] ml-1">Amount</label>
              <AmountDisplay value="0.00" size="md" color="text-text-primary" />
            </div>
            <Input label="GST Number" placeholder="27AABCR..." />
          </div>
          <TextArea label="Transaction Notes" placeholder="Add instructions..." rows={2} />
          <div className="pt-4 flex gap-3">
            <Button variant="ghost" fullWidth onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" fullWidth onClick={() => { addToast('Transaction Locked!', 'success'); setIsModalOpen(false); }}>Lock in Escrow</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

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
import { Plus, Info, Edit, Trash2, ExternalLink, Factory, Store, Zap, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
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
    <div className="p-8 max-w-7xl mx-auto space-y-12 pb-20 relative">
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

      {/* Batch 13 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-border-main">
        <h2 className="text-xl font-bold text-text-secondary uppercase tracking-widest text-center">Batch 13 UI Preview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature Card */}
          <FeatureCard 
            title="Smart Escrow" 
            description="Secure your payments with milestone-based locking and automated release." 
            icon={<ShieldCheck size={28} />}
            color="teal"
          />

          {/* Radio Cards */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider text-center">Business Selection</h3>
            <div className="grid grid-cols-1 gap-3">
              <RadioCard 
                id="mfg" 
                name="biz_type"
                label="Manufacturing" 
                description="Factories and production units." 
                icon={<Factory size={18} />}
                selected={selectedBizType}
                onChange={setSelectedBizType}
              />
              <RadioCard 
                id="retail" 
                name="biz_type"
                label="Retail/Trade" 
                description="Shops and wholesale distributors." 
                icon={<Store size={18} />}
                selected={selectedBizType}
                onChange={setSelectedBizType}
              />
            </div>
          </div>

          {/* Stat Metrics */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider text-center">Quick Profile Stats</h3>
            <div className="p-6 bg-card-bg rounded-card border border-border-main grid grid-cols-1 gap-6">
              <StatMetric label="Avg Delivery Time" value="4.2 Days" trend={-12} subValue="20% faster than last month" />
              <StatMetric label="Total Orders" value="1,248" trend={15} subValue="Verified transactions" />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Batches Section... */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ComplianceBarChart data={[
            { month: 'Jan', value: 85 }, { month: 'Feb', value: 72 }, { month: 'Mar', value: 91 },
            { month: 'Apr', value: 78 }, { month: 'May', value: 94 }, { month: 'Jun', value: 88 },
          ]} />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-secondary">Recent Suppliers</h2>
              <SearchBar placeholder="Search suppliers..." width="280px" />
            </div>
            <div className="bg-card-bg border border-border-main rounded-card">
              <DataTable columns={columns} data={data} />
              <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
            </div>
          </div>
        </div>
        <aside className="space-y-8">
          <section className="bg-[#0A1628] p-6 rounded-card border border-border-main">
            <h2 className="text-lg font-semibold text-text-secondary mb-6">AI Negotiation</h2>
            <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              <NegotiationBubble sender="supplier" message="Net-30 payment terms please." time="10:30 AM" />
              <NegotiationBubble sender="ai" message="Suggestion: Offer Net-20 with 1.5% discount." time="10:31 AM" />
            </div>
          </section>
          <section className="bg-card-bg p-6 rounded-card border border-border-main space-y-6">
            <h2 className="text-lg font-semibold text-text-secondary">Live Stock Monitor</h2>
            <div className="space-y-6">
              <InventoryProgressBar label="Cotton Fabric" percentage={82} />
              <InventoryProgressBar label="Steel Bolts" percentage={15} />
            </div>
          </section>
        </aside>
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

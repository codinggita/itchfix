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
import { Plus, Info, Edit, Trash2, ExternalLink } from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id) => {
    setToasts(currentToasts => currentToasts.filter(t => t.id !== id));
  };

  const chartData = [
    { month: 'Jan', value: 85 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 91 },
    { month: 'Apr', value: 78 },
    { month: 'May', value: 94 },
    { month: 'Jun', value: 88 },
  ];

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
          { label: 'View Details', icon: <ExternalLink size={14} />, onClick: () => addToast('Opening details...', 'info') },
          { label: 'Edit Info', icon: <Edit size={14} />, onClick: () => addToast('Edit mode active', 'warning') },
          { label: 'Delete', icon: <Trash2 size={14} />, variant: 'danger', onClick: () => addToast('Supplier removed', 'error') }
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
      {/* Toast Container */}
      <div className="fixed top-8 right-8 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast 
              key={toast.id} 
              message={toast.message} 
              type={toast.type} 
              onClose={() => removeToast(toast.id)} 
            />
          ))}
        </AnimatePresence>
      </div>

      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <Breadcrumbs items={[
            { label: 'TrustBiz', path: '/' },
            { label: 'Dashboard', path: '/dashboard' }
          ]} />
          <h1 className="text-3xl font-bold font-display text-trust-teal">TrustBiz Dashboard</h1>
          <p className="text-text-muted">Welcome back, Rahul Shah (MSME Verified)</p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => addToast('System scan complete.', 'success')}>
            Scan Status
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} /> New Transaction
          </Button>
        </div>
      </header>

      {/* Batch 12 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-border-main">
        <h2 className="text-xl font-bold text-text-secondary uppercase tracking-widest text-center">Batch 12 UI Preview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Amount Display Showcase */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Financial Formatting</h3>
            <div className="p-5 bg-card-bg rounded-card border border-border-main flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-text-ghost uppercase font-bold">Total Balance</span>
                <AmountDisplay value="12,40,000" size="lg" color="text-trust-teal" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-text-ghost uppercase font-bold">Escrow Locked</span>
                <AmountDisplay value="8,25,000" size="md" color="text-trust-amber" />
              </div>
            </div>
          </div>

          {/* Action Menu Showcase */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Contextual Actions</h3>
            <div className="p-5 bg-card-bg rounded-card border border-border-main flex items-center justify-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <p className="text-[10px] text-text-ghost font-bold uppercase">Table Row</p>
                <ActionMenu actions={[
                  { label: 'View Profile', onClick: () => {} },
                  { label: 'Contact', onClick: () => {} }
                ]} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-[10px] text-text-ghost font-bold uppercase">Card Action</p>
                <ActionMenu actions={[
                  { label: 'Download', icon: <Plus size={14} />, onClick: () => {} },
                  { label: 'Delete', variant: 'danger', onClick: () => {} }
                ]} />
              </div>
            </div>
          </div>

          {/* Pagination Showcase */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Data Pagination</h3>
            <div className="h-full flex items-end">
              <div className="w-full">
                <Pagination 
                  currentPage={currentPage} 
                  totalPages={3} 
                  onPageChange={setCurrentPage} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Batches Section... */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ComplianceBarChart data={chartData} />
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
            <Input label="Amount" placeholder="₹ 0.00" />
            <Input label="GST Number" placeholder="27AABCR..." />
          </div>
          <TextArea label="Transaction Notes" placeholder="Add instructions..." rows={2} />
          <Checkbox label="I confirm these terms are final" checked={isAgreed} onChange={setIsAgreed} />
          <div className="pt-4 flex gap-3">
            <Button variant="ghost" fullWidth onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" fullWidth onClick={() => { addToast('Transaction Locked!', 'success'); setIsModalOpen(false); }}>Lock in Escrow</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

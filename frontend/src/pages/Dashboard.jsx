import React, { useState } from 'react';
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
import { Plus } from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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
      render: (score) => <TrustScoreRing score={score} size={40} />
    },
    { header: 'GST Number', accessor: 'gst' },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (status) => <StatusPill status={status} />
    },
  ];

  const data = [
    { name: 'Reliance Textiles Pvt Ltd', score: 94, gst: '27AABCR1234A1Z5', status: 'verified' },
    { name: 'Tata Components Ltd', score: 87, gst: '22AABCT5678B2Z3', status: 'verified' },
    { name: 'Flipkart Vendors Hub', score: 61, gst: '29AABCF2345C3Z1', status: 'pending' },
    { name: 'Rajesh Auto Parts', score: 42, gst: '08AABCR4567E5Z7', status: 'risky' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 pb-20">
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
          <Button variant="ghost" onClick={() => setIsLoading(!isLoading)}>
            {isLoading ? 'Stop Loading' : 'Test Skeleton'}
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} /> New Transaction
          </Button>
        </div>
      </header>

      {/* Batch 8 Components Preview Section */}
      <section className="space-y-8 bg-card-bg/30 p-8 rounded-card border border-dashed border-border-main">
        <h2 className="text-xl font-bold text-text-secondary uppercase tracking-widest text-center">Batch 8 UI Preview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Tabs & Alerts */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Tab Navigation & Feedback</h3>
            <Tabs 
              items={[
                { label: 'Overview', id: 'overview' },
                { label: 'Suppliers', id: 'suppliers' },
                { label: 'Escrow', id: 'escrow' }
              ]} 
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            <div className="space-y-4 pt-2">
              <Alert 
                variant="success" 
                title="Payment Released" 
                message="₹2.25L successfully released for Textile Bulk Order." 
              />
              <Alert 
                variant="warning" 
                title="KYC Update Required" 
                message="Your GST certificate expires in 12 days. Please update soon." 
              />
            </div>
          </div>

          {/* Additional Alerts */}
          <div className="space-y-6 pt-10">
            <Alert 
              variant="danger" 
              title="Dispute Alert" 
              message="New dispute raised by PixelCraft Studio for Website Redesign." 
            />
            <Alert 
              variant="info" 
              title="System Notice" 
              message="Scheduled maintenance on May 5th, 2:00 AM to 4:00 AM." 
            />
          </div>
        </div>
      </section>

      {/* Previous Batches... */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">File Uploader (Batch 7)</h3>
          <FileUploader label="Upload MSME Certificate" />
        </div>
        <div className="space-y-4">
          <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Skeleton (Batch 7)</h3>
          {isLoading ? <SkeletonCard /> : <div className="p-5 bg-card-bg border border-border-main rounded-card text-center py-10 text-text-muted text-[13px]">Test Skeleton</div>}
        </div>
      </div>

      <UrgentActionPanel 
        title="Action Required: 2 Risky Suppliers Detected"
        description="Rajesh Auto Parts and Mehta Pharma have shown suspicious activity."
        buttonText="Review Now"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8">
          <ComplianceBarChart data={chartData} />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-secondary">Recent Suppliers</h2>
              <SearchBar placeholder="Search suppliers..." width="280px" />
            </div>
            <DataTable columns={columns} data={data} />
          </div>
        </section>

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
          <Input label="Supplier Name" placeholder="Search suppliers..." />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Amount" placeholder="₹ 0.00" />
            <Input label="GST (Optional)" placeholder="27AABCR..." />
          </div>
          <div className="pt-4 flex gap-3">
            <Button variant="ghost" fullWidth onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="primary" fullWidth>Lock in Escrow</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

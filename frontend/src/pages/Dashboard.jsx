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
import { Plus } from 'lucide-react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-trust-teal">TrustBiz Dashboard</h1>
          <p className="text-text-muted mt-2">Welcome back, Rahul Shah (MSME Verified)</p>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={16} /> New Transaction
        </Button>
      </header>

      {/* Batch 5 Components Preview Section */}
      <section className="space-y-6 bg-card-bg/30 p-8 rounded-card border border-dashed border-border-main">
        <h2 className="text-xl font-bold text-text-secondary uppercase tracking-widest text-center">Batch 5 UI Preview</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Badges Showcase */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Pill Badges</h3>
            <div className="flex flex-wrap gap-3 p-4 bg-card-bg rounded-card border border-border-main">
              <Badge variant="teal" prefix="✓">Verified</Badge>
              <Badge variant="amber" prefix="!">Pending</Badge>
              <Badge variant="red" prefix="⚠">Risky</Badge>
              <Badge variant="purple">Growth</Badge>
              <Badge variant="pink">Disputed</Badge>
            </div>
          </div>

          {/* Search Bar Showcase */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Search Components</h3>
            <div className="p-4 bg-card-bg rounded-card border border-border-main h-full flex items-center justify-center">
              <SearchBar placeholder="Search everything..." width="100%" />
            </div>
          </div>

          {/* User Card Showcase */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">User Profile Cards</h3>
            <div className="space-y-3 p-4 bg-card-bg rounded-card border border-border-main">
              <UserProfileCard name="Rahul Shah" isVerified={true} />
              <UserProfileCard name="Amit Patel" plan="Free" isVerified={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Batches... */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-[12px] font-bold text-text-muted uppercase tracking-wider">Step Wizard</h3>
          <StepIndicator currentStep={2} steps={['Info', 'Verify', 'Type', 'Live']} />
        </div>
        <div className="bg-card-bg p-6 rounded-card border border-border-main">
          <TimelineItem title="Dispute Raised" description="Buyer flagged quality issues." date="28 APR" type="danger" />
          <TimelineItem title="Evidence Uploaded" description="Supplier sent images." date="29 APR" type="info" isLast />
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
              <div className="w-64">
                <SearchBar placeholder="Search suppliers..." width="100%" />
              </div>
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

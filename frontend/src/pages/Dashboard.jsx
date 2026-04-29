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
import { Search, Plus } from 'lucide-react';

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

  const featuredSupplier = {
    name: 'Reliance Textiles Pvt Ltd',
    gst: '27AABCR1234A1Z5',
    score: 94,
    verifiedFlags: { gst: true, pan: true, bank: true },
    status: 'verified'
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-trust-teal">TrustBiz Dashboard</h1>
          <p className="text-text-muted mt-2">Welcome back, Rahul Shah (MSME Verified)</p>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={16} /> New Transaction
        </Button>
      </header>

      {/* Urgent Action Section */}
      <UrgentActionPanel 
        title="Action Required: 2 Risky Suppliers Detected"
        description="Rajesh Auto Parts and Mehta Pharma have shown suspicious activity. Review their TrustScores immediately."
        buttonText="Review Now"
      />

      {/* Metric Cards Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-text-secondary">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard title="Active Suppliers" value="24" color="#00C9A7" subtext="+2 since last month" />
          <MetricCard title="Pending Verifications" value="3" color="#F59E0B" subtext="Action required" />
          <MetricCard title="Escrow Balance" value="₹12.4L" color="#818CF8" subtext="Locked in 3 deals" />
          <MetricCard title="At-Risk" value="2" color="#E53E3E" subtext="Requires attention" />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8">
          {/* Compliance Chart */}
          <ComplianceBarChart data={chartData} />

          {/* Suppliers Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-secondary">Recent Suppliers</h2>
              <div className="w-64">
                <Input placeholder="Search..." icon={<Search size={14} />} />
              </div>
            </div>
            <DataTable columns={columns} data={data} />
          </div>
        </section>

        {/* Sidebar Components */}
        <aside className="space-y-8">
          {/* Negotiation Preview */}
          <section className="bg-[#0A1628] p-6 rounded-card border border-border-main">
            <h2 className="text-lg font-semibold text-text-secondary mb-6">AI Negotiation</h2>
            <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              <NegotiationBubble 
                sender="supplier" 
                message="We need Net-30 payment terms for this order." 
                time="10:30 AM" 
              />
              <NegotiationBubble 
                sender="ai" 
                message="Suggestion: Offer Net-20 with a 1.5% early payment discount. This matches your current cash flow profile." 
                time="10:31 AM" 
              />
            </div>
          </section>

          {/* Stock Monitor Preview */}
          <section className="bg-card-bg p-6 rounded-card border border-border-main space-y-6">
            <h2 className="text-lg font-semibold text-text-secondary">Live Stock Monitor</h2>
            <div className="space-y-6">
              <InventoryProgressBar label="Cotton Fabric" percentage={82} />
              <InventoryProgressBar label="Steel Bolts" percentage={15} />
              <InventoryProgressBar label="Packaging Material" percentage={3} />
            </div>
          </section>
        </aside>
      </div>

      {/* New Transaction Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Create New Transaction"
      >
        <div className="space-y-6">
          <Input label="Supplier Name" placeholder="Search registered suppliers..." />
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

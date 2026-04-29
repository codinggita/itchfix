import React from 'react';
import MetricCard from '../components/ui/MetricCard';
import StatusPill from '../components/ui/StatusPill';
import TrustScoreRing from '../components/ui/TrustScoreRing';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import DataTable from '../components/ui/Table';
import SupplierCard from '../components/ui/SupplierCard';
import UrgentActionPanel from '../components/ui/UrgentActionPanel';
import InventoryProgressBar from '../components/ui/ProgressBar';
import { Search, Plus } from 'lucide-react';

export default function Dashboard() {
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
        <Button variant="primary">
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
        {/* Suppliers Table */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-secondary">Recent Suppliers</h2>
            <div className="w-64">
              <Input placeholder="Search..." icon={<Search size={14} />} />
            </div>
          </div>
          <DataTable columns={columns} data={data} />
        </section>

        {/* Sidebar Components */}
        <aside className="space-y-8">
          {/* Supplier Card Preview */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-text-secondary">Top Supplier</h2>
            <SupplierCard supplier={featuredSupplier} />
          </section>

          {/* Stock Monitor Preview */}
          <section className="bg-card-bg p-6 rounded-card border border-border-main space-y-6">
            <h2 className="text-lg font-semibold text-text-secondary">Live Stock Monitor</h2>
            <div className="space-y-6">
              <InventoryProgressBar label="Cotton Fabric" percentage={82} />
              <InventoryProgressBar label="Steel Bolts" percentage={15} />
              <InventoryProgressBar label="Packaging Material" percentage={3} />
            </div>
            <Button variant="ghost" fullWidth className="mt-2">View All Alerts</Button>
          </section>
        </aside>
      </div>
    </div>
  );
}

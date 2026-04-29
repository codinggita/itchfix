import React from 'react';
import MetricCard from '../components/ui/MetricCard';
import StatusPill from '../components/ui/StatusPill';
import TrustScoreRing from '../components/ui/TrustScoreRing';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import DataTable from '../components/ui/Table';
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

      {/* Table & Form Components */}
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

        {/* Buttons Showcase */}
        <section className="bg-card-bg p-6 rounded-card border border-border-main space-y-6 h-fit">
          <h2 className="text-lg font-semibold text-text-secondary">Action Controls</h2>
          <div className="space-y-3">
            <Button fullWidth>Confirm Deal</Button>
            <Button variant="ghost" fullWidth>Download Invoice</Button>
            <Button variant="danger" fullWidth>Report Dispute</Button>
          </div>
          <div className="pt-4 border-t border-border-main">
            <h3 className="text-[11px] font-bold uppercase text-text-muted mb-3">Quick Search</h3>
            <Input label="GST Number" placeholder="Enter GST..." error="Invalid GST format" />
          </div>
        </section>
      </div>
    </div>
  );
}

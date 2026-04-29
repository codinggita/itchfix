import React from 'react';
import MetricCard from '../components/ui/MetricCard';
import StatusPill from '../components/ui/StatusPill';
import TrustScoreRing from '../components/ui/TrustScoreRing';

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      <header>
        <h1 className="text-3xl font-bold font-display text-trust-teal">TrustBiz Dashboard</h1>
        <p className="text-text-muted mt-2">Welcome back, Rahul Shah (MSME Verified)</p>
      </header>

      {/* Metric Cards Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-text-secondary">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            title="Active Suppliers" 
            value="24" 
            color="#00C9A7" 
            subtext="+2 since last month"
          />
          <MetricCard 
            title="Pending Verifications" 
            value="3" 
            color="#F59E0B" 
            subtext="Action required"
          />
          <MetricCard 
            title="Escrow Balance" 
            value="₹12.4L" 
            color="#818CF8" 
            subtext="Locked in 3 deals"
          />
          <MetricCard 
            title="At-Risk" 
            value="2" 
            color="#E53E3E" 
            subtext="Requires attention"
          />
        </div>
      </section>

      {/* Components Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Status Pills */}
        <section className="bg-card-bg p-6 rounded-card border border-border-main">
          <h2 className="text-lg font-semibold mb-6 text-text-secondary">Status Pills Showcase</h2>
          <div className="flex flex-wrap gap-4">
            <StatusPill status="paid" />
            <StatusPill status="escrow" />
            <StatusPill status="pending" />
            <StatusPill status="overdue" />
            <StatusPill status="disputed" />
            <StatusPill status="verified" />
            <StatusPill status="risky" />
          </div>
        </section>

        {/* Trust Score Rings */}
        <section className="bg-card-bg p-6 rounded-card border border-border-main">
          <h2 className="text-lg font-semibold mb-6 text-text-secondary">TrustScore Rings</h2>
          <div className="flex items-center gap-12">
            <div className="text-center space-y-2">
              <TrustScoreRing score={94} size={80} />
              <p className="text-[11px] uppercase text-text-muted font-bold">Excellent</p>
            </div>
            <div className="text-center space-y-2">
              <TrustScoreRing score={78} size={80} />
              <p className="text-[11px] uppercase text-text-muted font-bold">Average</p>
            </div>
            <div className="text-center space-y-2">
              <TrustScoreRing score={42} size={80} />
              <p className="text-[11px] uppercase text-text-muted font-bold">Risky</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

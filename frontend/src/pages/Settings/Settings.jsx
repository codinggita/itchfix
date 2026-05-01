import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  ShieldCheck, 
  CreditCard, 
  Bell, 
  Lock, 
  Globe, 
  Camera,
  Plus,
  Trash2,
  ExternalLink
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import BusinessProfileHeader from '../../components/ui/BusinessProfileHeader';
import BankCard from '../../components/ui/BankCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Badge from '../../components/ui/Badge';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Business Profile', icon: <Building2 size={16} /> },
    { id: 'banking', label: 'Banking & Payouts', icon: <CreditCard size={16} /> },
    { id: 'security', label: 'Security', icon: <Lock size={16} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="space-y-1">
        <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Settings', path: '/settings' }]} />
        <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight">Account Settings</h1>
        <p className="text-text-muted text-sm">Manage your business profile, banking details and security preferences.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Tabs */}
        <aside className="lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-trust-teal text-page-bg shadow-lg shadow-trust-teal/20' 
                  : 'text-text-muted hover:bg-card-bg hover:text-text-primary border border-transparent hover:border-border-main'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 space-y-8">
          {activeTab === 'profile' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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

              <section className="bg-card-bg border border-border-main rounded-card p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-primary">General Information</h3>
                  <Button variant="ghost" size="sm">Edit Profile</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Business Name" defaultValue="Reliance Textiles Pvt Ltd" icon={<Building2 size={16} />} />
                  <Input label="Registration Type" defaultValue="Private Limited" />
                  <Input label="Official Email" defaultValue="contact@reliancetextiles.in" icon={<Globe size={16} />} />
                  <Input label="Phone Number" defaultValue="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Business Description</label>
                  <textarea 
                    className="w-full bg-page-bg border border-border-main rounded-xl p-4 text-sm text-text-secondary focus:outline-none focus:border-trust-teal/50 transition-all min-h-[100px]"
                    defaultValue="Leading manufacturer of high-quality cotton and polyester fabrics in Surat, catering to domestic and international markets since 1995."
                  />
                </div>
              </section>
            </div>
          )}

          {activeTab === 'banking' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-text-primary">Linked Bank Accounts</h3>
                <Button variant="primary" size="sm">
                  <Plus size={16} className="mr-2" /> Add Bank Account
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BankCard 
                  bankName="HDFC Bank Ltd"
                  accountNumber="XXXXXX5678"
                  accountType="Current Account"
                  isPrimary={true}
                />
                <BankCard 
                  bankName="ICICI Bank"
                  accountNumber="XXXXXX1122"
                  accountType="Secondary Account"
                  isPrimary={false}
                />
              </div>

              <section className="bg-trust-teal/5 border border-trust-teal/20 rounded-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-trust-teal/10 text-trust-teal flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-text-primary">Payout Security</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    All bank accounts must be GST-linked for automatic escrow settlements. Verification usually takes 1-2 business days.
                  </p>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <section className="bg-card-bg border border-border-main rounded-card p-8 space-y-6">
                <h3 className="text-lg font-bold text-text-primary">Password & Authentication</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-page-bg rounded-xl border border-border-main">
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-text-primary">Two-Factor Authentication (2FA)</p>
                      <p className="text-xs text-text-muted">Secure your account with SMS or Authenticator App.</p>
                    </div>
                    <Badge variant="success">Enabled</Badge>
                  </div>
                  <Button variant="outline" size="sm">Change Password</Button>
                </div>
              </section>

              <section className="bg-card-bg border border-border-main rounded-card p-8 space-y-6">
                <h3 className="text-lg font-bold text-text-primary">Active Sessions</h3>
                <div className="space-y-4">
                  {[
                    { device: 'Windows 11 • Chrome', location: 'Surat, India', status: 'Current' },
                    { device: 'iPhone 15 • App', location: 'Mumbai, India', status: '2 hours ago' }
                  ].map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-border-main last:border-0">
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-text-primary">{session.device}</p>
                        <p className="text-[10px] text-text-muted uppercase font-mono">{session.location} • {session.status}</p>
                      </div>
                      <button className="text-trust-red hover:bg-trust-red/5 p-2 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Settings;

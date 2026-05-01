import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ExternalLink,
  Menu
} from 'lucide-react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import BusinessProfileHeader from '../../components/ui/BusinessProfileHeader';
import BankCard from '../../components/ui/BankCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Badge from '../../components/ui/Badge';
import Toast from '../../components/ui/Toast';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [toasts, setToasts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const tabs = [
    { id: 'profile', label: 'Business Profile', icon: <Building2 size={16} /> },
    { id: 'banking', label: 'Banking & Payouts', icon: <CreditCard size={16} /> },
    { id: 'security', label: 'Security', icon: <Lock size={16} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
  ];

  const handleUpdateProfile = () => {
    addToast('Updating business profile...', 'info');
    setTimeout(() => addToast('Profile updated successfully!', 'success'), 1500);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* Toast Container */}
      <div className="fixed top-24 right-6 z-[200] space-y-4">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>

      <header className="space-y-1">
        <Breadcrumbs items={[{ label: 'TrustBiz', path: '/' }, { label: 'Settings', path: '/settings' }]} />
        <h1 className="text-2xl md:text-3xl font-bold font-display text-text-primary tracking-tight">Account Settings</h1>
        <p className="text-text-muted text-xs md:text-sm">Manage your business profile, banking details and security.</p>
      </header>

      {/* Mobile Tab Toggle */}
      <div className="lg:hidden flex items-center justify-between bg-card-bg border border-border-main p-4 rounded-xl">
        <div className="flex items-center gap-3 text-trust-teal font-bold text-sm">
          {tabs.find(t => t.id === activeTab)?.icon}
          {tabs.find(t => t.id === activeTab)?.label}
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-page-bg border border-border-main rounded-lg text-text-primary"
        >
          <Menu size={20} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative">
        {/* Sidebar Tabs */}
        <aside className={`
          ${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex 
          flex-col absolute lg:relative top-0 left-0 w-full lg:w-64 z-40 lg:z-0 
          bg-page-bg lg:bg-transparent p-4 lg:p-0 space-y-2 border lg:border-0 border-border-main rounded-xl lg:rounded-none
          animate-in fade-in slide-in-from-top-4 lg:animate-none duration-300
        `}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileMenuOpen(false);
                addToast(`Switching to ${tab.label}...`, 'info');
              }}
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
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="overflow-hidden rounded-card border border-border-main">
                  <BusinessProfileHeader 
                    name="Reliance Textiles Pvt Ltd"
                    category="Textile Manufacturer"
                    location="Surat, Gujarat"
                    website="www.reliancetextiles.in"
                    joinedDate="Oct 2023"
                    trustScore={94}
                    isVerified={true}
                    gstNumber="24AABCR1234A1Z5"
                  />
                </div>

                <section className="bg-card-bg border border-border-main rounded-card p-5 md:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-text-primary">General Information</h3>
                    <Button variant="ghost" size="sm" onClick={handleUpdateProfile} className="w-full sm:w-auto">Save Changes</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <Input label="Business Name" defaultValue="Reliance Textiles Pvt Ltd" icon={<Building2 size={16} />} />
                    <Input label="Registration Type" defaultValue="Private Limited" />
                    <Input label="Official Email" defaultValue="contact@reliancetextiles.in" icon={<Globe size={16} />} />
                    <Input label="Phone Number" defaultValue="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-text-ghost uppercase tracking-widest">Business Description</label>
                    <textarea 
                      className="w-full bg-page-bg border border-border-main rounded-xl p-4 text-sm text-text-secondary focus:outline-none focus:border-trust-teal/50 transition-all min-h-[100px]"
                      defaultValue="Leading manufacturer of high-quality cotton and polyester fabrics in Surat."
                    />
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'banking' && (
              <motion.div 
                key="banking"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-text-primary">Linked Bank Accounts</h3>
                  <Button variant="primary" size="sm" onClick={() => addToast('Add Bank modal coming soon!', 'info')}>
                    <Plus size={16} className="mr-2" /> Add Bank
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

                <section className="bg-trust-teal/5 border border-trust-teal/20 rounded-card p-5 md:p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-trust-teal/10 text-trust-teal flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-text-primary">Payout Security</h4>
                    <p className="text-[11px] md:text-xs text-text-muted leading-relaxed">
                      All accounts must be GST-linked for automatic settlements. Verification takes 1-2 days.
                    </p>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div 
                key="security"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 md:space-y-8"
              >
                <section className="bg-card-bg border border-border-main rounded-card p-5 md:p-8 space-y-6">
                  <h3 className="text-lg font-bold text-text-primary">Password & Authentication</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-page-bg rounded-xl border border-border-main gap-4">
                      <div className="space-y-1 min-w-0">
                        <p className="text-sm font-bold text-text-primary">Two-Factor Authentication (2FA)</p>
                        <p className="text-xs text-text-muted">Secure your account with SMS or Authenticator.</p>
                      </div>
                      <Badge variant="success" className="w-fit">Enabled</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => addToast('Change password modal initiated...', 'info')}>Change Password</Button>
                  </div>
                </section>

                <section className="bg-card-bg border border-border-main rounded-card p-5 md:p-8 space-y-6">
                  <h3 className="text-lg font-bold text-text-primary">Active Sessions</h3>
                  <div className="space-y-4">
                    {[
                      { device: 'Windows 11 • Chrome', location: 'Surat, India', status: 'Current' },
                      { device: 'iPhone 15 • App', location: 'Mumbai, India', status: '2 hours ago' }
                    ].map((session, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3 border-b border-border-main last:border-0 gap-4">
                        <div className="space-y-0.5 min-w-0">
                          <p className="text-sm font-bold text-text-primary truncate">{session.device}</p>
                          <p className="text-[9px] md:text-[10px] text-text-muted uppercase font-mono truncate">{session.location} • {session.status}</p>
                        </div>
                        <button 
                          className="text-trust-red hover:bg-trust-red/5 p-2 rounded-lg transition-colors shrink-0"
                          onClick={() => addToast('Terminating session...', 'warning')}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Settings;

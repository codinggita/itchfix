import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import SupplierNetwork from './pages/SupplierNetwork/SupplierNetwork';
import EscrowDashboard from './pages/Escrow/EscrowDashboard';
import Negotiation from './pages/Negotiation/Negotiation';
import Inventory from './pages/Inventory/Inventory';
import KYCOnboarding from './pages/KYCOnboarding/KYCOnboarding';
import Settings from './pages/Settings/Settings';
import Auth from './pages/Auth/Auth';
import Reconciliation from './pages/Reconciliation/Reconciliation';
import Integrations from './pages/Integrations/Integrations';
import Pricing from './pages/Pricing/Pricing';
import Resources from './pages/Resources/Resources';
import Notifications from './pages/Notifications/Notifications';
import Profile from './pages/Profile/Profile';
import Analytics from './pages/Analytics/Analytics';
import Support from './pages/Support/Support';
import Transactions from './pages/Transactions/Transactions';

export default function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isLandingPage = location.pathname === '/';
  const isPricingPage = location.pathname === '/pricing';
  const isResourcesPage = location.pathname === '/resources';
  
  const noLayout = isAuthPage || isLandingPage || isPricingPage || isResourcesPage;

  return (
    <div className="min-h-screen bg-page-bg text-text-primary flex">
      {/* Show Sidebar only if NOT on Landing or Auth Page */}
      {!noLayout && <Sidebar />}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 ${!noLayout ? 'ml-[220px]' : ''}`}>
        {/* Show Navbar only if NOT on Landing or Auth Page */}
        {!noLayout && <Navbar />}
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/suppliers" element={<SupplierNetwork />} />
            <Route path="/escrow" element={<EscrowDashboard />} />
            <Route path="/payment-terms" element={<Negotiation />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/kyc" element={<KYCOnboarding />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reconciliation" element={<Reconciliation />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/support" element={<Support />} />
            <Route path="/transactions" element={<Transactions />} />
            {/* Other routes can be added here as they are developed */}
            <Route path="*" element={<div className="p-10 text-text-muted">Page under development</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

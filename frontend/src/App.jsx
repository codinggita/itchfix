import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Loader from './components/common/Loader';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load pages for performance optimization
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const SupplierNetwork = lazy(() => import('./pages/SupplierNetwork/SupplierNetwork'));
const EscrowDashboard = lazy(() => import('./pages/Escrow/EscrowDashboard'));
const Negotiation = lazy(() => import('./pages/Negotiation/Negotiation'));
const Inventory = lazy(() => import('./pages/Inventory/Inventory'));
const KYCOnboarding = lazy(() => import('./pages/KYCOnboarding/KYCOnboarding'));
const Settings = lazy(() => import('./pages/Settings/Settings'));
const Auth = lazy(() => import('./pages/Auth/Auth'));
const Reconciliation = lazy(() => import('./pages/Reconciliation/Reconciliation'));
const Integrations = lazy(() => import('./pages/Integrations/Integrations'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const Resources = lazy(() => import('./pages/Resources/Resources'));
const Notifications = lazy(() => import('./pages/Notifications/Notifications'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Analytics = lazy(() => import('./pages/Analytics/Analytics'));
const Support = lazy(() => import('./pages/Support/Support'));
const Transactions = lazy(() => import('./pages/Transactions/Transactions'));
const Disputes = lazy(() => import('./pages/Disputes/Disputes'));
const Wallet = lazy(() => import('./pages/Wallet/Wallet'));
const Marketplace = lazy(() => import('./pages/Marketplace/Marketplace'));
const Checkout = lazy(() => import('./pages/Marketplace/Checkout'));

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
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
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
                <Route path="/disputes" element={<Disputes />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* Other routes can be added here as they are developed */}
                <Route path="*" element={<div className="p-10 text-text-muted">Page under development</div>} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}

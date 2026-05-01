import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import SupplierNetwork from './pages/SupplierNetwork/SupplierNetwork';
import EscrowDashboard from './pages/Escrow/EscrowDashboard';

export default function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-page-bg text-text-primary flex">
      {/* Show Sidebar only if NOT on Landing Page */}
      {!isLandingPage && <Sidebar />}

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 ${!isLandingPage ? 'ml-[220px]' : ''}`}>
        {/* Show Navbar only if NOT on Landing Page (Landing Page will have its own Navbar) */}
        {!isLandingPage && <Navbar />}
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/suppliers" element={<SupplierNetwork />} />
            <Route path="/escrow" element={<EscrowDashboard />} />
            {/* Other routes can be added here as they are developed */}
            <Route path="*" element={<div className="p-10 text-text-muted">Page under development</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

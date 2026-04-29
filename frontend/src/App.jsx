import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg text-text-primary flex">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        
        <main className="flex-1 ml-[220px]">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Other routes can be added here as they are developed */}
            <Route path="*" element={<div className="p-10 text-text-muted">Page under development</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

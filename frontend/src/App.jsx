import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import LandingPage from './pages/LandingPage'
import LoginSignup from './pages/LoginSignup'
import Dashboard from './pages/Dashboard'
import Reconciliation from './pages/Reconciliation'
import KYCOnboarding from './pages/KYCOnboarding'
import Settings from './pages/Settings'
import Integrations from './pages/Integrations'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reconciliation" element={<Reconciliation />} />
        <Route path="/kyc" element={<KYCOnboarding />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  )
}

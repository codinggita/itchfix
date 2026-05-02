import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Lock, 
  MessageSquare, 
  Package, 
  Settings,
  User,
  Layers,
  ShieldCheck,
  RefreshCw,
  History,
  Scale,
  Wallet,
  ShoppingBag
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { name: 'Marketplace', icon: <ShoppingBag size={18} />, path: '/marketplace' },
    { name: 'Wallet', icon: <Wallet size={18} />, path: '/wallet' },
    { name: 'Transactions', icon: <History size={18} />, path: '/transactions' },
    { name: 'Reconciliation', icon: <RefreshCw size={18} />, path: '/reconciliation' },
    { name: 'Suppliers', icon: <Users size={18} />, path: '/suppliers' },
    { name: 'Escrow', icon: <Lock size={18} />, path: '/escrow' },
    { name: 'Disputes', icon: <Scale size={18} />, path: '/disputes' },
    { name: 'Negotiation', icon: <MessageSquare size={18} />, path: '/payment-terms' },
    { name: 'Inventory', icon: <Package size={18} />, path: '/inventory' },
    { name: 'KYC', icon: <ShieldCheck size={18} />, path: '/kyc' },
    { name: 'Integrations', icon: <Layers size={18} />, path: '/integrations' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ];

  return (
    <aside className="w-[220px] h-screen bg-sidebar-bg border-r border-border-main flex flex-col fixed left-0 top-0 z-50">
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-xl font-display font-extrabold text-text-primary tracking-tight">
          Trust<span className="text-trust-teal">Biz</span>
        </h1>
        <p className="text-[10px] font-bold uppercase text-text-ghost tracking-[0.15em] mt-1">
          TRUST EVERY DEAL
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-6 py-3.5 text-[13px] font-semibold transition-all duration-200
              ${isActive 
                ? 'text-trust-teal bg-[#00C9A711] border-l-2 border-trust-teal' 
                : 'text-text-faint border-l-2 border-transparent hover:text-text-secondary hover:bg-white/5'}
            `}
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? 'text-trust-teal' : 'text-text-faint'}>
                  {item.icon}
                </span>
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-border-main mt-auto">
        <NavLink to="/profile" className="bg-card-bg/50 rounded-[10px] p-3 flex items-center gap-3 border border-border-main/50 hover:border-trust-teal/30 transition-all group">
          <div className="w-8 h-8 rounded-full bg-trust-teal/20 flex items-center justify-center text-trust-teal group-hover:bg-trust-teal group-hover:text-page-bg transition-all">
            <User size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-bold text-text-primary truncate">Rahul Shah</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-trust-teal"></span>
              <span className="text-[10px] font-bold text-trust-teal uppercase tracking-wider">MSME Verified</span>
            </div>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;

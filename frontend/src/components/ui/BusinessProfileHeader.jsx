import React from 'react';
import { MapPin, Globe, Calendar, CheckCircle2, ShieldCheck, Mail, Phone } from 'lucide-react';
import TrustScoreRing from './TrustScoreRing';
import Badge from './Badge';
import Button from './Button';

const BusinessProfileHeader = ({ 
  name, 
  category, 
  location, 
  website, 
  joinedDate, 
  trustScore, 
  isVerified = false,
  gstNumber,
  logo
}) => {
  return (
    <div className="relative overflow-hidden bg-card-bg border border-border-main rounded-card">
      {/* Decorative Banner Background */}
      <div className="h-32 bg-gradient-to-r from-trust-teal/10 via-page-bg to-trust-amber/10 border-b border-border-main" />
      
      <div className="px-8 pb-8 -mt-12 relative flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-end md:items-center gap-6 flex-1">
          {/* Logo / Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-card bg-card-bg border-4 border-page-bg shadow-xl flex items-center justify-center overflow-hidden">
              {logo ? (
                <img src={logo} alt={name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl font-display font-bold text-trust-teal">{name?.[0]}</span>
              )}
            </div>
            {isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-trust-teal text-page-bg p-1.5 rounded-full border-4 border-page-bg">
                <ShieldCheck size={18} fill="currentColor" />
              </div>
            )}
          </div>

          {/* Info Area */}
          <div className="flex-1 space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="text-3xl font-bold font-display text-text-primary tracking-tight">{name}</h1>
              {isVerified && <Badge variant="success" size="sm">MSME Verified</Badge>}
            </div>
            
            <p className="text-text-secondary font-medium">{category}</p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 pt-2 text-text-muted text-sm">
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-trust-teal" />
                {location}
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={14} className="text-trust-teal" />
                <a href={`https://${website}`} className="hover:text-trust-teal transition-colors">{website}</a>
              </div>
              <div className="flex items-center gap-1.5 font-mono uppercase text-[12px] tracking-wider">
                <CheckCircle2 size={14} className="text-trust-teal" />
                GST: {gstNumber}
              </div>
            </div>
          </div>
        </div>

        {/* Action / Stats Area */}
        <div className="flex items-center gap-8 bg-page-bg/50 p-6 rounded-card border border-border-main/50 self-stretch md:self-center">
          <div className="text-center">
            <TrustScoreRing score={trustScore} size={80} strokeWidth={8} />
            <p className="text-[10px] font-bold text-text-ghost uppercase mt-2 tracking-widest">TrustScore</p>
          </div>
          
          <div className="h-16 w-px bg-border-main/50" />
          
          <div className="space-y-3">
            <Button variant="primary" size="sm" className="w-full">
              Connect & Verify
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="px-3">
                <Mail size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="px-3">
                <Phone size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="bg-page-bg/30 px-8 py-3 border-t border-border-main flex items-center gap-2 text-[11px] text-text-ghost">
        <Calendar size={12} />
        Member since {joinedDate}
      </div>
    </div>
  );
};

export default BusinessProfileHeader;

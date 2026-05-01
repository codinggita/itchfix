import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Settings, Power } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

const IntegrationCard = ({ 
  name, 
  description, 
  icon: Icon, 
  isConnected = false, 
  status = 'available', // 'available', 'connected', 'beta'
  onConnect,
  onSettings
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-card-bg border rounded-card p-6 flex flex-col justify-between h-full transition-all ${isConnected ? 'border-trust-teal/30 shadow-lg shadow-trust-teal/5' : 'border-border-main hover:border-text-ghost/30'}`}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isConnected ? 'bg-trust-teal/10 text-trust-teal' : 'bg-page-bg text-text-muted border border-border-main'}`}>
            {Icon ? <Icon size={24} /> : <Settings size={24} />}
          </div>
          <div className="flex flex-col items-end gap-2">
            {isConnected ? (
              <Badge variant="success" size="sm">Connected</Badge>
            ) : status === 'beta' ? (
              <Badge variant="warning" size="sm">Beta</Badge>
            ) : null}
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="font-bold text-text-primary text-lg flex items-center gap-2">
            {name}
            {!isConnected && <ExternalLink size={14} className="text-text-ghost" />}
          </h4>
          <p className="text-sm text-text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        {isConnected ? (
          <>
            <Button variant="ghost" size="sm" fullWidth onClick={onSettings}>
              <Settings size={14} /> Configure
            </Button>
            <Button variant="outline" size="sm" className="px-3 border-trust-red/20 text-trust-red hover:bg-trust-red/5">
              <Power size={14} />
            </Button>
          </>
        ) : (
          <Button 
            variant="primary" 
            size="sm" 
            fullWidth 
            onClick={onConnect}
            disabled={status === 'beta'}
          >
            {status === 'beta' ? 'Coming Soon' : 'Connect Now'}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default IntegrationCard;

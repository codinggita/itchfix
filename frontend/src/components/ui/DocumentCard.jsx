import React from 'react';
import { FileText, Download, Eye, Clock } from 'lucide-react';
import Badge from './Badge';

/**
 * DocumentCard - A card for displaying uploaded documents or invoices.
 * 
 * @param {string} title - Document name
 * @param {string} size - File size
 * @param {string} status - 'verified', 'pending', 'rejected'
 * @param {string} date - Upload date
 */
const DocumentCard = ({ title, size, status, date }) => {
  const statusMap = {
    verified: { variant: 'teal', label: 'Verified' },
    pending: { variant: 'amber', label: 'Pending' },
    rejected: { variant: 'red', label: 'Rejected' }
  };

  const config = statusMap[status] || statusMap.pending;

  return (
    <div className="bg-card-bg border border-border-main rounded-card p-4 flex items-center gap-4 hover:border-trust-purple/30 transition-all group">
      <div className="w-12 h-12 rounded-radius-input bg-trust-purple/10 flex items-center justify-center text-trust-purple border border-trust-purple/20 group-hover:bg-trust-purple/20 transition-all">
        <FileText size={24} />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-bold text-text-primary truncate">{title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] font-bold text-text-ghost uppercase tracking-wider">{size}</span>
          <span className="text-text-ghost">•</span>
          <div className="flex items-center gap-1 text-[10px] font-bold text-text-ghost uppercase tracking-wider">
            <Clock size={10} />
            {date}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <Badge variant={config.variant}>{config.label}</Badge>
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-text-muted hover:text-trust-teal transition-colors">
            <Eye size={14} />
          </button>
          <button className="p-1.5 text-text-muted hover:text-trust-teal transition-colors">
            <Download size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;

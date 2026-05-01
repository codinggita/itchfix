export const DASHBOARD_STATS = [
  { title: 'Available Balance', value: '₹12,45,000', color: '#00C9A7', subtext: '↑ 12% from last month' },
  { title: 'In Escrow', value: '₹4,20,000', color: '#F59E0B', subtext: '3 active transactions' },
  { title: 'Outstanding', value: '₹1,85,000', color: '#E53E3E', subtext: '2 overdue invoices' },
  { title: 'Trust Score', value: '942', color: '#818CF8', subtext: 'Top 5% of MSMEs' },
];

export const RECENT_TRANSACTIONS = [
  { 
    id: 'TXN-8829', 
    entity: 'Reliance Textiles', 
    amount: '₹45,000', 
    status: 'paid', 
    date: 'May 01, 2026',
    type: 'Inbound'
  },
  { 
    id: 'TXN-8830', 
    entity: 'Tata Steel Ltd', 
    amount: '₹1,20,000', 
    status: 'escrow', 
    date: 'Apr 28, 2026',
    type: 'Outbound'
  },
  { 
    id: 'TXN-8831', 
    entity: 'Adani Ports', 
    amount: '₹85,000', 
    status: 'pending', 
    date: 'Apr 25, 2026',
    type: 'Inbound'
  },
  { 
    id: 'TXN-8832', 
    entity: 'Infosys BPO', 
    amount: '₹12,500', 
    status: 'overdue', 
    date: 'Apr 15, 2026',
    type: 'Outbound'
  },
];

export const INTEGRATIONS = [
  { id: 1, name: 'Razorpay', category: 'Payments', status: 'connected', description: 'Collect and reconcile UPI/Card payments automatically.' },
  { id: 2, name: 'Tally Prime', category: 'Accounting', status: 'connected', description: 'Sync invoices and transactions with Tally ERP.' },
  { id: 3, name: 'GSTN Portal', category: 'Compliance', status: 'connected', description: 'Direct verification of GSTIN and return filing status.' },
  { id: 4, name: 'WhatsApp', category: 'Communication', status: 'available', description: 'Send automated transaction alerts to partners.' },
  { id: 5, name: 'PhonePe', category: 'Payments', status: 'available', description: 'Unified UPI payments for your B2B customers.' },
  { id: 6, name: 'Google Sheets', category: 'Utility', status: 'available', description: 'Export and sync data to your spreadsheets.' },
];

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

/**
 * ComplianceBarChart - Bar chart showing payment terms compliance.
 * 
 * @param {Array} data - Array of data points { month: string, value: number }
 */
const ComplianceBarChart = ({ data = [] }) => {
  return (
    <div className="w-full h-[280px] bg-card-bg border border-border-main rounded-card p-6">
      <h3 className="text-text-secondary font-bold text-[14px] mb-6 uppercase tracking-wider">
        Payment Terms Compliance (Jan - Jun)
      </h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#1E2D4A" 
          />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748B', fontSize: 11, fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748B', fontSize: 11, fontWeight: 600 }}
          />
          <Tooltip 
            cursor={{ fill: '#ffffff05' }}
            contentStyle={{ 
              backgroundColor: '#0D1929', 
              border: '1px solid #1E2D4A',
              borderRadius: '8px',
              fontSize: '12px',
              color: '#F1F5F9'
            }}
          />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]} 
            barSize={32}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.value >= 80 ? '#00C9A7' : '#818CF8'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComplianceBarChart;

import React from 'react';

/**
 * DataTable - A styled table component for TrustBiz dashboards.
 * 
 * @param {Array} columns - Array of column objects { header: string, accessor: string, render?: function }
 * @param {Array} data - Array of data objects
 */
const DataTable = ({ columns = [], data = [] }) => {
  return (
    <div className="w-full overflow-x-auto rounded-[14px] border border-border-main bg-card-bg">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-input-bg">
            {columns.map((col, index) => (
              <th 
                key={index} 
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-text-muted border-b border-border-main"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-main">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className="hover:bg-white/5 transition-colors duration-150"
              >
                {columns.map((col, colIndex) => (
                  <td 
                    key={colIndex} 
                    className="px-4 py-3.5 text-[13px] text-text-secondary font-medium"
                  >
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td 
                colSpan={columns.length} 
                className="px-4 py-10 text-center text-text-ghost text-[13px]"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

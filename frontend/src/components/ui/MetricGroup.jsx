import React from 'react';
import StatMetric from './StatMetric';

const MetricGroup = ({ metrics = [], columns = 4 }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns] || gridCols[4]} gap-4 w-full`}>
      {metrics.map((metric, index) => (
        <StatMetric
          key={index}
          label={metric.label}
          value={metric.value}
          trend={metric.trend}
          trendValue={metric.trendValue}
          icon={metric.icon}
          description={metric.description}
        />
      ))}
    </div>
  );
};

export default MetricGroup;

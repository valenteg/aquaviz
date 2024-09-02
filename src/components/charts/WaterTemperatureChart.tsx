import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';

interface Props {
  data: EnvironmentalData[];
  dateRange: { from: Date; to: Date };
}

export const WaterTemperatureChart: React.FC<Props> = ({ data, dateRange }) => {
  const filteredData = data.filter(d => {
    const date = new Date(d.date);
    return date >= dateRange.from && date <= dateRange.to;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={filteredData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" yAxisId={0} />
      </LineChart>
    </ResponsiveContainer>
  );
};
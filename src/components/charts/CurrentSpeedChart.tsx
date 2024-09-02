import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';

interface Props {
  data: EnvironmentalData[];
  dateRange: { from: Date; to: Date };
}

export const CurrentSpeedChart: React.FC<Props> = ({ data, dateRange }) => {
  const filteredData = data.filter(d => {
    const date = new Date(d.date);
    return date >= dateRange.from && date <= dateRange.to;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={filteredData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="currentSpeed" fill="var(--chart-3)" name="Current Speed (m/s)" />
      </BarChart>
    </ResponsiveContainer>
  );
};
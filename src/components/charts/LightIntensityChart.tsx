import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';

interface Props {
  data: EnvironmentalData[];
  dateRange: { from: Date; to: Date };
}

export const LightIntensityChart: React.FC<Props> = ({ data, dateRange }) => {
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
        <Line type="monotone" dataKey="lightIntensity" stroke="var(--chart-4)" name="Light Intensity (μmol/m²/s)" />
      </LineChart>
    </ResponsiveContainer>
  );
};
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';

interface Props {
  data: EnvironmentalData[];
  dateRange: { from: Date; to: Date };
}

export const SalinityChart: React.FC<Props> = ({ data, dateRange }) => {
  const filteredData = data.filter(d => {
    const date = new Date(d.date);
    return date >= dateRange.from && date <= dateRange.to;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={filteredData}>
        <XAxis dataKey="date" />
        <YAxis domain={[30, 40]} /> {/* Adjust domain based on typical salinity ranges */}
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="salinity" stroke="var(--chart-2)" fill="var(--chart-2)" fillOpacity={0.3} name="Salinity (ppt)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
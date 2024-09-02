import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { GrowthData } from '@/data/mockData';
interface Props {
  data: GrowthData[];
}

export const GrowthMetricsChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="growthRate" fill="#8884d8" />
        <Bar dataKey="nutrientUptake" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
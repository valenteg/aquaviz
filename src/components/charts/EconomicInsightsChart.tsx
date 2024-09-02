import React from 'react';
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { EconomicData } from '@/data/mockData';
interface Props {
  data: EconomicData[];
}

export const EconomicInsightsChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="costPerKg" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="projectedRevenue" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
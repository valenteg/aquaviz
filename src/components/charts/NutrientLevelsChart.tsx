import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { NutrientData } from '@/data/mockData';

interface Props {
  data: NutrientData[];
  dateRange: { from: Date; to: Date };
}

export const NutrientLevelsChart: React.FC<Props> = ({ data, dateRange }) => {
  const filteredData = data.filter(d => {
    const date = new Date(d.date);
    return date >= dateRange.from && date <= dateRange.to;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={filteredData}>
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar yAxisId="left" dataKey="nitrate" fill="var(--chart-5)" name="Nitrate (μmol/L)" />
        <Line yAxisId="right" type="monotone" dataKey="phosphate" stroke="var(--chart-1)" name="Phosphate (μmol/L)" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
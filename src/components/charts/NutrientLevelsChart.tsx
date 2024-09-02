import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { NutrientData } from '@/data/mockData';
import { chartConfig } from './chartConfig';

interface Props {
  data: NutrientData[];
}

export const NutrientLevelsChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <defs>
          <linearGradient id="nitrateGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="phosphateGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4d79ff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4d79ff" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-background p-2 border rounded shadow">
                  <p className="font-bold text-chart-5">{`Nitrate: ${typeof payload[0].value === 'number' ? payload[0].value.toFixed(2) : payload[0].value} μmol/L`}</p>
                  <p className="font-bold text-chart-1">{`Phosphate: ${typeof payload[1].value === 'number' ? payload[1].value.toFixed(2) : payload[1].value} μmol/L`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar yAxisId="left" dataKey="nitrate" fill="url(#nitrateGradient)" name="Nitrate (μmol/L)" animationDuration={300} />
        <Line yAxisId="right" type="natural" dataKey="phosphate" stroke="url(#phosphateGradient)" name="Phosphate (μmol/L)" strokeWidth={2} animationDuration={300} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
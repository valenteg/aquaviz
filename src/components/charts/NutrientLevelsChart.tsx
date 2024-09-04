import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { NutrientData } from '@/data/mockDashboardData';
import { ChartContainer } from '@/components/ui/chart';
import { chartConfig } from '@/components/charts/chartConfig';

interface Props {
  data: NutrientData[];
}

export const NutrientLevelsChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <XAxis 
            dataKey="date" 
            tickFormatter={(dateString) => new Date(dateString).toLocaleDateString()}
          />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value, name) => [
              `${Number(value).toFixed(2)} μmol/L`, 
              name === 'nitrate' ? 'Nitrate' : 'Phosphate'
            ]}
          />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar 
            yAxisId="left" 
            dataKey="nitrate" 
            fill="url(#nitrateGradient)" 
            name="Nitrate" 
            animationDuration={300}
          />
          <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="phosphate" 
            stroke="url(#phosphateGradient)" 
            name="Phosphate" 
            strokeWidth={2}
            dot={{ stroke: '#4d79ff', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
            animationDuration={300}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
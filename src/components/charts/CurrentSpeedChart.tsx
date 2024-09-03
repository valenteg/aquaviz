import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';
import { ChartContainer } from '@/components/ui/chart';
import { chartConfig } from '@/components/charts/chartConfig';

interface Props {
  data: EnvironmentalData[];
}

export const CurrentSpeedChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="currentSpeedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4d79ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4d79ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            tickFormatter={(dateString) => new Date(dateString).toLocaleDateString()}
          />
          <YAxis domain={[0, 1]} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value) => [`${value} m/s`, 'Current Speed']}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine y={0.1} stroke="#ffcc00" strokeDasharray="3 3" label="Min Optimal" />
          <ReferenceLine y={0.5} stroke="#ffcc00" strokeDasharray="3 3" label="Max Optimal" />
          <Bar
            dataKey="currentSpeed"
            fill="url(#currentSpeedGradient)"
            animationDuration={300}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';
import { ChartContainer } from '@/components/ui/chart';
import { chartConfig } from '@/components/charts/chartConfig';

interface Props {
  data: EnvironmentalData[];
}

export const SalinityChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="salinityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4d79ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4d79ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis domain={[25, 40]} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value) => [`${value} ppt`, 'Salinity']}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine y={30} stroke="#ffcc00" strokeDasharray="3 3" />
          <ReferenceLine y={35} stroke="#ffcc00" strokeDasharray="3 3" />
          <Area
            type="natural"
            dataKey="salinity"
            stroke="url(#salinityGradient)"
            fill="url(#salinityGradient)"
            fillOpacity={0.3}
            animationDuration={300}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
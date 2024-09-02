import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';
import { ChartContainer } from '@/components/ui/chart';
import { chartConfig } from '@/components/charts/chartConfig';

interface Props {
  data: EnvironmentalData[];
}

export const LightIntensityChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="lightIntensityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffcc00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffcc00" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis domain={[0, 400]} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value) => [`${value} μmol/m²/s`, 'Light Intensity']}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine y={100} stroke="#ffcc00" strokeDasharray="3 3" />
          <ReferenceLine y={300} stroke="#ffcc00" strokeDasharray="3 3" />
          <Line
            type="natural"
            dataKey="lightIntensity"
            stroke="url(#lightIntensityGradient)"
            strokeWidth={2}
            dot={false}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
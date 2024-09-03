import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip } from 'recharts';
import { EnvironmentalData } from '@/data/mockData';
import { ChartContainer } from '@/components/ui/chart';
import { chartConfig } from '@/components/charts/chartConfig';

interface Props {
  data: EnvironmentalData[];
}

export const WaterTemperatureChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            tickFormatter={(dateString) => new Date(dateString).toLocaleDateString()}
          />
          <YAxis domain={[10, 30]} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value) => [`${value}°C`, 'Temperature']}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine y={15} stroke="#4d79ff" strokeDasharray="3 3" label="Min Optimal" />
          <ReferenceLine y={25} stroke="#ff4d4f" strokeDasharray="3 3" label="Max Optimal" />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="url(#temperatureGradient)"
            strokeWidth={2}
            dot={{ stroke: '#ff4d4f', strokeWidth: 2 }}
            activeDot={{ r: 8 }}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartLegend } from "@/components/ui/chart";
import { growthData } from '../../data/mockData';

const chartConfig = {
  growthRate: { label: 'Growth Rate (%/day)', color: 'hsl(var(--chart-1))' },
  nutrientUptake: { label: 'Nutrient Uptake (%)', color: 'hsl(var(--chart-2))' },
};

export const GrowthMetricsChart: React.FC = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <LineChart data={growthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip />
        <ChartLegend />
        <Line yAxisId="left" type="monotone" dataKey="growthRate" stroke="var(--color-growthRate)" />
        <Line yAxisId="right" type="monotone" dataKey="nutrientUptake" stroke="var(--color-nutrientUptake)" />
      </LineChart>
    </ChartContainer>
  );
};
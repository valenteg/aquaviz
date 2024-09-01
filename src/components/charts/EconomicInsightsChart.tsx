import React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartLegend } from "@/components/ui/chart";
import { economicData } from '../../data/mockData';

const chartConfig = {
  costPerKg: { label: 'Cost per Kg ($)', color: 'hsl(var(--chart-1))' },
  projectedRevenue: { label: 'Projected Revenue ($)', color: 'hsl(var(--chart-2))' },
};

export const EconomicInsightsChart: React.FC = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <AreaChart data={economicData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <ChartTooltip />
        <ChartLegend />
        <Area yAxisId="left" type="monotone" dataKey="costPerKg" stroke="var(--color-costPerKg)" fill="var(--color-costPerKg)" fillOpacity={0.3} />
        <Area yAxisId="right" type="monotone" dataKey="projectedRevenue" stroke="var(--color-projectedRevenue)" fill="var(--color-projectedRevenue)" fillOpacity={0.3} />
      </AreaChart>
    </ChartContainer>
  );
};
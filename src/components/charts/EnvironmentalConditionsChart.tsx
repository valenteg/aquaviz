import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartLegend, ChartLegendContent, ChartTooltipContent } from "@/components/ui/chart";
import { environmentalData } from '../../data/mockData';

const chartConfig = {
  temperature: { label: 'Temperature (°C)', color: 'hsl(var(--chart-1))' },
  salinity: { label: 'Salinity (ppt)', color: 'hsl(var(--chart-2))' },
  currentSpeed: { label: 'Current Speed (m/s)', color: 'hsl(var(--chart-3))' },
};

export const EnvironmentalConditionsChart: React.FC = () => {
  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={environmentalData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="temperature" fill="var(--color-temperature)" />
          <Bar dataKey="salinity" fill="var(--color-salinity)" />
          <Bar dataKey="currentSpeed" fill="var(--color-currentSpeed)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
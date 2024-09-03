import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { chartConfig } from '@/components/charts/chartConfig';
import { EconomicData, revenueFactors } from '@/data/mockData';

interface RevenueProjectorProps {
  data: EconomicData[];
}

export const RevenueProjector: React.FC<RevenueProjectorProps> = ({ data }) => {
  const latestData = data[data.length - 1];
  const previousData = data[data.length - 2];

  const comparison = [
    { name: 'Previous', current: previousData.projectedRevenue, previous: previousData.projectedRevenue },
    { name: 'Current', current: latestData.projectedRevenue, previous: previousData.projectedRevenue },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Revenue Projector</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p className="text-3xl font-bold text-primary">${latestData.projectedRevenue.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Projected revenue for next harvest</p>
          </div>
          <div>
            <p className="text-lg font-medium">Expected harvest date:</p>
            <p className="text-xl text-primary">{new Date(latestData.date).toLocaleDateString()}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Influencing Factors</p>
          {revenueFactors.map((factor, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-sm">
                <span>{factor.name}</span>
                <span className="font-medium">{factor.value}%</span>
              </div>
              <Progress value={factor.value} className="h-2" />
            </div>
          ))}
        </div>
        <div>
          <p className="text-lg font-medium mb-2">Revenue Comparison</p>
          <ChartContainer config={chartConfig} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparison}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="current" name="Current" fill={chartConfig.growthRate.color} />
                <Bar dataKey="previous" name="Previous" fill={chartConfig.temperature.color} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};
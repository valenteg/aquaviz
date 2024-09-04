import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, PieChart, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { chartConfig } from '@/components/charts/chartConfig';
import { EconomicData, costBreakdown } from '@/data/mockDashboardData';

interface ProductionCostAnalysisProps {
  data: EconomicData[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const ProductionCostAnalysis: React.FC<ProductionCostAnalysisProps> = ({ data }) => {
  const currentCost = data[data.length - 1].costPerKg;
  const costTrend = data.map(item => ({ month: item.date, cost: item.costPerKg }));

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl text-primary">Production Cost Analysis</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <p className="text-3xl font-bold text-primary">${currentCost.toFixed(2)}/kg</p>
            <p className="text-sm text-muted-foreground">Current cost per kg</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Cost Trend</p>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={costTrend}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="cost" stroke={chartConfig.growthRate.color} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Cost Breakdown</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costBreakdown}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {costBreakdown.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
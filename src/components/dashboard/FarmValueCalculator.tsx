import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Treemap, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, Legend } from 'recharts';
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { chartConfig } from '@/components/charts/chartConfig';
import { EconomicData, farmValueComponents } from '@/data/mockDashboardData';

interface FarmValueCalculatorProps {
  data: EconomicData[];
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088FE'];

interface TreemapContentProps {
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  name: string;
}

const TreemapContent: React.FC<TreemapContentProps> = ({ depth, x, y, width, height, index, name }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        fill: COLORS[index % COLORS.length],
        stroke: '#fff',
        strokeWidth: 2 / (depth + 1e-10),
        strokeOpacity: 1 / (depth + 1e-10),
      }}
    />
    {depth === 1 && (
      <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
        {name}
      </text>
    )}
  </g>
);

export const FarmValueCalculator: React.FC<FarmValueCalculatorProps> = ({ data }) => {
  const latestData = data[data.length - 1];
  const historicalTrend = data.map(item => ({ date: item.date, value: item.projectedRevenue * 2 }));

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-primary">Farm Value Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-primary">${(latestData.projectedRevenue * 2).toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total estimated farm value</p>
            </div>
            <div>
              <p className="text-lg font-medium mb-2">Value Components</p>
              <ResponsiveContainer width="100%" height={200}>
                <Treemap
                  data={farmValueComponents}
                  dataKey="value"
                  stroke="#fff"
                  fill="#8884d8"
                  aspectRatio={4 / 3}
                >
                  {(props: TreemapContentProps) => <TreemapContent {...props} />}
                </Treemap>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium">Historical Farm Value Trend</p>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={historicalTrend}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area type="monotone" dataKey="value" name="Farm Value" stroke={chartConfig.growthRate.color} fill={chartConfig.growthRate.color} fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
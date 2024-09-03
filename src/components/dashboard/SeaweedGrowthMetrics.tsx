import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown } from "lucide-react";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface SeaweedGrowthMetricsProps {
  data: {
    currentBiomass: number;
    dailyGrowthRate: number;
    projectedHarvestDate: string;
    growthRateTrend: { date: string; rate: number }[];
  };
}

const chartConfig = {
  growthRate: {
    label: "Growth Rate",
    color: "#4CAF50", // Changed to a green color
  },
};

export const SeaweedGrowthMetrics: React.FC<SeaweedGrowthMetricsProps> = ({ data }) => {
  const daysUntilHarvest = Math.ceil((new Date(data.projectedHarvestDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  const getGrowthRateColor = (rate: number) => {
    if (rate >= 5) return "text-green-500";
    if (rate >= 3) return "text-yellow-500";
    return "text-red-500";
  };

  const growthTrend = data.growthRateTrend[data.growthRateTrend.length - 1].rate - data.growthRateTrend[0].rate;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Seaweed Growth Metrics</CardTitle>
        <CardDescription>Current growth status and projections</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Current Biomass</p>
            <p className="text-2xl font-bold">{data.currentBiomass.toFixed(2)} kg/m²</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Daily Growth Rate</p>
            <p className={`text-2xl font-bold ${getGrowthRateColor(data.dailyGrowthRate)}`}>
              {data.dailyGrowthRate.toFixed(2)}% per day
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Days Until Harvest</p>
            <p className="text-sm font-medium">{daysUntilHarvest} days</p>
          </div>
          <Progress value={(daysUntilHarvest / 90) * 100} className="h-2 bg-green-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">14-Day Growth Rate Trend</p>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.growthRateTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                />
                <Tooltip content={<ChartTooltipContent indicator="line" />} />
                <Area 
                  type="monotone" 
                  dataKey="rate" 
                  stroke={chartConfig.growthRate.color} 
                  fill={chartConfig.growthRate.color} 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {growthTrend >= 0 ? (
                <>
                  Trending up by {growthTrend.toFixed(2)}% this period <TrendingUp className="h-4 w-4 text-green-500" />
                </>
              ) : (
                <>
                  Trending down by {Math.abs(growthTrend).toFixed(2)}% this period <TrendingDown className="h-4 w-4 text-red-500" />
                </>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {new Date(data.growthRateTrend[0].date).toLocaleDateString()} - {new Date(data.growthRateTrend[data.growthRateTrend.length - 1].date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
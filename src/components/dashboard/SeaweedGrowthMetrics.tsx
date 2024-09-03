import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";

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
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          Seaweed Growth Metrics
          <Badge variant={daysUntilHarvest <= 30 ? "destructive" : "secondary"}>
            {daysUntilHarvest} days to harvest
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Current Biomass</p>
            <p className="text-xl font-bold">{data.currentBiomass.toFixed(2)} kg/m²</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Daily Growth Rate</p>
            <p className={`text-xl font-bold ${getGrowthRateColor(data.dailyGrowthRate)}`}>
              {data.dailyGrowthRate.toFixed(2)}% per day
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <p className="text-sm font-medium text-muted-foreground">Days Until Harvest</p>
            <p className="text-sm font-medium">{daysUntilHarvest} days</p>
          </div>
          <Progress value={(daysUntilHarvest / 90) * 100} className="h-2 bg-green-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">14-Day Growth Rate Trend</p>
          <ChartContainer config={chartConfig} className="h-[100px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.growthRateTrend} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
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
                <Badge variant="secondary" className="flex items-center gap-1 bg-green-500 hover:bg-green-600">
                  <TrendingUp className="h-4 w-4" />
                  Up {growthTrend.toFixed(2)}%
                </Badge>
              ) : (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <TrendingDown className="h-4 w-4" />
                  Down {Math.abs(growthTrend).toFixed(2)}%
                </Badge>
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
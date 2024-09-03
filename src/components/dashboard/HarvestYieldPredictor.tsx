import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface HarvestYieldPredictorProps {
  data: {
    projectedYield: number;
    previousYield: number;
    temperatureImpact: number;
    nutrientImpact: number;
    yieldTrend: { date: string; yield: number }[];
  };
}

export const HarvestYieldPredictor: React.FC<HarvestYieldPredictorProps> = ({ data }) => {
  const yieldChange = ((data.projectedYield - data.previousYield) / data.previousYield) * 100;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Harvest Yield Predictor</CardTitle>
        <CardDescription>Current yield status and projections</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Projected Yield</p>
            <p className="text-2xl font-bold">{data.projectedYield.toFixed(2)} tonnes</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-medium text-muted-foreground mr-2">Yield Change</p>
            {yieldChange >= 0 ? (
              <ArrowUpIcon className="text-green-500 h-4 w-4" />
            ) : (
              <ArrowDownIcon className="text-red-500 h-4 w-4" />
            )}
            <p className={`text-sm font-semibold ${yieldChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Math.abs(yieldChange).toFixed(2)}%
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Temperature Impact</p>
          <Progress value={data.temperatureImpact} className="h-2 bg-red-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Nutrient Impact</p>
          <Progress value={data.nutrientImpact} className="h-2 bg-blue-500" />
        </div>
        
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {yieldChange >= 0 ? (
                <>
                  Trending up by {yieldChange.toFixed(2)}% <ArrowUpIcon className="h-4 w-4 text-green-500" />
                </>
              ) : (
                <>
                  Trending down by {Math.abs(yieldChange).toFixed(2)}% <ArrowDownIcon className="h-4 w-4 text-red-500" />
                </>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {new Date(data.yieldTrend[0].date).toLocaleDateString()} - {new Date(data.yieldTrend[data.yieldTrend.length - 1].date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
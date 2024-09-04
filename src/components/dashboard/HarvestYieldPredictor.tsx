import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

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
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          Harvest Yield Predictor
          <Badge variant={yieldChange >= 0 ? "default" : "destructive"}>
            {yieldChange >= 0 ? "+" : "-"}{Math.abs(yieldChange).toFixed(2)}%
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Projected Yield</p>
            <p className="text-xl font-bold">{data.projectedYield.toFixed(2)} tonnes</p>
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
          <Progress value={data.temperatureImpact} className="h-2" />
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Nutrient Impact</p>
          <Progress value={data.nutrientImpact} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};
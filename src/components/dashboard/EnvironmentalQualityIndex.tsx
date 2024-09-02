import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface EnvironmentalQualityIndexProps {
  value: number;
}

export const EnvironmentalQualityIndex: React.FC<EnvironmentalQualityIndexProps> = ({ value }) => {
  const getColor = () => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-blue-500";
    return "bg-red-500";
  };

  const getBadgeColor = () => {
    if (value >= 80) return "bg-green-100 text-green-800";
    if (value >= 60) return "bg-blue-100 text-blue-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm font-medium text-muted-foreground">Environmental Quality Index</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <div className="relative mt-2 h-2 w-full bg-gray-200 rounded-full">
          <div
            className={`absolute h-full rounded-full ${getColor()}`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <Badge className={`mt-2 ${getBadgeColor()}`}>
          {value >= 80 ? "Good" : value >= 60 ? "Moderate" : "Poor"}
        </Badge>
      </CardContent>
    </Card>
  );
};
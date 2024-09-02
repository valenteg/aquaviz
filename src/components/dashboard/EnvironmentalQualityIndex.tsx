import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

interface EnvironmentalQualityIndexProps {
  value: number;
}

export const EnvironmentalQualityIndex: React.FC<EnvironmentalQualityIndexProps> = ({ value }) => {
  const getColor = () => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm font-medium text-muted-foreground">Environmental Quality Index</p>
        <p className="text-2xl font-bold">{value}</p>
        <Progress value={value} className={`mt-2 ${getColor()}`} />
      </CardContent>
    </Card>
  );
};
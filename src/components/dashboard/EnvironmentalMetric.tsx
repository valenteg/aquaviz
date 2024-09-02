import React from 'react';
import { Card, CardContent } from "../ui/card";
import { Thermometer, Droplet, Wind } from 'lucide-react';

interface EnvironmentalMetricProps {
  title: string;
  value: number;
  unit: string;
  type: 'temperature' | 'salinity' | 'currentSpeed';
}

export const EnvironmentalMetric: React.FC<EnvironmentalMetricProps> = ({ title, value, unit, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'temperature':
        return <Thermometer className="h-6 w-6" />;
      case 'salinity':
        return <Droplet className="h-6 w-6" />;
      case 'currentSpeed':
        return <Wind className="h-6 w-6" />;
    }
  };

  const getColor = () => {
    // This is a simplified example. You might want to adjust these thresholds based on actual optimal ranges for seaweed farming.
    switch (type) {
      case 'temperature':
        return value < 15 ? 'text-blue-500' : value > 25 ? 'text-red-500' : 'text-green-500';
      case 'salinity':
        return value < 30 ? 'text-yellow-500' : value > 35 ? 'text-yellow-500' : 'text-green-500';
      case 'currentSpeed':
        return value < 0.1 ? 'text-yellow-500' : value > 0.5 ? 'text-yellow-500' : 'text-green-500';
    }
  };

  return (
    <Card>
      <CardContent className="flex items-center p-4">
        <div className={`mr-4 ${getColor()}`}>{getIcon()}</div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={`text-2xl font-bold ${getColor()}`}>
            {value.toFixed(1)} {unit}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FarmData } from '../../data/mockFarmData';

interface FarmTooltipProps {
  farm: FarmData['properties'];
}

export const FarmTooltip: React.FC<FarmTooltipProps> = ({ farm }) => {
  const getTemperatureColor = (temp: number) => {
    if (temp < 15) return 'text-blue-500';
    if (temp > 20) return 'text-red-500';
    return 'text-green-500';
  };

  const getOxygenColor = (oxygen: number) => {
    if (oxygen < 6) return 'text-red-500';
    if (oxygen > 8) return 'text-green-500';
    return 'text-yellow-500';
  };

  return (
    <Card className="w-64 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-lg">
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2 text-primary-foreground">{farm.name}</h3>
        <p className="text-sm mb-1 text-secondary-foreground">Culture: {farm.cultureType}</p>
        <p className="text-sm mb-1 text-secondary-foreground">
          Temperature: <span className={getTemperatureColor(farm.waterTemp)}>{farm.waterTemp.toFixed(1)}°C</span>
        </p>
        <p className="text-sm mb-1 text-secondary-foreground">
          Dissolved Oxygen: <span className={getOxygenColor(farm.dissolvedOxygen)}>{farm.dissolvedOxygen.toFixed(1)} mg/L</span>
        </p>
        <p className="text-sm text-secondary-foreground">
          Current: {farm.currentSpeed.toFixed(1)} knots {farm.currentDirection}
        </p>
      </CardContent>
    </Card>
  );
};
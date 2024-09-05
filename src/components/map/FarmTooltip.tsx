import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FarmData } from '../../data/mockFarmData';
import { Thermometer, Droplet, Navigation2 } from 'lucide-react';

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
    <Card className="w-aut bg-white bg-opacity-95 backdrop-blur-sm shadow-lg rounded-lg border-none">
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">{farm.name}</h3>
        <p className="text-lg mb-3 text-gray-600 font-medium stroke-stone-800 underline">Culture: {farm.cultureType}</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <Thermometer className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-sm text-gray-700 font-medium">Temperature:</span>
            <span className={`ml-auto font-bold ${getTemperatureColor(farm.waterTemp)}`}>
              {farm.waterTemp.toFixed(1)}°C
            </span>
          </div>
          <div className="flex items-center">
            <Droplet className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-sm text-gray-700 font-medium">Dissolved Oxygen:</span>
            <span className={`ml-auto font-bold ${getOxygenColor(farm.dissolvedOxygen)}`}>
              {farm.dissolvedOxygen.toFixed(1)} mg/L
            </span>
          </div>
          <div className="flex items-center">
            <Navigation2 className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-sm text-gray-700 font-medium">Current:</span>
            <span className="ml-auto font-bold text-gray-800">
              {farm.currentSpeed.toFixed(1)} knots {farm.currentDirection}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
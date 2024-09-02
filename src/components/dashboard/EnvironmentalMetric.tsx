import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Droplet, Wind, Sun } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface EnvironmentalMetricProps {
  title: string;
  value: number;
  unit: string;
  type: 'temperature' | 'salinity' | 'currentSpeed' | 'lightIntensity';
  trendData?: { date: string; value: number }[];
}

export const EnvironmentalMetric: React.FC<EnvironmentalMetricProps> = ({ title, value, unit, type, trendData }) => {
  const getIcon = () => {
    switch (type) {
      case 'temperature': return <Thermometer className="h-6 w-6" />;
      case 'salinity': return <Droplet className="h-6 w-6" />;
      case 'currentSpeed': return <Wind className="h-6 w-6" />;
      case 'lightIntensity': return <Sun className="h-6 w-6" />;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'temperature':
        return value < 15 ? 'text-blue-500' : value > 25 ? 'text-red-500' : 'text-green-500';
      case 'salinity':
        return value < 30 ? 'text-yellow-500' : value > 35 ? 'text-yellow-500' : 'text-green-500';
      case 'currentSpeed':
        return value < 0.1 ? 'text-yellow-500' : value > 0.5 ? 'text-yellow-500' : 'text-green-500';
      case 'lightIntensity':
        return value < 100 ? 'text-yellow-500' : value > 300 ? 'text-yellow-500' : 'text-green-500';
    }
  };

  const getColorValue = () => {
    switch (type) {
      case 'temperature':
        return value < 15 ? '#3b82f6' : value > 25 ? '#ef4444' : '#10b981';
      case 'salinity':
        return value < 30 ? '#f59e0b' : value > 35 ? '#f59e0b' : '#10b981';
      case 'currentSpeed':
        return value < 0.1 ? '#f59e0b' : value > 0.5 ? '#f59e0b' : '#10b981';
      case 'lightIntensity':
        return value < 100 ? '#f59e0b' : value > 300 ? '#f59e0b' : '#10b981';
    }
  };

  return (
    <Card>
      <CardContent className="flex items-center p-4">
        <div className={`mr-4 ${getColorClass()}`}>{getIcon()}</div>
        <div className="flex-grow">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={`text-2xl font-bold ${getColorClass()}`}>
            {value.toFixed(1)} {unit}
          </p>
          {trendData && (
            <ResponsiveContainer width="100%" height={50}>
              <LineChart data={trendData}>
                <XAxis dataKey="date" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke={getColorValue()} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
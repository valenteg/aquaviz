import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const EnvironmentalConditions: React.FC = () => {
  // Mockup data
  const conditions = {
    temperature: 18,
    salinity: 35,
    currentSpeed: 0.5,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Environmental Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Temperature</p>
            <p className="text-2xl font-bold">{conditions.temperature}°C</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Salinity</p>
            <p className="text-2xl font-bold">{conditions.salinity} ppt</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Current Speed</p>
            <p className="text-2xl font-bold">{conditions.currentSpeed} m/s</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentalConditions;
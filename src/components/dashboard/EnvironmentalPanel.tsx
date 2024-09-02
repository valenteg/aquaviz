import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { EnvironmentalMetric } from './EnvironmentalMetric';
import { EnvironmentalConditionsChart } from '../charts/EnvironmentalConditionsChart';
import { environmentalData } from '@/data/mockData';

export const EnvironmentalPanel: React.FC = () => {
  const latestData = environmentalData[environmentalData.length - 1];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Environmental Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <EnvironmentalMetric
            title="Water Temperature"
            value={latestData.temperature}
            unit="°C"
            type="temperature"
          />
          <EnvironmentalMetric
            title="Salinity"
            value={latestData.salinity}
            unit="ppt"
            type="salinity"
          />
          <EnvironmentalMetric
            title="Current Speed"
            value={latestData.currentSpeed}
            unit="m/s"
            type="currentSpeed"
          />
        </div>
        <EnvironmentalConditionsChart data={environmentalData} />
      </CardContent>
    </Card>
  );
};
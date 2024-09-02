import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnvironmentalMetric } from './EnvironmentalMetric';
import { EnvironmentalQualityIndex } from './EnvironmentalQualityIndex';
import { WaterTemperatureChart } from '../charts/WaterTemperatureChart';
import { SalinityChart } from '../charts/SalinityChart';
import { CurrentSpeedChart } from '../charts/CurrentSpeedChart';
import { LightIntensityChart } from '../charts/LightIntensityChart';
import { NutrientLevelsChart } from '../charts/NutrientLevelsChart';
import { environmentalData, nutrientData } from '@/data/mockData';

export const EnvironmentalPanel: React.FC = () => {
  const latestData = environmentalData[environmentalData.length - 1];

  const getTrendData = (key: keyof typeof latestData) => {
    return environmentalData.slice(-7).map(d => ({ date: d.date, value: Number(d[key]) }));
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Environmental Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          <EnvironmentalMetric
            title="Water Temperature"
            value={latestData.temperature}
            unit="°C"
            type="temperature"
            trendData={getTrendData('temperature')}
          />
          <EnvironmentalMetric
            title="Salinity"
            value={latestData.salinity}
            unit="ppt"
            type="salinity"
            trendData={getTrendData('salinity')}
          />
          <EnvironmentalMetric
            title="Current Speed"
            value={latestData.currentSpeed}
            unit="m/s"
            type="currentSpeed"
            trendData={getTrendData('currentSpeed')}
          />
          <EnvironmentalMetric
            title="Light Intensity"
            value={latestData.lightIntensity}
            unit="μmol/m²/s"
            type="lightIntensity"
            trendData={getTrendData('lightIntensity')}
          />
          <EnvironmentalQualityIndex value={75} />
        </div>
        <Tabs defaultValue="temperature" className="space-y-4">
          <TabsList>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="salinity">Salinity</TabsTrigger>
            <TabsTrigger value="currentSpeed">Current Speed</TabsTrigger>
            <TabsTrigger value="lightIntensity">Light Intensity</TabsTrigger>
            <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
          </TabsList>
          <TabsContent value="temperature" className="h-[400px]">
            <WaterTemperatureChart data={environmentalData} />
          </TabsContent>
          <TabsContent value="salinity" className="h-[400px]">
            <SalinityChart data={environmentalData} />
          </TabsContent>
          <TabsContent value="currentSpeed" className="h-[400px]">
            <CurrentSpeedChart data={environmentalData} />
          </TabsContent>
          <TabsContent value="lightIntensity" className="h-[400px]">
            <LightIntensityChart data={environmentalData} />
          </TabsContent>
          <TabsContent value="nutrients" className="h-[400px]">
            <NutrientLevelsChart data={nutrientData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
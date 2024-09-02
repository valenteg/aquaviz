import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DatePickerWithRange } from "../ui/date-picker-with-range";
import { EnvironmentalMetric } from './EnvironmentalMetric';
import { EnvironmentalQualityIndex } from './EnvironmentalQualityIndex';
import { WaterTemperatureChart } from '../charts/WaterTemperatureChart';
import { SalinityChart } from '../charts/SalinityChart';
import { CurrentSpeedChart } from '../charts/CurrentSpeedChart';
import { LightIntensityChart } from '../charts/LightIntensityChart';
import { NutrientLevelsChart } from '../charts/NutrientLevelsChart';
import { environmentalData, nutrientData } from '@/data/mockData';

export const EnvironmentalPanel: React.FC = () => {
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), to: new Date() });
  const latestData = environmentalData[environmentalData.length - 1];

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Environmental Conditions</CardTitle>
          <DatePickerWithRange date={dateRange} setDate={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
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
          <EnvironmentalMetric
            title="Light Intensity"
            value={latestData.lightIntensity}
            unit="μmol/m²/s"
            type="lightIntensity"
          />
          <EnvironmentalQualityIndex value={75} /> {/* Example value */}
        </div>
        <Tabs defaultValue="temperature">
          <TabsList>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="salinity">Salinity</TabsTrigger>
            <TabsTrigger value="currentSpeed">Current Speed</TabsTrigger>
            <TabsTrigger value="lightIntensity">Light Intensity</TabsTrigger>
            <TabsTrigger value="nutrients">Nutrients</TabsTrigger>
          </TabsList>
          <TabsContent value="temperature">
            <WaterTemperatureChart data={environmentalData} dateRange={dateRange} />
          </TabsContent>
          <TabsContent value="salinity">
            <SalinityChart data={environmentalData} dateRange={dateRange} />
          </TabsContent>
          <TabsContent value="currentSpeed">
            <CurrentSpeedChart data={environmentalData} dateRange={dateRange} />
          </TabsContent>
          <TabsContent value="lightIntensity">
            <LightIntensityChart data={environmentalData} dateRange={dateRange} />
          </TabsContent>
          <TabsContent value="nutrients">
            <NutrientLevelsChart data={nutrientData} dateRange={dateRange} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SeaweedGrowthMetrics } from './SeaweedGrowthMetrics';
import { NutrientUptakeEfficiencyChart } from './NutrientUptakeEfficiencyChart';
import { HarvestYieldPredictor } from './HarvestYieldPredictor';
import { FarmProductivityMap } from './FarmProductivityMap';
import { productionData } from '@/data/mockData';

export const ProductionPanel: React.FC = () => {
  const latestData = productionData[productionData.length - 1];

  if (!latestData) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Production Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No production data available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Production Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <SeaweedGrowthMetrics data={latestData} />
          <HarvestYieldPredictor data={latestData} />
        </div>
        <Tabs defaultValue="nutrientUptake" className="space-y-4">
          <TabsList>
            <TabsTrigger value="nutrientUptake">Nutrient Uptake</TabsTrigger>
            <TabsTrigger value="farmProductivity">Farm Productivity</TabsTrigger>
          </TabsList>
          <TabsContent value="nutrientUptake" className="h-[400px]">
            <NutrientUptakeEfficiencyChart data={productionData} />
          </TabsContent>
          <TabsContent value="farmProductivity" className="h-[400px]">
            <FarmProductivityMap data={latestData.farmProductivity} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
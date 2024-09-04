import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SeaweedGrowthMetrics } from './SeaweedGrowthMetrics';
import { NutrientUptakeEfficiencyChart } from './NutrientUptakeEfficiencyChart';
import { HarvestYieldPredictor } from './HarvestYieldPredictor';
import { FarmProductivityMap } from './FarmProductivityMap';
import { productionData } from '@/data/mockDashboardData';
import { Skeleton } from "@/components/ui/skeleton";
import { Sprout } from 'lucide-react';

export const ProductionPanel: React.FC = () => {
  const latestData = productionData[productionData.length - 1];

  if (!latestData) {
    return <Skeleton className="w-full h-[400px]" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Sprout className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Production Overview</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SeaweedGrowthMetrics data={latestData} />
        <HarvestYieldPredictor data={latestData} />
      </div>
      <Tabs defaultValue="nutrientUptake" className="mt-6">
        <TabsList className="w-full justify-start mb-4">
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
    </div>
  );
};
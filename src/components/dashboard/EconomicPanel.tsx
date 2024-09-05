import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductionCostAnalysis } from './ProductionCostAnalysis';
import { RevenueProjector } from './RevenueProjector';
import { FarmValueCalculator } from './FarmValueCalculator';
import { MarketPriceTracker } from './MarketPriceTracker';
import { economicData, marketPriceData } from '@/data/mockDashboardData';
import { DollarSign } from 'lucide-react';

export const EconomicPanel: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-2">
        <DollarSign className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Economic Overview</h2>
      </div>
      <Tabs defaultValue="productionCost" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
          <TabsTrigger value="productionCost" className="text-sm">Production Cost</TabsTrigger>
          <TabsTrigger value="revenue" className="text-sm">Revenue</TabsTrigger>
          <TabsTrigger value="farmValue" className="text-sm">Farm Value</TabsTrigger>
          <TabsTrigger value="marketPrice" className="text-sm">Market Price</TabsTrigger>
        </TabsList>
        <div className="h-[calc(100vh-12rem)] overflow-y-auto">
          <TabsContent value="productionCost">
            <ProductionCostAnalysis data={economicData} />
          </TabsContent>
          <TabsContent value="revenue">
            <RevenueProjector data={economicData} />
          </TabsContent>
          <TabsContent value="farmValue">
            <FarmValueCalculator data={economicData} />
          </TabsContent>
          <TabsContent value="marketPrice">
            <MarketPriceTracker data={marketPriceData} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertsPanel } from '@/components/dashboard/AlertsPanel';
import { EnvironmentalPanel } from '@/components/dashboard/EnvironmentalPanel';
import { ProductionPanel } from '@/components/dashboard/ProductionPanel';
import { EconomicPanel } from '@/components/dashboard/EconomicPanel';
import { RefreshCw } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('alerts');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-primary">Farm Dashboard</h1>
        <Button onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
        </Button>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-grow flex flex-col">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 px-6">
          <TabsTrigger value="alerts" className="text-sm">Alerts</TabsTrigger>
          <TabsTrigger value="environmental" className="text-sm">Environmental</TabsTrigger>
          <TabsTrigger value="production" className="text-sm">Production</TabsTrigger>
          <TabsTrigger value="economic" className="text-sm">Economic</TabsTrigger>
        </TabsList>
        <div className="flex-grow overflow-auto p-6">
          <TabsContent value="alerts" className="h-full"><AlertsPanel /></TabsContent>
          <TabsContent value="environmental" className="h-full"><EnvironmentalPanel /></TabsContent>
          <TabsContent value="production" className="h-full"><ProductionPanel /></TabsContent>
          <TabsContent value="economic" className="h-full"><EconomicPanel /></TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { EconomicInsightsChart } from '../components/charts/EconomicInsightsChart';
import { AlertsPanel } from '../components/dashboard/AlertsPanel';
import { EnvironmentalPanel } from '../components/dashboard/EnvironmentalPanel';
import {ProductionPanel} from '../components/dashboard/ProductionPanel';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Farm Dashboard</h1>
        <Button>Refresh Data</Button>
      </div>
      <Tabs defaultValue="alerts">
        <TabsList>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="environmental">Environmental</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="economic">Economic</TabsTrigger>
        </TabsList>
        <TabsContent value="alerts">
          <AlertsPanel />
        </TabsContent>
        <TabsContent value="environmental">
          <EnvironmentalPanel />
        </TabsContent>
        <TabsContent value="production">
          <ProductionPanel/>
        </TabsContent>
        <TabsContent value="economic">
          <Card>
            <CardHeader>
              <CardTitle>Economic Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <EconomicInsightsChart data={[]} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
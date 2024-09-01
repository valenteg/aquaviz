import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Button } from "../../../components/ui/button";
import { EnvironmentalConditionsChart } from '../../../components/charts/EnvironmentalConditionsChart';
import { GrowthMetricsChart } from '../../../components/charts/GrowthMetricsChart';
import { EconomicInsightsChart } from '../../../components/charts/EconomicInsightsChart';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Farm Dashboard</h1>
        <Button>Refresh Data</Button>
      </div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="environmental">Environmental</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="economic">Economic</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Water Temperature</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">24°C</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Salinity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">35 ppt</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dissolved Oxygen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">7.5 mg/L</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="environmental">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <EnvironmentalConditionsChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="production">
          <Card>
            <CardHeader>
              <CardTitle>Growth Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <GrowthMetricsChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="economic">
          <Card>
            <CardHeader>
              <CardTitle>Economic Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <EconomicInsightsChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { EnvironmentalConditionsChart } from './charts/EnvironmentalConditionsChart';
import { GrowthMetricsChart } from './charts/GrowthMetricsChart';
import { EconomicInsightsChart } from './charts/EconomicInsightsChart';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Environmental Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <EnvironmentalConditionsChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Growth Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <GrowthMetricsChart />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Economic Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <EconomicInsightsChart />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
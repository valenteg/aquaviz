import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export const Dashboard = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Farm Dashboard</h1>
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="environmental">Environmental</TabsTrigger>
        <TabsTrigger value="production">Production</TabsTrigger>
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
            <CardTitle>Environmental Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Detailed environmental data charts will be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="production">
        <Card>
          <CardHeader>
            <CardTitle>Production Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Production data and forecasts will be shown here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    <Button>Refresh Data</Button>
  </div>
);
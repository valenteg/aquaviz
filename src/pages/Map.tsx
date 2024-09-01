import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export const Map = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Interactive Map</h1>
    <Tabs defaultValue="map">
      <TabsList>
        <TabsTrigger value="map">Map View</TabsTrigger>
        <TabsTrigger value="data">Data Layers</TabsTrigger>
      </TabsList>
      <TabsContent value="map">
        <Card>
          <CardHeader>
            <CardTitle>Farm Locations</CardTitle>
          </CardHeader>
          <CardContent className="h-[60vh] bg-secondary flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map component will be implemented here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="data">
        <Card>
          <CardHeader>
            <CardTitle>Environmental Data Layers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Water Temperature</li>
              <li>Salinity</li>
              <li>Dissolved Oxygen</li>
              <li>pH Levels</li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    <div className="flex space-x-4">
      <Button>Toggle Layer</Button>
      <Button variant="outline">Export Data</Button>
    </div>
  </div>
);
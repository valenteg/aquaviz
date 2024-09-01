import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { AquacultureMap } from './AquacultureMap';

export const Map = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Interactive Map</h1>
      <div className="flex space-x-2">
        <Button variant="outline">Export Data</Button>
        <Button>Add Farm</Button>
      </div>
    </div>
    <Tabs defaultValue="map" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="map">Map View</TabsTrigger>
        <TabsTrigger value="data">Data Layers</TabsTrigger>
        <TabsTrigger value="farms">Farm List</TabsTrigger>
      </TabsList>
      <TabsContent value="map" className="mt-4">
        <Card className="border-0 shadow-none">
          <CardContent className="h-[calc(100vh-12rem)] p-0">
            <AquacultureMap />
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
      <TabsContent value="farms">
        <Card>
          <CardHeader>
            <CardTitle>Farm List</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Farm list will be implemented here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);
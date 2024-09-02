import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { AquacultureMap } from '../components/map/AquacultureMap';

export const Map = () => (
  <div className="h-full flex flex-col space-y-4">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Interactive Map</h1>
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">Export Data</Button>
        <Button size="sm">Add Farm</Button>
      </div>
    </div>
    <Tabs defaultValue="map" className="flex-1 flex flex-col">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="map">Map View</TabsTrigger>
        <TabsTrigger value="data">Data Layers</TabsTrigger>
        <TabsTrigger value="farms">Farm List</TabsTrigger>
      </TabsList>
      <TabsContent value="map" className="flex-1 mt-2">
        <Card className="border-0 shadow-none h-full">
          <CardContent className="p-0 h-full w-full">
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
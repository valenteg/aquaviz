import { useState } from 'react';
import { AquacultureMap } from '../components/map/AquacultureMap';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Download, PlusCircle, Layers, List, RefreshCw } from 'lucide-react';

export const Map = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="h-full flex flex-col bg-background text-foreground">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-primary">Interactive Map</h1>
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download current map data and farm information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" className="flex items-center">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Farm
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add a new farm to the map</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button onClick={handleRefresh} disabled={isRefreshing} size="sm">
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>
      </div>
      <Tabs defaultValue="map" className="flex-grow flex flex-col">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="map" className="text-sm">
            <Layers className="w-4 h-4 mr-2" />
            Map View
          </TabsTrigger>
          <TabsTrigger value="farms" className="text-sm">
            <List className="w-4 h-4 mr-2" />
            Farm List
          </TabsTrigger>
        </TabsList>
        <div className="flex-grow overflow-hidden p-6">
          <TabsContent value="map" className="h-full">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                {isLoading && (
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10">
                    <p className="text-lg font-semibold">Loading map...</p>
                  </div>
                )}
                <AquacultureMap onLoad={handleMapLoad} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="farms" className="h-full">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Farm List</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Farm list will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
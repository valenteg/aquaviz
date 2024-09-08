import { useState } from 'react';
import { useCollections, useCollectionItems, useItemDetails, useEDRData, useEDRMetadata, EDRData } from '../hooks/useDatamesh';
import { fetchEDRData } from '../api/edrService'; // Add this import
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import type { Collection, Feature } from '../hooks/useDatamesh';

export const Experiments = () => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);
  const [coords, setCoords] = useState('POINT(173.1470 -41.2290)');
  const [datetime, setDatetime] = useState('2022-01-01T00:00:00Z');
  const [selectedParameters, setSelectedParameters] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('raw');

  const { 
    data: collections, 
    isLoading: collectionsLoading, 
    error: collectionsError 
  } = useCollections();

  const { 
    data: collectionItems, 
    isLoading: itemsLoading, 
    error: itemsError 
  } = useCollectionItems(selectedCollectionId || '', {
    enabled: !!selectedCollectionId
  });

  const { 
    data: itemDetails, 
    isLoading: detailsLoading, 
    error: detailsError 
  } = useItemDetails(selectedCollectionId || '', selectedFeatureId || '', {
    enabled: !!selectedCollectionId && !!selectedFeatureId
  });

  const {
    data: edrMetadata,
    isLoading: edrMetadataLoading,
    error: edrMetadataError
  } = useEDRMetadata();

  const { 
    data: edrData, 
    isLoading: edrLoading, 
    error: edrError 
  } = useEDRData(coords, datetime, selectedParameters, {
    enabled: selectedParameters.length > 0,
    retry: false, // Disable automatic retries
  });

  const fetchEDRDataManually = () => {
    if (selectedParameters.length > 0) {
      console.log('Manually fetching EDR data...');
      fetchEDRData(coords, datetime, selectedParameters)
        .then((data: EDRData) => console.log('Manually fetched EDR data:', data))
        .catch((error: Error) => console.error('Error manually fetching EDR data:', error));
    } else {
      console.warn('No parameters selected');
    }
  };

  if (collectionsLoading || edrMetadataLoading) return <LoadingSpinner message="Loading data..." />;
  if (collectionsError) return <ErrorMessage message={`Error loading collections: ${collectionsError.message}`} />;
  if (edrMetadataError) return <ErrorMessage message={`Error loading EDR metadata: ${edrMetadataError.message}`} />;
  if (!collections || !edrMetadata) return <ErrorMessage message="No data found" />;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Datamesh API Experiment</h1>
      <Separator />
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <ul className="space-y-2">
                {collections.collections.map((collection: Collection) => (
                  <li
                    key={collection.id}
                    className={`cursor-pointer p-2 rounded-md transition-colors ${
                      selectedCollectionId === collection.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setSelectedCollectionId(collection.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{collection.title || collection.id}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Collection Items</CardTitle>
          </CardHeader>
          <CardContent>
            {itemsLoading && <LoadingSpinner message="Loading items..." />}
            {itemsError && <ErrorMessage message={`Error loading items: ${itemsError.message}`} />}
            {collectionItems && (
              <ScrollArea className="h-[calc(100vh-300px)]">
                <ul className="space-y-2">
                  {collectionItems.features.map((feature: Feature) => (
                    <li
                      key={feature.id?.toString()}
                      className={`cursor-pointer p-2 rounded-md transition-colors ${
                        selectedFeatureId === feature.id?.toString()
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedFeatureId(feature.id?.toString() || '')}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{(feature.properties as { name?: string }).name || feature.id}</span>
                        <Badge className="ml-2 flex-shrink-0">{feature.geometry.type}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-7">
          <CardHeader>
            <CardTitle>Item Details</CardTitle>
          </CardHeader>
          <CardContent>
            {detailsLoading && <LoadingSpinner message="Loading details..." />}
            {detailsError && <ErrorMessage message={`Error loading details: ${detailsError.message}`} />}
            {itemDetails && (
              <ScrollArea className="h-[calc(100vh-300px)]">
                <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
                  {JSON.stringify(itemDetails, null, 2)}
                </pre>
              </ScrollArea>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>EDR Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="coords">Coordinates</Label>
                <Input
                  id="coords"
                  value={coords}
                  onChange={(e) => setCoords(e.target.value)}
                  placeholder="e.g., POINT(173.1470 -41.2290)"
                />
              </div>
              <div>
                <Label htmlFor="datetime">Datetime</Label>
                <Input
                  id="datetime"
                  type="datetime-local"
                  value={datetime.slice(0, 16)}
                  onChange={(e) => setDatetime(e.target.value + ':00Z')}
                />
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Select Parameters:</h3>
              <div className="grid grid-cols-4 gap-2">
                {edrMetadata && edrMetadata.parameter_names && Object.entries(edrMetadata.parameter_names).map(([key, param]) => (
                  <label key={key} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedParameters.includes(key)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedParameters(prev => [...prev, key]);
                        } else {
                          setSelectedParameters(prev => prev.filter(p => p !== key));
                        }
                      }}
                      className="form-checkbox h-4 w-4"
                    />
                    <span>{param.description} ({param.unit.label})</span>
                  </label>
                ))}
              </div>
            </div>
            <Button onClick={fetchEDRDataManually} disabled={selectedParameters.length === 0}>
              Fetch EDR Data
            </Button>
            {edrLoading && <LoadingSpinner message="Loading EDR data..." />}
            {edrError && (
              <ErrorMessage 
                message={`Error loading EDR data: ${edrError instanceof Error ? edrError.message : String(edrError)}`} 
              />
            )}
            {edrData && edrMetadata && edrMetadata.parameter_names && (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
                <TabsList>
                  <TabsTrigger value="raw">Raw Data</TabsTrigger>
                  <TabsTrigger value="chart">Chart</TabsTrigger>
                </TabsList>
                <TabsContent value="raw">
                  <ScrollArea className="h-[calc(100vh-500px)]">
                    <div className="space-y-4">
                      {Object.entries(edrData.data_vars).map(([key, value]) => (
                        <div key={key} className="bg-muted p-4 rounded-md">
                          <h4 className="text-lg font-semibold">{edrMetadata.parameter_names[key]?.description}</h4>
                          <p>Value: {value.data[0]} {edrMetadata.parameter_names[key]?.unit.label}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="chart">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={Object.entries(edrData.data_vars).map(([key, value]) => ({
                      name: edrMetadata.parameter_names[key]?.description,
                      value: value.data[0]
                    }))}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            )}
            {!edrLoading && !edrError && (!edrData || Object.keys(edrData.data_vars || {}).length === 0) && (
              <p className="mt-4 text-center text-muted-foreground">No data available for the selected parameters, coordinates, and datetime.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const LoadingSpinner = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center h-full">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
    <p className="mt-2 text-sm text-muted-foreground">{message}</p>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center h-full">
    <p className="text-destructive font-semibold">{message}</p>
    <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
      Retry
    </Button>
  </div>
);
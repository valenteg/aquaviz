import { useState } from 'react';
import { useCollections, useCollectionItems, useItemDetails } from '../hooks/useDatamesh';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Loader2, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


import type { Collection, Feature } from '../hooks/useDatamesh';

export const Experiments = () => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null);

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

  if (collectionsLoading) return <LoadingSpinner message="Loading collections..." />;
  if (collectionsError) return <ErrorMessage message={`Error loading collections: ${collectionsError.message}`} />;
  if (!collections) return <ErrorMessage message="No collections found" />;

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

        <Card className="col-span-6">
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
import { useQuery, UseQueryOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';
import { fetchCollections, fetchCollectionItems, fetchItemDetails } from '../api/datameshService';
import { fetchEDRData, fetchEDRMetadata } from '../api/edrService';

export interface Link {
  href: string;
  rel?: string;
  type?: string;
  hreflang?: string;
  title?: string;
  length?: number;
}

export interface Collection {
  id: string;
  title?: string;
  description?: string;
  links: Link[];
  extent?: {
    spatial?: {
      bbox: number[][];
      crs?: string;
    };
    temporal?: {
      interval: (string | null)[][];
      trs?: string;
    };
  };
  itemType?: string;
  crs?: string[];
}

export interface Collections {
  links: Link[];
  collections: Collection[];
}

export interface Geometry {
  type: string;
  coordinates: number[] | number[][] | number[][][];
}

export interface Feature {
  type: 'Feature';
  geometry: Geometry;
  properties: Record<string, unknown>;
  id?: string | number;
  bbox?: number[];
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
  bbox?: number[];
}

type QueryOptions<TData> = Omit<UseQueryOptions<TData, Error, TData, QueryKey>, 'queryKey' | 'queryFn'>;

export function useCollections(options?: QueryOptions<Collections>): UseQueryResult<Collections, Error> {
  return useQuery<Collections, Error, Collections, QueryKey>({
    queryKey: ['collections'],
    queryFn: fetchCollections,
    retry: 3, 
    ...options,
  });
}

export function useCollectionItems(collectionId: string, options?: QueryOptions<FeatureCollection>): UseQueryResult<FeatureCollection, Error> {
  return useQuery<FeatureCollection, Error, FeatureCollection, QueryKey>({
    queryKey: ['collectionItems', collectionId],
    queryFn: () => fetchCollectionItems(collectionId),
    enabled: !!collectionId,
    retry: 3, 
    ...options,
  });
}

export function useItemDetails(collectionId: string, featureId: string, options?: QueryOptions<Feature>): UseQueryResult<Feature, Error> {
  return useQuery<Feature, Error, Feature, QueryKey>({
    queryKey: ['itemDetails', collectionId, featureId],
    queryFn: () => fetchItemDetails(collectionId, featureId),
    enabled: !!collectionId && !!featureId,
    retry: 3,
    ...options,
  });
}

// Add this new interface for EDR data
export interface EDRParameter {
  type: string;
  description: string;
  unit: {
    label: string;
  };
  standard_name: string;
}

export interface EDRData {
  coords: {
    time: { dims: string[], attrs: Record<string, unknown>, data: string[] };
    spatial_ref: { dims: string[], attrs: Record<string, unknown>, data: number };
    longitude: { dims: string[], attrs: Record<string, unknown>, data: number };
    latitude: { dims: string[], attrs: Record<string, unknown>, data: number };
  };
  attrs: Record<string, unknown>;
  dims: { time: number };
  data_vars: {
    [key: string]: {
      dims: string[];
      attrs: Record<string, unknown>;
      data: number[];
    };
  };
}

// Update the useEDRData hook
export function useEDRData(
  coords: string,
  datetime: string,
  parameters: string[],
  options?: Omit<UseQueryOptions<EDRData, Error, EDRData, QueryKey>, 'queryKey' | 'queryFn'>
): UseQueryResult<EDRData, Error> {
  return useQuery<EDRData, Error>({
    queryKey: ['edrData', coords, datetime, parameters],
    queryFn: () => fetchEDRData(coords, datetime, parameters),
    ...options,
  });
}

export function useEDRMetadata(options?: UseQueryOptions<EDRMetadata, Error>): UseQueryResult<EDRMetadata, Error> {
  return useQuery<EDRMetadata, Error>({
    queryKey: ['edrMetadata'],
    queryFn: fetchEDRMetadata,
    ...options,
  });
}

export interface EDRMetadata {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  links: Link[];
  extent: {
    spatial: {
      bbox: number[];
      crs: string;
    };
    temporal: {
      interval: string;
      trs: string;
    };
  };
  data_queries: {
    position: {
      link: Link & {
        variables: {
          title: string;
          query_type: string;
          output_formats: string[];
          default_output_format: string;
          crs_details: Array<{
            crs: string;
            wkt: string;
          }>;
        };
      };
    };
  };
  crs: string[];
  parameter_names: Record<string, EDRParameter>;
}

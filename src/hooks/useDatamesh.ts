import { useQuery, UseQueryOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';
import { fetchCollections, fetchCollectionItems, fetchItemDetails } from '../api/datameshService';

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

// Query options type
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

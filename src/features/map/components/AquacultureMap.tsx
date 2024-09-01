import { useState, useCallback } from 'react';
import Map, { NavigationControl, FullscreenControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface AquacultureMapProps {
  initialViewState?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
}

export const AquacultureMap = ({ 
  initialViewState = { longitude: 173.135, latitude: -41.091 , zoom: 9 } 
}: AquacultureMapProps) => {
  const [viewState, setViewState] = useState(initialViewState);
  const [, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMove = useCallback(({ viewState }: { viewState: any }) => {
    setViewState(viewState);
  }, []);

  const handleLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  const handleError = useCallback((e: any) => {
    console.error('Map error:', e);
    setError(e.message || 'An error occurred while loading the map');
  }, []);

  if (error) {
    return <div className="h-full w-full flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="h-full w-full relative">
      <Map
        {...viewState}
        onMove={handleMove}
        onLoad={handleLoad}
        onError={handleError}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/gabvalente/cm0j87ebe021e01qqehdvgw9m"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        initialViewState={initialViewState}
        reuseMaps
      >
        <NavigationControl position="top-right" />
        <FullscreenControl position="top-right" />
      </Map>
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-2 rounded-md shadow-md">
        <p className="text-sm font-medium">
          Lng: {viewState.longitude.toFixed(4)} | Lat: {viewState.latitude.toFixed(4)} | Zoom: {viewState.zoom.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
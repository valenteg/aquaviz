import { useState, useCallback, useRef, lazy, Suspense } from 'react';
import { LoadingSpinner } from '../ui/loading-spinner';
import { MapRef } from 'react-map-gl';
import { NavigationControl, ScaleControl } from 'react-map-gl';
import { Source, Layer, Popup } from 'react-map-gl';
import type { MapMouseEvent } from 'react-map-gl';


const Map = lazy(() => import('react-map-gl'));

import type { FillLayerSpecification, LineLayerSpecification } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mockupFarms } from '../../data/mockFarmData';
import { FarmTooltip } from './FarmTooltip';

interface AquacultureMapProps {
  onLoad?: () => void;
}

const INITIAL_VIEW_STATE = {
  longitude: 173.1470,
  latitude: -41.2290,
  zoom: 11.8,
  pitch: 55.70,
  bearing: 0.00
};

const MAX_BOUNDS: [number, number, number, number] = [
  172.9470, -41.4290, // Southwest 
  173.3470, -41.0290  // Northeast 
];

export const AquacultureMap: React.FC<AquacultureMapProps> = ({ onLoad }) => {
  const mapRef = useRef<MapRef>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [hoveredFarm, setHoveredFarm] = useState<string | null>(null);
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
  const [cursorCoordinates, setCursorCoordinates] = useState<[number, number] | null>(null);
  const [popupInfo, setPopupInfo] = useState<{ coordinates: [number, number], properties: any } | null>(null);

  const onMapLoad = useCallback(() => {
    setMapLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const farmDataLayer: FillLayerSpecification = {
    id: 'farm-layer',
    type: 'fill',
    source: 'farms', 
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'name'], hoveredFarm],
        'rgba(0, 255, 0, 0.7)',
        ['==', ['get', 'name'], selectedFarm],
        'rgba(0, 255, 0, 0.5)',
        'rgba(0, 255, 0, 0.3)'
      ],
      'fill-outline-color': 'rgba(0, 0, 0, 0)'
    }
  };

  const farmOutlineLayer: LineLayerSpecification = {
    id: 'farm-outline',
    type: 'line',
    source: 'farms',
    paint: {
      'line-color': 'green',
      'line-width': 2
    }
  };

  const onHover = useCallback((event: MapMouseEvent) => {
    if (event.features && event.features.length > 0) {
      const feature = event.features[0];
      setHoveredFarm(feature.properties?.name || null);
      setCursorCoordinates([event.lngLat.lng, event.lngLat.lat]);
      setPopupInfo({
        coordinates: [event.lngLat.lng, event.lngLat.lat],
        properties: feature.properties
      });
    } else {
      setHoveredFarm(null);
      setPopupInfo(null);
    }
  }, []);

  const onClick = useCallback((event: MapMouseEvent) => {
    if (event.features && event.features.length > 0) {
      const farmName = event.features[0].properties?.name;
      setSelectedFarm(farmName);
      
      const farm = mockupFarms.find(f => f.properties.name === farmName);
      if (farm && mapRef.current) {
        const [minLng, minLat, maxLng, maxLat] = farm.geometry.coordinates[0].reduce(
          (bounds, coord) => [
            Math.min(bounds[0], coord[0]),
            Math.min(bounds[1], coord[1]),
            Math.max(bounds[2], coord[0]),
            Math.max(bounds[3], coord[1])
          ],
          [Infinity, Infinity, -Infinity, -Infinity]
        );

        mapRef.current.fitBounds(
          [[minLng, minLat], [maxLng, maxLat]],
          { padding: 100, duration: 1000 }
        );
      }
    } else {
      setSelectedFarm(null);
    }
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW_STATE}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        onLoad={onMapLoad}
        maxPitch={85}
        minZoom={10}
        maxZoom={14}
        maxBounds={MAX_BOUNDS}
        interactiveLayerIds={['farm-layer']}
        onMouseMove={onHover}
        onMouseLeave={() => {
          setHoveredFarm(null);
          setCursorCoordinates(null);
          setPopupInfo(null);
        }}
        onClick={onClick}
      >
        <NavigationControl position="top-right" showCompass={true} showZoom={true} visualizePitch={true} />
        <ScaleControl position="bottom-right" />

        {mapLoaded && (
          <Source id="farms" type="geojson" data={{ type: 'FeatureCollection', features: mockupFarms }}>
            <Layer {...farmDataLayer} />
            <Layer {...farmOutlineLayer} />
          </Source>
        )}
        
        {popupInfo && (
          <Popup
            longitude={popupInfo.coordinates[0]}
            latitude={popupInfo.coordinates[1]}
            closeButton={false}
            closeOnClick={false}
            anchor="top"
            className="bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg"
          >
            <FarmTooltip farm={popupInfo.properties} />
          </Popup>
        )}
      </Map>
      <div className="absolute bottom-0 left-0 p-4 flex flex-col space-y-2">
        {(hoveredFarm || selectedFarm) && (
          <div className="bg-card text-card-foreground p-2 rounded shadow">
            <p className="font-bold">{hoveredFarm || selectedFarm}</p>
          </div>
        )}
        {cursorCoordinates && (
          <div className="bg-card text-card-foreground p-2 rounded shadow">
            <p className="text-sm">
              Lon: {cursorCoordinates[0].toFixed(4)}, Lat: {cursorCoordinates[1].toFixed(4)}
            </p>
          </div>
        )}
      </div>
    </Suspense>
  );
};
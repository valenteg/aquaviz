import { useState, useCallback, useRef } from 'react';
import Map, { NavigationControl, ScaleControl, Source, Layer, MapRef, MapLayerMouseEvent } from 'react-map-gl';
import type { FillLayer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mockupFarms } from '../../data/mockFarmData';

interface AquacultureMapProps {
  onLoad?: () => void;
}

const INITIAL_VIEW_STATE = {
  longitude: 173.1470,
  latitude: -41.2290,
  zoom: 11,
  pitch: 55.50,
  bearing: 0.00
};

const MAX_BOUNDS: [number, number, number, number] = [
  172.9470, -41.4290, // Southwest coordinates
  173.3470, -41.0290  // Northeast coordinates
];

export const AquacultureMap: React.FC<AquacultureMapProps> = ({ onLoad }) => {
  const mapRef = useRef<MapRef>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [hoveredFarm, setHoveredFarm] = useState<string | null>(null);

  const onMapLoad = useCallback(() => {
    setMapLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const farmDataLayer: FillLayer = {
    id: 'farm-layer',
    type: 'fill',
    source: 'farms', 
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'name'], hoveredFarm],
        'rgba(0, 255, 0, 0.5)',
        'rgba(0, 255, 0, 0.2)'
      ],
      'fill-outline-color': 'green'
    }
  };

  const onHover = useCallback((event: MapLayerMouseEvent) => {
    if (event.features && event.features.length > 0) {
      setHoveredFarm(event.features[0].properties?.name || null);
    } else {
      setHoveredFarm(null);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
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
        onMouseLeave={() => setHoveredFarm(null)}
      >
        <NavigationControl showCompass={true} showZoom={true} visualizePitch={true} />
        <ScaleControl />

        {mapLoaded && (
          <Source id="farms" type="geojson" data={{ type: 'FeatureCollection', features: mockupFarms }}>
            <Layer {...farmDataLayer} />
          </Source>
        )}
      </Map>
      {hoveredFarm && (
        <div className="absolute bottom-4 left-4 bg-card text-card-foreground p-2 rounded shadow">
          <p className="font-bold">{hoveredFarm}</p>
        </div>
      )}
    </div>
  );
};
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { type FC } from "react";
import { type Cache } from "@/types";
import "leaflet/dist/leaflet.css";
import { icon, Point } from "leaflet";

const zoom = 16;
const position = {
  lat: 50.774810966592305,
  lng: 15.048286893177636,
};

export type CacheMarkerProps = {
  cache: Cache;
  onSelect: () => void;
};

const CacheMarker: FC<CacheMarkerProps> = ({
  cache,
  onSelect,
}: CacheMarkerProps) => {
  const position = cache.locked ? cache.fakeCoordinates : cache.coordinates;
  const cacheIcon = icon({
    iconUrl: `/static/caches/${cache.found ? "smiley" : cache.type}.png`,
    iconAnchor: new Point(12, 12),
    iconSize: new Point(24, 24),
  });

  return (
    <Marker
      key={cache.id}
      position={position}
      icon={cacheIcon}
      eventHandlers={{ click: () => onSelect() }}
    />
  );
};

export type MapProps = {
  caches: Array<Cache>;
  onCacheSelected: (cache: Cache) => void;
};

export const Map: FC<MapProps> = ({ caches, onCacheSelected }) => {
  return (
    <MapContainer center={position} zoom={zoom} className="flex-grow">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <>
        {caches.map((cache) => (
          <CacheMarker
            key={cache.id}
            cache={cache}
            onSelect={() => onCacheSelected(cache)}
          />
        ))}
      </>
    </MapContainer>
  );
};

export default Map;

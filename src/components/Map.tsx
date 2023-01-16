import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
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
  const cacheIcon = icon({
    iconUrl: `/static/caches/${cache.found ? "smiley" : cache.type}.png`,
    iconAnchor: new Point(12, 12),
    iconSize: new Point(24, 24),
  });

  return (
    <Marker
      key={cache.id}
      position={cache.coordinates}
      icon={cacheIcon}
      eventHandlers={{ click: () => onSelect() }}
    >
      <Tooltip content={cache.title} direction="top"></Tooltip>
    </Marker>
  );
};

export type MapProps = {
  caches: Array<Cache>;
  loading: boolean;
  onCacheSelected: (cache: Cache) => void;
};

export const Map: FC<MapProps> = ({ caches, loading, onCacheSelected }) => {
  return (
    <MapContainer center={position} zoom={zoom} className="relative flex-grow">
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

      {loading && (
        <div className="absolute right-4 top-4 z-[10000] bg-white p-4 rounded-lg font-black text-geocaching-brown-darker shadow-lg">
          Načítám kešky...
        </div>
      )}
    </MapContainer>
  );
};

export default Map;

import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { type FC } from "react";
import { type Cache } from "@/types";
import "leaflet/dist/leaflet.css";
import { icon, Point } from "leaflet";

const zoom = 14;
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
        <div className="absolute w-full h-full inset-0 flex flex-row items-center justify-center z-[10000] backdrop-brightness-50 backdrop-blur-sm rounded-lg font-black text-geocaching-white shadow-lg text-2xl">
          Načítám kešky...
        </div>
      )}
    </MapContainer>
  );
};

export default Map;

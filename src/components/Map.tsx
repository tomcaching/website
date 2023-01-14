import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FC } from "react";
import "leaflet/dist/leaflet.css";

const zoom = 16;
const position = {
  lat: 50.77,
  lng: 15.04,
};

const Map: FC = () => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className="flex-grow"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;

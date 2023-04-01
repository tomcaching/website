import { type FC } from "react";
import { type CacheCoordinates as CoordinatesType } from "@/types";
import { FaMapMarkerAlt } from "react-icons/fa";

const formatCoordinates = (value: number, prefix: string) => {
  const base = Math.floor(value);
  const decimal = value.toFixed(6).replace(/\d+\./, "");

  return `${prefix} ${base}.${decimal}`;
};

export type CacheCoordinatesProps = {
  coordinates: CoordinatesType;
};

export const CacheCoordinates: FC<CacheCoordinatesProps> = ({
  coordinates,
}: CacheCoordinatesProps) => {
  return (
    <div className="w-full bg-geocaching-brown-dark text-geocaching-brown-light px-8 py-4 md:px-8 md:py-8 rounded-lg flex items-center justify-center">
      <FaMapMarkerAlt className="text-xl lg:text-4xl mr-4" />
      <div className="flex flex-col font-mono font-bold">
        <div>{formatCoordinates(coordinates.lat, "N")}</div>
        <div>{formatCoordinates(coordinates.lng, "E")}</div>
      </div>
    </div>
  );
};

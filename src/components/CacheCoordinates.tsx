import { cache, type FC } from "react";
import { type CacheCoordinates as CoordinatesType } from "@/types";
import { FaMapMarkerAlt } from "react-icons/fa";

export type CacheCoordinatesProps = {
  coordinates: CoordinatesType;
};

export const CacheCoordinates: FC<CacheCoordinatesProps> = ({
  coordinates,
}: CacheCoordinatesProps) => {
  return (
    <div className="w-full bg-geocaching-brown-dark text-geocaching-brown-light px-4 py-8 rounded-lg flex items-center justify-center">
      <FaMapMarkerAlt className="text-4xl mr-4" />
      <div className="flex flex-col font-mono font-bold">
        <div>{coordinates.lat}</div>
        <div>{coordinates.lng}</div>
      </div>
    </div>
  );
};

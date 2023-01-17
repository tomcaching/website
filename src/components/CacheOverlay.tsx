import { type Cache } from "@/types";
import { type FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { CacheCoordinates } from "./CacheCoordinates";
import { LockedMysteryCache } from "./LockedMysteryCache";
import { Overlay } from "./Overlay";

type CacheOverlayProps = {
  cache: Cache | null;
  onClose: () => void;
};

export const CacheOverlay: FC<CacheOverlayProps> = ({
  cache,
  onClose,
}: CacheOverlayProps) => {
  return (
    <Overlay visible={cache !== null} onClose={onClose}>
      {cache && (
        <>
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <h1 className="flex flex-col items-start text-black font-black text-3xl">
              {cache.title}
              {cache.found && (
                <div className="text-geocaching-green text-lg flex flex-row items-center mt-2">
                  <FaCheckCircle className="mr-1" />
                  Nalezena
                </div>
              )}
            </h1>
            <div>
              {!cache.locked && <CacheCoordinates coordinates={cache.coordinates} />}
            </div>
          </div>
          <p className="my-4">
            <ReactMarkdown skipHtml={true}>{cache.content}</ReactMarkdown>
          </p>
          {cache.locked && <LockedMysteryCache cache={cache} loading={false} />}
        </>
      )}
    </Overlay>
  );
};

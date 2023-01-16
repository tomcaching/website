import { type Cache } from "@/types";
import { type FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
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
          <h1 className="flex flex-col items-start text-black font-black text-3xl">
            {cache.title}
            {cache.found && (
                <div className="text-geocaching-green text-lg flex flex-row items-center mt-2">
                    <FaCheckCircle className="mr-1"/>
                    Nalezena
                </div>
            )}
          </h1>
          <p className="my-4">
            <ReactMarkdown skipHtml={true}>{cache.content}</ReactMarkdown>
          </p>
          {cache.locked ? (
            <div>Locked</div>
          ) : (
            <p>{JSON.stringify(cache.coordinates)}</p>
          )}
        </>
      )}
    </Overlay>
  );
};

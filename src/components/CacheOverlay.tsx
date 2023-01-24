import { markCacheFound } from "@/api";
import { type Cache } from "@/types";
import { type FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useMutation, useQueryClient } from "react-query";
import { CacheCoordinates } from "./CacheCoordinates";
import { CacheHint } from "./CacheHint";
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
  const client = useQueryClient();
  const mutation = useMutation(() => markCacheFound(cache!.id), {
    onSuccess: () => client.invalidateQueries("caches")
  });

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
              {(!cache.found && !cache.locked) && (
                <button className="bg-geocaching-green text-white text-sm uppercase px-6 py-4 rounded-lg mt-4" onClick={() => mutation.mutate()}>Označit kešku za nalezenou</button>
              )}
            </h1>
            <div>
              {!cache.locked && <CacheCoordinates coordinates={cache.coordinates} />}
            </div>
          </div>
          <div className="my-4">
            <ReactMarkdown skipHtml={true}>{cache.content}</ReactMarkdown>
          </div>
          {
            cache.locked
              ? <LockedMysteryCache cache={cache} loading={false} />
              : <CacheHint hint={cache.hint} />
          }
        </>
      )}
    </Overlay>
  );
};

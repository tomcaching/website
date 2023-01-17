import { type Cache } from "@/types";
import { createRef, type FC } from "react";
import { FaKey, FaLock, FaSpinner } from "react-icons/fa";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type LockedMysteryCacheProps = {
  cache: Cache;
  loading: boolean;
};

export const LockedMysteryCache: FC<LockedMysteryCacheProps> = ({
  cache,
  loading,
}: LockedMysteryCacheProps) => {
  const inputRef = createRef<HTMLInputElement>();

  if (cache.type != "mystery") {
    return <></>;
  }

  return (
    <div className="bg-geocaching-light p-4 rounded-lg">
      <div className="mb-2 text-geocaching-green flex flex-row items-center">
        <FaLock className="mr-2" />
        <span className="font-bold">Souřadnice je potřeba odemknout</span>
      </div>
      <ReactMarkdown>{cache.question}</ReactMarkdown>
      <div className="flex flex-row items-center mt-8">
        <input
          ref={inputRef}
          className="border-2 border-r-0 h-12 p-4 font-semibold tracking-widest text-sm uppercase border-geocaching-green rounded-l-lg outline-none focus:ring-4 ring-geocaching-green ring-opacity-40 z-50 disabled:bg-geocaching-brown"
          placeholder="Heslo"
          disabled={loading}
        />
        <button className="flex flex-row items-center justify-center bg-geocaching-green text-white h-12 w-12 py-4 rounded-r-lg transition-all text-lg outline-none focus:ring-4 ring-geocaching-green ring-opacity-40">
          {loading ? <FaSpinner className="animate-spin" /> : <FaKey />}
        </button>
      </div>
    </div>
  );
};

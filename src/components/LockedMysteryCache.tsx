import { unlockCache } from "@/api";
import { type MysteryCache } from "@/types";
import { useEffect, useState, type FC } from "react";
import { FaFlag, FaKey, FaLock, FaSpinner } from "react-icons/fa";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useMutation, useQueryClient } from "react-query";

type LockedMysteryCacheProps = {
  cache: MysteryCache;
  loading: boolean;
};

export const LockedMysteryCache: FC<LockedMysteryCacheProps> = ({
  cache,
  loading: loadingProp,
}: LockedMysteryCacheProps) => {
  const [error, setError] = useState<boolean>(false);
  const [solution, setSolution] = useState<string>("");

  const client = useQueryClient();
  const mutation = useMutation(() => unlockCache(cache.id, solution), {
    onSuccess: (response) => {
      client.setQueryData("caches", response);
      setError(false);
    },
    onError: () => {
      setError(true);
    }
  });

  useEffect(() => setError(false), [cache, loadingProp, setError]);

  const loading = loadingProp || mutation.isLoading;

  return (
    <div className="bg-geocaching-light p-4 rounded-lg">
      <div className="mb-2 text-geocaching-green flex flex-row items-center">
        <FaLock className="mr-2" />
        <span className="font-bold">Souřadnice je potřeba odemknout</span>
      </div>
      { cache.challenge === null && <ReactMarkdown>{cache.question}</ReactMarkdown> }
      <div className="flex flex-row items-center mt-4">
        <input
          value={solution}
          onChange={(event) => { setSolution(event.target.value.trim()); setError(false); }}
          className="border-2 border-r-0 h-12 p-4 font-semibold tracking-widest text-sm uppercase border-geocaching-green rounded-l-lg outline-none focus:ring-4 ring-geocaching-green ring-opacity-40 z-50 disabled:bg-geocaching-brown"
          placeholder="Heslo"
          disabled={loading}
        />
        <button disabled={loading} onClick={() => mutation.mutate()} className="flex flex-row items-center justify-center bg-geocaching-green text-white h-12 w-12 py-4 rounded-r-lg transition-all text-lg outline-none focus:ring-4 ring-geocaching-green ring-opacity-40">
          {loading ? <FaSpinner className="animate-spin" /> : <FaKey />}
        </button>
      </div>
      {error && <div className="text-red-700 font-semibold mt-2">To bohužel není správná odpověď...</div>}
    </div>
  );
};

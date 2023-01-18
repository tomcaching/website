import { ApplicationContext } from "@/context/ApplicationContext";
import "@/styles/globals.css";
import { type Cache } from "@/types";
import { type AppProps } from "next/app";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [cache, setCache] = useState<number | null>(null);
  const [caches, setCaches] = useState<Array<Cache>>([]);

  return (
    <ApplicationContext.Provider value={{ cache, caches, setCache, setCaches }}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
}

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCaches } from "@/api";
import { CacheOverlay } from "@/components/CacheOverlay";
import { ApplicationContext, ApplicationContextState } from "@/context/ApplicationContext";
import { type Cache } from "@/types";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="bg-geocaching-gray flex-grow" />,
});

export default function Home() {
  const { cache, setCache, caches, setCaches } = useContext<ApplicationContextState>(ApplicationContext);
  const { data, isLoading } = useQuery<Array<Cache>>("caches", fetchCaches);

  useEffect(() => data && setCaches(data), [data, setCaches]);

  const selectedCache = cache != null 
    ? (caches.find(item => item.id == cache) ?? null)
    : null;

  return (
    <>
      <Head>
        <title>Tomcaching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Tomcaching" />
        <meta name="og:url" content="https://tomcaching.fun" />
        <meta name="og:image" content="https://i.imgur.com/Qrc2xVn.png" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Map
          loading={isLoading}
          caches={caches || []}
          onCacheSelected={(cache) => setCache(cache.id)}
        />
        <Footer />
        <CacheOverlay cache={selectedCache} onClose={() => setCache(null)} />
      </div>
    </>
  );
}

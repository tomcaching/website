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
import { useRouter } from "next/router";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="bg-geocaching-gray-default flex-grow" />,
});

export default function Home() {
  const router = useRouter();
  const { cache, setCache, caches, setCaches } = useContext<ApplicationContextState>(ApplicationContext);
  const { data, isLoading } = useQuery<Array<Cache>>("caches", fetchCaches);

  useEffect(() => data && setCaches(data), [data, setCaches]);
  useEffect(() => { 
    const currentRouterCache = router.query.cache ?? null;
    
    if (cache === null && currentRouterCache === null) {
      setCache(null);
      return;
    }

    const currentRouterCacheId = Number(currentRouterCache);

    if (cache !== currentRouterCacheId) {
      setCache(currentRouterCacheId);
    }
  }, [cache, setCache, router.query]);

  const selectCache = async (cache: number | null) => {
    const query = cache === null ? {} : { cache };
    const route = { query };

    await router.push(route, undefined, { shallow: true });
    await setCache(cache);
  }

  const selectedCache = caches != null
    ? (caches?.find(item => item.id == cache) ?? null)
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
          onCacheSelected={(cache) => selectCache(cache.id)}
        />
        <Footer />
        <CacheOverlay cache={selectedCache} onClose={() => selectCache(null)} />
      </div>
    </>
  );
}

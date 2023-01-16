import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { type Cache } from "@/types";
import { useQuery } from "react-query";
import { fetchCaches } from "@/api";
import { CacheOverlay } from "@/components/CacheOverlay";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <div className="bg-geocaching-brown-gray flex-grow" />,
});

export default function Home() {
  const [selectedCache, setSelectedCache] = useState<Cache | null>(null);
  const { data: caches, isLoading } = useQuery("caches", fetchCaches);

  return (
    <>
      <Head>
        <title>Tomcaching</title>
        <meta name="description" content="To be done" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Map
          loading={isLoading}
          caches={caches || []}
          onCacheSelected={(cache) => setSelectedCache(cache)}
        />
        <Footer />
        <CacheOverlay cache={selectedCache} onClose={() => setSelectedCache(null)} />
      </div>
    </>
  );
}

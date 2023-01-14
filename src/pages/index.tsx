import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Overlay } from "@/components/Overlay";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { type Cache } from "@/types";

const Map = dynamic(() => import("@/components/Map"), {
   ssr: false,
   loading: () => <div className="bg-geocaching-brown-gray flex-grow"/>
  });

// TODO: Fetch this from the API
const caches: Array<Cache> = []

export default function Home() {
  const [selectedCache, setSelectedCache] = useState<Cache | null>(null);

  return (
    <>
      <Head>
        <title>Tomcaching</title>
        <meta name="description" content="To be done" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <Map caches={caches} onCacheSelected={(cache) => setSelectedCache(cache)}/>
        <Footer />
        <Overlay visible={selectedCache !== null} onClose={() => setSelectedCache(null)}>
          <h1 className="text-geocaching-green font-black text-3xl">{selectedCache?.title}</h1>
          <p className="mt4">
            {selectedCache?.content}
          </p>
        </Overlay>
      </div>
    </>
  );
}

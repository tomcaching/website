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
const caches: Array<Cache> = [
  {
    id: 1,
    type: "traditional",
    coordinates: {
      lat: 50.7746878,
      lng: 15.0481814
    },
    fakeCoordinates: null,
    title: "Klasická keška doma",
    content: "Tohle bude \n#markdown popis\n**kurzíva**",
    found: false,
    locked: false,
  },
  {
    id: 2,
    type: "mystery",
    coordinates: {
      lat: 50.776210010686995,
      lng: 15.050094620893406
    },
    fakeCoordinates: {
      lat: 50.77440713128637,
      lng: 15.048651308781785
    },
    title: "Mysterka",
    content: "Vypadá to, že je na hřišti u baráku, ale ve skutečnosti je na velkým fotbalu",
    locked: true,
    found: false
  }
]

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

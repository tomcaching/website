import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Overlay } from "@/components/Overlay";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  const [selectedCache, setSelectedCache] = useState<string | null>(null);

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
        <button onClick={() => setSelectedCache("something")}>Show cache overlay</button>
        <Map />
        <Footer />
        <Overlay visible={selectedCache !== null} onClose={() => setSelectedCache(null)}>
          <h1 className="text-geocaching-green font-black text-3xl">Tady bude název kešky</h1>
          <p>
            A nějaký povídání
            <br/>
            bla
            <br/>
            bla
            <br/>
            bla
            <br/>
            bla
          </p>
        </Overlay>
      </div>
    </>
  );
}

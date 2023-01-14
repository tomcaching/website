import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
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
        <Map />
        <Footer />
      </div>
    </>
  );
}

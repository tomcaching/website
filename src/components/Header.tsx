import { Inter } from "@next/font/google";
import Image from "next/image";
import { FC } from "react";
import logo from "@/assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const Header: FC = () => {
  return (
    <header className="bg-geocaching-green px-8 py-6 flex flex-row items-center">
        <Image src={logo} alt="Geocaching logo" className="w-12 h-12 mr-4"/>
        <h1 className={`${inter.className} font-bold text-4xl text-geocaching-white uppercase`}>Tomcaching</h1>
    </header>
  );
};

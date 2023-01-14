import { Inter } from "@next/font/google";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Header: FC = () => {
  return (
    <header className="bg-geocaching-green px-8 py-6">
        <h1 className={`${inter.className} font-bold text-4xl text-geocaching-white uppercase`}>Tomcaching</h1>
    </header>
  );
};

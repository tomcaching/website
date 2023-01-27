import Link from "next/link";
import { FC } from "react";
import { FaCat } from "react-icons/fa";

export const Footer: FC = () => {
    return (
        <footer className="bg-geocaching-brown-darker text-geocaching-brown-light p-2 px-8 font-bold flex flex-row items-center justify-between">
            <div>&copy; 2023 Vrbíci</div>
            <div className="flex flex-row items-center">
                <div className="font-normal text-xs text-right">
                    Tento web nepoužívá soubory cookies, na co taky?<br />
                    Netestováno na zvířatech
                </div>
                <Link className="ml-4 text-2xl text-geocaching-brown-light" href={"https://admin.tomcaching.fun"}>
                    <FaCat/>
                </Link>
            </div>
        </footer>
    );
};
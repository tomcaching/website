import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-geocaching-brown-darker text-geocaching-brown-light p-2 px-8 font-bold flex flex-row items-center justify-between">
            <div>&copy; 2023 Vrbíci</div>
            <div className="font-normal text-xs text-right">
                Tento web nepoužívá soubory cookies<br/>
                Netestováno na zvířatech
            </div>
        </footer>
    );
};
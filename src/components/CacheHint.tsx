import { useState, type FC } from "react";
import ReactMarkdown from "react-markdown";

type CacheHintProps = {
    hint: string;
};

export const CacheHint: FC<CacheHintProps> = ({ hint }: CacheHintProps) => {
    const [revealed, setRevealed] = useState<boolean>(false);

    return (
        <div className={`${revealed ? "bg-geocaching-gray-light" : "bg-geocaching-brown-light"} max-h-[512px] p-4 mt-4 rounded-lg cursor-pointer overflow-x-scroll`} onClick={() => setRevealed(current => !current)}>
            <span className={`${revealed ? "text-neutral-600" : "text-geocaching-brown-dark"} font-bold text-sm`}>{revealed ? "Skrýt" : "Zobrazit"} nápovědu</span>
            {revealed && <ReactMarkdown skipHtml={true} className="mt-4">{hint}</ReactMarkdown>}
        </div>
    );
}
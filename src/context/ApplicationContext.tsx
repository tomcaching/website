import { Context, createContext } from "react";
import { type Cache } from "@/types";

export type ApplicationContextState = {
    cache: number | null;
    caches: Array<Cache>;
    setCache: (id: number | null) => void;
    setCaches: (caches: Array<Cache>) => void;
};

export const ApplicationContext: Context<ApplicationContextState> = createContext<ApplicationContextState>({
    cache: null,
    caches: [],
    setCache: (id) => {},
    setCaches: (caches) => {}
});
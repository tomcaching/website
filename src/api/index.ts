import { type Cache } from "@/types";

const api = "https://api.tomcaching.fun";

export const fetchCaches = async (): Promise<Array<Cache>>  => {
    return await fetch(`${api}/api/caches`).then(response => response.json()) as Array<Cache>;
};
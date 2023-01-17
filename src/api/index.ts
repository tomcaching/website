import { type Cache } from "@/types";

const api = "https://api.tomcaching.fun";

export const fetchCaches = async (): Promise<Array<Cache>> => {
    return await fetch(`${api}/api/caches`).then(response => response.json()) as Array<Cache>;
};

export const unlockCache = async (id: number, solution: string): Promise<Array<Cache>> => {
    const payload = {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ solution: solution.toLowerCase() })
    };

    return await fetch(`${api}/api/caches/unlock/${id}`, payload).then(response => {
        if (!response.ok) {
            throw new Error();
        };

        return response.json();
    }) as Array<Cache>;
};

export const markCacheFound = async (id: number): Promise<Array<Cache>> => {
    return await fetch(`${api}/api/caches/mark-found/${id}`, { method: "post" }).then(response => {
        if (!response.ok) {
            throw new Error();
        }

        return response.json();
    }) as Array<Cache>;
};
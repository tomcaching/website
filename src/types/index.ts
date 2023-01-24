export type CacheCoordinates = {
  lat: number;
  lng: number;
};

type Base = {
  id: number;
  coordinates: CacheCoordinates;
  title: string;
  content: string;
  hint: string;
  found: boolean;
};

export type TraditionalCache = Base & {
  type: "traditional";
  locked: false;
  question: null;
};

export type MysteryCache = Base & {
  type: "mystery";
  locked: boolean;
  question: string;
};

export type Cache = TraditionalCache | MysteryCache;

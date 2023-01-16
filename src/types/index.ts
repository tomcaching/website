export type CacheCoordinates = {
  lat: number;
  lng: number;
};

type Base = {
  id: number;
  coordinates: CacheCoordinates;
  title: string;
  content: string;
  found: boolean;
};

type TraditionalCache = Base & {
  type: "traditional";
  locked: false;
  question: null;
};

type MysteryCache = Base & {
  type: "mystery";
  locked: boolean;
  question: String;
};

export type Cache = TraditionalCache | MysteryCache;

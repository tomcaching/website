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
  fakeCoordinates: null;
  locked: false;
};

type MysteryCache = Base & {
  type: "mystery";
  fakeCoordinates: CacheCoordinates;
  locked: boolean;
};

export type Cache = TraditionalCache | MysteryCache;

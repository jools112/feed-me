interface Coordinate {
  x: number;
  y: number;
}

export interface ReviewEntity {
  id: number;
  coordinate: Coordinate;
  name: string;
  address: string;
  created: string;
  lastUpdated: string;
  serviceRating: number;
  qualityRating: number;
  freeText: string;
}

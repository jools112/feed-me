export interface ReviewModel {
  id: number;
  coordinate: Coordinate;
  name: string;
  address: string;
  created: string;
  serviceRating: number;
  qualityRating: number;
  freeText: string;
}

interface Coordinate {
  x: number;
  y: number;
}

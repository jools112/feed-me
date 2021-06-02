export interface ReviewModel {
  id: number;
  coordinate: Coordinate;
  name: string;
  address: string;
  created: string;
  qualityRating: number;
  serviceRating: number;
  atmosphereRating: number;
  valueRating: number;
  freeText: string;
}

interface Coordinate {
  x: number;
  y: number;
}

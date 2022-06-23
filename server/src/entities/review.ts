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
  last_updated: string;
  service_rating: number;
  quality_rating: number;
  atmosphere_rating: number;
  value_rating: number;
  free_text: string;
}

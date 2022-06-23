-- VERSION 1.0
CREATE TABLE reviews (
  id serial NOT NULL,
  name VARCHAR NOT NULL,
  address VARCHAR NOT NULL, 
  coordinate point NOT NULL,
  created timestamp NOT NULL DEFAULT current_timestamp,
  last_updated timestamp NOT NULL DEFAULT current_timestamp,
  quality_rating int NOT NULL,
  service_rating int NOT NULL,
  atmosphere_rating int NOT NULL,
  value_rating int NOT NULL,
  free_text VARCHAR NOT NULL
);

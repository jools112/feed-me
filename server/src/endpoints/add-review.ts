import { RequestHandler } from "express";
import { formatISO } from "date-fns";
import { ReviewModel } from "@shared/models/review";
import { ReviewEntity } from "@root/entities/review";
import { dbClient } from "../utils/client";

const randomizeCoords = (centre: number) => {
  const randX = Math.random() > 0.5 ? Math.random() : -Math.random();
  const randY = Math.random() > 0.5 ? Math.random() : -Math.random();
  return { x: centre.x + 0.1 * randX, y: centre.y + 0.1 * randY };
};

const between = (num: number, min: number, max: number) =>
  num >= min && num <= max;

export const addReview: RequestHandler = (req, response) => {
  console.log("request: ", req.body);
  const centre = { x: 59.331899, y: 18.060949 };
  const {
    name,
    address,
    coordinate,
    qualityRating,
    serviceRating,
    atmosphereRating,
    valueRating,
    freeText,
  } = req.body;

  const randomCoordinate = randomizeCoords(centre);

  const isValid =
    between(name.length, 1, 40) &&
    between(address.length, 1, 60) &&
    between(freeText.length, 0, 255) &&
    between(qualityRating, 1, 5) &&
    between(serviceRating, 1, 5) &&
    between(atmosphereRating, 1, 5) &&
    between(valueRating, 1, 5) &&
    typeof freeText === "string";

  if (isValid) {
    console.log(between(name.length, 1, 40));
    dbClient
      .query(
        `INSERT INTO reviews (name, address, coordinate, quality_rating, service_rating, atmosphere_rating, value_rating, free_text) VALUES ('${name}', '${address}', point(${randomCoordinate.x},${randomCoordinate.y}), ${qualityRating}, ${serviceRating}, ${atmosphereRating}, ${valueRating},  '${freeText}');`
      )
      .then((res) => {
        response.status(201);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // client.end();
      });
  } else {
    console.log("validation failed!");

    response.status(500).send();
  }
};

import { RequestHandler } from "express";
import { formatISO } from "date-fns";
import { ReviewModel } from "@shared/models/review";
import { ReviewEntity } from "@root/entities/review";
import { client } from "../utils/client";

const randomizeCoords = (centre) => {
  const randX = Math.random() > 0.5 ? Math.random() : -Math.random();
  const randY = Math.random() > 0.5 ? Math.random() : -Math.random();
  return { x: centre.x + 0.1 * randX, y: centre.y + 0.1 * randY };
};

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

  client
    .query(
      `INSERT INTO reviews (name, address, coordinate, quality_rating, service_rating, atmosphere_rating, value_rating, free_text) VALUES ('${name}', '${address}', point(${randomCoordinate.x},${randomCoordinate.y}), ${qualityRating}, ${serviceRating}, ${atmosphereRating}, ${valueRating},  '${freeText}');`
    )
    .then((res) => {
      response.json("KÖRV");
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      // client.end();
    });
};

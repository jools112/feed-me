import { RequestHandler } from "express";
import { formatISO } from "date-fns";
import { ReviewModel } from "@shared/models/review";
import { ReviewEntity } from "@root/entities/review";
import { dbClient } from "../utils/client";

export const getReviews: RequestHandler = (req, response) => {
  dbClient
    .query<ReviewEntity>("SELECT * from reviews")
    .then((data) => {
      const formattedRows: Array<ReviewModel> = data.rows.map((row) => ({
        id: row.id,
        name: row.name,
        address: row.address,
        coordinate: row.coordinate,
        created: formatISO(new Date(row.created), {
          representation: "date",
        }),
        qualityRating: row.quality_rating,
        serviceRating: row.service_rating,
        atmosphereRating: row.atmosphere_rating,
        valueRating: row.value_rating,
        freeText: row.free_text,
      }));
      response.json(formattedRows);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      // client.end();
    });
};

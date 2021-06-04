import { RequestHandler } from "express";
import { formatISO } from "date-fns";
import { ReviewModel } from "@shared/models/review";
import { ReviewEntity } from "@root/entities/review";
import { connection } from "../utils/connection";

export const getReviews: RequestHandler = (req, res) => {
  connection.query<ReviewEntity>("SELECT * from reviews", (err, result) => {
    connection.end();
    const formattedRows: Array<ReviewModel> = result.rows.map((row) => ({
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
    res.json(formattedRows);
  });
};

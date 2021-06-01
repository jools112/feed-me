import { RequestHandler } from "express";
import { connection } from "../utils/connection";

export const getReviews: RequestHandler = (req, res) => {
  connection.query("SELECT * from reviews", (err, { rows }) => {
    connection.end();
    rows.map((row) => ({
      id: row.id,
      address: row.address,
      coordinate: row.coordinate,
      created: row.created,
      quality_ranking: row.quality_rating,
      service_rating: row.service_rating,
      atmosphere_rating: row.atmosphere_rating,
      value_rating: row.value_rating,
      free_text: row.free_text,
    }));
    res.json(rows);
  });
};

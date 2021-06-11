import { RequestHandler } from "express";
import { formatISO } from "date-fns";
import { ReviewModel } from "@shared/models/review";
import { ReviewEntity } from "@root/entities/review";
import { client } from "../utils/client";

export const addReview: RequestHandler = (req, response) => {
  console.log("adjahfgjahrw");
  client
    .query(
      "INSERT INTO reviews (name, address, coordinate, quality_rating, service_rating, atmosphere_rating, value_rating, free_text) VALUES ('Nytorget6', 'nytorget 6', point(59.312130,18.082800), 5, 4, 4, 4, 'spara plats i magen åt brödkorgen den är gudomlig');"
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

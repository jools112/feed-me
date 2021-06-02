import express from "express";
import { getReviews } from "./endpoints/get-reviews";
import { ReviewEntity } from "./entities/review";

const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feed-me",
  password: "",
  port: "5432",
});

const main = (): void => {
  const app = express();

  app.get("/reviews", getReviews);

  app.listen(8000, () => {
    console.log("server is listening at http://localhost:8000. lets gooo!");
  });
};

main();

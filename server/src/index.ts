import express from "express";
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

  app.get("/", (_, res) => {
    pool.query("SELECT * from reviews", (err, res2) => {
      pool.end();
      const ref: ReviewEntity = res2.rows[0];
      res.json(res2.rows);
      console.log(ref.coordinate.y);
    });
  });

  app.listen(8000, () => {
    console.log("server is listening at http://localhost:8000. lets gooo!");
  });
};

main();

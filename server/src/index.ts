import express from "express";

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
    pool.query("SELECT * from users", (err, res2) => {
      pool.end();
      res.json(res2.rows);
      // console.log(res.rows);
    });
  });

  app.listen(8000, () => {
    console.log("server is listening at http://localhost:8000. lets gooo!");
  });
};

main();

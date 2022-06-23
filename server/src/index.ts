import express from "express";
import cors from "cors";
import { getReviews } from "./endpoints/get-reviews";

const main = (): void => {
  const app = express();
  app.use(cors());
  app.get("/reviews", getReviews);

  app.listen(8000, () => {
    console.log("server is listening at http://localhost:8000. lets gooo!");
  });
};

main();

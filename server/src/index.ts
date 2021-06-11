import express from "express";
import cors from "cors";
import { getReviews } from "./endpoints/get-reviews";
import { addReview } from "./endpoints/add-review";

const main = (): void => {
  const app = express();
  app.use(cors());
  app.get("/reviews", getReviews);
  app.post("/reviews", addReview);

  app.listen(8000, () => {
    console.log("server is listening at http://localhost:8000. lets gooo!");
  });
};

main();

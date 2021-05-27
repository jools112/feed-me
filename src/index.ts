import express from "express";

const main = (): void => {
  const app = express();

  app.get("/", (_, res) => {
    res.json({ status: "absolutely perfect" });
  });

  app.listen(8000, () => {
    console.log(
      "server is listening at http://localhost:8000. lets gooo!"
    );
  });
};

main();

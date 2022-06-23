import { Client } from "pg";

export const dbClient = new Client({
  user: "postgres",
  host: "localhost",
  database: "feed-me",
  password: "",
  port: 5432,
});

dbClient.connect();

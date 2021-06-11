import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "feed-me",
  password: "",
  port: 5432,
});

client.connect();

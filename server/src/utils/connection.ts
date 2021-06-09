import { Pool } from "pg";

export const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: "feed-me",
  password: "",
  port: 5432,
});

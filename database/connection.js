import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

// * Crete and export connection
export const connection = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PORT
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${process.env.PGDATABASE} database.`);
})
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

// * Crete and export connection
export const connection = new Pool({
  host: process.env.HOST,
  user: process.env.PGUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${process.env.DATABASE} database.`);
})
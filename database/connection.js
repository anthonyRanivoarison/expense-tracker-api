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
  port: process.env.PORT,
});

const testConnection = async () => {
  try {
    await connection.query("SELECT 1");
    console.log("Psql connected");
  } catch (error) {
    console.error("Error", error);
  }
};
testConnection();
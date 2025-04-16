import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config()

// * Crete and export connection
export default connection = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PORT
})
import express from "express";
import { connection } from "../database/connection.js";

const router = express.Router();

// * First user router
router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

export default router;

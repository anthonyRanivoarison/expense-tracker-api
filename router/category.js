import express from "express";
import { connection } from "../database/connection.js";

const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  const getAllCategories = "SELECT * FROM category";
  connection.query(getAllCategories, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

export default categoryRouter;

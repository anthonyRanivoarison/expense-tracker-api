import express from "express";
import { connection } from "../database/connection.js";

const userRouter = express.Router();

// * First user router
userRouter.get("/", (req, res) => {
  res.send("User router");
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

export default userRouter;

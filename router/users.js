import express from "express";
import uuidV4 from "uuid-v4";
import { connection } from "../database/connection.js";

const userRouter = express.Router();
const userID = uuidV4();

// * BASIC CRUD
userRouter.get("/", (req, res) => {
  connection.query('SELECT * FROM "users"', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

userRouter.post("/api/user", (req, res) => {
  const { name, budget, image_src, email } = req.body;
  const addUserQuery =
    'INSERT INTO "users" (id_user, username, monthly_budget, user_image_src, user_email) VALUES (?, ?, ?, ?, ?)';

  connection.query(
    addUserQuery,
    [userID, name, budget, image_src, email],
    (err, result) => {
      if (err) throw err;
      res.send(`User ${name} added successfully - ID: ${userID}`);
    }
  );
});

userRouter.delete("/api/user", (req, res) => {
  const { userID } = req.body;
  const deleteUserQuery = 'DELETE FROM "users" WHERE id_user = (?)';
  connection.query(deleteUserQuery, [userID], (err, result) => {
    if (err) throw err;
    res.send(`User successfully deleted`);
  });
});

export default userRouter;

import express from "express";
import uuidV4 from "uuid-v4";
import { connection } from "../database/connection.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();
const userID = uuidV4();

userRouter.get("/", (req, res) => {
  connection.query('SELECT * FROM "users"', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
  });
});

userRouter.post("/api/user", (req, res) => {
  const { name, budget, image_src, email, password } = req.body;
  const addUserQuery =
    'INSERT INTO "users" (id_user, username, monthly_budget, user_image_src, user_email, user_password) VALUES (?, ?, ?, ?, ?, ?)';

  const hashLevel = 10;
  const passwordHashed = () => {
    bcrypt.hash(password, hashLevel, (err, hash) => {
      if (err) throw new Error(`Problem during hashing password: ${err}`);
      return hash;
    });
  };

  connection.query(
    addUserQuery,
    [userID, name, budget, image_src, email, passwordHashed],
    (err, result) => {
      if (err) throw err;
      res.send(`User ${name} added successfully - ID: ${userID}`).json(result);
    }
  );

  const realPassword = () => {
    bcrypt.compare(password, passwordHashed, (err, result) => {
      if (err) throw new Error(`Incorrect password: ${err}`);
      res.json(result);
    });
  };
});

userRouter.put("/api/user", (req, res) => {
  const { userID, username, budget, image_src, email } = req.body;
  const putUserQuery =
    'UPDATE "users" SET username = (?), budget = (?), image_src = (?), email = (?) WHERE id_user = (?)';

  connection.query(
    putUserQuery,
    [username, budget, image_src, email, userID],
    (err, result) => {
      if (err) throw err;
      res.status(200).send(`User ${username} updated.`).json(result);
    }
  );
});

userRouter.delete("/api/user", (req, res) => {
  const { userID } = req.body;
  const deleteUserQuery = 'DELETE FROM "users" WHERE id_user = (?)';
  connection.query(deleteUserQuery, [userID], (err, result) => {
    if (err) throw err;
    res.status(200).send(`User successfully deleted`).json(result);
  });
});

export default userRouter;

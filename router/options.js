import express from "express";
import uuidV4 from "uuid-v4";
import { connection } from "../database/connection.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  connection.query('SELECT * FROM "users"', (err, result) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json(result.rows);
  });
});

userRouter.post("/api/user", async (req, res) => {
  const { name, budget, image_src, email, password } = req.body;

  try {
    // Générer un nouvel UUID pour l'utilisateur
    const userID = uuidV4();

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Requête SQL pour insérer un utilisateur
    const addUserQuery =
      'INSERT INTO "users" (id_user, username, monthly_budget, user_image_src, user_email, user_password) VALUES ($1, $2, $3, $4, $5, $6)';

    // Exécuter la requête
    connection.query(
      addUserQuery,
      [userID, name, budget, image_src, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(201).json({
          message: `User ${name} added successfully`,
          userID,
        });
      }
    );
  } catch (error) {
    console.error("Error during user creation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

userRouter.put("/api/user", (req, res) => {
  const { userID, username, budget, image_src, email } = req.body;

  const putUserQuery =
    'UPDATE "users" SET username = $1, monthly_budget = $2, user_image_src = $3, user_email = $4 WHERE id_user = $5';

  connection.query(
    putUserQuery,
    [username, budget, image_src, email, userID],
    (err, result) => {
      if (err) {
        console.error("Error updating user:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res
        .status(200)
        .json({ message: `User ${username} updated successfully` });
    }
  );
});

userRouter.post("/api/user", async (req, res) => {
  const { name, budget, image_src, email, password } = req.body;

  try {
    // Générer un nouvel UUID pour l'utilisateur
    const userID = uuidV4();

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Requête SQL pour insérer un utilisateur
    const addUserQuery =
      'INSERT INTO "users" (id_user, username, monthly_budget, user_image_src, user_email, user_password) VALUES ($1, $2, $3, $4, $5, $6)';

    // Exécuter la requête
    connection.query(
      addUserQuery,
      [userID, name, budget, image_src, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(201).json({
          message: `User ${name} added successfully`,
          userID,
        });
      }
    );
  } catch (error) {
    console.error("Error during user creation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

userRouter.put("/api/user", (req, res) => {
  const { userID, username, budget, image_src, email } = req.body;

  const putUserQuery =
    'UPDATE "users" SET username = $1, monthly_budget = $2, user_image_src = $3, user_email = $4 WHERE id_user = $5';

  connection.query(
    putUserQuery,
    [username, budget, image_src, email, userID],
    (err, result) => {
      if (err) {
        console.error("Error updating user:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res
        .status(200)
        .json({ message: `User ${username} updated successfully` });
    }
  );
});

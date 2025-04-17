import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Initialisation de l'application et configuration
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Importation des routes
import userRouter from "./router/users.js";

// Utilisation des routes
app.use("/user", userRouter);

// Route par défaut
app.get("/", (req, res) => {
  res.send("This is the first part of the project");
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server launched at http://localhost:${PORT}`);
});
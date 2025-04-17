import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// * Get routes from router directory
import userRouter from "./router/users.js";

// * Section about using routers
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("This's the first part of the project");
  res.end("End")
});

const PORT = process.env.PGPORT;
app.listen(PORT, () => {
  console.log(`Server launched in http://localhost:${PORT}`);
});

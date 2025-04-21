import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import userRouter from "./router/users.js";
import categoryRouter from "./router/category.js";
import expenseRouter from "./router/expense.js";
import diverseQueries from "./router/diverseQueries.js";

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/expense", expenseRouter);
app.use("/queries", diverseQueries);

// * As default route, we have a the API's description in one HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server launched at http://localhost:${PORT}`);
});

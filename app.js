import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import userRouter from "./router/users.js";
import categoryRouter from "./router/category.js";
import expenseRouter from "./router/expense.js";
import diverseQueries from "./router/diverseQueries.js";

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/expense", expenseRouter);
app.use("/queries", diverseQueries);

export default app;
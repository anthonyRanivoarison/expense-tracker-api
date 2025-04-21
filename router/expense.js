import express from "express";
import { connection } from "../database/connection.js";
import uuidV4 from "uuid-v4";

const expenseRouter = express.Router();
const expenseID = uuidV4();

expenseRouter.get("/", (req, res) => {
  const getAllExpenses = "SELECT * FROM expense";
  connection.query(getAllExpenses, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows);
  });
});

expenseRouter.post("/api/expense", (req, res) => {
  const { expenseName, cashSpent, description } = req.body;
  const addNewExpense =
    "INSERT INTO expense (id_expense, expense_name, amount_spent, description) VALUES (?, ?, ?, ?)";
  connection.query(
    addNewExpense,
    [expenseID, expenseName, cashSpent, description],
    (err, result) => {
      if (err) throw new Error(`Add expense Error: ${err}`);
      res.status(200).send(result);
    }
  );
});

export default expenseRouter;

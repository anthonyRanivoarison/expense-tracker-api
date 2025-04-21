import express from "express";
import { connection } from "../database/connection.js";
import { writeToPath } from "fast-csv";

const diverseQueries = express.Router();

diverseQueries.get("/user&expense", (req, res) => {
  const getUserExpenses =
    "SELECT * FROM users INNER JOIN expense ON users.id_user = expense.user_id";
  connection.query(getUserExpenses, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

diverseQueries.get("/expensePerMonth", (req, res) => {
  const getExpenseMonth = `
  SELECT 
    expense_name, amount_spent, user_id, expense_category 
  FROM expense
    INNER JOIN users ON expense.user_id = users.id_user 
    INNER JOIN category ON expense.expense_category = category.id_category`;
  connection.query(getExpenseMonth, (err, result) => {
    if (err) throw err;
    let data = result.rows;
    res.json(data);
    writeToPath("data.csv", data, { headers: true }).on("finish", () => {
      console.log("Data sent and ready to be analysed");
    });
  });
});

export default diverseQueries;

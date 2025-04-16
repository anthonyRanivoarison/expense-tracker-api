import express from "express";
import dotenv from "dotenv";

const app = express()
dotenv.config()


app.use(express.json())


app.get("/", (req, res) => {
  res.send("This's the first part of the project, it's runnig with Node JS which use Express JS");
})


const PORT = process.env.PGPORT;
app.listen(PORT, () => {
  console.log(`Server launched in http://localhost:${PORT}`)
})
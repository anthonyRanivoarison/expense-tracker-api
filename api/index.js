import app from "../app.js";
import { Router } from "express";
import serverless from "serverless-http";
import path from "path";
import { fileURLToPath } from "url";

app.use("/api", Router)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// * As default route, we have a the API's description in one HTML page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "app.html"));
});

export const handler = serverless(app);
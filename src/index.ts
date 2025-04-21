import express, { Request, Response } from 'express';

const app = express()
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TS");
});

const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Server start at http://locahost:${PORT}`);
});
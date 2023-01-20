import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

// * Initialize express
const app = express();

// * Middlewares
app.use(express.json({ type: "*/*" }));
app.use(morgan("dev"));
app.use(cors());

// * Routes
app.use("/api/v1", (req: Request, res: Response) => {
  res.send("Welcome to MPG | 2610 - S1");
});

export default app;

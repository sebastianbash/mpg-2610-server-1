import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/mongo.js";

// * Import routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import resumeRoutes from "./routes/resume.routes.js";

// * Initialize express
const app = express();

// * Middlewares
app.use(express.json({ type: "*/*" }));
app.use(morgan("dev"));
app.use(cors());

// * Calling DB
db();

// * Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", resumeRoutes);

export default app;

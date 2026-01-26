import express from "express";
import taskRoutes from "./routes/taskRoute";

const app = express();

app.use(express.json()); // Parse JSON body
app.use("/tasks", taskRoutes); // Register routes

export default app;

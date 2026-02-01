import express from "express";
import cors from "cors";
import helmet from "helmet";
import dashboardRoutes from "./routes/dashboard.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

// default route
app.get("/", (req, res) => {
    res.send("Patient Dashboard API is running...");
});

// all dashboard routes
app.use("/api", dashboardRoutes);

export default app;
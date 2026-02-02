import app from "./app.js";
import dotenv from "dotenv";
import "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Update: '0.0.0.0' add kiya hai public access ke liye
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


import express from "express";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config({ path: "./secret/.env" });

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`Database URL: ${process.env.DATABASE_URL}`);
console.log(`Port: ${PORT}`);

app.get("/", (req, res) => {
  res.json({
    db: process.env.DATABASE_URL,
    port: process.env.PORT,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

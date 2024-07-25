const express = require("express");
const { default: mongoose } = require("mongoose");

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");

require("dotenv").config();

const app = express();

const port = 11000;

app.use(express.json());

app.use("/api/v1/ijan/auth", authRoutes);
app.use("/api/v1/ijan/books", bookRoutes);

app.get("/api/v1/ijan", (req, res) => {
  return res.send("Hello!....Welcome to Backend Engineering at IJAN!");
});

mongoose.connect(process.env.MONGO_URI).then((res) => {
  if (res)
    console.log("database connection successful:", process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`pay-only rest API is currently running on port ${port}`);
  });
});

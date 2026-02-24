const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/routes");

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello security project for SIT" });
});

mongoose
  .connect("mongodb://localhost:27017/securityDB")
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit(1);
  });

app.use("/", UserRoute);
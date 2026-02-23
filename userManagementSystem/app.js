const express = require('express');
const mongoose = require("mongoose");
const UserRoute = require('./routes/routes');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello Crud Project for SIT" });
});

mongoose.connect("mongodb://localhost:27017/usersDB")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    })
    .catch(err => {
        console.log("Could not connect to the database:", err);
        process.exit();
    });

app.use('/user', UserRoute);
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/SIT")
.then(() => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch(err => console.log(err));

const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

app.post("/todos", async (req, res) => {
    const todo = await Todo.create({
        title: req.body.title,
        completed: false
    });
    res.status(201).json(todo);
});

app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.put("/todos/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title },
        { new: true }
    );
    if (!todo) return res.status(404).send("Todo not found");
    res.json(todo);
});

app.delete("/todos/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.send("Todo deleted");
});
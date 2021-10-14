const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(201).send(newUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    const newTask = await task.save();
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const task = await Task.findById(_id);
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Server is up at " + port);
});

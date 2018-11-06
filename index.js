require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");

let todoList = [
  {
    description: "Learn React",
    done: false
  },
  {
    description: "Learn Redux",
    done: false
  }
];

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// API Info
app.get("/", (req, res) => {
  res.send("This is API demo");
});

// Read
app.get("/todos", (req, res) => {
  res.send(todoList);
});

// Create
app.post("/todos", (req, res) => {
  todoList.push(req.body);
  res.send(`successfully added ${req.body}`);
});

// Search
app.get("/todos/search", (req, res) => {
  if (req.query.description) {
    filteredTodo = todoList.filter(todo =>
      todo.description
        .toLowerCase()
        .includes(req.query.description.toLowerCase())
    );
    res.send(filteredTodo);
  } else {
    res.send(`Query Not Found`);
  }
});

// Read one data
app.get("/todos/:id", (req, res) => {
  if (req.params.id < todoList.length) {
    res.send(todoList[req.params.id]);
  } else {
    res.send(`ID not found`);
  }
});

// Update
app.put("/todos/:id", (req, res) => {
  if (req.params.id < todoList.length) {
    todoList.splice(req.params.id, 1, req.body);
    res.send(`update todo with id ${req.params.id}`);
  } else {
    res.send(`ID not found`);
  }
});

// Delete
app.delete("/todos/:id", (req, res) => {
  if (req.params.id < todoList.length) {
    todoList.splice(req.params.id, 1);
    res.send(`delete todo with id ${req.params.id}`);
  } else {
    res.send(`ID not found`);
  }
});

// Delete All
app.delete("/todos", (req, res) => {
  todoList = [];
  res.send(`Delete all todos`);
});

app.listen(PORT, () => {
  console.log(`app runnning on port ${PORT}`);
});

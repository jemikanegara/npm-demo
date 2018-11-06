const express = require("express");
const port = 5000;
const app = express();

// API Info
app.get("/", (req, res) => {
  res.send("This is API demo");
});

// Read
app.get("/todos", (req, res) => {
  res.send("Get All Todos");
});

app.post("/todos", (req, res) => {
  res.send(req.body);
});

app.delete("/todos/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`app runnning on port ${port}`);
});

const express = require("express");

const app = express();

// if 문 사용할 필요 없음

app.get("/", (req, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.get("/post", (req, res) => {
  res.send("<h1>Post Page!</h1>");
});

app.get("/user", (req, res) => {
  res.send("<h1>User Page!</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});

// app.post();

// app.delete();

// app.put();

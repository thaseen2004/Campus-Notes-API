const express = require("express");
const app = express();

app.use(express.json());

app.get("/notes", (req, res) => {
  res.json([
    { id: 1, title: "Docker note", content: "Docker is awesome" }
  ]);
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

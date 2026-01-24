const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/notes", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Campus Notes",
      content: "API is running successfully on VPS"
    }
  ]);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

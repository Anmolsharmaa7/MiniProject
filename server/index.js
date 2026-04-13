const express = require("express");

const app = express();

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("OK");
});

// test API
app.get("/api/events", (req, res) => {
  res.json([]);
});

app.listen(9000, () => {
  console.log("Server running on port 8000");
});

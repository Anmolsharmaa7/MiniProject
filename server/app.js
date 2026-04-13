const express = require("express");

const app = express();

app.use(express.json());

// 🧠 temporary database
let events = [];

// ✅ test
app.get("/", (req, res) => {
  res.send("Server working ✅");
});

// ✅ GET all events
app.get("/api/events", (req, res) => {
  res.json(events);
});

// ✅ POST new event
app.post("/api/events", (req, res) => {
  const newEvent = req.body;

  events.push(newEvent);

  res.json({
    message: "Event added ✅",
    data: events,
  });
});

// 🚀 server start
app.listen(9000, () => {
  console.log("Server running on port 9000");
});
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "My Custom API",
    status: "online",
    version: "1.0.0"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "Hello from my API!"
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    creator: "Me",
    features: ["JSON", "REST", "Web access"]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API running on port ${PORT}`);
});
app.get("/api/uuid", (req, res) => {
  res.json({
    success: true,
    uuid: crypto.randomUUID()
  });
});
app.get("/api/status", (req, res) => {
  res.json({ status: "online" });
});

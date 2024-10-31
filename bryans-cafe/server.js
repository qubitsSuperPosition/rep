const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static("public"));

// Route to get the menu XML data
app.get("/api/menu", (req, res) => {
  const filePath = path.join(__dirname, "data", "menu.xml");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading menu data");
      return;
    }
    res.header("Content-Type", "application/xml");
    res.send(data);
  });
});

// Route to get the branches XML data
app.get("/api/branches", (req, res) => {
  const filePath = path.join(__dirname, "data", "branches.xml");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error loading branches data");
      return;
    }
    res.header("Content-Type", "application/xml");
    res.send(data);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

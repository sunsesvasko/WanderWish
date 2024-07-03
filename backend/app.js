const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// === MIDDLEWARE === //
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cors());

// === ROUTES === //
app.get("/", (req, res) => {
  res.send("hello world");
});

// === ERROR HANDLING === //

// === EXPORT === //

module.exports = app;

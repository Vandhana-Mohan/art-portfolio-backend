const express = require("express");
const cors = require("cors");
const artControllers = require("./controllers/artControllers.js");

//CONFIG
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //parses incoming json request

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Sanaaaa");
});

app.use("/art", artControllers);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;

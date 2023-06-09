const express = require("express");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const artControllers = require("./controllers/artControllers.js");

//CONFIG
const app = express();

// MIDDLEWARE
app.use(cors());

app.use(express.json()); //parses incoming json request

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
});

// Create multer instance
const upload = multer({ storage: storage });

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Artistic Universe . . .");
});

app.use("/artworks", artControllers);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;

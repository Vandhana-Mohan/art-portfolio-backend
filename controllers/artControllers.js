const express = require("express");

const art = express.Router();

const { getAllArt } = require("../queries/artQuery.js");

// INDEX - show all

art.get("/", async (req, res) => {
  const allArt = await getAllArt();
  if (allArt[0]) {
    res.status(200).json(allArt);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = art;

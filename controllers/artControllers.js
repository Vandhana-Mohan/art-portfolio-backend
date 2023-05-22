const express = require("express");

const art = express.Router();

const validateArt = require("../validations/validateImages.js");

const {
  getAllArt,
  getOneArt,
  addOneArt,
  updateOneArt,
  deleteOneArt,
} = require("../queries/artQuery.js");

// INDEX - show all images
art.get("/images", async (req, res) => {
  const allArt = await getAllArt();
  if (allArt[0]) {
    res.status(200).json(allArt);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// Show one image by id
art.get("/images/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getOneArt(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "Image Not Found" });
  } else if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(200).json(result);
  }
});

// Add one image
art.post("/images", validateArt, async (req, res) => {
  const { error, result } = await addOneArt(req.body);
  if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(201).json(result);
  }
});

// Update one image
art.put("/images/:id", validateArt, async (req, res) => {
  const { id } = req.params;
  const { error, result } = await updateOneArt(id, req.body);
  if (error) {
    console.log(error);
    res.status(500).json({ error: "Server error - Could not update" });
  } else {
    res.status(200).json(result);
  }
});

// Delete one image
art.delete("/images/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteOneArt(id);

  if (error) {
    res.status(404).json("Item not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = art;

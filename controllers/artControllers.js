const express = require("express");

const art = express.Router();
// const validateArt = require("../validations/validateGrocery.js");

const {
  getAllArt,
  getOneArt,
  addOneArt,

  //   updateArt,
  //   deleteArt,
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
art.post("/images", async (req, res) => {
  const { error, result } = await addOneArt(req.body);
  if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(201).json(result);
  }
});

module.exports = art;

/*



//update

groceries.put("/:id", validateGrocery, async (req, res) => {
  const { id } = req.params;

  const { error, result } = await updateGrocery(id, req.body);
  if (error) {
    console.log(error);
    res.status(500).json({ error: "Server error - Could not update item" });
  } else {
    res.status(200).json(result);
  }
});
// DELETE
groceries.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteGrocery(id);

  if (error) {
    res.status(404).json("Item not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = groceries;


*/

const express = require("express");

const art = express.Router();
// const validateArt = require("../validations/validateGrocery.js");
// const reviewsController = require("./reviewsController.js")
// const validateURL = require("../validations/validateUrl.js");

const {
  getAllArt,
//   getArt,
//   createArt,
//   updateArt,
//   deleteArt,
} = require("../queries/artQuery.js");

// groceries.use("/:groceryId/reviews", reviewsController)


// INDEX - show all

art.get("/", async (req, res) => {
  const allArt = await getAllArt();
  if (allArt[0]) {
    res.status(200).json(allArt);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// //Show one item by id
// groceries.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { error, result } = await getGrocery(id);
//   if (error?.code === 0) {
//     res.status(404).json({ error: "Item Not Found" });
//   } else if (error) {
//     res.status(500).json({ error: "Server Error" });
//   } else {
//     res.status(200).json(result);
//   }
// });

// //CREATE
// groceries.post("/", validateGrocery, async (req, res) => {
//   const { error, result } = await createGrocery(req.body);
//   if (error) {
//     res.status(500).json({ error: "Server Error" });
//   } else {
//     res.status(201).json(result);
//   }
// });

// //update

// groceries.put("/:id", validateGrocery, async (req, res) => {
//   const { id } = req.params;

//   const { error, result } = await updateGrocery(id, req.body);
//   if (error) {
//     console.log(error);
//     res.status(500).json({ error: "Server error - Could not update item" });
//   } else {
//     res.status(200).json(result);
//   }
// });
// // DELETE
// groceries.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { error, result } = await deleteGrocery(id);

//   if (error) {
//     res.status(404).json("Item not found");
//   } else {
//     res.status(201).json(result);
//   }
// });

module.exports = art;

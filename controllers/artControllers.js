const express = require("express");

const art = express.Router();
// const validateArt = require("../validations/validateGrocery.js");
// const reviewsController = require("./reviewsController.js")
// const validateURL = require("../validations/validateUrl.js");

const {
  getAllUserData,
  getAllArt,
  getAllCollections,
  createUser,
  createImage,
  createCollection,
  //   getArt,
  //   createArt,
  //   updateArt,
  //   deleteArt,
} = require("../queries/artQuery.js");

// groceries.use("/:groceryId/reviews", reviewsController)

// INDEX - show all user data

art.get("/user", async (req, res) => {
  const allUser = await getAllUserData();
  if (allUser[0]) {
    res.status(200).json(allUser);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all images

art.get("/image", async (req, res) => {
  const allArt = await getAllArt();
  if (allArt[0]) {
    res.status(200).json(allArt);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all collections

art.get("/collection", async (req, res) => {
  const allCollection = await getAllCollections();
  if (allCollection[0]) {
    res.status(200).json(allCollection);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// CREATE User
art.post("/user", async (req, res) => {
  const { error, result } = await createUser(req.body);
  if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(201).json(result);
  }
});

module.exports = art;

// update

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

// Show one item by id
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

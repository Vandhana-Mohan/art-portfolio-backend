const db = require("../db/dbConfig");

// get all
const getAllArt = async () => {
  try {
    const allArt = await db.any("SELECT * FROM images ORDER BY id");
    return allArt;
  } catch (error) {
    throw error;
  }
};

// get one image
const getOneArt = async (id) => {
  try {
    const oneArt = await db.oneOrNone("SELECT * FROM images WHERE id=$1", id);
    return { result: oneArt };
  } catch (error) {
    throw { error };
  }
};

// add new image
const addOneArt = async (image) => {
  try {
    const newImage = await db.one(
      "INSERT INTO images (title, price, is_for_sale, description, image_url, medium, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        image.title,

        image.price,
        image.is_for_sale,
        image.description,
        image.image_url,
        image.medium,
        image.created_at,
        image.is_organic,
      ]
    );

    return { result: newImage };
  } catch (error) {
    throw { error };
  }
};

// const updateGrocery = async (id, grocery) => {
//   try {
//     const updateGrocery = await db.one(
//       "UPDATE Art SET name=$1, category=$2, image_url=$3, description=$4, price=$5, quantity=$6, unit=$7, is_organic=$8  WHERE id=$9 RETURNING *",
//       [
//         grocery.name,
//         grocery.category,
//         grocery.image_url,
//         grocery.description,
//         grocery.price,
//         grocery.quantity,
//         grocery.unit,
//         grocery.is_organic,
//         id,
//       ]
//     );
//     return { result: updateGrocery };
//   } catch (error) {
//     throw { error };
//   }
// };

// const deleteGrocery = async (id) => {
//   try {
//     const deleteGrocery = await db.one(
//       "DELETE FROM Art WHERE id=$1 RETURNING *",
//       id
//     );
//     return deleteGrocery;
//   } catch (error) {
//     throw { error };
//   }
// };

module.exports = {
  getAllArt,
  getOneArt,
  addOneArt,

  //   updateGrocery,
  //   deleteGrocery,
};

/*







const updateGrocery = async (id, grocery) => {
  try {
    const updateGrocery = await db.one(
      "UPDATE groceries SET name=$1, category=$2, image_url=$3, description=$4, price=$5, quantity=$6, unit=$7, is_organic=$8  WHERE id=$9 RETURNING *",
      [
        grocery.name,
        grocery.category,
        grocery.image_url,
        grocery.description,
        grocery.price,
        grocery.quantity,
        grocery.unit,
        grocery.is_organic,
        id,
      ]
    );
    return { result: updateGrocery };
  } catch (error) {
    throw { error };
  }
};

const deleteGrocery = async (id) => {
  try {
    const deleteGrocery = await db.one(
      "DELETE FROM groceries WHERE id=$1 RETURNING *",
      id
    );
    return deleteGrocery;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllGroceries,
  getGrocery,
  createGrocery,
  updateGrocery,
  deleteGrocery,
};


*/

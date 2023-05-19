const db = require("../db/dbConfig");

const getAllUserData = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM aboutUser ORDER BY id");
    return allUsers;
  } catch (error) { 
    throw error;
  }
};

const getAllArt = async () => {
  try {
    const allArt = await db.any("SELECT * FROM images");
    return allArt;
  } catch (error) {
    throw error;
  }
};

const getAllCollections = async () => {
  try {
    const allCollections = await db.any("SELECT * FROM collections");
    return allCollections;
  } catch (error) {
    throw error;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO aboutUser (first_name, last_name, about_artist, profession, location, instagram, facebook, tik_tok, youtube) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.about_artist,
        user.profession,
        user.location,
        user.instagram,
        user.facebook,
        user.tik_tok,
        user.youtube,
      ]
    );

    return { result: newUser };
  } catch (error) {
    throw { error };
  }
};

// const getGrocery = async (id) => {
//   try {
//     const oneGrocery = await db.oneOrNone(
//       "SELECT * FROM Art WHERE id=$1",
//       id
//     );
//     return { result: oneGrocery };
//   } catch (error) {
//     throw { error };
//   }
// };

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
  getAllUserData,
  getAllArt,
  getAllCollections,
  createUser,
  //   getGrocery,
  //   createGrocery,
  //   updateGrocery,
  //   deleteGrocery,
};

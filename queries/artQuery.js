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
      "INSERT INTO images (title, theme, price, is_for_sale, description, image_url, medium, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        image.title,
        image.theme,
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

// update new image
const updateOneArt = async (id, image) => {
  try {
    const updateImage = await db.one(
      "UPDATE images SET title=$1, theme=$2, price=$3, is_for_sale=$4, description=$5, image_url=$6, medium=$7, created_at=$8 WHERE id=$9 RETURNING *",
      [
        image.title,
        image.theme,
        image.price,
        image.is_for_sale,
        image.description,
        image.image_url,
        image.medium,
        image.created_at,
        id,
      ]
    );
    return { result: updateImage };
  } catch (error) {
    throw { error };
  }
};

const deleteOneArt = async (id) => {
  try {
    const deleteImage = await db.one(
      "DELETE FROM images WHERE id=$1 RETURNING *",
      id
    );
    return deleteImage;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllArt,
  getOneArt,
  addOneArt,
  updateOneArt,
  deleteOneArt,
};

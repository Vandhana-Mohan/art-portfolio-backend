const db = require("../db/dbConfig");

const getAllArt = async () => {
  try {
    const allArt = await db.any("SELECT * FROM userData ORDER BY id");
    return allArt;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllArt,
};

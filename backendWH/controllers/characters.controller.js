const pool = require("../db/connection");

// GET /characters
const getCharacters = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM characters");
    res.json(result.rows);
  } catch (error) {
    console.error("ERROR EN GET CHARACTERS:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// GET /characters/:id
const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM characters WHERE id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("ERROR EN GET BY ID:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// POST /characters
const createCharacter = async (req, res) => {
  try {
    console.log("BODY", req.body);
    const { name, description, image } = req.body;

    const result = await pool.query(
      `INSERT INTO characters (name, description, img)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, description, image]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("ERROR EN CREATE:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
  createCharacter,
};

const express = require("express");
const router = express.Router();

const {
  getCharacters,
  getCharacterById,
  createCharacter,
} = require("../controllers/characters.controller");

router.get("/", getCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);

module.exports = router;

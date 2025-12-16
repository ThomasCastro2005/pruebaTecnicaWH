import axios from "axios";

const API_URL = "http://localhost:3001/characters";

// GET /characters

export const getCharacters = async () => {
  const response = await axios.get(API_URL);
  return response.data; // devueleve el array directamente
};

// GET /characters/:id
export const getCharacterById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// POST /characters
export const createCharacter = (characterData) => {
  return axios.post(API_URL, characterData);
};

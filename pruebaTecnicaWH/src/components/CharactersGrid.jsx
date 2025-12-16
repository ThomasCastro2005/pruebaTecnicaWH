import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { getCharacters } from "../services/characters.service";

const CharactersGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log("Characters:", characters);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        console.log("DATA REAL:", data);
        setCharacters(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Cargando personajes...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Error al cargar personajes</p>
    );
  }

  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-5
        sm:px-10
        md:px-20
        lg:px-0
      "
    >
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersGrid;

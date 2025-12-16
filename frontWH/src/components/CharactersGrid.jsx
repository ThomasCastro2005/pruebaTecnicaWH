import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { getCharacters } from "../services/characters.service";

const CharactersGrid = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const itemsPerPage = 4;

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (characters.length > itemsPerPage && !loading) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentPage, characters, loading]);

  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const selectedCharacters = characters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1 === totalPages ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  if (loading) return <p className="text-center">Cargando personajes...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error al cargar personajes</p>
    );

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 group py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-opacity duration-700 ease-in-out">
        {selectedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* Controles*/}
      {totalPages > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition-all backdrop-blur-sm"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition-all backdrop-blur-sm"
          >
            &#10095;
          </button>
        </>
      )}

      {/* Indicadores*/}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentPage === index
                ? "bg-blue-500 w-8"
                : "bg-gray-600 w-2.5 opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CharactersGrid;

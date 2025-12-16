import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCharacters } from "../services/characters.service";

const SeriesSlider = () => {
  const [characters, setCharacters] = useState([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // 🔹 Hook de React Router

  // 🔽 CARGAR PERSONAJES
  useEffect(() => {
    getCharacters()
      .then((data) => {
        const normalized = data.map((c) => ({
          id: c.id,
          name: c.name,
          image: c.image || c.img,
        }));
        setCharacters(normalized);
      })
      .catch((err) => console.error("Error loading characters", err));
  }, []);

  // 🔁 AUTO SLIDE
  useEffect(() => {
    if (characters.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % characters.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [characters.length]);

  const getPosition = (index) => {
    const diff = index - current;
    if (diff === 0) return 0;
    if (diff === -1 || diff === characters.length - 1) return -1;
    if (diff === 1 || diff === -(characters.length - 1)) return 1;
    return 99;
  };

  if (characters.length === 0)
    return <p className="text-center">Loading slider...</p>;

  return (
    <div className="flex flex-col items-center overflow-hidden w-full">
      {/* SLIDER */}
      <div className="relative w-full flex justify-center items-center h-[320px] sm:h-[420px] md:h-[520px] lg:h-[520px] [--gap:180px] sm:[--gap:220px] md:[--gap:260px] lg:[--gap:450px]">
        {characters.map((character, index) => {
          const position = getPosition(index);

          return (
            <img
              key={character.id}
              src={character.image}
              alt={character.name}
              onClick={() => navigate(`/character/${character.id}`)} // 🔹 Redirige al detalle
              className="absolute object-cover rounded-xl transition-all duration-700 ease-in-out
                w-[200px] h-[280px] sm:w-[240px] sm:h-[340px] md:w-[300px] md:h-[420px] lg:w-[360px] lg:h-[420px]"
              style={{
                transform: `translateX(calc(var(--gap) * ${position})) scale(${
                  position === 0 ? 1.12 : 0.9
                })`,
                opacity: position === 0 ? 1 : 0.55,
                zIndex: position === 0 ? 20 : 10,
                display: position === 99 ? "none" : "block",
                cursor: "pointer", // 🔹 Visual para que parezca clickable
              }}
            />
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex gap-2 pb-6">
        {characters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-gray-400 scale-125" : "bg-gray-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SeriesSlider;

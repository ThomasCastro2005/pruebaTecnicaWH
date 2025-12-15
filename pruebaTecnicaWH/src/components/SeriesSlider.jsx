import { useEffect, useState } from "react";

const SeriesSlider = () => {
  const series = [
    "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
    "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // 🔁 Auto slide infinito
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % series.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [series.length]);

  // 🔄 Posición circular (izq / centro / der)
  const getPosition = (index) => {
    const diff = index - current;

    if (diff === 0) return 0;
    if (diff === -1 || diff === series.length - 1) return -1;
    if (diff === 1 || diff === -(series.length - 1)) return 1;

    return 99;
  };

  return (
    <div className="flex flex-col items-center overflow-hidden w-full">

      {/* SLIDER */}
      <div
        className="
          relative w-full flex justify-center items-center
          h-[320px] sm:h-[420px] md:h-[520px] lg:h-[520px]

          [--gap:180px]
          sm:[--gap:220px]
          md:[--gap:260px]
          lg:[--gap:450px]
        "
      >
        {series.map((img, index) => {
          const position = getPosition(index);

          return (
            <img
              key={index}
              src={img}
              alt="Marvel series"
              className="
                absolute object-cover
                transition-all duration-700 ease-in-out

                w-[200px] h-[280px]
                sm:w-[240px] sm:h-[340px]
                md:w-[300px] md:h-[420px]
                lg:w-[360px] lg:h-[420px]
              "
              style={{
                transform: `
                  translateX(calc(var(--gap) * ${position}))
                  scale(${position === 0 ? 1.12 : 0.9})
                `,
                opacity: position === 0 ? 1 : 0.55,
                zIndex: position === 0 ? 20 : 10,
                display: position === 99 ? "none" : "block",
              }}
            />
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex gap-2 pb-6">
        {series.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3 h-3 rounded-full transition-all
              ${index === current
                ? "bg-gray-400 scale-125"
                : "bg-gray-300"}
            `}
          />
        ))}
      </div>

    </div>
  );
};

export default SeriesSlider;

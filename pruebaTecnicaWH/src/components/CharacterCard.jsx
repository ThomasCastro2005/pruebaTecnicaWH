const CharacterCard = ({ character }) => {
  return (
    <div className="relative mx-auto bg-white rounded-2xl shadow-md overflow-hidden 
    sm:w-[240px]
    md:w-[250px]
    lg:w-[400px]

    sm:h-[325px]
    md:h-[350px]
    lg:h-[450px]
    
    ">

      {/* IMAGEN */}
      <img
        src={character.img}
        alt={character.name}
        className="w-full h-[360px] object-cover
        lg:h-[500px]
        "
      />

      {/* OVERLAY INFERIOR */}
      <div className="
        absolute bottom-0 left-0 w-full
        bg-gradient-to-t from-black/80 to-transparent
        p-4
      ">
        <h3 className="text-white text-lg font-semibold">
          {character.name}
        </h3>

        <p className="text-gray-300 text-sm">
          Creado en {character.created}
        </p>
      </div>

    </div>
  );
};

export default CharacterCard;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/characters/${id}`
        );
        setCharacter(response.data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el personaje");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div
        className="
      "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-10
            py-[40px] px-[100px]
            sm:py-[40px] sm:px-[100px]
            sm:flex
            sm:flex-col
            sm:justify-center
            md:py-[40px] md:px-[100px]
            md:flex
            md:flex-row
            lg:py-[40px] lg:px-[200px]
            lg:flex
            lg:flex-row
        "
        >
          <img
            src={character.img}
            alt={character.name}
            className="
            rounded-[10px]
            w-[200px] h-[200px]
            sm:w-[250px] sm:h-[250px]
            md:w-[300px] md:h-[300px]
            lg:w-[300px] lg:h-[300px]
          "
          />
          <p
            className="
            font-light
            text-[10px]
            text-center
            sm:text-[14px]
            sm:text-center
            sm:px-[5px] sm:pt-[10px]
            md:text-[15px]
            md:px-[50px]
            lg:text-[18px]
            lg:px-[50px]

          "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            quo officiis doloribus, quidem veniam non iusto sed natus beatae,
            facilis numquam obcaecati? Ipsam nobis a delectus atque neque
            quaerat! Ipsa.
          </p>
        </div>
        <div
          className="
          flex
          sm:justify-start
          md:justify-end
          lg:justify-end
          items-center
          w-full
         

        "
        >
          <div
            className="
            flex
            items-center
            bg-gray-300
            rounded-tr-[100px]
            rounded-br-[100px]
            text-start
            h-[110px]
            sm:rounded-tr-[100px]
            sm:rounded-br-[100px]
            sm:text-start
            md:rounded-tl-[100px]
            md:rounded-bl-[100px]
            md:rounded-tr-[0px]
            md:rounded-br-[0px]
            md:text-end
            lg:rounded-tl-[100px]
            lg:rounded-bl-[100px]
            lg:rounded-tr-[0px]
            lg:rounded-br-[0px]
            lg:text-end
            px-[20px]
            w-[350px] h-[80px]
            sm:px-[40px]
            sm:w-[450px] sm:h-[180px]
            md:px-[70px]
            md:w-[700px] md:h-[210px]
            lg:px-[70px]
            lg:w-[1100px] lg:h-[230px]


          "
          >
            <p
              className="
            font-light
            text-[9px]
            sm:text-[14px]
            md:text-[17px]
            lg:text-[22px]
            "
            >
              Este héroe es conocido por su valentía y dedicación, siempre
              luchando contra las fuerzas del mal para proteger a los inocentes.
              Sus habilidades únicas le permiten enfrentar cualquier desafío,
              mientras mantiene un fuerte sentido de justicia y responsabilidad.
              Inspira a todos con su ejemplo y coraje inquebrantable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;

import React from "react";
import { Link } from "react-router-dom";

const AboutCharacter = () => {
  const character = {
    id: 1,
    name: "Hero 1",
    img: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg",
  };

  return (
    <>
      <section
        className="
      pb-24
      "
      >
        <div
          className="
          bg-gray-300
        flex
        flex-row

        px-[60px]
        h-[150px]
        my-auto

        sm:px-[50px]
        sm:h-[230px]
        sm:my-auto

        md:px-[80px]
        md:h-[290px]
        md:my-auto

        lg:px-[100px]
        lg:h-[500px]
        lg:my-auto
        "
        >
          <div
            className="
          flex 
          flex-col 
          justify-center 
          w-[300px]
          sm:w-[1600px]
          md:w-[1600px]
          lg:w-[1600px]
          "
          >
            <p
              className="
            mb-[15px] font-light
            text-[9px]

            sm:text-[12px]
            sm:mb-[20px]

            md:text-[15px]
            md:mb-[40px]

            lg:text-[20px]
            lg:mb-[60px]
            lg:w-[500px]
            "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              sunt! Quae rerum amet blanditiis itaque accusamus ab laboriosam,
              quas dolor repudiandae veritatis quam dolorem rem eum tempora
              quisquam officiis soluta?
            </p>
            <Link
              to="/create"
              className="bg-red-700 text-amber-50 flex items-center justify-center
            text-center
            w-[120px] h-[25px] text-[10px]
            font-semibold

            sm:px-[10px] sm:py-[5px]
            sm:w-[150px] lg:h-[35px]
            sm:font-semibold

            md:px-[15px] md:py-[5px]
            md:w-[150px] lg:h-[35px]
            md:font-semibold

            lg:px-[10px] lg:py-[5px]
            lg:w-[250px] lg:h-[35px]
            lg:text-[15px]
            lg:font-semibold

            rounded-2xl
            
            "
            >
              Create character +
            </Link>
          </div>

          <img
            src={character.img}
            alt={character.name}
            className="
            relative
            rounded-[40px]
            w-[300px]
            h-[200px]
            left-[60px]
            bottom-[25px]
            sm:w-[500px]
            sm:h-[310px]
            sm:left-[50px]
            sm:bottom-[38px]
            md:w-[900px]
            md:h-[350px]
            md:left-[100px]
            md:bottom-[35px]
            lg:w-[1400px]
            lg:h-[576px]
            lg:left-[100px]
            lg:bottom-[42px]
        "
          />
        </div>
      </section>
    </>
  );
};

export default AboutCharacter;

import React from "react";

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
      flex
      pb-24
      "
      >
        <div
          className="
          bg-gray-300
        flex
        flex-col
        justify-center
        items-start

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
          <p
            className="
            mb-[10px] font-light
            text-[12px]

            sm:text-[12px]
            sm:mb-[20px]

            md:text-[15px]
            md:mb-[40px]

            lg:text-[20px]
            lg:mb-[60px]
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            sunt! Quae rerum amet blanditiis itaque accusamus ab laboriosam,
            quas dolor repudiandae veritatis quam dolorem rem eum tempora
            quisquam officiis soluta?
          </p>
          <a
            href=""
            className="bg-red-700 text-amber-50 flex items-center justify-center
            text-center
            w-[110px] h-[30px] text-[14px]

            sm:px-[10px] sm:py-[5px]
            sm:w-[150px]
            sm:font-semibold

            md:px-[15px] md:py-[5px]
            md:w-[150px]
            md:font-semibold

            lg:px-[10px] lg:py-[5px]
            lg:w-[180px]
            lg:text-[15px]
            lg:font-semibold

            rounded-2xl
            
            "
          >
            See character
          </a>
        </div>

        <img
          src={character.img}
          alt={character.name}
          className="
          rounded-[80px]
          w-[300px]
          h-[200px]
        sm:w-[500px]
        sm:h-[310px]
        md:w-[900px]
        md:h-[350px]
        lg:w-[1400px]
        lg:h-[576px]
        "
        />
      </section>
    </>
  );
};

export default AboutCharacter;

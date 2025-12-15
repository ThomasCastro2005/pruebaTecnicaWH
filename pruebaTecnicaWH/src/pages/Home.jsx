import React from "react";
import SeriesSlider from "../components/SeriesSlider";
import CharactersGrid from "../components/CharactersGrid";
import AboutCharacter from "../components/AboutCharacter";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="bg-gray-300">
          <SeriesSlider />
        </div>

        <div className="bg-gray-200 p-5">
          <a
            href=""
            className="bg-red-700 text-amber-50  lg:mx-[70px] md:mx-[30px]
            px-[30px] py-[2px]
            sm:px-[100px] sm:py-[5px]
            md:px-[100px] md:py-[5px]
            lg:px-[100px] lg:py-[5px]
            rounded-2xl"
          >
            Ver personajes
          </a>
        </div>

        <section
          className="
        p-30
        py-[80px]
        sm:p-20
        md:p-25
        lg:p-25
        sm:p-20
        md:p-25
        lg:p-25

        "
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Characters</h2>
          <p
            className="
            mb-[50px] font-light text-center
            text-[12px]
            sm:text-[15px]
            md:text-[18px]
            lg:text-[20px]
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            sunt! Quae rerum amet blanditiis itaque accusamus ab laboriosam,
            quas dolor repudiandae veritatis quam dolorem rem eum tempora
            quisquam officiis soluta?
          </p>
          <CharactersGrid />

          <h2 className="text-2xl font-bold mb-6 text-center mt-30">
            Characters
          </h2>
          <p
            className="
            mb-[50px] font-light text-center
            text-[12px]
            sm:text-[15px]
            md:text-[18px]
            lg:text-[20px]
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            sunt! Quae rerum amet blanditiis itaque accusamus ab laboriosam,
            quas dolor repudiandae veritatis quam dolorem rem eum tempora
            quisquam officiis soluta?
          </p>
        </section>

        <AboutCharacter />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import CardsSkills from "../components/CardsSkills";
import data from "../constants/data";

function Skills() {
  return (
    <div>
      <h1 className="text-amber-500 hover:text-amber-400 text-4xl flex justify-center  mt-[180px] ">
        Habilidades
      </h1>

      <div className="flex justify-center items-center mt-[50px]">
        {data.contentSkills.map((content) => (
          <CardsSkills
            key={content.title}
            image={content.image}
            title={content.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;

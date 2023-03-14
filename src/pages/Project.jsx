import React from "react";
import CardsProject from "../components/CardsProject";
import data from "../constants/data";

function Project() {
  return (
    <div>
      <h1 className="text-amber-500 hover:text-amber-400 font-bold text-4xl flex justify-center  mt-[180px] ">
        Projetos
      </h1>

      <div className="flex justify-center items-center mt-[50px]">
        {data.contentProject.map((content) => (
          <CardsProject
            key={content.title}
            image={content.image}
            title={content.title}
            linkProject={content.linkProject}
            linkGithub={content.linkGithub}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;

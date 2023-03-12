import React from "react";
import data from "../constants/data";

const About = () => {
  return (
    <div>
      <h1 className="text-amber-500 hover:text-amber-400 text-4xl flex justify-center  mt-40">
        Sobre Mim
      </h1>
      <div className="mt-[50px]">
        {data.contentAbout.map((content, index) => (
          <div className="flex justify-evenly mt-[80px]" key={index}>
            <p className="text-white w-[500px] mt-[20px]">{content.text}</p>
            <img src={content.image} className="w-[250px]  h-[250px] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

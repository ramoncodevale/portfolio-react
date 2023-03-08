import React from "react";

import data from "../constants/data";

function Home() {
  return (
    <div className="mt-[100px]">
      {data.contentHome.map((content, i) => (
        <div className="flex justify-center" key={i}>
          <div className="w-[350px]">
          <h1 className="text-black text-3xl">{content.paragraph1}</h1>
          <h1 className="text-black text-3xl">{content.paragraph2}</h1>
          </div>         
          <img className="w-[500px]" src={content.image} />
        </div>
      ))}
    </div>
  );
}

export default Home;

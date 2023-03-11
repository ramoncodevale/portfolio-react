import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import data from "../constants/data";

function Home() {
  return (
    <div className="mt-[50px]">
      {data.contentHome.map((content, i) => (
        <div className="flex justify-around" key={i}>
          <div className="w-[450px] mt-[180px]">
            <h1 className="text-white font-bold text-5xl"> {content.paragraph1}</h1>
            <h1 className="text-cyan-500 text-4xl">{content.paragraph2}</h1>
            <button className="bg-cyan-300 hover:bg-cyan-500 mt-4 h-[45px] w-60 text-black text-lg rounded">
              Baixar Cv
            </button>
      <div className="flex mt-4">
        <a href="#">
          <BsGithub className="text-cyan-300 hover:text-cyan-500 mx-2" size={20} />
        </a>
        <a href="#">
          <BsLinkedin className="text-cyan-300 hover:text-cyan-500 mx-2" size={20} />
        </a>
        <a href="#">
          <BsWhatsapp className="text-cyan-300 hover:text-cyan-500 mx-2" size={20} />
        </a>
      </div>
          </div>
          <img className="w-[500px]" src={content.image} />
        </div>
      ))}
    </div>
  );
}

export default Home;

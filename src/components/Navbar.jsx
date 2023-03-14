import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white/5 bg-opacity-80 backdrop-blur-sm shadow text-neutral-50 flex justify-center h-[56px]">
      <ul className="flex justify-between items-center">
        <li className="px-4  hover:text-amber-500 font-medium	 text-lg">
          Inicio
        </li>
        <li className="px-4    hover:text-amber-500 font-medium	text-lg">
          Sobre Mim
        </li>
        <li className="px-4   hover:text-amber-500 font-medium text-lg">
          Habilidades
        </li>
        <li className="px-4  hover:text-amber-500 font-medium text-lg">
          Projetos
        </li>
        <li className="px-4   hover:text-amber-500 font-medium text-lg">
          Contatos
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

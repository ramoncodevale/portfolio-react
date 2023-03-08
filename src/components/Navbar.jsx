import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#171717] text-neutral-50 flex justify-center h-[56px]">
      <ul className="flex justify-between items-center">
        <li className="px-4  hover:text-cyan-300">Inicio</li>
        <li className="px-4    hover:text-cyan-300">Sobre Mim</li>
        <li className="px-4   hover:text-cyan-300">Habilidades</li>
        <li className="px-4  hover:text-cyan-300">Projetos</li>
        <li className="px-4   hover:text-cyan-300">Contatos</li>
      </ul>
    </div>
  );
};

export default Navbar;

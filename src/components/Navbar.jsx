import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#1c1917] text-neutral-50 flex justify-center h-[56px]">
      <ul className="flex justify-between items-center">
        <li className="px-4  hover:text-amber-500 text-lg">Inicio</li>
        <li className="px-4    hover:text-amber-500 text-lg">Sobre Mim</li>
        <li className="px-4   hover:text-amber-500 text-lg">Habilidades</li>
        <li className="px-4  hover:text-amber-500 text-lg">Projetos</li>
        <li className="px-4   hover:text-amber-500 text-lg">Contatos</li>
      </ul>
    </div>
  );
};

export default Navbar;

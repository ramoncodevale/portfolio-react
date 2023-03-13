import React from 'react';
import data from "../constants/data";


function Contact() {
  return (
    <div>
     <h1 className="text-amber-500 hover:text-amber-400 text-4xl flex justify-center  mt-[180px] ">
        Contatos
      </h1>

      <div className="flex justify-center items-center mt-[50px]">
        {data.contentContact.map((content, i) => (
         <div key={i}>
          <img className='w-[200px] h-[200px] mt-[35px]' src={content.image} alt="" />
         </div>
        ))}
      </div>
      </div>
  )
}

export default Contact
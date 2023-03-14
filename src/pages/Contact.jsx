import React from 'react';
import data from "../constants/data";


function Contact() {
  return (
    <div>
     <h1 className="text-amber-500 hover:text-amber-400 font-bold text-4xl flex justify-center  mt-[180px] ">
        Contatos
      </h1>

      <div className="flex justify-center items-center mt-[50px]">
        {data.contentContact.map((content, i) => (
         <div className='flex justify-center' key={i}> 
          <img className='w-[300px] h-[300px] mt-[35px]' src={content.image} />
          <h3 className=' text-white text-lg mt-[100px]'>{content.number}</h3>
          <div className='flex justify-space-center mt-[100px]'>  
          <h3 className=' text-white text-lg'>{content.email}</h3>
          </div>
         </div>
        ))}
      </div>
      </div>
  )
}

export default Contact
import React from 'react'

function CardsSkills({image, title}) {
  return (
    <div className='bg-white/5 bg-opacity-80 backdrop-blur-sm shadow hover:color-amber-500 rounded w-[120px] h-auto text-center mx-3'>
    <div className='flex justify-center'>
     <img className='w-[70px]' src={image} alt={`imagem ${title}`}/>
    </div>
     <h4 className='text-amber-500 hover:text-slate-50'>{title}</h4>
    </div>
  )
}

export default CardsSkills
import React from 'react'


function CardsProject({image,title,linkProject,linkGithub}) {
  return (
    <div className='bg-white/5 bg-opacity-80 backdrop-blur-sm shadow hover:color-amber-500 rounded w-[250px] h-auto text-center mx-3'>
    <div className='flex justify-center'>
    <img className='w-[200px] h-[200px] mt-[35px]' src={image} />
    </div>
    <h4 className='text-amber-500 hover:text-slate-50'>{title}</h4>
    <div className='flex justify-center'> 
    <a href={linkProject}>   
    <button className=' w-[100px] h-[30x] bg-amber-500 hover:bg-amber-400 text-white text-lg rounded '>
     Projeto 
    </button>
    <a href={linkGithub}>
    <button className='w-[100px] h-[30px] bg-amber-500 hover:bg-amber-400 text-white text-lg rounded mx-2 '>
     Github
    </button>
    </a>
    </a>
     </div>
    </div>
  )
}

export default CardsProject
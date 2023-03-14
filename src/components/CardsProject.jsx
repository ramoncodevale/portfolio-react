import React from 'react'


function CardsProject({image,title,linkProject,linkGithub}) {
  return (
    <div className='bg-white/5 bg-opacity-80 backdrop-blur-sm shadow hover:color-amber-500 rounded w-full h-[350px] text-center mx-9'>
    <div className='flex justify-center'>
    <img className='w-[200px] h-[200px] mt-[35px]' src={image} />
    </div>
    <h4 className='text-amber-500 hover:text-slate-50 mt-[10px]'>{title}</h4>
    <div className='flex justify-center mt-[35px]'> 
    <a href={linkProject}>   
    <button className=' w-[100px] h-[30px]  bg-amber-500 hover:bg-amber-400 text-white rounded '>
     Projeto 
    </button>
    <a href={linkGithub}>
    <button className='w-[100px] h-[30px] bg-amber-500 hover:bg-amber-400 text-white rounded mx-2 '>
     Github
    </button>
    </a>
    </a>
     </div>
    </div>
  )
}

export default CardsProject
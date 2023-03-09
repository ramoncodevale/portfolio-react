import React from 'react'
import data from '../constants/data'

const About = () => {
  return (
    <div>
    <h1 className='text-cyan-500 text-4xl flex justify-center  mt-50'>Sobre Mim</h1>
    <div className='mt-50'>
    {data.contentAbout.map((content, index) =>(
    <div className='flex justify-evenly mt-[150px]' key={index}>
    <p className='text-white w-[500px] mt-[20px]'>{content.text}</p>
    <img src={content.image} className='w-[250px]  h-[250px] rounded' />
    </div>
    ))}
    </div>
    </div>
  )
}

export default About

import React from 'react'
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import {FiGithub} from 'react-icons/fi'
import {TfiLink} from 'react-icons/tfi'


const Projects = () => {
  
  const products = [{id:1, image:p1 , title:"Pizzaria-MVC",lang:"100% Java/UML", github:"https://github.com/D-Davinson/PIZZERIAMVC"},
                    {id:2, image:p2 , title:"Card-Davi",lang:"HTML/CSS/JavaScript", github:"https://github.com/D-Davinson/Card_Davi",
                      demo:"Demo",demo_link:"https://D-Davinson.github.io/Card_Davi/"},];
  
  return (
    <div className='bg-gradient-to-t from-blue-900 via-blue-900 to-gray-800'>
      <div name='Projects' className='max-w-screen-lg px-4 mx-auto justify-start w-full h-full'>
        <div className='p-8'>
          <p className='text-white font-light text-4xl border-b-4 inline border-lime-500'>Projects</p>

          <div className='grid-cols-1 sm:gap-4 sm:p-2 p-10 grid gap-8 lg:gap-10 lg:grid-cols-2 md:grid-cols-2 items-center'>
            {products.map(({id,image,title,lang,github,demo,demo_link})=>(
              <div key={id} className='group flex flex-col rounded-xl shadow-2xl shadow-lime-500
                                        overflow-hidden bg-gradient-to-b from-gray-800 via-gray-800 to-blue-900 hover:scale-110 duration-500'>
                <img src={image} alt={title}/>
                <div className='text-lime-200'>
                  <h2 className="flex justify-center text-2xl sm:text-xs py-2">{title}</h2>
                  <div className='p-3 mr-2'>  
                    <a className='flex justify-end gap-2 font-extralight ' href={github}>CodeSource<FiGithub className='group-hover:rotate-12 duration-700' /></a>
                    
                    <div className='flex justify-between'>
                      <a href={demo_link} className="text-lime-200 font-extralight ml-2 p-1 px-4 group-hover:animate-bounce hover:bg-lime-200
                       hover:text-orange-700 rounded-xl duration-700">{demo}</a>
                      <p className='flex gap-3 font-medium text-lime-300'>{lang}<TfiLink className='group-hover:animate-spin duration-500' /></p>
                    </div></div></div> </div>
            ))}
            </div></div></div>
    </div>
  )
}

export default Projects
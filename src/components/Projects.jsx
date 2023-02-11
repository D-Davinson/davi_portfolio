import React from 'react'
import p1 from '../assets/img/p1.png'
import p2 from '../assets/img/p2.png'
import {FiGithub} from 'react-icons/fi'
import {TfiLink} from 'react-icons/tfi'


const Projects = () => {
  
  const products = [{id:1, image:p1 , title:"Pizzaria-MVC",lang:"100% Java/UML", github:"https://github.com/D-Davinson/PIZZERIAMVC"},
                    {id:2, image:p2 , title:"Card-Davi",lang:"HTML/CSS/JavaScript", github:"https://github.com/D-Davinson/Card-Davi"},
                  ];
  
  return (
    <div className='h-screen bg-gradient-to-t from-purple-800 via-purple-700 to-orange-500'>
      <div name='Projects' className='max-w-screen-lg px-4 mx-auto flex flex-col justify-start w-full h-full'>
        <div className='p-8'>
          <p className='text-purple-800 font-light  text-4xl border-b-4 inline border-purple-800'>Projects</p>

          <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
            {products.map(({id,image,title,lang,github})=>(
              <div key={id} className=' flex overflow-hidden rounded-xl shadow-black'>
                <img src={image} alt={title} />
                <div>
                  <h2>{title}</h2>
                    <a  href=""><FiGithub /></a>
                    <a  href=""><TfiLink /></a>
                </div>

              </div>
            ))}

          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Projects
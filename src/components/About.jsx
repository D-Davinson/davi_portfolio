import React from 'react'

const About = () => {
  return (
    <div name="About"className=' h-screen bg-gradient-to-b from-purple-800 via-purple-800 to-orange-500'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-10'>
          <p className='text-orange-500 font-bold text-4xl inline border-b-4 border-orange-400'>About</p>
        </div>
        <p className='text-lime-300 text-xl mt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ipsum, tempore. Tempore quis ea, eveniet nobis possimus nam id, iure blanditiis 
          a qui ab voluptate dolores delectus, accusantium magnam! Molestias omnis eveniet 
          aut suscipit ut? Fuga obcaecati et a placeat similique, quis id perspiciatis expedita
           assumenda voluptates, recusandae, odit quam minima!
        </p>
        <br />
        <p className='text-lime-300 text-xl'>
          During my courses i did many porjets with differents langages and every 
          side part (front-end/back-end) such as for front i used HTML/CSS JavaScript but also differents framework as React Angular.
        </p>
      </div>
    </div>
  )
}

export default About
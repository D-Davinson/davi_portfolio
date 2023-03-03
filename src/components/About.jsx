import React from 'react'

const About = () => {
  return (
    <div name="About" className=' h-screen bg-gradient-to-b from-blue-900 to-gray-800'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-10'>
          <p className='text-white font-light  text-4xl border-b-4 inline border-lime-500'>About</p>
        </div>
        <p className='text-gray-300 text-xl mt-10 font-extralight '>
        As a holder of a scientific baccalaureate specialized in <span className='text-lime-500 font-semibold text-2xl'>engineering science</span>, I continued in this technological
        path by joining the <span className='text-lime-500 font-semibold text-2xl'>University of Paris-Saclay</span> (UEVE). For 4 years I have been specializing in <span className='text-lime-500 font-semibold text-2xl'>M.I.A.GE</span> (computer
        methods applied to business management). I can work in a team.
        </p>
        <br />
        <p className='text-gray-300 text-xl font-extralight'>
          During my courses i did many projets with differents langages and every 
          side part (front-end/back-end) such as for front i used <span className='text-lime-500 font-semibold text-2xl'>HTML/CSS JavaScript</span> or the back with <span className='text-lime-500
          font-semibold text-2xl'>mongoDB</span> but also differents <span className='text-lime-500 
          font-semibold text-2xl'>Framework</span> for example <span className='text-lime-500 font-semibold text-2xl'>ReactJS</span>.
        </p>
      </div>
    </div>
  )
}

export default About
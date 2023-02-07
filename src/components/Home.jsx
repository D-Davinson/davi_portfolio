import React from 'react';
import Head from '../assets/logo.png';
import {AiOutlineCompass} from "react-icons/ai";
const Home = () => {

  return (
    <div name="home" className='h-screen w-full bg-purple-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-orange-500'>I'm Junior Science computer Developer !</h2>
                <h4 className='text-orange-500 py-4 max-w-md'>
                Hello my name is Davinson, welcome to my portfolio,
                I am passionate about new technologies for 4 years. Moreover,
                I enjoy to work on web application technologies.
                </h4>
                <div>
                    <button className=' group text-lime-200 w-fit px-3 py-3 mx-44 my-3 flex 
                    items-center shadow-2xl rounded-md bg-orange-700 cursor-pointer'>
                        Explore
                        <span className='mx-2 group-hover:rotate-180 duration-300'>
                            <AiOutlineCompass size={20}/>
                        </span>    
                    </button>
                </div>
            </div>
            <div>
                <img src={Head} alt="my profile" 
                className=' mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home
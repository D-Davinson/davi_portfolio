import React from 'react';
import Head from '../assets/logo.png';
import {AiOutlineCompass} from "react-icons/ai";
const Home = () => {

  return (
    <div name="home" className='h-screen w-full bg-blue-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='mx-auto flex flex-col justify-center h-full w-full'>
                <h2 className='flex text-xl sm:text-6xl font-bold text-lime-500'>I'm Junior Computer Science Developer !</h2>
                <h4 className='text-gray-300 py-4 max-w-md text-xl'>
                Hello my name is <span className='text-xl text-lime-500 font-semibold'>Davinson</span>, welcome to my portfolio,
                I am passionate about new technologies for <span className='text-xl text-lime-500 font-light'>4 years</span> now. Moreover,
                I enjoy to work on <span className='text-xl text-lime-500 font-light'>web application technologies</span>.
                </h4>
                <div>
                <a href="https://D-Davinson.github.io/Card_Davi/" target="website">
                    <button className=' group text-lime-200 w-fit px-3 py-3 mx-44 my-3 flex 
                    items-center shadow-2xl rounded-md bg-slate-800 cursor-pointer hover:bg-lime-200 duration-700 hover:text-slate-800'>
                        Explore
                        <span className='mx-2  group-hover:animate-spin duration-300'>
                            <AiOutlineCompass size={20}/>
                        </span>    
                    </button>
                   </a> 
                </div>
            </div>
            <div>
                    <img name="img" src={Head} alt="my profile" 
                className='shadow-2xl cursor-pointer mx-auto w-2/3 md:w-full hover:scale-125 duration-500'/>
            </div>
        </div>
    </div>
  )
}
export default Home
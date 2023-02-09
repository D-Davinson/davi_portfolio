import React, { useState } from 'react'
import {FaBars} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai"
const Navbar = () => {
    //State
    const  [nav,setNav] = useState(false);

    const links = [{id:1,link: "home"},{id:2,link: "about"},{id:3,link:"Langages"},{id:4,link: "Projects"},{id:5,link: "CV"},{id:6,link: 'Contact'},];

  return (
    <div className='flex justify-between w-full h20 p-3 text-white bg-purple-900 fixed'>
    <div>
        <h1 className=" text-3xl ml-2 text-orange-500 underline">Portfolio</h1>
    </div>
    <ul className='hidden md:flex'>

        {links.map(({id,link}) => (
        <li key={id} className='mx-9 px-2 py-2 cursor-pointer rounded-xl capitalize font-medium
        text-lime-300 hover:scale-110 duration-200 hover:underline hover:bg-gray-600 hover:opacity-80 '>{link}</li>
        ))}
    </ul>
    <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-3 z-10 text-orange-500 hover:scale-110 duration-200 md:hidden'>
        {nav ? <AiFillStar size={30} /> : <FaBars size={30}/>} 
    </div>    
        {nav &&(
        <ul className=' flex flex-col justify-center items-center 
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-900 to-orange-500 text-lime-100'>
        {links.map(({id,link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-110 duration-200' >{link}</li>
    ))}
        </ul>
  

        )}
    </div>   
  )
}

export default Navbar
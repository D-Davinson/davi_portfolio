import React, { useState } from 'react'
import {FaBars} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-scroll"
const Navbar = () => {
    //State
    const  [nav,setNav] = useState(false);

    const links = [{id:1,link: "home"},{id:2,link: "About"},{id:3,link:"Langages"},{id:4,link: "Projects"},{id:5,link:"Resume"}];

  return (
    <div name="Portfolio" className='flex justify-between z-10 w-full h20 p-3 text-white bg-slate-800 '>
    <div>
        <h1 className=" text-3xl ml-2 text-white underline">Portfolio</h1>
    </div>
    <ul className='hidden md:flex'>


        {links.map(({id,link}) => (
        <li key={id} className='mx-9 px-2 py-2 cursor-pointer rounded-xl capitalize font-medium
        text-lime-100 hover:scale-110 duration-200 hover:underline hover:bg-gray-600 hover:opacity-80'>
            <Link to={link} smooth duration={700}> 
                {link}
            </Link>
            </li>
            
        ))}
    </ul>
    <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-3 z-20 text-orange-500 hover:scale-110 duration-200 md:hidden'>
        {nav ? <AiFillStar size={30} /> : <FaBars size={30}/>} 
    </div>    
        {nav &&(
        <ul className=' flex flex-col justify-center items-center 
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-900 to-orange-500 text-lime-100'>
        {links.map(({id,link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-110 duration-200'>
                <Link onClick={()=>setNav(!nav)} to={link} smooth duration={700}>{link}</Link>
            </li>
    ))}
        </ul>
  

        )}
    </div>   
  )
}

export default Navbar
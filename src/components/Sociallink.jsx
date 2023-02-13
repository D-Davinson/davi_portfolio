import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {SiMailchimp} from 'react-icons/si'
import {IoMailOpenOutline} from 'react-icons/io5'
import {HiArrowUturnUp} from 'react-icons/hi2'
import { Link } from "react-scroll"


const Social_Link = () => {
  return (
    <div className='hidden lg:flex flex-col text-lime-300'>
     <a href="https://github.com/D-Davinson">
        <FiGithub className='left-5 bottom-[14%] fixed hover:scale-125 hover:text-white duration-700' size={35}/>
     </a>   
     <a href="mailto:doglasprincedavinson@gmail.com">
        <IoMailOpenOutline className='left-5 bottom-[7%] fixed hover:scale-125 hover:text-white duration-700' size={35}/>
     </a> 

     <a href="/CV.pdf">
        <SiMailchimp className='left-5 bottom-[21%] text-lime-100 animate-bounce fixed hover:text-lime-500 duration-700' size={35}/>   
     </a> 

     <Link to="Portfolio" smooth duration={500}><HiArrowUturnUp className='right-7 bottom-[7%] cursor-pointer fixed hover:scale-125 duration-700' size={30}/></Link>
          
    </div>
  )
}

export default Social_Link
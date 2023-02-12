import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {SiMailchimp} from 'react-icons/si'
import {IoMailOpenOutline} from 'react-icons/io5'
import {HiArrowUturnUp} from 'react-icons/hi2'

const Social_Link = () => {
  return (
    <div className='hidden lg:flex flex-col text-lime-300'>
     <a href="https://D-Davinson.github.io/Card_Davi/">
        <FiGithub className='left-5 bottom-[12%] fixed hover:scale-125 duration-700' size={35}/>
     </a>   
     <a href="https://D-Davinson.github.io/Card_Davi/">
        <IoMailOpenOutline className='left-5 bottom-[5%] fixed hover:scale-125 duration-700' size={35}/>
     </a> 

     <a href="/CV.pdf">
        <SiMailchimp className='left-5 bottom-[19%] text-purple-800 animate-bounce fixed' size={35}/>
        
     </a> 

     <a href="https://D-Davinson.github.io/Card_Davi/">
        <HiArrowUturnUp className='right-7 bottom-[5%] fixed hover:scale-125 duration-700' size={30}/>
        
     </a> 
    </div>
  )
}

export default Social_Link
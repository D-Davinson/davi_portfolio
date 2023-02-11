import React from 'react'
import Javascript from "../assets/svg/logo-javascript.svg"
import Html1 from "../assets/svg/html-1.svg"
import css from "../assets/svg/css-3.svg"
import ocaml from "../assets/svg/ocaml.svg"
import python from "../assets/svg/python-5.svg"
import react from "../assets/svg/react-2.svg"
import tailwindcss from "../assets/svg/tailwindcss.svg"
import Vite from "../assets/svg/vitejs.svg"
import Java from "../assets/svg/java.svg"
import c from "../assets/svg/c-1.svg"
import {IoExtensionPuzzleOutline} from "react-icons/io5"
import {CiMobile3} from "react-icons/ci"

const Langages = () => {

const fram_work = [{id:1,name:"reactJs",framework:react,href:"https://en.reactjs.org"},
                    {id:2,name:"Vite",framework:Vite},
                    {id:3,name:"tailwindcss",framework:tailwindcss,href:"http://tailwindcss.com/"},] 

const svg  = [{id:1 ,name:"JavaScript", img:Javascript, href:"https://developer.mozilla.org/fr/docs/Web/JavaScript"},
              {id:7, name:"Java", img:Java,href:"https://docs.oracle.com/en/java/"},
              {id:2 ,name:"Python", img:python,href:"http://python.org/"},
              {id:3,name:"HTML", img:Html1,href:"https://devdocs.io/html/"},
              {id:4,name:"CSS",img:css,href:"https://devdocs.io/css/"},
              {id:5 ,name:"C", img:c,href:"https://devdocs.io/c/"},
              {id:6 , img:ocaml, href:"https://ocaml.org"},];

  return (
    <div className='h-screen bg-orange-500'>
    <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full bg-orange-500'>
      <div className='group text-lime-300 font-light text-3xl inline border-b-4 border-lime-300  hover:text-purple-800 hover:border-purple-800 hover:duration-700'>
      <CiMobile3 size={35} className='flex my-1 mx-2 group-hover:rotate-90 duration-700 '/>Langages</div>
      <div className='flex p-10 gap-5 justify-center '>
      {
          svg.map(({id,img,href,name})=>(
          <button className='group text-lime-300 font-light capitalize text-2xl hover:text-purple-800 hover:duration-700'>  
          <a key={id} href={href} target="website">
            <img className='hover:drop-shadow-2xl duration-300' width={100} height={100} src={img} alt="logo"/>
          </a>
          {name}
          </button>
          ))
        }  
      </div>
      <div className='group text-lime-300 font-light text-3xl inline border-b-4 border-lime-300 hover:text-purple-800 hover:border-purple-800 hover:duration-700'>
        <IoExtensionPuzzleOutline size={35} className='flex my-1 mx-2 group-hover:rotate-45 duration-300 '/>FrameWork</div>
      <div className=' flex p-10 gap-20 justify-center'>
      {
          fram_work.map(({id,framework,href,name})=>(
          <button className='  text-lime-300 font-light capitalize text-2xl hover:text-purple-800 hover:duration-700'> 
          <a key={id} href={href} target="website">
            <img className='hover:drop-shadow-2xl duration-300' width={100} height={100} src={framework} alt="logo-javascript" />
          </a>
          {name}
          </button>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Langages
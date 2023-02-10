import React from 'react'
import Javascript from "../assets/svg/logo-javascript.svg"
// import Html1 from "../assets/svg/html-1.svg"
// import css from "../assets/svg/css-3.svg"
import ocaml from "../assets/svg/ocaml.svg"
import python from "../assets/svg/python-5.svg"
import react from "../assets/svg/react-2.svg"
import tailwindcss from "../assets/svg/tailwindcss.svg"
import Vite from "../assets/svg/vitejs.svg"
import c from "../assets/svg/c-1.svg"

const Langages = () => {

const svg  = [{id:1 , img:{Javascript},},{id:2 , img:{ocaml},},
              {id:3 , img:{python},},{id:4 , img:{react},},
              {id:5 , img:{tailwindcss},},{id:6 , img:{Vite},},
              {id:7 , img:{c},},];

  return (
    <div>

      <a href="https://vitejs.dev" target="website">
      <img className='hover:bg-yellow-500 duration-300' width={100} height={100} src={Vite} alt="logo-javascript" />
    </a>
    </div>
  )
}

export default Langages
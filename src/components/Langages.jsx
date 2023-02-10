import React from 'react'
import Javascript from "../assets/svg/logo-javascript.svg"
import Html1 from "../assets/svg/html-1.svg"
import css from "../assets/svg/css-3.svg"
import ocaml from "../assets/svg/ocaml.svg"
import python from "../assets/svg/python-5.svg"
import react from "../assets/svg/react-2.svg"
import tailwindcss from "../assets/svg/tailwindcss.svg"
import Vite from "../assets/svg/vitejs.svg"
import c from "../assets/svg/c-1.svg"

const Langages = () => {

const svg  = [{id:1 , img:Javascript, href:"https://developer.mozilla.org/fr/docs/Web/JavaScript"},{id:2 , img:ocaml, href:"https://ocaml.org"},
              {id:3 , img:python,href:"http://python.org/"},{id:4 , img:react, href:"https://en.reactjs.org"},
              {id:5 , img:tailwindcss,href:"http://tailwindcss.com/"},{id:6 , img:Vite,href:"https://vitejs.dev"},
              {id:7 , img:c,href:"https://devdocs.io/c/"},{id:8, img:Html1,href:"https://devdocs.io/html/"},
              {id:9,img:css,href:"https://devdocs.io/css/"}];

  return (
    <div className='bg-orange-500 flex h-screen '>
      {
          svg.map(({id,img,href})=>(
          <a key={id} href={href} target="website">
            <img className='hover:drop-shadow-2xl duration-300' width={100} height={100} src={img} alt="logo-javascript" />
          </a>
          ))
        }
    </div>
  )
}

export default Langages
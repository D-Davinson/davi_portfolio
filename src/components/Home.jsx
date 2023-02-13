import React from 'react';
import Head from '../assets/logo.png';
import {AiOutlineCompass} from "react-icons/ai";
const Home = () => {

  return (
    <div name="home" className='h-screen w-full bg-blue-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='flex text-3xl  sm:text-6xl font-bold text-lime-500'>I'm Junior Computer Science Developer !</h2>
                <h4 className='text-gray-300 py-4 max-w-md'>
                Hello my name is <span className='text-xl text-lime-500 font-semibold'>Davinson</span>, welcome to my portfolio,
                I am passionate about new technologies for <span className='text-xl text-lime-500 font-light'>4 years</span> now. Moreover,
                I enjoy to work on <span className='text-xl text-lime-500 font-light'>web application technologies</span>.
                </h4>
                <div>
                <a href="https://D-Davinson.github.io/Card_Davi/" target="website">
                    <button className=' group text-lime-200 w-fit px-3 py-3 mx-44 my-3 flex 
                    items-center shadow-2xl rounded-md bg-slate-800 cursor-pointer hover:bg-lime-200 duration-700 hover:text-orange-700'>
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

    /*
    img.addEventListener('mouseenter' , (e) =>{
    img.style.transition = "none";});


        img.addEventListener("mouseleave", (e) => {
        img.style.transition = "all 1.5s ease";
        img.style.transform = `rotateY(0deg) rotateX(0deg)`;}); */

/*
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const h1 = document.querySelector('.h1');
const img = document.querySelector('.img');


//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAixs = (window.innerWidth/2 - e.pageX)/15;
    let yAixs = (window.innerHeight/2 - e.pageY)/15;
    card.style.transform = `rotateY(${-xAixs}deg) rotateX(${-yAixs}deg)`;

});

//Animaiton in
container.addEventListener('mouseenter' , (e) =>{
    card.style.transition = "none";
    h1.style.transform = 'translateZ(50px)';
    //img.style.transform = 'translateZ(15px)';
   
});



//Animation out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    h1.style.transform = 'translateZ(0px)';
    img.style.transform = 'translateZ(0px)';
});
*/
export default Home
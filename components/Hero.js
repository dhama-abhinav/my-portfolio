import React from 'react'
import Typewriter from "typewriter-effect";
import {  AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const Hero = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
           <div>
           <p className='uppercase text-sm tracking-widest text-gray-600 '>Lets build something...</p>
            {/* <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#5651e5]'>Abhinav Dhama</span>
            </h1> */}
            <h1 className='py-4 text-blue-700'>
            <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("Hi, I'm Abhinav Dhama")  
            .pauseFor(1000)
            .deleteAll()
            .typeString("Hi, I'm Abhinav Dhama")
            .start();
            }}
            />
            </h1>
            <h1 className='py-2 text-gray-700'>
                A Front-End Developer.
            </h1>
            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I'm a front-end web developer.. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
           </p>
           <div className='flex items-center justify-between max-w-[330px]  m-auto py-4'>
                <a
                href='https://github.com/dhama-abhinav'
                target='_blank'
                rel='noreferrer'
                >
                    <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                </a>
                <a
                href='https://www.linkedin.com/in/abhinav-dhama-70b211224/'
                target='_blank'
                rel='noreferrer'
                >
                    <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                        <FaLinkedin />
                    </div>
                </a>

                    <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
            </div>
           </div>
        </div>
    </div>
  )
}

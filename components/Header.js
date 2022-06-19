import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Typewriter from "typewriter-effect";

export const Header = () => {
    const [sidebar,setSidebar]=useState(false)
    const handleSidebar = ()=>{
        setSidebar(!sidebar)
    }

  return (
    <div className='fixed bg-white w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2'>
            <h1>
            <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("ABHINAV")  
            .pauseFor(1000)
            .deleteAll()
            .typeString("AB")
            .start();
            }}
            />
            </h1>
            <div>
                <ul className='hidden  md:flex items-center'>
                    <Link href='/'  >
                        <li className='ml-10 text-sm uppercase '>Home</li>
                    </Link>
                    <Link href='/about'  >
                        <li className='ml-10 text-sm uppercase '>About</li>
                    </Link>
                    <Link href='/skills'  >
                        <li className='ml-10 text-sm uppercase '>Skills</li>
                    </Link>
                    <Link href='/projects'  >
                        <li className='ml-10 text-sm uppercase '>Projects</li>
                    </Link>
                    <Link href='/contact'  >
                        <li className='ml-10 text-sm uppercase '>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleSidebar} className='md:hidden cursor-pointer '>
                    <AiOutlineMenu size={25} />
                </div>
             </div>
        </div>
       
       <div className={ sidebar 
        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' 
        : ''}>
            <div className={sidebar 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 ' 
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 '}>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1>AB</h1>
                        <div onClick={handleSidebar} className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3'>
                            <AiOutlineClose size={25}  />
                        </div>
                    </div>  
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%]'>Lets build something...</p>
                    </div>   
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase '>
                        <Link href='/'  >
                            <li className='w-[80px] py-4 text-sm uppercase '>Home</li>
                        </Link>
                        <Link href='/about'  >
                            <li className='w-[80px] py-4 text-sm uppercase '>About</li>
                        </Link>
                        <Link href='/skills'  >
                            <li className='w-[80px] py-4 text-sm uppercase '>Skills</li>
                        </Link>
                        <Link href='/projects'  >
                            <li className='w-[80px] py-4 text-sm uppercase '>Projects</li>
                        </Link>
                        <Link href='/contact'  >
                            <li className=' w-[80px] py-4 text-sm uppercase '>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-32'>
                        <p className='font-bold uppercase tracking-widest text-[#5651e5]'>
                            Lets connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%] '>
                            <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                                <FaLinkedin />
                            </div>
                            <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div> 

            </div>
       </div>
    </div>
  )
}

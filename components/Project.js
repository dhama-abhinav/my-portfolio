import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export const Project = ({title , projectURL ,url}) => {
  return (
    // <div className='group hover:shadow-2xl'>
    //     <div>
    //         <Image className='rounded-xl group-hover:scale-105 ease-in duration-300' src={url}  alt='/' />
    //     </div>
    //     <div className='hidden group-hover:inline group-hover:mt-4 group-hover:mb-4 group-hover:flex group-hover:items-start group-hover:justify-around'>
    //         <button className='p-1 w-[80px] rounded-md bg-red-600 text-white '>
    //             Code
    //         </button>
    //         <button className='p-1 w-[100px] rounded-md bg-red-600  text-white'>
    //             Live Demo
    //         </button>
    //     </div>
    // </div>
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#6c1956] to-[#fed3e6]'>
    <Image className='rounded-xl group-hover:opacity-10' src={url} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <Link href={projectURL}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

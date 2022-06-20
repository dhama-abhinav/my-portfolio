import Image from 'next/image'
import React from 'react'

export const SkillSets = ({title ,url}) => {
  return (
    <div className='group flex items-center mt-5 m-2 space-x-4 cursor-pointer rounded-xl hover:bg-black p-4 hover:scale-105 ease-in duration-300 shadow-md even:shadow-blue-600 odd:shadow-red-600'>
         <Image className='group-hover:bg-white ' src={url} width='64px' height='64px' alt='/' />
        <p className='text-gray-600 group-hover:font-bold group-hover:text-white'>{title}</p>
    </div>
  )
}

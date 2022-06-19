import React from 'react';
import Link from 'next/link'

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am ?</h2>
          <p className='py-2 text-gray-600'>
            I have always had a knack for
            technology and working with computers. In 2018 I started working
            with HTML and CSS to make some minor edits on a small business website
            that I was operating. What I thought was just a few small edits
            turned into a love for programming.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive.  I am
            now spending my time building projects with React JS,Next JS , Tailwind CSS ,Firebase, and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer hover:text-blue-900 hover:font-bold'>
              Some of the latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-red-300  rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300 '>
          <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

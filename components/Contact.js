import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

export const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id='contact' className='w-full lg:h-screen '>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
      <p className='text-xl tracking-widest uppercase text-[#473bf3] font-semibold'>
        Contact
      </p>
      <div className='grid lg:grid-cols-5 gap-8'>
        {/* left */}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full '>
            <div className=''>
              <img
                className='rounded-xl hover:scale-105 ease-in duration-300'
                src='https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                alt='/'
              />
            </div>
            <div>
              <h2 className='py-2'>Abhinav Dhama</h2>
              <p>Front-End Developer</p>
              
            </div>
            <div className=''>
              <p className='uppercase pt-8'>Connect With Me</p>
              <div className='flex items-center justify-between py-4 '>
                <a
                  href='https://www.linkedin.com/in/abhinav-dhama-70b211224/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#2c43f4] to-[#b1b1e2]'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/dhama-abhinav'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#2c43f4] to-[#b1b1e2]'>
                    <FaGithub />
                  </div>
                </a>

                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#2c43f4] to-[#b1b1e2]'>
                  <AiOutlineMail />
                </div>
                <Link href='/resume'>
                  <a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#2c43f4] to-[#b1b1e2]'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=' col-span-3 w-full h-auto shadow-xl bg-gradient-to-r text-black  shadow-gray-600 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form
              onSubmit={handleSubmit}
              action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
              method='POST'
            >
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='text-black font-semibold uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 outline-none rounded-lg p-3 flex border-gray-500'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-black font-semibold uppercase text-sm py-2'>
                    Phone Number
                  </label>
                  <input
                    className='border-2 outline-none rounded-lg p-3 flex border-gray-500'
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='text-black font-semibold uppercase text-sm py-2'>Email</label>
                <input
                  className='border-2 outline-none rounded-lg p-3 flex border-gray-500'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className=' text-black font-semibold uppercase text-sm py-2'>Subject</label>
                <input
                  className='border-2 outline-none rounded-lg p-3 flex border-gray-500'
                  type='text'
                  name='subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='text-black font-semibold uppercase text-sm py-2'>Message</label>
                <textarea
                  className='border-2 outline-none rounded-lg p-3 flex border-gray-500'
                  rows='10'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className='w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#2c43f4] to-[#b1b1e2]'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-12 '>
        <Link href='/'>
          <a>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#2c43f4] to-[#b1b1e2]'>
              <HiOutlineChevronDoubleUp
                className='text-white '
                size={30}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  </div>
);
};
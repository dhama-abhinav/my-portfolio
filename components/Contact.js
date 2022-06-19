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
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Contact
      </p>
      <h2 className='py-4'>Get In Touch</h2>
      <div className='grid lg:grid-cols-5 gap-8'>
        {/* left */}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full '>
            <div className=''>
              <img
                className='rounded-xl hover:scale-105 ease-in duration-300'
                src='https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#6c1956] to-[#fed3e6]'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/dhama-abhinav'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#6c1956] to-[#fed3e6]'>
                    <FaGithub />
                  </div>
                </a>

                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#6c1956] to-[#fed3e6]'>
                  <AiOutlineMail />
                </div>
                <Link href='/resume'>
                  <a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#6c1956] to-[#fed3e6]'>
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=' col-span-3 w-full h-auto shadow-xl bg-gradient-to-r from-[#6c1956] to-[#fed3e6] shadow-gray-400 rounded-xl lg:p-4'>
          <div className='p-4'>
            <form
              onSubmit={handleSubmit}
              action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
              method='POST'
            >
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                  <label className='text-white uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='text-white uppercase text-sm py-2'>
                    Phone Number
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label className='text-white uppercase text-sm py-2'>Email</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className=' text-white uppercase text-sm py-2'>Subject</label>
                <input
                  className='border-2 rounded-lg p-3 flex border-gray-300'
                  type='text'
                  name='subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='text-white uppercase text-sm py-2'>Message</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows='10'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className='w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#f025ba] to-[#fa2484]'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-12 '>
        <Link href='/'>
          <a>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#6c1956] to-[#fed3e6]'>
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
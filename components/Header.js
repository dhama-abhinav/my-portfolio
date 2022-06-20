import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineContacts,
  AiFillHome,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdContactPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaProjectDiagram } from "react-icons/fa";
import { BsFillPersonFill, BsFillPersonLinesFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="fixed bg-white w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2">
        <div className=" relative flex items-center h-10 cursor-pointer my-auto">
          <h1 className="font-serif text-black font-semibold text-4xl ">
            a<span className="text-red-700">B</span>
          </h1>
        </div>
        {/* <h1>
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
            </h1> */}
        <div>
          <ul className="hidden  md:flex items-center">
            <Link href="/">
              <li className="ml-10 text-sm uppercase ">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase ">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase ">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase ">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase ">Contact</li>
            </Link>
          </ul>
          <div onClick={handleSidebar} className="md:hidden cursor-pointer ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          sidebar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            sidebar
              ? "fixed left-0 top-0 w-[50%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <div className=" relative flex items-center h-10 cursor-pointer my-auto">
                <h1 className="font-serif text-black font-semibold text-4xl ">
                  a<span className="text-red-700">B</span>
                </h1>
              </div>

              <div
                onClick={handleSidebar}
                className="cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%]">Lets build something...</p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <div
                  className="flex items-center "
                >
                  <AiFillHome />
                  <li  onClick={() => setSidebar(false)} className="w-[80px] ml-2 py-4 text-sm uppercase font-semibold ">
                    Home
                  </li>
                </div>
              </Link>
              <Link href="/#about">
                <div
                  className="flex items-center"
                >
                  <BsFillPersonFill />
                  <li onClick={() => setSidebar(false)}  className="ml-2 w-[80px] py-4 text-sm uppercase font-semibold ">
                    About
                  </li>
                </div>
              </Link>
              <Link href="/#skills">
                <div
                  className="flex items-center"
                >
                  <GiSkills />
                  <li onClick={() => setSidebar(false)}  className="ml-2 w-[80px] py-4 text-sm uppercase font-semibold ">
                    Skills
                  </li>
                </div>
              </Link>
              <Link href="/#projects">
                <div
                  className="flex items-center"
                >
                  <FaProjectDiagram />
                  <li onClick={() => setSidebar(false)}  className="ml-2 w-[80px] py-4 text-sm uppercase font-semibold ">
                    Projects
                  </li>
                </div>
              </Link>
              <Link href="/#contact">
                <div
                  className="flex items-center"
                >
                  <MdContactPhone />
                  <li onClick={() => setSidebar(false)}  className="ml-2 w-[80px] py-4 text-sm uppercase font-semibold ">
                    Contact
                  </li>
                </div>
              </Link>
            </ul>
            <div className="pt-32">
              <p className="font-bold uppercase tracking-widest text-[#5651e5]">
                Lets connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                {/* <div className='cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div> */}
                <a
                  onClick={() => setSidebar(false)}
                  href="https://github.com/dhama-abhinav"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaGithub />
                  </div>
                </a>
                <div
                  onClick={() => setSidebar(false)}
                  className="cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail />
                </div>
                <a
                  onClick={() => setSidebar(false)}
                  href="https://www.linkedin.com/in/abhinav-dhama-70b211224/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaLinkedin />
                  </div>
                </a>

                <Link onClick={() => setSidebar(false)} href="/resume.pdf">
                  <div className="cursor-pointer rounded-full shadow-lg shadow-gray-500 p-3 hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

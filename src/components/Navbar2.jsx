import { useState, useEffect, useRef } from 'react'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { IoDocumentText } from 'react-icons/io5'

import { IconContext } from "react-icons";

import '../App.css';
import './ref.css';

const TopBar2 = ({ barRef, scroller }) => {

  return (
    <div ref={barRef} className="navbar bg-base-100 dark:bg-gray-800 nav z-[1000] fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48">
            <li>
              <a href="https://www.linkedin.com/in/gabriel-bennett-brandt/" className="rounded-[1000px] hover:bg-gray-200">

                LinkedIn
              </a>
            </li>
            <li><a className="rounded-[1000px] hover:bg-gray-200 ">

              Github
              </a></li>
            <li>
              <a className="">

                View resume
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a title="LinkedIn" href="https://www.linkedin.com/in/gabriel-bennett-brandt/" className="rounded-[1000px] hover:bg-gray-200">
              <div className="rounded-[1000px] scale-[150%]">
                <ImLinkedin />
              </div>
            </a>
          </li>
          <li><a title="Github" href="https://github.com/gbb1" className="rounded-[1000px] hover:bg-gray-200">
            <div className="rounded-[1000px] scale-[150%]">
              <FaGithub />
            </div>
            </a></li>
            <li><a title="Resume" href="https://docs.google.com/document/d/1ivp3T9r42I55LnupSHLONfWlL2pfw2ZtWDLzAZCxBbk/edit?usp=sharing" className="rounded-[1000px] hover:bg-gray-200">
            <div className="rounded-[1000px] scale-[150%]">
              <IoDocumentText />
            </div>
            </a></li>
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-2">
        <a className="">
          <button
            onClick={(e) => {
              e.preventDefault()
              scroller()
            }}
            className="justify-self-end py-3 px-5 md:mr-5 bg-black text-xs md:text-sm font-medium text-center text-white dark:text-gray-200 rounded-lg bg-primary-700 sm:w-fit hover:bg-[#5CDB95] hover:text-black ">Get in touch</button>
        </a>
      </div>
    </div>


  )
}

export default TopBar2;

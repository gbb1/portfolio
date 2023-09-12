
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { useRef } from 'react'

import '../App.css';
import './ref.css';

const TopBar2 = ({ barRef, scroller }) => {

  const menuRef = useRef(null);

  return (
  // <div className="flex flex-row justify-center">
    <div ref={barRef} className="navbar bg-base-100 dark:bg-gray-800 nav z-[13] sticky top-0 box-border">
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
            <li><a href="https://github.com/gbb1" className="rounded-[1000px] hover:bg-gray-200 ">

              Github
              </a></li>
            <li>
              <a href="https://drive.google.com/file/d/1RjDptTqouGQgILhTy2MIXARcYXZuB5Hx/view?usp=sharing" className="rounded-[1000px] hover:bg-gray-200 ">

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
            <li><a title="Resume" href="https://drive.google.com/file/d/1RjDptTqouGQgILhTy2MIXARcYXZuB5Hx/view?usp=sharing" className="rounded-[1000px] hover:bg-gray-200">
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
            className="justify-self-end py-3 px-5 mr-2 md:mr-5 bg-black text-xs md:text-sm font-medium text-center text-white dark:text-gray-200 rounded-lg bg-primary-700 sm:w-fit md:hover:bg-[#5CDB95] md:hover:text-black  active:hover:bg-[#5CDB95] active:hover:text-black">Get in touch</button>
        </a>
      </div>
    </div>
  // </div>

  )
}

export default TopBar2;

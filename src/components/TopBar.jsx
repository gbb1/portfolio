import { useState, useEffect, useRef } from 'react'
import { ImLinkedin } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { IoDocumentTextOutline } from 'react-icons/io5'

import { IconContext } from "react-icons";

import '../App.css';
import './ref.css';

const TopBar = ({ barRef }) => {

  // const barRef = useRef(null)

  // const handleScroll = (event) => {
  //   console.log(event.currentTarget.scrollTop);
  // };



  return (
    <div ref={barRef} className="bg-white nav z-[10] flex flex-row w-full fixed justify-end items-center h-min max-h-[12vh] md:h-[4vh] md:max-h-min md:p-8 border-box">
{/*
      <div className="scale-[150%] min-h-min">
        <ImLinkedin />
      </div>

      <div className="scale-[150%] min-h-min">
        <FaGithub />
      </div> */}
      <div className="w-full rounded-[20px] justify-between items-center flex flex-row p-2 "> {/* glassy */}
        {/* <ul className="menu menu-horizontal bg-transparent rounded-box">
          <li>
            <a className="rounded-[10000px] w-12 h-12">
              <div className="scale-[150%] min-h-min">
                <ImLinkedin color="black" />
              </div>
            </a>
          </li>
          <li>
            <a className="rounded-[10000px] w-12 h-12">
              <div className="scale-[150%] min-h-min">
                <FaGithub color="black" />
              </div>
            </a>
          </li>
        </ul> */}
        <div className="flex flex-row gap-2 items-center  w-full justify-between">
          <div className="flex flex-row gap-4 md:gap-10">

            <a className="scale-[150%] rounded-lg hover:bg-green-400">
              <ImLinkedin />
            </a>
            <IconContext.Provider value={{ className: "hover:bg-black hover:color-green-200 scale-[150%] rounded-sm" }}>
                <ImLinkedin />
            </IconContext.Provider>
            <a className="scale-[150%] rounded-lg hover:bg-green-400">
              <FaGithub />
            </a>
          </div>

          <div className="flex flex-row gap-2">
          <button className="justify-self-end py-3 px-5 bg-black text-xs md:text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-green-400 hover:text-black dark:bg-primary-600 dark:hover:bg-primary-700">Get in touch</button>
          <button className="justify-self-end py-3 px-5 bg-black text-xs md:text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-green-400 hover:text-black dark:bg-primary-600 dark:hover:bg-primary-700">View resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;



/*
          <button className="justify-self-end rounded-[1000px] bg-black text-[12px] md:text-xs px-2 py-2 md:px-3 md:py-3 outline-none text-white hover:bg-green-400 hover:text-black transition-all">View resume</button>

<div className="shadow-lg rounded-[1000px] bg-white p-2 px-4 items-center flex flex-row gap-4">
        <ul className="menu menu-horizontal bg-transparent rounded-box">
          <li>
            <a className="rounded-[10000px] w-12 h-12">
              <div className="scale-[150%] min-h-min">
                <ImLinkedin color="black" />
              </div>
            </a>
          </li>
          <li>
            <a className="rounded-[10000px] w-12 h-12">
              <div className="scale-[150%] min-h-min">
                <FaGithub color="black" />
              </div>
            </a>
          </li>
        </ul>

        <button className="btn justify-self-end rounded-[1000px] bg-black">Get in touch</button>
        <button className="btn justify-self-end rounded-[1000px] bg-black">View resume</button>
      </div>
    </div>


    <div className="bg-transparent z-[1000] flex flex-row w-full fixed justify-end items-center h-[6vh] p-2 md:p-10 border-box">
{/*
      <div className="scale-[150%] min-h-min">
        <ImLinkedin />
      </div>

      <div className="scale-[150%] min-h-min">
        <FaGithub />
      </div> */
    //   <div className="shadow-lg rounded-[1000px] bg-white p-2 px-4 items-center flex flex-row gap-4">
    //     <ul className="menu menu-horizontal bg-transparent rounded-box">
    //       <li>
    //         <a className="rounded-[10000px] w-12 h-12">
    //           <div className="scale-[150%] min-h-min">
    //             <ImLinkedin color="black" />
    //           </div>
    //         </a>
    //       </li>
    //       <li>
    //         <a className="rounded-[10000px] w-12 h-12">
    //           <div className="scale-[150%] min-h-min">
    //             <FaGithub color="black" />
    //           </div>
    //         </a>
    //       </li>
    //     </ul>

    //     <button className="justify-self-end rounded-[1000px]">Get in touch</button>
    //     <button className="justify-self-end rounded-[1000px]">View resume</button>
    //   </div>
    // </div>

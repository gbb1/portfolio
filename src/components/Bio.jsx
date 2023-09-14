import { useState, useEffect, useRef } from 'react'
// import background from '../assets/background.avif'
// import { BiLogoTypescript, BiLogoReact } from 'react-icons/bi'

import profile from '../assets/profile.png'


const Bio = ({ scroll }) => {

  const viewportHeight = window.innerHeight;

  // const percentage = scroll >= 0 ? Math.min(100, viewportHeight * 2 / scroll) : 100
  const percentage = 100

  return (
   <div className={`absolute w-full h-full z-[9] flex flex-col items-start ease-in-out opacity-[${percentage}%]`} style={{ translate: `0px ${scroll}px`}}>
    <div className="mt-6 flex flex-col bg-white bg-opacity-[0%] items-start gap-2 relative">
      <div className="flex flex-row relative justify-items-start justify-start items-start grid w-full px-4 pt-4">
        <img className="object-cover max-w-[100px] max-h-[100px] w-[20vw] md:w-[10vw] rounded-full border-[2px] dark:border-gray-900" src={profile} />
      </div>
      <div className="flex flex-row relative justify-items-start justify-start items-start grid w-full px-4">
        <div className="dark:text-gray-200 dark:bg-gray-900 font-bold text-xl dark:text-gray-200 text-black w-full px-3 py-2 bg-white w-max rounded-[16px] rounded-bl-none">
          Hi! I'm Gabe.
        </div>
      </div>
      <div className="flex flex-row relative justify-items-start justify-start items-start grid w-full px-4">
        <div className="dark:text-gray-200 dark:bg-gray-900 font-normal text-[11px] py-2 font-light text-black md:text-sm dark:text-gray-200 px-3 bg-white max-w-full rounded-[16px] rounded-bl-none">
          I'm a fullstack engineer with a background in Stats and Linguistics, and professional experience in UX design and marketing.
        </div>
      </div>
      {/* <div className="flex flex-row relative justify-items-start justify-start items-start grid w-full px-4">
        <button className="py-3 px-5 mr-2 md:mr-5 bg-black text-xs md:text-sm font-medium text-center text-white dark:text-gray-200 rounded-lg bg-primary-700 sm:w-fit md:hover:bg-[#5CDB95] md:hover:text-black  active:hover:bg-[#5CDB95] active:hover:text-black">
          See projects
        </button>
      </div> */}
    </div>
   </div>
  )

}

export default Bio

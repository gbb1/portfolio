import { useState, useEffect, useRef } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'


import '../App.css';



const Footer = ({ scroller }) => {

  return (
    <div className="w-full bg-transparent flex justify-center flex-col mb-10 shadow-lg">

      <div className="flex flex-col bg-white dark:bg-gray-900 dark:text-gray-200 p-4 md:p-6 items-center rounded-[20px] w-full gap-2">

        <div className="font-normal text-2xl md:text-6xl mb-2 mt-2 h-min">
          🤝
        </div>


        <div className="font-normal text-base md:text-2xl">
          Thanks for stopping by!
        </div>

        <div className="text-xs md:text-base">
          Designed by Gabe Bennett-Brandt
        </div>

        <div className="md:text-24 self-center p-2 mt-2" onClick={scroller}>
          <BsArrowUpCircle style={{ fontSize: '32px' }} />
        </div>


      </div>
    </div>
  )
}

export default Footer
import { useState, useEffect } from 'react'

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';

import '../App.css';


export default function Project({ prompt, image, tags, flip, title, description, link, bg }) {

  return (
    <div className="flex flex-col w-full" >
      <div className={`flex flex-col gap-2 bg-white rounded-[20px] w-full shadow-lg p-4 md:p-6`}>

        <div className="font-normal text-base md:text-2xl mb-2 mt-2">
          {prompt}
        </div>

        <div className="font-extrabold text-md md:text-2xl mb-0 ">
            {title}
          </div>

          <img src={image} className={`rounded-lg shadow-lg bg-[${bg}]`} />

          <div className="flex flex-row gap-2 w-full mt-2">
            {
              tags.map((t, i) => {
                return (
                  <div key={t[0] + ',' + i} className="badge text-[10px] md:text-[16px]">{t}</div>
                )
              })
            }
          </div>

          <div className="font-normal text-[12px] md:text-xl mb-2 font-light">
            {description}
          </div>

          {
            link.length > 0
              ?
                <button className="z-[10] self-end py-3 px-5 bg-black text-xs md:text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-[#5CDB95] hover:text-black dark:bg-primary-600 dark:hover:bg-primary-700">
                  <a href={`${link}`} className="w-full h-full">
                    See details
                  </a>
                </button>
              : <button className="disabled opacity-70 bg-gray-200 self-end py-3 px-5 text-xs md:text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-gray-400 hover:text-black dark:bg-primary-600 dark:hover:bg-primary-700">Launching soon!</button>
          }
      </div>
    </div>
  )
}

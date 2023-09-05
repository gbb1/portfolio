/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion';
// import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';

import '../App.css';
import './ref.css';

import Profile from '../assets/ProfileNew.png'
import Overview from '../assets/OverviewBlank.png'
// import Hooks from '../assets/hooks.png'
import Attenda from '../assets/attendaLogo.png'
import Icons from '../assets/icons3.png'
import Diggr from '../assets/diggr2.png'

const AboutMe = ({ scroller4, scroller2, scrollToProjRef, scrollToDiggr, oRef }) => { //scroller4

  const handleClick = (event) => {
    // console.log('clicked')
    event.preventDefault();
    if (event.target.id === 'diggrClick') {
      scrollToDiggr();
    } else {
      scrollToProjRef(oRef)
    }
  }

  return (

    <div className="flex flex-col max-h-min gap-2 pt-2 h-min md:max-h-[600px] z-1 md:h-min ">
      <div className="font-bold md:text-4xl text-xl dark:text-gray-200">
        Hi! I'm Gabe.
      </div>
      <div className="font-normal text-[12px] font-light md:text-xl mb-2 dark:text-gray-200">
        I'm a fullstack engineer with a background in Stats and Linguistics, and professional experience in UX design and marketing.
      </div>
      <div className="max-h-min md:max-h-[500px] md:h-[80%] rounded-[20px] flex flex-col gap-2 md:hover:gap-6 hover:gap-4 hover:mb-2 transition-all duration-100">
        <div className = "flex flex-row justify-between gap-2 md:hover:gap-6 hover:gap-4 focus:gap-6 md:h-[200px] focus:h-[25vh] transition-all duration-100 md:max-h-[20vh]">
          {/*  */}
          <div className="w-[33%] md:hover:w-[36%] focus:w-[36%] rounded-[20px] transition-all duration-100">
            <Tilt className="w-full h-full rounded-[20px] ">

              <img
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Profile}
                className="rounded-[20px] bg-[#1D3557] w-full h-full object-cover select-none"
              />

            </Tilt>
          </div>
          {/*  */}
          <Tilt className="w-[66%] rounded-[20px] md:hover:w-[70%] focus:w-[70%] transition-all duration-100">

            <img
              onClick={handleClick}
              options={{
                max: 45,
                scale: 1,
                speed: 30,
              }}
              src={Overview}
              className="rounded-[20px] bg-[#379683] w-full h-full object-cover select-none"
            />

          </Tilt>

        </div>
        <div id="diggrClick" className = "flex flex-row justify-between gap-2 md:hover:gap-6 hover:gap-4 focus:gap-6 md:h-[200px] transition-all duration-100 md:max-h-[20vh]">
          {/*  */}
          <Tilt className="w-[66%] rounded-[20px] md:hover:w-[70%] focus:w-[70%]">

              <img
                onClick={handleClick}
                id="diggrClick"
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Diggr}
                className="rounded-[20px] bg-[#8ee4af] w-full h-full object-cover select-none"
              />

          </Tilt>
          {/*  */}
          <div id="experience" className="w-[33%] rounded-[20px] md:hover:w-[36%] focus:w-[36%] transition-all duration-100" onClick={scroller4}>
            <Tilt className="w-full h-full rounded-[20px]">

              <img
                id="experience"
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Icons}
                className="rounded-[20px] w-full bg-[#5cdb95] h-full object-cover select-none"
              />

            </Tilt>
          </div>
        </div>
      </div>

    </div>

  )
}

export default AboutMe;

import { BsArrowUpCircle } from 'react-icons/bs'

import '../App.css';

import { useState, useEffect, useRef } from 'react'


import useTyper from '../hooks/useTyper'
import useObserver from '../hooks/useObserver'

import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';


const Footer = ({ scroller }) => {

  const ref = useRef(null)
  const observer = useObserver(ref, { freezeOnceVisible: true, threshold: 0.6});
  const text1 = useTyper("Thanks for stopping by!", observer?.isIntersecting, false)
  const text2 = useTyper("Designed by Gabe Bennett-Brandt", observer?.isIntersecting, false)

  const style = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateY(10%)' },
    to: {
      opacity: observer?.isIntersecting ? 1 : 0,
      transform: observer?.isIntersecting ? 'translateY(0%)' : 'translateY(10%)',
    },
    delay: 50,
  });

  return (
    <animated.div ref={ref} style={style} className="w-full bg-transparent flex justify-center flex-col mb-10 shadow-lg rounded-lg md:rounded-[20px]">

      <div className="flex flex-col bg-white dark:bg-gray-900 dark:text-gray-200 p-4 md:p-6 items-center rounded-lg md:rounded-[20px] w-full gap-2">

        <div className="font-normal text-2xl md:text-6xl mb-2 mt-2 h-min">
          🤝
        </div>


        <div className="font-normal text-base md:text-2xl">
         {text1}
        </div>

        <div className="text-xs md:text-base">
          {text2}
        </div>

        <div className="md:text-24 self-center p-2 mt-2 cursor-pointer z-auto" onClick={scroller}>
          <BsArrowUpCircle style={{ fontSize: '32px' }} />
        </div>


      </div>
    </animated.div>
  )
}

export default Footer
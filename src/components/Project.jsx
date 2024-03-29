import { useState, useEffect, useRef } from 'react'

import '../App.css';
import useObserver from '../hooks/useObserver'
import useTyper from '../hooks/useTyper'

import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';


export default function Project({ prompt, image, tags, flip, title, description, link, bg }) {

  const projRef = useRef(null)
  const observer = useObserver(projRef, { freezeOnceVisible: true, threshold: 0.4 });
  const prompt_typed = useTyper(prompt, observer?.isIntersecting, false)

  const style = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateY(10%)' },
    to: {
      opacity: observer?.isIntersecting ? 1 : 0,
      transform: observer?.isIntersecting ? 'translateY(0%)' : 'translateY(10%)',
    },
    delay: 50,
  });

  const aRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    if (aRef.current) aRef.current.click();
  }

  return (
    <animated.div ref={projRef} style={style} className="flex flex-col w-full dark:text-gray-200" >
      <div className={`flex flex-col gap-2 bg-white dark:bg-gray-900 rounded-lg md:rounded-[20px] w-full shadow-lg p-4 md:p-6`}>

        <div className="font-normal text-base md:text-2xl mb-2 mt-2">
          {prompt_typed}
        </div>

        <div className="font-extrabold text-md md:text-2xl mb-0 ">
            {title}
          </div>

          <img src={image} className={`rounded-lg shadow-lg bg-[${bg}]`} />

          <div className="flex flex-row flex-wrap gap-2 w-full mt-2">
            {
              tags.map((t, i) => {
                return (
                  <div key={t[0] + ',' + i} className="badge text-[10px] md:text-[16px] dark:bg-gray-200 dark:text-gray-900">{t}</div>
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
                <a href={`${link}`} ref={aRef} className="z-[8] self-end py-3 px-5 bg-black text-xs md:text-sm font-medium text-center dark:text-gray-200 text-white rounded-lg bg-primary-700 sm:w-fit md:hover:bg-[#5CDB95] md:hover:text-black  active:hover:bg-[#5CDB95] active:hover:text-black">
                  <button onClick={handleClick} className="w-full h-full">
                      See details
                  </button>
                </a>
              : <button className="disabled opacity-70 bg-gray-200 self-end py-3 px-5 text-xs md:text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-gray-400 hover:text-black dark:bg-primary-600 dark:hover:bg-primary-700">Launching soon!</button>
          }
      </div>
    </animated.div>
  )
}

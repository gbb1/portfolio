import { useState, useEffect, useRef } from 'react'

import '../App.css';
import Job from './Job'
import HR from '../assets/hr.png'

import useTyper from '../hooks/useTyper'
import useObserver from '../hooks/useObserver'

import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';

export default function HackReactor() {

  const ref = useRef(null)
  const observer = useObserver(ref, { freezeOnceVisible: true, threshold: 0.4});
  const title = useTyper("I just completed...", observer?.isIntersecting, false)

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
    <animated.div ref={ref} style={style} className="flex flex-col w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-lg md:rounded-[20px] shadow-lg p-4 md:p-6 gap-2">
      <div className="font-normal text-base md:text-2xl mb-2 mt-2">
        {title}
      </div>
      <Job image={HR} company={"Hack Reactor"} descriptions={['Bootcamp', 'AGILE']} title={'Software Engineer'} dateRange={'2022 - 2023'} />
    </animated.div>
  )
}
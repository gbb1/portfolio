import { useState, useEffect, useRef } from 'react'

import '../App.css';
import './ref.css';

import useTyper from '../hooks/useTyper'
import useObserver from '../hooks/useObserver'

import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';

const Survey = () => {

  const [choice, setChoice] = useState(null);
  const [votes, setVotes] = useState({
    1: 5,
    2: 10,
    3: 85,
    'correct': 3,
  })

  const ref = useRef(null)
  const observer = useObserver(ref, { freezeOnceVisible: true, threshold: 0.4});
  const title = useTyper("Two truths and a lie...", observer?.isIntersecting, false)

  const style = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateY(10%)' },
    to: {
      opacity: observer?.isIntersecting ? 1 : 0,
      transform: observer?.isIntersecting ? 'translateY(0%)' : 'translateY(10%)',
    },
    delay: 50,
  });


  const handleClick = (event) => {
    event.preventDefault();
    if (choice === null) {
      setChoice(Number(event.target.id))
    }
  }

  return (
    <animated.div ref={ref} style={style} className="flex flex-col gap-2 w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-lg md:rounded-[20px] shadow-lg p-4 md:p-6">
      <div className="font-normal text-base md:text-2xl mb-2 mt-2">
        {title}
      </div>
      <div>
        <ul className="menu w-full rounded-box gap-2 box-border">
          <div className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" onClick={handleClick}>
            <div className="flex">
              <div id={1} className={`text-[12px] md:text-base ${(choice !== 1 && choice) ? `opacity-70` : ''} transition-all rounded-lg border-2 dark:border-gray-600 box-border px-4 py-3 w-full cursor-pointer select-none`}>
              I reduced latency by over 95% with PostgreSQL aggregation queries, denormalization, and indexing.
              </div>
              <div className={`bg-green-200 ${choice ? `w-[${votes[1]}%] slide-in ` : 'w-[0px]'} ${votes.correect === 1 ? `bg-green-200` : 'bg-red-200'} -ml-[100%] rounded-lg opacity-50`}>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" onClick={handleClick}>
            <div className="flex">
              <div id={2} className={`text-[12px] md:text-base ${(choice !== 2 && choice) ? `opacity-70` : ''} transition-all rounded-lg border-2 dark:border-gray-600 box-border px-4 py-3 w-full cursor-pointer select-none`}>
              I helped Facebook acquire 50K+ advertisers by supporting UI/UX for over 20 growth products and features.
              </div>
              <div className={`bg-green-200 ${choice ? `w-[${votes[2]}%] slide-in ` : 'w-[0px]'} ${votes.correect === 2 ? `bg-green-200` : 'bg-red-200'} -ml-[100%] rounded-lg opacity-50`}>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" onClick={handleClick}>
            <div className="flex">
              <div id={3} className={`text-[12px] md:text-base ${(choice !== 3 && choice) ? `opacity-70` : ''} transition-all rounded-lg border-2 dark:border-gray-600 box-border px-4 py-3 w-full cursor-pointer select-none`}>
                Correlation actually does imply causation.
              </div>
              <div className={`${choice ? `w-[${votes[3]}%] slide-in ` : 'w-[0px]'} ${votes.correct === 3 ? `bg-green-200` : 'bg-red-200'} -ml-[100%] rounded-lg opacity-50`}>
              </div>
            </div>
          </div>
          {/*  */}
        </ul>
      </div>

    </animated.div>
  )
}

export default Survey;
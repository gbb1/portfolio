
import { useState, useRef } from 'react'

import useTyper from '../hooks/useTyper'
import useObserver from '../hooks/useObserver'

import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';

const Contact = () => {

  const [subject, setSubject] = useState('Let\'s connect 👋');
  const [message, setMessage] = useState('');

  const ref = useRef(null)
  const observer = useObserver(ref, { freezeOnceVisible: true, threshold: 0.4 });
  const title = useTyper("Get in touch", observer?.isIntersecting, false)


  const handleInput = (event) => {
    event.preventDefault();
    const actions = {
      'subject': () => setSubject(event.target.value),
      'message': () => setMessage(event.target.value),
    }
    actions[event.target.id]();
  }

  return (

    <section ref={ref} className="bg-white dark:bg-gray-900 rounded-lg md:rounded-[20px] shadow-lg">
      <div className="p-4 md:p-6 mx-auto max-w-screen-md">
          <div className="font-normal text-base md:text-2xl mt-2 mb-3 md:mb-6 dark:text-gray-200">
            {title}
          </div>
          <form action="#" className="space-y-5 flex flex-col ">
              <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Subject</label>
                  <input onChange={handleInput}  type="text" id="subject" className="block p-3 w-full text-[12px] md:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" value="Let's connect 👋" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Your message</label>
                  <textarea onChange={handleInput} id="message" rows="6" className="block p-2.5 w-full text-[12px] md:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="We'd make a great team..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 self-end bg-black text-xs md:text-sm font-medium text-center dark:text-gray-200 text-white rounded-lg bg-primary-700 sm:w-fit md:hover:bg-[#5CDB95] md:hover:text-black  active:hover:bg-[#5CDB95] active:hover:text-black ">
                <a href = {`mailto:gbennettbrandt@gmail.com?subject=${subject}&body=${message}`}>
                Send message
                </a>
              </button>
          </form>
      </div>
    </section>
  )
}

export default Contact
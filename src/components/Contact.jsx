
import { useState, useEffect } from 'react'

const Contact = () => {

  // const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('Let\'s connect 👋');
  const [message, setMessage] = useState('');

  const handleInput = (event) => {
    event.preventDefault();
    const actions = {
      // 'email': () => setAddress(event.target.value),
      'subject': () => setSubject(event.target.value),
      'message': () => setMessage(event.target.value),
    }
    actions[event.target.id]();
  }

  return (

    <section className="bg-white dark:bg-gray-900 rounded-[20px] shadow-lg">
      <div className="p-4 md:p-6 mx-auto max-w-screen-md">
          <div className="font-normal text-base md:text-2xl mt-2 mb-3 md:mb-6 dark:text-gray-200">
            Get in touch
          </div>
          <form action="#" className="space-y-8 flex flex-col ">
              {/* <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">Your email</label>
                  <input onChange={handleInput} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[12px] md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
              </div> */}
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
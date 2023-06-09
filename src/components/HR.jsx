import { useState, useEffect } from 'react'

import '../App.css';
import Job from './Job'
import HR from '../assets/hr.png'

export default function HackReactor() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-[20px] shadow-lg p-4 md:p-6 gap-2">
      <div className="font-normal text-base md:text-2xl mb-2 mt-2">
        I just completed...
      </div>
      <Job image={HR} company={"Hack Reactor"} descriptions={['Bootcamp', 'AGILE']} title={'Software Engineer'} dateRange={'2022 - 2023'} />
    </div>
  )
}
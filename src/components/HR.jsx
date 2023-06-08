import { useState, useEffect } from 'react'

import '../App.css';
import Job from './Job'
import Facebook from '../assets/facebook.png'
import Koalafi from '../assets/Koalafi.png'
import HR from '../assets/hr.png'

export default function HackReactor() {
  return (
    <div className="flex flex-col w-full bg-white rounded-[20px] shadow-lg p-4 md:p-6 gap-2">
      <div className="font-normal text-base md:text-2xl mb-2 mt-2">
        I just graduated from...
      </div>
      <Job image={HR} company={"Hack Reactor"} descriptions={['Bootcamp', 'AGILE']} title={'Software Engineer'} dateRange={'2022 - 2023'} />
    </div>
  )
}
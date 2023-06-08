import { useState, useEffect } from 'react'

import '../App.css';
import './ref.css';
import Facebook from '../assets/facebook.png'

const Job = ({ image, company, descriptions, title, dateRange }) => {

  return (
    <div className="border-2 dark:border-gray-600 flex flex-row gap-2 md:gap-6 p-2 md:p-4 rounded-lg">
      <img className="circle-img " src={image} />
      <div className="flex flex-col w-full">
        <div className="flex flex-row flex-wrap justify-between w-full mb-2 md:mb-0">
          <div className="font-bold text-sm md:text-lg">{company}</div>
          <div className="flex flex-row gap-2 flex-wrap">
            {
              descriptions.map((d, index) => {
                return (
                  <div key={d[0] + ',' + index} className="badge text-[10px] md:text-[16px] dark:bg-gray-200 dark:text-gray-900">{d}</div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="text-[12px] md:text-base font-light">{title}</div>
          <div className="text-[12px] md:text-base font-light">{dateRange}</div>
        </div>
      </div>
    </div>
  )
}

export default Job;
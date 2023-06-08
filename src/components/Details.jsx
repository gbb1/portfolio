import { useState, useEffect } from 'react'
import { LuGraduationCap } from 'react-icons/lu'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdOutlineCake } from 'react-icons/md'
import { GrCode } from 'react-icons/gr'
import { HiCodeBracket } from 'react-icons/hi2'
import { HiOutlineDatabase } from 'react-icons/hi'

import '../App.css';
import './ref.css';

const Details = () => {

  return (
    <div className="flex flex-col w-full bg-white dark:text-white dark:bg-gray-900 rounded-[20px] shadow-lg p-4 md:p-6">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center gap-3">
          <MdOutlineCake className="icon"  />
          <span className="text-[12px] md:text-[16px]">26</span>
        </div>
        <hr className="bg-base-300 rounded-[100px] mx-2 md:mx-4 dark:bg-white" style={{ height: '100%', width: '2px' }}></hr>
        <div className="flex flex-row items-center gap-3">
          <HiOutlineLocationMarker className="icon" />
          <span className="text-[12px] md:text-[16px]">Open to remote, relocating</span>
        </div>

      </div>
      <hr className="bg-base-300 rounded-[100px] my-2 md:my-4" style={{ height: '2px' }}></hr>
      <div className="flex flex-row items-center gap-3">
        <LuGraduationCap className="icon"  />
        <span className="text-[12px] md:text-[16px]">Universtity of Chicago: B.A. Statistics, Linguistics</span>
      </div>
      <hr className="bg-base-300 rounded-[100px] my-2 md:my-4" style={{ height: '2px' }}></hr>
      <div className="flex flex-row items-center gap-3">
        <HiCodeBracket className="icon"  />
        <span className="text-[12px] md:text-[16px]">Javascript, Typescript, React, HTML5, CSS</span>
      </div>
      {/*  */}
      <hr className="bg-base-300 rounded-[100px] my-2 md:my-4" style={{ height: '2px' }}></hr>
      <div className="flex flex-row items-center gap-3">
        <HiOutlineDatabase className="icon" />
        <span className="text-[12px] md:text-[16px]">SQL, PostgreSQL, MongoDB, Firestore</span>
      </div>


    </div>
  )
}

export default Details;
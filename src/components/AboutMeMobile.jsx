/* eslint-disable react/no-unknown-property */
import '../App.css';
import './ref.css';

import Profile from '../assets/ProfileNew.png'
import Overview from '../assets/OverviewBlank.png'
// import Hooks from '../assets/hooks.png'
import Icons from '../assets/icons3.png'
import Diggr from '../assets/diggr2.png'

const AboutMeMobile = ({ scroller4, scroller2, scrollToProjRef, scrollToDiggr, oRef }) => {

  const handleClick = (event) => {
    // console.log('clicked')
    event.preventDefault();
    if (event.target.id === 'diggrClick') {
      scrollToDiggr();
    } else {
      // console.log(oRef.current)
      scrollToProjRef(oRef)
    }
  }


  return (

    <div className="flex flex-col max-h-min gap-2 pt-2 h-min md:max-h-[600px] z-1 md:h-min">
      <div className="font-bold md:text-4xl text-xl dark:text-gray-200">
        Hi! I'm Gabe.
      </div>
      <div className="font-normal text-[12px] font-light md:text-xl mb-2 dark:text-gray-200">
        I'm a fullstack engineer with a background in Stats and Linguistics, and professional experience in UX design and marketing.
      </div>
      <div className="max-h-min md:max-h-[500px] md:h-[80%] rounded-[20px] flex flex-col gap-2 transition-all duration-100">
        <div className = "flex flex-row justify-between gap-2 transition-all duration-100" >
          {/*  */}
          <div className="w-[33%] rounded-[20px] transition-all duration-100" >
              <img
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Profile}
                className="rounded-[20px] bg-[#1D3557] w-full h-full active:opacity-75 rounded-[20px] transition-all duration-10 object-cover "
              />
          </div>
            <img
              onClick={handleClick}
              options={{
                max: 45,
                scale: 1,
                speed: 30,
              }}
              src={Overview}
              className="rounded-[20px] bg-[#379683] w-[66%] rounded-[20px] active:opacity-75  cursor-pointer md:hover:w-[70%] focus:w-[70%] transition-all duration-10 h-full object-cover"
            />
        </div>
        <div id="diggrClick" className = "flex flex-row justify-between gap-2 transition-all duration-100 ">
            <img
              onClick={handleClick}
              id="diggrClick"
              options={{
                max: 45,
                scale: 1,
                speed: 30,
              }}
              src={Diggr}
              className="rounded-[20px] bg-[#8ee4af] h-full w-[66%] active:opacity-75 rounded-[20px] cursor-pointer md:hover:w-[70%] focus:w-[70%] object-cover"
            />
          <div id="experience" className="w-[33%] rounded-[20px] active:opacity-75 transition-all duration-10" onClick={scroller4}>
              <img
                id="experience"
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Icons}
                className="rounded-[20px] w-full bg-[#5cdb95] cursor-pointer h-full object-cover"
              />
          </div>
        </div>
      </div>

    </div>

  )
}

export default AboutMeMobile;

import { useState, useEffect, useRef } from 'react'

import front from '../assets/frontMobile-min.png'
import front2 from '../assets/front2Mobile-min.png'
import mid from '../assets/midMobile-min.png'
import midback from '../assets/midbackMobile-min.png'
import background from '../assets/back-new-mobile.png'
import sky from '../assets/skyMobile-min.png'

import { IoChevronDownOutline } from 'react-icons/io5'

import Bio from './Bio'

import useObserver from '../hooks/useObserver'

import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from '@react-spring/web';


const ParallaxMobile = ({ scroll, scrollTo }) => {
  const parallax = useRef(null)
  const [loading, setLoading] = useState(true)

  const images = [front, front2, mid, midback, background, sky];

  const style = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, transform: 'translateY(10%)' },
    to: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    delay: 50,
  });

  const allImagesLoaded = () => {
    const imageLoadPromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
      });
    });

    return Promise.all(imageLoadPromises);
  }

  useEffect(() => {
    allImagesLoaded().then(() => {
      setLoading(false);
    });
  }, []);



  if (loading) return (
    <div className="animate-pulse w-full h-[60vh] min-h-[450px] rounded-lg bg-gray-200">
      {/* <div className="bg-white max-w-full h-full rounded-lg relative overflow-hidden">
        <Bio scroll={scroll} />
      </div> */}
    </div>
  )


  return (
   <div className="bg-transparent w-full h-[60vh] min-h-[450px] flex flex-col">
    <div ref={parallax} className="bg-transparent max-w-full h-full rounded-lg relative overflow-hidden ">
      <button onClick={scrollTo} className="absolute bottom-4 right-[45%] z-[12] object-bottom bg-white dark:text-gray-200 dark:bg-gray-900 w-[9vw] h-[9vw] max-w-[30px] max-h-[30px] rounded-full backdrop-blur-2px bg-opacity-[20%]">
        <div className="flex flex-row items-center justify-center active:opacity-75">
          <IoChevronDownOutline color="white"/>
        </div>
      </button>
      <img className={`absolute object-top object-cover w-full h-full z-10 slide-up`} style={{ translate: `0px ${43}px`, transform: `scale(1.1) `}} src={front} />
      <img className={`absolute object-top object-cover w-full h-full z-[8] slide-up`} style={{ translate: `0px ${43}px`, transform: `scale(1.1) `}} src={front2} />
      <Bio scroll={scroll} />
      <img className={`absolute object-top object-cover w-full h-full z-[6] slide-up`} style={{ translate: `0px ${43}px`, transform: `scale(1.1)`}} src={mid} />
      {/* <img className={`absolute object-top object-cover w-full h-full z-[4] backdrop-blur-[.5px] slide-up`} style={{ translate: `0px ${45 + .3 * Math.max(0, scroll)}px`, transform: `scale(1.1) translateZ(0)`}} src={midback} /> */}
      <img className={`absolute object-top object-cover w-full h-full z-[2] backdrop-blur-[1px] slide-up`} style={{ translate: `0px ${0}px`, transform: `scale(1.1)`}} src={background} />
      {/* <img className={`absolute object-top object-cover w-full h-full z-0 slide-up`} style={{ translate: `0px 20px`, transform: `scale(1.1)`}} src={sky} /> */}
    </div>
   </div>
  )

}

export default ParallaxMobile


//+ -.15 * Math.max(0, scroll)
// + -.1 * Math.max(0, scroll)
// .2 * Math.max(0, scroll)
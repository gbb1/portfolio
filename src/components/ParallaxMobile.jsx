import { useState, useEffect, useRef } from 'react'

import front from '../assets/front (1).png'
import front2 from '../assets/front2 (2).png'
import mid from '../assets/mid (1).png'
import midback from '../assets/midback (1).png'
import background from '../assets/background (1).png'
import sky from '../assets/sky (1).png'

import { IoChevronDownOutline } from 'react-icons/io5'

import Bio from './Bio'


const ParallaxMobile = ({ scroll, scrollTo }) => {
  const parallax = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

  }, [])

  const images = [front, front2, mid, midback, background, sky];

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

  // useEffect hook to handle image loading
  useEffect(() => {
    // Check if all images are loaded
    allImagesLoaded().then(() => {
      setLoading(false);
    });
  }, []);



  if (loading) return (
    <div className="animate-pulse w-full h-[60vh] rounded-lg bg-gray-200">
      {/* <div className="bg-white max-w-full h-full rounded-lg relative overflow-hidden">
        <Bio scroll={scroll} />
      </div> */}
    </div>
  )


  return (
   <div className="bg-transparent w-full h-[60vh] min-h-[450px] flex flex-col">
    <div ref={parallax} className="bg-transparent max-w-full h-full rounded-lg relative overflow-hidden">
      <button onClick={scrollTo} className="absolute bottom-4 right-[45%] z-[12] object-bottom bg-white dark:text-gray-200 dark:bg-gray-900 w-[9vw] h-[9vw] rounded-full backdrop-blur-2px bg-opacity-[20%]">
        <div className="flex flex-row items-center justify-center">
          <IoChevronDownOutline color="white"/>
        </div>
      </button>
      <img className={`absolute object-top object-cover w-full h-full z-10 slide-up`} style={{ translate: `0px ${.3 * scroll}px`, transform: `scale(1.1)`}} src={front} />
      <img className={`absolute object-top object-cover w-full h-full z-[8] slide-up`} style={{ translate: `0px ${.4 * scroll}px`, transform: `scale(1.1)`}} src={front2} />
      <Bio scroll={scroll} />
      <img className={`absolute object-top object-cover w-full h-full z-[6] slide-up`} style={{ translate: `0px ${.5 * scroll}px`, transform: `scale(1.1)`}} src={mid} />
      <img className={`absolute object-top object-cover w-full h-full z-[4] backdrop-blur-[.5px] slide-up`} style={{ translate: `0px ${.6 * scroll}px`, transform: `scale(1.1)`}} src={midback} />
      <img className={`absolute object-top object-cover w-full h-full z-[2] backdrop-blur-[1px] slide-up`} style={{ translate: `0px ${.8 * scroll}px`, transform: `scale(1.1)`}} src={background} />
      <img className={`absolute object-top object-cover w-full h-full z-0 slide-up`} style={{ translate: `0px 0px`, transform: `scale(1.1)`}} src={sky} />
    </div>
   </div>
  )

}

export default ParallaxMobile

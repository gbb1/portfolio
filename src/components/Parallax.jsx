import { useState, useEffect, useRef } from 'react'


import front from '../assets/front (1).png'
import front2 from '../assets/front2 (2).png'
import mid from '../assets/mid (1).png'
import midback from '../assets/midback (1).png'
import background from '../assets/background (1).png'
import sky from '../assets/sky (1).png'

import Bio from './Bio'
import useObserver from '../hooks/useObserver'

import { IoChevronDownOutline } from 'react-icons/io5'

const ParallaxView2 = ({ scroll, onClick, toDetails }) => {

  const parallax = useRef(null)
  const imageRef = useRef(null)
  const alignCenter = { display: 'flex', alignItems: 'start' }

  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    allImagesLoaded().then(() => {
      setLoading(false);
    });
  }, []);

  const [mousePos, setPos] = useState({x: 0, y: 0});
  const X = window.innerWidth;
  const center = X / 2

  useEffect(() => {
    if (mousePos !== null) {
      const mouseMove = (event) => {
        if (scroll > .7 * window.innerHeight) {
          return
        }

        const height = event.target.offsetHeight;

        const computedStyle = window.getComputedStyle(imageRef.current);
        const marginTop = computedStyle.getPropertyValue('margin-top');
        const marginLeft = computedStyle.getPropertyValue('margin-left');


        const x = event.clientX;
        const y = event.clientY;




        if (y > imageRef.current.clientHeight + marginTop || y < marginTop) {
          return
        }
        if (x < marginLeft || x > X - marginLeft) return

        let deltaX = 30



        let diff = center - x
        let diffY = center - y
        // console.log(diff)
        let pos;

        let newX = (-diff / 50);
        let newY = (-diffY / 50);

        pos = { x: newX, y: newY };
        setPos(pos);

      };

      window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }
  }, [scroll]);


  if (loading) return (
    <div className="animate-pulse w-full h-[50vh] max-h-[50vh] min-h-[300px] rounded-lg bg-gray-200">
      {/* <div className="bg-white max-w-full h-full rounded-lg relative overflow-hidden">
        <Bio scroll={scroll} />
      </div> */}
    </div>
  )


  return (
   <div className="bg-white w-full h-[50vh] max-h-[50vh] min-h-[360px] flex flex-col hover:cursor-pointer">

    <div className="bg-white max-w-full h-full rounded-lg relative overflow-hidden" ref={imageRef}>
      <div className="flex flex-row gap-4 absolute z-[12] bottom-[20px] items-center justify-end grid w-full">
        <button onClick={onClick} className="py-3 px-5 mr-2 md:mr-5 bg-black text-xs md:text-sm font-medium text-center text-white dark:text-gray-200 rounded-lg bg-primary-700 sm:w-fit md:hover:bg-[#5CDB95] md:hover:text-black  active:hover:bg-[#5CDB95] active:hover:text-black">
          See projects
        </button>
      </div>
      {/* <button onClick={scrollTo} className="absolute bottom-4 right-[45%] z-[12] object-bottom bg-white dark:text-gray-200 dark:bg-gray-900 w-[2vw] h-[2vw] rounded-full backdrop-blur-2px bg-opacity-[20%]">
        <div className="flex flex-row items-center justify-center active:opacity-[75] hover:opacity-[75]">
          <IoChevronDownOutline color="white"/>
        </div>
      </button> */}
      <img className={`absolute object-top object-cover w-full h-full z-10 transition-all  duration-100 ease-in-out touch-auto`} style={{ translate: `${.7 * mousePos.x}px ${.6 * mousePos.y}px`, transform: `scale(1.2)`}} src={front} />
      <Bio scroll={scroll} />
      <img className={`absolute object-top object-cover w-full h-full z-[8] transition-all  duration-100 ease-in-out `} style={{ translate: `${.5 * mousePos.x}px ${.4 * mousePos.y}px`, transform: `scale(1.2)`}} src={front2} />
      <img className={`absolute object-top object-cover w-full h-full z-[6] transition-all  duration-100 ease-in-out `} style={{ translate: `${.4 * mousePos.x}px ${.2 * mousePos.y}px`, transform: `scale(1.2)`}} src={mid} />
      {/* <img className={`absolute object-top object-cover w-full h-full z-[4] transition-all  duration-100 ease-in-out backdrop-blur-[.5px]`} style={{ translate: `${.3 *mousePos.x}px ${.3 * mousePos.y}px`, transform: `scale(1.1)`}} src={midback} /> */}
      <img className={`absolute object-top object-cover w-full h-full z-[2] transition-all  duration-100 ease-in-out backdrop-blur-[1px]`} style={{ translate: `${.1 * mousePos.x}px ${.2 * mousePos.y}px`, transform: `scale(1.1)`}} src={background} />
      <img className={`absolute object-top object-cover w-full h-full z-0 transition-all  duration-100 ease-in-out `} style={{ translate: `${.1 * mousePos.x}px ${.05 * mousePos.y}px`, transform: `scale(1.2)`}} src={sky} />
    </div>
   </div>
  )

}

export default ParallaxView2

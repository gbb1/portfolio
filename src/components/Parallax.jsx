import { useState, useEffect, useRef } from 'react'


import front from '../assets/front (1).png'
import front2 from '../assets/front2 (2).png'
import mid from '../assets/mid (1).png'
import midback from '../assets/midback (1).png'
import background from '../assets/background (1).png'
import sky from '../assets/sky (1).png'


const ParallaxView2 = () => {
  const parallax = useRef(null)
  const imageRef = useRef(null)
  const alignCenter = { display: 'flex', alignItems: 'start' }

  const [mousePos, setPos] = useState({x: 0, y: 0});
  const X = window.innerWidth;
  const center = X / 2

  useEffect(() => {
    if (mousePos !== null) {
      const mouseMove = (event) => {
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


        let multiplier = Math.abs(deltaX) * 10 ** 10
        // setScale(multiplier)
        // console.log(multiplier)



        let diff = center - x
        let diffY = center - y
        // console.log(diff)



        // console.log(center)
        // console.log(window.innerWidth)
        // const ratio = event.target.naturalHeight / event.target.naturalWidth;

        // const width = height / ratio;
        // const startX = Math.max((X - width) / 2, 0);
        // const endX = X - startX;

        // let margin = 0;
        let pos;

        let newX = (-diff / 50);
        let newY = (-diffY / 50);
        // console.log(newX)
        // if (newX < startX || newX > endX) {
        //   newX = mousePos;
        // }
        // pos = {
        //   x: newX,
        //   y: y - margin,
        // };
        // }
        pos = { x: newX, y: newY };
        // console.log('setting pos', pos)
        setPos(pos);
      };

      window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }
  }, [mousePos]);

  return (
   <div className="bg-white w-full h-[90vh] flex flex-col">
    <div className="bg-white m-10 max-w-full h-full rounded-lg relative overflow-hidden" ref={imageRef}>
      <img className={`absolute object-top object-cover w-full h-full z-10 transition-all  duration-100 ease-in-out touch-auto`} style={{ translate: `${.7 * mousePos.x}px ${.7 * mousePos.y}px`, transform: `scale(1.1)`}} src={front} />
      <img className={`absolute object-top object-cover w-full h-full z-[8] transition-all  duration-100 ease-in-out `} style={{ translate: `${.5 * mousePos.x}px ${.5 * mousePos.y}px`, transform: `scale(1.1)`}} src={front2} />
      <img className={`absolute object-top object-cover w-full h-full z-[6] transition-all  duration-100 ease-in-out `} style={{ translate: `${.4 * mousePos.x}px ${.4 * mousePos.y}px`, transform: `scale(1.1)`}} src={mid} />
      <img className={`absolute object-top object-cover w-full h-full z-[4] transition-all  duration-100 ease-in-out backdrop-blur-[.5px]`} style={{ translate: `${.3 *mousePos.x}px ${.3 * mousePos.y}px`, transform: `scale(1.1)`}} src={midback} />
      <img className={`absolute object-top object-cover w-full h-full z-[2] transition-all  duration-100 ease-in-out backdrop-blur-[1px]`} style={{ translate: `${.2 * mousePos.x}px ${.2 * mousePos.y}px`, transform: `scale(1.1)`}} src={background} />
      <img className={`absolute object-top object-cover w-full h-full z-0 transition-all  duration-100 ease-in-out `} style={{ translate: `${.15 * mousePos.x}px ${.1 * mousePos.y}px`, transform: `scale(1.1)`}} src={sky} />
    </div>
   </div>
  )

}

export default ParallaxView2

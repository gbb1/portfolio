import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import About from './components3/About';
// import TopBar from './components/TopBar';
import Survey from './components/Survey';
import Details from './components/Details';
import Footer from './components/Footer';
import HackReactor from './components/HR';
import Contact from './components/Contact';
import TopBar2 from './components/NavBar2';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const navRef = useRef(null);
  const backgroundRef = useRef(null);
  const barRef = useRef(null);

  const overviewRef = useRef(null);
  const diggrRef = useRef(null);

  const contactRef = useRef(null);


  const scrollToRef = () => {
    if (navRef.current) {
      navRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToBackground = () => {
    // console.log('clicked this one')
    if (backgroundRef.current) {
      backgroundRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `${backgroundRef.current.offsetTop}`,
      });
    }
  };

  const scrollToDiggr = () => {
    // console.log('clicked this one')
    const element = document.getElementById('Diggr');
    if (element) {
     element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `${element.offsetTop}`,
      });
    }
  };

  const scrollToContact = () => {
    // console.log('clicked this one')
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `${contactRef.current.offsetTop}`,
      });
    }
  };

  const scrollToProjRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `${backgroundRef.current.offsetTop}`,
      });
    }
  }

  const handleScroll = (event) => {
    if (event.target.scrollTop > 0) {
      barRef.current.classList.add('transition-all');
      barRef.current.classList.add('shadow-md');
    } else {
      barRef.current.classList.remove('shadow-md');
      barRef.current.classList.remove('transition-all');
    }
  };

  return (
    <div onScroll={handleScroll} className=" w-screen h-screen bg-gradient-to-b from-white dark:from-gray-800 to-gray-200 dark:to-bg-gray-700 overflow-y-auto">
      <TopBar2 barRef={barRef} scroller={scrollToContact} />
      <div ref={navRef} className="scrollable h-[0px]" ></div>
      <div className="flex justify-center mt-[12vh] md:mt-[10vh]">
        <div className="flex flex-col justify-center max-w-[600px] w-[90%] md:w-[80%] gap-2 md:gap-4">
          <AboutMe scroller4={scrollToBackground} scrollToProjRef={scrollToProjRef} scrollToDiggr={scrollToDiggr} />
          <Details />
          <div ref={backgroundRef} id="experience1" className="scrolledTo" >
            <Experience />
          </div>
          <HackReactor />
          <Survey />
          <div ref={overviewRef} className="scrolledTo-project">
            <Projects />
          </div>
          <div ref={contactRef} className="scrolledTo" >
            <Contact />
          </div>
          <Footer scroller={scrollToRef} />
          <div className="h-[0px]" ></div>
        </div>
      </div>
    </div >
  )
}

export default App

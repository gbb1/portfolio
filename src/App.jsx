/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'

import AboutMe from './components/AboutMe';
import AboutMeMobile from './components/AboutMeMobile';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Survey from './components/Survey';
import Details from './components/Details';
import Footer from './components/Footer';
import HackReactor from './components/HR';
import Contact from './components/Contact';
import TopBar2 from './components/NavBar2';

import Parallax from './components/Parallax'
import ParallaxMobile from './components/ParallaxMobile'

import { getDatabase, ref, set } from "firebase/database";

import { db } from '../firebaseConfig.js';

import './App.css';

function App() {

  const navRef = useRef(null);
  const backgroundRef = useRef(null);
  const barRef = useRef(null);

  const detailsRef = useRef(null);
  const overviewRef = useRef(null);

  const contactRef = useRef(null);

  const [scroll, setScroll] = useState(0)

  const options = {
    threshold: 1,
    rootMargin: "0px 0px -40px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove('appear');
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, options)

  // useEffect(() => {
  //   const faders = document.querySelectorAll('.fade-in')
  //   faders.forEach(fader => {
  //     appearOnScroll.observe(fader);
  //   })

  // }, [])


  // const faders = document.querySelectorAll('.fade-in')

  const scrollToRef = () => {
    console.log('running')
    if (navRef.current) {
      navRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `-100`,
      });
    }
  };

  const scrollToBackground = () => {

    if (backgroundRef.current) {
      backgroundRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `${backgroundRef.current.offsetTop}`,
      });
    }
  };

  const scrollToDetails = () => {

    if (detailsRef.current) {
      const target = detailsRef.current.offsetTop - 100
      detailsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        top: `${detailsRef.current.offsetTop}`,
      });
    }
  };

  const scrollToDiggr = () => {

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

    if (event.target.scrollTop > 0) {
      setScroll(event.target.scrollTop)
    }
  };


  const writeUserData = async (session) => {
    let date = new Date();
    date = date.toString();
    if (session) {
      set(ref(db, 'visits/' + date), {
        start: session,
      });
    } else {
      set(ref(db, 'visits/' + date), {
        end: session,
      });
    }
  }

  useEffect(() => {

    writeUserData(true)
      .catch((err) => console.log(err))


    return () => {
      writeUserData(false)
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <div className=" w-screen min-h-screen bg-gradient-to-b from-white dark:from-gray-800 to-gray-200 dark:to-bg-gray-700 box-border">
      <div onScroll={handleScroll} className=" w-screen h-[100vh] overflow-y-scroll scroll-box">
        <TopBar2 barRef={barRef} scroller={scrollToContact} />
        <div ref={navRef} className="scrollable h-[0px] scrollTarget" ></div>
        <div className="flex justify-center mt-[2vh] md:mt-[4vh]">
          <div className="flex flex-col justify-center max-w-[600px] w-[90%] md:w-[80%] gap-2 md:gap-4">
            <div className="hidden md:block">
              {/* <Parallax /> */}
              <AboutMe scroller4={scrollToBackground} scrollToProjRef={scrollToProjRef} scrollToDiggr={scrollToDiggr} oRef={overviewRef} />
            </div>
            <div className="md:hidden">
              <ParallaxMobile scroll={scroll} scrollTo={scrollToDetails} />
              {/* <AboutMeMobile scroller4={scrollToBackground} scrollToProjRef={scrollToProjRef} scrollToDiggr={scrollToDiggr} oRef={overviewRef} /> */}
            </div>
            <div ref={detailsRef} className="scrollTarget">
              <Details />
            </div>
            <div ref={backgroundRef} id="experience1" className="scrolledTo" >
              <Experience />
            </div>
            <div className="">
              <HackReactor />
            </div>
            <Survey />
            <div ref={overviewRef} className="scrolledTo-project">
              <Projects />
            </div>
            <div ref={contactRef} className="scrolledTo-contact" >
              <Contact />
            </div>
            <Footer scroller={scrollToRef} />
            <div className="h-[0px] z-[20]" ></div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default App

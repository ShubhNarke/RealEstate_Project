import React, { useEffect } from 'react'
import {client} from '../component/export'
import { useDarkMode } from '../component/DarkModeContext'
import { FaStar } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
    }, []);

     const { darkMode } = useDarkMode();


  return (
    <div className={`${darkMode ? 'bg-black': 'light bg-transparent' }`}>
      <section id='testimonials' className={`${darkMode ? 'bg-black': 'light bg-transparent' }`}>

      </section>
    </div>
  )
}

export default Clients
import React, { useEffect } from 'react'
import { useDarkMode } from '../component/DarkModeContext'
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  
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
    <div className={`${darkMode ? 'dark:bg-black': 'light bg-transparent' } pb-20`}>
      
    </div>
  )
}

export default Contact
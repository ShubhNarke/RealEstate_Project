import React from 'react'
import {useDarkMode} from './DarkModeContext'
import { FaFacebook , FaInstagram, FaTwitter,FaYoutube,FaBuilding,FaMobile,FaFax,FaArrowUp , FaMoon, FaSun } from 'react-icons/fa'
import {Link} from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

const Footer = () => {


  const { darkMode , toggleDarkMode } = useDarkMode();
  return (
    <>
    <footer className={`${darkMode ? 'dark bg-black':'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>About us</h1>
        <p className='text-slate-200 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora natus obcaecati ducimus cum a voluptas autem quidem impedit dolore!</p>

        <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300 '>
         <FaFacebook className='size-5' />
          </div>

          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300 '>
         <FaInstagram className='size-5' />
    

          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300 '>
         <FaTwitter className='size-5' />
    

          </div>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300 '>
         <FaYoutube className='size-5' />
          </div>
        
        </div>

      </div>



    </footer>
    </>
  )
}

export default Footer
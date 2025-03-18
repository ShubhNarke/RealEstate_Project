import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // Initialize AOS animations in useEffect
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []); 
  
  // Retrieve darkMode state and toggle function from useDarkMode context
  const { darkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-full h-screen bg-cover bg-center flex justify-center flex-col items-start px-10 lg:px-28 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-o lg:leading-[70px] leading-[60px]"
          >
            Find your next Home in Las Vegas
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis,
            corrupti error id pariatur magnam est eaque, eius voluptatibus nam
            aperiam fugiat sit. Recusandae nesciunt repellat officiis dolore.
            Laboriosam, cum.
          </p>
        </section>
      </div>

      {/*  */}
      <div className={`${darkMode ? "bg-black" : "light bg-transparent"} z-10`}>
        <div
          data-aos="zoom-in"
          id="form "
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address , state , city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="Option1">Rentales</option>
              <option value="Option2">Sales</option>
              <option value="Option3">Commercial</option>
            </select>
          </div>

          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="Option1">Appartment</option>
              <option value="Option2">Duples</option>
              <option value="Option3">Condos</option>
              <option value="Option4">Condos</option>
              <option value="Option5">Condos</option>
            </select>
          </div>
          <div className="w-full">
            <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

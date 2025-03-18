import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome, FaBuilding, FaKey , FaSearch, FaHospital, FaCamera } from "react-icons/fa"; // Import icons

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  const services = [
    { title: "Property Buying", description: "Find the best properties with ease.", icon: FaHome },
    { title: "Property Selling", description: "Sell your property at the best price.", icon: FaBuilding },
    { title: "Property Renting", description: "Get rental services with smooth transactions.", icon: FaKey },
    {title : "Home inspection", description:"we make sure you get what you were promised" , icon: FaSearch},
    {title:"Evaluation" , description:"we offer free evaluation to get mortgage loan" , icon:FaHospital},
    {title:"photoshoot", description:"we prepare your visual presentation ", icon:FaCamera},
  ];

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}>
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-black" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Top real estate<br /> services available
          </h1>
        </div>

        <div id="service-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {services.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-5 border-red-600 hover:bg-red-300 cursor-pointer shadow-lg"
            >
              <div className="p-6 rounded-full bg-red-200 flex justify-center items-center">
                <item.icon className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
              
              <h1 className="text-black text-[22px] font-semibold dark:text-white">{item.title}</h1>
              <p className="text-lg text-slate-700 dark:text-white">{item.description}</p>
              <button className="border-b-2 border-red-600 text-red-600 font-semibold dark:text-white">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

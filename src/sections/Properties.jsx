import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import { property } from "../component/export";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaViadeo,
  FaCamera,
  FaShareAlt,
  FaHeart,
  FaPlus,
  FaUserCircle,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Properties = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section className="lg:w-[90%] mx-auto lg:px-20 px-6 py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the Latest
          </h1>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {property.map((item, index) => (
            <PropertyCard key={item.id || index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

// Extracted Property Card Component
const PropertyCard = ({ item }) => {
  const fallbackImage = "https://via.placeholder.com/300"; // Default image if no image provided

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Image Section */}
      <div
        className="relative bg-cover bg-center h-[250px]"
        style={{ backgroundImage: `url(${item.images || fallbackImage})` }}
      >
        <div className="absolute top-4 left-4 flex gap-2">
          <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">
            Featured
          </button>
        </div>
        <div className="absolute bottom-4 left-4 flex justify-between w-full pr-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-white size-4" />
            <h1 className="text-white text-sm">{item.address}</h1>
          </div>
          <div className="flex items-center gap-4">
            <FaViadeo className="text-white size-4" />
            <FaCamera className="text-white size-4" />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-6 py-3 flex flex-col gap-2">
        <h1 className="text-xl text-black font-semibold dark:text-white">
          {item.name}
        </h1>
        <h1 className="text-3xl text-red-600 font-bold dark:text-white">
          {item.price}
        </h1>
        <p className="dark:text-white">{item.about}</p>

        {/* Icons Section */}
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <FaBath className="text-red-400" />
            <h1 className="dark:text-white">{item.bath}</h1>
          </div>
          <div className="flex items-center gap-2">
            <FaBed className="text-red-400" />
            <h1 className="dark:text-white">{item.bed}</h1>
          </div>
          <div className="flex items-center gap-2">
            <MdSpaceDashboard className="text-red-400" />
            <h1 className="dark:text-white">{item.area}</h1>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mt-4"></div>

        {/* Owner Info & Icons */}
        <div className="flex justify-between items-center w-full mt-2">
          <div className="flex items-center gap-2">
            <FaUserCircle className="size-5 text-red-400" />
            <h1 className="dark:text-white">{item.owner}</h1>
          </div>
          <div className="flex items-center gap-4">
            <ActionButton icon={<FaShareAlt />} />
            <ActionButton icon={<FaHeart />} />
            <ActionButton icon={<FaPlus />} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Button Component
const ActionButton = ({ icon }) => (
  <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
    {icon}
  </div>
);

export default Properties;

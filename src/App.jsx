import React from "react";
import { DarkModeProvider } from "./component/DarkModeContext";
import Header from "./component/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;

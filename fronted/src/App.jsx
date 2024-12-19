import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Introduccion from './components/Introduccion/Introduccion.jsx';
import Fauna from './components/Fauna/Fauna.jsx';
import Festividades from './components/Festividades/Festividades.jsx';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="introduccion">
        <Introduccion />
      </section>
      <section id="fauna">
        <Fauna />
      </section>
      <section id="festividades">
        <Festividades />
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
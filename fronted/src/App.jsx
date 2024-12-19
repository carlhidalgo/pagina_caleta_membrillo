import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Introduccion from './components/Introduccion/Introduccion.jsx';
import Fauna from './components/Fauna/Fauna.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App= () => {
 
  return (
    
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Introduccion />
      <Fauna />

    </div>
  );
};

export default App;
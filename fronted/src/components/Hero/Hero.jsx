import React from 'react';
import HeroImg from '../../assets/caleta/hero.png';

const Hero = () => {
  return <>
      <main id="acerca-de"  className="bg-orange-400">
        <div className="conatainer min-h [620px] flex mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5
          place-items-center">
            {/* image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 realtive">
              <img src={HeroImg} alt="" />
            </div>

            {/* text section */}
            <div>
              <h1
                data-aos="fade-up"
               className="text-4xl sm:text-5xl font-semibold">
                Caleta El Membrillo{""}
                <span className="text-green-700">Descubre el legado de la pesca artesanal en el corazón de Valparaíso.</span>
                </h1>
              <p data-aos="fade-up" data-aos-delay="300">
              La Caleta El Membrillo, ubicada en el corazón de Valparaíso,
               es un símbolo vivo de la tradición pesquera chilena. 
               Este rincón costero no solo es hogar de una comunidad de pescadores sino tambien un entorno cultural vibrante. Con su identidad única, deliciosa gastronomía, 
                y festividades que celebran la conexión entre el mar y la comunidad, la caleta es un punto de encuentro entre tradición, naturaleza y cultura.
              </p>
              <button className="btn-primary" >Descubre más</button>
            </div>
          </div>

        </div>
        
      </main>
  
  </>;
  
};

export default Hero;
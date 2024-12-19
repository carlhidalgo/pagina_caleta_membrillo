import React from 'react'
import CaletaImage from '../../assets/caleta/caleta-antigua.png';
import { useInView } from 'react-intersection-observer';

const Introduccion = () => {

    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
    const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
    const { ref: paragraphRef, inView: paragraphInView } = useInView({ triggerOnce: true });
  
    return <>
      <div className="container mx-auto p-4 mt-16">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h1
          ref={titleRef}
          data-aos="fade-up" className={`text-4xl font-bold text-center text-gray-800 mb-4 p-4 bg-yellow-500 transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}`}
        >
          La Historia de la Caleta
        </h1>
        <div className="flex flex-col items-center p-4">
          <img
            ref={imageRef}
            src={CaletaImage}
            alt="La Caleta"
            data-aos="zoom-in" className={`w-full h-auto mb-4 rounded-lg shadow-md transition-opacity duration-1000 ${imageInView ? 'opacity-100' : 'opacity-0'}`}
          />
          <p
            ref={paragraphRef}
            data-aos="fade-up" data-aos-delay="400" className={` text-lg text-justify text-gray-700 transition-opacity duration-1000 ${paragraphInView ? 'opacity-100' : 'opacity-0'}`}
          >
            La Caleta es un lugar lleno de historia y tradición. Desde tiempos inmemoriales, ha sido un punto de encuentro para pescadores y viajeros. Sus aguas cristalinas y su entorno natural han sido testigos de innumerables historias y leyendas que se han transmitido de generación en generación. Hoy en día, La Caleta sigue siendo un lugar emblemático, donde la historia y la modernidad se entrelazan para ofrecer a sus visitantes una experiencia única.
          </p>
          <button className="btn-primary">Leer mas</button>
        </div>
      </div>
    </div>
     

    </>;
};

export default Introduccion;

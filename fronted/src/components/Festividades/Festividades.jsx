import React from 'react'
import ActvCard from './ActvCard';

import SanPedroImg from '../../assets/actividades/fiesta_san_pedro.png';
import FogataImg from '../../assets/actividades/fogata_del_pescador.png';
import ClubDeportivoImg from '../../assets/actividades/club_deportivo.png';

const festividadesData = [
    {
      id: 1,
      title: "Fiesta de San Pedro",
      text: "La fiesta de San Pedro en la caleta El Membrillo, con más de 100 años de tradición, se celebra cada mes de junio. Destacan las procesiones de San Pedro y la Virgen María, tanto por tierra como por mar, y la Eucaristía presidida por un obispo. La celebración incluye bailes chinos y la participación de autoridades locales.",
      img: SanPedroImg ,
      aosDelay: 300,
    }, 
    {
      id: 2,
      title: "Fogata del Pescador",
      text: "La Fogata del Pescador, con más de 40 años de tradición, se celebra en septiembre y durante el verano. Ofrece música en vivo, bailes, juegos típicos y una deliciosa merluza frita. Es un espacio de encuentro cultural y comunitario que atrae a locales y turistas.",
      img: FogataImg ,
      aosDelay: 500,
    },
    {
      id: 3,
      title: "Club Deportivo Caupolicán",
      text: "El Club Deportivo Caupolicán, fundado hace más de 124 años, celebra su legado con actividades deportivas, tradicionales y gastronómicas. Destacan el pescado frito y el 'causeo de porotos', platos que reflejan la riqueza del mar y la identidad culinaria de la zona.",
      img: ClubDeportivoImg ,
      aosDelay: 600,
    }
  ];

const Festividades = () => {
  return (
  <>
    <div className="bg-orange-400 py-10 pb-14">
        <div className="container">
            <h2 className="my-8 border-l-8 border-green-800/50 py-2">Actividades</h2>
            {/* card actividades*/}
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-6">

            {festividadesData.map((actv) => (
                    <ActvCard key={actv.id} {...actv} />
                ))
            }

            </div>
            
        </div>
    </div>
    
  </>
  
  );
};

export default Festividades;
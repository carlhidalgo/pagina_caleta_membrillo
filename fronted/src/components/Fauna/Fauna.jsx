import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ChurreteCosteroImg from '../../assets/aves/churrete_costero.png';
import GaviotaFranklinImg from '../../assets/aves/gaviota_franklin.png';
import PinguinoHumboldtImg from '../../assets/aves/pinguino_humboldt.png';
import ChurreteCosteroAudio from '../../assets/aves/churrete_costero.mp3';
import GaviotaFranklinAudio from '../../assets/aves/gaviota_franklin.mp3';
import PinguinoHumboldtAudio from '../../assets/aves/pinguino_humboldt.mp3';
import lobomarino from '../../assets/mamiferos-marinos/Lobomarino.png';
import chungungo from '../../assets/mamiferos-marinos/Chungungo.png';
import EstrellaDeMar from '../../assets/especies-marinas/estrellademar.png';
import Cholga from '../../assets/especies-marinas/cholga.png';
import Merluza from '../../assets/especies-marinas/merluza.png';

const faunaData = [
  {
    id: 1,
    category: "Aves",
    title: "Churrete Costero (Cinclodes nigrofumosus)",
    text: "Restringido a la costa rocosa del norte y centro de Chile, donde rara vez se le ve lejos de donde rompen las olas; también se encuentra en las playas de arena adyacentes en las desembocaduras de los ríos. Usualmente, se ven solos o en pares, forrajeando en la zona intermareal, o cantando con las alas levantadas y revoloteando entre las rocas junto al mar. Es el cinclodes más grande de Chile y se identifica por una ceja blancuzca muy estrecha, rayas blancas contrastantes en el pecho y un pico bastante grueso, que utiliza para abrir cangrejos pequeños.",
    img: ChurreteCosteroImg,
    audio: ChurreteCosteroAudio,
  },
  {
    id: 2,
    category: "Aves",
    title: "Gaviota de Franklin (Leucophaeus pipixcan)",
    text: "Gaviota de tamaño mediano, principalmente observada en el interior de Norteamérica, pero pasa el invierno en alta mar en Sudamérica. Se reproduce alrededor de lagos y pantanos, comúnmente vista en campos o playas durante la migración. En plumaje reproductivo tiene la cabeza negra con los arcos blancos marcados del ojo, pico rojo pequeño y manchas blancas prominentes en las puntas negras del ala. Las aves en plumaje no reproductivo son similares pero con capucha negra parcial y pico oscuro. Los juveniles muestran más tonos marrones que los adultos. Las partes inferiores blancas están a menudo teñidas de rosado. Normalmente se ven en bandadas.",
    img: GaviotaFranklinImg,
    audio: GaviotaFranklinAudio,
  },
  {
    id: 3,
    category: "Aves",
    title: "Pingüino de Humboldt (Spheniscus humboldti)",
    text: "Poco común y local; se reproduce en colonias a lo largo de la costa de Perú y Chile, donde anida en madrigueras subterráneas. El único pingüino en la mayor parte de su área de distribución, pero hay algo de traslape en el centro de Chile con el similar Magellanic Penguin de aguas más frías del sur. El adulto de Humboldt se distingue por una gran mancha rosada en la base del pico y una sola banda negra en el pecho. El inmaduro de Humboldt es muy similar a Magellanic Penguin y no siempre se identifica de manera segura en el campo, pero el inmaduro usualmente muestra una gran mancha rosa en la base del pico que recuerda a un adulto.",
    img: PinguinoHumboldtImg,
    audio: PinguinoHumboldtAudio,
  },
  {
    id: 4,
    category: "Especies Marinas",
    title: "Cholga (Aulacomya atra)",
    text: "Aulacomya atra, conocida comúnmente como cholga o cholgua, es una especie de molusco bivalvo filtrador perteneciente a la familia Mytilidae. Nativa de Sudamérica, su distribución geográfica abarca desde el Pacífico sur, incluyendo Perú y Chile, hasta el Atlántico, llegando a Argentina.",
    img: Cholga,
  },
  {
    id: 5,
    category: "Especies Marinas",
    title: "Merluza (Merluccius gayi)",
    text: "Es un pez alargado, creciendo unos 85 cm como máximo; y se alimentan de peces pequeños, artrópodos y calamares.",
    img: Merluza,
  },
  {
    id: 6,
    category: "Especies Marinas",
    title: "Estrella de Mar de Cinco Brazos (Stichaster Striatus)",
    text: "Nombre común: Estrella de mar naranja, sin embargo su color varía del amarillo al crema. Stichaster striatus es uno de los esteroides más abundantes que viven a lo largo de la costa chilena, en la zona rocosa intermareal y submareal superior. Descripción: Tiene forma de disco pequeño con 4 a 7 brazos, generalmente 5, y un radio de hasta 16 cm. También tiene espinas modificadas en gránulos redondos dispuestos sobre placas abactinales, que aparecen en filas lineales características. Hábitat: Fondo rocoso o arenoso Profundidad: desde zonas intermareales hasta 80 metros.",
    img: EstrellaDeMar,
  },
  {
    id: 7,
    category: "Mamíferos Marinos",
    title: "Lobo marino de Un Pelo (Otaria Byronia)",
    text: "Son de color pardo oscuro cuando son adultos y negro cuando son jóvenes. Los machos adultos habitualmente pesan unos 300 kg, el doble que las hembras, y poseen una capa de pelo castaño rojizo sobre el cuello. Esta «melena» es la causa de que sean llamados «leones marinos».",
    img: lobomarino,
  },
  {
    id: 8,
    category: "Mamíferos Marinos",
    title: "Chungungo (Lontra Felina)",
    text: "Es un mamífero carnívoro que vive exclusivamente en hábitats marinos. Es la nutria más pequeña del mundo y se encuentra en zonas rocosas con fuerte exposición a las olas y con presencia de algas, donde construye su refugio. Depreda fundamentalmente peces y crustáceos, capturando sus presas en el mar en áreas cercanas a sus madrigueras.",
    img: chungungo,
  },
];

const Fauna = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnfocus: true,
      };
  return (
    <>
      <div className="py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 p-4 bg-yellow-500 transition-opacity duration-1000 ${titleInView ? 'opacity-100' : 'opacity-0'}"
        >
          La fauna
        </h2>
        <div className="container"> {/* fauna section */}
        <div data-aos="fade-up" className="grid grid-cols-1 max-w-screen-xl
    mx-auto gap-6">
         <Slider {...settings}>   
        {faunaData.map(({ id, title, text, img, audio }) => (
            <div key={id} className="my-6">
                <div className="flex flex-col sm:flex-row
                gap-5 md:gap14 p-4 mx-4 rounded-xl
                bg-orange-300 relative" >
                    <img 
                    src={img} alt={title} 
                    className="block mx-auto h-[300px] w-full
                    sm:w-[400px] object-cover"
                    />
                    
                    <div className="space-y-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-green-800 text-justify mb-4">{text}</p>
                    {audio && (
                      <audio controls className="w-full mt-4">
                        <source src={audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                    </div>
                    </div>
            ))}
        </Slider>
    </div>
          
        </div>
      </div>
    </>
  );
}

export default Fauna;
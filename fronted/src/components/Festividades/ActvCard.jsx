import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ActvCard = ({ img, title, text, aosDelay }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={aosDelay} className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={img}
        alt={title}
        className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
      />
      <div className="space-y-2 p-4 ml-6 bg-white">
            <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
            <p className=" line-clamp-4 text-gray-500 text-sm">{text}</p>
            <div className="flex justify-end pr-4 text-green-300">
            <FaArrowRight className="group-hover:text-green-200 group-hover:translate-x-2 duration-300" />
            </div>
      </div>
    </div>
  );
};

export default ActvCard;
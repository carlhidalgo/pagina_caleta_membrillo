import React from 'react'
import { Menulinks } from './Navbar';

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div 
        className={`${
            showMenu ? "left-0" : "left-[-100%]"
        } fixed bottom-0 top-0 w-[75%] transition-all duration-300
         shadow-md pt-16 px-8 bg-yellow-500 z-50 flex
         flex-col justify-between pb-4`}
    >

        <div className="card"> 
            {/* menu section */}
            <nav className="mt-12">
                <ul className="space-y-4 text -xl">
                    {Menulinks.map(({id, name, link}) => {
                            return (
                            <li key={id}>
                                <a href={link} className="mb-5 inline-block">
                                    {" "}
                                    {name}
                                </a>
                            </li>
                            );     
                    })}
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default ResponsiveMenu


import React from 'react'
import Logo from "../../assets/logo/logo-2k.png";
import { HiMenuAlt3,HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';


export const Menulinks = [
    { name: "Inicio", url: "#hero" },
    { name: "Acerca de", url: "#introduccion" },
    { name: "Fauna", url: "#fauna" },
    { name: "Actividades", url: "#festividades" }
 
  ];

export const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  return(
   <>
        <nav id="inicio" >

            <div>

                <div className="container py-3 md:py-2">

                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div >
                        
                        <a href="#" className="flex items-center gap-3" >
                        <img src={Logo} alt="Logo" className="w-24"/>
                        
                        </a> 
                    </div>
                    {/* desktop Navlinks Section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {Menulinks.map(({id, name, url}) => {
                                    return (
                                        <li key={id}
                                        className="cursor-pointer py-4">
                                            <a href={url}  className=" text-lg font-medium
                                            hover:text-primary py-2
                                            hover:border-b-2 
                                            hover;border-primary transition-all 
                                            duration-300"
                                            
                                            >{name}</a> 
                                        </li>
                                    );
                             })}
                        </ul>
                    </div>
                    {/* Mobile view*/}
                    <div className="flex items-center gap-4 md:hidden">

                        {showMenu ? (
                            <HiMenuAlt1 
                            onClick={toggleMenu}
                            className=" cursour-pointer text-2xl "
                            />

                        ) : (
                            <HiMenuAlt3 
                            onClick={toggleMenu}
                            className=" cursour-pointer text-2xl "
                            />
                        )}

                    </div>

                    

                    
                    </div>

                </div>

            </div>
            {/* Mobile menu section */}
            <ResponsiveMenu showMenu={showMenu}  />

        </nav>
    </>
  );
}

export default Navbar;
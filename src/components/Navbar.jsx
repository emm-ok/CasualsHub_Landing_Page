import { Link, NavLink } from "react-router-dom";
import { Logo, navLinks } from "../constants";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-montserrat leading-normal text-xl font-bold'
      : 'font-montserrat leading-normal text-xl font-medium group-hover:opacity-80';

      const handleProductClick = (e) => {
        e.stopPropagation(); // Prevent click from bubbling up to other elements
        window.scrollTo(0, 0); // Scrolls to the top
      };
      const {totalItems} = useContext(ShopContext);
    
    const handleNavToggle = () => {
        setIsNavbarActive(!isNavbarActive);
    }

    const handleLinkClick = (e) => {
        setIsNavbarActive(false);
        handleProductClick(e);
    }

  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-200 shadow-md z-50 flex justify-between items-center px-4 md:px-12 py-2">
        <NavLink to="/" className="flex gap-4 items-center w-[60px] h-[60px] md:w-[60px] md:h-[60px]">
            <img src={Logo} alt="Logo" className="object-contain cursor-pointer rounded-full w-full h-full" />
            <h2 className="text-xl font-medium">Casuals Hub</h2>
        </NavLink>
        <div className="flex gap-8">
        <ul className={`${isNavbarActive ? 'flex flex-col px-6 py-4 gap-8 w-full rounded-xl absolute right-0 top-[8.3rem] bg-gray-800 text-white': 'flex-1 flex justify-center items-center gap-16 max-lg:hidden'}`}>
            {navLinks.map((link) => (
                <li key={link.label} className="ml-4 group transition duration-300 ease-in-out cursor-pointer">
                    <NavLink to={link.path} className={linkClass} onClick={handleLinkClick}>
                        {({ isActive }) => (
                            <>
                                {link.label}
                                <div className={`flex ${isNavbarActive ? 'justify-start' : 'justify-center'}`}>
                                    <hr className={`mt-2 w-2/3 h-[4px] bg-black ${isNavbarActive && 'bg-white w-full'} border-none rounded ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-105'} transition duration-300 ease-in-out`} />
                                </div>  
                            </>
                        )}
                    </NavLink>
                </li>
            ))}
        </ul>
        <div className="flex gap-8">
            <div className="relative cursor-pointer right-0 top-0">
                <Link to='/cart' onClick={(e) => handleProductClick(e)}>
                    <FaCartShopping size={30} />
                    <span className="absolute -top-1/3 -right-1/3 h-[20px] w-[20px] flex justify-center items-center rounded-full bg-white text-xl font-medium cursor-pointer">{totalItems()}</span>
                </Link>
            </div>
            <div 
                onClick={handleNavToggle}
                className="hidden max-lg:flex">
                {isNavbarActive ? <FaTimes size={40} className="cursor-pointer" /> : <FaBars size={40} className="cursor-pointer" />}
            </div>
        </div>
        </div>
    </nav>

  );
}

export default Navbar;

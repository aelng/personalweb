import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



function Nav() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div className="nav">
            <div className = "bg-opacity-0 md:bg-[#202020] flex justify-center items-center text-white py-6 px-8 md:px-32">
                <ul className = "hidden md:flex items-center gap-12 font-semibold text-base ">
                    <li><a className="hover:text-[#121212] transition-colors duration-150 font-bold tracking-wide px-3 text-2xl" href="/#home">Home</a></li>
                    <li><a className="hover:text-[#121212] transition-colors duration-150 font-bold tracking-wide px-3 text-2xl" href="/#about">About</a></li>
                    <li><a className="hover:text-[#121212] transition-colors duration-150 font-bold tracking-wide px-3 text-2xl" href="/#projects">Projects</a></li>
                </ul>
            </div>
                <div className = "flex justify-end">
                    <button className="text-white md:hidden focus:outline-none mr-10 absolute top-4 right-4" onClick={toggleMenu}>
                        { isOpen ? <></> : <FaChevronDown size={40}/>}
                    </button>
                    <ul
                        className={`md:hidden md:items-center md:space-x-6 fixed inset-0 bg-[#3c684b] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-lg transform transition-transform duration-500 ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:inset-auto md:bg-transparent md:flex md:flex-row md:space-y-0 md:space-x-6 md:translate-x-0`}
                    >
                    <button className="text-white md:hidden focus:outline-none mr-10 absolute top-4 right-4" onClick={toggleMenu}>
                        <AiOutlineClose size={40}/>
                    </button>
                    <li><a className="hover:text-[#121212] text-4xl transition-colors duration-150 font-bold tracking-wide px-3" href="/#home" onClick={toggleMenu}>Home</a></li>
                    <li><a className="hover:text-[#121212] text-4xl transition-colors duration-150 font-bold tracking-wide px-3" href="/#about" onClick={toggleMenu}>About</a></li>
                    <li><a className="hover:text-[#121212] text-4xl transition-colors duration-150 font-bold tracking-wide px-3" href="/#projects" onClick={toggleMenu}>Projects</a></li>
                    </ul>
                </div>
            </div>
        </>
);
}

export default Nav;
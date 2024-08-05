import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false); // State to manage mobile menu visibility
  const handleClick = () => setNav(!nav); // Toggles the mobile menu

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3d6462] text-white">
      {/* Main container for the navbar */}
      <div></div> {/* Placeholder div (could be used for branding or logo) */}
      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger icon for mobile menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="/contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

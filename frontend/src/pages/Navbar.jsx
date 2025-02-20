import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {toast} from 'react-hot-toast'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("User");
      localStorage.removeItem("token");
    toast.success("Logout Successfully..");
    navigate("/login");
  }
  const logoutHandler2 = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    setIsOpen(false);
    toast.success("Logout Successfully..");
    navigate("/login");
  }

  return (
    <nav className="bg-[#5d40ffc1] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-0.5 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#12343B]text-2xl font-extrabold tracking-wide"
        >
         <img src="/logo.png" className="max-h-20" alt="NumLogo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className="text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
          >
            Services
          </NavLink>
          <NavLink
            to="/login"
            className="text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
            onClick={logoutHandler}
          >
            Logout
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#12343B] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF9C4] shadow-md absolute top-16 left-0 w-full text-center py-6 space-y-4">
          <NavLink
            to="/"
            className="block text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className="block text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/login"
            className="block text-[#12343B] hover:text-[#2D545E] transition-colors duration-300 font-medium"
            onClick={logoutHandler2}
          >
          Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

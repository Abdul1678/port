import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 py-2 bg-white shadow-md">
          <Link to="/" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

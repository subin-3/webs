import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold font-['Poppins']">NEPTech</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-semibold text-lg">Home</a>
          <a href="#about" className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-semibold text-lg">About Us</a>
          <a href="#services" className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-semibold text-lg">Services</a>
          <a href="#projects" className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-semibold text-lg">Projects</a>
          <a href="#team" className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-semibold text-lg">Team</a>
          <a href="#contact" className="text-white hover:text-blue-200 transition duration-300 ease-in-out font-semibold text-lg">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 bg-purple-800 rounded-md">
          <a href="#home" className="block text-white px-4 py-2 hover:bg-purple-700 transition duration-300 ease-in-out">Home</a>
          <a href="#about" className="block text-white px-4 py-2 hover:bg-purple-700 transition duration-300 ease-in-out">About Us</a>
          <a href="#services" className="block text-white px-4 py-2 hover:bg-purple-700 transition duration-300 ease-in-out">Services</a>
          <a href="#projects" className="block text-white px-4 py-2 hover:bg-purple-700 transition duration-300 ease-in-out">Projects</a>
          <a href="#team" className="block text-white px-4 py-2 hover:bg-purple-700 transition duration-300 ease-in-out">Team</a>
          <a href="#contact" className="block text-white px-4 py-2 hover:bg-purple-700 transition duration-300 ease-in-out">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
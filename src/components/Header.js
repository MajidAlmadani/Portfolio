import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#hero" className="text-gray-700 hover:text-blue-500 transition-colors duration-300">Home</a></li>
                        <li><a href="#projects" className="text-gray-700 hover:text-blue-500 transition-colors duration-300">Projects</a></li>
                        <li><a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors duration-300">About</a></li>
                        <li><a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

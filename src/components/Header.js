import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#hero" className="text-gray-700">Home</a></li>
                        <li><a href="#projects" className="text-gray-700">Projects</a></li>
                        <li><a href="#about" className="text-gray-700">About</a></li>
                        <li><a href="#contact" className="text-gray-700">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

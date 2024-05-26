import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-blue-500 text-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
                <p className="mt-4 text-lg">I'm a web developer specializing in modern web applications.</p>
                <a href="#projects" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg">See My Work</a>
            </motion.div>
        </section>
    );
};

export default Hero;

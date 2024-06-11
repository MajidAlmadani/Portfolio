import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import heroBackground from '../assets/backgroundHero.jpg';
import profilePicture from '../assets/profile.jpg';
import ParticlesComponent from './ParticlesComponent';
const Hero = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        setOffset({ x, y });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
            style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(4px)',
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                }}
            ></motion.div>
            <ParticlesComponent />
            <motion.div
                className="relative z-10 bg-indigo-600 bg-opacity-75 p-20 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
                initial={{ opacity: 0.2, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                    staggerChildren: 0.2,
                }}
            >
                <motion.img
                    src={profilePicture}
                    alt="Profile"
                    className="w-32 h-32 md:w-48 md:h-64 rounded-full shadow-lg object-cover mb-4 md:mb-0 md:mr-8"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />
                <div className="text-center md:text-left">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hi!
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        I'm a web developer specializing in modern web applications.
                    </motion.p>
                    <motion.a
                        href="#projects"
                        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        See My Work
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );

};

export default Hero;

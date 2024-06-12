import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBackground from '../assets/backgroundHero.jpg';
import profilePicture from '../assets/profile.jpg';
import ParticlesComponent from './ParticlesComponent';
import SocialMediaLinks from './HeroComponent/SocialMediaLinks';

const pageVariants = {
    initial: {
        x: '-100vw',
        scale: 1
    },
    in: {
        x: 0,
        scale: 1
    },
    out: {
        scale: 2,
        opacity: 0
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3,
};

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
        <motion.section
            id="hero"
            className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
            style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
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
            {/* <ParticlesComponent /> */}
            <div className="relative z-10 flex flex-col items-center space-y-8">
                <SocialMediaLinks />
                <motion.div
                    className="bg-blue-400 bg-opacity-75 p-10 md:p-20 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
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
                        className="w-24 h-24 md:w-48 md:h-64 rounded-full shadow-lg object-cover mb-4 md:mb-0 md:mr-8"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className="text-center md:text-left">
                        <motion.h1
                            className="text-2xl md:text-5xl font-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Hi!
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-sm md:text-lg"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            I'm a web developer specializing in modern web applications.
                        </motion.p>
                        <motion.div
                            className="mt-8 inline-block"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                to="/projects"
                                className="bg-white text-blue-400 px-6 py-3 rounded-full shadow-lg"
                            >
                                See My Work
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="bg-gray-100 py-12">
            <div className="container mx-auto p-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-gray-700"
                >
                    I am a passionate web developer with experience in building modern web applications.
                </motion.p>
            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-blue-500 text-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold">Contact Me</h2>
                <p className="mt-4">Feel free to reach out for collaborations or just a friendly hello!</p>
                <a href="mailto:example@example.com" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg">Email Me</a>
            </motion.div>
        </section>
    );
};

export default Contact;

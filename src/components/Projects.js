import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
    // Add more projects as needed
];

const pageVariants = {
    initial: {
        x: '100vw',
    },
    in: {
        x: 0,
    },
    out: {
        x: '100vw',
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8,
};

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="container mx-auto p-6"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-lg rounded-lg p-6"
                    >
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-2 text-gray-600">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;

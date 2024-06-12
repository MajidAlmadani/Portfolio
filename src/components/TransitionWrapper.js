import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const TransitionText = () => (
    <motion.div
        className="fixed inset-0 flex items-center justify-center bg-blue-400 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h1 className="text-4xl">Loading...</h1>
    </motion.div>
);

const TransitionWrapper = ({ children }) => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
            <TransitionText />
        </AnimatePresence>
    );
};

export default TransitionWrapper;

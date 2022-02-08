import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container">
                SignIn
            </motion.div>
        </>
    )
}
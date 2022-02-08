import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function LogIn() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container">
                <h2>LogIn</h2>
                <Link to='/'>
                    <Button className='home-button' value='home' />
                </Link>
                <Link to='/SignIn'>
                    <Button className='signin-button' value='sign in' />
                </Link>
                <Link to='/PassReminder'>
                    <Button className='passreminder-button' value='reminder' />
                </Link>
            </motion.div>
        </>
    )
}
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="container">
                <h2>Make</h2>
                <Link to='/LogIn'>
                    <Button className='login-button' value='log in' />
                </Link>
                <Link to='/SignIn'>
                    <Button className='signin-button' value='sign in' />
                </Link>
                <Link to='/PassReminder'>
                    <Button className='passreminder-button' value='reminder' />
                </Link>
                {/* <h2>Make</h2>
                <h5>practical forms for your company for free</h5>
                <ul>
                    <li>prepare questionnaire</li>
                    <li>fin out what your clients think</li>
                    <li>see specialized data</li>
                </ul>
                <Link to='/tutorial'>@ see how</Link> */}


            </motion.div>
        </>
    )
}

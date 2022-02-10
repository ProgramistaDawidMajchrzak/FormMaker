import React from 'react';
import { motion } from 'framer-motion';
import tutBackground from '../images/tutorial-background.png';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Tutorial() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='tutorial-container'>

            <img src={tutBackground} alt="404" />

            <div className="tutorial-box">
                <div className="flex">
                    <Link to='/'>
                        <Button value='back' padding='0 14px' />
                    </Link>
                    <div className="authentication">
                        <Link className='logIn-btn' to='/LogIn'>LOG IN</Link>
                        <Link to='/SignIn'>
                            <Button value='sign in' padding='0 14px' />
                        </Link>
                    </div>
                </div>
                <h3>How it's working?</h3>
            </div>

        </motion.div>
    )
}

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function SignIn() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="signIn-container">
                <div className="signIn-box">
                    <Link to='/'>
                        <Button value='back' padding='0 14px' margin='30px 0 0 50px' />
                    </Link>
                    <h3>SIGN IN</h3>
                    <h5>IT'S FOR FREE!</h5>
                    <input type="email" placeholder='ENTER YOUR EMAIL' />
                    <input type="email" placeholder='CONFIRM YOUR EMAIL' />
                    <input type="password" placeholder='ENTER YOUR PASSWORD' />
                    <Link className='login-btn' to='/logIn'>ALREADY SIGN IN?</Link>
                    <Link to='/'>
                        <Button padding='0 14px' margin='20px 0 0 50px' value='sign in' />
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
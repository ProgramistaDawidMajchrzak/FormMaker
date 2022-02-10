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
                className="login-container">
                <div className="login-box">
                    <Link to='/'>
                        <Button value='back' padding='0 10px' margin='30px 0 0 40px' />
                    </Link>
                    <h3>LOG IN</h3>
                    <input type="email" placeholder='ENTER YOUR EMAIL' />
                    <input type="password" placeholder='ENTER YOUR PASSWORD' />
                    <Link className='login-btns' to='/PassReminder'>FORGOT PASSWORD?</Link>
                    <Link className='login-btns notuser-btn' to='/SignIn'>NOT A USER?</Link>
                    <Link to='/'>
                        <Button margin='20px 0 0 40px' padding='0 10px' value='log in' />
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
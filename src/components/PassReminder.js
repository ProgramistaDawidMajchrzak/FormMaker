import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function PassReminder() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="reminder-container">

                <div className="reminder-box">
                    <Link to='/'>
                        <Button value='back' padding='0 10px' margin='30px 0 0 40px' />
                    </Link>
                    <input type="email" placeholder='ENTER YOUR EMAIL' />
                    <Button value='send' padding='0 10px' margin='10px 0 30px 40px' />
                </div>

            </motion.div>
        </>
    )
}
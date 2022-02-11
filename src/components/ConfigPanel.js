import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

import Example1 from '../images/Example1.png';
import Example2 from '../images/Example2.png';
import Example3 from '../images/Example3.png';
import Example4 from '../images/Example4.png';
import Example5 from '../images/Example5.png';
import Example6 from '../images/Example6.png';
import Example7 from '../images/Example7.png';
import Example8 from '../images/Example8.png';

export default function ConfigPanel() {
    return (
        <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="config-container"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="config-box">
                <Link to='/'>
                    <Button margin='30px 0' value='back' padding='0 14px' />
                </Link>
                <h3>Choose one of our templates</h3>
                <div className="flex">
                    <img src={Example1} alt="404" />
                    <img src={Example2} alt="404" />
                    <img src={Example3} alt="404" />
                    <img src={Example4} alt="404" />
                    <img src={Example5} alt="404" />
                    <img src={Example6} alt="404" />
                    <img src={Example7} alt="404" />
                    <img src={Example8} alt="404" />
                </div>
                <h3>And create your form</h3>
                <Button className='create-btn' value='add header' />
                <Button className='create-btn' value='add input' />
                <Link to='/SignIn'>
                    <Button value='finish' padding='0 22px' />
                </Link>
            </motion.div>

        </div>
    )
}

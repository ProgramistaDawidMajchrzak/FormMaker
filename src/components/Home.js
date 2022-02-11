import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

import formImg from '../images/formImgHome.png';
import GB from '../images/GB.png';
import PL from '../images/PL.png';
import RUS from '../images/RUS.png';

export default function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="home-container">
                <div className="authorization">
                    <div className="languages">
                        <img src={GB} alt="404" />
                        <img src={PL} alt="404" />
                        <img src={RUS} alt="404" />
                    </div>
                    <Link className='logIn-button' to='LogIn'>LOG IN</Link>
                    <Link to='SignIn'>
                        <Button value='sign in' padding='0 14px' />
                    </Link>

                </div>
                <h2>Make</h2>
                <h5>practical forms for your company for free</h5>
                <ul>
                    <li>prepare questionnaire</li>
                    <li>find out what your clients think</li>
                    <li>see specialized data</li>
                </ul>
                <Link className='tutorial-button' to='/Tutorial'>@ see how it's working</Link>
                <br />
                <Link to='/ConfigPanel'>
                    <Button value='get started' padding='0 22px' margin='10px 0 0 25px ' />
                </Link>
                <img className='form-home-img' src={formImg} alt="404" />

            </motion.div>
        </>
    )
}

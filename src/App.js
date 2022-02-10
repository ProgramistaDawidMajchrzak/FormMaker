import React from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';

import backgroundImg from './images/backgroundImg.png';

import Home from './components/Home';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import PassReminder from './components/PassReminder';
import Tutorial from './components/Tutorial'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="backgroundMain">
        <img className='right-home-img' src={backgroundImg} alt="404" />
        <AnimatePresence>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/PassReminder' element={<PassReminder />} />
            <Route path='/Tutorial' element={<Tutorial />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App; 

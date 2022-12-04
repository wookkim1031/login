import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import './MainFrame.css';   

const MainFrame = () => {
    return (
        <div className='mainFrame'>
           

        <Outlet />
        </div>
        
    );
};

export default MainFrame;
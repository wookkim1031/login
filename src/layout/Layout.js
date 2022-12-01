import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Modal from 'react-modal';
import MainPage from '../pages/MainPage';

const Layout = () => {

    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        console.log('opened');
        setIsOpen(true);
      }

    return (
        <div id="root" >
            <Header openModal={openModal}/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
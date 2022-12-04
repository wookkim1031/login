import React from 'react';
import Footer from './Footer';
import Modal from 'react-modal';
import Header from './Header';
import MainFrame from './MainFrame';
import './Layout.css'


const Layout = () => {

    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        console.log('opened');
        setIsOpen(true);
      }

    return (
        <div className="layout" >
            <Header/>
            <MainFrame />
            <Footer />
        </div>
    );
};

export default Layout;
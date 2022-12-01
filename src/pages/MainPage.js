import React from 'react';
import Modal from 'react-modal';
import './MainPage.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: "#FFFF00"
    },
  };

  

const MainPage = ({modalIsOpen, setIsOpen}) => {

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        console.log('modal opened');

      }
    
      function closeModal() {
        setIsOpen(false);
      }

    
    return (
        <div style={{display:"flex", position:"relative", paddingTop:"1000px", backgroundColor:'skyblue'}}>

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}

      >
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
            
        </div>
    );
};

export default MainPage;
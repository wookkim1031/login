import React, { useState } from 'react';
import LoginButton from '../components/LoginButton';
import './Header.css';

const navItems = [
  { to: 'aboutus', itemName: 'About us'},
  { to: 'notice', itemName: 'Notice'},
  { to: 'communities', itemName: 'Communities'},
  { to: 'jobposting', itemName: 'Job posting'},
  { to: 'donation', itemName: 'Donation'},
]

const Header = (props) => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpened(!isMobileNavOpened);
  const navStyle = isMobileNavOpened ? `nav mobile-nav-visible` : `nav`;
  const closeMobileNav = () => setIsMobileNavOpened(false);
  const smoothEffect = isMobileNavOpened ? false : true;

  return (
    <header className="header">
      <nav className={navStyle}>
        <ul>
          {
            navItems.map(item => {
              return (
                <li className="nav-item" key={`nav-item-link-${item.to}`}>
                  <div
                    className="nav-item-link" 
                    >{item.itemName}</div>
                </li>
              )
            })
          }
        </ul>
      </nav>
          <LoginButton openModal={props.openModal}/>
    </header>
  )
};

export default Header;
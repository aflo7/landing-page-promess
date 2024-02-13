import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { IoIosSearch } from 'react-icons/io';

import { RxHamburgerMenu } from 'react-icons/rx';
export default function App() {
  return (
    <>
      <div className="top-nav-wrapper">
        <div className="top-nav">
          <div>111-111-1111</div>
          <div>Mock</div>
        </div>
      </div>

      <div>
        <nav>
          <img
            className="promess-logo"
            src="https://www.promessinc.com/wp-content/uploads/2021/10/cropped-Promess-Logo-200px.png"
          />
          <div className="mobile-menu-wrapper">
            <RxHamburgerMenu />
            Menu
          </div>
          <div className="desktop-menu-wrapper">
            <div>Products</div>
            <div>Applications</div>
            <div>Support</div>
            <div>Knowledge Center</div>
            <div>Company</div>
            <div>Contact Us</div>
            <IoIosSearch size="1.8rem" />
          </div>
        </nav>
      </div>

<div className='main-wrapper'>

      <main>
        <div className="process-development-wrapper">
          <p className="process-development-text">Process Development</p>
          <h2 className="proof-of-concept-text">Proof of Concept</h2>
          <p className='develop-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Remade with Javascript, React, HTML, and CSS
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </main>
</div>
    </>
  );
}

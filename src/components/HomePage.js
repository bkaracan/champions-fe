// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect'; // TypingEffect komponentini import et
import './HomePage.css'; // CSS dosyasını import etmeyi unutmayın

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="champions-title">CHAMPIONS</h1>
      <p className="champions-slogan">
        <TypingEffect text="All about League Of Legends Champions & Skills..." speed={150} />
      </p>
      <div className="button-container">
        <Link to="/register">
          <button className="home-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

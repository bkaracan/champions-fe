// HomePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect';
import './HomePage.css';

const HomePage = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);

  // TypingEffect'ten metin tamamlandıktan sonra çağrılacak fonksiyon
  const showButtonsAfterText = () => {
    setButtonsVisible(true);
  };

  return (
    <div className="home-container">
      <h1 className="champions-title">CHAMPIONS</h1>
      <p className="champions-slogan">
        <TypingEffect
          text="League of Legends şampiyonları ve yeteneklerine dair her şey..."
          speed={80}
          onComplete={showButtonsAfterText}
        />
      </p>
      {buttonsVisible && (
        <div className="button-container">
          <Link to="/register">
            <button className="home-button sign-up">Kayıt ol</button>
          </Link>
          <Link to="/login">
            <button className="home-button log-in">Giriş yap</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;

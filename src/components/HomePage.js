// HomePage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect';
import './HomePage.css';
import clickSound from './button-click.mp3'; // Ses dosyasını import edin


const HomePage = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const clickAudio = new Audio(clickSound); // Ses dosyasını bir Audio objesi olarak yükle

  const playClickSound = () => {
    clickAudio.play(); // Fonksiyon çağrıldığında ses efektini oynat
  };

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
            <button className="home-button sign-up" onClick={playClickSound}>Kayıt ol</button>
          </Link>
          <Link to="/login">
            <button className="home-button log-in" onClick={playClickSound}>Giriş yap</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;

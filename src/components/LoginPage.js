import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import TypingEffect from './TypingEffect'; // TypingEffect bileşenini import edin
import './LoginPage.css';

const apiUrl = 'http://localhost:8082';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/login`, loginData);
      console.log('Giriş Başarılı', response.data);
    } catch (error) {
      console.error('Giriş sırasında hata oluştu', error);
    }
  };

  const responseGoogle = (response) => {
    console.log('Google ile giriş başarılı', response);
  };

  // TypingEffect'ten metin tamamlandıktan sonra çağrılacak fonksiyon
  const showContentAfterText = () => {
    setContentVisible(true);
  };

  return (
    <div className="login-page-container">
      <h1 className="login-title">Giriş Yap</h1>
      <p className="login-slogan">
      <TypingEffect
        text="Hesabına gir ve uygulamayı kullanmaya başla."
        speed={80}
        onComplete={showContentAfterText}
      />
      </p>
      {contentVisible && (
        <>
          <form onSubmit={handleLoginSubmit}>
            <input
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              placeholder="Kullanıcı Adı"
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Şifre"
            />
            <button type="submit">Giriş Yap</button>
          </form>
          <div className="GoogleLogin">
            <GoogleLogin
            clientId="983631263412-pevncu71vv3gmekaeit7fi77htjtsh1h.apps.googleusercontent.com"
            buttonText="Google ile Giriş Yap"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;

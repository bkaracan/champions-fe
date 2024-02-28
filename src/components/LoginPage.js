import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import TypingEffect from './TypingEffect';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const apiUrl = 'http://localhost:8082';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/login`, loginData);
      if (response.data) {
        console.log('Giriş Başarılı', response.data);
        navigate('/champions'); // Sadece başarılı giriş sonrası yönlendirme yap
      }
    } catch (error) {
      console.error('Giriş sırasında hata oluştu', error);
      // Burada hata mesajını kullanıcıya göstermek için bir mekanizma ekleyebilirsiniz
    }
  };

  const responseGoogle = (response) => {
    if (response.profileObj) { // Burada başarılı Google girişini kontrol etmek için doğru özelliği kullanın
      console.log('Google ile giriş başarılı', response);
      navigate('/champions'); // Sadece başarılı Google girişi sonrası yönlendirme yap
    } else {
      console.error('Google girişi başarısız');
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="login-title">Giriş Yap</h1>
      <TypingEffect
        text="Hesabına gir ve uygulamayı kullanmaya başla."
        speed={80}
      />
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
    </div>
  );
};

export default LoginPage;

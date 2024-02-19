// RegistrationPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationPage.css'; // Stil dosyasını import etmeyi unutmayın
import TypingEffect from './TypingEffect';

const apiUrl = 'http://localhost:8082';

const RegistrationPage = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const [isTypingComplete, setIsTypingComplete] = useState(false); // TypingEffect'in tamamlanma durumu

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/register`, registerData);
      console.log('Registration Successful', response.data);
    } catch (error) {
      console.error('Registration Error', error);
    }
  };

  // TypingEffect tamamlandığında çağrılacak fonksiyon
  const onTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <div className="registration-container">
       <h1 className="registration-title">Hesabını Oluştur</h1>
        <p className="registration-slogan">
        <TypingEffect
          text="League of Legends evrenine katıl"
          speed={80}
          onComplete={onTypingComplete} // onComplete event handler
          />
        </p>
      {isTypingComplete && ( // TypingEffect tamamlandığında formu göster
        <div className="registration-form">
          <form onSubmit={handleRegisterSubmit}>
            <input type="text" name="firstName" value={registerData.firstName} onChange={handleRegisterChange} placeholder="Ad" required />
            <input type="text" name="lastName" value={registerData.lastName} onChange={handleRegisterChange} placeholder="Soyad" required />
            <input type="text" name="username" value={registerData.username} onChange={handleRegisterChange} placeholder="Kullanıcı adı" required />
            <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="e-mail" required />
            <input type="password" name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Şifre" required />
            <button type="submit" className="register-btn">Create account</button>
            <p className="login-link">Zaten bir hesabın var mı? <a href="/login">Giriş yap</a></p>
          </form>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;

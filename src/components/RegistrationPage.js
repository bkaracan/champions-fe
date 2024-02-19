// RegistrationPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationPage.css'; // Stil dosyasını import etmeyi unutmayın

const apiUrl = 'http://localhost:8082';

const RegistrationPage = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

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

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Hesabını Oluştur</h2>
        <p>League of Legends evrenine katıl</p>
        <form onSubmit={handleRegisterSubmit}>
          <input type="text" name="firstName" value={registerData.firstName} onChange={handleRegisterChange} placeholder="Ad" required />
          <input type="text" name="lastName" value={registerData.lastName} onChange={handleRegisterChange} placeholder="Soyad" required />
          <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="e-mail" required />
          <input type="password" name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Şifre" required />
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Kullanım koşullarını, müşteri sözleşmesini, gizlilik politikasını okudum ve kabul ediyorum.</label>
          </div>
          <button type="submit" className="register-btn">Create account</button>
          <p className="login-link">Zaten bir hesabın var mı? <a href="/login">Giriş yap</a></p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;

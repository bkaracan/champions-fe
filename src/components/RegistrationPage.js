// RegistrationPage.js
import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8082';

const RegistrationPage = () => {
  const [registerData, setRegisterData] = useState({ firstName: '', lastName: '', username: '', password: '' });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/register`, registerData);
      console.log('Kayıt Başarılı', response.data);
      // Kayıt başarılı olduktan sonra isterseniz başka bir sayfaya yönlendirebilirsiniz.
    } catch (error) {
      console.error('Kayıt sırasında hata oluştu', error);
    }
  };

  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input
          name="firstName"
          value={registerData.firstName}
          onChange={handleRegisterChange}
          placeholder="İsim"
        />
        <input
          name="lastName"
          value={registerData.lastName}
          onChange={handleRegisterChange}
          placeholder="Soyisim"
        />
        <input
          name="username"
          value={registerData.username}
          onChange={handleRegisterChange}
          placeholder="Kullanıcı Adı"
        />
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleRegisterChange}
          placeholder="Şifre"
        />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

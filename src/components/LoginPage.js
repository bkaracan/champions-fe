import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8082';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/login`, loginData);
      console.log('Giriş Başarılı', response.data);
      // Giriş başarılı olduktan sonra isterseniz başka bir sayfaya yönlendirebilirsiniz.
    } catch (error) {
      console.error('Giriş sırasında hata oluştu', error);
    }
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
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
    </div>
  );
}

export default LoginPage;

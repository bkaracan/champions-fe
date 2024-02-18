import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <Link to="/register">
        <button>Kayıt Ol</button>
      </Link>
      <Link to="/login">
        <button>Giriş Yap</button>
      </Link>
    </div>
  );
}

export default HomePage;

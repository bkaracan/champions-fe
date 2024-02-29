// Champions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChampionsPage.css';

const apiUrl = 'http://localhost:8082/api/v1/champion'; // Backend API URL'nizi buraya ekleyin

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]); // Şampiyonları tutacak state

  useEffect(() => {
    // Backend servisinden şampiyon verilerini çekmek için fonksiyon
    const fetchChampions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/findAllChampions`);
       if(response.data.isSuccess) {
        setChampions(response.data.data);
       } else {
        console.error('Champions fetch failed:', response.data.message);
       }
      } catch (error) {
        console.error('Champions fetch error:', error);
      }
    };

    fetchChampions();
  }, []); // useEffect hook'u bileşen yüklendiğinde bir kez çalışır

  return (
    <div className="champions-page-container">
      <h1>ŞAMPİYONUNU SEÇ</h1>
      <p>140'tan fazla şampiyonun arasında oynayış tarzına birebir uyanı bulabilirsin. İster birinde ister hepsinde ustalaş.</p>
      
      {/* Arama çubuğu */}
      <div className="search-bar">
        <input type="text" placeholder="Ara" />
      </div>

      {/* Şampiyon kategorileri */}
      <div className="champion-categories">
        {/* Kategori butonları */}
        <button>Tümü</button>
        <button>Suikastçılar</button>
        <button>Dövüşçüler</button>
        <button>Büyücüler</button>
        <button>Nişancılar</button>
        <button>Destekler</button>
        <button>Tanklar</button>
      </div>

      {/* Şampiyon kartları */}
      <div className="champions-card">
  {champions.map(champion => (
    <div key={champion.id} className="champion-card">
      <img src={'/images/' + champion.name + '.png'} alt={champion.name} />
      {/* Şampiyon resmi ve diğer bilgiler buraya eklenecek */}
      <div className="champion-name-tag">{champion.name}</div>
    </div>
  ))}
</div>
    </div>
  );
};

export default ChampionsPage;

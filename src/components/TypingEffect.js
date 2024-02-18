// TypingEffect.js

import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed, onComplete }) => {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setContent((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      onComplete && onComplete(); // Metin tamamlandığında callback fonksiyonunu çağır
    }
  }, [index, text, speed, onComplete]);

  return <span>{content}</span>;
};

export default TypingEffect;

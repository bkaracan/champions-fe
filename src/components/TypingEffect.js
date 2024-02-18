// TypingEffect.js

import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setContent((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      // Cleanup function to clear the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span>{content}</span>;
};

export default TypingEffect;

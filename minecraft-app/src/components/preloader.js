import React from 'react';
import './preloader.css'; // файл стилей для прелоадера

const Preloader = () => {
  return (
    <div className="preloader-overlay">
      <div className="preloader-spinner"></div>
    </div>
  );
};

export default Preloader;
import React from 'react';
import logoImg from './img/logo.svg';

const MemeGeneratorHeader = () => {
  return (
    <header className="meme-generator__header">
      <div className="container">
        <div className="meme-generator__header-inner">
          <a className="meme-generator__logo-link" href="#!">
            <img className="meme-generator__logo-img" src={logoImg} alt="logo" />
          </a>

          <div className="meme-generator__header-title">
            React Course - Project 3
          </div>
        </div>
      </div>
    </header>
  )
}

export default MemeGeneratorHeader;
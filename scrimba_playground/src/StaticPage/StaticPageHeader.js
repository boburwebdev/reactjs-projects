import React from 'react';
import './StaticPage.scss';
import logo from './img/logo.svg';

const StaticPageHeader = () => {
  return (
    <div className="static_page__header">
      <div className="container">
        <div className="static_page__header-inner">
          <div className="logo">
            <a className="logo__link" href="#!">
              <img className="logo__img" src={logo} alt="logo" />
            </a>
          </div>

          <div className="static_page__header-title">
            React Course - Project 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaticPageHeader;
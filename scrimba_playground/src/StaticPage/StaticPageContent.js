import React from 'react';
import './StaticPage.scss';

const StaticPageContent = () => {
return (
  <div className="static_page__content">
    <div className="container">
      <h1 className="title__main">
        Fun facts about React
      </h1>

      <ul className="static_page__list">
        <li className="static_page__list-item">
          Was first released in 2013
        </li>
        <li className="static_page__list-item">
          Was originally created by Jordan Walke
        </li>
        <li className="static_page__list-item">
          Has well over 100K stars on GitHub
        </li>
        <li className="static_page__list-item">
          Is maintained by Facebook
        </li>
        <li className="static_page__list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  </div>
  )
}

export default StaticPageContent;
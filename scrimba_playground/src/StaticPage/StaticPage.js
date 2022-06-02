import React from 'react';
import './StaticPage.scss';
import StaticPageContent from './StaticPageContent';
import StaticPageHeader from './StaticPageHeader';

const StaticPage = () => {
  return (
    <div className='static_page'>
      <StaticPageHeader />
      <StaticPageContent />
    </div>
  )
}

export default StaticPage;
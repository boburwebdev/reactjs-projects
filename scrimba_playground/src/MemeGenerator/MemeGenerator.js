import React from 'react';
import MemeGeneratorHeader from './MemeGeneratorHeader';

import './MemeGenerator.scss';
import MemeGeneratorContent from './MemeGeneratorContent';

const MemeGenerator = () => {
  return (
    <div className="meme-generator">
      <MemeGeneratorHeader />
      <MemeGeneratorContent />
    </div>
  )
}

export default MemeGenerator;
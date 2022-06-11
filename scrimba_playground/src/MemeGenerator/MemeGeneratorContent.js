import React, { useState, useEffect } from 'react';
// import MemeGeneratorData from './MemeGeneratorData';

const MemeGeneratorContent = () => {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '', 
    randomImage: ''
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(memesData => {
        setAllMemeImages(memesData.data.memes);
      });
  }, []);



  // Alternative solution using async/await
  //
  // 
  // useEffect(() => {
  //   async function getMemes() {
  //     const res = await fetch(`https://api.imgflip.com/get_memes`)
  //     const memesData= await res.json();
  //     setAllMemeImages(memesData.data.memes);
  //   }

  //   getMemes()
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleClick = () => {
    const randomMeme = getRandomMeme(allMemeImages);
    setMeme(prevMeme => ({...prevMeme, url: randomMeme.url}));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  const getRandomMeme = (arrMemes) => {
    const randomNumber = Math.floor(Math.random() * arrMemes.length);
    return arrMemes[randomNumber];
  }

  return (
    <main className="meme-generator__content">
      <div className="container">
        <h1 className="meme-generator__title">Meme Generator</h1>
        <form className="meme-generator__form" onSubmit={handleSubmit}>
          <input 
            className="meme-generator__form-input"
            placeholder="Text on top" 
            type="text"
            onChange={handleChange}
            name="topText"
            value={meme.topText} />

          <input 
            className="meme-generator__form-input"
            placeholder="Text on bottom" 
            type="text"
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText} />

          <button className="meme-generator__form-button" onClick={handleClick}>
            Get a new meme image
          </button>
        </form>

        {
          meme.url && (
            <div className="meme-generator__img-box">
              <img className="meme-generator__img-item" src={meme.url} alt={meme.name}  />
              <h2 className="meme-generator__img-text meme-generator__img-text--top">{meme.topText}</h2>
              <h2 className="meme-generator__img-text meme-generator__img-text--bottom">{meme.bottomText}</h2>
            </div>
          )
        }
      </div>
    </main>
  )
}

export default MemeGeneratorContent;
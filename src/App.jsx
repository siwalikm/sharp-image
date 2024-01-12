import './sharp-image.js'
import { useState } from 'react'
import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import defaultVal from './assets/images/eg1.jpg';
import example1 from './assets/images/eg2.jpg';
import example2 from './assets/images/default.jpg';
import example3 from './assets/images/eg3.jpg';
import example4 from './assets/images/eg4.jpg';

const checkImage = async (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      if (image.width > 0) {
        resolve(true);
      }
    }
    image.onerror = () => {
      reject(false);
    }
    image.src = url;
  });
}

export const App = () => {
  const [url, setUrl] = useState(defaultVal);

  return (
    <>
      <h2>Fake image sharpening with web components</h2>
      <h2><a href="https://github.com/siwalikm/sharp-image/blob/main/README.md" target='_blank'>Github</a></h2>

      <div style={{
        display: 'flex',
        gap: '8px',
        alignContent: 'flex-start',
        alignItems: 'stretch',
        justifyContent: 'center'
      }}>

        <ReactCompareSlider
          itemOne={<img id="alpha" src={url} />}
          itemTwo={<sharp-image key={url} id="beta" src={url} title="hello" />}
        />
      </div>

      <input type='text' placeholder='Enter an image URL' onChange={async (e) => {
        // setUrl(e.target.value)
        const x = await checkImage(e.target.value)
        if (x) setUrl(e.target.value)
      }} />
      <button onClick={() => setUrl(defaultVal)}>Reset</button>

      <h4>test images</h4>

      <div className='options-grid' style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        cursor: 'pointer'
      }}
        onClick={async (e) => {
          const x = await checkImage(e.target.src)
          if (x) setUrl(e.target.src)
        }}>
        <img src={example1} alt="image 1" />
        <img src={example2} alt="image 2" />
        <img src={example3} alt="image 3" />
        <img src={example4} alt="image 4" />
      </div>

    </>
  )
}

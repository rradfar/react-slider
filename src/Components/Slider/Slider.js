import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

import './Slider.css';

export default function Slider() {
  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div className='slide'>
            <img
              src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
              alt=''
            />
          </div>
        );
      })}
      <BtnSlider />
      <BtnSlider />
    </div>
  );
}

import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

import './Slider.css';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    slideIndex === dataSlider.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };
  const prevSlide = () => {
    slideIndex === 1
      ? setSlideIndex(dataSlider.length)
      : setSlideIndex(slideIndex - 1);
  };

  return (
    <div className='container-slider'>
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
            key={obj.id}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
              alt={`${obj.title}`}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
}

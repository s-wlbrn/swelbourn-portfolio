import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';

import { mod } from '../../libs/mod';

import './ScreenshotCarousel.styles.scss';
import { ScreenshotSlide } from '../ScreenshotSlide/ScreenshotSlide.component';

export const ScreenshotCarousel = ({ screenshots, openModal }) => {
  const [displayArr, setDisplayArr] = useState([0, 1, 2]);
  const [loaded, setLoaded] = useState(true);

  const scrollCarousel = (n) => {
    setLoaded(false);
    const updatedDisplay = displayArr.map((i) => {
      return i + n;
    });

    setTimeout(() => {
      setDisplayArr(updatedDisplay);
      setLoaded(true);
    }, 250);
  };

  return (
    <div className="screenshot-carousel">
      <button
        className="carousel-control-left"
        type="button"
        onClick={() => scrollCarousel(-1)}
      >
        <p className="carousel-scroll-label">Scroll carousel left</p>
        <div className="carousel-arrow-left" />
      </button>
      <ul className={`carousel-content ${loaded ? 'loaded' : ''}`}>
        {displayArr.map((el) => {
          const imageIndex = mod(el, screenshots.length);
          const image = getImage(screenshots[imageIndex].screenshot);

          return (
            <li key={el} className="carousel-slide">
              <ScreenshotSlide
                image={image}
                openModal={() => openModal(imageIndex)}
              />
            </li>
          );
        })}
      </ul>
      <button
        className="carousel-control-right"
        type="button"
        onClick={() => scrollCarousel(1)}
      >
        <p className="carousel-scroll-label">Scroll carousel right</p>
        <div className="carousel-arrow-right" />
      </button>
    </div>
  );
};
